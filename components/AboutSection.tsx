"use client";
import { motion } from "framer-motion";
import { Award, Code2, Target, Zap } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "2.5+" },
    { label: "Core Expertise", value: "Next.js/TS" },
    { label: "Commitments", value: "100%" },
  ];

  return (
    <section className="py-5 sm:py-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side*/}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <div className="w-full h-[450px] lg:h-[550px] relative">
                <Image
                  src="/about.jpg"
                  alt="Architecture"
                  fill
                  className="w-full h-[450px] lg:h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Stat Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 z-20 bg-white/5 backdrop-blur-xl border border-[#b19777]/30 p-8 rounded-sm"
            >
              <h3 className="text-[#b19777] text-4xl font-black italic">
                2.5+
              </h3>
              <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                Years of Mastery
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
            >
              Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight"
            >
              Developing Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                Digital Foundations.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-[#b19777]/30 pl-6"
            >
              I &#39;m Anisha Zahan Hashi With 2.5+ years of professional
              expertise in React.js, Next.js, and TypeScript, I specialize in
              building scalable, high-performance web applications. I &#39;m
              passionate about creating exceptional user experiences while
              maintaining clean, maintainable code architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm  leading-relaxed"
            >
              I focus on solving complex frontend challenges, optimizing
              application performance, and implementing industry-leading best
              practices. My commitment is to deliver products that not only meet
              technical requirements but exceed user expectations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {[
                {
                  icon: <Code2 size={20} />,
                  title: "Clean Architecture",
                  desc: "Scalable & Maintainable",
                },
                {
                  icon: <Zap size={20} />,
                  title: "Performance",
                  desc: "Lightning Fast UX",
                },
                {
                  icon: <Target size={20} />,
                  title: "User-Focused",
                  desc: "Intuitive Interfaces",
                },
                {
                  icon: <Award size={20} />,
                  title: "Best Practices",
                  desc: "Industry Standards",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-[#b19777] transition-colors">
                    <div className="text-[#b19777]">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
