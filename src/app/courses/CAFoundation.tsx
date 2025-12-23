"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheckCircle, FiClock, FiTarget, FiBriefcase, FiArrowRight, FiTrendingUp } from "react-icons/fi";

const HIGHLIGHTS = [
  "Integrated preparation for 11th & 12th Board and CA Foundation",
  "Expert faculty with professional experience (CAs, MBAs)",
  "Focus on practical application of accounting principles",
  "Specialized modules on Business Math & Logical Reasoning",
  "Regular mock tests mirroring both Board and CA patterns"
];

export default function CAFoundation() {
  return (
    <section className="py-20 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100">
                <FiBriefcase className="text-emerald-600 size-3" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Commerce Stream</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                11th–12th Commerce <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-700">
                  + CA Foundation
                </span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                The integrated path to a successful career in Finance.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Tailored for ambitious students aiming for Chartered Accountancy. We provide in-depth training for core subjects like Accountancy and Economics, strategically integrated with CA Foundation topics to give you a significant head start.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <FiCheckCircle className="text-emerald-600 group-hover:text-white size-4" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all group shadow-xl shadow-slate-200"
              >
                Inquire & Enroll Today
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Bento Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Target Exams - Full Width */}
            <div className="col-span-2 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-4">Target Milestones</p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-800">HSC/CBSE Boards</span>
                  <FiCheckCircle className="text-emerald-500" />
                </div>
                <div className="flex justify-between items-center p-4 bg-emerald-900 rounded-2xl text-white shadow-lg shadow-emerald-900/20">
                  <span className="font-bold">CA Foundation</span>
                  <FiTrendingUp />
                </div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <FiClock size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Duration</p>
              <p className="text-xl font-black text-slate-900">2 Years</p>
            </div>

            {/* Batch Size Card */}
            <div className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                <FiTarget size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mentorship</p>
              <p className="text-xl font-black text-slate-900">Focused</p>
            </div>

            {/* Bottom CTA Card */}
            <Link 
              href="/contact" 
              className="col-span-2 p-8 rounded-[2.5rem] bg-linear-to-br from-emerald-600 to-teal-800 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-xl shadow-emerald-500/20"
            >
              <FiBriefcase className="absolute -right-4 -bottom-4 size-32 opacity-10 rotate-12" />
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">Secure Your Future</h4>
                  <p className="text-white/80 text-xs">Fast-track to professional success.</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <FiArrowRight />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}