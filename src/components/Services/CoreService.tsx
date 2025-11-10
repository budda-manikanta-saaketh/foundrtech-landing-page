import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Server, LifeBuoy } from "lucide-react";

interface Service {
  title: string;
  color: string;
  gradient: string;
  icon: typeof Code;
  desc: string;
  points: string[];
}

const services: Service[] = [
  {
    title: "Product Development",
    color: "cyan",
    gradient: "from-cyan-400 to-blue-600",
    icon: Code,
    desc: "End-to-end product development from concept to launch.",
    points: [
      "Mobile App Development",
      "Web Platform Development",
      "SaaS Product Development",
      "API Development & Integration",
    ],
  },
  {
    title: "UI/UX Design",
    color: "purple",
    gradient: "from-purple-400 to-pink-600",
    icon: PenTool,
    desc: "User-centered design that creates engaging experiences.",
    points: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
    ],
  },
  {
    title: "Technology Solutions",
    color: "emerald",
    gradient: "from-emerald-400 to-teal-600",
    icon: Server,
    desc: "Strategic technology consulting to solve business challenges.",
    points: [
      "Cloud Architecture & Migration",
      "DevOps & CI/CD",
      "AI/ML Integration",
      "Security & Compliance",
    ],
  },
  {
    title: "Post-Launch Support",
    color: "amber",
    gradient: "from-amber-400 to-orange-600",
    icon: LifeBuoy,
    desc: "Ongoing maintenance, optimization, and scaling.",
    points: [
      "Performance Monitoring",
      "Updates & Security Patches",
      "Feature Enhancements",
      "24/7 Technical Support",
    ],
  },
];

const CoreServices: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
              // SERVICES PORTFOLIO
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Core Service Areas
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From <span className="text-cyan-400 font-semibold">concept</span> to{" "}
            <span className="text-purple-400 font-semibold">
              market success
            </span>{" "}
            — we handle every step
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.title;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="relative h-full group cursor-pointer"
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {/* Outer glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition duration-500`}
                  />

                  {/* Main card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden">
                    {/* Corner accent */}
                    <div
                      className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                    />

                    {/* Scan line effect */}
                    <motion.div
                      className={`absolute inset-x-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-50`}
                      animate={isHovered ? { y: [0, 300] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    {/* Icon container */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </motion.div>

                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 mb-6 text-center leading-relaxed text-sm">
                        {service.desc}
                      </p>

                      {/* Divider */}
                      <div
                        className={`h-px bg-gradient-to-r ${service.gradient} opacity-20 mb-6`}
                      />

                      {/* Points */}
                      <ul className="space-y-3">
                        {service.points.map((point, idx) => (
                          <motion.li
                            key={point}
                            className="flex items-start text-sm text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-1.5 mr-3 flex-shrink-0`}
                              animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                            />
                            <span className="group-hover:text-gray-300 transition-colors duration-300">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Circuit pattern overlay */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M0 20 L20 20 L20 40 L40 40 L40 20 L60 20 L60 40 L80 40 L80 60 L60 60 L60 80 L40 80 L40 60 L20 60 L20 80"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="20" cy="20" r="3" fill="currentColor" />
                        <circle cx="40" cy="40" r="3" fill="currentColor" />
                        <circle cx="60" cy="60" r="3" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-${service.color}-400`}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-gray-500 font-mono">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 text-gray-500 font-mono text-sm">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span>Explore our comprehensive service ecosystem</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
