import { motion } from "motion/react";
import logoIcon from "@/assets/logo_icon_black.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative h-[calc(110vh-5rem)] flex items-center justify-center ">
      {/* Subtle overlay for depth */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-white/20" /> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.img
          src={logoIcon}
          alt="Natsu Productions Logo"
          className="h-32 w-auto mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onContextMenu={(e) => e.preventDefault()}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4"
        >
          Natsu Productions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold text-gray-700 mb-8"
        >
          Elevate Your Vision Through Story-Driven Music Videos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-md md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Natsu Productions is a collaborative anime-inspired creative studio.
          Our team unites distinct artistic voices under one cohesive creative
          direction, delivering high-quality video editing, visual design, and
          music production.
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
            className="text-base px-8 w-48 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
          >
            <Link to="#quote">
              Request a Quote
              <Send className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 w-48"
          >
            <Link to="#services">View Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
