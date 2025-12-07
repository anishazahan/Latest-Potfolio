"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border dark:bg-dark-background/80 dark:border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent dark:from-dark-accent dark:to-dark-accent-light"
          >
            &lt;/Anisha&gt;
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-accent dark:text-dark-foreground/70 dark:hover:text-dark-accent transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-card-bg dark:bg-dark-card-bg hover:bg-border dark:hover:bg-dark-border transition-colors font-semibold text-lg"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground dark:text-dark-foreground hover:bg-card-bg dark:hover:bg-dark-card-bg rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
