type TopTabsProps = {
  categories: string[];
  active: string;
};

export function TopTabs({ categories, active }: TopTabsProps) {
  return (
    <header style={{ padding: "16px 24px", borderBottom: "1px solid #444" }}>
      <nav style={{ display: "flex", gap: "12px" }}>
        {categories.map((name) => (
          <button
            key={name}
            style={{
              padding: "8px 12px",
              border: "1px solid #444",
              background: name === active ? "#222" : "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            {name}
          </button>
        ))}
      </nav>
    </header>
  );
}
