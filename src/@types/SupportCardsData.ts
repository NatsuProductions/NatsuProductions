import { ArrowUpRight } from "lucide-react";

export interface SupportCardData {
  id: number;
  imageAlt: string;
  title: string;
  description: string;
  pricingTiers: {
    name: string;
    price: string;
  }[];
  icon: typeof ArrowUpRight;
  buttonText: string;
  buttonLink: string;
}
