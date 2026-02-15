import type { ReactNode } from "react";
import type { ServiceCardGridCard } from "@/@types/ServiceCardGridCardType";

interface ServiceCardGridProps {
  title: ReactNode;
  description?: ReactNode;
  cards: ServiceCardGridCard[];
  gridClassName?: string;
  cardClassName?: string;
  headerClassName?: string;
  sectionId?: string;
}

export default function ServiceCardGrid({
  title,
  description,
  cards,
  gridClassName = "grid grid-cols-1 md:grid-cols-3 gap-8",
  cardClassName = "rounded-lg p-6 bg-white backdrop-blur-lg border border-white/30 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center min-h-[400px]",
  headerClassName = "text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-center",
  sectionId,
}: ServiceCardGridProps) {
  return (
    <section className="px-4 py-16 md:py-24" id={sectionId}>
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className={headerClassName}>{title}</h2>
        {description && (
          <p className="text-gray-600 text-lg mb-12">{description}</p>
        )}
        <div className={gridClassName}>
          {cards.map((card, idx) => (
            <div key={card.title + idx}>
              <div className={cardClassName}>
                {card.icon && (
                  <div className="flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                )}
                {card.image && (
                  <div className="w-full h-32 mb-4 flex items-center justify-center bg-gray-200/40 rounded-md overflow-hidden">
                    {card.image}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                {card.price && (
                  <p className="text-blue-600 font-semibold mb-2">
                    {card.price}
                  </p>
                )}
                {card.description && (
                  <p className="text-gray-700 mb-4 text-sm">
                    {card.description}
                  </p>
                )}
                {card.highlights && card.highlights.length > 0 && (
                  <ul className="text-gray-600 text-left mb-6 space-y-2 w-full max-w-xs mx-auto">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {card.extra}

                {card.button && (
                  <div className="w-full mt-auto">{card.button}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
