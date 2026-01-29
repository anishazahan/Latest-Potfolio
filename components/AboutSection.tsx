"use client";
import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "2.5+" },
    { label: "Core Expertise", value: "Next.js/TS" },
    { label: "Commitments", value: "100%" },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://pixabay.com/get/g73c54d3f3885d8e7898517e4776104924c80387b38d3845b41315802187f827376e19197066928e37048123285747683_1280.jpg"
                alt="Architecture"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 z-20 bg-white/5 backdrop-blur-xl border border-[#b19777]/30 p-8 rounded-xl"
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
              className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight"
            >
              Engineering Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                Digital Foundations.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-[#b19777]/30 pl-6"
            >
              Experienced Frontend Developer specializing in buildable, scalable
              interfaces. I focus on improving frontend architecture and
              delivering high-impact products through React.js and TypeScript.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Layers size={20} />,
                  title: "Architecture",
                  desc: "Clean & Scalable",
                },
                {
                  icon: <Code2 size={20} />,
                  title: "Performance",
                  desc: "Optimized UX",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-[#b19777] transition-colors">
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
