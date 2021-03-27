import React, { useState } from "react";
import { Challenge, challenges } from "../challenges";
import ChallengeBox from "./challenge-box";
import "./editor.scss";
import Button from "./button";

export default function Editor({
  savedata,
  setSavedata,
}: {
  savedata: XMLDocument;
  setSavedata: React.Dispatch<XMLDocument>;
}) {
  const coins = savedata.querySelector("coins")!.innerHTML;
  const stats = savedata.querySelector("stats")!;
  const [achievements, setAchievements] = useState(
    savedata.querySelector("achievementsList")!.innerHTML.split(" ")
  );

  const changeCoins = (value: string) => {
    savedata.querySelector("coins")!.innerHTML = value;
  };

  const changeChallenge = (challenge: Challenge, checked: boolean) => {
    if (checked) {
      addAchievement(challenge.achievement);
      addUnlock(challenge.unlock);
    } else {
      removeAchievement(challenge.achievement);
      removeUnlock(challenge.unlock);
      removeStatsRequirements(challenge.name);
    }
    setAchievements([...achievements]);
  };

  const addAchievement = (achievement: string) => {
    if (achievements.includes(achievement)) return;

    achievements.push(achievement);
    const achievementsAsString = achievements.join(" ");
    savedata.querySelector(
      "achievementsList"
    )!.innerHTML = achievementsAsString;
  };

  const removeAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) return;

    achievements.splice(achievements.indexOf(achievement), 1);
    const achievementsAsString = achievements.join(" ");
    savedata.querySelector(
      "achievementsList"
    )!.innerHTML = achievementsAsString;
  };

  const addUnlock = (unlock: string) => {
    if (findUnlock(unlock)) return;
    const unlockElement = createUnlock(unlock);
    stats.appendChild(unlockElement);
  };

  const removeUnlock = (unlock: string) => {
    const unlockElement = findUnlock(unlock);
    if (!unlockElement) return;
    stats.removeChild(unlockElement);
  };

  const findUnlock = (unlock: string) => {
    const unlocks = stats.querySelectorAll("unlock");
    let unlockElement: Element | undefined = undefined;
    unlocks.forEach((element) => {
      if (!unlockElement && element.textContent === unlock)
        unlockElement = element;
    });
    return unlockElement;
  };

  const createUnlock = (unlock: string) => {
    const unlockElement = document.createElement("unlock");
    unlockElement.textContent = unlock;
    return unlockElement;
  };

  const removeStatsRequirements = (name: string) => {
    switch (name) {
      case "The Basics":
        // TODO: Find a way to only overwrite the white pickups.
        savedata.querySelector("discoveredPickups")!.textContent = "";
        break;
      case "Learning Process":
        stats.querySelector('stat[name="totalDeaths"]')!.textContent = "0";
        break;
      case "Slaughter":
        stats.querySelector('stat[name="totalKills"]')!.textContent = "0";
        break;
      case "Cut Down":
        stats.querySelector('stat[name="totalEliteKills"')!.textContent = "0";
        break;
      case "Experimenting":
        // TODO: Find a way to only overwrite the equipment pickups.
        savedata.querySelector("discoveredPickups")!.textContent = "";
        break;
      case "Newtist":
        // TODO: There are some missing newt locations.
        removeUnlock("NewtStatue.wispgraveyard.0");
        removeUnlock("NewtStatue.blackbeach2.2");
        removeUnlock("NewtStatue.golemplains.2");
        removeUnlock("NewtStatue.frozenwall.2");
        removeUnlock("NewtStatue.goolake.0");
        removeUnlock("NewtStatue.foggyswamp.0");
        removeUnlock("NewtStatue.skymeadow.1");
        break;
      case "The Demons And The Crabs":
        stats.querySelector(
          'stat[name="suicideHermitCrabsAchievementProgress"]'
        )!.textContent = "0";
        break;
      case "Cosmic Explorer":
        stats.querySelector(
          'stat[name="totalTimesVisited.bazaar"]'
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.arena"]'
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.goldshores"]'
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.mysteryspace"]'
        )!.textContent = "0"; // not sure what mysterypace is...
        stats.querySelector(
          'stat[name="totalTimesVisited.artifactworld"]'
        )!.textContent = "0";
        break;
      case "Warm For Life":
        stats.querySelector('stat[name="totalBurnDeaths"]')!.textContent = "0";
        stats.querySelector(
          'stat[name="totalDeathsWhileBurning"]'
        )!.textContent = "0";
        break;
      case "Mechanic":
        stats.querySelector('stat[name="totalDronesPurchased"]')!.textContent =
          "0";
        stats.querySelector('stat[name="totalTurretsPurchased"]')!.textContent =
          "0";
        break;
      case "Funded!":
        stats.querySelector('stat[name="totalGoldCollected"]')!.textContent =
          "0";
        break;
      case "Bookworm":
        removeUnlock("Logs.BeetleBody.0");
        removeUnlock("Logs.BeetleGuardBody.0");
        removeUnlock("Logs.BeetleQueenBody.0");
        removeUnlock("Logs.BellBody.0");
        removeUnlock("Logs.BisonBody.0");
        removeUnlock("Logs.BrotherBody.0");
        removeUnlock("Logs.ClayBody.0");
        removeUnlock("Logs.ClayBossBody.0");
        removeUnlock("Logs.ClayBruiserBody.0");
        removeUnlock("Logs.ElectricWormBody.0");
        removeUnlock("Logs.GolemBody.0");
        removeUnlock("Logs.GravekeeperBody.0");
        removeUnlock("Logs.GreaterWispBody.0");
        removeUnlock("Logs.HermitCrabBody.0");
        removeUnlock("Logs.ImpBody.0");
        removeUnlock("Logs.ImpBossBody.0");
        removeUnlock("Logs.JellyfishBody.0");
        removeUnlock("Logs.LemurianBody.0");
        removeUnlock("Logs.LemurianBruiserBody.0");
        removeUnlock("Logs.LunarGolem.0");
        removeUnlock("Logs.LunarWisp.0");
        removeUnlock("Logs.MagmaWormBody.0");
        removeUnlock("Logs.MiniMushroom.0");
        removeUnlock("Logs.Nullifier.0");
        removeUnlock("Logs.Parent.0");
        removeUnlock("Logs.RoboBallBossBody.0");
        removeUnlock("Logs.RoboBallMiniBody.0");
        removeUnlock("Logs.Scav.0");
        removeUnlock("Logs.SuperRoboBallBossBody.0");
        removeUnlock("Logs.TitanBody.0");
        removeUnlock("Logs.TitanGoldBody.0");
        removeUnlock("Logs.VagrantBody.0");
        removeUnlock("Logs.VultureBody.0");
        removeUnlock("Logs.WispBody.0");
        removeUnlock("Logs.Stages.arena");
        removeUnlock("Logs.Stages.artifactworld");
        removeUnlock("Logs.Stages.bazaar");
        removeUnlock("Logs.Stages.blackbeach");
        removeUnlock("Logs.Stages.dampcavesimple");
        removeUnlock("Logs.Stages.foggyswamp");
        removeUnlock("Logs.Stages.frozenwall");
        removeUnlock("Logs.Stages.goldshores");
        removeUnlock("Logs.Stages.golemplains");
        removeUnlock("Logs.Stages.goolake");
        removeUnlock("Logs.Stages.limbo");
        removeUnlock("Logs.Stages.moon");
        removeUnlock("Logs.Stages.mysteryspace");
        removeUnlock("Logs.Stages.shipgraveyard");
        removeUnlock("Logs.Stages.skymeadow");
        removeUnlock("Logs.Stages.wispgraveyard");
        break;
      case "Cleanup Duty":
        stats.querySelector('stat[name="totalMaulingRockKills"]')!.textContent =
          "0";
        break;
      case "Characters.Engineer":
        stats.querySelector('stat[name="totalStagesCompleted"]')!.textContent =
          "0";
        break;
    }
  };

  const unlockAll = () => {
    challenges.forEach((challenge) => changeChallenge(challenge, true));
  };

  return (
    <div>
      <div className="form-group row">
        <label htmlFor="coins" className="label">
          Lunar Coins
        </label>
        <input
          type="number"
          className="form-control"
          id="coins"
          defaultValue={coins}
          min="0"
          onChange={(e) => changeCoins(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h2>Challenge</h2>
        <Button onClick={(e) => unlockAll()}>Unlock all</Button>
      </div>

      <div className="challenge-grid">
        {challenges.map((challenge) => (
          <ChallengeBox
            key={challenge.achievement}
            challenge={challenge}
            achievements={achievements}
            onClick={(selected: boolean) =>
              changeChallenge(challenge, selected)
            }
          />
        ))}
      </div>
    </div>
  );
}
