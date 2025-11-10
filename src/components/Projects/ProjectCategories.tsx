import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    number: "7",
    title: "Mobile Apps",
    desc: "Native & cross-platform apps with pixel-perfect UI and fast performance.",
    color: "from-blue-500 to-cyan-400",
    details:
      "We build iOS, Android, and React Native applications with seamless user experiences, offline capabilities, and optimized performance.",
    tech: ["React Native", "Swift", "Kotlin", "Flutter"],
  },
  {
    number: "3",
    title: "Web Platforms",
    desc: "Enterprise-grade web applications built on modern frameworks.",
    color: "from-green-400 to-emerald-300",
    details:
      "Full-stack web development using cutting-edge technologies, scalable architecture, and responsive design principles.",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "1",
    title: "SaaS Solutions",
    desc: "Cloud-powered systems with scalable subscription models.",
    color: "from-purple-500 to-pink-400",
    details:
      "Complete SaaS platforms with multi-tenancy, payment integration, analytics, and automated billing systems.",
    tech: ["AWS", "Stripe", "PostgreSQL", "Redis"],
  },
  {
    number: "2",
    title: "AI Automations",
    desc: "Intelligent workflows integrating AI and process automation.",
    color: "from-orange-400 to-yellow-300",
    details:
      "AI-powered solutions leveraging machine learning, natural language processing, and intelligent automation to streamline operations.",
    tech: ["OpenAI", "TensorFlow", "Python", "LangChain"],
  },
];

export default function ProjectCategories() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Optional: Scroll to active card when expanded
  useEffect(() => {
    if (selectedCard !== null) {
      document
        .getElementById(`card-${selectedCard}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedCard]);

  return (
    <div className="bg-black relative overflow-hidden py-20 px-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              WHAT WE BUILD
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Our Core Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Combining innovation, precision, and technology to deliver impactful
            digital products.
          </p>
        </motion.div>

        {/* Cards Grid with layout animation */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {categories.map((c, i) => (
            <motion.div
              layout
              id={`card-${i}`}
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
              className="relative group cursor-pointer"
            >
              {/* Glow Layer */}
              <div
                className={`absolute -inset-[1px] rounded-2xl opacity-0 ${
                  hoveredCard === i ? "opacity-40" : ""
                } blur-xl transition duration-700 bg-gradient-to-r ${c.color}`}
              />

              {/* Main Card */}
              <div
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  selectedCard === i
                    ? "border-cyan-400/50 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent"
                    : "border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent"
                } backdrop-blur-sm overflow-hidden`}
              >
                {/* Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-3xl" />

                {/* Circuit Lines */}
                <svg
                  className={`absolute top-0 right-0 w-24 h-24 transition-opacity duration-500 ${
                    hoveredCard === i ? "opacity-40" : "opacity-20"
                  }`}
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,20 L30,20 L30,40 M30,20 L50,20 M50,10 L50,30"
                    stroke="currentColor"
                    className="text-cyan-400"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle cx="30" cy="20" r="2" className="fill-cyan-400" />
                  <circle cx="50" cy="20" r="2" className="fill-cyan-400" />
                </svg>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        className={`text-6xl font-black bg-gradient-to-br ${c.color} bg-clip-text text-transparent`}
                        animate={
                          hoveredCard === i ? { scale: 1.1 } : { scale: 1 }
                        }
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {c.number}
                      </motion.div>
                      <div
                        className={`absolute -inset-4 border border-dashed rounded-lg transition-opacity duration-500 bg-gradient-to-r ${
                          c.color
                        } ${hoveredCard === i ? "opacity-30" : "opacity-0"}`}
                        style={{ borderWidth: "1px" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 relative inline-block w-full">
                    <h3 className="text-xl font-bold text-white tracking-wide text-center">
                      {c.title}
                    </h3>
                    <motion.div
                      className={`h-[2px] mx-auto rounded-full bg-gradient-to-r ${c.color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "40%" }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed text-center mb-4">
                    {c.desc}
                  </p>

                  {/* Tech Bars */}
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        className={`h-1 w-8 rounded-full bg-gradient-to-r ${c.color}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 0.5 + i * 0.1 + j * 0.05,
                          duration: 0.3,
                        }}
                        style={{ opacity: 0.3 + j * 0.15 }}
                      />
                    ))}
                  </div>

                  <motion.div
                    className="text-center text-xs text-cyan-400/70 font-semibold"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {selectedCard === i ? "▲ COLLAPSE" : "▼ EXPLORE"}
                  </motion.div>
                </div>

                {/* Scanline Effect */}
                {hoveredCard === i && (
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                    animate={{
                      top: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {selectedCard === i && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scaleY: 0.8 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="origin-top overflow-hidden"
                  >
                    <div className="p-6 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-sm mt-4">
                      <h4 className="text-white font-bold mb-3 text-lg">
                        Details
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {c.details}
                      </p>
                      <div>
                        <h5 className="text-cyan-400 font-semibold text-xs mb-2 uppercase tracking-wider">
                          Tech Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {c.tech.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${c.color} text-black`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
