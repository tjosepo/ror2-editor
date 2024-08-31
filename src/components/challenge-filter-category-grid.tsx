import React from "react";
import { ChallengeFilter, ChallengeFilterCategory, ChallengeFilterType } from "../challenge-filters";

import "./challenge-filter-category-grid.scss";
import ChallengeFilterBox from "./challenge-filter-box";

interface Props {
  category: ChallengeFilterCategory;
  activeFilters: ChallengeFilter[];
  onToggle: (category: ChallengeFilterCategory, selected: boolean) => void;
  changeFilter: (challengeFilter: ChallengeFilter, checked: boolean) => void;
}

export default function ChallengeFilterCategoryGrid({
  category,
  activeFilters,
  onToggle,
  changeFilter,
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
    onToggle(category, !allSelected);
  };

  return (
    <div
      key={category.name}
      className="category-filter-grid"
      style={{
        marginBottom: "8px",
      }}
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
          onToggle={changeFilter}
        />
      ))}
    </div>
  );
}
