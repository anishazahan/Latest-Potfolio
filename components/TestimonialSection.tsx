"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const autoplaySpeed = 5000; // 5 seconds

  const testimonials = [
    {
      name: "Sulesh Lehera",
      role: "Founder",
      content:
        "An exceptionally skilled frontend developer who excels in creating intuitive and responsive user interfaces. Her attention to detail truly sets her apart.",
      image: "/sulesh.webp",
    },
    {
      name: "Ameliasoft",
      role: "Software Agency",
      content:
        "I would highly recommend her services. We worked together on complex animations and the pixel-perfect delivery was outstanding.",
      image: "/amelio.webp",
    },
    {
      name: "Syed Hussain",
      role: "Project Manager",
      content:
        "Proficient in crafting responsive and visually appealing user interfaces with a strong command of modern web technologies and frameworks.",
      image: "/syed.webp",
    },
    {
      name: "Shivay Dey",
      role: "Software Engineer",
      content:
        "Anisha's has a deep understanding of frontend frameworks and design principles. Her ability to bring complex design concepts to life while maintaining top-notch performance makes her an asset to any development team.",
      image: "/Shivay.webp",
    },
  ];

  const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevStep = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextStep, autoplaySpeed);
    return () => clearInterval(timer);
  }, [index]);

  // Helper to get relative positioning
  const getPosition = (idx: number) => {
    const diff = (idx - index + testimonials.length) % testimonials.length;
    if (diff === 0) return "middle";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="py-10 lg:pb-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-5 flex justify-between items-end">
        <div>
          <span className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block">
            Endorsements
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            What Clients{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white">
              Say.
            </span>
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevStep}
            className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center hover:border-[#b19777] hover:text-[#b19777] transition-all"
          >
            <LuChevronLeft />
          </button>
          <button
            onClick={nextStep}
            className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center hover:border-[#b19777] hover:text-[#b19777] transition-all"
          >
            <LuChevronRight />
          </button>
        </div>
      </div>

      <div className="relative h-[400px] flex items-center justify-center">
        {testimonials.map((item, i) => {
          const pos = getPosition(i);
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                scale: pos === "middle" ? 1 : 0.8,
                x: pos === "middle" ? 0 : pos === "right" ? "110%" : "-110%",
                opacity: pos === "middle" ? 1 : 0.3,
                zIndex: pos === "middle" ? 20 : 10,
              }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-full max-w-[600px] p-8 md:p-12 bg-[#111] border border-white/5 rounded-sm shadow-2xl"
            >
              <div className="relative">
                <LuQuote className="text-[#b19777]/20 text-6xl absolute -top-4 -left-4" />
                <p className="text-lg  text-gray-300 leading-relaxed italic mb-10 relative z-10">
                  {item.content}
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#b19777]/30">
                    <Image
                      width={56}
                      height={56}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover  group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-[#b19777] font-bold uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-[#b19777]" : "w-2 bg-white/10"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
