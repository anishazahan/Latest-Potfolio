"use client";

import { AboutSection } from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Cursor from "@/components/Cursor";
import { ExperienceSection } from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProgressBar from "@/components/ProgressBar";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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
    <div
      className={`dark bg-[#0a0a0a] selection:bg-[#b19777] selection:text-black`}
    >
      <ProgressBar />
      <Navbar />
      <Cursor />

      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
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
