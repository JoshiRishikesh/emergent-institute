"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiPlus, FiMinus, FiCheckCircle } from "react-icons/fi";

export default function AboutPreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-125 h-125 bg-sky-200/50 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-indigo-200/40 rounded-full blur-[120px] -ml-64 -mb-64" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Montage */}
          <div className="relative group">
            <div className="relative aspect-4/5 w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/classroom.avif" // Add a vibrant classroom image
                alt="Classroom Environment" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                    <FiCheckCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">Trust Factor</p>
                    <p className="text-xl font-black text-slate-900">Personal Mentorship</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Small Offset Image - Only Visible on Desktop */}
            <div className="hidden lg:block absolute -bottom-10 -right-10 w-48 h-48 rounded-4xl overflow-hidden border-8 border-white shadow-2xl rotate-3">
               <Image src="/images/student-focussing.avif" alt="Student focusing" fill className="object-cover" />
            </div>
          </div>

          {/* Right Side: Content Card */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Image src="/logo.avif" alt="Logo" width={160} height={50} className="mb-6" />
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                BEYOND <br /> <span className="text-sky-500">ACADEMICS.</span>
              </h2>
            </motion.div>

            <div className="relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-xl shadow-slate-200/50">
              <div className="prose prose-slate text-slate-600 font-medium leading-relaxed">
                <p className="text-lg text-slate-900 font-bold mb-4">
                  Emergent Institute is dedicated to preparing students of Classes 6th to 10th (SSC, CBSE, ICSE) 
                  for their regular school exams as well as IIT–Medical Foundation courses.
                </p>
                
                <p>
                  With small batch sizes, personal mentorship, and individualized monitoring, 
                  every student receives the attention they need to excel academically and personally.
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-4 pt-4 border-t border-slate-100 mt-4"
                    >
                      <p>
                        For Classes 11th and 12th, the institute focuses exclusively on Science and Commerce. 
                        In the Science stream, students are trained for <strong>JEE, NEET, and MHT-CET</strong>.
                      </p>
                      <p>
                        Emergent Institute strongly believes in shaping <strong>ethical torchbearers</strong> of tomorrow, 
                        combining academic excellence with personal growth.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Read More Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-sky-500 transition-colors shadow-lg shadow-slate-200"
              >
                {isExpanded ? (
                  <><FiMinus /> Show Less</>
                ) : (
                  <><FiPlus /> Read More</>
                )}
              </button>
            </div>

            {/* Bottom Redirect Link */}
            <Link 
              href="/about" 
              className="mt-10 flex items-center justify-between p-6 rounded-3xl bg-sky-50 border border-sky-100 group hover:bg-sky-500 transition-all"
            >
              <span className="font-black text-sky-900 group-hover:text-white transition-colors">Discover Our Full Vision & Mission</span>
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                <FiArrowRight size={20} />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}