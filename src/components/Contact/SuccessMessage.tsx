import React from "react";
import { motion } from "framer-motion";

const SuccessMessage: React.FC = () => (
  <motion.div
    className="text-center py-16"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="text-6xl mb-6">🎉</div>
    <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
    <p className="text-lg text-gray-300 mb-8">
      Your message has been sent successfully. We’ll get back to you within 24
      hours.
    </p>
    <a
      href="/"
      className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-all"
    >
      Back to Home
    </a>
  </motion.div>
);

export default SuccessMessage;
