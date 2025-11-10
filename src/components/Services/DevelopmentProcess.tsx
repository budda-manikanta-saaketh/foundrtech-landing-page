import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    id: 1,
    title: "Discovery & Strategy",
    color: "from-cyan-400 to-blue-600",
    icon: "🔍",
    desc: "We start by understanding your goals, audience, and market to create a strategic roadmap for success.",
    points: [
      "Business requirements analysis",
      "Market & competitive research",
      "User persona development",
      "Technical feasibility assessment",
      "Project scope and timeline definition",
    ],
  },
  {
    id: 2,
    title: "Design & Prototyping",
    color: "from-purple-400 to-pink-600",
    icon: "✨",
    desc: "Our design team creates intuitive, appealing interfaces aligned with your brand and goals.",
    points: [
      "User experience (UX) design",
      "User interface (UI) design",
      "Interactive prototyping",
      "Design system creation",
      "User testing and validation",
    ],
  },
  {
    id: 3,
    title: "Development",
    color: "from-emerald-400 to-teal-600",
    icon: "⚡",
    desc: "We build scalable, performant applications using modern frameworks and agile practices.",
    points: [
      "Frontend & backend development",
      "Database design",
      "API integration",
      "Security implementation",
      "Performance optimization",
    ],
  },
  {
    id: 4,
    title: "Testing & QA",
    color: "from-amber-400 to-orange-600",
    icon: "🛡️",
    desc: "Comprehensive testing ensures your product is stable, secure, and optimized across platforms.",
    points: [
      "Functional testing",
      "Performance testing",
      "Security audits",
      "Cross-platform testing",
      "User acceptance testing",
    ],
  },
  {
    id: 5,
    title: "Launch & Deployment",
    color: "from-rose-400 to-red-600",
    icon: "🚀",
    desc: "We manage deployment, store submissions, and monitoring for a seamless launch.",
    points: [
      "Production setup",
      "App store submission",
      "Hosting & domain configuration",
      "Analytics setup",
      "Launch support",
    ],
  },
  {
    id: 6,
    title: "Support & Optimization",
    color: "from-indigo-400 to-purple-600",
    icon: "♾️",
    desc: "Continuous monitoring, updates, and feature enhancements to ensure long-term success.",
    points: [
      "24/7 monitoring & support",
      "Security updates",
      "Performance tuning",
      "Feature scaling",
      "User feedback improvements",
    ],
  },
];

const DevelopmentProcess = () => {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              // PROCESS FRAMEWORK v4.0
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Development Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A proven 6-phase methodology engineered for{" "}
            <span className="text-cyan-400 font-semibold">
              high-quality delivery
            </span>{" "}
            from concept to launch
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
          </div>

          <div className="space-y-20">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                onMouseEnter={() => setHoveredPhase(phase.id)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                {/* Center node */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8"
                  animate={
                    hoveredPhase === phase.id ? { scale: 1.3 } : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-8 h-8">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-full blur-md opacity-70`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-full`}
                    />
                    <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                      <div
                        className={`w-3 h-3 bg-gradient-to-br ${phase.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`md:w-[48%] ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${phase.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500`}
                    />

                    {/* Main card */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden">
                      {/* Corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phase.color} opacity-10 blur-2xl`}
                      />

                      {/* Header */}
                      <div className="flex items-center mb-6 relative">
                        <motion.div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${phase.color} mr-4 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-2xl">{phase.icon}</span>
                        </motion.div>
                        <div>
                          <div className="text-xs text-gray-500 font-mono mb-1">
                            PHASE {phase.id}/6
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {phase.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {phase.desc}
                      </p>

                      {/* Points with custom bullets */}
                      <div className="space-y-3">
                        {phase.points.map((point, idx) => (
                          <motion.div
                            key={point}
                            className="flex items-start text-sm text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} mt-2 mr-3 flex-shrink-0`}
                            />
                            <span className="group-hover:text-gray-300 transition-colors">
                              {point}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Hexagon pattern overlay */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <pattern
                            id={`hex-${phase.id}`}
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <polygon
                              points="10,0 20,5 20,15 10,20 0,15 0,5"
                              fill="currentColor"
                            />
                          </pattern>
                          <rect
                            width="100"
                            height="100"
                            fill={`url(#hex-${phase.id})`}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>Ready to transform your vision into reality</span>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes grid-move {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(50px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default DevelopmentProcess;
