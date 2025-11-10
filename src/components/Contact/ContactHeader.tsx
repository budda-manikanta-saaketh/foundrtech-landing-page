import React from "react";
import { motion } from "framer-motion";

const ContactHeader: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 text-center overflow-hidden bg-transparent">
      {/* 🌌 Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
      <motion.div
        className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Floating badge */}
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-sm font-semibold tracking-wider"
            animate={{
              boxShadow: [
                "0 0 10px rgba(56,189,248,0.3)",
                "0 0 25px rgba(56,189,248,0.5)",
                "0 0 10px rgba(56,189,248,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            // CONTACT PORTAL
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Let’s Build Something <br className="sm:hidden" />{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              Extraordinary
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform your ideas into intelligent, future-ready products. Our
            team crafts digital experiences that feel like magic.
          </motion.p>
        </motion.div>
      </div>

      {/* Animated scanline */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, transparent 2px, transparent 4px)",
        }}
        animate={{ backgroundPosition: ["0 0", "0 40px"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default ContactHeader;
