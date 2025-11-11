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
      "Full-stack web development using scalable architecture, high security, and modern UX.",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "1",
    title: "SaaS Solutions",
    desc: "Cloud-powered systems with scalable subscription models.",
    color: "from-purple-500 to-pink-400",
    details:
      "Complete SaaS platforms with multi-tenancy, payment integration, analytics, and automated billing.",
    tech: ["AWS", "Stripe", "PostgreSQL", "Redis"],
  },
  {
    number: "2",
    title: "AI Automations",
    desc: "Intelligent workflows integrating AI and automation.",
    color: "from-orange-400 to-yellow-300",
    details:
      "AI-powered workflows leveraging machine learning, NLP, and intelligent automation to scale efficiency.",
    tech: ["OpenAI", "TensorFlow", "Python", "LangChain"],
  },
];

export default function ProjectCategories() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll active card into view
  useEffect(() => {
    if (selectedCard !== null && !isMobile) {
      document
        .getElementById(`card-${selectedCard}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedCard, isMobile]);

  return (
    <div className="bg-black relative overflow-hidden py-20 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Particles (Reduced on mobile) */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 8 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={
              !isMobile
                ? { y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }
                : { opacity: 0.3 }
            }
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              WHAT WE BUILD
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Our Core Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Combining innovation, precision, and technology to deliver impactful
            digital products.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          layout={!isMobile}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              layout={!isMobile}
              id={`card-${i}`}
              whileHover={!isMobile ? { y: -8 } : {}}
              transition={{ duration: 0.3 }}
              onHoverStart={() => !isMobile && setHoveredCard(i)}
              onHoverEnd={() => !isMobile && setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
              className="relative group cursor-pointer"
            >
              {/* Glow Layer */}
              {!isMobile && (
                <div
                  className={`absolute -inset-[1px] rounded-2xl opacity-0 ${
                    hoveredCard === i ? "opacity-40" : ""
                  } blur-xl transition duration-700 bg-gradient-to-r ${
                    c.color
                  }`}
                />
              )}

              {/* Card */}
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

                {/* Number */}
                <div className="relative z-10 mb-6 flex items-center justify-center">
                  <div className="text-6xl font-black bg-gradient-to-br bg-clip-text text-transparent">
                    <span className={`${c.color}`}>{c.number}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-wide text-center mb-3">
                  {c.title}
                </h3>

                <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">
                  {c.desc}
                </p>

                {/* Tech bars */}
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 w-8 rounded-full bg-gradient-to-r ${c.color}`}
                      style={{ opacity: 0.3 + j * 0.15 }}
                    />
                  ))}
                </div>

                <div className="text-center text-xs text-cyan-400/70 font-semibold">
                  {selectedCard === i ? "▲ COLLAPSE" : "▼ EXPLORE"}
                </div>
              </div>

              {/* Expanded Section */}
              <AnimatePresence>
                {selectedCard === i && (
                  <motion.div
                    layout={!isMobile}
                    initial={{ opacity: 0, scaleY: 0.9 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="origin-top overflow-hidden"
                  >
                    <div className="p-6 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-sm mt-4">
                      <h4 className="text-white font-bold mb-3 text-lg">
                        Details
                      </h4>
                      <p className="text-gray-300 text-sm mb-4">{c.details}</p>
                      <div>
                        <h5 className="text-cyan-400 font-semibold text-xs mb-2 uppercase tracking-wider">
                          Tech Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {c.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${c.color} text-black`}
                            >
                              {tech}
                            </span>
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
