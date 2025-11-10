import React, { useEffect, useRef, useState } from "react";

interface Stat {
  num: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { num: "20+", label: "Projects Completed" },
    { num: "15+", label: "Happy Clients" },
    { num: "8", label: "Team Members" },
    { num: "3", label: "Years Experience" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate numbers counting up ONCE when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const endValues = stats.map((s) => parseInt(s.num) || 0);
    const startValues = Array(stats.length).fill(0);
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValues = endValues.map((target, i) =>
        Math.floor(startValues[i] + (target - startValues[i]) * easeOut)
      );

      setAnimatedValues(currentValues);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible]); // ✅ only runs once when it becomes visible

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-gradient-to-br from-black to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((s, i) => {
          const suffix = s.num.replace(/[0-9]/g, "");
          const animatedValue = animatedValues[i];

          return (
            <div
              key={s.label}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[70px] opacity-20 pointer-events-none" />

              <div className="relative text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] select-none">
                {animatedValue}
                <span className="text-cyan-400">{suffix}</span>
              </div>

              <p className="text-gray-400 mt-3 font-medium tracking-wide">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
