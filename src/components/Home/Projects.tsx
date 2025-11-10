import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  name: string;
  category: string;
  tag: string;
  color: string;
  type: "mobile" | "web" | "saas" | "ai";
  image: string;
  description: string;
  stack?: string[];
}

const projects: Project[] = [
  {
    id: "restate",
    name: "Restate",
    category: "Mobile App",
    tag: "Startup",
    color: "bg-cyan-500",
    type: "mobile",
    image: "resources/project-restate.jpg",
    description:
      "Shared-economy platform for construction equipment rental without inventory management.",
    stack: ["React Native", "Node.js", "Firebase", "Razor Pay"],
  },
  {
    id: "bitebox",
    name: "BiteBox",
    category: "Mobile App",
    tag: "Startup",
    color: "bg-emerald-500",
    type: "mobile",
    image: "resources/project-bitebox.jpg",
    description:
      "Canteen delivery app with smooth ordering and campus delivery system.",
    stack: ["Flutter", "Firebase", "Razor Pay"],
  },
  {
    id: "happyschool",
    name: "Happy School",
    category: "Mobile App",
    tag: "EdTech",
    color: "bg-orange-500",
    type: "mobile",
    image: "resources/project-happyschool.jpg",
    description:
      "Platform for teachers to improve classroom engagement and track student growth.",
    stack: ["Flutter", "Firebase", "Node Js"],
  },
  {
    id: "carocart",
    name: "CaroCart",
    category: "Mobile App",
    tag: "Quick Commerce",
    color: "bg-pink-500",
    type: "mobile",
    image: "resources/project-carocart.jpg",
    description:
      "Hyperlocal delivery app with real-time tracking and secure payments for defense bases.",
    stack: ["Flutter", "My SQL", "Spring Boot", "React Js"],
  },
  {
    id: "happyschooldashboard",
    name: "Happy School Dashboard",
    category: "Web Platform",
    tag: "Education",
    color: "bg-indigo-500",
    type: "web",
    image: "resources/project-happyschool.jpg",
    description:
      "Comprehensive dashboard to manage classrooms, track learning analytics, and communicate efficiently.",
    stack: ["React Js", "Next Js", "Firebase", "Node Js"],
  },
  {
    id: "gohighlevel",
    name: "SaaS Platform",
    category: "SaaS Platform",
    tag: "Automation",
    color: "bg-blue-500",
    type: "saas",
    image: "resources/project-gohighlevel.jpg",
    description:
      "Automation suite including CRM, AI assistants, and workflow automation tools.",
  },
  {
    id: "gcc",
    name: "GCC App",
    category: "Mobile App",
    tag: "Marketplace",
    color: "bg-yellow-500",
    type: "mobile",
    image: "resources/project-gcc.jpg",
    description:
      "Marketplace app for tribal goods empowering local cooperatives through digital trade.",
    stack: ["Flutter", "Firebase", "Node Js"],
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Web Platforms", value: "web" },
  { label: "SaaS Tools", value: "saas" },
  { label: "AI Automations", value: "ai" },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    projectId: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const getCardTransform = (id: string) => {
    if (hoveredCard !== id) return "";
    const rotateX = (mousePosition.y - 0.5) * -8;
    const rotateY = (mousePosition.x - 0.5) * 8;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-gradient-to-br from-black via-gray-950 to-[#030014] relative overflow-hidden"
    >
      {/* Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="px-6 py-2 rounded-full text-sm tracking-wider font-semibold uppercase bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border border-cyan-400/20 backdrop-blur-md">
            Our Work
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold mt-6 mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Step into our world of futuristic builds — sleek, scalable and
            powered by innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((f, i) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`relative px-6 py-3 rounded-lg font-medium backdrop-blur-lg transition-all duration-300 border ${
                activeFilter === f.value
                  ? "text-white border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  : "text-gray-300 border-white/10 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              {f.label}
              {activeFilter === f.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex flex-col h-full"
              >
                <div
                  className="group relative transition-all duration-700 cursor-pointer flex flex-col h-full"
                  style={{
                    transform: getCardTransform(p.id),
                    transitionDelay: `${i * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(p.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleMouseMove(e, p.id)}
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl flex flex-col h-full shadow-[0_0_25px_rgba(56,189,248,0.05)] hover:shadow-[0_0_60px_rgba(56,189,248,0.3)] transition-all duration-500">
                    <div className="aspect-video overflow-hidden relative shrink-0">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <span
                        className={`${p.color} text-white absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                      >
                        {p.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-cyan-400 uppercase tracking-wide mb-2">
                        {p.tag}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {p.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                        {p.description}
                      </p>

                      {p.stack && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                        <span>Explore Project</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <div className="text-center mt-16">
          <a
            href="/projects"
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(56,189,248,0.3)]"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Futuristic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900/90 to-black border border-cyan-400/30 rounded-3xl overflow-hidden p-8 shadow-[0_0_60px_rgba(56,189,248,0.3)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="rounded-2xl w-full h-64 object-cover border border-white/10"
                />
                <div>
                  <span
                    className={`${selectedProject.color} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4`}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {selectedProject.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  {selectedProject.stack && (
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg text-sm text-cyan-300 border border-cyan-400/30 bg-cyan-400/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
