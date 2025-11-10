import React, { useEffect, useRef, useState } from "react";

interface Feature {
  title: string;
  desc: string;
  color: string;
  svgPath: string;
}

const features: Feature[] = [
  {
    title: "Fast Delivery",
    desc: "Rapid development cycles that get your product to market quickly without compromising quality.",
    color: "from-blue-500 to-cyan-400",
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Proven Results",
    desc: "Multiple successful projects and startups launched with measurable impact and user satisfaction.",
    color: "from-green-500 to-emerald-400",
    svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Full-Cycle Support",
    desc: "End-to-end development from strategy and design to development and post-launch support.",
    color: "from-purple-500 to-pink-400",
    svgPath:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z",
  },
  {
    title: "Strategic Partnership",
    desc: "We work as your technology partner, providing strategic insights and long-term growth planning.",
    color: "from-orange-500 to-yellow-400",
    svgPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#030014] via-[#05091a] to-[#0a0f1f]"
    >
      {/* Background auras */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Why Choose Foundr Tech
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just developers — we're your innovation partners. Our team
            blends strategy, design, and technology to turn ambitious ideas into
            impactful products.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, index) => (
            <div
              key={f.title}
              className={`relative group p-8 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md transition-all duration-700 overflow-hidden hover:-translate-y-2 hover:scale-[1.03] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Drop shadow glow (far beneath) */}
              <div
                className={`absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-r ${f.color} opacity-25 blur-[40px] rounded-full group-hover:opacity-40 group-hover:blur-[50px] transition-all duration-700`}
                style={{ zIndex: 0 }}
              />

              {/* Subtle border glow (soft edge mask) */}
              <div
                className={`absolute inset-0 z-[1] rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                style={{
                  background: `radial-gradient(circle at 50% 100%, rgba(255,255,255,0.1), transparent 70%)`,
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.5))",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.5))",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-[2]">
                <div
                  className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r ${f.color} shadow-xl shadow-black/40 group-hover:scale-110 transition-transform duration-500`}
                >
                  <svg
                    className="w-10 h-10 text-white transition-transform duration-500 group-hover:rotate-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={f.svgPath}
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>

                <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse-glow 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
