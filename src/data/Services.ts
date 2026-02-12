import { Wrench, Film, Palette } from "lucide-react";

export const SERVICES = [
  {
    title: "Studio Core",
    price: "Starting at $400",
    description: "Clean, elegant editing focused on mood and clarity.",
    highlights: [
      "Creative direction support",
      "Professional editing & pacing",
      "Consistent visual tone",
    ],
    icon: Wrench, // Wrench icon for foundational editing
    buttonText: "View Examples",
    buttonLink:
      "https://www.youtube.com/watch?v=GItX4jMDgzc&list=PL2-LdSGYhoU2GGuPHj0qrWQnyhHBmPpiv&index=1",
  },
  {
    title: "Studio Advanced",
    price: "Starting at $700",
    description:
      "Narrative-driven editing designed for emotional storytelling.",
    highlights: [
      "Rhythm-based editing",
      "Advanced motion graphics",
      "Visual continuity",
    ],
    icon: Film, // Film icon for storytelling and creativity
    buttonText: "View Examples",
    buttonLink:
      "https://www.youtube.com/playlist?list=PL2-LdSGYhoU0lI7mHrsLOvaf24UJmv5h8",
  },
  {
    title: "Studio Signature",
    price: "Starting at $1000",
    description: "Full creative ownership with signature visual direction.",
    highlights: [
      "Concept development",
      "Experimental editing",
      "Senior creative oversight",
    ],
    icon: Palette, // Palette icon for artistic creativity and premium quality
    buttonText: "View Examples",
    buttonLink:
      "https://www.youtube.com/playlist?list=PL2-LdSGYhoU21oXEAKv48fD9EO2xr-WKa",
  },
];

export const QUICK_REQUEST_SERVICES = [
  {
    title: "Creative Lite",
    price: "Starting at $80",
    icon: Wrench,
    highlights: ["Simple Covers", "Lyric Videos", "Minimal Motion"],
    buttonText: "View Examples",
    buttonLink: "https://www.youtube.com/watch?v=PTvmrKT9XIs",
  },
  {
    title: "Creative Standard",
    price: "Starting at $150",
    icon: Film,
    highlights: ["Rhythm-based Edits", "Pop Covers", "Prepared Assets"],
    buttonText: "View Examples",
    buttonLink: "https://www.youtube.com/watch?v=-RSZviOIez8",
  },
  {
    title: "Creative Plus",
    price: "Starting at $250",
    icon: Palette,
    highlights: [
      "Energetic Edits",
      "Multi-vocal Projects",
      "Heavy Motion Requests",
    ],
    buttonText: "View Examples",
    buttonLink: "https://www.youtube.com/watch?v=VVQjben5eVg",
  },
];
