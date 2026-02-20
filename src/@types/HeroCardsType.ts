import type { LucideIcon } from "lucide-react";

export interface HeroCard {
  title: string;
  description: string;
  color: string; // Tailwind color class for icon
  icon: LucideIcon;
}
