"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoaded(true), 300); // Small pause at 100%
          return 100;
        }
        // Realistic loading speed
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
          {/* --- TOP LAYER --- */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] border-b border-[#b19777]/20 z-20"
          />

          {/* --- BOTTOM LAYER --- */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] border-t border-[#b19777]/20 z-20"
          />

          {/* --- CENTRAL CONTENT (Gently fades out before split) --- */}
          <motion.div
            className="relative z-30 text-center"
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
          >
            {/* Unique Logo Style */}
            <div className="mb-8 flex flex-col items-center">
              <motion.div
                className="w-16 h-16 border-2 border-[#b19777] flex items-center justify-center rotate-45 mb-10"
                animate={{ rotate: [45, 225, 45] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[#b19777] text-3xl font-black -rotate-45">
                  A
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-black tracking-[0.3em] uppercase text-white mb-2">
                Anisha<span className="text-[#b19777]"></span>
              </h1>
              <p className="text-[#b19777] text-xs tracking-[0.5em] font-light uppercase opacity-70">
                Frontend Developer
              </p>
            </div>

            {/* Professional Progress Bar */}
            <div className="relative w-64 h-[2px] bg-white/5 mx-auto overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#b19777]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                style={{ boxShadow: "0 0 15px #b19777" }}
              />
            </div>

            <div className="mt-4 font-mono text-[10px] text-[#b19777] tracking-widest uppercase">
              {Math.round(progress)}% Loaded
            </div>

            {/* Stack Indicator */}
            <div className="mt-12 flex justify-center gap-6">
              {["REACT", "TS", "NEXT", "REDUX"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[9px] font-bold tracking-tighter text-white border border-white/20 px-2 py-1"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b19777]/5 blur-[120px] z-10" />
        </div>
      )}
    </AnimatePresence>
  );
}
