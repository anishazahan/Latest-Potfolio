"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-border dark:bg-dark-border">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-light dark:from-dark-accent dark:to-dark-accent-light transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
