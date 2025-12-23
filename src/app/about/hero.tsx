"use client";

import { motion } from "framer-motion";
import { FiTarget, FiAward, FiUsers, FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const STATS = [
  { label: "Success Rate", value: "98%", icon: FiAward, color: "bg-sky-500", lightColor: "bg-sky-50" },
  { label: "Personal Mentors", value: "15+", icon: FiUsers, color: "bg-indigo-600", lightColor: "bg-indigo-50" },
  { label: "Years Excellence", value: "10+", icon: FiStar, color: "bg-amber-500", lightColor: "bg-amber-50" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#fcfdfe] pb-20 pt-10 md:pb-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-linear-to-br from-sky-100/40 to-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-linear-to-tr from-blue-50/50 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 border border-sky-100"
            >
              <FiTarget className="text-sky-600 size-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">About Emergent Institute</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1] text-slate-900 mb-8">
                Where <span className="text-sky-500 italic font-serif">Aspiration</span> <br />
                Meets Excellence.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                We don't just teach subjects; we architect futures. Through rigorous academics and holistic mentorship, we prepare students for the world's toughest challenges.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-sky-600 transition-all hover:shadow-xl hover:shadow-sky-200 active:scale-95 flex items-center gap-2">
                Discover Our Method <FiArrowRight />
              </button>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                  </div>
                ))}
                <p className="pl-6 text-sm font-bold text-slate-500 underline underline-offset-4 cursor-pointer hover:text-sky-600">Join 1000+ Alumni</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Stats (Bento Grid) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Stat Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-2 md:col-span-1 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiAward size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white mb-10 shadow-lg shadow-sky-200">
                  <FiAward size={24} />
                </div>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter">98%</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Success Rate</p>
              </div>
            </motion.div>

            {/* Small Cards Column */}
            <div className="col-span-2 md:col-span-1 grid gap-4">
              {STATS.slice(1).map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 flex items-center gap-5"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${stat.lightColor} flex items-center justify-center`}>
                    <stat.icon size={24} className={stat.color.replace('bg-', 'text-')} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Trust Badge */}
              <div className="p-6 rounded-[2rem] bg-linear-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <FiCheckCircle className="text-sky-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">ISO Certified</span>
                </div>
                <p className="text-xs font-medium text-slate-300">Perfectly planned education system.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}