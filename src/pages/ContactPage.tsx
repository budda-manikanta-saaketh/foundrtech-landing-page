import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/NavBar";

const ContactPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      {/* Static grid overlay (non-fixed, low opacity) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle radial light texture for depth */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Navbar (non-animated for stability) */}
      <Navbar />

      {/* Page fade-in for entry */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <ContactHeader />
        <ContactForm />
      </motion.div>
    </main>
  );
};

export default ContactPage;
