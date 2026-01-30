"use client";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// --- Floating Tech Icon Component ---
const FloatingTech = ({
  children,
  x,
  y,
  delay = 0,
}: {
  children: React.ReactNode;
  x: string;
  y: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      opacity: { duration: 1, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    }}
    className="absolute z-0 pointer-events-none hidden lg:block"
    style={{ left: x, top: y }}
  >
    <div className="bg-[#b19777]/10 border border-[#b19777]/20 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(177,151,119,0.05)]">
      {children}
    </div>
  </motion.div>
);

// --- Count Up Logic ---
const CountUp = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { duration: 3000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (v) => setDisplayValue(Math.floor(v)));
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const PortfolioHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yWatermark = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen overflow-hidden selection:bg-[#b19777] selection:text-black">
      {/* --- FLOATING TECH STACK  --- */}
      <FloatingTech x="35%" y="25%" delay={0.5}>
        <div className="bg-[#007acc] p-1.5 rounded-md text-white font-bold text-xs">
          TS
        </div>
        <span className="text-[10px] font-bold tracking-widest text-primary">
          TYPESCRIPT
        </span>
      </FloatingTech>

      <FloatingTech x="75%" y="15%" delay={0.7}>
        <div className="bg-white p-1 rounded-full">
          <div className="bg-black w-4 h-4 rounded-full" />
        </div>
        <span className="text-[10px] font-bold tracking-widest text-primary">
          NEXT JS
        </span>
      </FloatingTech>

      <FloatingTech x="40%" y="81%" delay={0.9}>
        <div className="text-[#764abc] font-bold">●</div>
        <span className="text-[10px] font-bold tracking-widest text-primary">
          REDUX TOOLKIT
        </span>
      </FloatingTech>

      <FloatingTech x="65%" y="70%" delay={1.1}>
        <div className="text-primary font-bold">⚡</div>
        <span className="text-[10px] font-bold tracking-widest text-primary">
          RTK QUERY
        </span>
      </FloatingTech>

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-16 ${
          isScrolled
            ? "py-4 sm:py-6 bg-black/95 backdrop-blur-md border-b border-[#b19777]/20"
            : "py-6 sm:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-[#b19777] rotate-45 group-hover:bg-[#b19777] transition-all duration-500">
              <span className="text-primary group-hover:text-black font-bold text-lg sm:text-xl -rotate-45">
                A
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-black tracking-tighter uppercase">
                Anisha
              </span>
              <span className="text-[8px] sm:text-[9px] text-primary tracking-[0.4em]">
                DEVELOPER
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Home", "Services", "Work", "Experience", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${
                    activeTab === item
                      ? "text-primary"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b19777]"
                    />
                  )}
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 md:hidden pt-24"
        >
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative z-50 h-full overflow-y-auto">
            <div className="px-6 py-8">
              {["Home", "Services", "Work", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveTab(item);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left py-5 border-b border-[#b19777]/20 text-lg font-bold tracking-[0.2em] uppercase transition-all ${
                      activeTab === item
                        ? "text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* --- HERO MAIN --- */}
      <section className="relative pt-10 sm:pt-28 md:pt-32 lg:pt-40 flex flex-col justify-center min-h-screen max-w-[1400px] mx-auto px-4 sm:px-6 md:px-14 lg:px-16 z-10">
        <motion.div
          style={{ y: yWatermark }}
          className="absolute right-0 top-[15%] sm:top-[15%] md:top-[20%] lg:top-[25%] text-[10vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] font-black text-white/[0.04] select-none pointer-events-none leading-none"
        >
          FRONTEND
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 xl:col-span-9">
            <motion.div
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-3 md:mb-4"
            >
              <span className="w-8 sm:w-10 md:w-12 h-[1px] bg-[#b19777]" />
              <span className="text-primary text-xs md:text-sm tracking-[0.5em] font-semibold uppercase">
                Frontend Developer
              </span>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter  leading-[1] sm:leading-[0.90] mb-4 sm:mb-5 md:mb-6 w-full"
            >
              <span className="block">Expert</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-[#d4c3ab] italic block">
                Frontend
              </span>
              <span className="block">
                Developer<span className="text-primary">.</span>
              </span>
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg md:max-w-xl lg:max-w-2xl border-l-2 sm:border-l-3 md:border-l-4 border-[#b19777] pl-4 sm:pl-6 md:pl-8 mb-6 md:mb-8"
            >
              Architecting high performance web systems with 2 years of
              technical mastery. Specializing in React architectures that bridge
              design and scalable code.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-row gap-2  sm:gap-4 md:gap-6"
            >
              <button className="hover:opacity-80 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 font-black text-xs sm:text-sm md:text-base tracking-widest bg-[#b19777] transition-all w-full sm:w-auto text-center">
                VIEW PROJECTS
              </button>
              <button className="border px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 font-black text-xs sm:text-sm md:text-base tracking-widest border-[#b19777]/40 transition-all hover:border-[#b19777]/80 w-full sm:w-auto text-center">
                SEE RESUME
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-end lg:items-end gap-4 lg:gap-0 mt-8 lg:mt-10 flex-wrap">
            <div className="flex lg:flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-0 lg:mb-12 w-full lg:w-auto">
              <div className="text-center lg:text-right flex-1 lg:flex-auto">
                <h3 className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic">
                  <CountUp value={2.5} suffix="+" />
                </h3>
                <p className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.2em] text-gray-500 font-bold uppercase mt-2">
                  Years Professional Experience
                </p>
              </div>
              <div className="text-center lg:text-right flex-1 lg:flex-auto">
                <h3 className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic">
                  <CountUp value={40} suffix="+" />
                </h3>
                <p className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.3em] text-gray-500 font-bold uppercase mt-2">
                  Successful Projects
                </p>
              </div>
            </div>

            <div className="flex mt-5 lg:mt-0 mx-auto lg:mx-0 lg:ml-auto lg:items-end lg:flex-col gap-3 sm:gap-4 self-center lg:self-end pb-3">
              {[
                <Linkedin key="li" size={20} className="sm:w-5 sm:h-5" />,
                <Github key="gh" size={20} className="sm:w-5 sm:h-5" />,
                <Mail key="ml" size={20} className="sm:w-5 sm:h-5" />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#b19777]/40 rounded-sm hover:text-gray-400 text-primary hover:border-[#b19777]/80 transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHero;
