import { useState } from "react";
import { motion } from "framer-motion";
import { Atom, Smartphone, ServerCog, Cloud, Palette, Bot } from "lucide-react";

const stacks = [
  {
    title: "Frontend",
    icon: Atom,
    glow: "from-emerald-400 to-cyan-300",
    items: ["React JS", "Next.js", "Tailwind CSS & Ant Design", "TypeScript"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    glow: "from-blue-400 to-cyan-400",
    items: ["Flutter", "Firebase", "Figma"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    glow: "from-amber-400 to-yellow-300",
    items: ["Node.js", "Express.js", "Dotnet"],
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    glow: "from-purple-400 to-indigo-400",
    items: ["MongoDB", "MySQL", "Firebase", "GCP"],
  },
  {
    title: "Design",
    icon: Palette,
    glow: "from-pink-400 to-fuchsia-300",
    items: ["Figma", "Adobe Illustrator", "Adobe XD"],
  },
  {
    title: "AI Automations",
    icon: Bot,
    glow: "from-red-500 to-orange-400",
    items: ["N8N", "Flowise", "Open Source LLMs"],
  },
];

const TechStack = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020511] via-[#03091a] to-[#050a15] text-white">
      {/* --- Simplified grid background --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30 pointer-events-none" />
      {/* Static glows (no animation) */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <span className="px-6 py-2 text-cyan-400 border border-cyan-500/40 rounded-lg font-mono text-sm tracking-wider bg-black/40">
          {"< TECH ARSENAL >"}
        </span>

        <h2 className="text-5xl lg:text-7xl font-bold mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technology Stack
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed text-lg">
          Powered by modern technologies for{" "}
          <span className="text-cyan-400 font-semibold">performance</span>,{" "}
          <span className="text-purple-400 font-semibold">scalability</span>,
          and <span className="text-blue-400 font-semibold">innovation</span>.
        </p>
      </div>

      {/* Tech Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stacks.map((stack, idx) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={stack.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative group rounded-2xl border border-cyan-500/10 bg-[#0a0e1c]/70 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Hover glow aura */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stack.glow} opacity-0 group-hover:opacity-20 blur-2xl transition-all`}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="flex items-center mb-5">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stack.glow} mr-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-semibold bg-gradient-to-r ${stack.glow} bg-clip-text text-transparent`}
                  >
                    {stack.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stack.glow}`}
                      />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer tech status line */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 border-t border-cyan-500/20 pt-6 text-gray-500 text-sm font-mono flex justify-center gap-6">
        <span className="text-cyan-400/70">SYSTEM READY</span>
        <span>|</span>
        <span>LATENCY &lt; 50 ms</span>
        <span>|</span>
        <span>UPTIME 99.9%</span>
      </div>
    </section>
  );
};

export default TechStack;
