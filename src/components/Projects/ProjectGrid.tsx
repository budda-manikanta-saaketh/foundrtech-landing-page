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
  playstore?: string; // ⭐ ADDED
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
    image: "/Restate.png",
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
    playstore:
      "https://play.google.com/store/apps/details?id=in.restateapp.restate&pli=1",
  },

  {
    id: "bitebox",
    title: "BiteBox",
    category: "mobile",
    badge: "Mobile App",
    color: "green",
    image: "/BiteBox.png",
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
    category: "mobile",
    badge: "Mobile App",
    color: "orange",
    image: "/HappySchool.png",
    summary:
      "An innovative classroom management platform improving teacher-student engagement and parent communication.",
    features: [
      "Classroom social feed & engagement tracking",
      "Real-time messaging & announcements",
      "Parent-teacher communication portal",
      "Student progress analytics",
    ],
    stack: ["Flutter", "Firebase", "Node Js", "Rest API"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.happyschoolculture.happy_school&hl=en_IN",
  },

  {
    id: "carocart",
    title: "CaroCart",
    category: "mobile",
    badge: "Mobile App",
    color: "pink",
    image: "/CaroCart.png",
    summary:
      "Hyperlocal quick-commerce solution enabling fast delivery with real-time tracking inside defense bases and local communities.",
    features: [
      "Real-time delivery tracking",
      "Inventory & product catalog sync",
      "Multiple vendor integration",
      "Secure payments & wallet support",
    ],
    stack: ["Flutter", "MySQL", "Spring Boot", "React Js"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.carocart.carocart&hl=en_IN",
  },

  {
    id: "happyschooldashboard",
    title: "Happy School Dashboard",
    category: "web",
    badge: "Web Dashboard",
    color: "indigo",
    image: "/HappySchoolDashboard.png",
    summary:
      "A powerful admin dashboard for schools to manage classes, track student analytics, and streamline communication.",
    features: [
      "Classroom & teacher management",
      "Analytics-driven student progress tracking",
      "Automated attendance & reporting",
      "Communication tools for parents & teachers",
    ],
    stack: ["React Js", "Next Js", "Firebase", "Node Js"],
  },

  {
    id: "gcc",
    title: "GCC App",
    category: "mobile",
    badge: "Mobile App",
    color: "yellow",
    image: "/Gcc.png",
    summary:
      "Marketplace app for tribal goods, empowering local cooperatives and artisans to sell authentic handcrafted products.",
    features: [
      "Native marketplace ordering system",
      "Seller onboarding & catalog management",
      "Secure online payments",
      "Order tracking and delivery updates",
    ],
    stack: ["Flutter", "Firebase", "Node Js", "Razor Pay API"],
  },

  {
    id: "saasplatform",
    title: "Custom SaaS Platform",
    category: "saas",
    badge: "SaaS Platform",
    color: "blue",
    image: "/Saas.png",
    summary:
      "A complete automation suite including CRM, AI workflow assistants, analytics, and business automation tools.",
    features: [
      "AI-driven CRM",
      "Workflow automation",
      "Integrated analytics dashboard",
      "Email & WhatsApp automation",
    ],
    stack: ["React", "Node.js", "Firebase", "Stripe API"],
  },

  {
    id: "v4c",
    title: "V4C Teacher App",
    category: "mobile",
    badge: "Mobile App",
    color: "purple",
    image: "/V4C.png",
    summary:
      "A smart classroom management app designed for Smart TVs, enabling teachers to present courses, track completion progress, and manage classroom learning from a single interface.",
    features: [
      "Smart TV–optimized classroom dashboard",
      "Course presentation & playback",
      "Teacher-wise progress tracking",
      "Real-time updates synced across devices",
    ],
    stack: ["Flutter", "Firebase"],
  },
];

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-[#030014] to-[#0a0f1f] overflow-hidden text-white min-h-screen">
      {/* Background effects */}
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

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 
                 flex items-center justify-center p-3 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, type: "spring", damping: 22 }}
              className="
          relative w-full 
          max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl
          max-h-[90vh] overflow-y-auto
          bg-gradient-to-br from-gray-900/90 via-black/80 to-black
          border border-cyan-400/30 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.3)]
        "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full 
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

              {/* Responsive Image – Smaller on Mobile */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-40 sm:h-56 md:h-72 lg:h-96 object-cover opacity-90"
              />

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 
                         bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                         bg-clip-text text-transparent"
                >
                  {selected.title}
                </h3>

                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selected.summary}
                </p>

                <h4 className="text-cyan-400 text-base sm:text-lg font-semibold mb-2">
                  Key Features
                </h4>
                <ul className="text-gray-400 list-disc list-inside mb-4 sm:mb-6 space-y-1 text-sm">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <h4 className="text-cyan-400 text-base sm:text-lg font-semibold mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {selected.stack.map((s) => (
                    <span
                      key={s}
                      className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 
                           border border-cyan-400/30 text-cyan-200 
                           px-2 py-1 rounded-full text-[10px] sm:text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Play Store Button */}
                {selected.playstore && (
                  <a
                    href={selected.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full py-3 sm:py-4 rounded-xl mb-3 
                        flex items-center justify-center gap-2 sm:gap-3 
                        text-sm sm:text-lg font-bold
                        bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
                        hover:from-emerald-400 hover:via-green-400 hover:to-teal-400
                        transition-all duration-300 text-white
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
                      className="w-5 h-5 sm:w-6 sm:h-6 relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>

                    <span className="relative z-10">Play Store</span>
                  </a>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-2.5 sm:py-3 rounded-lg 
                       bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                       hover:from-cyan-400 hover:to-purple-400
                       text-white font-semibold text-sm sm:text-base"
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
