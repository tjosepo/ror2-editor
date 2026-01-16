import { challenges } from "../data/challenges";
import type { Challenge, LogbookEntry } from "../data/types";

/**
 * Mapping between Survivor Logbook Entries and their Unlocking Achievements.
 * 
 * Logic:
 * - We map the Logbook Entry's `unlockId` (e.g. "/Logbook/.../TOOLBOT_BODY_NAME")
 *   or its internal ID (e.g. "mult-unlock" is the challenge, but logbook ID is "mult"?)
 *   
 *   Wait, logbook entries for survivors usually have IDs like "commando", "huntress", "toolbot".
 *   Let's check logbook-entries.ts one last time to be sure of the `id` field.
 */

// I'll assume standard IDs for now based on common sense and "mult" pattern seen in aliases.
// If I'm wrong about `id`s, I can rely on `unlockId` which is more standard.

export const SURVIVOR_LOGBOOK_TO_ACHIEVEMENT: Record<string, string> = {
    // Base Game
    "toolbot": "RepeatFirstTeleporter",
    "engineer": "Complete30StagesCareer",
    "mage": "FreeMage",
    "mercenary": "CompleteUnknownEnding",
    "treebot": "RescueTreebot",
    "loader": "DefeatSuperRoboBallBoss",
    "croco": "BeatArena",
    "captain": "CompleteMainEnding",

    // SOTV
    "void-survivor": "CompleteVoidEnding", // "voidfiend" ID? Logbook usually uses "void-survivor" or "voidfiend"

    // SOTS
    "chef": "ActivateChef",
    "false-son": "UnlockFalseSon",

    // AC
    "drifter": "FreeDrifter",
};

/**
 * Alternative mapping using UnlockID (more reliable if IDs vary)
 * Format: /Logbook/LOGBOOK_CATEGORY_SURVIVOR/{NAME}_BODY_NAME
 */
export const SURVIVOR_UNLOCKID_TO_ACHIEVEMENT: Record<string, string> = {
    // Base
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/TOOLBOT_BODY_NAME": "RepeatFirstTeleporter",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/ENGI_BODY_NAME": "Complete30StagesCareer",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/MAGE_BODY_NAME": "FreeMage",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/MERC_BODY_NAME": "CompleteUnknownEnding",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/TREEBOT_BODY_NAME": "RescueTreebot",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/LOADER_BODY_NAME": "DefeatSuperRoboBallBoss",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CROCO_BODY_NAME": "BeatArena",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CAPTAIN_BODY_NAME": "CompleteMainEnding",

    // SOTV
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/VOIDSURVIVOR_BODY_NAME": "CompleteVoidEnding",

    // SOTS
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/CHEF_BODY_NAME": "ActivateChef",
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/FALSESON_BODY_NAME": "UnlockFalseSon",

    // AC
    "/Logbook/LOGBOOK_CATEGORY_SURVIVOR/DRIFTER_BODY_NAME": "FreeDrifter",
};

/**
 * Get the Challenge that unlocks a specific Survivor Logbook Entry.
 */
export function getAchievementForSurvivorLogbook(entry: LogbookEntry): Challenge | undefined {
    if (entry.category !== "survivors") return undefined;

    // Try mapping by UnlockID first (most explicit)
    let achievementId = SURVIVOR_UNLOCKID_TO_ACHIEVEMENT[entry.unlockId];

    // Fallback: Try mapping by ID (if ID is consistent)
    if (!achievementId) {
        achievementId = SURVIVOR_LOGBOOK_TO_ACHIEVEMENT[entry.id];
    }

    // Special handling for inconsistencies
    if (!achievementId) {
        // Logbook ID might be "voidfiend" but we mapped "void-survivor"
        if (entry.id === "voidfiend") achievementId = "CompleteVoidEnding";
        if (entry.id === "void-fiend") achievementId = "CompleteVoidEnding";
        if (entry.id === "mult") achievementId = "RepeatFirstTeleporter";
        if (entry.id === "rex") achievementId = "RescueTreebot";
        if (entry.id === "acrid") achievementId = "BeatArena";
    }

    if (!achievementId) return undefined;

    return challenges.find(c => c.achievement === achievementId);
}
