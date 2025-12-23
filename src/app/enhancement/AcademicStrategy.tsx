"use client";

import { motion } from "framer-motion";
import { 
  FiTarget, FiAward, FiCalendar, FiClock, 
  FiZap, FiHexagon, FiBookOpen, FiStar, FiChevronRight 
} from "react-icons/fi";

const STRATEGY_STEPS = [
  {
    title: "Clear Goal Setting",
    desc: "Defining specific, measurable objectives for the upcoming academic year.",
    icon: FiTarget,
    tag: "Preparation",
    color: "from-blue-500 to-cyan-400",
    accent: "text-blue-600",
    lightBg: "bg-blue-50",
    glow: "group-hover:shadow-blue-100"
  },
  {
    title: "Enhancement Seeds",
    desc: "Sowing the seeds of excellence in early academic performances.",
    icon: FiStar,
    tag: "Foundation",
    color: "from-emerald-500 to-teal-400",
    accent: "text-emerald-600",
    lightBg: "bg-emerald-50",
    glow: "group-hover:shadow-emerald-100"
  },
  {
    title: "Strategic Scheduling",
    desc: "Devising a disciplined study schedule with clear, actionable deadlines.",
    icon: FiCalendar,
    tag: "Planning",
    color: "from-violet-500 to-purple-400",
    accent: "text-violet-600",
    lightBg: "bg-violet-50",
    glow: "group-hover:shadow-violet-100"
  },
  {
    title: "Syllabus Mastery",
    desc: "Strategic revisit of the previous year's syllabus to bridge learning gaps.",
    icon: FiClock,
    tag: "Review",
    color: "from-rose-500 to-pink-400",
    accent: "text-rose-600",
    lightBg: "bg-rose-50",
    glow: "group-hover:shadow-rose-100"
  },
  {
    title: "Competitive Readiness",
    desc: "Rigorous preparation for JEE, NEET, CET, and NDA entrance patterns.",
    icon: FiZap,
    tag: "High Stakes",
    color: "from-orange-500 to-amber-400",
    accent: "text-orange-600",
    lightBg: "bg-orange-50",
    glow: "group-hover:shadow-orange-100"
  },
  {
    title: "Core Subject Focus",
    desc: "Deep-dive specialization in Mathematics, Chemistry, Physics, and Biology.",
    icon: FiHexagon,
    tag: "Specialization",
    color: "from-indigo-500 to-blue-400",
    accent: "text-indigo-600",
    lightBg: "bg-indigo-50",
    glow: "group-hover:shadow-indigo-100"
  },
  {
    title: "Conceptual Clarity",
    desc: "Moving beyond rote learning to understand subjects in intricate detail.",
    icon: FiBookOpen,
    tag: "Insight",
    color: "from-cyan-500 to-sky-400",
    accent: "text-cyan-600",
    lightBg: "bg-cyan-50",
    glow: "group-hover:shadow-cyan-100"
  },
  {
    title: "Olympiad Coverage",
    desc: "Specialized training for National Olympiads and Talent Search Exams.",
    icon: FiAward,
    tag: "Elite",
    color: "from-yellow-500 to-orange-400",
    accent: "text-amber-600",
    lightBg: "bg-amber-50",
    glow: "group-hover:shadow-amber-100"
  },
  {
    title: "Curriculum Alignment",
    desc: "Approaching the regular board syllabus with an advanced perspective.",
    icon: FiChevronRight,
    tag: "Academic",
    color: "from-fuchsia-500 to-purple-400",
    accent: "text-fuchsia-600",
    lightBg: "bg-fuchsia-50",
    glow: "group-hover:shadow-fuchsia-100"
  }
];

export default function AcademicStrategy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Core Academic <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500">Strategy</span> 📚
          </motion.h2>
          <p className="text-slate-500 font-bold max-w-xl mx-auto italic">
            A step-by-step roadmap to transform your academic potential into proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRATEGY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-transparent hover:shadow-2xl ${step.glow} transition-all duration-500`}
            >
              {/* Step Number */}
              <div className="absolute top-6 right-8 text-4xl font-black text-slate-50/50 group-hover:text-slate-100 transition-colors">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${step.accent} mb-6 group-hover:bg-linear-to-br ${step.color} group-hover:text-white group-hover:shadow-lg transition-all duration-300`}>
                <step.icon size={28} />
              </div>

              {/* Tag */}
              <span className={`inline-block px-3 py-1 rounded-full ${step.lightBg} ${step.accent} text-[10px] font-black uppercase tracking-widest mb-4`}>
                {step.tag}
              </span>

              {/* Text */}
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}