"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Added Link for redirection
import { FiCheckCircle, FiClock, FiUsers, FiInfo, FiArrowRight } from "react-icons/fi";

const HIGHLIGHTS = [
  "Complete coverage of 11th & 12th CBSE/HSC syllabus",
  "Integrated training for JEE (Main & Advanced) and NEET/MHT-CET",
  "Small batch sizes for personalized doubt resolution",
  "Monthly performance analysis and parent-teacher meetings",
  "Access to vast library of study materials and recorded lectures"
];

export default function JEENEET() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Content & Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-widest border border-sky-100">
                Science Stream
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                11th Science <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-indigo-600">
                  JEE / NEET Foundation
                </span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                Your journey to top engineering and medical colleges starts here.
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                This intensive two-year course is designed for students transitioning into the critical 11th grade who aspire to clear India's toughest entrance exams. The curriculum is meticulously balanced to cover the entire 11th and 12th standard syllabi while simultaneously building a solid foundation from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-sky-50 p-1 rounded-full group-hover:bg-sky-500 transition-colors">
                    <FiCheckCircle className="text-sky-600 group-hover:text-white size-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* REDIRECT BUTTON */}
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-sky-600 transition-all group"
              >
                Inquire & Enroll Today
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Quick Info Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Duration Card */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sky-600 shrink-0">
                <FiClock size={28} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Duration</p>
                <p className="text-2xl font-black text-slate-900">2 Academic Years</p>
              </div>
            </div>

            {/* Batch Size Card */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                <FiUsers size={28} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Batch Size</p>
                <p className="text-2xl font-black text-slate-900">Limited to 30 Seats</p>
              </div>
            </div>

            {/* Fees/Inquiry CTA Card - REDIRECTS ON CLICK */}
            <Link href="/contact" className="block group">
              <div className="bg-linear-to-br from-sky-600 to-indigo-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-sky-500/20 relative overflow-hidden transition-transform hover:scale-[1.02]">
                <FiInfo className="absolute -right-4 -bottom-4 size-32 opacity-10 rotate-12" />
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-2">Ready to Emerge?</h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Secure your spot in our exclusive batch. We maintain strict intake to ensure quality mentoring.
                  </p>
                  <div className="flex items-center justify-between text-2xl font-black border-t border-white/20 pt-4">
                     <span>Inquire for Fees</span>
                     <FiArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}