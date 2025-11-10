import { useState } from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",
    color: "emerald",
    icon: "⚛️",
    glow: "from-emerald-400 to-cyan-300",
    items: ["React JS", "Next.js", "Tailwind CSS & Ant Design", "TypeScript"],
  },
  {
    title: "Mobile",
    color: "blue",
    icon: "📱",
    glow: "from-blue-400 to-cyan-400",
    items: ["Flutter", "Firebase", "Figma"],
  },
  {
    title: "Backend",
    color: "amber",
    icon: "⚙️",
    glow: "from-amber-400 to-yellow-300",
    items: ["Node.js", "Express.js", "Dotnet"],
  },
  {
    title: "Database & Cloud",
    color: "purple",
    icon: "☁️",
    glow: "from-purple-400 to-indigo-400",
    items: ["MongoDB", "MySQL", "Firebase", "GCP"],
  },
  {
    title: "Design",
    color: "pink",
    icon: "🎨",
    glow: "from-pink-400 to-fuchsia-300",
    items: ["Figma", "Adobe Illustrator", "Adobe XD"],
  },
  {
    title: "AI Automations",
    color: "red",
    icon: "🤖",
    glow: "from-red-500 to-orange-400",
    items: ["N8N", "Flowise", "Open Source LLMs"],
  },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-black text-white">
      {/* Futuristic animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.02) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dynamic glow orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative inline-block px-6 py-2 bg-black border border-cyan-500/50 rounded-lg text-cyan-400 font-mono text-sm tracking-wider">
              {"<"} TECH ARSENAL {">"}
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl lg:text-7xl font-black mb-6 relative"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Stack
          </span>
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Engineered with cutting-edge technologies. Built for{" "}
          <span className="text-cyan-400 font-semibold">performance</span>,{" "}
          <span className="text-purple-400 font-semibold">scalability</span>,
          and <span className="text-blue-400 font-semibold">innovation</span>.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stacks.map((stack, idx) => (
          <motion.div
            key={stack.title}
            initial={{ opacity: 0, y: 60, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative"
            style={{ perspective: "1000px" }}
          >
            {/* Holographic border */}
            <motion.div
              className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${stack.glow} opacity-0 group-hover:opacity-100 blur-sm`}
              animate={
                hoveredIndex === idx
                  ? {
                      opacity: [0.5, 1, 0.5],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Card container */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 overflow-hidden h-full"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Scan lines */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10"
                animate={
                  hoveredIndex === idx
                    ? {
                        backgroundPosition: ["0% 0%", "0% 100%"],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(6,182,212,0.5) 0px, transparent 2px, transparent 6px)",
                  backgroundSize: "100% 8px",
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40" />

              {/* Icon + Title */}
              <div className="relative mb-8">
                <motion.div
                  className="text-5xl mb-4 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  animate={
                    hoveredIndex === idx
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {stack.icon}
                </motion.div>

                <h3
                  className={`text-2xl font-black tracking-wide bg-gradient-to-r ${stack.glow} bg-clip-text text-transparent relative`}
                >
                  {stack.title}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${stack.glow}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                  />
                </h3>
              </div>

              {/* Tech items */}
              <div className="space-y-3 relative">
                {stack.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    className="relative group/item"
                  >
                    <motion.div
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                      whileHover={{
                        x: 5,
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <span className="text-gray-200 text-sm md:text-base font-medium flex items-center gap-3">
                        <motion.span
                          className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
                          animate={
                            hoveredIndex === idx
                              ? {
                                  scaleY: [1, 1.5, 1],
                                }
                              : {}
                          }
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                        {item}
                      </span>

                      <motion.div
                        className={`relative w-2 h-2 rounded-full bg-gradient-to-r ${stack.glow}`}
                        animate={{
                          boxShadow: [
                            "0 0 5px rgba(6,182,212,0.5)",
                            "0 0 15px rgba(6,182,212,0.8)",
                            "0 0 5px rgba(6,182,212,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Hover glow line */}
                    <motion.div
                      className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${stack.glow} rounded-full opacity-0 group-hover/item:opacity-100`}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Data stream effect */}
              <motion.div
                className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100"
                animate={
                  hoveredIndex === idx
                    ? {
                        y: ["-100%", "100%"],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Particle effect on hover */}
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${stack.glow} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -50],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tech line */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 mt-20">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="flex items-center justify-center gap-8 mt-8 text-gray-600 text-xs font-mono">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SYSTEM_READY
          </motion.span>
          <span>|</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            LATENCY: &lt;50ms
          </motion.span>
          <span>|</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            UPTIME: 99.9%
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
