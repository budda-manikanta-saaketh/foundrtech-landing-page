import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 text-center bg-black/70 backdrop-blur-md">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
        Foundr Tech
      </div>
      <p className="text-gray-300 mb-6">
        Transforming ideas into scalable products that drive growth and deliver
        results.
      </p>
      <p className="text-gray-500 text-sm">
        © 2025 Foundr Tech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
