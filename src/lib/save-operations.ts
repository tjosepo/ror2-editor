import { challenges } from "../data/challenges";
import { logbookEntries } from "../data/logbook-entries";
import type { LogbookEntry, RawUserProfile, SaveData } from "../data/types";
import {
  applySaveData,
  extractSaveData,
  parseXml,
  serializeXml,
} from "./xml-parser";
import {
  getLogbookEntriesForChallenge,
  getChallengesForLogbookEntry,
  isLogbookEntryProvidedByOtherChallenge,
  shouldDisableChallengeForEntry,
} from "./challenge-logbook-mapping";

/**
 * Load and parse a save file from XML string
 */
export function loadSaveFile(xmlString: string): {
  raw: RawUserProfile;
  saveData: SaveData;
} {
  const raw = parseXml(xmlString);
  const saveData = extractSaveData(raw);
  return { raw, saveData };
}

/**
 * Update lunar coins in save data
 */
export function updateCoins(saveData: SaveData, coins: number): SaveData {
  return {
    ...saveData,
    coins: Math.max(0, coins),
  };
}

/**
 * Check if an achievement is unlocked
 */
export function isAchievementUnlocked(
  saveData: SaveData,
  achievementId: string,
): boolean {
  return saveData.achievements.includes(achievementId);
}

/**
 * Toggle an achievement (unlock or lock)
 * Also syncs related logbook entries (items/equipment)
 */
export function toggleAchievement(
  saveData: SaveData,
  achievementId: string,
  enabled: boolean,
): SaveData {
  const achievements = new Set(saveData.achievements);
  const unviewedAchievements = new Set(saveData.unviewedAchievements);
  const viewedUnlockables = new Set(saveData.viewedUnlockables);
  const unlocks = new Set(saveData.unlocks);
  const viewedViewables = new Set(saveData.viewedViewables);
  const discoveredPickups = new Set(saveData.discoveredPickups);

  // Find the challenge data to get unlocks
  const challenge = challenges.find((c) => c.achievement === achievementId);

  if (enabled) {
    // Add achievement
    achievements.add(achievementId);
    // Add to unviewed (game will show notification)
    unviewedAchievements.add(achievementId);
    // Add unlocks to viewed unlockables and actual unlocks
    if (challenge) {
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.add(unlock);
        unlocks.add(unlock);
      }

      // Sync related logbook entries (items/equipment)
      const relatedEntries = getLogbookEntriesForChallenge(challenge.id);
      for (const entry of relatedEntries) {
        viewedViewables.add(entry.unlockId);
        unlocks.add(entry.unlockId);
        if (entry.pickupId) {
          discoveredPickups.add(entry.pickupId);
        }
      }
    }
  } else {
    // Remove achievement
    achievements.delete(achievementId);
    unviewedAchievements.delete(achievementId);
    // Remove from viewed unlockables and actual unlocks
    if (challenge) {
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.delete(unlock);
        unlocks.delete(unlock);
      }

      // Sync related logbook entries (only if no other challenge provides them)
      const relatedEntries = getLogbookEntriesForChallenge(challenge.id);
      for (const entry of relatedEntries) {
        if (
          !isLogbookEntryProvidedByOtherChallenge(
            entry,
            achievementId,
            achievements,
          )
        ) {
          viewedViewables.delete(entry.unlockId);
          unlocks.delete(entry.unlockId);
          if (entry.pickupId) {
            discoveredPickups.delete(entry.pickupId);
          }
        }
      }
    }
  }

  return {
    ...saveData,
    achievements: Array.from(achievements),
    unviewedAchievements: Array.from(unviewedAchievements),
    viewedUnlockables: Array.from(viewedUnlockables),
    unlocks: Array.from(unlocks),
    viewedViewables: Array.from(viewedViewables),
    discoveredPickups: Array.from(discoveredPickups),
  };
}

/**
 * Unlock all achievements
 * Also syncs all related logbook entries
 */
export function unlockAll(
  saveData: SaveData,
  allowedDLCs?: Record<string, boolean>,
): SaveData {
  const achievements = new Set(saveData.achievements);
  const viewedUnlockables = new Set(saveData.viewedUnlockables);
  const unlocks = new Set(saveData.unlocks);
  const viewedViewables = new Set(saveData.viewedViewables);
  const discoveredPickups = new Set(saveData.discoveredPickups);

  // Add all achievements and their unlocks
  for (const challenge of challenges) {
    // DLC Check
    if (allowedDLCs && challenge.dlc !== "base") {
      if (allowedDLCs[challenge.dlc] === false) continue;
    }

    achievements.add(challenge.achievement);
    for (const unlock of challenge.unlocks) {
      viewedUnlockables.add(unlock);
      unlocks.add(unlock);
    }

    // Sync related logbook entries
    const relatedEntries = getLogbookEntriesForChallenge(challenge.id);
    for (const entry of relatedEntries) {
      viewedViewables.add(entry.unlockId);
      unlocks.add(entry.unlockId);
      if (entry.pickupId) {
        discoveredPickups.add(entry.pickupId);
      }
    }
  }

  const saveDataWithAchievements = {
    ...saveData,
    achievements: Array.from(achievements),
    unviewedAchievements: [], // Clear unviewed since we're bulk unlocking
    viewedUnlockables: Array.from(viewedUnlockables),
    unlocks: Array.from(unlocks),
    viewedViewables: Array.from(viewedViewables),
    discoveredPickups: Array.from(discoveredPickups),
  };

  // NOW UNLOCK ALL LOGBOOK ENTRIES (Monsters, Survivors, Environments, etc.)
  // This ensures stats are populated and non-challenge logs are unlocked.
  return unlockAllLogbook(saveDataWithAchievements, allowedDLCs);
}

/**
 * Lock all achievements (reset to default)
 * Also clears related logbook entries (items/equipment from challenges)
 */
export function lockAll(saveData: SaveData): SaveData {
  // Get all logbook entries that are linked to challenges
  const challengeLinkedLogbookUnlockIds = new Set<string>();
  const challengeLinkedPickupIds = new Set<string>();

  for (const challenge of challenges) {
    const relatedEntries = getLogbookEntriesForChallenge(challenge.id);
    for (const entry of relatedEntries) {
      challengeLinkedLogbookUnlockIds.add(entry.unlockId);
      if (entry.pickupId) {
        challengeLinkedPickupIds.add(entry.pickupId);
      }
    }
  }

  // Remove ALL logbook entries and pickups for a complete reset
  const newStats = new Map(saveData.stats);
  for (const key of newStats.keys()) {
    if (key.startsWith("Logs.") ||
      key.startsWith("timesSummoned.") ||
      key.startsWith("totalTimeAlive.") ||
      key.startsWith("killsAgainst.") ||
      key.startsWith("minionKillsAs.") ||
      key.startsWith("deathsFrom.") ||
      key.startsWith("timesPicked.") ||
      key.startsWith("totalWins.")) {
      newStats.delete(key);
    }
  }

  return {
    ...saveData,
    achievements: [],
    unviewedAchievements: [],
    viewedUnlockables: [],
    unlocks: [],
    viewedViewables: [],
    discoveredPickups: [],
    stats: newStats,
  };
}

/**
 * Get count of unlocked achievements
 */
export function getUnlockedCount(saveData: SaveData): number {
  return saveData.achievements.length;
}

/**
 * Get count of total achievements
 */
export function getTotalCount(): number {
  return challenges.length;
}

/**
 * Generate the modified XML string for download
 */
export function generateModifiedXml(
  originalRaw: RawUserProfile,
  saveData: SaveData,
): string {
  const updatedRaw = applySaveData(originalRaw, saveData);
  return serializeXml(updatedRaw);
}

/**
 * Calculate stats about the current save
 */
export function calculateSaveStats(saveData: SaveData): {
  totalAchievements: number;
  unlockedAchievements: number;
  unlockedSurvivors: number;
  unlockedSkills: number;
  unlockedSkins: number;
  unlockedItems: number;
  unlockedArtifacts: number;
} {
  const unlockedSet = new Set(saveData.achievements);

  let survivors = 0;
  let skills = 0;
  let skins = 0;
  let items = 0;
  let artifacts = 0;
  let validUnlocked = 0;

  for (const challenge of challenges) {
    if (unlockedSet.has(challenge.achievement)) {
      validUnlocked++;
      switch (challenge.category) {
        case "survivors":
          survivors++;
          break;
        case "skills":
          skills++;
          break;
        case "skins":
          skins++;
          break;
        case "items":
          items++;
          break;
        case "artifacts":
          artifacts++;
          break;
      }
    }
  }

  return {
    totalAchievements: challenges.length,
    unlockedAchievements: validUnlocked,
    unlockedSurvivors: survivors,
    unlockedSkills: skills,
    unlockedSkins: skins,
    unlockedItems: items,
    unlockedArtifacts: artifacts,
  };
}

// ============================================
// LOGBOOK OPERATIONS
// ============================================

/**
 * Helper to convert viewable ID to potential internal Body Name (PascalCase)
 */
function getInternalBodyName(viewableId: string): string {
  const lastPart = viewableId.split("/").pop() || "";
  if (!lastPart) return "";

  let clean = lastPart
    .replace(/_BODY_NAME$/, "")
    .replace(/_NAME$/, "")
    .replace(/^MAP_/, "")
    .replace(/_TITLE$/, "");

  // Overrides for special cases
  const overrides: Record<string, string> = {
    "TITANGOLD": "TitanGoldBody",
    "SUPERROBOBALLBOSS": "SuperRoboBallBossBody",

    "ROBOBALLBOSS": "RoboBallBossBody",
    "ROBOBALLMINI": "RoboBallMiniBody",

    // Drones
    "DRONE_BACKUP": "BackupDroneBody",
    "DRONE_BOMBER": "DroneBomberBody",
    "DRONE_DTHEALING": "DTHealingDroneBody",
    "DRONE_CLEANUP": "CleanupDroneBody",
    "DRONE_CHIRP": "ChirpBody",

    // === MONSTER FIXES: MAPPED TO FULL LOG STRINGS ===

    // NO BODY SUFFIX, HAS .0
    "MINIMUSHROOM": "Logs.MiniMushroom.0",
    "PARENT": "Logs.Parent.0",
    "NULLIFIER": "Logs.Nullifier.0", // Void Reaver
    "SCAV": "Logs.Scav.0", // Scavenger
    "LUNARGOLEM": "Logs.LunarGolem.0", // Lunar Chimera (Golem)
    "LUNAREXPLODER": "Logs.LunarExploder.0", // Lunar Chimera (Exploder)
    "LUNARWISP": "Logs.LunarWisp.0", // Lunar Chimera (Wisp)

    // NO BODY SUFFIX, NO .0
    "ACIDLARVA": "Logs.AcidLarva",
    "VOIDMEGACRAB": "Logs.VoidMegaCrab", // Void Devastator

    // HAS BODY SUFFIX, NO .0 (SOTV/Deep Void generally)
    "VOIDINFESTOR": "Logs.VoidInfestorBody",
    "MINORCONSTRUCT": "Logs.MinorConstructBody", // Alpha Construct
    "VOIDBARNACLE": "Logs.VoidBarnacleBody",
    "CLAYGRENADIER": "Logs.ClayGrenadierBody", // Clay Apothecary
    "VOIDJAILER": "Logs.VoidJailerBody",
    "MEGACONSTRUCT": "Logs.MegaConstructBody", // Xi Construct
    "XICONSTRUCT": "Logs.MegaConstructBody",
    "MINIVOIDRAIDCRAB": "Logs.MiniVoidRaidCrab",

    // HAS BODY SUFFIX, HAS .0
    "FLYINGVERMIN": "Logs.FlyingVerminBody.0", // Blind Pest
    "WORKERUNIT": "Logs.WorkerUnitBody.0", // Solus Prospector
    "EXTRACTORUNIT": "Logs.ExtractorUnitBody.0", // Solus Extractor
    "DEFECTIVEUNIT": "Logs.DefectiveUnitBody.0", // Solus Invalidator
    "VULTUREHUNTER": "Logs.VultureHunter.0", // Alloy Hunter
    "SOLUSWING": "Logs.SolusWingBody.0",
    "IRONHAULER": "Logs.IronHaulerBody.0",
    "SOLUSAMALGAMATOR": "Logs.SolusAmalgamatorBody.0",
    "FALSESONBOSS": "Logs.FalseSonBossBody.0",

    // OTHERS
    "SOLUSHEART": "Log.SolusHeart",
    "MINEPOD": "Logs.MinePodBody", // Solus Distributor
    "ELECTRICWORM": "Logs.ElectricWormBody.0",
    "MAGMAWORM": "Logs.MagmaWormBody.0",
    "IMPBOSS": "Logs.ImpBossBody.0",
    "BEETLEQUEEN": "Logs.BeetleQueenBody.0",
    "CLAYBOSS": "Logs.ClayBossBody.0",
    "BEETLEGUARD": "Logs.BeetleGuardBody.0",
    "GREATERWISP": "Logs.GreaterWispBody.0",
    "LEMURIANBRUISER": "Logs.LemurianBruiserBody.0",
    "CLAYBRUISER": "Logs.ClayBruiserBody.0", // Clay Templar

    // Survivors
    "VOIDSURVIVOR": "VoidSurvivorBody", // Void Fiend
    "DRONETECH": "DroneTechBody", // Operator
    "FALSESON": "FalseSonBody",
    "CHEF": "ChefBody",

    // Environment Fixes
    "DAMPCAVE": "dampcavesimple", // Abyssal Depths
  };

  if (overrides[clean]) return overrides[clean];

  // Convert UNDERSCORE_CASE to PascalCase
  return clean.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join('');
}

/**
 * Check if a logbook entry is unlocked
 */
export function isLogbookEntryUnlocked(
  saveData: SaveData,
  entry: LogbookEntry,
): boolean {
  // Check in stats.unlock for monster/environment/survivor logs (Logs.X format)
  if (saveData.unlocks.includes(entry.unlockId)) {
    return true;
  }

  // Check viewedViewables for viewed entries (exact match /Logbook/...)
  if (saveData.viewedViewables.includes(entry.unlockId)) {
    return true;
  }

  // Check aliases from getLogbookAliases
  const aliases = getLogbookAliases(entry.unlockId);
  if (aliases.some((alias) => saveData.viewedViewables.includes(alias))) {
    return true;
  }

  // Check viewedViewables with /Logbook/ format conversion (legacy check)
  const viewableId = convertToViewableId(entry);
  if (viewableId && saveData.viewedViewables.includes(viewableId)) {
    return true;
  }

  // Check discoveredPickups for items/equipment/drones
  if (entry.pickupId && saveData.discoveredPickups.includes(entry.pickupId)) {
    return true;
  }

  // For drones without pickupId, try DroneIndex format
  if (entry.category === "drones" && !entry.pickupId) {
    const dronePickupId = getDronePickupId(entry.unlockId);
    if (dronePickupId && saveData.discoveredPickups.includes(dronePickupId)) {
      return true;
    }
  }

  // IMPROVED FAILSAFE: Check stats (kills/time alive/Logs.X) for entries
  if (saveData.stats && saveData.stats instanceof Map) {
    let bodyName = "";

    // Try to extract body name from Logs.X format
    if (entry.unlockId.startsWith("Logs.")) {
      const parts = entry.unlockId.split(".");
      if (parts.length >= 2) {
        bodyName = parts[1].replace(/\.0$/, "");
      }
    }
    // If it's a Viewable path /Logbook/.../BODY_NAME
    else if (entry.unlockId.includes("/Logbook/")) {
      bodyName = getInternalBodyName(entry.unlockId);
    }

    if (bodyName) {
      // If the bodyName contains the full log string (from getInternalBodyName override), check it directly
      if (bodyName.startsWith("Logs.") || bodyName.startsWith("Log.")) {
        if (saveData.unlocks.includes(bodyName)) return true;
      } else {
        // Default fallback: Construct Logs.NAMEBody.0
        const logStat = `Logs.${bodyName}Body.0`;
        if (saveData.stats.has(logStat) || saveData.unlocks.includes(logStat)) return true;
      }

      // REMOVED: Do not assume logbook is unlocked just because stats exist.
      // Monster logs require specific logbook drops.
      // Survivors might have stats but not the specific log entry unlocked.
      // Relying on Logs.X and viewedViewables is more accurate.
    }
  }

  return false;
}

/**
 * Convert unlockId to viewedViewables format
 */
function convertToViewableId(entry: LogbookEntry): string | null {
  const { category, unlockId } = entry;

  // Extract body name from unlockId (e.g., Logs.BeetleBody.0 -> BEETLE)
  // Handle some special cases where Body suffix might differ or not exist
  const bodyMatch = unlockId.match(/Logs\.(.+?)(?:Body)?(?:\.0)?$/);
  // Also handle Logs.Stages.xxx
  const stageMatch = unlockId.match(/Logs\.Stages\.(.+)$/);

  if (stageMatch && category === "environments") {
    return `/Logbook/LOGBOOK_CATEGORY_STAGE/MAP_${stageMatch[1].toUpperCase()}_TITLE`;
  }

  if (!bodyMatch) return null;

  let bodyName = bodyMatch[1].toUpperCase();
  // Clean up any remaining "Body" if regex didn't catch it properly or double body
  bodyName = bodyName.replace(/BODY$/, "");

  // Special mappings for known mismatches between Logs.X and /Logbook/X
  const specialMappings: Record<string, string> = {
    // Survivors
    "OPERATOR": "DRONETECH",
    "BANDIT2": "BANDIT2",
    "MULT": "TOOLBOT",
    "ENGI": "ENGI",
    "MAGE": "MAGE",
    "MERC": "MERC",
    "REX": "TREEBOT",
    "LOADER": "LOADER",
    "ACRID": "CROCO",
    "VOIDFIEND": "VOIDSURVIVOR",

    // Drones
    "DRONE1": "GUNNER",
    "DRONE2": "HEALING",
    "TURRET1": "TURRET1",
    "FLAMEDRONE": "FLAMEDRONE",
    "MEGADRONE": "MEGA",
    "DRONECOMMANDER": "COMMANDER",
    "HAULERDRONE": "HAULER",
    "JUNKDRONE": "JUNK",
    "CLEANUPDRONE": "CLEANUP",
    "DRONEBOMBER": "BOMBER",
    "DTGUNNERDRONE": "DTGUNNER",
    "DTHAULERDRONE": "DTHAULER",
    "DTHEALINGDRONE": "DTHEALING",
    "JAILERDRONE": "JAILER",
    "RECHARGEDRONE": "RECHARGE",
    "BOMBARDMENTDRONE": "BOMBARDMENT",
    "COPYCATDRONE": "COPYCAT",
    "EMERGENCYDRONE": "EMERGENCYDRONE",
    "EQUIPMENTDRONE": "EQUIPMENTDRONE",

    // Monsters
    "MINORCONSTRUCT": "MINORCONSTRUCT",
    "XICONSTRUCT": "MEGACONSTRUCT",
    "ACIDLARVA": "ACIDLARVA",
    "VOIDMEGACRAB": "VOIDMEGACRAB",
    "SOLUSPROBE": "ROBOALLMINI",
    "SOLUSCONTROLUNIT": "ROBOBALLBOSS",
    "ALLOYWORSHIPUNIT": "SUPERROBOBALLBOSS",
    "CHILD": "CHILD",
    "SCORCHLING": "SCORCHLING",
    "HALCYONITE": "HALCYONITE",
    "FALSESONBOSS": "FALSESON_BOSS",
  };

  if (specialMappings[bodyName]) {
    bodyName = specialMappings[bodyName];
  }

  switch (category) {
    case "monsters":
      return `/Logbook/LOGBOOK_CATEGORY_MONSTER/${bodyName}_BODY_NAME`;
    case "survivors":
      return `/Logbook/LOGBOOK_CATEGORY_SURVIVOR/${bodyName}_BODY_NAME`;
    case "drones":
      // Check if it matches the emergency/equipment/flame/etc pattern which generally use direct name or DRONE_ prefix
      if (["EMERGENCYDRONE", "EQUIPMENTDRONE", "FLAMEDRONE", "MEGADRONE"].includes(bodyName)) {
        return `/Logbook/LOGBOOK_CATEGORY_DRONE/${bodyName}_BODY_NAME`;
      }
      return `/Logbook/LOGBOOK_CATEGORY_DRONE/DRONE_${bodyName}_BODY_NAME`;
    default:
      return null;
  }
}

/**
 * Mapping of "Main" Logbook IDs to their "Alias" IDs (e.g. /Survivors/X)
 * The game seems to require both for some survivors to show up properly as "viewed"
 * or to not break certain menus.
 */
const LOGBOOK_ALIASES: Record<string, string[]> = {
  // Survivors (Legacy Format)
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/COMMANDO_BODY_NAME": ["/Survivors/Commando"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/HUNTRESS_BODY_NAME": ["/Survivors/Huntress"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/BANDIT2_BODY_NAME": ["/Survivors/Bandit2"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/TOOLBOT_BODY_NAME": ["/Survivors/Toolbot"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/ENGI_BODY_NAME": ["/Survivors/Engi"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/MAGE_BODY_NAME": ["/Survivors/Mage"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/MERC_BODY_NAME": ["/Survivors/Merc"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/TREEBOT_BODY_NAME": ["/Survivors/Treebot"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/LOADER_BODY_NAME": ["/Survivors/Loader"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CROCO_BODY_NAME": ["/Survivors/Croco"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CAPTAIN_BODY_NAME": ["/Survivors/Captain"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/RAILGUNNER_BODY_NAME": ["/Survivors/Railgunner"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/VOIDSURVIVOR_BODY_NAME": ["/Survivors/VoidSurvivor"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/SEEKER_BODY_NAME": ["/Survivors/Seeker"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/FALSESON_BODY_NAME": ["/Survivors/FalseSon"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CHEF_BODY_NAME": ["/Survivors/Chef"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/DRONETECH_BODY_NAME": ["/Survivors/DroneTech"],
  "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/DRIFTER_BODY_NAME": ["/Survivors/Drifter"],
};

function getLogbookAliases(mainId: string): string[] {
  return LOGBOOK_ALIASES[mainId] || [];
}

/**
 * Get DroneIndex pickup ID from drone unlockId
 */
function getDronePickupId(unlockId: string): string | null {
  const droneMap: Record<string, string> = {
    "Logs.Drone1Body.0": "DroneIndex.Drone1",
    "Logs.Drone2Body.0": "DroneIndex.Drone2",
    "Logs.Turret1Body.0": "DroneIndex.Turret1",
    "Logs.EmergencyDroneBody.0": "DroneIndex.EmergencyDrone",
    "Logs.EquipmentDroneBody.0": "DroneIndex.EquipmentDrone",
    "Logs.FlameDroneBody.0": "DroneIndex.FlameDrone",
    "Logs.MissileDroneBody.0": "DroneIndex.MissileDrone",
    "Logs.MegaDroneBody.0": "DroneIndex.MegaDrone",
    "Logs.DroneCommanderBody.0": "DroneIndex.DroneCommander",
    "Logs.HaulerDroneBody.0": "DroneIndex.HaulerDrone",
    "Logs.JunkDroneBody.0": "DroneIndex.JunkDrone",
    "Logs.BestBuddyBody.0": "DroneIndex.BestBuddy",
    "Logs.CleanupDroneBody.0": "DroneIndex.CleanupDrone",
    "Logs.DroneBomberBody.0": "DroneIndex.DroneBomber",
    "Logs.DTGunnerDroneBody.0": "DroneIndex.DTGunnerDrone",
    "Logs.DTHaulerDroneBody.0": "DroneIndex.DTHaulerDrone",
    "Logs.DTHealingDroneBody.0": "DroneIndex.DTHealingDrone",
    "Logs.JailerDroneBody.0": "DroneIndex.JailerDrone",
    "Logs.RechargeDroneBody.0": "DroneIndex.RechargeDrone",
    "Logs.BombardmentDroneBody.0": "DroneIndex.BombardmentDrone",
    "Logs.CopycatDroneBody.0": "DroneIndex.CopycatDrone",
    "Logs.LtDroneboyBody.0": "DroneIndex.LtDroneboy",
    "Logs.CrosshairsBody.0": "DroneIndex.Crosshairs",
    "Logs.ChirpBody.0": "DroneIndex.Chirp",
    "Logs.DocBody.0": "DroneIndex.Doc",
    "Logs.BarrierDroneBody.0": "DroneIndex.BarrierDrone",
    "Logs.FreezeDroneBody.0": "DroneIndex.FreezeDrone",
    "Logs.BackupDroneBody.0": "DroneIndex.BackupDrone",
    "DroneIndex.Drone1": "DroneIndex.Drone1",
  };
  return droneMap[unlockId] || null;
}

/**
 * Helper to update stats and unlocks for a specific logbook entry.
 * Centralizes logic for Monsters, Drones, Stages, etc. that require specific 'Logs.' entries and stats.
 */
function updateLogbookStats(
  entry: LogbookEntry,
  enabled: boolean,
  unlocks: Set<string>,
  stats: Map<string, string>
): void {
  // Extract body name or identifier
  let bodyName = "";
  let fullLogString = "";

  if (entry.unlockId.startsWith("Logs.")) {
    // Already in Logs. format?
    // Actually logbook-entries sometimes has "Logs.X" which might be wrong.
    // But we rely on getInternalBodyName for the TRUTH now.
    // If overrides has it, use that.
    const overrideName = getInternalBodyName(entry.unlockId); // This might return "Logs.X"
    if (overrideName && (overrideName.startsWith("Logs.") || overrideName.startsWith("Log."))) {
      fullLogString = overrideName;
      // Extract basic body name for stats if possible
      bodyName = overrideName.replace(/^Logs\./, "").replace(/^Log\./, "").replace(/\.0$/, "");
    } else {
      // Default behavior for things not in overrides
      const parts = entry.unlockId.split(".");
      if (parts.length >= 2) {
        bodyName = parts[1].replace(/\.0$/, "").replace(/Body$/, "");
      }
    }
  } else {
    // Convert from logbook path
    const internal = getInternalBodyName(entry.unlockId);
    if (internal.startsWith("Logs.") || internal.startsWith("Log.")) {
      fullLogString = internal;
      bodyName = internal.replace(/^Logs\./, "").replace(/^Log\./, "").replace(/\.0$/, "");
    } else {
      bodyName = internal;
    }
  }

  if (!bodyName && !fullLogString) return;

  if (enabled) {
    if (entry.category === "environments") {
      const stageName = bodyName.toLowerCase();

      // Handle special stages with multiple variants or indices
      const stagesToUnlock = [stageName];

      // Bulwark's Ambry (artifactworld) usually has indices 01, 02, 03, 04 or just 0,1,2,3
      // The game typically tracks Logs.Stages.artifactworld, but also may track specific indices for completion?
      // Based on user report "Bulwark's Ambry (2)", "Hidden Realm: Bulwark's Ambry (4)", let's unlock variants.
      if (stageName.includes("artifactworld")) {
        stagesToUnlock.push("artifactworld01", "artifactworld02", "artifactworld03", "artifactworld04");
      }
      // Moon (Commencement) - user reported missing. Ensure 'moon2' is covered.
      if (stageName === "moon" || stageName === "moon2") {
        stagesToUnlock.push("moon2");
      }

      for (const stage of stagesToUnlock) {
        const stageUnlock = `Logs.Stages.${stage}`;
        unlocks.add(stageUnlock);
        // Add stats for environment to ensure it counts as visited/unlocked
        stats.set(`totalTimesVisited.${stage}`, "1");
        stats.set(`totalTimesCleared.${stage}`, "1");
      }
    } else if (entry.category === "monsters" || entry.category === "survivors" || entry.category === "drones") {
      let logUnlock = fullLogString;

      if (!logUnlock) {
        // Default Logs.Name.0 construction if no exact override was found
        let logBodyName = bodyName;

        // Heuristic: Append Body if it doesn't have it and isn't a known "No Body" case?
        // But our Overrides should cover the "No Body" cases now!
        // So if we are here, it's likely a vanilla/standard one that WANTS Body.
        if (!logBodyName.endsWith("Body")) {
          logBodyName = `${logBodyName}Body`;
        }
        logUnlock = `Logs.${logBodyName}.0`;
      }

      unlocks.add(logUnlock);

      // Add extra stats based on category
      // For stats, we usually want "Body" suffix.
      let statBodyName = bodyName;
      if (!statBodyName.endsWith("Body") && !fullLogString.includes("SolusHeart")) {
        statBodyName = `${statBodyName}Body`;
      }

      // Special: stats for "AcidLarva"? totalTimeAlive.AcidLarvaBody (Yes, confirmed).

      if (logUnlock === "Log.SolusHeart") return; // No stats for this

      if (entry.category === "drones") {
        stats.set(`timesSummoned.${statBodyName}`, "1");
        stats.set(`totalTimeAlive.${statBodyName}`, "1");
      } else if (entry.category === "monsters") {
        stats.set(`killsAgainst.${statBodyName}`, "1");
        stats.set(`deathsFrom.${statBodyName}`, "0");

        // Special handling for multi-phase bosses or complex stats
        if (logUnlock === "Logs.MiniVoidRaidCrab") {
          stats.set("killsAgainst.MiniVoidRaidCrabBodyBase", "1");
          stats.set("killsAgainst.MiniVoidRaidCrabBodyPhase1", "1");
          stats.set("killsAgainst.MiniVoidRaidCrabBodyPhase2", "1");
          stats.set("killsAgainst.MiniVoidRaidCrabBodyPhase3", "1");
        }
      } else if (entry.category === "survivors") {
        stats.set(`totalTimeAlive.${statBodyName}`, "1");
        stats.set(`timesPicked.${statBodyName}`, "1");
        stats.set(`totalWins.${statBodyName}`, "1");
      }
    }
  } else {
    if (entry.category === "environments") {
      const stageName = bodyName.toLowerCase();

      const stagesToUnlock = [stageName];
      if (stageName.includes("artifactworld")) {
        stagesToUnlock.push("artifactworld01", "artifactworld02", "artifactworld03", "artifactworld04");
      }
      if (stageName === "moon" || stageName === "moon2") {
        stagesToUnlock.push("moon2");
      }

      for (const stage of stagesToUnlock) {
        const stageUnlock = `Logs.Stages.${stage}`;
        unlocks.delete(stageUnlock);
        stats.delete(stageUnlock); // Delete key if incorrectly present
      }
    } else if (entry.category === "monsters" || entry.category === "survivors" || entry.category === "drones") {
      let logUnlock = fullLogString;

      if (!logUnlock) {
        let logBodyName = bodyName;
        if (!logBodyName.endsWith("Body")) {
          logBodyName = `${logBodyName}Body`;
        }
        logUnlock = `Logs.${logBodyName}.0`;
      }

      unlocks.delete(logUnlock);

      let statBodyName = bodyName;
      if (!statBodyName.endsWith("Body") && !fullLogString.includes("SolusHeart")) {
        statBodyName = `${statBodyName}Body`;
      }
      if (logUnlock === "Log.SolusHeart") return;

      if (entry.category === "drones") {
        stats.delete(`timesSummoned.${statBodyName}`);
        stats.delete(`totalTimeAlive.${statBodyName}`);
      } else if (entry.category === "monsters") {
        stats.delete(`killsAgainst.${statBodyName}`);
        stats.delete(`deathsFrom.${statBodyName}`);
      } else if (entry.category === "survivors") {
        stats.delete(`totalTimeAlive.${statBodyName}`);
        stats.delete(`timesPicked.${statBodyName}`);
        stats.delete(`totalWins.${statBodyName}`);
      }
    }
  }
}

export function toggleLogbookEntry(
  saveData: SaveData,
  entry: LogbookEntry,
  enabled: boolean,
): SaveData {
  const unlocks = new Set(saveData.unlocks);
  const viewedViewables = new Set(saveData.viewedViewables);
  const discoveredPickups = new Set(saveData.discoveredPickups);
  const achievements = new Set(saveData.achievements);
  const unviewedAchievements = new Set(saveData.unviewedAchievements);
  const viewedUnlockables = new Set(saveData.viewedUnlockables);
  const stats = new Map(saveData.stats);

  if (enabled) {
    // Add to unlocks (for logs)
    unlocks.add(entry.unlockId);
    // Add to viewedViewables (marks as viewed)
    viewedViewables.add(entry.unlockId);
    // Add to discoveredPickups if item/equipment
    if (entry.pickupId) {
      discoveredPickups.add(entry.pickupId);
    }

    // Sync related challenges (for items/equipment entries)
    const relatedChallenges = getChallengesForLogbookEntry(entry.id);
    for (const challenge of relatedChallenges) {
      achievements.add(challenge.achievement);
      unviewedAchievements.add(challenge.achievement);
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.add(unlock);
        unlocks.add(unlock);
      }
      // Also unlock other logbook entries from this challenge
      const otherEntries = getLogbookEntriesForChallenge(challenge.id);
      for (const otherEntry of otherEntries) {
        viewedViewables.add(otherEntry.unlockId);
        unlocks.add(otherEntry.unlockId);
        if (otherEntry.pickupId) {
          discoveredPickups.add(otherEntry.pickupId);
        }
      }
    }

    // Add aliases
    const aliases = getLogbookAliases(entry.unlockId);
    aliases.forEach(alias => viewedViewables.add(alias));

    // INJECT LOGS UNLOCKS (CRITICAL: Game needs these in <unlock> section!)
    updateLogbookStats(entry, true, unlocks, stats);
  } else {
    // ... disable logic ...

    // IMPORTANT: Check which challenges to disable BEFORE removing entries
    // This ensures shouldDisableChallengeForEntry sees accurate state
    const relatedChallenges = getChallengesForLogbookEntry(entry.id);
    const challengesToDisable = relatedChallenges.filter(challenge =>
      shouldDisableChallengeForEntry(challenge, entry, viewedViewables)
    );

    // Now remove the entry from all collections
    unlocks.delete(entry.unlockId);
    viewedViewables.delete(entry.unlockId);

    // Remove aliases
    const aliases = getLogbookAliases(entry.unlockId);
    aliases.forEach(alias => viewedViewables.delete(alias));

    if (entry.pickupId) {
      discoveredPickups.delete(entry.pickupId);
    }

    // Remove Logs.* format unlock if applicable
    updateLogbookStats(entry, false, unlocks, stats);

    // Disable the determined challenges
    for (const challenge of challengesToDisable) {
      achievements.delete(challenge.achievement);
      unviewedAchievements.delete(challenge.achievement);
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.delete(unlock);
        unlocks.delete(unlock);
      }
      // Also remove other logbook entries from this challenge
      const otherEntries = getLogbookEntriesForChallenge(challenge.id);
      for (const otherEntry of otherEntries) {
        viewedViewables.delete(otherEntry.unlockId);
        unlocks.delete(otherEntry.unlockId);
        if (otherEntry.pickupId) {
          discoveredPickups.delete(otherEntry.pickupId);
        }
      }
    }
  }

  return {
    ...saveData,
    achievements: Array.from(achievements),
    unviewedAchievements: Array.from(unviewedAchievements),
    viewedUnlockables: Array.from(viewedUnlockables),
    unlocks: Array.from(unlocks),
    viewedViewables: Array.from(viewedViewables),
    discoveredPickups: Array.from(discoveredPickups),
    stats,
  };
}

/**
 * Unlock all logbook entries
 * Also syncs all related challenges (for items/equipment)
 */
export function unlockAllLogbook(
  saveData: SaveData,
  allowedDLCs?: Record<string, boolean>,
): SaveData {
  const unlocks = new Set(saveData.unlocks);
  const viewedViewables = new Set(saveData.viewedViewables);
  const discoveredPickups = new Set(saveData.discoveredPickups);
  const achievements = new Set(saveData.achievements);
  const viewedUnlockables = new Set(saveData.viewedUnlockables);
  const stats = new Map(saveData.stats);

  for (const entry of logbookEntries) {
    // DLC Check
    if (allowedDLCs && entry.dlc !== "base") {
      if (allowedDLCs[entry.dlc] === false) continue;
    }

    unlocks.add(entry.unlockId);
    viewedViewables.add(entry.unlockId);
    if (entry.pickupId) {
      discoveredPickups.add(entry.pickupId);
    }

    // Sync related challenges (for items/equipment)
    const relatedChallenges = getChallengesForLogbookEntry(entry.id);
    for (const challenge of relatedChallenges) {
      // Also check DLC for the linked challenge, just in case
      if (allowedDLCs && challenge.dlc !== "base") {
        if (allowedDLCs[challenge.dlc] === false) continue;
      }

      achievements.add(challenge.achievement);
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.add(unlock);
        unlocks.add(unlock);
      }
    }

    // Add aliases
    const aliases = getLogbookAliases(entry.unlockId);
    aliases.forEach((alias) => viewedViewables.add(alias));

    // Inject Logs.* stats
    updateLogbookStats(entry, true, unlocks, stats);
  }

  return {
    ...saveData,
    achievements: Array.from(achievements),
    unviewedAchievements: [], // Clear unviewed since we're bulk unlocking
    viewedUnlockables: Array.from(viewedUnlockables),
    unlocks: Array.from(unlocks),
    viewedViewables: Array.from(viewedViewables),
    discoveredPickups: Array.from(discoveredPickups),
    stats,
  };
}

/**
 * Lock all logbook entries
 * Also locks challenges that only unlock items/equipment (no other unlocks)
 */
export function lockAllLogbook(saveData: SaveData): SaveData {
  const currentUnlocks = new Set(saveData.unlocks);
  const currentViewedViewables = new Set(saveData.viewedViewables);
  const currentDiscoveredPickups = new Set(saveData.discoveredPickups);
  const achievements = new Set(saveData.achievements);
  const unviewedAchievements = new Set(saveData.unviewedAchievements);
  const viewedUnlockables = new Set(saveData.viewedUnlockables);
  const currentStats = new Map(saveData.stats);

  // Track challenges that should be disabled
  const challengesToDisable = new Set<string>();

  // Remove only logbook-related entries, preserve others
  for (const entry of logbookEntries) {
    currentUnlocks.delete(entry.unlockId);
    currentViewedViewables.delete(entry.unlockId);

    // Remove aliases
    const aliases = getLogbookAliases(entry.unlockId);
    aliases.forEach(alias => currentViewedViewables.delete(alias));

    // Remove Logs.* keys from unlocks
    let bodyName = "";
    let fullLogString = "";

    if (entry.unlockId.startsWith("Logs.")) {
      const parts = entry.unlockId.split(".");
      if (parts.length >= 2) {
        bodyName = parts[1].replace(/\.0$/, "").replace(/Body$/, "");
      }
    } else {
      const internal = getInternalBodyName(entry.unlockId);
      if (internal.startsWith("Logs.") || internal.startsWith("Log.")) {
        fullLogString = internal;
        bodyName = internal.replace(/^Logs\./, "").replace(/^Log\./, "").replace(/\.0$/, "");
      } else {
        bodyName = internal;
      }
    }

    if (bodyName || fullLogString) {
      let key = fullLogString;

      if (entry.category === "environments") {
        const stageName = bodyName.toLowerCase();
        key = `Logs.Stages.${stageName}`;
      } else if (["monsters", "survivors", "drones"].includes(entry.category)) {
        if (!key) {
          key = `Logs.${bodyName}Body.0`;
        }

        if (entry.category === "drones") {
          // Check for "Body" suffix in bodyName logic, usually we might have stripped it or it wasn't there.
          // The stats usually need "Body".
          // If bodyName came from fullLogString cleaning, it might still have Body if we didn't strip it? 
          // logic above: replace(/Body$/, "") removed it from split, but my new logic:
          // bodyName = internal.replace...  I didn't strip Body there in my implementation plan thought process but let's check what I wrote above.
          // "bodyName = internal.replace(/^Logs\./, "").replace(/^Log\./, "").replace(/\.0$/, "");"
          // MagmaWormBody -> MagmaWormBody. 
          // So it HAS Body.

          // Current code expects:
          // currentStats.delete(`timesSummoned.${bodyName}Body`); 
          // If bodyName has Body, this becomes MagmaWormBodyBody.

          // Let's normalize bodyName to NOT have Body if we are going to append it, OR verify.
          // A safer way is to strip Body from local variable for stat usage.

          let statBodyName = bodyName;
          if (statBodyName.endsWith("Body")) {
            statBodyName = statBodyName.slice(0, -4);
          }

          currentStats.delete(`timesSummoned.${statBodyName}Body`);
          currentStats.delete(`totalTimeAlive.${statBodyName}Body`);
        } else if (entry.category === "monsters") {
          let statBodyName = bodyName;
          if (statBodyName.endsWith("Body")) {
            statBodyName = statBodyName.slice(0, -4);
          }
          currentStats.delete(`killsAgainst.${statBodyName}Body`);
          currentStats.delete(`deathsFrom.${statBodyName}Body`);
        } else if (entry.category === "survivors") {
          let statBodyName = bodyName;
          if (statBodyName.endsWith("Body")) {
            statBodyName = statBodyName.slice(0, -4);
          }
          currentStats.delete(`totalTimeAlive.${statBodyName}Body`);
          currentStats.delete(`timesPicked.${statBodyName}Body`);
          currentStats.delete(`totalWins.${statBodyName}Body`);
        }
      }

      if (key) {
        currentUnlocks.delete(key);
        currentStats.delete(key);
      }
    }

    if (entry.pickupId) {
      currentDiscoveredPickups.delete(entry.pickupId);
    }

    // Find challenges to disable
    const relatedChallenges = getChallengesForLogbookEntry(entry.id);
    for (const challenge of relatedChallenges) {
      challengesToDisable.add(challenge.achievement);
    }
  }

  // Disable the related challenges
  for (const achievementId of challengesToDisable) {
    achievements.delete(achievementId);
    unviewedAchievements.delete(achievementId);
    const challenge = challenges.find((c) => c.achievement === achievementId);
    if (challenge) {
      for (const unlock of challenge.unlocks) {
        viewedUnlockables.delete(unlock);
        currentUnlocks.delete(unlock);
      }
    }
  }

  return {
    ...saveData,
    achievements: Array.from(achievements),
    unviewedAchievements: Array.from(unviewedAchievements),
    viewedUnlockables: Array.from(viewedUnlockables),
    unlocks: Array.from(currentUnlocks),
    viewedViewables: Array.from(currentViewedViewables),
    discoveredPickups: Array.from(currentDiscoveredPickups),
    stats: currentStats,
  };
}

/**
 * Calculate logbook statistics
 */
export function calculateLogbookStats(saveData: SaveData): {
  totalEntries: number;
  unlockedEntries: number;
  monsters: { total: number; unlocked: number };
  environments: { total: number; unlocked: number };
  survivors: { total: number; unlocked: number };
  items: { total: number; unlocked: number };
  equipment: { total: number; unlocked: number };
  drones: { total: number; unlocked: number };
} {
  const stats = {
    totalEntries: logbookEntries.length,
    unlockedEntries: 0,
    monsters: { total: 0, unlocked: 0 },
    environments: { total: 0, unlocked: 0 },
    survivors: { total: 0, unlocked: 0 },
    items: { total: 0, unlocked: 0 },
    equipment: { total: 0, unlocked: 0 },
    drones: { total: 0, unlocked: 0 },
  };

  for (const entry of logbookEntries) {
    stats[entry.category].total++;
    if (isLogbookEntryUnlocked(saveData, entry)) {
      stats[entry.category].unlocked++;
      stats.unlockedEntries++;
    }
  }

  return stats;
}
