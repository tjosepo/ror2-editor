import { challenges } from "../data/challenges";
import { logbookEntries } from "../data/logbook-entries";
import type { Challenge, LogbookEntry } from "../data/types";

/**
 * Challenge-Logbook Mapping System
 *
 * This module creates bidirectional mappings between challenges and logbook entries.
 *
 * SCOPE: Only Items and Equipment are mapped
 * - Items.* unlocks → items category logbook entries
 * - Equipment.* unlocks → equipment category logbook entries
 *
 * NOT MAPPED (by design):
 * - Monsters, Environments, Survivors, Drones: Use Logs.* format, no challenge unlocks
 * - Skills, Skins, Artifacts: Not in logbook, handled separately by UI
 * - Characters.*: Survivor unlocks handled by challenge editor directly
 *
 * The mapping enables:
 * 1. When a challenge is unlocked → auto-unlock related logbook entries
 * 2. When a logbook entry is locked → check if challenge should be disabled
 * 3. Show connection badges in UI (challenge ↔ logbook)
 */

interface ChallengeLogbookMapping {
  // Map: challenge id -> array of logbook entry IDs
  challengeToLogbook: Map<string, string[]>;
  // Map: logbook entry id -> array of challenge IDs
  logbookToChallenge: Map<string, string[]>;
  // Map: unlockId -> logbook entry (for quick lookup by Items.*/Equipment.*)
  unlockIdToLogbook: Map<string, LogbookEntry>;
  // Map: pickupId -> logbook entry (for quick lookup by ItemIndex.*/EquipmentIndex.*)
  pickupIdToLogbook: Map<string, LogbookEntry>;
  // Map: unlockId -> challenges that unlock it
  unlockIdToChallenges: Map<string, Challenge[]>;
}

// Prefixes that are mapped to logbook entries
const MAPPED_PREFIXES = ["Items.", "Equipment."] as const;

function buildMapping(): ChallengeLogbookMapping {
  const challengeToLogbook = new Map<string, string[]>();
  const logbookToChallenge = new Map<string, string[]>();
  const unlockIdToLogbook = new Map<string, LogbookEntry>();
  const pickupIdToLogbook = new Map<string, LogbookEntry>();
  const unlockIdToChallenges = new Map<string, Challenge[]>();

  // Build unlockId/pickupId -> logbook entry maps (only for items/equipment)
  for (const entry of logbookEntries) {
    if (entry.category === "items" || entry.category === "equipment") {
      unlockIdToLogbook.set(entry.unlockId, entry);
      if (entry.pickupId) {
        pickupIdToLogbook.set(entry.pickupId, entry);
      }
    }
  }

  // Build the bidirectional challenge <-> logbook mappings
  for (const challenge of challenges) {
    const linkedLogbookIds: string[] = [];

    for (const unlock of challenge.unlocks) {
      // Only process Items.* and Equipment.* prefixes
      const isMappedPrefix = MAPPED_PREFIXES.some((prefix) =>
        unlock.startsWith(prefix),
      );

      if (isMappedPrefix) {
        const logbookEntry = unlockIdToLogbook.get(unlock);
        if (logbookEntry) {
          linkedLogbookIds.push(logbookEntry.id);

          // Add to logbook -> challenge mapping
          const existingChallenges =
            logbookToChallenge.get(logbookEntry.id) || [];
          existingChallenges.push(challenge.id);
          logbookToChallenge.set(logbookEntry.id, existingChallenges);

          // Add to unlockId -> challenges mapping
          const challengesForUnlock = unlockIdToChallenges.get(unlock) || [];
          challengesForUnlock.push(challenge);
          unlockIdToChallenges.set(unlock, challengesForUnlock);
        }
      }
    }

    if (linkedLogbookIds.length > 0) {
      challengeToLogbook.set(challenge.id, linkedLogbookIds);
    }
  }

  return {
    challengeToLogbook,
    logbookToChallenge,
    unlockIdToLogbook,
    pickupIdToLogbook,
    unlockIdToChallenges,
  };
}

// Cache the mapping at module load time
const mapping = buildMapping();

// Quick lookup maps
const challengeById = new Map<string, Challenge>(
  challenges.map((c) => [c.id, c]),
);

const challengeByAchievement = new Map<string, Challenge>(
  challenges.map((c) => [c.achievement, c]),
);

const logbookEntryById = new Map<string, LogbookEntry>(
  logbookEntries.map((e) => [e.id, e]),
);

/**
 * Get logbook entries that are unlocked by a specific challenge
 */
export function getLogbookEntriesForChallenge(
  challengeId: string,
): LogbookEntry[] {
  const logbookIds = mapping.challengeToLogbook.get(challengeId) || [];
  return logbookIds
    .map((id) => logbookEntryById.get(id))
    .filter((entry): entry is LogbookEntry => entry !== undefined);
}

/**
 * Get challenges that unlock a specific logbook entry
 */
export function getChallengesForLogbookEntry(entryId: string): Challenge[] {
  const challengeIds = mapping.logbookToChallenge.get(entryId) || [];
  return challengeIds
    .map((id) => challengeById.get(id))
    .filter((challenge): challenge is Challenge => challenge !== undefined);
}

/**
 * Check if a challenge affects any logbook entries
 */
export function hasLogbookConnection(challenge: Challenge): boolean {
  return mapping.challengeToLogbook.has(challenge.id);
}

/**
 * Check if a logbook entry is linked to any challenges
 */
export function hasChallengeConnection(entry: LogbookEntry): boolean {
  return mapping.logbookToChallenge.has(entry.id);
}

/**
 * Get the count of logbook entries affected by a challenge
 */
export function getLogbookCountForChallenge(challengeId: string): number {
  return mapping.challengeToLogbook.get(challengeId)?.length || 0;
}

/**
 * Get the count of challenges that unlock a logbook entry
 */
export function getChallengeCountForLogbookEntry(entryId: string): number {
  return mapping.logbookToChallenge.get(entryId)?.length || 0;
}

/**
 * Get all challenges that unlock a specific unlockId
 */
export function getChallengesForUnlockId(unlockId: string): Challenge[] {
  return mapping.unlockIdToChallenges.get(unlockId) || [];
}

/**
 * Get logbook entry by its unlockId (Items.*, Equipment.*)
 */
export function getLogbookEntryByUnlockId(
  unlockId: string,
): LogbookEntry | undefined {
  return mapping.unlockIdToLogbook.get(unlockId);
}

/**
 * Get logbook entry by its pickupId (ItemIndex.*, EquipmentIndex.*)
 */
export function getLogbookEntryByPickupId(
  pickupId: string,
): LogbookEntry | undefined {
  return mapping.pickupIdToLogbook.get(pickupId);
}

/**
 * Get challenge by its achievement ID
 */
export function getChallengeByAchievement(
  achievementId: string,
): Challenge | undefined {
  return challengeByAchievement.get(achievementId);
}

/**
 * Check if any other unlocked challenge also provides this logbook entry
 * Used when disabling a challenge to decide if logbook entry should stay unlocked
 */
export function isLogbookEntryProvidedByOtherChallenge(
  entry: LogbookEntry,
  excludeAchievementId: string,
  unlockedAchievements: Set<string>,
): boolean {
  const relatedChallenges = getChallengesForLogbookEntry(entry.id);
  return relatedChallenges.some(
    (challenge) =>
      challenge.achievement !== excludeAchievementId &&
      unlockedAchievements.has(challenge.achievement),
  );
}

/**
 * Check if all logbook entries for a challenge are being removed
 * Used when disabling a logbook entry to decide if challenge should be disabled
 */
export function shouldDisableChallengeForEntry(
  challenge: Challenge,
  entryBeingDisabled: LogbookEntry,
  currentViewedViewables: Set<string>,
): boolean {
  const relatedEntries = getLogbookEntriesForChallenge(challenge.id);

  // If this challenge only unlocks this one entry, disable it
  if (relatedEntries.length === 1) {
    return true;
  }

  // Check if all other related entries are also not in viewedViewables
  for (const entry of relatedEntries) {
    if (
      entry.id !== entryBeingDisabled.id &&
      currentViewedViewables.has(entry.unlockId)
    ) {
      // Another related entry is still unlocked, don't disable the challenge
      return false;
    }
  }

  return true;
}

/**
 * Get mapping statistics for debugging/diagnostics
 */
export function getMappingStats(): {
  totalChallenges: number;
  challengesWithLogbook: number;
  totalLogbookEntries: number;
  logbookWithChallenges: number;
  itemsMapped: number;
  equipmentMapped: number;
} {
  const itemsMapped = Array.from(mapping.unlockIdToLogbook.values()).filter(
    (e) => e.category === "items",
  ).length;
  const equipmentMapped = Array.from(mapping.unlockIdToLogbook.values()).filter(
    (e) => e.category === "equipment",
  ).length;

  return {
    totalChallenges: challenges.length,
    challengesWithLogbook: mapping.challengeToLogbook.size,
    totalLogbookEntries: logbookEntries.length,
    logbookWithChallenges: mapping.logbookToChallenge.size,
    itemsMapped,
    equipmentMapped,
  };
}

/**
 * Find challenge unlocks that reference items/equipment not in logbook
 * Useful for detecting missing logbook entries after DLC updates
 */
export function findUnmappedChallengeUnlocks(): Array<{
  challenge: Challenge;
  unmappedUnlock: string;
}> {
  const unmapped: Array<{ challenge: Challenge; unmappedUnlock: string }> = [];

  for (const challenge of challenges) {
    for (const unlock of challenge.unlocks) {
      const isMappedPrefix = MAPPED_PREFIXES.some((prefix) =>
        unlock.startsWith(prefix),
      );

      if (isMappedPrefix && !mapping.unlockIdToLogbook.has(unlock)) {
        unmapped.push({ challenge, unmappedUnlock: unlock });
      }
    }
  }

  return unmapped;
}
