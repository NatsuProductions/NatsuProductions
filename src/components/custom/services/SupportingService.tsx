import { Button } from "@/components/ui/button";
import { SUPPORT_CARDS } from "@/data/SupportCards";
import { Link } from "react-router-dom";

export default function SupportingService() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-center">
          Supporting Production Services
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Additional creative services to elevate your project.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full lg:w-3/4">
            {SUPPORT_CARDS.map((card) => (
              <div className="rounded-lg p-4 md:p-5 bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center text-base md:text-base min-h-0 ">
                {/* Image placeholder */}
                {/* <div className="w-full h-60 mb-4 flex items-center justify-center rounded-t-md overflow-hidden">
                <img
                  src={card.imageAlt}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div> */}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {card.description}
                  </p>
                  <ul className="text-gray-600 text-left mb-6 space-y-2 w-full max-w-xs mx-auto">
                    {card.pricingTiers.map((h, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        {h.name}: {h.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full mt-auto">
                  <Button className="text-base px-8 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer">
                    <Link
                      to={card.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.buttonText}
                      <card.icon className="inline-block ml-2 " />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
