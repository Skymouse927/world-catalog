# 🌍 World Catalog

A scalable worldbuilding catalog application built with **React + TypeScript**, designed to model hierarchical categories, multi-category entries, and role-based editing.

This project is being developed as a **resume-focused full-stack architecture exercise**, emphasizing strong typing, scalable data modeling, and professional Git workflow discipline.

---

# 🚀 Tech Stack

- **Frontend:** React (Vite) + TypeScript
- **State Management:** React Hooks
- **Architecture Pattern:** Smart parent / dumb child components
- **Version Control:** Git + GitHub (feature branch workflow)
- **Planned Backend:** Supabase (Postgres + Storage)
- **Planned Deployment:** Vercel / Netlify

---

# 🎯 Project Objectives

- Build a hierarchical catalog system:
  - Top Categories (Characters, Monsters, Buildings)
  - Subcategories (Eternals, Gods, Pirates, etc.)
  - Entries that can belong to multiple subcategories
- Implement scalable data modeling suitable for database migration
- Use strong TypeScript typing and generics
- Follow professional Git branching workflow
- Build incrementally with clean architectural separation
- Prepare for future authentication + role-based editing

---

# 🏗 Architecture Overview

## Category Structure

```
Top Category
    └── Subcategories
            └── Entries
```

- Each subcategory belongs to exactly one top category
- Entries can belong to multiple subcategories
- Entries are alphabetically ordered within each subcategory
- UI state is controlled at the layout level (`AppShell`)

---

# 📦 Data Model (Current Mock Structure)

## Category Tree

```ts
const categoryTree = {
  Characters: ["Eternals", "Gods", "Pirates", "Variants"],
  Monsters: ["Dragons", "Creatures"],
  Buildings: ["Structures", "Landmarks"],
};
```

## Entry Model (Flat Structure – Scalable Design)

```ts
type Entry = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subcategories: string[];
};
```

### Why Flat?
- Avoid deeply nested state
- Easier filtering
- Maps directly to relational database design
- Scales to hundreds of entries
- Supports multi-subcategory membership cleanly

---

# 🧠 Design Principles

- **Single Source of Truth** — `AppShell` owns all state.
- **Dumb Components** — `TopTabs` and `SubcategorySidebar` are presentational.
- **Generic Components** — `TopTabs` uses TypeScript generics for safe key handling.
- **Event-Driven State Updates** — Parent controls logic, children emit events.
- **Reset State on Dependency Change** — Subcategory resets when top category changes.
- **Feature-Based Git Workflow** — All features built in isolated branches.
- **Incremental Architecture** — UI → Mock Data → Real DB → Auth → Deployment.

---

# 📂 Folder Structure

```
src/
  app/
    layout/
      AppShell.tsx
      TopTabs.tsx
      SubcategorySidebar.tsx
  api/
    mockData.ts
  types/
    models.ts
```

---

# 🔄 Git Workflow Standard

Every feature follows:

```bash
git checkout -b feature/<feature-name>
git add .
git commit -m "feat(scope): clear description"
git push
```

Only stable features are merged into `main`.

Commit message style:
- `feat(scope):`
- `fix(scope):`
- `refactor(scope):`

---

# 📍 Current Progress

## Phase 1 — Layout Foundation ✅

- Removed default Vite demo code
- Fixed CSS centering issue
- Created layout structure
- Built `AppShell`
- Built `TopTabs`
- Built `SubcategorySidebar`
- Implemented static category tree

Result:
- Full-page layout matching mockup

---

## Phase 2 — Interactive Category State ✅

- Introduced `useState` for:
  - `activeTopCategory`
  - `activeSubcategory`
- Derived subcategories dynamically from categoryTree
- Implemented click handlers
- Added reset logic when switching top categories
- Converted `TopTabs` to generic TypeScript component
- Removed hardcoded UI state

Result:
- Fully interactive category + subcategory selection
- No stale state bugs
- Clean type-safe architecture

---

# 🗺 Full Project Plan

---

## Phase 3 — Entry System (Mock Data)

### Objective
Introduce scalable entry data and navigation.

### Tasks
- [ ] Create `Entry` type
- [ ] Create mock dataset
- [ ] Allow entries to belong to multiple subcategories
- [ ] Filter entries by active subcategory
- [ ] Sort entries alphabetically
- [ ] Add `activeEntryIndex` state
- [ ] Implement Back / Next navigation
- [ ] Display entry image + description

---

## Phase 4 — Editor Authentication

### Objective
Introduce role-based access.

### Planned Features
- [ ] Editor access code system
- [ ] Editor login form
- [ ] Role-based state
- [ ] Editor-only routes
- [ ] Entry editing UI
- [ ] Subcategory management UI

---

## Phase 5 — Database Integration (Supabase)

### Objective
Replace mock data with persistent backend.

### Planned Database Tables
- top_categories
- subcategories
- entries
- entry_subcategories (join table)
- users

### Tasks
- [ ] Create Supabase project
- [ ] Build relational schema
- [ ] Replace mock data with fetch logic
- [ ] Implement CRUD operations
- [ ] Add image upload via Supabase Storage

---

## Phase 6 — UI Refinement

- [ ] Improve styling (responsive design)
- [ ] Add loading states
- [ ] Add empty-state handling
- [ ] Improve accessibility
- [ ] Improve component modularity

---

## Phase 7 — Routing + Pretty URLs

- [ ] Add React Router
- [ ] Support category-based URLs
- [ ] Support entry-based URLs
- [ ] Enable deep linking
- [ ] Preserve state via URL params

---

## Phase 8 — Deployment

- [ ] Deploy to Vercel / Netlify
- [ ] Connect Supabase production DB
- [ ] Configure environment variables
- [ ] Add custom domain
- [ ] Configure CI checks

---

# 📈 Skills Demonstrated

- React component composition
- State coordination
- TypeScript generics
- Data modeling for relational systems
- Incremental feature development
- Professional Git workflow
- Separation of concerns
- Scalable architecture design

---

# 🔮 Long-Term Expansion

- Advanced search & filtering
- Tag system
- Markdown descriptions
- Image galleries
- User accounts with viewing preferences
- Performance optimization
- Unit tests

---

# 🛠 Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 📄 License

Personal educational and portfolio project.
