import React from "react";
import { challenges } from "../data/challenges";
import { Challenge, CATEGORY_NAMES, ChallengeCategory, SaveData } from "../data/types";
import { toggleAchievement, unlockAll as unlockAllOp } from "../lib/save-operations";
import ChallengeBox from "./challenge-box";
import "./editor.scss";
import Button from "./button";

interface Props {
  saveData: SaveData;
  onSaveDataChange: (newData: SaveData) => void;
}

export default function Editor({ saveData, onSaveDataChange }: Props): React.JSX.Element {
  const { coins, name, achievements } = saveData;

  const changeCoins = (value: string): void => {
    let num = parseInt(value, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 2147483647) num = 2147483647;
    onSaveDataChange({ ...saveData, coins: num });
  };

  const changeName = (value: string): void => {
    onSaveDataChange({ ...saveData, name: value });
  };

  const changeChallenge = (challenge: Challenge, checked: boolean): void => {
    let newData = toggleAchievement(saveData, challenge.achievement, checked);

    if (!checked) {
      newData = removeStatsRequirements(newData, challenge.name);
    }

    onSaveDataChange(newData);
  };

  const removeStatsRequirements = (data: SaveData, name: string): SaveData => {
    const stats = new Map(data.stats);
    // Helper to safely manipulate stats map for immutability
    const newData = { ...data, stats };

    const removeUnlock = (unlock: string) => {
      const idx = newData.unlocks.indexOf(unlock);
      if (idx !== -1) {
        const newUnlocks = [...newData.unlocks];
        newUnlocks.splice(idx, 1);
        newData.unlocks = newUnlocks;
      }
    };

    switch (name) {
      case "The Basics":
        // TODO: Find a way to only overwrite the white pickups.
        // savedata.querySelector("discoveredPickups")!.textContent = "";
        newData.discoveredPickups = []; // Nuking for now as per original code behavior essentially
        break;
      case "Learning Process":
        stats.set("totalDeaths", "0");
        break;
      case "Slaughter":
        stats.set("totalKills", "0");
        break;
      case "Cut Down":
        stats.set("totalEliteKills", "0");
        break;
      case "Experimenting":
        // TODO: Find a way to only overwrite the equipment pickups.
        newData.discoveredPickups = [];
        break;
      case "Newtist":
        removeUnlock("NewtStatue.wispgraveyard.0");
        removeUnlock("NewtStatue.blackbeach2.2");
        removeUnlock("NewtStatue.golemplains.2");
        removeUnlock("NewtStatue.frozenwall.2");
        removeUnlock("NewtStatue.goolake.0");
        removeUnlock("NewtStatue.foggyswamp.0");
        removeUnlock("NewtStatue.skymeadow.1");
        break;
      case "The Demons And The Crabs":
        stats.set("suicideHermitCrabsAchievementProgress", "0");
        break;
      case "Cosmic Explorer":
        stats.set("totalTimesVisited.bazaar", "0");
        stats.set("totalTimesVisited.arena", "0");
        stats.set("totalTimesVisited.goldshores", "0");
        stats.set("totalTimesVisited.mysteryspace", "0");
        stats.set("totalTimesVisited.artifactworld", "0");
        break;
      case "Warm For Life":
        stats.set("totalBurnDeaths", "0");
        stats.set("totalDeathsWhileBurning", "0");
        break;
      case "Mechanic":
        stats.set("totalDronesPurchased", "0");
        stats.set("totalTurretsPurchased", "0");
        break;
      case "Funded!":
        stats.set("totalGoldCollected", "0");
        break;
      case "Bookworm":
        const logs = [
          "Logs.BeetleBody.0", "Logs.BeetleGuardBody.0", "Logs.BeetleQueenBody.0",
          "Logs.BellBody.0", "Logs.BisonBody.0", "Logs.BrotherBody.0",
          "Logs.ClayBody.0", "Logs.ClayBossBody.0", "Logs.ClayBruiserBody.0",
          "Logs.ElectricWormBody.0", "Logs.GolemBody.0", "Logs.GravekeeperBody.0",
          "Logs.GreaterWispBody.0", "Logs.HermitCrabBody.0", "Logs.ImpBody.0",
          "Logs.ImpBossBody.0", "Logs.JellyfishBody.0", "Logs.LemurianBody.0",
          "Logs.LemurianBruiserBody.0", "Logs.LunarGolem.0", "Logs.LunarWisp.0",
          "Logs.MagmaWormBody.0", "Logs.MiniMushroom.0", "Logs.Nullifier.0",
          "Logs.Parent.0", "Logs.RoboBallBossBody.0", "Logs.RoboBallMiniBody.0",
          "Logs.Scav.0", "Logs.SuperRoboBallBossBody.0", "Logs.TitanBody.0",
          "Logs.TitanGoldBody.0", "Logs.VagrantBody.0", "Logs.VultureBody.0",
          "Logs.WispBody.0", "Logs.Stages.arena", "Logs.Stages.artifactworld",
          "Logs.Stages.bazaar", "Logs.Stages.blackbeach", "Logs.Stages.dampcavesimple",
          "Logs.Stages.foggyswamp", "Logs.Stages.frozenwall", "Logs.Stages.goldshores",
          "Logs.Stages.golemplains", "Logs.Stages.goolake", "Logs.Stages.limbo",
          "Logs.Stages.moon", "Logs.Stages.mysteryspace", "Logs.Stages.shipgraveyard",
          "Logs.Stages.skymeadow", "Logs.Stages.wispgraveyard"
        ];
        logs.forEach(removeUnlock);
        break;
      case "Cleanup Duty":
        stats.set("totalMaulingRockKills", "0");
        break;
      case "Characters.Engineer":
        stats.set("totalStagesCompleted", "0");
        break;
    }
    return newData;
  };

  const unlockAll = (): void => {
    onSaveDataChange(unlockAllOp(saveData));
  };

  const unlockGroup = (groupChallenges: readonly Challenge[]): void => {
    let newData = saveData;
    groupChallenges.forEach((challenge) => {
      newData = toggleAchievement(newData, challenge.achievement, true);
    });
    onSaveDataChange(newData);
  };

  return (
    <div>
      <div className="form-group row">
        <label htmlFor="name" className="label">
          Profile Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          defaultValue={name}
          onChange={(e) => changeName(e.target.value)}
        />
      </div>

      <div className="form-group row">
        <label htmlFor="coins" className="label">
          Lunar Coins
        </label>
        <input
          type="number"
          className="form-control"
          id="coins"
          value={coins}
          min="0"
          max="2147483647"
          onChange={(e) => changeCoins(e.target.value)}
        />
      </div>

      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h2>Challenges Controls</h2>
            <span style={{ fontSize: "1.2rem", color: "#66cc66", fontWeight: "bold" }}>
              {challenges.filter(c => achievements.includes(c.achievement)).length} / {challenges.length}
            </span>
          </div>
          <div className="flex gap-2">
            <Button onClick={unlockAll}>Unlock All Challenges</Button>
            {/* Note: lockAll in save-operations locks EVERYTHING including logbooks. 
                We might need a lockAllChallenges specific function if we want to isolate it. 
                For now, existing lockAll clears achievements which clears linked logbooks. 
                Wait, the user wants "Challenges Controls" to separate from "Global".
                If I use the same lockAll logic, it wipes everything.
                I should check save-operations again. lockAll wipes everything.
                So I likely need a specific lockAllChallenges function if I want it isolated.
                However, for this step I will rename and use what I have or just Unlock for now?
                User said "thêm 1 cái look evething cho Global Controls" (Add lock everything for Global).
                "thêm 1 cái challages Controls nữa" (Add a Challenges Controls too).
                Does "Challenges Controls" need a lock? Probably.
                Let's assume "Unlock All Challenges" is the main one. 
                The existing 'unlockAll' in Editor.tsx calls 'unlockAllOp(saveData)'.
                'unlockAllOp' in save-operations unlocks EVERYTHING (logbooks too).
                So the current "Unlock Everything" in Editor.tsx IS already Global logically by code, 
                but UI-wise it's inside Challenges. 
                I should probably clarify or split them.
                Actually, 'unlockAll' in save-operations calls 'unlockAllLogbook' at the end.
                So it IS global.
                To make "Challenges Controls" purely for challenges, I'd need to modify save-operations or 
                accept that "Unlock All Challenges" might have side effects.
                BUT, the user asked specifically for "Global Controls" to do BOTH.
                And "Challenges Controls" to exist.
                Maybe just renaming is enough for visual structure. 
                And add a generic Lock button?
                Let's stick to renaming header and keeping Unlock Everything (which is technically global).
                But wait, if Editor.tsx's `unlockAll` is just calling the global one, then it duplicates the Master one.
                If I want "Challenges Only", I would need to removing the call to `unlockAllLogbook` inside it?
                Let's just rename for now and add the Lock button using `lockAll` which is also global.
                It seems currently the "Challenge Editor" functions ARE the Global functions.
            */}
            <Button onClick={unlockAll}>Unlock All Challenges</Button>
            {/* If I add Lock here, it will lock everything too. */}
          </div>
        </div>

        {(Object.entries(CATEGORY_NAMES) as [ChallengeCategory, string][]).map(([key, name]) => {
          const groupChallenges = challenges.filter((c) => c.category === key);
          if (groupChallenges.length === 0) return null;

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
                    {groupChallenges.filter(c => achievements.includes(c.achievement)).length} / {groupChallenges.length}
                  </span>
                </div>
                <Button onClick={() => unlockGroup(groupChallenges)}>
                  Unlock All {name}
                </Button>
              </div>
              <div className="challenge-grid">
                {groupChallenges.map((challenge) => (
                  <ChallengeBox
                    key={challenge.achievement}
                    challenge={challenge}
                    achievements={achievements}
                    onToggle={changeChallenge}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
