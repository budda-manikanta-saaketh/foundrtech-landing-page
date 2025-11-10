import React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-28 bg-black overflow-hidden text-center">
      {/* === BACKGROUND GRID + GLOWS === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <motion.div
            className="inline-block mb-5 px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6,182,212,0.3)",
                "0 0 35px rgba(147,51,234,0.4)",
                "0 0 20px rgba(6,182,212,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-sm text-cyan-400 font-semibold tracking-wider">
              // READY TO BUILD SOMETHING AMAZING
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Let’s Create The Future Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Collaborate with our team of innovators, designers, and engineers to
            bring your ideas to life — faster, smarter, and more beautifully
            than ever.
          </p>
        </motion.div>

        {/* === CTA Buttons === */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Primary Button */}
          <motion.a
            href="/contact"
            className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl text-white overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute inset-[1px] bg-black/80 rounded-xl" />
            <span className="relative flex items-center gap-2 z-10">
              <Send className="w-5 h-5 text-cyan-300" />
              Start Your Project
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href="/projects"
            className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl text-gray-300 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 z-10">
              <Sparkles className="w-5 h-5 text-cyan-300" />
              View Our Work
            </span>
          </motion.a>
        </motion.div>

        {/* === DECORATIVE ELEMENTS === */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-2 text-gray-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex gap-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="w-2 h-2 rounded-full bg-purple-400" />
          </motion.div>
          <span className="tracking-widest uppercase text-xs">
            Initiate Communication Channel
          </span>
        </motion.div>
      </div>

      {/* Animated bottom scanline */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default CTASection;
