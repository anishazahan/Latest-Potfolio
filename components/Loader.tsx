"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 90 ? 90 : next;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-background flex items-center justify-center z-[9999] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-dark-accent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 border-2 border-dark-accent-light"
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Main loader content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-dark-accent to-dark-accent-light bg-clip-text text-transparent mb-4">
            &lt;/Anisha&gt;
          </h1>
          <p className="text-dark-text-muted text-lg">
            Senior Frontend Developer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-dark-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-dark-accent to-dark-accent-light"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Tech stack icons - animated */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap max-w-2xl">
          {[
            { icon: "⚛️", label: "React" },
            { icon: "▲", label: "Next.js" },
            { icon: "✨", label: "Tailwind" },
            { icon: "🎬", label: "Framer" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-3xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {item.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
