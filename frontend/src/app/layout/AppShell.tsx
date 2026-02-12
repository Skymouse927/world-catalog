import { TopTabs } from "./TopTabs";
import { SubcategorySidebar } from "./SubcategorySidebar";

// AppShell matches your mockup layout.
// For now we use static arrays (fake data).
// Later, these will come from Supabase.

export function AppShell() {
  const topCategories = ["Characters", "Monsters", "Buildings"];
  const subcategories = ["Eternals", "Gods", "Pirates"];

  return (
    <div style={{ minHeight: "100vh" }}>
      <TopTabs categories={topCategories} active="Characters" />

      <div style={{ display: "flex" }}>
        <SubcategorySidebar subcategories={subcategories} active="Eternals" />

        <main style={{ flex: 1, padding: "24px" }}>
          <h2 style={{ marginTop: 0 }}>Eternals</h2>

          <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
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

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
            <button>{"< Back"}</button>
            <button>{"Next >"}</button>
          </div>
        </main>
      </div>
    </div>
  );
}
