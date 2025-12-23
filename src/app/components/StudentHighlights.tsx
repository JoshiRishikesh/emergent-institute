"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiArrowRight } from "react-icons/fi";

const STUDENTS = [
  { 
    name: "Jaydeep Tupake", 
    achievement: "10th CBSE: 97%", 
    stream: "Science Topper", 
    image: "/students/Jaydeep_Tupke.avif", 
    accent: "bg-blue-600", 
    size: "large", 
    badge: "100/100 SCIENCE",
    detail: "Maths: 98/100"
  },
  { 
    name: "Nihal Sayyad", 
    achievement: "MHT-CET: 98%", 
    stream: "Engineering", 
    image: "/students/nihal.avif", 
    accent: "bg-emerald-600", 
    size: "large", 
    badge: "98 PERCENTILE" 
  },
  { 
    name: "Anushree Gaikwad", 
    achievement: "10th CBSE: 97%", 
    stream: "CBSE Boards", 
    image: "/students/anushree.avif", 
    accent: "bg-purple-600", 
    size: "middle", 
    badge: "97%" 
  },
  { 
    name: "Dnyaneshwar Gutte", 
    achievement: "CET: 97% | NEET: 502", 
    stream: "Medical/Eng", 
    image: "/students/dnyaneshwar.avif", 
    accent: "bg-orange-600", 
    size: "middle", 
    badge: "Dual Scorer" 
  },
  { 
    name: "Sayali Ranvade", 
    achievement: "10th CBSE: 92%", 
    stream: "CBSE Boards", 
    image: "/students/sayali.avif", 
    accent: "bg-cyan-600", 
    size: "small", 
    badge: "92%" 
  },
  { 
    name: "Yogita More", 
    achievement: "10th State: 90%", 
    stream: "SSC Boards", 
    image: "/students/yogita.avif", 
    accent: "bg-rose-600", 
    size: "small", 
    badge: "90%" 
  },
  { 
    name: "Akhil Sirish", 
    achievement: "10th CBSE: 91%", 
    stream: "CBSE Boards", 
    image: "/students/Akhil.avif", 
    accent: "bg-indigo-600", 
    size: "small", 
    badge: "91%" 
  },
  { 
    name: "Sandhya Chalak", 
    achievement: "MHT-CET: 92%", 
    stream: "CET", 
    image: "/students/sandhya.avif", 
    accent: "bg-teal-600", 
    size: "small", 
    badge: "92%" 
  },
];

export default function StudentHighlights() {
  return (
    <section className="relative py-12 md:py-28 bg-[#fcfdfe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              THE HALL OF <br /> <span className="text-sky-500">EXCELLENCE.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-full md:w-auto">
             <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <FiAward size={24} />
             </div>
             <p className="text-slate-500 font-bold leading-tight text-xs md:text-sm">
                Join the league of <br/> Top Rankers 2025
             </p>
          </div>
        </div>

        {/* The Bento Grid - Modified for Mobile Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[260px]">
          {STUDENTS.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-sky-100
                ${/* On mobile, all cards take 1 column. On md, they follow the bento size. */ ''}
                ${student.size === 'large' ? 'md:col-span-2 md:row-span-2' : student.size === 'middle' ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'}`}
            >
              {/* Background Accent Decoration */}
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${student.accent}`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white shadow-sm ${student.accent}`}>
                    {student.badge}
                  </div>
                </div>
              </div>

              {/* Centered Portrait Frame - Larger and clearer on mobile */}
              <div className="relative flex-1 flex items-center justify-center py-6 md:py-4">
                 <div className="absolute h-full aspect-square bg-slate-50 rounded-full scale-100 md:scale-90 group-hover:scale-105 transition-transform duration-500 group-hover:bg-sky-50" />
                 
                 <div className="relative h-48 w-full md:h-full">
                    <Image 
                      src={student.image} 
                      alt={student.name} 
                      fill 
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                 </div>
              </div>

              <div className="relative z-10 text-center md:text-left mt-2">
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">{student.stream}</p>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                  {student.name}
                </h3>
                <p className="text-sky-600 font-bold text-sm mt-1">{student.achievement}</p>
                {student.detail && (
                    <p className="hidden md:block text-xs text-slate-400 font-medium mt-1">{student.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA - Adjusted for Mobile padding */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 md:mt-16 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-black text-white">Your Success Story Begins Here.</h4>
            <p className="text-slate-400 font-medium mt-2">Enrolling now for JEE, NEET, and Foundation 2025.</p>
          </div>
          <Link 
            href="/contact"
            className="group w-full md:w-auto flex items-center justify-center gap-3 bg-sky-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-sky-500/20"
          >
            Apply Now <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}