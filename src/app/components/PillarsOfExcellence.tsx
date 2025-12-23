"use client";

import { motion } from "framer-motion";
import { 
  FiEye, 
  FiCompass, 
  FiZap, 
  FiUsers, 
  FiTrendingUp, 
  FiGlobe, 
  FiRefreshCw, 
  FiHeart, 
  FiShield, 
  FiAward 
} from "react-icons/fi";

const VALUES = [
  { icon: <FiZap />, title: "Energetic", desc: "Bringing passion and excitement into every lesson.", color: "text-amber-500" },
  { icon: <FiUsers />, title: "Teamwork", desc: "Working together as one team to achieve more.", color: "text-blue-500" },
  { icon: <FiTrendingUp />, title: "Growth", desc: "Fostering a mindset of continuous improvement.", color: "text-emerald-500" },
  { icon: <FiGlobe />, title: "Multiculturalism", desc: "Embracing diversity and learning from every culture.", color: "text-purple-500" },
  { icon: <FiRefreshCw />, title: "Embracing Change", desc: "Seeing change as an opportunity for progress.", color: "text-indigo-500" },
  { icon: <FiHeart />, title: "Encouragement", desc: "Building confidence by uplifting each other.", color: "text-pink-500" },
  { icon: <FiShield />, title: "Respect", desc: "Ensuring dignity, safety, and civility for all.", color: "text-sky-500" },
  { icon: <FiAward />, title: "Noble", desc: "Striving to be unselfish, moral, and good-hearted.", color: "text-orange-500" },
];

export default function PillarsOfExcellence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Vision & Mission Duo --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiEye size={120} />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-sky-500 flex items-center justify-center mb-6">
                <FiEye className="text-white" size={24} />
              </div>
              <h3 className="text-3xl text-white font-black mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To provide <span className="text-white font-bold">stimulus learning</span>, fostering an intellectual mindset with positive self-image and a love for learning—making students 
                <span className="text-sky-400 font-bold"> productive, responsible, and compassionate</span> members of society.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-sky-50 border border-sky-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-sky-600">
              <FiCompass size={120} />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <FiCompass className="text-sky-600" size={24} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To emerge as the next <span className="text-sky-600 font-bold">beacon of education</span> with a 360° approach for student's welfare and development. We are committed to excellence in every action.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Core Values Mosaic --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            OUR CORE <span className="text-sky-500 italic">VALUES.</span>
          </h2>
          <p className="text-slate-500 font-bold mt-2 uppercase tracking-widest text-xs">The principles that drive every action</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100 rounded-3xl overflow-hidden shadow-sm">
          {VALUES.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-10 bg-white border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group relative"
            >
              <div className={`${val.color} text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {val.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{val.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {val.desc}
              </p>
              
              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-bold text-sm">
             <FiAward className="text-sky-500" />
             WE'RE COMMITTED TO EXCELLENCE
          </div>
        </div>

      </div>
    </section>
  );
}