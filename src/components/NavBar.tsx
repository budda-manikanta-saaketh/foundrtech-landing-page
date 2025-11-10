import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = ["Home", "Projects", "Services"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Foundr Tech
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${
                    isActive
                      ? "text-blue-400 font-medium"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
