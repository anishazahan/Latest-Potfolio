"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  LuArrowRight,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuPhone,
} from "react-icons/lu";

const ContactSection = () => {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Architectural Typography */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#b19777] text-xs tracking-[0.5em] font-bold uppercase mb-4 block"
          >
            Communication
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
            Let’s Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19777] to-white italic">
              Future Together.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-sm relative overflow-hidden group">
              {/* Gold Accent Corner */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-[#b19777] group-hover:h-full transition-all duration-700" />

              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#b19777] group-hover/item:bg-[#b19777] group-hover/item:text-black transition-all">
                    <LuMail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Email Me
                    </p>
                    <p className="text-lg font-medium">
                      anishazahan13@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#b19777] group-hover/item:bg-[#b19777] group-hover/item:text-black transition-all">
                    <LuMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Location
                    </p>
                    <p className="text-lg font-medium">
                      Jashore, Khulna, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#b19777] group-hover/item:bg-[#b19777] group-hover/item:text-black transition-all">
                    <LuPhone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Phone
                    </p>
                    <p className="text-lg font-medium">+8801979552658</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                {[LuLinkedin, LuGithub, LuMessageSquare].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#b19777] hover:text-[#b19777] transition-all rounded-sm"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-8 border border-[#b19777]/20 bg-[#b19777]/5 rounded-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#b19777] uppercase tracking-widest mb-1">
                  Status
                </p>
                <p className="text-sm font-medium">
                  Available for new opportunities
                </p>
              </div>
              <div className="w-3 h-3 bg-[#b19777] rounded-full animate-pulse shadow-[0_0_15px_rgba(177,151,119,0.5)]" />
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    Professional Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Your Vision
                </label>
                <textarea
                  rows={6}
                  placeholder="Briefly describe your project goals..."
                  className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-[#b19777] text-black px-12 py-5 font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-colors group"
              >
                {formState === "submitting"
                  ? "SENDING..."
                  : formState === "success"
                    ? "SENT SUCCESSFULLY"
                    : "INDEPENDENT INQUIRY"}
                <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
