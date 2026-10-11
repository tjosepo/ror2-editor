import { XMLBuilder, XMLParser } from "fast-xml-parser";
import type { RawStat, RawUserProfile, SaveData } from "../data/types";

// Parser configuration for RoR2 save files
const parserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  parseAttributeValue: false,
  parseTagValue: false,
  trimValues: true,
  // Preserve CDATA content
  cdataPropName: "__cdata",
};

// Builder configuration to reconstruct XML
const builderOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  format: true, // Pretty printed
  indentBy: "  ",
  suppressEmptyNode: false,
  cdataPropName: "__cdata",
};

const parser = new XMLParser(parserOptions);
const builder = new XMLBuilder(builderOptions);

/**
 * Parse RoR2 XML save file string into a JavaScript object
 */
export function parseXml(xmlString: string): RawUserProfile {
  try {
    const result = parser.parse(xmlString);
    return result as RawUserProfile;
  } catch (error) {
    throw new Error(
      `Failed to parse XML: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Convert parsed XML object back to XML string
 */
export function serializeXml(data: RawUserProfile): string {
  try {
    // The ?xml declaration is preserved in the parsed object, so builder handles it
    return builder.build(data);
  } catch (error) {
    throw new Error(
      `Failed to serialize XML: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Extract save data from raw parsed XML into a more usable format
 */
export function extractSaveData(raw: RawUserProfile): SaveData {
  const profile = raw.UserProfile;

  // Parse coins (can be string or number)
  const coins =
    typeof profile.coins === "string"
      ? parseInt(profile.coins, 10)
      : typeof profile.coins === "number"
        ? profile.coins
        : 0;

  // Parse space-separated achievement lists
  const achievements = parseSpaceSeparatedList(profile.achievementsList);
  const unviewedAchievements = parseSpaceSeparatedList(
    profile.unviewedAchievementsList,
  );
  const viewedUnlockables = parseSpaceSeparatedList(
    profile.viewedUnlockablesList,
  );

  // Parse logbook fields
  const viewedViewables = parseSpaceSeparatedList(profile.viewedViewables);
  const discoveredPickups = parseSpaceSeparatedList(profile.discoveredPickups);

  // Parse stats into a Map
  const stats = new Map<string, string>();
  if (profile.stats?.stat) {
    const statArray = Array.isArray(profile.stats.stat)
      ? profile.stats.stat
      : [profile.stats.stat];

    for (const stat of statArray) {
      if (stat["@_name"]) {
        stats.set(stat["@_name"], stat["#text"] || "");
      }
    }
  }

  // Parse unlocks from stats section
  let unlocks: string[] = [];
  if (profile.stats?.unlock) {
    unlocks = Array.isArray(profile.stats.unlock)
      ? profile.stats.unlock
      : [profile.stats.unlock];
  }

  return {
    name: profile.name || "Unknown",
    coins,
    achievements,
    unviewedAchievements,
    viewedUnlockables,
    unlocks,
    stats,
    viewedViewables,
    discoveredPickups,
  };
}

/**
 * Apply save data changes back to the raw XML structure
 */
export function applySaveData(
  raw: RawUserProfile,
  saveData: SaveData,
): RawUserProfile {
  const result = structuredClone(raw);

  // Update basic fields
  result.UserProfile.name = saveData.name;
  result.UserProfile.coins = saveData.coins.toString();

  // Update achievement lists (space-separated)
  result.UserProfile.achievementsList = saveData.achievements.join(" ");
  result.UserProfile.unviewedAchievementsList =
    saveData.unviewedAchievements.join(" ");
  result.UserProfile.viewedUnlockablesList =
    saveData.viewedUnlockables.join(" ");

  // Update unlocks in stats section
  if (!result.UserProfile.stats) {
    result.UserProfile.stats = {};
  }
  // Set unlocks array (or single string if only one, or undefined if empty)
  if (saveData.unlocks.length === 0) {
    delete result.UserProfile.stats.unlock;
  } else if (saveData.unlocks.length === 1) {
    result.UserProfile.stats.unlock = saveData.unlocks[0];
  } else {
    result.UserProfile.stats.unlock = saveData.unlocks;
  }

  // Update stats map - merge with existing stats
  const existingStats = result.UserProfile.stats?.stat;
  const existingStatsArray = Array.isArray(existingStats)
    ? existingStats
    : existingStats
      ? [existingStats]
      : [];

  // Build a map of all stats (existing + new/updated from saveData)
  const statsMap = new Map<string, RawStat>();

  // First, add all existing stats
  for (const stat of existingStatsArray) {
    if (stat["@_name"]) {
      statsMap.set(stat["@_name"], stat);
    }
  }

  // Then override/add stats from saveData
  saveData.stats.forEach((value: string, name: string) => {
    statsMap.set(name, {
      "@_name": name,
      "#text": value,
    });
  });

  // Convert map back to array and set in result
  const finalStats = Array.from(statsMap.values());
  if (finalStats.length === 1) {
    result.UserProfile.stats.stat = finalStats[0];
  } else if (finalStats.length > 1) {
    result.UserProfile.stats.stat = finalStats;
  }

  // Update logbook fields (space-separated)
  result.UserProfile.viewedViewables = saveData.viewedViewables.join(" ");
  result.UserProfile.discoveredPickups = saveData.discoveredPickups.join(" ");

  return result;
}

/**
 * Helper to parse space-separated lists (common in RoR2 saves)
 */
function parseSpaceSeparatedList(value: string | undefined): string[] {
  if (!value || typeof value !== "string") return [];
  return value
    .split(" ")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Validate that the XML is a valid RoR2 save file
 */
export function validateSaveFile(xmlString: string): {
  valid: boolean;
  error?: string;
} {
  try {
    const parsed = parseXml(xmlString);

    if (!parsed.UserProfile) {
      return {
        valid: false,
        error: "Not a valid RoR2 save file: Missing UserProfile element",
      };
    }

    // Check for required elements
    const profile = parsed.UserProfile;
    if (profile.coins === undefined) {
      return {
        valid: false,
        error: "Not a valid RoR2 save file: Missing coins element",
      };
    }

    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: `Invalid XML: ${error instanceof Error ? error.message : "Parse error"}`,
    };
  }
}
