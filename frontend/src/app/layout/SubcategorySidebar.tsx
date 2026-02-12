import type { Subcategory } from "../../api/mockData";

type SidebarProps = {
  subcategories: readonly Subcategory[];
  active: Subcategory;
  onSelectSubcategory: (name: Subcategory) => void;
};


export function SubcategorySidebar({ subcategories, active, onSelectSubcategory }: SidebarProps) {
  return (
    <aside
      style={{
        width: "160px",
        borderRight: "1px solid #444",
        padding: "16px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Subcategories</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {subcategories.map((name) => (
          <button
            key={name}
            onClick={() => onSelectSubcategory(name)}
            style={{
              textAlign: "left",
              padding: "8px 10px",
              border: "1px solid #444",
              background: name === active ? "#222" : "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </aside>
  );
}
