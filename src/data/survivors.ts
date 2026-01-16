import type { Survivor } from "./types";

export const survivors: Survivor[] = [
  // ============================================
  // BASE GAME SURVIVORS (11)
  // ============================================
  {
    id: "commando",
    name: "Commando",
    dlc: "base",
    description:
      "A jack-of-all-trades character that is reliable in all situations.",
  },
  {
    id: "huntress",
    name: "Huntress",
    dlc: "base",
    unlockAchievement: "RepeatFirstTeleporter",
    description:
      "An extremely mobile but fragile survivor with high damage output.",
  },
  {
    id: "mult",
    name: "MUL-T",
    dlc: "base",
    unlockAchievement: "CompleteTeleporterWithoutInjury",
    description:
      "A versatile robot with two equipment slots and swappable abilities.",
  },
  {
    id: "engineer",
    name: "Engineer",
    dlc: "base",
    unlockAchievement: "Complete30StagesCareer",
    description:
      "A survivor that creates turrets and shields to control the battlefield.",
  },
  {
    id: "artificer",
    name: "Artificer",
    dlc: "base",
    unlockAchievement: "FreeMage",
    description:
      "A high burst damage survivor who excels against groups and bosses.",
  },
  {
    id: "mercenary",
    name: "Mercenary",
    dlc: "base",
    unlockAchievement: "CompleteUnknownEnding",
    description:
      "A melee survivor with extreme mobility and invincibility frames.",
  },
  {
    id: "rex",
    name: "REX",
    dlc: "base",
    unlockAchievement: "RescueTreebot",
    description:
      "A plant-robot hybrid that trades health for powerful attacks.",
  },
  {
    id: "loader",
    name: "Loader",
    dlc: "base",
    unlockAchievement: "DefeatSuperRoboBallBoss",
    description:
      "A powerful bruiser with a grappling hook for extreme mobility.",
  },
  {
    id: "acrid",
    name: "Acrid",
    dlc: "base",
    unlockAchievement: "BeatArena",
    description: "A melee-ranged hybrid focused on poison damage over time.",
  },
  {
    id: "captain",
    name: "Captain",
    dlc: "base",
    unlockAchievement: "CompleteMainEnding",
    description: "A support survivor with powerful orbital abilities.",
  },
  {
    id: "bandit",
    name: "Bandit",
    dlc: "base",
    unlockAchievement: "CompleteThreeStages",
    description: "A high-skill combo character with devastating backstabs.",
  },

  // ============================================
  // SURVIVORS OF THE VOID DLC (2)
  // ============================================
  {
    id: "railgunner",
    name: "Railgunner",
    dlc: "sotv",
    description:
      "A long-range sniper that can instantly kill any target from any range.",
  },
  {
    id: "voidfiend",
    name: "Void Fiend",
    dlc: "sotv",
    unlockAchievement: "CompleteVoidEnding",
    description:
      "A corrupted survivor that fluctuates between controlled and corrupted forms.",
  },

  // ============================================
  // SEEKERS OF THE STORM DLC (3)
  // ============================================
  {
    id: "seeker",
    name: "Seeker",
    dlc: "sots",
    description:
      "A meditative mid-range brawler with powerful healing abilities.",
  },
  {
    id: "chef",
    name: "CHEF",
    dlc: "sots",
    unlockAchievement: "ActivateChef",
    description:
      "A culinary master using practiced skills in tandem for extra benefits.",
  },
  {
    id: "falseson",
    name: "False Son",
    dlc: "sots",
    unlockAchievement: "UnlockFalseSon",
    description:
      "A slow but stalwart close-range warrior with extreme health and defense.",
  },

  // ============================================
  // ALLOYED COLLECTIVE DLC (2)
  // ============================================
  {
    id: "operator",
    name: "Operator",
    dlc: "ac",
    description:
      "An evasive frontline commander who uses drones as a force multiplier.",
  },
  {
    id: "drifter",
    name: "Drifter",
    dlc: "ac",
    unlockAchievement: "FreeDrifter",
    description:
      "A unique survivor who bags enemies and provides temporary items.",
  },
];

// Helper to get survivor by ID
export function getSurvivorById(id: string): Survivor | undefined {
  return survivors.find((s) => s.id === id);
}

// Helper to get survivors by DLC
export function getSurvivorsByDLC(dlc: string): Survivor[] {
  if (dlc === "all") return survivors;
  return survivors.filter((s) => s.dlc === dlc);
}

// Helper to get unlockable survivors (those with unlock achievements)
export function getUnlockableSurvivors(): Survivor[] {
  return survivors.filter((s) => s.unlockAchievement !== undefined);
}
