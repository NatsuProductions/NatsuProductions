import { PROJECTS } from "@/data/Projects";

export default function WorkShowcase() {
  return (
    <section className="px-4 pt-1 mb-16" id="work">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Selected Works
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          A glimpse into the stories we've helped bring to life.
        </p>

        {/* Pyramid Layout */}
        <div className="space-y-8 md:space-y-12">
          {/* Top Row - 2 items (Featured) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="space-y-4">
                <div className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
          {/* Bottom Row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.slice(2, 5).map((project) => (
              <div key={project.id}>
                <div className="group relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                  {/* Hover title bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 h-16 flex items-center">
                    <h3 className="text-white text-sm md:text-base font-semibold line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
