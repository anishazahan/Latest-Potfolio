"use client";

import { AboutSection } from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
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
      <Navbar />

      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <ImpactSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />

      {/* <main>
       
      </main>
      <Footer /> */}
    </div>
  );
}
