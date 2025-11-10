import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  color: string;
  summary: string;
  features: string[];
  impact?: { label: string; value: string }[];
  stack: string[];
  image: string;
}

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Web Platforms", value: "web" },
  { label: "SaaS Tools", value: "saas" },
  { label: "E-Commerce", value: "ecommerce" },
];

const projects: Project[] = [
  {
    id: "restate",
    title: "Restate",
    category: "mobile",
    badge: "Mobile App",
    color: "blue",
    image: "resources/project-restate.jpg",
    summary:
      "A shared-economy platform connecting construction equipment owners with contractors who need temporary access.",
    features: [
      "Real-time equipment availability and GPS tracking",
      "Secure payments with insurance coverage",
      "Equipment verification and user rating system",
      "Automated billing and contract management",
    ],
    impact: [
      { label: "Equipment Listings", value: "200+" },
      { label: "Utilization Rate", value: "85%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "User Rating", value: "4.8/5" },
    ],
    stack: ["Flutter", "Node.js", "Firebase", "Razor Pay API"],
  },
  {
    id: "bitebox",
    title: "BiteBox",
    category: "mobile",
    badge: "Mobile App",
    color: "green",
    image: "resources/project-bitebox.jpg",
    summary:
      "A specialized food delivery platform for college campuses, connecting students with canteens and nearby restaurants.",
    features: [
      "Campus-specific restaurant integration",
      "Student meal plan & flexible payment options",
      "Group ordering & dorm delivery optimization",
      "Real-time order tracking & notifications",
    ],
    stack: ["Flutter", "Firebase", "RazorPay API", "Google Maps API"],
  },
  {
    id: "happyschool",
    title: "Happy School",
    category: "web",
    badge: "Web Platform",
    color: "orange",
    image: "resources/project-happyschool.jpg",
    summary:
      "An innovative classroom management platform improving teacher-student engagement and parent communication.",
    features: [
      "Classroom social feed & engagement tracking",
      "Real-time messaging & announcements",
      "Parent-teacher communication portal",
      "Student progress analytics",
    ],
    stack: ["Flutter", "Firebase", "Node Js", "Rest API"],
  },
  {
    id: "gohighlevel",
    title: "Custom SaaS Platform",
    category: "saas",
    badge: "SaaS Platform",
    color: "purple",
    image: "resources/project-gohighlevel.jpg",
    summary:
      "Business automation SaaS integrating CRM, WhatsApp bots, AI lead qualification, and SEO tools.",
    features: [
      "Integrated CRM & automated lead qualification",
      "WhatsApp bots & social automation",
      "AI lead scoring & insights",
      "SEO-friendly website builder",
    ],
    stack: ["React", "Node.js", "Firebase", "Stripe API"],
  },
];

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-[#030014] to-[#0a0f1f] overflow-hidden text-white min-h-screen">
      {/* Background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-40 left-40 bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute w-[500px] h-[500px] bottom-0 right-40 bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2 backdrop-blur-md">
            Our Creations
          </span>
          <h2 className="mt-6 text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our cutting-edge digital innovations crafted with precision
            and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-3 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          {filters.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all ${
                  isActive
                    ? "text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  layout: { duration: 0.3 },
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-semibold border border-cyan-400/20 backdrop-blur-md">
                    {p.badge}
                  </div>
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.summary}
                  </p>
                  <div className="w-full py-3 text-center rounded-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 transition-all">
                    View Details
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-black border border-cyan-400/30 rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.3)] max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover opacity-90"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {selected.title}
                </h3>
                <p className="text-gray-300 mb-6">{selected.summary}</p>

                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Key Features
                </h4>
                <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.stack.map((s) => (
                    <span
                      key={s}
                      className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-200 px-3 py-1 rounded-full text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
