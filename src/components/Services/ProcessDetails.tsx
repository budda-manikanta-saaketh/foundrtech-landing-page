import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  ShieldCheck,
  Rocket,
  Infinity as InfinityIcon,
} from "lucide-react";

interface Phase {
  id: number;
  title: string;
  gradient: string;
  icon: React.ElementType;
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
    icon: Search,
  },
  {
    id: 2,
    title: "Design",
    gradient: "from-purple-400 to-pink-600",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Development",
    gradient: "from-emerald-400 to-teal-600",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing",
    gradient: "from-amber-400 to-orange-600",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Launch",
    gradient: "from-rose-400 to-red-600",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Support",
    gradient: "from-indigo-400 to-purple-600",
    icon: InfinityIcon,
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
  const [isMobile, setIsMobile] = useState(false);

  const activePhase = phases.find((p) => p.id === active)!;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.25) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Soft Gradient Lights */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
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
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              // INTERACTIVE WORKFLOW
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Process in Detail
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Click a phase to explore our{" "}
            <span className="text-cyan-400 font-semibold">tools</span>,{" "}
            <span className="text-purple-400 font-semibold">methodology</span>,
            and{" "}
            <span className="text-pink-400 font-semibold">deliverables</span>.
          </p>
        </motion.div>

        {/* Phase Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = active === phase.id;
            return (
              <motion.button
                key={phase.id}
                onClick={() => setActive(phase.id)}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={!isMobile ? { y: -4 } : {}}
                whileTap={{ scale: 0.97 }}
              >
                {/* Glow */}
                {!isMobile && (
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${
                      phase.gradient
                    } rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300 ${
                      isActive ? "opacity-60" : ""
                    }`}
                  />
                )}

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}
                    animate={
                      !isMobile && isActive ? { scale: [1, 1.1, 1] } : {}
                    }
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div
                    className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {phase.id}
                  </div>

                  <div
                    className={`text-sm font-semibold text-center transition-colors ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {phase.title}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Phase Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${activePhase.gradient} rounded-3xl blur-xl opacity-30`}
            />
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 border border-gray-800 rounded-3xl p-10 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${activePhase.gradient} flex items-center justify-center shadow-lg`}
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <activePhase.icon className="w-8 h-8 text-white" />
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

                <motion.div
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full border border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${activePhase.gradient}`}
                    animate={
                      !isMobile ? { opacity: [1, 0.3, 1] } : { opacity: 1 }
                    }
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

              {/* Body */}
              <div className="space-y-5">
                {details[active].body.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg bg-gradient-to-br ${activePhase.gradient} flex items-center justify-center shadow-md`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessDetails;
