import { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Foundr Tech
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transforming ideas into scalable products that drive growth and
              deliver results.
            </p>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 - i * 4 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Projects", "Contact"].map(
                (link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-cyan-400 transition-all duration-300"></span>
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@foundrtech.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-sm">info@foundrtech.com</span>
              </motion.a>

              <motion.a
                href="tel:+919494741081"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-sm">+91 9494741081</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="relative w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  onHoverStart={() => setHoveredLink(i)}
                  onHoverEnd={() => setHoveredLink(null)}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 ${
                      hoveredLink === i ? "opacity-20" : ""
                    } transition-opacity duration-300 blur-xl`}
                  />
                  <Icon className="w-5 h-5 text-white relative z-10" />
                  {hoveredLink === i && (
                    <motion.div
                      className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-gray-400 text-sm flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
            <span>© 2025 Foundr Tech. All rights reserved.</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group relative overflow-hidden"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            <ArrowUp className="w-5 h-5 text-cyan-400 relative z-10" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
