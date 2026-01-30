"use client";
import { motion } from "framer-motion";
// Icons representing high-level engineering services
import {
  LuActivity,
  LuArrowUpRight,
  LuCode,
  LuComponent,
  LuDatabase,
  LuSmartphone,
  LuSparkles,
} from "react-icons/lu";

export const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Frontend Architecture",
      icon: <LuCode />,
      desc: "Designing scalable, maintainable frontend architectures using React and Next.js with TypeScript. Emphasis on modular patterns, domain-driven structure, clean abstractions, and predictable state management using Redux Toolkit, RTK Query, and React Hook Form with validation",
      tags: [
        "Scalability",
        "React.js",
        "Next.js",
        "TypeScript",
        "System Design",
      ],
    },
    {
      id: "02",
      title: "High-Performance Web",
      icon: <LuActivity />,
      desc: "Building blazing-fast web applications optimized for Core Web Vitals and Lighthouse scores. Leveraging SSR, ISR, dynamic imports, memoization, advanced caching strategies, and API optimization to deliver exceptional performance at scale.",
      tags: ["Performance", "SEO", "Web Vitals", "Optimization"],
    },
    {
      id: "03",
      title: "API Integration & Data Handling",
      icon: <LuDatabase />,
      desc: "Integrating complex REST and GraphQL APIs with robust error handling, optimistic updates, pagination, filtering, and caching. Experienced in handling real-time data, role-based access control, and secure data flows in enterprise applications.",
      tags: ["REST", "GraphQL", "RTK Query", "API Integration"],
    },
    {
      id: "04",
      title: "Design Systems & UI/UX Engineering",
      icon: <LuComponent />,
      desc: "Creating pixel-perfect, responsive, and accessible design systems that mirror Figma designs exactly. Building reusable UI components with Tailwind CSS and Shadcn UI, ensuring consistency, scalability, and WCAG-compliant accessibility across products.",
      tags: [
        "Pixel Perfect",
        "Design Systems",
        "A11y",
        "UI/UX",
        "Responsive Design",
        "Cross-Device",
      ],
    },
    {
      id: "05",
      title: "Advanced Animations & Micro-Interactions",
      icon: <LuSparkles />,
      desc: "Enhancing user experience with smooth, high-performance animations using Framer Motion,GSAP and CSS transitions. Implementing layout animations, gesture-based interactions, shared element transitions, and subtle micro-interactions without sacrificing performance.",
      tags: ["Framer Motion", "GSAP", "Micro Interactions", "UX Motion"],
    },

    {
      id: "06",
      title: "Hybrid Mobile Solutions",
      icon: <LuSmartphone />,
      desc: "Developing cross-platform mobile applications using React Native and Capacitor. Sharing business logic across web and mobile while ensuring native-level performance, smooth animations, and consistent UX across iOS and Android.",
      tags: ["React Native", "Capacitor", "iOS", "Android"],
    },
  ];

  return (
    <section className="pb-10 lg:pb-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
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
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]"
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
            I provide full lifecycle frontend engineering, ensuring your product
            is as fast as it is beautiful.
          </motion.p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
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
                    className="text-[9px] font-bold tracking-widest uppercase py-1 px-3 border border-white/10 text-gray-400 rounded-sm group-hover:border-[#b19777]/30 transition-colors"
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
      </div>
    </section>
  );
};

export default ServicesSection;
