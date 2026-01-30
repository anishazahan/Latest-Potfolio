"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdAnimation } from "react-icons/md";
import { RiCodeBoxLine } from "react-icons/ri";

import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSlack,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbDeviceMobile, TbLayoutDashboard } from "react-icons/tb";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Expertise");

  const skillData = [
    {
      category: "Expertise",
      skills: [
        { name: "React.js", icon: <SiReact />, level: "Core Expertise" },
        { name: "Next.js", icon: <SiNextdotjs />, level: "Professional" },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: "Enterprise Ready",
        },
        { name: "Redux Toolkit", icon: <SiRedux />, level: "Professional" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: "Production Speed",
        },
        { name: "Framer Motion", icon: <MdAnimation />, level: "Professional" },
      ],
    },
    {
      category: "Comfortable",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: "Backend Logic" },
        { name: "Express.js", icon: <SiExpress />, level: "API Architect" },
        { name: "Mongo DB", icon: <SiMongodb />, level: "Data Modeling" },
        { name: "Firebase", icon: <SiFirebase />, level: "Cloud Integration" },
        {
          name: "UI/UX Design",
          icon: <TbLayoutDashboard />,
          level: "User Centric",
        },
      ],
    },
    {
      category: "Familiar",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "Relational DB" },
        { name: "Prisma", icon: <SiPrisma />, level: "ORM Logic" },
        { name: "Redis", icon: <SiRedis />, level: "Caching" },
        {
          name: "React Native",
          icon: <TbDeviceMobile />,
          level: "Hybrid Mobile",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: <SiGithub />, level: "CI/CD & Flow" },
        { name: "Figma", icon: <SiFigma />, level: "Design Handoff" },
        { name: "Postman", icon: <SiPostman />, level: "API Testing" },
        { name: "Docker", icon: <SiDocker />, level: "Containerization" },
        { name: "Vercel", icon: <SiVercel />, level: "Deployment" },
        {
          name: "Slack",
          icon: <SiSlack />,
          level: "Collaboration",
        },
        {
          name: "Jira",
          icon: <SiJira />,
          level: "Project Management",
        },
        {
          name: "VS Code",
          icon: <RiCodeBoxLine />,
          level: "Development Environment",
        },
        {
          name: "Stripe",
          icon: <SiStripe />,
          level: "Project Management",
        },
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-24 bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
            >
              Technical Arsenal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black tracking-tighter leading-tight"
            >
              Develop with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                Modern Tech.
              </span>
            </motion.h2>
          </div>

          {/* Professional Category Switcher */}

          <div className="relative flex bg-white/5 p-1 rounded-sm border border-white/10 backdrop-blur-md overflow-x-hidden no-scrollbar max-w-full">
            {skillData.map((cat) => {
              const isActive = activeCategory === cat.category;

              return (
                <motion.button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative flex items-center gap-2 px-3  sm:px-6 py-3 rounded-sm text-[10px] font-bold tracking-wider sm:tracking-widest uppercase whitespace-nowrap transition-colors ${
                    isActive ? "text-black" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {/* Sliding Active Background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#b19777] rounded-sm shadow-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Text stays above background */}
                  <span className="relative z-10">{cat.category}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <AnimatePresence mode="wait">
            {skillData
              .find((c) => c.category === activeCategory)
              ?.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`
                  relative group overflow-hidden bg-[#111] border border-white/5 rounded-sm p-6
                  hover:border-[#b19777]/30 transition-all duration-500
                  ${idx % 4 === 0 ? "md:col-span-6" : "md:col-span-3"}
                  min-h-[160px] flex flex-col justify-between
                `}
                >
                  {/* Dynamic Icon with Gold Hover Effect */}
                  <div className="z-10">
                    <div className="w-12 h-12 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center text-3xl text-gray-400 group-hover:text-[#b19777] group-hover:bg-[#b19777]/10 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-white/90">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Dynamic Label Content */}
                  <div className="z-10 flex items-center gap-2 mt-4">
                    <div className="h-[1px] w-4 bg-[#b19777]/40 group-hover:w-8 transition-all" />
                    <span className="text-[10px] font-bold text-[#b19777] uppercase tracking-widest">
                      {skill.level}
                    </span>
                  </div>

                  {/* Subtle Geometric Background Decoration */}
                  <div className="absolute -bottom-4 -right-4 text-[#b19777]/5 font-black text-7xl group-hover:text-[#b19777]/10 transition-colors select-none pointer-events-none">
                    {idx + 1}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Bottom Industry Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {[
            "Scalable Architecture",
            "Responsive/Advance Animation UX",
            "Atomic Design",
            "Full-Stack Performance",
          ].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b19777]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                {tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
