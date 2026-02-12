import type { Entry } from "../types/models";


export const categoryTree = {
    Characters: ["Eternals", "Gods", "Pirates", "Variants"],
    Monsters: ["Dragons", "Creatures"],
    Buildings: ["Structures", "Landmarks"],
} as const;

export const mockEntries: Entry[] = [
  {
    id: "e1",
    name: "Cedric Diggery",
    description: "- Bounty hunter\n- Standard harry potter powers\n",
    imageUrl: "https://picsum.photos/seed/astra/600/400",
    subcategories: ["Eternals", "Variants"], // multi-subcategory example
  },
  {
    id: "e2",
    name: "Beach Grandma",
    description: "- Strong independent woman.",
    imageUrl: "https://picsum.photos/seed/korrin/600/400",
    subcategories: ["Pirates"],
  },
  {
    id: "e3",
    name: "Beach Grandpa",
    description: "- A variant of the grandparent's series who enjoys long walks on the beach,\n- snuggling in with a good book,\n- and strong independent women.\n- Was apart of the book club before disbandment\n- We may never… EVER… use him again *sinister laughter*",
    imageUrl: "https://picsum.photos/seed/embermaw/600/400",
    subcategories: ["Pirates", "Eternals"], // multi-subcategory example
  },
];
