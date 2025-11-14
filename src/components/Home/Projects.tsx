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
  playstore?: string;
}

const projects: Project[] = [
  {
    id: "restate",
    name: "Restate",
    category: "Mobile App",
    tag: "Startup",
    color: "bg-cyan-500",
    type: "mobile",
    image: "/Restate.png",
    description:
      "Shared-economy platform for construction equipment rental without inventory management.",
    stack: ["React Native", "Node.js", "Firebase", "Razor Pay"],
    playstore:
      "https://play.google.com/store/apps/details?id=in.restateapp.restate&pli=1",
  },
  {
    id: "bitebox",
    name: "BiteBox",
    category: "Mobile App",
    tag: "Startup",
    color: "bg-emerald-500",
    type: "mobile",
    image: "/BiteBox.png",
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
    image: "/HappySchool.png",
    description:
      "Platform for teachers to improve classroom engagement and track student growth.",
    stack: ["Flutter", "Firebase", "Node Js"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.happyschoolculture.happy_school&hl=en_IN",
  },
  {
    id: "carocart",
    name: "CaroCart",
    category: "Mobile App",
    tag: "Quick Commerce",
    color: "bg-pink-500",
    type: "mobile",
    image: "/CaroCart.png",
    description:
      "Hyperlocal delivery app with real-time tracking and secure payments for defense bases.",
    stack: ["Flutter", "My SQL", "Spring Boot", "React Js"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.carocart.carocart&hl=en_IN",
  },
  {
    id: "happyschooldashboard",
    name: "Happy School Dashboard",
    category: "Web Platform",
    tag: "Education",
    color: "bg-indigo-500",
    type: "web",
    image: "/HappySchoolDashboard.png",
    description:
      "Comprehensive dashboard to manage classrooms, track learning analytics, and communicate efficiently.",
    stack: ["React Js", "Next Js", "Firebase", "Node Js"],
  },
  {
    id: "gcc",
    name: "GCC App",
    category: "Mobile App",
    tag: "Marketplace",
    color: "bg-yellow-500",
    type: "mobile",
    image: "/Gcc.png",
    description:
      "Marketplace app for tribal goods empowering local cooperatives through digital trade.",
    stack: ["Flutter", "Firebase", "Node Js"],
  },
  {
    id: "saasplatform",
    name: "Custom SaaS Platforms",
    category: "SaaS Platform",
    tag: "Automation",
    color: "bg-blue-500",
    type: "saas",
    image: "/Saas.png",
    description:
      "Automation suite including CRM, AI assistants, and workflow automation tools.",
  },

  {
    id: "v4c",
    name: "V4C App",
    category: "Mobile App",
    tag: "EdTech",
    color: "bg-purple-500",
    type: "mobile",
    image: "/V4C.png",
    description:
      "A classroom management app to display courses and track course completion progress for teachers.",
    stack: ["Flutter", "Firebase"],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile device
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-950 to-[#030014] relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
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
            Explore scalable builds crafted with precision and creativity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`relative px-5 py-2.5 rounded-lg font-medium backdrop-blur-lg transition-all duration-300 border ${
                activeFilter === f.value
                  ? "text-white border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                  : "text-gray-300 border-white/10 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1"
              : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          } gap-6`}
        >
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.4, delay: i * 0.05 }}
              className="flex flex-col h-full"
            >
              <div
                className="group relative transition-all duration-300 cursor-pointer flex flex-col h-full hover:scale-[1.02]"
                onClick={() => setSelectedProject(p)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-md flex flex-col h-full shadow-[0_0_20px_rgba(56,189,248,0.08)] hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
                  <div className="relative w-full h-48 md:h-40 lg:h-44 overflow-hidden rounded-t-2xl">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    <span
                      className={`${p.color} text-white absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                    >
                      {p.category}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-cyan-400 uppercase mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex-1 line-clamp-3">
                      {p.description}
                    </p>

                    {p.stack && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            View All Projects
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 
                 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl 
                   max-h-[90vh] overflow-y-auto
                   bg-gradient-to-br from-gray-900/90 via-black/80 to-black
                   border border-cyan-400/30 rounded-3xl 
                   shadow-[0_0_40px_rgba(56,189,248,0.35)]"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full
                     bg-black/50 backdrop-blur-md border border-white/20 
                     hover:bg-white/20 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 
                     object-cover opacity-90 border-b border-white/10"
              />

              <div className="p-8">
                <span
                  className={`${selectedProject.color} text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4`}
                >
                  {selectedProject.category}
                </span>

                <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedProject.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.stack && (
                  <>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs text-cyan-300 
                               border border-cyan-400/30 bg-cyan-400/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                {selectedProject.playstore && (
                  <a
                    href={selectedProject.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full py-4 rounded-xl mt-4 mb-4 
               flex items-center justify-center gap-3
               bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 
               hover:from-emerald-400 hover:via-green-400 hover:to-teal-400 
               transition-all duration-300 text-white font-bold text-lg 
               shadow-[0_0_25px_rgba(16,185,129,0.3)] 
               hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r 
                    from-white/0 via-white/20 to-white/0 
                    translate-x-[-100%] 
                    group-hover/btn:translate-x-[100%] 
                    transition-transform duration-700"
                    />

                    <svg
                      className="w-6 h-6 relative z-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>

                    <span className="relative z-10">View on Play Store</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                       hover:from-cyan-400 hover:to-purple-400 text-white font-semibold transition shadow-lg"
                >
                  Close
                </button>
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
