"use client";

import { motion } from "framer-motion";
import { FiUserCheck, FiZap, FiTarget, FiTrendingUp } from "react-icons/fi";

const REASONS = [
  {
    title: "Personalized Mentorship",
    description: "Individualized monitoring and feedback tailored to each student's specific needs and learning challenges.",
    icon: FiUserCheck,
    gradient: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-100",
  },
  {
    title: "Innovative Strategies",
    description: "Our committed teachers employ creative, practical methods that ensure deep conceptual clarity over rote learning.",
    icon: FiZap,
    gradient: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-100",
  },
  {
    title: "Dual Focus Success",
    description: "Expertly balanced simultaneous preparation for Board exams and high-stakes competitive entrances like JEE, NEET, and CA.",
    icon: FiTarget,
    gradient: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-100",
  },
];

export default function WhyEmergent() {
  return (
    <section className="py-24 bg-[#fcfdfe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-px w-8 bg-sky-500" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">The Advantage</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-indigo-600">Emergent?</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm border-l-2 border-slate-100 pl-6 hidden md:block">
            We don't just teach. We engineer success through a unique blend of care and rigour.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Decorative Background Glow */}
              <div className={`absolute inset-0 bg-linear-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:-translate-y-2 transition-all duration-500">
                
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${reason.gradient} flex items-center justify-center text-white mb-8 shadow-lg ${reason.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <reason.icon size={28} />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {reason.description}
                </p>

                {/* Bottom Accent Bar */}
                <div className={`absolute bottom-8 left-8 right-8 h-1 rounded-full bg-linear-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-2">
            <FiTrendingUp className="text-sky-600" />
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Data-Driven Results</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <FiUserCheck className="text-indigo-600" />
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Certified Mentors</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}