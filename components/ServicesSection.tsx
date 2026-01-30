"use client";
import { motion } from "framer-motion";
// Icons representing high-level engineering services
import {
  LuActivity,
  LuArrowUpRight,
  LuCode,
  LuComponent,
  LuSmartphone,
} from "react-icons/lu";

export const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Frontend Architecture",
      icon: <LuCode />,
      desc: "Designing scalable, maintainable React and Next.js systems with TypeScript. Focusing on modularity, clean code, and robust state management architectures.",
      tags: ["Scalability", "Next.js", "System Design"],
    },
    {
      id: "02",
      title: "High-Performance Web",
      icon: <LuActivity />,
      desc: "Optimizing Core Web Vitals and Lighthouse scores. Implementing advanced caching, RTK Query, and server-side rendering for lightning-fast delivery.",
      tags: ["Performance", "SEO", "Vitals"],
    },
    {
      id: "03",
      title: "Design Systems",
      icon: <LuComponent />,
      desc: "Bridging the gap between design and code by building comprehensive, accessible component libraries with Tailwind CSS and Shadcn UI.",
      tags: ["Atomic Design", "A11y", "UI/UX"],
    },
    {
      id: "04",
      title: "Hybrid Mobile Solutions",
      icon: <LuSmartphone />,
      desc: "Engineering cross-platform experiences using React Native and Capacitor, ensuring native-level performance from a single codebase.",
      tags: ["Mobile", "iOS", "Android"],
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
            >
              Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]"
            >
              Elevating Brands through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
                Technical Excellence.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm max-w-[300px] leading-relaxed mb-2"
          >
            I provide full-lifecycle frontend engineering, ensuring your product
            is as fast as it is beautiful.
          </motion.p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0a0a0a] p-10 md:p-16 hover:bg-[#111] transition-all duration-700"
            >
              {/* Background Accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#b19777] group-hover:h-full transition-all duration-500" />

              <div className="flex justify-between items-start mb-12">
                <div className="text-5xl text-[#b19777] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-sm font-mono text-gray-700 group-hover:text-[#b19777] transition-colors">
                  {service.id}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-widest uppercase py-1 px-3 border border-white/10 text-gray-400 rounded-full group-hover:border-[#b19777]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#b19777] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Discuss Project <LuArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-12 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">Have a unique vision?</h4>
            <p className="text-gray-500 text-sm italic">
              "Tailoring creative choices for high-impact teams."
            </p>
          </div>
          <button className="mt-8 md:mt-0 bg-[#b19777] text-black px-10 py-4 font-black text-xs tracking-widest hover:scale-105 transition-transform rounded-sm">
            GET IN TOUCH
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
