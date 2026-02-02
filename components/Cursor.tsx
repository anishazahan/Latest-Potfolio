"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".cursor-pointer");
      
      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <>
      {/* Main Dot Cursor */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -4,
          top: -4,
        }}
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-[#b19777] rounded-full"
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer Ring Cursor */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -20,
          top: -20,
        }}
        className="fixed pointer-events-none z-[9998] w-10 h-10 border border-[#b19777]/30 rounded-full"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(177, 151, 119, 0.1)" : "transparent",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />
    </>
  );
};

export default Cursor;