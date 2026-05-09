"use client";
import { motion } from "framer-motion";
import { Award, Code2, ImageOff, Target, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const AboutSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section
      id="about"
      className="py-5 sm:py-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
              {/* Fallback UI: Shows if the image URL is wrong */}
              {hasError ? (
                <div className="w-full h-[450px] lg:h-[550px] flex flex-col items-center justify-center bg-[#0a0a0a] border border-[#b19777]/20">
                  <ImageOff className="text-[#b19777]/40 mb-4" size={48} />
                  <span className="text-[10px] text-[#b19777] font-black tracking-[0.4em] uppercase opacity-50">
                    Artifact Missing
                  </span>
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(#b19777 0.5px, transparent 0.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-[450px] lg:h-[550px] relative">
                  {/* Loader: Shows while image is fetching */}
                  {!isImageLoaded && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0a0a0a]">
                      <div className="w-12 h-12 border-2 border-[#b19777]/20 border-t-[#b19777] rounded-full animate-spin" />
                    </div>
                  )}

                  <Image
                    src="/about.jpg" // Note: Ensure this path is correct
                    alt="Anisha Zahan Architecture"
                    fill
                    priority
                    onLoadingComplete={() => setIsImageLoaded(true)}
                    onError={() => setHasError(true)}
                    className={`
                      object-cover grayscale transition-all duration-1000 ease-in-out
                      ${isImageLoaded ? "scale-100 opacity-100 blur-0 hover:grayscale-0" : "scale-110 opacity-0 blur-lg"}
                    `}
                  />

                  {/* Thematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
                </div>
              )}
            </div>

            {/* Floating Stat Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-30 bg-black/80 backdrop-blur-xl border-l-4 border-opacity-100 border-[#b19777] p-6 shadow-2xl group"
            >
              <div className="relative">
                <h3 className="text-[#b19777] text-5xl font-black italic tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  10+
                </h3>
                <div className="w-8 h-[1px] bg-[#b19777]/50 my-3" />
                <p className="text-[10px] leading-relaxed tracking-[0.3em] text-gray-300 font-bold uppercase">
                  Commercial <br />
                  <span className="text-white">Artifacts</span> Built
                </p>

                {/* Decorative Corner */}
                <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-[#b19777]/50" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:pl-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
            >
              Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-[#b19777]/30 pl-6"
            >
              I&apos;m Anisha Zahan Hashi. With 3 years of professional
              expertise in React.js, Next.js, and TypeScript, I specialize in
              building scalable, high-performance web applications. I&apos;m
              passionate about creating exceptional user experiences while
              maintaining clean, maintainable code architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              I focus on solving complex frontend challenges, optimizing
              application performance, and implementing industry-leading best
              practices. My commitment is to deliver products that not only meet
              technical requirements but exceed user expectations.
            </motion.p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
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
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-[#b19777] transition-colors duration-500">
                    <div className="text-[#b19777]">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
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

export default AboutSection;
