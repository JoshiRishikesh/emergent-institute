"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiBook, FiAward, FiStar, FiActivity, FiArrowRight, FiShield, FiCheckCircle } from "react-icons/fi";

const HIGHLIGHTS = [
  "Dual focus: Board Excellence (SSC/CBSE/ICSE) + Competitive Foundation",
  "Concept development for IIT-JEE, NEET, and Olympiads",
  "Personalized doubt clearing sessions with dedicated faculty",
  "Analytical and critical thinking development from Class 6",
  "Regular mock tests designed on school and foundation patterns"
];

export default function SchoolFoundation() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The "Advantage" Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Foundation Pillars */}
              <div className="bg-sky-600 p-6 rounded-[2rem] text-white shadow-xl shadow-sky-200">
                <FiShield className="size-8 mb-4 opacity-80" />
                <h4 className="font-bold text-lg leading-tight">Rock-Solid Base</h4>
                <p className="text-sky-100 text-xs mt-2">Strengthening core concepts in Maths & Science.</p>
              </div>
              
              <div className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm mt-8">
                <FiActivity className="text-sky-600 size-8 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Analytical Skills</h4>
                <p className="text-slate-500 text-xs mt-2">Moving beyond rote learning to logic.</p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm -mt-8">
                <FiAward className="text-indigo-600 size-8 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Future Ready</h4>
                <p className="text-slate-500 text-xs mt-2">Early exposure to JEE & NEET patterns.</p>
              </div>

              <div className="bg-indigo-900 p-6 rounded-[2rem] text-white shadow-xl shadow-indigo-200">
                <FiStar className="size-8 mb-4 opacity-80" />
                <h4 className="font-bold text-lg leading-tight">Top Ranks</h4>
                <p className="text-indigo-100 text-xs mt-2">Acing school exams and Olympiads alike.</p>
              </div>
            </div>

            {/* Program Stats */}
            <div className="mt-8 p-6 bg-slate-900 rounded-3xl flex justify-around items-center">
              <div className="text-center">
                <p className="text-sky-400 text-2xl font-black">SSC/CBSE</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Board Focus</p>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-center">
                <p className="text-white text-2xl font-black">IIT/NEET</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Early Start</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 border border-sky-100">
                <FiBook className="text-sky-600 size-3" />
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Early Years Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                6th–10th <span className="text-sky-500 italic">Foundation</span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                Building the strongest foundation for future academic success.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              This long-term program is meticulously designed to build a rock-solid academic base. We seamlessly integrate the syllabus for <strong>SSC, CBSE, and ICSE</strong> boards with preparatory modules for future competitive exams, fostering a scientific temperament early on.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <FiCheckCircle className="text-sky-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-200"
              >
                Inquire & Enroll Today
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}