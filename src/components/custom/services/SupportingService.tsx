import { SUPPORT_CARDS } from "@/data/SupportCards";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {SUPPORT_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg  bg-white/20 backdrop-blur-lg  hover:shadow-lg transition-all flex flex-col items-center"
            >
              {/* Image placeholder */}
              <div className="w-full h-60 mb-4 flex items-center justify-center rounded-t-md overflow-hidden">
                <img
                  src={card.imageAlt}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{card.price}</p>
                <p className="text-gray-700 mb-4 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
