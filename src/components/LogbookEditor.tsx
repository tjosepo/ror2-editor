import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { logbookEntries } from "../data/logbook-entries";
import type {
  LogbookCategory,
  LogbookEntry,
  SaveData,
} from "../data/types";
import { LOGBOOK_CATEGORY_NAMES } from "../data/types";
import { getChallengeCountForLogbookEntry } from "../lib/challenge-logbook-mapping";
import {
  isLogbookEntryUnlocked,
  toggleLogbookEntry,
  unlockAllLogbook,
  lockAllLogbook,
  toggleAchievement,
} from "../lib/save-operations";
import { LogbookCard } from "./LogbookCard";
import { getAchievementForSurvivorLogbook } from "../lib/survivor-achievement-mapping";
import "./logbook.scss";
import Button from "./button";

interface LogbookEditorProps {
  saveData: SaveData;
  onSaveDataChange: (saveData: SaveData) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const GridContainer = ({ children, ...props }: any) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="show"
    key={props.key}
    {...props}
    className="logbook-grid"
  >
    {children}
  </motion.div>
);

const ItemContainer = ({ children, ...props }: any) => (
  <div {...props} className="h-full relative">
    {children}
  </div>
);

export function LogbookEditor({
  saveData,
  onSaveDataChange,
}: LogbookEditorProps) {
  // Calculate global stats
  const totalUnlocked = logbookEntries.filter((e) =>
    isLogbookEntryUnlocked(saveData, e),
  ).length;

  const handleToggleEntry = useCallback(
    (entry: LogbookEntry, enabled: boolean) => {
      if (!enabled) {
        onSaveDataChange(toggleLogbookEntry(saveData, entry, false));
        return;
      }

      let newData = toggleLogbookEntry(saveData, entry, true);

      if (entry.category === "survivors") {
        const achievement = getAchievementForSurvivorLogbook(entry);
        if (achievement) {
          newData = toggleAchievement(newData, achievement.achievement, true);
        }
      }
      onSaveDataChange(newData);
    },
    [saveData, onSaveDataChange],
  );

  const handleUnlockAllClick = useCallback(() => {
    // Assume all DLCs are owned for simplicity as requested
    const allOwned = { base: true, sotv: true, sots: true, ac: true };
    let newData = unlockAllLogbook(saveData, allOwned);

    for (const entry of logbookEntries) {
      if (entry.category === "survivors") {
        const achievement = getAchievementForSurvivorLogbook(entry);
        if (achievement) {
          newData = toggleAchievement(newData, achievement.achievement, true);
        }
      }
    }

    onSaveDataChange(newData);
  }, [saveData, onSaveDataChange]);

  const unlockGroup = (category: LogbookCategory): void => {
    const categoryEntries = logbookEntries.filter(e => e.category === category);
    let newData = saveData;

    categoryEntries.forEach(entry => {
      newData = toggleLogbookEntry(newData, entry, true);

      if (entry.category === "survivors") {
        const achievement = getAchievementForSurvivorLogbook(entry);
        if (achievement) {
          newData = toggleAchievement(newData, achievement.achievement, true);
        }
      }
    });
    onSaveDataChange(newData);
  };

  const handleLockAll = useCallback(() => {
    onSaveDataChange(lockAllLogbook(saveData));
  }, [saveData, onSaveDataChange]);

  return (
    <div className="flex flex-col gap-4 relative">


      {/* Global Controls & Search */}
      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h2>Logbook Controls</h2>
            <span style={{ fontSize: "1.2rem", color: "#66cc66", fontWeight: "bold" }}>
              {totalUnlocked} / {logbookEntries.length}
            </span>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleUnlockAllClick}>Unlock Everything</Button>
            <Button onClick={handleLockAll} className="bg-ror-legendary">Lock Everything</Button>
          </div>
        </div>

        {/* Categories */}
        {(Object.entries(LOGBOOK_CATEGORY_NAMES) as [LogbookCategory, string][]).map(([key, name]) => {
          // Filter entries for this category
          const groupEntries = logbookEntries.filter((entry) => entry.category === key);

          if (groupEntries.length === 0) return null;

          const unlockedCount = groupEntries.filter(e => isLogbookEntryUnlocked(saveData, e)).length;

          return (
            <div key={key} style={{ marginBottom: "2rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                borderBottom: "2px solid #444",
                paddingBottom: "0.5rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h2 style={{ margin: 0 }}>{name}</h2>
                  <span style={{ fontSize: "1.2rem", color: "#66cc66", fontWeight: "bold" }}>
                    {unlockedCount} / {groupEntries.length}
                  </span>
                </div>
                <Button onClick={() => unlockGroup(key)}>
                  Unlock All {name}
                </Button>
              </div>

              <GridContainer key={key}>
                {groupEntries.map((entry) => (
                  <ItemContainer key={entry.id}>
                    <div className="h-full">
                      <LogbookCard
                        entry={entry}
                        isUnlocked={isLogbookEntryUnlocked(saveData, entry)}
                        onToggle={handleToggleEntry}
                        linkedChallengeCount={getChallengeCountForLogbookEntry(entry.id)}
                      />
                    </div>
                  </ItemContainer>
                ))}
              </GridContainer>
            </div>
          );
        })}

      </div>
    </div>
  );
}
