type SidebarProps = {
  subcategories: string[];
  active: string;
};

export function SubcategorySidebar({ subcategories, active }: SidebarProps) {
  return (
    <aside
      style={{
        width: "260px",
        borderRight: "1px solid #444",
        padding: "16px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Subcategories</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {subcategories.map((name) => (
          <button
            key={name}
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
