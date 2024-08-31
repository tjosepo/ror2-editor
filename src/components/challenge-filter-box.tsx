import React from "react";
import { ChallengeFilter, ChallengeFilterType, filterChallenges } from "../challenge-filters";

import "./challenge-filter-box.scss";
import { Challenge } from "../challenges";

interface Props {
  challengeFilter: ChallengeFilter;
  activeFilters: ChallengeFilter[];
  onToggle: (challengeFilter: ChallengeFilter, selected: boolean) => void;
  challengesFilteredT1?: Challenge[];
}

export default function ChallengeFilterBox({
  challengeFilter,
  activeFilters,
  onToggle,
  challengesFilteredT1,
}: Props): React.JSX.Element {
  const selected = activeFilters.includes(challengeFilter);
  const disabled = challengesFilteredT1 && !selected && filterChallenges(challengesFilteredT1, [challengeFilter]).length === 0;

  const handleToggle = (): void => {
    if (disabled) {
      return;
    }

    onToggle(challengeFilter, !selected);
  };

  return (
    <button
      type="button"
      //className={`filter-grid ${selected ? "selected" : ""} ${challengeFilter.type === ChallengeFilterType.VisualGap ? "hidden" : ""}`}
      className={`filter-grid btn ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`}
      onClick={handleToggle}
      title={challengeFilter.name}
    >
      <div className="filter-icon">
        <picture>
          <source
            type="image/webp"
            srcSet={`/images/webp/${challengeFilter.icon}.webp`}
          />
          <img
            src={`/images/png/${challengeFilter.icon}.png`}
            alt={`${challengeFilter.name} icon`}
          />
        </picture>
      </div>
    </button>
  );
}
