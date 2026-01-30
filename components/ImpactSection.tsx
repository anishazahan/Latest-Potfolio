"use client";
import { motion } from "framer-motion";
import { LuGlobe, LuShieldCheck, LuZap } from "react-icons/lu";

const ImpactSection = () => {
  const impactItems = [
    {
      title: "Current Availability",
      content: "Open for High-Impact Commercial/SASS Projects",
      sub: "Remote  Roles",
      icon: <LuZap />,
      size: "md:col-span-8",
      color: "bg-[#b19777]/10",
    },
    {
      title: "Timezone",
      content: "UTC+6",
      sub: "Dhaka, Bangladesh",
      icon: <LuGlobe />,
      size: "md:col-span-4",
      color: "bg-white/[0.02]",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
          >
            Operational Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
            Seamless Partnership. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
              Guaranteed Impact.
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {impactItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden group p-8 md:p-12 border border-white/5 rounded-sm
                transition-all duration-500 hover:border-[#b19777]/30
                ${item.size} ${item.color}
              `}
            >
              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#b19777]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-[#b19777] text-2xl group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <LuShieldCheck
                    className="text-white/10 group-hover:text-[#b19777]/40 transition-colors"
                    size={24}
                  />
                </div>

                <div className="mt-12">
                  <p className="text-[#b19777] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                    {item.title}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#b19777] transition-colors duration-500 leading-tight">
                    {item.content}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide">
                    {item.sub}
                  </p>
                </div>
              </div>

              {/*  Numbering */}
              <div className="absolute -bottom-6 -right-2 text-white/[0.02] font-black text-8xl group-hover:text-[#b19777]/5 transition-colors">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/*  Indicators */}
        <div className="mt-12 flex flex-wrap gap-8 justify-start ">
          {[
            "Production Ready",
            "Agile Workflow",
            "User-Centric Architecture",
            "Performance First",
          ].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rotate-45" />
              <span className="text-[9px] font-black text-gray-400 tracking-widest uppercase">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
