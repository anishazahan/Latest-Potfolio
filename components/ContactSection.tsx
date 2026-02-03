"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import {
  LuArrowRight,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuX,
} from "react-icons/lu";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (data: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const email = data.get("reply_to") as string;
    const name = data.get("from_name") as string;
    const subject = data.get("subject") as string;

    if (!name) newErrors.from_name = "Name is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!email) {
      newErrors.reply_to = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.reply_to = "Email is invalid";
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    // If an error exists for this field, remove it
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_7nxfhza",
        "template_nxv8y5j",
        formRef.current,
        "8r7BCETcxl2BVq4wE",
      );

      setShowSuccessModal(true);
      formRef.current.reset();
    } catch (error) {
      // alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 lg:pt-16 lg:pb-20 bg-[#0a0a0a] text-white px-6 md:px-16 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 lg:mb-20">
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
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/[0.02] border border-white/5 p-5 sm:p-10 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-0 bg-[#b19777] group-hover:h-full transition-all duration-700" />
              <h3 className="text-2xl font-bold mb-4 sm:mb-8 text-primary">
                Contact Information
              </h3>

              <div className="space-y-10 py-4">
                {[
                  {
                    icon: <LuMail size={20} />,
                    label: "Email Me",
                    val: "anishazahan13@gmail.com",
                    href: "mailto:anishazahan13@gmail.com",
                  },
                  {
                    icon: <LuMapPin size={20} />,
                    label: "Location",
                    val: "Jashore, Khulna, Bangladesh",
                    href: "https://maps.google.com/?q=Jashore,Khulna,Bangladesh",
                  },
                  {
                    icon: <LuPhone size={20} />,
                    label: "Phone",
                    val: "+880 1979 552658",
                    href: "tel:+8801979552658",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    className="flex items-start gap-4 sm:gap-6 group/item cursor-none"
                  >
                    {/* Icon Container - Tighter and more architectural */}
                    <div className="relative shrink-0">
                      <div className="w-12 h-14 border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#b19777] group-hover/item:border-[#b19777] group-hover/item:bg-[#b19777] group-hover/item:text-black transition-all duration-500 rounded-sm">
                        {item.icon}
                      </div>
                      {/* Decorative accent line */}
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l border-b border-[#b19777]/0 group-hover/item:border-[#b19777]/50 transition-all duration-500" />
                    </div>

                    {/* Text Content - Better hierarchy */}
                    <div className="flex flex-col justify-center h-14">
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1 group-hover/item:text-[#b19777] transition-colors">
                        {item.label}
                      </p>
                      <p className="text-base md:text-lg font-bold text-white/90 group-hover/item:text-white transition-colors tracking-tight break-words">
                        {item.val}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 sm:mt-12 pt-8 border-t border-white/5 flex gap-4">
                {[
                  {
                    icon: <LuLinkedin />,
                    url: "https://www.linkedin.com/in/anisha-zahan/",
                  },
                  { icon: <LuGithub />, url: "https://github.com/anishazahan" },
                  { icon: <FaWhatsapp />, url: "https://wa.me/+8801301902371" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#b19777] hover:text-[#b19777] transition-all rounded-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

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

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    Your Full Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full bg-white/[0.03] border ${errors.from_name ? "border-red-500" : "border-white/10"} px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700`}
                  />
                  {errors.from_name && (
                    <p className="text-red-500 text-[10px] uppercase font-bold">
                      {errors.from_name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    Professional Email
                  </label>
                  <input
                    name="reply_to"
                    type="email"
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className={`w-full bg-white/[0.03] border ${errors.reply_to ? "border-red-500" : "border-white/10"} px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700`}
                  />
                  {errors.reply_to && (
                    <p className="text-red-500 text-[10px] uppercase font-bold">
                      {errors.reply_to}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className={`w-full bg-white/[0.03] border ${errors.subject ? "border-red-500" : "border-white/10"} px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all placeholder:text-gray-700`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-[10px] uppercase font-bold">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Your Vision
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Briefly describe your project goals..."
                  className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm focus:border-[#b19777]/50 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <motion.button
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-[#b19777] text-black px-12 py-5 font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-colors group disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : "INDEPENDENT INQUIRY"}
                <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-[#0f0f0f] border border-[#b19777]/30 py-10 px-5 text-center max-w-sm w-full rounded-sm"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-primary"
              >
                <LuX size={20} />
              </button>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#b19777]/10 rounded-full flex items-center justify-center text-green-700 shadow-[0_0_20px_rgba(177,151,119,0.2)]">
                  <FaCheckCircle size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold uppercase mb-2">
                Message Received
              </h3>
              <p className="text-gray-400 text-sm mt-5 mb-8">
                Thank you for reaching out. I will review your inquiry and get
                back to you within 24 hours.
              </p>
              <div className="inline-block ml-auto px-6">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-primary text-black  px-6 py-4 font-black text-[10px] tracking-widest uppercase hover:bg-white transition-all"
                >
                  Ok
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
