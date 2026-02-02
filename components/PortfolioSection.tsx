"use client";
import { data } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import {
  LuArrowRight,
  LuCode,
  LuExternalLink,
  LuGithub,
  LuLayers,
  LuServer,
  LuX,
} from "react-icons/lu";

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Fullstack", "Frontend"];

  const filteredData = useMemo(() => {
    return filter === "All"
      ? data
      : data.filter((item) => item.type === filter);
  }, [filter]);
  const shouldShowButton = filteredData.length > 6 || visibleCount > 6;

  return (
    <section
      id="portfolio"
      className="py-10 lg:py-20 bg-[#0a0a0a] text-white px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
            >
              Case Studies
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                Artifacts.
              </span>
            </h2>
          </div>

          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-sm text-[10px] font-black tracking-widest uppercase transition-all ${
                  filter === cat
                    ? "bg-[#b19777] text-black"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedProject(item)}
                className="group relative  border border-white/5 rounded-sm overflow-hidden cursor-pointer shadow-2xl"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a40]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />

                  {/* Subtle Dark Overlay to ensure text legibility and theme match */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/10 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Gradient to blend with the bottom content area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold text-[#b19777] uppercase tracking-widest px-2 py-0.5 border border-[#b19777]/30 rounded-full bg-black/50">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-[#b19777] transition-colors">
                    {item.name}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-[11px] font-medium uppercase tracking-tighter flex items-center gap-2 transform translate-y-0 group-hover:translate-y-0 transition-transform">
                      Explore Details{" "}
                      <LuArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform text-[#b19777]"
                      />
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Smart Footer Button */}
        {shouldShowButton && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount(visibleCount > 6 ? 6 : filteredData.length)
              }
              className={`px-12 py-4 border text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 ${
                visibleCount > 6
                  ? "border-[#b19777] text-[#b19777] hover:bg-[#b19777] hover:text-black"
                  : "border-white/10 text-white hover:bg-white hover:text-black"
              }`}
            >
              {visibleCount > 6 ? "Collapse Archive ↑" : "Expand Archive ↓"}
            </button>
          </div>
        )}
      </div>

      {/* --- DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/55 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-[110] p-2 bg-black/50 hover:bg-[#b19777] text-white hover:text-black transition-all rounded-full border border-white/10"
              >
                <LuX size={20} />
              </button>

              {/* Left: Media Area */}
              <div className="lg:w-1/2 bg-[#0a0a0a] flex flex-col p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="relative aspect-video w-full mb-8 rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                  <Image
                    src={selectedProject.img}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="flex items-center justify-center gap-3 py-4 bg-[#b19777] text-black font-black text-[10px] tracking-widest uppercase hover:bg-white transition-all shadow-lg"
                  >
                    Live Demo <LuExternalLink size={16} />
                  </a>
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      className="flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-black text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all bg-white/5"
                    >
                      Frontend Code <LuGithub size={16} />
                    </a>
                  )}
                  {selectedProject.server && (
                    <a
                      href={selectedProject.server}
                      target="_blank"
                      className="sm:col-span-2 flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-black text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all bg-white/5"
                    >
                      Backend Server <LuServer size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Technical Details */}
              <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-[#0f0f0f]">
                <div className="mb-10">
                  <span className="text-[#b19777] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">
                    Project Breakdown
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    {selectedProject.name}
                  </h3>
                  <div className="h-1 w-20 bg-[#b19777]" />
                </div>

                <div className="space-y-10">
                  {/* Scope */}
                  <div>
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                      <LuLayers className="text-[#b19777]" size={16} /> Project
                      Scope & Features
                    </h4>
                    <div className="space-y-4">
                      {selectedProject.description.map(
                        (desc: string, i: number) => (
                          <div
                            key={i}
                            className="flex gap-4 text-sm text-gray-400 leading-relaxed border-l border-[#b19777]/20 pl-4 py-1"
                          >
                            <FiCheckCircle
                              className="shrink-0 text-[#b19777] mt-1"
                              size={14}
                            />
                            <p>{desc}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                      <LuCode className="text-[#b19777]" size={16} /> Technical
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(
                        selectedProject.useTechnology ||
                        selectedProject.useTecnology
                      ).map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] text-gray-300 font-bold uppercase tracking-wider hover:border-[#b19777]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
