import React, { useMemo, useState } from "react";
import { Challenge, UnlockType, challenges } from "../challenges";
import { ChallengeFilter, ChallengeFilterCategory, ChallengeFilterType, tier1FilterCategories, tier2FilterCategories, challengeFilters } from "../challenge-filters";
import ChallengeBox from "./challenge-box";
import ChallengeFilterBox from "./challenge-filter-box";
import "./editor.scss";
import Button from "./button";
import ChallengeFilterCategoryGrid from "./challenge-filter-category-grid";

interface Props {
  savedata: XMLDocument;
}

export default function Editor({ savedata }: Props): React.JSX.Element {
  const coins = savedata.querySelector("coins")!.innerHTML;
  const stats = savedata.querySelector("stats")!;

  const [achievements, setAchievements] = useState(
    savedata.querySelector("achievementsList")!.innerHTML.split(" "),
  );

  const [activeT1Filters, setActiveT1Filters] = useState([] as ChallengeFilter[]);
  const [activeT2Filters, setActiveT2Filters] = useState([] as ChallengeFilter[]);

  const changeCoins = (value: string): void => {
    savedata.querySelector("coins")!.innerHTML = value;
  };

  const changeChallenge = (challenge: Challenge, checked: boolean): void => {
    if (checked) {
      addAchievement(challenge.achievement);
      challenge.unlocks.forEach(addUnlock);
    } else {
      removeAchievement(challenge.achievement);
      challenge.unlocks.forEach(removeUnlock);
      removeStatsRequirements(challenge.name);
    }
    setAchievements([...achievements]);
  };

  const addAchievement = (achievement: string): void => {
    if (achievements.includes(achievement)) return;

    achievements.push(achievement);
    const achievementsAsString = achievements.join(" ");
    savedata.querySelector("achievementsList")!.innerHTML =
      achievementsAsString;
  };

  const removeAchievement = (achievement: string): void => {
    if (!achievements.includes(achievement)) return;

    achievements.splice(achievements.indexOf(achievement), 1);
    const achievementsAsString = achievements.join(" ");
    savedata.querySelector("achievementsList")!.innerHTML =
      achievementsAsString;
  };

  const addUnlock = (unlock: string): void => {
    if (findUnlock(unlock)) return;
    const unlockElement = createUnlock(unlock);
    stats.appendChild(unlockElement);
  };

  const removeUnlock = (unlock: string): void => {
    const unlockElement = findUnlock(unlock);
    if (!unlockElement) return;
    stats.removeChild(unlockElement);
  };

  const findUnlock = (unlock: string): Element | undefined => {
    const unlocks = stats.querySelectorAll("unlock");
    return Array.from(unlocks).find(
      (element) => element.textContent === unlock,
    );
  };

  const createUnlock = (unlock: string): HTMLElement => {
    const unlockElement = document.createElement("unlock");
    unlockElement.textContent = unlock;
    return unlockElement;
  };

  const removeStatsRequirements = (name: string): void => {
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
          'stat[name="suicideHermitCrabsAchievementProgress"]',
        )!.textContent = "0";
        break;
      case "Cosmic Explorer":
        stats.querySelector(
          'stat[name="totalTimesVisited.bazaar"]',
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.arena"]',
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.goldshores"]',
        )!.textContent = "0";
        stats.querySelector(
          'stat[name="totalTimesVisited.mysteryspace"]',
        )!.textContent = "0"; // not sure what mysterypace is...
        stats.querySelector(
          'stat[name="totalTimesVisited.artifactworld"]',
        )!.textContent = "0";
        break;
      case "Warm For Life":
        stats.querySelector('stat[name="totalBurnDeaths"]')!.textContent = "0";
        stats.querySelector(
          'stat[name="totalDeathsWhileBurning"]',
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

  const unlockAll = (): void => {
    challenges.forEach(
      (challenge) => changeChallenge(challenge, true)
    );
  };

  const filterChallenges = (challenges: Challenge[]): Challenge[] => {
    // Filter tier 1 first
    // See comment above `tier1FilterCategories` definition for more details as to why this is done like this.
    if (activeT1Filters.length !== 0) {
      challenges = challenges.filter(
        (challenge: Challenge) => activeT1Filters.some(
          (challengeFilter: ChallengeFilter) => {
            switch (challengeFilter.type) {
              case ChallengeFilterType.ItemRarity:
                return challenge.unlockType === UnlockType.Item && challenge.rarity === challengeFilter.target;
              case ChallengeFilterType.Character:
                return (challenge.unlockType === UnlockType.Character || challenge.unlockType === UnlockType.Skill || challenge.unlockType === UnlockType.Skin) && challenge.character === challengeFilter.target;
              case ChallengeFilterType.Artifact:
                return challenge.unlockType === UnlockType.Artifact;
              case ChallengeFilterType.DLCType:
                return challenge.dlc === challengeFilter.target;
            }
          }
        )
      );
    }

    if (activeT2Filters.length !== 0) {
      // TODO: Fix gross repetition
      challenges = challenges.filter(
        (challenge: Challenge) => activeT2Filters.some(
          (challengeFilter: ChallengeFilter) => {
            switch (challengeFilter.type) {
              case ChallengeFilterType.ItemRarity:
                return challenge.unlockType === UnlockType.Item && challenge.rarity === challengeFilter.target;
              case ChallengeFilterType.Character:
                return (challenge.unlockType === UnlockType.Character || challenge.unlockType === UnlockType.Skill || challenge.unlockType === UnlockType.Skin) && challenge.character === challengeFilter.target;
              case ChallengeFilterType.Artifact:
                return challenge.unlockType === UnlockType.Artifact;
              case ChallengeFilterType.DLCType:
                return challenge.dlc === challengeFilter.target;
            }
          }
        )
      );
    }

    return challenges;
  };

  const changeCategoryFilter = (category: ChallengeFilterCategory, checked: boolean, activeFilters: ChallengeFilter[], setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>): void => {
    category.filters.forEach(
      (categoryFilter: ChallengeFilter) => changeFilter(categoryFilter, checked, activeFilters, setActiveFilters, true)
    );
    setActiveFilters([...activeFilters]);
  };

  const changeFilter = (challengeFilter: ChallengeFilter, checked: boolean, activeFilters: ChallengeFilter[], setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>, skipSettingState: boolean = false): void => {
    if (checked) {
      if (activeFilters.includes(challengeFilter)) {
        return;
      }

      activeFilters.push(challengeFilter);
    } else {
      const filterIndex = activeFilters.indexOf(challengeFilter);

      if (filterIndex === -1) {
        return;
      }

      activeFilters.splice(filterIndex, 1);
    }

    if (!skipSettingState) {
      setActiveFilters([...activeFilters]);
    }
  };

  const filteredChallenges = useMemo(
    () => filterChallenges(challenges),
    [challenges, activeT1Filters, activeT2Filters]
  );

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
        }}
      >
        <h2>Challenge</h2>
        <Button onClick={unlockAll}>Unlock all</Button>
      </div>
      <div>
        {tier1FilterCategories.map((category: ChallengeFilterCategory) => (
          <ChallengeFilterCategoryGrid
            key={category.name}
            category={category}
            activeFilters={activeT1Filters}
            setActiveFilters={setActiveT1Filters}
            onToggle={changeCategoryFilter}
            changeFilter={changeFilter}
          />
        ))}
        <div className="category-divider" />
        {tier2FilterCategories.map((category: ChallengeFilterCategory) => (
          <ChallengeFilterCategoryGrid
            key={category.name}
            category={category}
            activeFilters={activeT2Filters}
            setActiveFilters={setActiveT2Filters}
            onToggle={changeCategoryFilter}
            changeFilter={changeFilter}
          />
        ))}
      </div>

      <div className="challenge-grid">
        {filteredChallenges.length === 0 ?
          <i>No challenges match your filters</i>
        :
          filteredChallenges.map((challenge) => (
            <ChallengeBox
              key={challenge.achievement}
              challenge={challenge}
              achievements={achievements}
              onToggle={changeChallenge}
            />
          ))
        }
      </div>
    </div>
  );
}
