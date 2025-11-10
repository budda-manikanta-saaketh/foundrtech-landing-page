import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              LET'S COLLABORATE
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Your Next Project?
            </span>
          </h2>

          {/* Decorative Lines */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 40 - i * 5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Let's bring your ideas to life with innovation, precision, and
          cutting-edge technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.div
            className="relative group"
            onHoverStart={() => setHoveredButton(0)}
            onHoverEnd={() => setHoveredButton(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Glow */}
            <div
              className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-0 ${
                hoveredButton === 0 ? "opacity-70" : ""
              } blur-xl transition-opacity duration-500`}
            />

            <a
              href="/contact"
              className="relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 rounded-xl font-bold text-lg overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: "-100%" }}
                animate={hoveredButton === 0 ? { x: "0%" } : { x: "-100%" }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10">Start Your Project</span>

              {/* Arrow Icon */}
              <motion.span
                className="relative z-10 text-xl"
                animate={hoveredButton === 0 ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>

              {/* Scan Lines */}
              {hoveredButton === 0 && (
                <>
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-white/50"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-white/30"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5,
                    }}
                  />
                </>
              )}
            </a>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            className="relative group"
            onHoverStart={() => setHoveredButton(1)}
            onHoverEnd={() => setHoveredButton(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Border Glow */}
            <div
              className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-gray-500 via-white to-gray-500 opacity-0 ${
                hoveredButton === 1 ? "opacity-50" : ""
              } blur-md transition-opacity duration-500`}
            />

            <a
              href="/services"
              className="relative flex items-center gap-3 bg-white/5 border border-white/20 backdrop-blur-xl px-10 py-5 rounded-xl font-bold text-lg overflow-hidden"
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0 }}
                animate={hoveredButton === 1 ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10">View Our Services</span>

              {/* Icon */}
              <motion.span
                className="relative z-10 text-xl"
                animate={hoveredButton === 1 ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                ⚡
              </motion.span>

              {/* Scan Line */}
              {hoveredButton === 1 && (
                <motion.div
                  className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { icon: "⚡", label: "Fast Delivery" },
            { icon: "🎯", label: "Precision Focused" },
            { icon: "💎", label: "Premium Quality" },
            { icon: "🚀", label: "Scalable Solutions" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(56, 189, 248, 0.3)",
              }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-sm text-gray-300 font-semibold">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Tech Pattern */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 flex"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <div
          className="flex-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"
          style={{ opacity: 0.3 }}
        />
        <div
          className="flex-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"
          style={{ opacity: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
