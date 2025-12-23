"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for redirection
import { FiSun, FiZap, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const SPECIAL_PROGRAMS = [
  {
    id: "summer",
    title: "Summer: Make the Most of It",
    subtitle: "Productivity Program",
    desc: "Structured sessions designed to maximize productivity and cover crucial academic topics during the break.",
    icon: FiSun,
    color: "from-amber-400 to-orange-600",
    features: ["Accelerated Learning", "Focus Workshops", "Productivity Habits"]
  },
  {
    id: "pro-teen",
    title: "Enhancement: Pro-Teen",
    subtitle: "Leadership Initiative",
    desc: "A specialized program focused on advanced skill-building, confidence, and leadership for teenagers.",
    icon: FiZap,
    color: "from-indigo-500 to-blue-700",
    features: ["Confidence Mastery", "Public Speaking", "Leadership Drills"]
  }
];

export default function SpecialFocusPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Special Focus <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-slate-500 font-bold italic max-w-xl mx-auto">
            Flagship initiatives designed for specific seasons of growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {SPECIAL_PROGRAMS.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200"
            >
              {/* Animated Background Icon */}
              <prog.icon className="absolute -right-8 -top-8 size-48 opacity-[0.03] group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${prog.color} text-white shadow-lg mb-8`}>
                  <prog.icon size={32} />
                </div>
                
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">
                  {prog.subtitle}
                </p>
                <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
                  {prog.title}
                </h3>
                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Updated Button to Link for Redirection */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 font-black text-slate-900 group-hover:text-orange-500 transition-colors"
                >
                  Enroll in Program 
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}