import { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Smartphone,
  Zap,
  Flame,
  Workflow,
  Server,
  Database,
  Cloud,
  PenTool,
  CreditCard,
  Bot,
} from "lucide-react";

export default function TechExpertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const techStack = [
    {
      icon: <Atom className="w-10 h-10 text-cyan-400" />,
      name: "React JS",
      desc: "Web Framework",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      name: "Flutter",
      desc: "Cross-Platform",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Zap className="w-10 h-10 text-gray-400" />,
      name: "Next.js",
      desc: "Web Framework",
      color: "from-gray-300 to-gray-500",
    },
    {
      icon: <Flame className="w-10 h-10 text-yellow-400" />,
      name: "Firebase",
      desc: "Backend",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Workflow className="w-10 h-10 text-blue-400" />,
      name: "Python",
      desc: "AI/ML",
      color: "from-blue-500 to-yellow-400",
    },
    {
      icon: <Server className="w-10 h-10 text-green-400" />,
      name: "Node.js",
      desc: "Backend",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Database className="w-10 h-10 text-emerald-400" />,
      name: "MongoDB",
      desc: "Database",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-400" />,
      name: "GCP",
      desc: "Cloud Services",
      color: "from-blue-400 to-red-400",
    },
    {
      icon: <PenTool className="w-10 h-10 text-pink-400" />,
      name: "GraphQL",
      desc: "API Design",
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-emerald-400" />,
      name: "Payment Gateways",
      desc: "Payments",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      icon: <Bot className="w-10 h-10 text-purple-400" />,
      name: "AI Automations",
      desc: "Workflows",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Futuristic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

      {/* Floating Glows */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 text-sm font-semibold tracking-wider">
              OUR TECH STACK
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Technology Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We work with cutting-edge tools to deliver modern, scalable
            solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-[1px] rounded-2xl opacity-0 ${
                  hoveredIndex === i ? "opacity-50" : ""
                } blur-xl transition-opacity duration-500 bg-gradient-to-r ${
                  tech.color
                }`}
              />

              {/* Card */}
              <motion.div
                className={`relative rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 ${
                  hoveredIndex === i
                    ? "bg-gradient-to-br from-white/[0.15] to-white/[0.05]"
                    : "bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
                } border ${
                  hoveredIndex === i ? "border-white/20" : "border-white/10"
                } backdrop-blur-sm overflow-hidden`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${tech.color} opacity-10 rounded-bl-3xl`}
                />

                {/* Icon */}
                <motion.div
                  className="mb-3 relative z-10 flex justify-center"
                  animate={
                    hoveredIndex === i
                      ? { scale: 1.2, rotate: 5 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech.icon}
                </motion.div>

                {/* Title + Desc */}
                <div className="relative z-10">
                  <h3 className="font-bold text-white mb-1 text-base">
                    {tech.name}
                  </h3>
                  <motion.div
                    className={`h-[2px] mx-auto rounded-full bg-gradient-to-r ${tech.color}`}
                    initial={{ width: "0%" }}
                    animate={
                      hoveredIndex === i ? { width: "60%" } : { width: "30%" }
                    }
                    transition={{ duration: 0.3 }}
                  />
                  <p className="text-sm text-gray-400 mt-2">{tech.desc}</p>
                </div>

                {/* Scan Line */}
                {hoveredIndex === i && (
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
