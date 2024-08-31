import React from "react";
import { ChallengeFilter, ChallengeFilterCategory, ChallengeFilterType } from "../challenge-filters";

import "./challenge-filter-category-grid.scss";
import ChallengeFilterBox from "./challenge-filter-box";
import { Challenge } from "../challenges";

interface Props {
  category: ChallengeFilterCategory;
  activeFilters: ChallengeFilter[];
  setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>;
  onToggle: (category: ChallengeFilterCategory, selected: boolean, activeFilters: ChallengeFilter[], setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>) => void;
  changeFilter: (challengeFilter: ChallengeFilter, checked: boolean, activeFilters: ChallengeFilter[], setActiveFilters: React.Dispatch<React.SetStateAction<ChallengeFilter[]>>) => void;
  challengesFilteredT1?: Challenge[];
}

export default function ChallengeFilterCategoryGrid({
  category,
  activeFilters,
  setActiveFilters,
  onToggle,
  changeFilter,
  challengesFilteredT1,
}: Props): React.JSX.Element {
  const allSelected = category.filters.every(
    //(categoryFilter: ChallengeFilter) => categoryFilter.type === ChallengeFilterType.VisualGap || activeFilters.includes(categoryFilter)
    (categoryFilter: ChallengeFilter) => activeFilters.includes(categoryFilter)
  );
  const someSelected = category.filters.some(
    //(categoryFilter: ChallengeFilter) => categoryFilter.type !== ChallengeFilterType.VisualGap && activeFilters.includes(categoryFilter)
    (categoryFilter: ChallengeFilter) => activeFilters.includes(categoryFilter)
  );

  const handleToggle = (): void => {
    onToggle(category, !allSelected, activeFilters, setActiveFilters);
  };

  const onChildToggle = (challengeFilter: ChallengeFilter, selected: boolean): void => {
    changeFilter(challengeFilter, selected, activeFilters, setActiveFilters);
  };

  return (
    <div
      key={category.name}
      className="category-filter-grid"
    >
      <button
        className={`btn category-checkbox ${allSelected ? "selected" : someSelected ? "indeterminate" : ""}`}
        type="button"
        onClick={handleToggle}
        title={category.name}
      />
      {category.filters.map((challengeFilter: ChallengeFilter) => (
        <ChallengeFilterBox
          key={challengeFilter.name}
          challengeFilter={challengeFilter}
          activeFilters={activeFilters}
          onToggle={onChildToggle}
          challengesFilteredT1={challengesFilteredT1}
        />
      ))}
    </div>
  );
}
