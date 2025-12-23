"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiUser, FiZap, FiTarget, FiMessageCircle, FiArrowRight, FiHeart, FiClock } from "react-icons/fi";

const MENTORSHIP_ADVANTAGES = [
  {
    title: "Customized Remedial Classes",
    desc: "Targeted sessions for specific subjects or challenging topics.",
    icon: FiZap
  },
  {
    title: "One-on-One Doubt Clearance",
    desc: "Direct access to experienced faculty for deep-dive questions.",
    icon: FiMessageCircle
  },
  {
    title: "Strategic Time Management",
    desc: "Personalized study habits and exam strategy planning.",
    icon: FiClock
  },
  {
    title: "Confidence Building",
    desc: "Personalized feedback loops and emotional encouragement.",
    icon: FiHeart
  }
];

export default function PersonalizedMentorship() {
  return (
    <section id="PersonalizedMentorship" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {MENTORSHIP_ADVANTAGES.map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-violet-200 transition-all hover:bg-white hover:shadow-xl hover:shadow-violet-100/50 group">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-violet-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing/Package Info */}
            <div className="mt-8 p-6 bg-violet-50 rounded-[2rem] border border-violet-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white">
                   <FiTarget size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-violet-600">Flexible Structure</p>
                  <p className="text-slate-900 font-bold italic">Hourly & Monthly Packages</p>
                </div>
              </div>
              <Link href="/contact" className="text-sm font-black text-violet-700 hover:underline">
                View Pricing Detail
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-50 border border-violet-100">
                <FiUser className="text-violet-600 size-3" />
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-700">Student-Centric Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Extra Classes & <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">
                  Personalized Mentorship
                </span>
              </h2>
              <p className="text-xl font-bold text-slate-500 italic">
                Targeted support focused purely on your unique needs.
              </p>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Success isn't just about attending lectures; it's about addressing individual weaknesses and maximizing potential. Each student is paired with a senior faculty member who provides ongoing support, helps structure a study plan, and offers emotional encouragement.
              </p>
              <p>
                This holistic approach ensures academic improvement alongside personal growth, turning your weaknesses into your greatest strengths.
              </p>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-violet-600 text-white rounded-[2rem] font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 group"
              >
                Inquire & Book a Session
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}