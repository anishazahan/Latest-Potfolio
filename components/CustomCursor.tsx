"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointing, setIsPointing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a");
      setIsPointing(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
      `}</style>
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-75 ${
          isPointing ? "scale-150" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-4 h-4 bg-accent dark:bg-dark-accent rounded-full opacity-60" />
        <div className="absolute inset-0 w-4 h-4 border-2 border-accent dark:border-dark-accent rounded-full animate-pulse-glow" />
      </div>
    </>
  );
}
