"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin, FiMail, FiCheckCircle } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa"; // Import this from 'fa' instead

export default function Founder() {
  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-sky-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image with Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Geometric Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-3xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-50 rounded-full z-0" />
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200">
              {/* Replace with actual image path when available */}
              <div className="aspect-[4/5] bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
                   Founder Image
                </div>
                <Image 
                  src="/images/founder.avif" 
                  alt="Mayur Musale" 
                  fill 
                  className="object-cover"
                /> 

              </div>
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-right-10 lg:left-auto bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 min-w-[200px]"
            >
              <div className="h-12 w-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shrink-0">
                <FiCheckCircle size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">10+ Yrs</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Academic Leadership</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600">The Visionary</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
              >
                Mayur <span className="text-sky-500">Musale</span>
              </motion.h2>
              <p className="text-lg font-bold text-slate-500 uppercase tracking-[0.2em]">Founder & Director</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <FaQuoteLeft className="absolute -top-8 -left-8 text-slate-100 size-20 -z-10" />
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic">
                "True education must evolve with the needs of the competitive world. We don't just prepare students for exams; we prepare them for life."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-slate-600 leading-relaxed text-lg"
            >
              <p>
                Mayur Musale is a visionary educator dedicated to shaping the future of students in Pune. His philosophy is rooted in the belief that true education must evolve with the needs of the competitive world.
              </p>
              <p>
                His approach blends <strong>strong conceptual learning</strong> with <strong>practical, exam-ready application</strong>, empowering students to excel as lifelong learners and ethical leaders.
              </p>
            </motion.div>

            {/* Social Connect */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 flex items-center gap-6"
            >
               <a href="https://www.linkedin.com/in/mayur-musale-126969210/" className="flex items-center gap-3 text-slate-900 hover:text-sky-600 transition-colors group">
                 <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                   <FiLinkedin size={18} />
                 </div>
                 <span className="text-sm font-bold">Connect on LinkedIn</span>
               </a>
               <div className="h-8 w-px bg-slate-200" />
               <a href="mailto:mayurwashimkar@gmail.com" className="flex items-center gap-3 text-slate-900 hover:text-sky-600 transition-colors group">
                 <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                   <FiMail size={18} />
                 </div>
                 <span className="text-sm font-bold">Direct Contact</span>
               </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}