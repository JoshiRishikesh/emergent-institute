"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiAward, FiZap, FiClock, FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const HIGHLIGHTS = [
  "Targeted preparation for top-tier National & International Olympiads",
  "Curriculum designed by mentors with a track record of top ranks",
  "Focus on advanced topics in Mathematics, Physics, Chemistry, Biology",
  "Weekly grand challenges and conceptual application tests",
  "Exposure to past years’ advanced Olympiad question patterns"
];

export default function OlympiadCoaching() {
  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-yellow-50 border border-yellow-100">
                <FiAward className="text-yellow-600 size-3" />
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-700">Elite Challenge</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Olympiad Coaching <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-amber-600">
                  Maths & Science
                </span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                Challenging the best minds to achieve national distinction.
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg">
              Designed for academically gifted students, this program provides advanced training for various Olympiads like NTSE, IOQM (Maths), and NSEJS (Science). We focus on non-routine problems and critical thinking to help students excel.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <FiCheckCircle className="text-teal-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-xl shadow-slate-200"
              >
                Elevate Your Potential
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Competitive Metrics & Achievements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-lg shadow-slate-100"
          >
            {/* Batch Info Card */}
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl text-white shadow-md shadow-teal-200">
              <h4 className="text-lg font-bold mb-1">Highly Selective</h4>
              <p className="text-sm opacity-90">Small batches for personalized, intense training.</p>
              <FiStar className="absolute top-4 right-4 size-16 opacity-10" />
            </div>

            {/* Target Exams */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Target Examinations</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-2 text-slate-800 font-semibold">
                <li className="flex items-center gap-2"><FiAward className="text-amber-500" /> NTSE</li>
                <li className="flex items-center gap-2"><FiAward className="text-amber-500" /> IOQM (Maths)</li>
                <li className="flex items-center gap-2"><FiAward className="text-amber-500" /> NSEJS (Science)</li>
                <li className="flex items-center gap-2"><FiAward className="text-amber-500" /> KVPY</li>
              </ul>
            </div>

            {/* Duration Card */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal-600 shadow-sm shrink-0">
                <FiClock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Program Structure</p>
                <p className="text-xl font-black text-slate-900">Academic Year Basis</p>
              </div>
            </div>

            {/* Call to Action for Elite */}
            <Link 
              href="/contact" 
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-xl shadow-amber-200"
            >
              <FiZap className="absolute -right-4 -bottom-4 size-32 opacity-10 rotate-12" />
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">Join the Elite</h4>
                  <p className="text-white/80 text-xs">Secure your Olympiad success.</p>
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