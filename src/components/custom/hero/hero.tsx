import { motion } from "motion/react";
import { GRADIENT_ORBS } from "@/data/GradientOrbs";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-white">
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        {GRADIENT_ORBS.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.colors[0]}, ${orb.colors[1]}, transparent)`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-white/20" />
    </section>
  );
}
