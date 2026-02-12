import { SERVICES } from "@/data/Services";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCardGrid from "./ServiceCardGrid";
import type { ServiceCardGridCard } from "@/@types/ServiceCardGridCardType";

export default function MainService() {
  const cards: ServiceCardGridCard[] = SERVICES.map((service) => ({
    icon: <service.icon className="h-10 w-10 text-blue-600" />,
    title: service.title,
    price: service.price,
    description: service.description,
    highlights: service.highlights,
    button: (
      <Button
        asChild
        className="text-base px-8 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
      >
        <Link to={service.buttonLink} target="_blank" rel="noopener noreferrer">
          {service.buttonText}
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    ),
  }));

  return (
    <ServiceCardGrid
      title={"Studio Music Video Production"}
      description={
        "Every project is different. Our studio offers structured creative tiers designed to support projects from focused edits to full-scale storytelling productions."
      }
      cards={cards}
      headerClassName="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 text-center"
    />
  );
}
