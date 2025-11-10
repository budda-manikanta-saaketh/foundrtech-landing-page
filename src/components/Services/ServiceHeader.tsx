import React from "react";
import { motion } from "framer-motion";

const ServicesHeader: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            animation: "grid-float 20s linear infinite",
          }}
        />
      </div>

      {/* Radial gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-cyan-500/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                  "0 0 40px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                Full-Stack Solutions
              </span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-3 bg-cyan-400 rounded-full"
                    animate={{ height: ["12px", "6px", "12px"] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Our{" "}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Services
                </span>
                {/* Glowing underline */}
                <motion.div
                  className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-lg"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scaleX: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We provide{" "}
              <span className="text-cyan-400 font-semibold">
                comprehensive full-cycle
              </span>{" "}
              development services, from{" "}
              <span className="text-purple-400 font-semibold">
                strategy and design
              </span>{" "}
              through{" "}
              <span className="text-pink-400 font-semibold">
                launch and support
              </span>{" "}
              — every project tailored to your goals.
            </p>
          </motion.div>

          {/* Tech stack indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "Strategy", icon: "◆" },
              { label: "Design", icon: "◆" },
              { label: "Development", icon: "◆" },
              { label: "Launch", icon: "◆" },
              { label: "Support", icon: "◆" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="text-cyan-400 text-xs"
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {item.icon}
                </motion.span>
                <span className="text-sm text-gray-400 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="inline-flex flex-col items-center gap-2 text-gray-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs font-mono tracking-wider">EXPLORE</span>
              <div className="w-6 h-10 rounded-full border-2 border-cyan-500/30 flex justify-center pt-2">
                <motion.div
                  className="w-1 h-2 bg-cyan-400 rounded-full"
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-45 rounded-lg opacity-30" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-purple-500/20 rotate-12 rounded-lg opacity-30" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent" />

      <style>{`
        @keyframes grid-float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHeader;
