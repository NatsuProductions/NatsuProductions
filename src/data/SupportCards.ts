import { ArrowUpRight } from "lucide-react";
export interface SupportCardData {
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

export const SUPPORT_CARDS: SupportCardData[] = [
  {
    imageAlt: "Visual Design & Illustration Example",
    title: "Visual Design & Illustration",
    description: "Artwork created to elevate storytelling and identity.",
    pricingTiers: [
      { name: "Starter Art", price: "from $50" },
      { name: "Key Visual Design", price: "from $XXX" },
      { name: "Full Art Direction", price: "from $XXX" },
    ],
    icon: ArrowUpRight,
    buttonText: "Also in Custom Quotes",
    buttonLink: "https://natsuproductions.com/contact",
  },
  {
    imageAlt: "Audio Production & Sound Design Example",
    title: "Audio Production & Mixing",
    description: "Professional sound tailored for music video presentation.",
    pricingTiers: [
      { name: "Basic Mix", price: "from $50" },
      { name: "Advanced Mix", price: "from $XXX" },
      { name: "Full Production", price: "from $125" },
    ],
    icon: ArrowUpRight,
    buttonText: "Also in Custom Quotes",
    buttonLink: "https://natsuproductions.com/contact",
  },
];
