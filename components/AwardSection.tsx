"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LuImageOff, LuTrophy, LuZap } from "react-icons/lu";

const AwardSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section
      id="awards"
      className="py-10 lg:pb-20 lg:pt-10 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#b19777]" />
                <span className="text-[#b19777] text-[10px] tracking-[0.5em] font-bold uppercase">
                  Excellence Validated
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8 uppercase">
                Employee <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                  Of The Quarter.
                </span>
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm border-l border-[#b19777]/30 pl-4">
                Recognized for technical excellence and exceptional performance
                in software engineering at KuiperZ for the final quarter of
                2025.
              </p>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 flex items-center justify-center border border-[#b19777]/40 rounded-full group-hover:bg-[#b19777] group-hover:text-black transition-all">
                  <LuZap size={18} />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Verified Achievement
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Image & Floating Badge (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[500px]"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/5 shadow-2xl bg-[#111]">
                {hasError ? (
                  /* Fallback UI */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] border border-[#b19777]/20">
                    <LuImageOff className="text-[#b19777]/40 mb-4" size={40} />
                    <span className="text-[10px] text-[#b19777] font-black tracking-[0.4em] uppercase opacity-50 text-center px-4">
                      Validation Artifact Not Found
                    </span>
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#b19777 0.5px, transparent 0.5px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {/* Loader */}
                    {!isImageLoaded && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0a0a0a]">
                        <div className="w-10 h-10 border-2 border-[#b19777]/10 border-t-[#b19777] rounded-full animate-spin" />
                      </div>
                    )}

                    <Image
                      src="/award-1.jpg"
                      alt="Award Visual"
                      fill
                      priority
                      onLoadingComplete={() => setIsImageLoaded(true)}
                      onError={() => setHasError(true)}
                      className={`
                        object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out
                        ${isImageLoaded ? "scale-100 opacity-100 blur-0 brightness-90 contrast-110" : "scale-110 opacity-0 blur-lg"}
                      `}
                    />
                  </>
                )}

                {/* Subtle Theme Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* FLOATING BADGE (Positioned Over Image) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-8 left-8 md:-left-12 z-20"
              >
                <div className="bg-[#111]/80 backdrop-blur-xl border border-[#b19777]/40 p-6 rounded-sm shadow-2xl max-w-[240px]">
                  <div className="flex justify-between items-start mb-4">
                    <LuTrophy className="text-[#b19777]" size={28} />
                    <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase">
                      Q4 2025
                    </span>
                  </div>
                  <h4 className="text-sm font-black tracking-widest uppercase text-white mb-2">
                    Employee of the Quarter
                  </h4>
                  <div className="w-8 h-[1px] bg-[#b19777] mb-3" />
                  <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase leading-tight">
                    Issued By KuiperZ <br /> Software Team
                  </p>
                </div>
              </motion.div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-[1px] border-r-[1px] border-[#b19777]/40 pointer-events-none group-hover:border-[#b19777]/80 transition-colors duration-700" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-[1px] border-l-[1px] border-[#b19777]/40 pointer-events-none group-hover:border-[#b19777]/80 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
