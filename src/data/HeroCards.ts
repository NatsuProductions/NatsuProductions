import type { HeroCard } from "@/@types/HeroCardsType";
import { Users, Layers, Globe2 } from "lucide-react";

export const heroCards: HeroCard[] = [
  {
    title: "Collaborative Team",
    description: "Diverse artists with unique anime-inspired styles.",
    color: "text-blue-500",
    icon: Users,
  },
  {
    title: "Tailored Production",
    description: "Structured tiers for focused edits or full storytelling.",
    color: "text-pink-500",
    icon: Layers,
  },
  {
    title: "Global Reach",
    description:
      "Philippines-based studio with contributors from Indonesia, Australia, and beyond.",
    color: "text-yellow-500",
    icon: Globe2,
  },
];
