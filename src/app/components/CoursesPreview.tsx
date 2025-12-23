"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiBookOpen, 
  FiActivity, 
  FiTrendingUp, 
  FiAward, 
  FiUserPlus, 
  FiShield 
} from "react-icons/fi";

const PREVIEW_COURSES = [
  {
    id: "jee-neet",
    title: "11th Science - JEE/NEET",
    tagline: "Your journey to top colleges starts here.",
    icon: <FiActivity />,
    color: "from-blue-600 to-sky-400",
    features: ["2 Year Integrated", "JEE/NEET/CET Prep", "Limited 30 Seats"]
  },
  {
    id: "foundation",
    title: "6th–10th Foundation",
    tagline: "Building strongest academic bases.",
    icon: <FiShield />,
    color: "from-emerald-600 to-teal-400",
    features: ["SSC/CBSE/ICSE", "IIT-Medical Start", "Analytical Skills"]
  },
  {
    id: "commerce",
    title: "Commerce + CA Foundation",
    tagline: "Integrated path to financial careers.",
    icon: <FiTrendingUp />,
    color: "from-indigo-600 to-violet-400",
    features: ["HSC/CBSE Commerce", "CA Foundation Prep", "Expert CAs/MBAs"]
  },
  {
    id: "olympiad",
    title: "Olympiad Coaching",
    tagline: "Achieve national distinction.",
    icon: <FiAward />,
    color: "from-orange-600 to-amber-400",
    features: ["NTSE/IOQM/NSEJS", "Advanced Problems", "Selective Batches"]
  },
  {
    id: "mentorship",
    title: "Personalized Mentorship",
    tagline: "Targeted support for individual needs.",
    icon: <FiUserPlus />,
    color: "from-pink-600 to-rose-400",
    features: ["One-on-One focus", "Doubt Resolution", "Career Strategy"]
  },
  {
    id: "competitive",
    title: "General Competitive Exam",
    tagline: "Master core skills for Gov/Bank exams.",
    icon: <FiBookOpen />,
    color: "from-cyan-600 to-blue-500",
    features: ["Quant & Reasoning", "Banking/Gov Patterns", "Mock Test Series"]
  }
];

export default function CoursesPreview() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sky-600 font-black tracking-widest text-xs uppercase mb-4"
            >
              <span className="w-8 h-px bg-sky-600" /> Course Catalog
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              CHOOSE YOUR <br /> <span className="text-sky-500">PATHWAY.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm md:text-right">
            From foundational studies to advanced competitive exam guidance, designed to foster an intellectual mindset.
          </p>
        </div>

        {/* Courses Horizontal Scroll / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW_COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${course.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

              <div>
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform`}>
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-6">
                  {course.tagline}
                </p>

                <div className="space-y-3 mb-8">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href={`/courses#${course.id}`}
                className="group/btn flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all"
              >
                <span className="font-black text-sm uppercase tracking-widest">Know More</span>
                <div className="h-8 w-8 rounded-xl bg-white flex items-center justify-center text-slate-900 group-hover/btn:scale-110 transition-transform">
                  <FiArrowRight />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Redirection */}
        <div className="mt-20 flex flex-col items-center">
          <Link 
            href="/courses" 
            className="group relative inline-flex items-center gap-6 bg-white border-2 border-slate-900 text-slate-900 px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            Explore Complete Catalog
            <div className="h-10 w-10 rounded-xl bg-sky-500 flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
              <FiArrowRight />
            </div>
          </Link>
          <p className="mt-6 text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
            2025-26 Admissions Open
          </p>
        </div>

      </div>
    </section>
  );
}