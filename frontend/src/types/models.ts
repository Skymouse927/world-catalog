// src/types/models.ts
import type { Subcategory } from "../api/mockData";

export type Entry = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    subcategories: Subcategory[];

};
