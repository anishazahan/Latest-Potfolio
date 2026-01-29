"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "KuiperZ",
      role: "Junior Software Developer",
      period: "Oct 2023 – Present",
      type: "Full Time - Remote",
      desc: "Contributing to RyseNova (HRM Software). Building multi-tenant authentication systems and scalable payroll processing modules.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "RTK Query"],
    },
    {
      company: "Amelia Soft",
      role: "MERN Stack Developer Intern",
      period: "April 2023 – Sept 2023",
      type: "Internship",
      desc: "Assisted in Multivendor e-commerce development. Debugged complex state logic and refined UI using Tailwind CSS.",
      tech: ["React", "Node.js", "Tailwind", "Git"],
    },
    {
      company: "Lyans Creative",
      role: "Frontend Developer Intern",
      period: "Nov 2022 – Jan 2023",
      type: "Internship",
      desc: "Executed client-based job portal frontend development focusing on responsive UI frameworks and clean code principles.",
      tech: ["React.js", "Context API", "Sass"],
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <span className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block">
            Professional
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-white mb-6">
            Career <br />
            Evolution.
          </h2>
          <p className="text-gray-500 text-sm max-w-[280px] leading-relaxed italic">
            "Committed to continuous learning and delivering high-quality user
            experiences across diverse environments."
          </p>
        </div>

        {/* Scrolling Experience Cards */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl hover:bg-white/[0.04] hover:border-[#b19777]/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-[#b19777] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-[#b19777] text-sm mt-2">
                    <span className="font-bold tracking-widest uppercase">
                      {exp.company}
                    </span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-gray-500">{exp.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#b19777]/10 px-4 py-2 rounded-full border border-[#b19777]/20">
                  <Calendar size={14} className="text-[#b19777]" />
                  <span className="text-[10px] font-bold text-[#b19777] uppercase">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 rounded text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
