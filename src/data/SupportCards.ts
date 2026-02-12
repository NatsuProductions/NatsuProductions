export interface SupportCardData {
  imageAlt: string;
  title: string;
  price: string;
  description: string;
}

export const SUPPORT_CARDS: SupportCardData[] = [
  {
    imageAlt: "Starter Art Example",
    title: "Starter Art",
    price: "from $50",
    description:
      "Entry-level artwork to enhance your project’s visual identity.",
  },
  {
    imageAlt: "Key Visual Design Example",
    title: "Key Visual Design",
    price: "from $XXx",
    description:
      "Striking key visuals for impactful storytelling and branding.",
  },
  {
    imageAlt: "Full Art Direction Example",
    title: "Full Art Direction",
    price: "from $XXX",
    description:
      "Comprehensive art direction for a cohesive and memorable look.",
  },
];
