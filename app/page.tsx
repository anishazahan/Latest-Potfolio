"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      {/* <CustomCursor /> */}
      <ProgressBar />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      {/* <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
}
