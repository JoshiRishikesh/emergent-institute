"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FiClock, FiTrendingUp, FiCheckCircle, FiBookOpen, 
  FiActivity, FiUser, FiDollarSign, FiAward, 
  FiShield, FiZap, FiGlobe, FiSunrise 
} from "react-icons/fi";

const LIFE_SKILLS = [
  { name: "Time Management", icon: FiClock, color: "from-blue-500 to-cyan-400" },
  { name: "Productivity", icon: FiTrendingUp, color: "from-emerald-500 to-teal-400" },
  { name: "Effective Habits", icon: FiCheckCircle, color: "from-orange-500 to-amber-400" },
  { name: "Read 2 Lead", icon: FiBookOpen, color: "from-violet-500 to-purple-400" },
  { name: "Health & Fitness", icon: FiActivity, color: "from-rose-500 to-pink-400" },
  { name: "Career Counselling", icon: FiUser, color: "from-indigo-500 to-blue-400" },
  { name: "Financial Planning", icon: FiDollarSign, color: "from-green-500 to-emerald-400" },
  { name: "Cultivating Capabilities", icon: FiAward, color: "from-sky-500 to-indigo-400" },
  { name: "Moral Values", icon: FiShield, color: "from-amber-500 to-yellow-400" },
  { name: "Boosting IQ", icon: FiZap, color: "from-fuchsia-500 to-purple-400" },
  { name: "General Knowledge", icon: FiGlobe, color: "from-cyan-500 to-blue-400" },
];

export default function LifeSkills() {
  return (
    <section className="py-24 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]"
            >
              The Human Element
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight flex flex-wrap items-center gap-3">
              <span>Life Skills &</span>
              <span className="relative inline-flex items-center gap-3 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-rose-600">
                Holistic Development
                <motion.span
                  animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="text-rose-500 inline-block drop-shadow-sm"
                >
                  <FiSunrise className="size-8 md:size-12" />
                </motion.span>
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs italic border-l-2 border-slate-200 pl-6">
            "Education is not just the filling of a pail, but the lighting of a fire."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {LIFE_SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group flex items-center gap-4 px-6 py-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-linear-to-br ${skill.color}`}>
                <skill.icon size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-slate-200 to-transparent transition-all duration-300 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Updated Dark CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 rounded-[3.5rem] bg-slate-900 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 via-purple-500 to-rose-500" />
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Ready to Build a Better Version of Yourself?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Our enhancement programs are designed to create leaders, not just followers. Every skill we teach is a brick in the foundation of your future success.
          </p>
          <Link href="/courses#PersonalizedMentorship">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black hover:cursor-pointer hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white transition-all shadow-xl"
            >
                Explore Personalized Mentorship     
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}