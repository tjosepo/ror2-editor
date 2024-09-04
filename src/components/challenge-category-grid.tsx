import React from "react";
import { ChallengeFilter, ChallengeFilterCategory } from "../challenge-filters";

import "./challenge-category-grid.scss";
import ChallengeFilterBox from "./challenge-filter-box";
import { Challenge } from "../challenges";

interface Props {
  category: ChallengeFilterCategory;
  activeFilters: ChallengeFilter[];
  setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>;
  changeFilter: (
    challengeFilter: ChallengeFilter,
    checked: boolean,
    activeFilters: ChallengeFilter[],
    setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>,
  ) => void;
  tier1FilterResults?: Challenge[];
}

export default function ChallengeCategoryGrid({
  category,
  activeFilters,
  setActiveFilters,
  changeFilter,
  tier1FilterResults,
}: Props): React.JSX.Element {
  const allSelected = category.filters.every(
    (categoryFilter: ChallengeFilter) => activeFilters.includes(categoryFilter),
  );
  const someSelected = category.filters.some(
    (categoryFilter: ChallengeFilter) => activeFilters.includes(categoryFilter),
  );

  const handleToggleAll = (): void => {
    for (const filter of category.filters) {
      changeFilter(filter, !allSelected, activeFilters, setActiveFilters);
    }
  };

  const handleToggle = (
    challengeFilter: ChallengeFilter,
    selected: boolean,
  ): void => {
    changeFilter(challengeFilter, selected, activeFilters, setActiveFilters);
  };

  return (
    <div key={category.name} className="category-grid">
      <button
        className={`btn category-checkbox ${allSelected ? "selected" : someSelected ? "indeterminate" : ""}`}
        type="button"
        onClick={handleToggleAll}
        title={category.name}
      />
      {category.filters.map((challengeFilter: ChallengeFilter) => (
        <ChallengeFilterBox
          key={challengeFilter.name}
          challengeFilter={challengeFilter}
          activeFilters={activeFilters}
          onToggle={handleToggle}
          tier1FilterResults={tier1FilterResults}
        />
      ))}
    </div>
  );
}
