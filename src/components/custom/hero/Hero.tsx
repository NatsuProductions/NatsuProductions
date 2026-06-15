import { Send } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { heroCards } from "@/data/HeroCards";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo_icon_black.png";
export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen pt-24 flex items-center justify-center"
        id="hero"
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.img
            src={logoIcon}
            alt="Natsu Productions Logo"
            className="h-60 w-auto mx-auto  drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onContextMenu={(e) => e.preventDefault()}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-sm"
          >
            Natsu Productions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-blue-700 mb-8 drop-shadow-sm"
          >
            Elevate Your Vision Through Story-Driven Music Videos
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            An anime-inspired video editing, visual design, and music production
            <br />
            <span className="text-blue-500 font-medium">
              Based in the Philippines
            </span>{" "}
            •{" "}
            <span className="text-pink-500 font-medium">
              Collaborating with creators worldwide
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 w-48 b bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
            >
              <Link to="/quote-form">
                <Send className="h-4 w-4 mr-2" />
                Request a Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 w-48 border-blue-200 hover:border-blue-400"
            >
              <Link to="#services">View Pricing</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* STUDIO OVERVIEW / DIFFERENTIATOR SECTION */}
      <section className="relative pt-5 pb-32 px-4">
        <div className="max-w-7xl mx-auto  text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight drop-shadow-sm"
          >
            Crafting the Memories You Envision
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Anime-inspired music video production studio, uniting distinct
            artistic voices under one creative direction.
          </motion.p>
          <motion.p
            className="hidden md:block text-xl text-gray-700 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            High-quality video editing, visual design, and music production for
            indie creators and agencies. We help bring your vision to life with
            expertise and elegance.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            {heroCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1 bg-white/40 backdrop-blur-xl rounded-lg shadow-md p-8  flex flex-col items-center"
              >
                <span className="mb-3 text-blue-500">
                  <card.icon className={`h-10 w-10 ${card.color}`} />
                </span>
                <h3 className={`font-semibold ${card.color} mb-2 text-xl`}>
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="text-base lg:text-xl px-8 py-4 lg:px-12 w-48 lg:w-64 b bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
          >
            <Link to="/quote-form">
              <Send className="h-4 w-4 mr-2" />
              Request a Quote
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
