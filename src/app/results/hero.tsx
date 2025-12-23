"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import { FiAward, FiStar, FiTrendingUp, FiCheckCircle, FiShield } from "react-icons/fi";

const TOP_PERFORMERS = [
  {
    name: "Jaydeep Tupake",
    score: "97%",
    exam: "10th CBSE",
    sub: "Sci: 100 | Maths: 98",
    color: "from-amber-400 to-yellow-600",
    image: "/students/Jaydeep_Tupke.avif"
  },
  {
    name: "Nihal Sayyad",
    score: "98%",
    exam: "MHT-CET",
    sub: "Top Scorer",
    color: "from-blue-500 to-indigo-600",
    image: "/students/nihal.avif"
  },
  {
    name: "Anushree Gaikwad",
    score: "97%",
    exam: "10th CBSE",
    sub: "Academic Excellence",
    color: "from-emerald-500 to-teal-600",
    image: "/students/anushree.avif"
  }
];

export default function ResultsHero() {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 shadow-sm"
          >
            <FiAward className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">The Hall of Fame</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            Celebrating Our <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-yellow-500">
              Top Achievers
            </span>
          </motion.h1>
        </div>

        {/* Top 3 Featured Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TOP_PERFORMERS.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative mb-6">
                <div className={`absolute -inset-1.5 bg-linear-to-br ${student.color} rounded-[2.5rem] blur-sm opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl">
                  <Image 
                    src={student.image} 
                    alt={student.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Score Overlay */}
                  <div className={`absolute bottom-0 inset-x-0 bg-linear-to-t ${student.color} p-2 text-center text-white font-black text-xl`}>
                    {student.score}
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-500 border border-slate-50 group-hover:rotate-12 transition-transform">
                  <FiStar size={24} />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 mb-1">{student.name}</h3>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{student.exam}</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                  {student.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          {[
            { label: "10th CBSE Max", val: "97%", icon: FiCheckCircle },
            { label: "MHT-CET Highest", val: "98%", icon: FiTrendingUp },
            { label: "Board Excellence", val: "90%+", icon: FiStar },
            { label: "NEET Qualified", val: "502", icon: FiShield },
          ].map((stat, i) => (
            <div key={i} className="relative z-10 text-center border-r border-slate-800 last:border-0">
              <stat.icon className="mx-auto mb-4 text-amber-400 size-6" />
              <p className="text-3xl md:text-4xl font-black mb-1">{stat.val}</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}