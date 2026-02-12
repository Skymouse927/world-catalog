import type { Entry } from "../types/models";


export const categoryTree = {
    Characters: ["Eternals", "Gods", "Pirates", "Variants"],
    Monsters: ["Dragons", "Creatures"],
    Buildings: ["Structures", "Landmarks"],
} as const;

export const mockEntries: Entry[] = [
  {
    id: "e1",
    name: "Astra Vale",
    description: "An Eternal who records history through living ink.",
    imageUrl: "https://picsum.photos/seed/astra/600/400",
    subcategories: ["Eternals", "Variants"], // multi-subcategory example
  },
  {
    id: "e2",
    name: "Korrin Tideblade",
    description: "A pirate captain with a compass that points to regret.",
    imageUrl: "https://picsum.photos/seed/korrin/600/400",
    subcategories: ["Pirates"],
  },
  {
    id: "e3",
    name: "Embermaw",
    description: "A dragon whose breath crystallizes into glass.",
    imageUrl: "https://picsum.photos/seed/embermaw/600/400",
    subcategories: ["Dragons", "Creatures"], // multi-subcategory example
  },
];
