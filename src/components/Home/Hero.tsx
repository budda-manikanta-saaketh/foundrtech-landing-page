import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Foundr_Tech_Logo.png";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const strings = ["Ideas", "Dreams", "Visions"];

  // Typing animation
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, strings]);

  // Mouse tilt interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (frameRef.current) {
        const rect = frameRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle system background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      angle: number;
      angleSpeed: number;
      orbitRadius: number;
      pulse: number;
      pulseSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.8 + 0.3;
        const colors = [
          "59,130,246", // blue
          "34,211,238", // cyan
          "139,92,246", // purple
          "236,72,153", // pink
          "34,197,94", // green
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 - 0.01;
        this.orbitRadius = Math.random() * 30 + 10;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
      }

      update(mouseX: number, mouseY: number, mousePressed: boolean) {
        this.pulse += this.pulseSpeed;
        const wave = Math.sin(this.pulse) * 8;
        this.angle += this.angleSpeed;
        const orbitX = Math.cos(this.angle) * this.orbitRadius;
        const orbitY = Math.sin(this.angle) * this.orbitRadius;

        this.baseX += this.speedX;
        this.baseY += this.speedY;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mousePressed ? 250 : 180;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const pushForce = mousePressed ? 10 : 5;
          this.baseX -= Math.cos(angle) * force * pushForce;
          this.baseY -= Math.sin(angle) * force * pushForce;
        }

        this.x = this.baseX + orbitX + wave;
        this.y = this.baseY + orbitY;

        if (canvas) {
          if (this.baseX < -100) this.baseX = canvas.width + 100;
          if (this.baseX > canvas.width + 100) this.baseX = -100;
          if (this.baseY < -100) this.baseY = canvas.height + 100;
          if (this.baseY > canvas.height + 100) this.baseY = -100;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 4
        );
        gradient.addColorStop(0, `rgba(${this.color},${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.color},0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 130;
    const mouse = { x: 0, y: 0, pressed: false };
    let animationId: number;

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseDown = () => (mouse.pressed = true);
    const handleMouseUp = () => (mouse.pressed = false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(mouse.x, mouse.y, mouse.pressed);
        p.draw(ctx);
      });

      // Linking lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            const opacity = 0.3 * (1 - distance / 140);
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(${particles[i].color},${opacity})`);
            gradient.addColorStop(1, `rgba(${particles[j].color},${opacity})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const rotateX = mousePosition.y * 15;
  const rotateY = mousePosition.x * -15;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-black/60 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* TEXT BLOCK */}
        <div className="space-y-8 text-left">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            We Turn{" "}
            <span
              className="relative inline-block font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
              style={{
                display: "inline-block",
                minWidth: "7ch",
              }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
              <span
                className="absolute inset-0 opacity-0 select-none"
                aria-hidden="true"
              >
                Visions
              </span>
            </span>{" "}
            Into Scalable Products
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl drop-shadow-lg">
            At Foundr Tech, we think like founders. We partner with you through
            every step of the startup journey from idea to product-market fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-center shadow-2xl hover:shadow-blue-500/50 overflow-hidden group"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </a>
            <a
              href="/contact"
              className="relative bg-white/5 hover:bg-white/10 border-2 border-white/30 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-center backdrop-blur-xl shadow-xl hover:shadow-purple-500/30 overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* 3D MONITOR */}
        <div
          ref={frameRef}
          className="relative flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 rounded-3xl shadow-2xl border border-gray-600/40 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20 blur-xl opacity-70 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 p-3 rounded-2xl border border-gray-700 shadow-inner overflow-hidden">
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-gray-900 via-black to-gray-950 shadow-lg">
                  <img
                    src={logo}
                    alt="Foundr Tech"
                    className="w-full h-full object-contain opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent blur-xl mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* Stand */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.5)]" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg shadow-inner" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[80px] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
