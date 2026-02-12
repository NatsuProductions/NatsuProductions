import { QUICK_REQUEST_SERVICES } from "@/data/Services";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCardGrid from "./ServiceCardGrid";
import type { ServiceCardGridCard } from "@/@types/ServiceCardGridCardType";

export default function QuickRequestService() {
  const cards: ServiceCardGridCard[] = QUICK_REQUEST_SERVICES.map(
    (service) => ({
      title: service.title,
      price: service.price,
      highlights: service.highlights,
      button: (
        <Button
          asChild
          className="text-base px-8 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
        >
          <Link
            to={service.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {service.buttonText}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ),
    }),
  );

  return (
    <ServiceCardGrid
      title={"Quick Request Service"}
      description={
        "Fast, streamlined editing designed for creators who need efficient turnaround with simplified production scope."
      }
      cards={cards}
      cardClassName="rounded-lg p-4 md:p-5 bg-white backdrop-blur-lg border border-white/30 shadow hover:shadow-lg transition-all flex flex-col items-center text-center text-base md:text-base min-h-0"
    />
  );
}
