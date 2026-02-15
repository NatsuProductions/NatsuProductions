import { PROCESS } from "@/data/Process";

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Process
        </h2>
        <p className="text-gray-600 text-lg mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          A streamlined approach to bring your vision to life, from concept to
          final cut.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PROCESS.map((step) => (
            <div
              key={step.count}
              className="flex flex-col items-center text-center gap-4"
            >
              <h1
                className={`text-7xl md:text-8xl lg:text-[12rem] font-bold ${step.color} drop-shadow-sm`}
              >
                {step.count}
              </h1>
              <div className="space-y-2">
                <h3 className={`text-lg md:text-2xl font-bold ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
