"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiTrendingUp, FiCheckCircle, FiShield, FiZap, FiArrowRight, FiBookOpen } from "react-icons/fi";

const SKILLS = [
  { name: "Quantitative Aptitude", icon: FiZap },
  { name: "Logical Reasoning", icon: FiTrendingUp },
  { name: "General English", icon: FiBookOpen },
  { name: "Current Affairs", icon: FiShield },
];

export default function CompetitiveExams() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 border border-amber-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800">Career Guidance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                General Competitive <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-slate-800">
                  Exam Guidance
                </span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                Master the core skills for government and banking sectors.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Tailored for graduates and aspirants of banking, railways, and state-level aptitude tests. We focus on shortcuts, time-saving techniques, and extensive mock practice to help you navigate the competitive landscape with a strategic edge.
            </p>

            {/* Core Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-amber-300 transition-all">
                  <div className="text-amber-600 group-hover:scale-110 transition-transform">
                    <skill.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all group shadow-xl shadow-slate-200"
              >
                Start Your Career Journey
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: The "Strategic Edge" Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-amber-500" />
              
              <h4 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Why Our Strategy?</h4>
              
              <div className="space-y-6">
                {[
                  "Comprehensive modules on Quant & Reasoning",
                  "Special sessions on Banking sector patterns",
                  "Weekly mock tests & performance analysis",
                  "Daily Current Affairs & GK updates",
                  "Accuracy and time-management drills"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <FiCheckCircle className="text-amber-500 mt-1 shrink-0" />
                    <p className="text-sm font-semibold text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Program Duration</p>
                  <p className="text-lg font-black text-slate-900">6-12 Month Batches</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-600 shadow-sm">
                  <FiTrendingUp size={24} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}