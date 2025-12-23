"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiTarget, FiStar } from "react-icons/fi";

// Explicitly define classes so Tailwind JIT never misses them
const pillarStyles: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 hover:border-emerald-200",
  sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-500 hover:border-sky-200",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-500 hover:border-violet-200",
};

const PILLARS = [
  { label: "Academic Strategy", icon: FiTarget, color: "emerald" },
  { label: "Life Skills", icon: FiTrendingUp, color: "sky" },
  { label: "Special Focus", icon: FiStar, color: "violet" },
];

export default function EnhancementHero() {
  return (
    <section className="relative pt-5 pb-20 lg:pt-5 lg:pb-32 bg-[#fafbff] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-emerald-100 shadow-sm mb-8"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <FiStar size={12} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
              Beyond the Syllabus
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
              Holistic <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-600 to-sky-600">
                Enhancement
              </span> Programs
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12"
          >
            We go beyond the syllabus to cultivate <strong className="text-slate-900">Academic Excellence</strong> and <strong className="text-slate-900">Essential Life Skills</strong> for comprehensive development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
          >
            {PILLARS.map((pillar, i) => {
              const styles = pillarStyles[pillar.color];
              // Extract the individual parts for the icon container vs the parent card
              const iconClasses = styles.split(' ').filter(c => !c.includes('hover:border')).join(' ');
              const borderClass = styles.split(' ').find(c => c.includes('hover:border'));

              return (
                <div 
                  key={i}
                  className={`flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default group ${borderClass}`}
                >
                  <div className={`p-2 rounded-xl transition-colors group-hover:text-white ${iconClasses}`}>
                    <pillar.icon size={20} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{pillar.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20 text-slate-300"
          >
            <div className="w-px h-12 bg-linear-to-b from-emerald-500 to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}