"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiAward, FiUsers, FiStar, FiBook } from "react-icons/fi";

const COURSES = [
  "JEE (Main & Advanced)",
  "NEET-UG",
  "MHT-CET",
  "IIT-Medical Foundation",
  "11th-12th Science/Commerce",
  "CA Foundation Programs",
];

const STATS = [
  { label: "Success Rate", value: "98%", icon: FiStar, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
  { label: "Alumni Network", value: "5000+", icon: FiUsers, color: "text-sky-500", bg: "bg-sky-50", border: "border-sky-100" },
  { label: "Expert Faculty", value: "25+", icon: FiAward, color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
  { label: "Tests Series", value: "1200+", icon: FiBook, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
];

const container: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } } 
};

const item: Variants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } 
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 bg-[#fafcfe]">
      
      {/* Soft Emotional Background (Light Theme) */}
      <div className="absolute inset-0 -z-10">
        {/* Warm Sunrise Glow */}
        <div className="absolute -top-[10%] -left-[5%] h-150 w-150 rounded-full bg-orange-100/40 blur-[120px]" />
        {/* Sky Blue Depth */}
        <div className="absolute top-[20%] -right-[10%] h-175 w-175 rounded-full bg-sky-100/50 blur-[140px]" />
        {/* Soft Indigo Base */}
        <div className="absolute -bottom-[10%] left-[20%] h-125 w-200 rounded-full bg-indigo-50/60 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT: EMOTIONAL TEXT */}
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-10 text-center lg:text-left">
            
            <motion.div variants={item} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-slate-500">Begin Your Journey • 2025</span>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
                IGNITE YOUR <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600">
                  POTENTIAL.
                </span>
              </h1>
              <p className="text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience the <span className="text-slate-900 font-bold underline decoration-sky-400 decoration-2 underline-offset-4">Emergent Advantage</span>. We combine rigorous academics with emotional growth to build Pune's future toppers.
              </p>
            </motion.div>

            {/* Vibrant Course Tags */}
            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-3">
              {COURSES.map((course) => (
                <div key={course} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-100 text-slate-700 shadow-sm hover:shadow-md hover:border-sky-200 transition-all cursor-default">
                  <div className="h-5 w-5 rounded-full bg-sky-50 flex items-center justify-center">
                    <FiCheckCircle className="text-sky-500 text-sm" />
                  </div>
                  <span className="text-[13px] font-bold tracking-tight">{course}</span>
                </div>
              ))}
            </motion.div>

            {/* High-Impact CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
              <Link href="/courses" className="group relative px-10 py-5 bg-[#1a2b3c] text-white font-black rounded-2xl shadow-xl shadow-slate-200 hover:bg-sky-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                Start Learning Now
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-700 font-black rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all text-center">
                Talk to a Mentor
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: SOFT GLOW IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            className="relative"
          >
            {/* The "Growth" Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-br from-sky-400/20 via-pink-400/10 to-orange-400/20 rounded-full blur-[90px] animate-pulse" />
            
            <div className="relative z-10 mx-auto max-w-145 aspect-square flex items-center justify-center">
              {/* Decorative Geometric Rings */}
              <div className="absolute inset-0 rounded-full border border-slate-100 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border-2 border-dashed border-sky-100 animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="relative h-full w-full group">
                <Image 
                  src="/hero/hero.avif" 
                  alt="Student Success" 
                  fill 
                  priority 
                  className="object-contain p-8 drop-shadow-[0_20px_60px_rgba(14,165,233,0.25)] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS: SOFT NEUMORPHIC CARDS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }} 
          className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div 
              whileHover={{ y: -12 }}
              key={i} 
              className={`group p-10 rounded-[40px] bg-white border ${stat.border} shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col items-center lg:items-start gap-6 hover:shadow-2xl transition-all duration-500`}
            >
              <div className={`p-5 rounded-3xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon size={32} />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}