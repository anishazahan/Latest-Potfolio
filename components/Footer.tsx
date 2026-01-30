"use client";
import { motion } from "framer-motion";
import {
  LuArrowUpRight,
  LuCopyright,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuTwitter,
} from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: ["Home", "About", "Services", "Portfolio", "Contact"],
    },
    {
      title: "Engineering",
      links: ["Clean Code", "System Design", "Scalability", "Performance"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  const socialLinks = [
    { icon: <LuGithub />, url: "#", label: "Github" },
    { icon: <LuLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <LuTwitter />, url: "#", label: "Twitter" },
    { icon: <LuMail />, url: "#", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b19777]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Top Section: Branding & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-black tracking-tighter mb-6"
            >
              ANISHA<span className="text-[#b19777]">.</span>
            </motion.div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              A Senior Creative Engineer specializing in building high-end
              digital experiences with refined expertise in React, Next.js, and
              architectural frontend design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  whileHover={{ y: -5, color: "#b19777" }}
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#b19777] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b19777] mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors flex items-center group"
                      >
                        {link}
                        <LuArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: System Stats & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#b19777] rounded-full" />
              <span className="text-[10px] font-bold tracking-widest uppercase">
                System Operational
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#b19777] rounded-full" />
              <span className="text-[10px] font-bold tracking-widest uppercase">
                Latest Update: Jan 2026
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-[#b19777] transition-colors"
            >
              Back to Top ↑
            </button>
            <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium">
              <LuCopyright size={12} />
              <span>{currentYear} ANISHA ZAHAN. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
