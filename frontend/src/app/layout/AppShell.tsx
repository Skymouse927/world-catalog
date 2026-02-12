// AppShell.tsx
// Top-level layout: manages category state and composes TopTabs, SubcategorySidebar, and main content.

import { TopTabs } from "./TopTabs";
import { SubcategorySidebar } from "./SubcategorySidebar";
import { useState } from "react";

// Static example category tree (replace with real data later)
export function AppShell() {
  // top-level categories mapped to their subcategories
  const categoryTree = {
    Characters: ["Eternals", "Gods", "Pirates", "Variants"],
    Monsters: ["Dragons", "Creatures"],
    Buildings: ["Structures", "Landmarks"],
  } as const;

  // derive top-level category names as a literal union array
  const topCategories = Object.keys(categoryTree) as Array<keyof typeof categoryTree>;
  // active top category (narrow union type)
  const [activeTopCategory, setActiveTopCategory] = useState<keyof typeof categoryTree>(topCategories[0]);
  // subcategories for the active top category
  const subCategories = categoryTree[activeTopCategory];
  // active subcategory (string)
  const [activeSubcategory, setActiveSubcategory] = useState<string>(subCategories[0]);

  // Select a top-level category: update top category and reset subcategory to the first one
  const handleSelectTopCategory = (name: keyof typeof categoryTree) => {
    setActiveTopCategory(name);
    setActiveSubcategory(categoryTree[name][0]);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Top horizontal tabs for top-level categories */}
      <TopTabs categories={topCategories} active={activeTopCategory} onSelectCategory={handleSelectTopCategory} />

      <div style={{ display: "flex" }}>
        {/* Left sidebar listing subcategories for the active top category */}
        <SubcategorySidebar subcategories={subCategories} active={activeSubcategory} onSelectSubcategory={setActiveSubcategory} />

        {/* Main content area */}
        <main style={{ flex: 1, padding: "24px" }}>
          {/* Display currently selected subcategory */}
          <h2 style={{ marginTop: 0 }}>{activeSubcategory}</h2>

          <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
            {/* Placeholder for image */}
            <div
              style={{
                width: "320px",
                height: "320px",
                border: "1px solid #444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </div>

            {/* Description panel for the selected entry */}
            <div
              style={{
                flex: 1,
                minHeight: "320px",
                border: "1px solid #444",
                padding: "16px",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Description</h3>
              <p>
                TODO: This panel will show the selected entry’s long description.
              </p>
            </div>
          </div>

          {/* Navigation controls (placeholder) */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
            <button>{"< Back"}</button>
            <button>{"Next >"}</button>
          </div>
        </main>
      </div>
    </div>
  );
}