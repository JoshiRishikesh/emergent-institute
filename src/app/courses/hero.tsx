"use client";

import { motion } from "framer-motion";

export default function CoursesHero() {
  return (
    <section className="relative pt-5 pb-20 lg:pt-5 lg:pb-32 bg-[#fcfdfe] overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
              Admission Open 2025-26
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8"
          >
            Your Future <span className="text-sky-500 italic font-serif">Starts</span> Now
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Our Complete Course Catalog. Explore every detail of our{" "}
            <strong className="text-slate-900">integrated programs</strong>, 
            designed to foster an intellectual mindset and comprehensive growth.
          </motion.p>

          {/* Feature Quick-Labels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {["JEE/NEET", "CA Foundation", "Olympiads", "School Foundation", "Govt. Exams"].map((tag, i) => (
              <span 
                key={i} 
                className="px-5 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm text-sm font-bold text-slate-500 hover:border-sky-500 hover:text-sky-600 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-px h-16 bg-linear-to-b from-sky-500 to-transparent" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Explore Catalog
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-20" />
    </section>
  );
}