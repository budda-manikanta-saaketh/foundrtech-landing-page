import React from "react";
import { motion } from "framer-motion";

const PageHeader: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 text-center overflow-hidden bg-black">
      {/* === BACKGROUND ELEMENTS === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[160px] rounded-full"
        animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing Label */}
          <motion.div
            className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            animate={{
              boxShadow: [
                "0 0 15px rgba(6,182,212,0.2)",
                "0 0 35px rgba(147,51,234,0.4)",
                "0 0 15px rgba(6,182,212,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-sm font-mono tracking-wider text-cyan-300">
              // PROJECT ARCHIVES
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            Our Project <br className="sm:hidden" />{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Portfolio
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our trailblazing creations — from immersive{" "}
            <span className="text-cyan-400 font-medium">mobile apps</span> to{" "}
            <span className="text-blue-400 font-medium">SaaS platforms</span>{" "}
            and{" "}
            <span className="text-purple-400 font-medium">
              AI-driven solutions
            </span>{" "}
            that define the next generation of digital innovation.
          </motion.p>
        </motion.div>

        {/* Bottom animated accent line */}
        <motion.div
          className="mt-12 mx-auto w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      {/* Subtle scanline animation overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, transparent 2px, transparent 4px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "0px 50px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default PageHeader;
