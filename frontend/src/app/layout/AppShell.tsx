// AppShell.tsx
// Top-level layout: manages category state and composes TopTabs, SubcategorySidebar, and main content.

import { TopTabs } from "./TopTabs";
import { SubcategorySidebar } from "./SubcategorySidebar";
import { useState } from "react";
import { categoryTree, mockEntries } from "../../api/mockData";
import { EntryViewer } from "./EntryViewer";


// Main layout container (single source of truth for UI state)
export function AppShell() {
  // Derive top-level category names from categoryTree keys
  const topCategories = Object.keys(categoryTree) as Array<keyof typeof categoryTree>;

  // Currently selected top-level category
  const [activeTopCategory, setActiveTopCategory] =
    useState<keyof typeof categoryTree>(topCategories[0]);

  // Subcategories belonging to the selected top category
  const subCategories = categoryTree[activeTopCategory];

  // Currently selected subcategory
  const [activeSubcategory, setActiveSubcategory] =
    useState<string>(subCategories[0]);

  // Index of the currently selected entry within the filtered list
  const [activeEntryIndex, setActiveEntryIndex] = useState(0);

  // Handle selecting a top-level category
  // Resets subcategory and entry index to avoid stale state
  const handleSelectTopCategory = (name: keyof typeof categoryTree) => {
    setActiveTopCategory(name);
    setActiveSubcategory(categoryTree[name][0]);
    setActiveEntryIndex(0);
  };

  // Handle selecting a subcategory
  // Resets entry index to the first result
  const handleSelectSubcategory = (name: string) => {
    setActiveSubcategory(name);
    setActiveEntryIndex(0);
  };

  // Filter entries that belong to the selected subcategory
  const visibleEntries = mockEntries.filter((e) =>
    e.subcategories.includes(activeSubcategory)
  );

  // Sort entries alphabetically by name (derived data, not stored in state)
  const sortedEntries = visibleEntries
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // Boolean flag to determine if entries exist
  const hasEntries = sortedEntries.length > 0;

  // Clamp index to prevent out-of-range access
  const safeIndex = hasEntries
    ? Math.min(activeEntryIndex, sortedEntries.length - 1)
    : 0;

  // Currently active entry (or null if none exist)
  const activeEntry = hasEntries ? sortedEntries[safeIndex] : null;

  // Navigate to previous entry (never below 0)
  const handlePrev = () => {
    setActiveEntryIndex((i) => Math.max(i - 1, 0));
  };

  // Navigate to next entry (never above last index)
  const handleNext = () => {
    setActiveEntryIndex((i) =>
      Math.min(i + 1, sortedEntries.length - 1)
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Top horizontal tabs for major categories */}
      <TopTabs
        categories={topCategories}
        active={activeTopCategory}
        onSelectCategory={handleSelectTopCategory}
      />

      <div style={{ display: "flex" }}>
        {/* Sidebar listing subcategories for the selected top category */}
        <SubcategorySidebar
          subcategories={subCategories}
          active={activeSubcategory}
          onSelectSubcategory={handleSelectSubcategory}
        />

        {/* Main content panel */}
        <main style={{ flex: 1, padding: "24px" }}>
          {/* Display currently selected subcategory */}
          <h2 style={{ marginTop: 0 }}>{activeSubcategory}</h2>

          <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
            <EntryViewer
            activeEntry={activeEntry}
            positionText={
                activeEntry ? `${safeIndex + 1} / ${sortedEntries.length}` : ""
            }
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={!hasEntries || safeIndex === 0}
            disableNext={!hasEntries || safeIndex === sortedEntries.length - 1}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
