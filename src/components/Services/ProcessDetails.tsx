import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Phase {
  id: number;
  title: string;
  gradient: string;
  icon: string;
}

interface PhaseDetail {
  heading: string;
  body: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Discovery",
    gradient: "from-cyan-400 to-blue-600",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Design",
    gradient: "from-purple-400 to-pink-600",
    icon: "✨",
  },
  {
    id: 3,
    title: "Development",
    gradient: "from-emerald-400 to-teal-600",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Testing",
    gradient: "from-amber-400 to-orange-600",
    icon: "🛡️",
  },
  { id: 5, title: "Launch", gradient: "from-rose-400 to-red-600", icon: "🚀" },
  {
    id: 6,
    title: "Support",
    gradient: "from-indigo-400 to-purple-600",
    icon: "♾️",
  },
];

const details: Record<number, PhaseDetail> = {
  1: {
    heading: "Phase 1: Discovery & Strategy",
    body: [
      "We begin by understanding your business, market, and audience.",
      "Deliverables: Requirements, personas, and technical blueprint.",
    ],
  },
  2: {
    heading: "Phase 2: Design & Prototyping",
    body: [
      "Crafting stunning and functional user experiences.",
      "Deliverables: Wireframes, design system, prototypes.",
    ],
  },
  3: {
    heading: "Phase 3: Development",
    body: [
      "Building scalable systems using React, Flutter, Node, and .NET.",
      "Deliverables: Working application with tested features.",
    ],
  },
  4: {
    heading: "Phase 4: Testing & QA",
    body: [
      "Ensuring reliability, performance, and security at every step.",
      "Deliverables: QA reports, UAT approvals.",
    ],
  },
  5: {
    heading: "Phase 5: Launch & Deployment",
    body: [
      "Deployment to production and stores, ensuring a seamless rollout.",
      "Deliverables: Live product, analytics, and support setup.",
    ],
  },
  6: {
    heading: "Phase 6: Support & Optimization",
    body: [
      "Monitoring, updates, and scaling to ensure continued success.",
      "Deliverables: Monthly reports and feature rollouts.",
    ],
  },
};

const ProcessDetails: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  const activePhase = phases.find((p) => p.id === active)!;

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.3)",
                "0 0 40px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              // INTERACTIVE WORKFLOW
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Process in Detail
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Click a phase to explore our{" "}
            <span className="text-cyan-400 font-semibold">tools</span>,{" "}
            <span className="text-purple-400 font-semibold">methodology</span>,
            and{" "}
            <span className="text-pink-400 font-semibold">deliverables</span>
          </p>
        </motion.div>

        {/* Phase Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {phases.map((phase, index) => {
            const isActive = active === phase.id;

            return (
              <motion.button
                key={phase.id}
                onClick={() => setActive(phase.id)}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${
                    phase.gradient
                  } rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300 ${
                    isActive ? "opacity-60" : ""
                  }`}
                />

                {/* Main button */}
                <div
                  className={`relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <span className="text-2xl">{phase.icon}</span>
                  </motion.div>

                  {/* Number badge */}
                  <div
                    className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {phase.id}
                  </div>

                  {/* Title */}
                  <div
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {phase.title}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.gradient}`}
                      />
                    </motion.div>
                  )}

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${
                      phase.gradient
                    } opacity-10 blur-xl transition-opacity ${
                      isActive ? "opacity-20" : ""
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Outer glow */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${activePhase.gradient} rounded-3xl blur-xl opacity-30`}
            />

            {/* Main content card */}
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 overflow-hidden">
              {/* Corner decorations */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${activePhase.gradient} opacity-20 blur-3xl`}
              />
              <div
                className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${activePhase.gradient} opacity-20 blur-3xl`}
              />

              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${activePhase.gradient} flex items-center justify-center shadow-lg`}
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <span className="text-3xl">{activePhase.icon}</span>
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    className="text-xs text-gray-500 font-mono mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    PHASE {active} OF 6
                  </motion.div>
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {details[active].heading}
                  </motion.h3>
                </div>

                {/* Status badge */}
                <motion.div
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full border border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${activePhase.gradient}`}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-gray-400 font-mono">
                    ACTIVE
                  </span>
                </motion.div>
              </div>

              {/* Divider */}
              <div
                className={`h-px bg-gradient-to-r ${activePhase.gradient} opacity-30 mb-8`}
              />

              {/* Body content */}
              <div className="space-y-5">
                {details[active].body.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    {/* Bullet */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-6 h-6 rounded-lg bg-gradient-to-br ${activePhase.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Circuit pattern overlay */}
              <div className="absolute bottom-4 right-4 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M10 10 L30 10 L30 30 L50 30 L50 10 L70 10 L70 30 L90 30 M50 30 L50 50 L30 50 L30 70 L50 70 L50 90 M50 50 L70 50 L70 70 L90 70"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                  <circle cx="70" cy="70" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation hint */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-500 font-mono text-sm">
            <span>Navigate phases to explore methodology</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessDetails;
