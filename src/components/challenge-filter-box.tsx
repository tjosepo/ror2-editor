import React from "react";
import { ChallengeFilter, ChallengeFilterType } from "../challenge-filters";

import "./challenge-filter-box.scss";

interface Props {
  challengeFilter: ChallengeFilter;
  activeFilters: ChallengeFilter[];
  onToggle: (challengeFilter: ChallengeFilter, selected: boolean) => void;
}

export default function ChallengeFilterBox({
  challengeFilter,
  activeFilters,
  onToggle,
}: Props): React.JSX.Element {
  const selected = activeFilters.includes(challengeFilter);

  const handleToggle = (): void => {
    onToggle(challengeFilter, !selected);
  };

  return (
    <button
      type="button"
      //className={`filter-grid ${selected ? "selected" : ""} ${challengeFilter.type === ChallengeFilterType.VisualGap ? "hidden" : ""}`}
      className={`filter-grid btn ${selected ? "selected" : ""}`}
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
