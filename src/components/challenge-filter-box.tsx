import React from "react";
import { ChallengeFilter, filterChallenges } from "../challenge-filters";

import "./challenge-filter-box.scss";
import { Challenge } from "../challenges";

interface Props {
  challengeFilter: ChallengeFilter;
  activeFilters: ChallengeFilter[];
  onToggle: (challengeFilter: ChallengeFilter, selected: boolean) => void;
  tier1FilterResults?: Challenge[];
}

export default function ChallengeFilterBox({
  challengeFilter,
  activeFilters,
  onToggle,
  tier1FilterResults,
}: Props): React.JSX.Element {
  const selected = activeFilters.includes(challengeFilter);
  const disabled = tier1FilterResults && !selected && filterChallenges(tier1FilterResults, [challengeFilter]).length === 0;

  const handleToggle = (): void => {
    if (disabled) {
      return;
    }

    onToggle(challengeFilter, !selected);
  };

  return (
    <button
      type="button"
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
