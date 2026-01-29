"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfessionalProgress() {
  const [progress, setProgress] = useState(0);
  const [isEntryComplete, setIsEntryComplete] = useState(false);

  // Handle Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Initial Loading "Curtain" Sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntryComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* --- CURTAIN ENTRANCE ANIMATION --- */}
      <AnimatePresence>
        {!isEntryComplete && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none">
            {/* Top Half */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.8,
                ease: [0.77, 0, 0.175, 1],
                delay: 0.5,
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] border-b border-[#b19777]/30 flex items-end justify-center"
            ></motion.div>

            {/* Bottom Half */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.77, 0, 0.175, 1],
                delay: 0.5,
              }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] border-t border-[#b19777]/30"
            />
          </div>
        )}
      </AnimatePresence>

      {/* --- SCROLL PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#b19777] to-[#d4c3ab]"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px rgba(177, 151, 119, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </>
  );
}
