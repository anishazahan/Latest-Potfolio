"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  LuArrowUpRight,
  LuCopyright,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuShieldCheck,
  LuX,
} from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Developing",
      links: [
        { label: "Clean Code", href: "#clean-code" },
        { label: "System Design", href: "#system-design" },
        { label: "Scalability", href: "#scalability" },
        { label: "Performance", href: "#performance" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", type: "terms" },
        { label: "Privacy Policy", type: "privacy" },
      ],
    },
  ];

  const legalContent: Record<
    string,
    { title: string; icon: any; text: string[] }
  > = {
    privacy: {
      title: "Privacy Policy",
      icon: <LuShieldCheck size={40} className="text-primary mb-4" />,
      text: [
        "Data Collection: I only collect information you voluntarily provide via the contact form (Name, Email).",
        "Usage: Your data is strictly used for professional communication and project collaboration.",
        "Protection: I implement industry-standard security to ensure your personal details are never shared with third parties.",
      ],
    },
    terms: {
      title: "Terms of Service",
      icon: <LuFileText size={40} className="text-primary mb-4" />,
      text: [
        "Collaboration: Project timelines and deliverables are established at the start of our contract.",
        "Intellectual Property: Upon full payment, ownership of the frontend code is transferred to the client.",
        "Liability: I ensure high-quality, bug-free code but I am not liable for third-party hosting or backend failures.",
      ],
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 lg:pt-20 pb-6 lg:pb-12 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b19777]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-8 lg:mb-20">
          {/* Brand Identity */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-[#b19777] rotate-45 group-hover:bg-[#b19777] transition-all duration-500">
                <span className="text-primary group-hover:text-black font-bold text-lg sm:text-xl -rotate-45">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-black tracking-tighter uppercase">
                  Anisha
                </span>
                <span className="text-[8px] sm:text-[9px] text-primary tracking-[0.4em]">
                  Engineer
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed my-8 italic">
              Delivering 100% full service with refined expertise in React,
              Next.js, and architectural frontend design.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <LuGithub />, url: "https://github.com/anishazahan" },
                {
                  icon: <LuLinkedin />,
                  url: "https://www.linkedin.com/in/anisha-zahan/",
                },
                { icon: <FaWhatsapp />, url: "https://wa.me/+8801301902371" },
                { icon: <LuMail />, url: "mailto:anishazahan13@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#b19777" }}
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#b19777] transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b19777] mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4 ">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      {link?.type ? (
                        <button
                          onClick={() => setActiveLegal(link.type as string)}
                          className="text-sm text-gray-500 hover:text-white transition-colors flex items-center group cursor-pointer whitespace-nowrap"
                        >
                          {link.label}
                          <LuArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                          />
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-gray-500 hover:text-white transition-colors flex items-center group whitespace-nowrap"
                        >
                          {link.label}
                          <LuArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                          />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 lg:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
            <LuCopyright size={12} />
            <p>
              {currentYear}{" "}
              <span className="font-medium text-primary">ANISHA ZAHAN.</span>{" "}
              ALL RIGHTS RESERVED.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-[#b19777] transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {activeLegal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f0f0f] border border-[#b19777]/30 p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLegal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors p-2"
              >
                <LuX size={24} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center text-center">
                {legalContent[activeLegal].icon}
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-6">
                  {legalContent[activeLegal].title}
                </h3>
                <div className="space-y-4 text-left">
                  {legalContent[activeLegal].text.map((point, idx) => (
                    <p
                      key={idx}
                      className="text-gray-400 text-sm leading-relaxed border-l border-primary/20 pl-4"
                    >
                      {point}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => setActiveLegal(null)}
                  className="mt-10 px-8 py-3 bg-primary text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Close Document
                </button>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
