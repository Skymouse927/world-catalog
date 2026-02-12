// type TopTabsProps = {
//   categories: string[];
//   active: string;
//   onSelectCategory: (name: string) => void;
// };
type TopTabsProps<T extends string> = {
  categories: T[];
  active: T;
  onSelectCategory: (name: T) => void;
};


export function TopTabs<T extends string>({ categories, active, onSelectCategory }: TopTabsProps<T>) {
  return (
    <header style={{ padding: "16px 24px", borderBottom: "1px solid #444" }}>
      <nav style={{ display: "flex", gap: "12px" }}>
        {categories.map((name) => (
          <button
            key={name}
            onClick={() => onSelectCategory(name)}
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
