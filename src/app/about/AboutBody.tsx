"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiActivity, FiZap, FiShield, FiCheck } from "react-icons/fi";

const FEATURES = [
  {
    title: "The Emergent Story",
    description: "Founded to transcend conventional education by fostering both intellectual rigour and personal growth. We provide high-quality education that is deeply personalized and results-oriented.",
    icon: FiBookOpen,
    bg: "bg-white",
  },
  {
    title: "Holistic Philosophy",
    description: "We shape ethical torchbearers by combining academic excellence with real-world skills and active parental involvement.",
    icon: FiShield,
    bg: "bg-slate-900",
    dark: true,
  }
];

export default function AboutBody() {
  return (
    <section className="py-20 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Section 1: The Story & Philosophy (Bento Style) */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border ${
                feature.dark 
                  ? "bg-slate-900 text-white border-slate-800" 
                  : "bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-200/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl mb-8 flex items-center justify-center ${feature.dark ? "bg-sky-500" : "bg-sky-50 text-sky-600"}`}>
                <feature.icon size={24} />
              </div>
              <h2 className={`text-3xl font-black mb-4 tracking-tight ${feature.dark ? "text-white" : "text-slate-900"}`}>
                {feature.title}
              </h2>
              <p className={`text-lg leading-relaxed ${feature.dark ? "text-slate-300" : "text-slate-600"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section 2: The Academic Journey (Timeline Style) */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic font-serif">The Academic Roadmap</h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-12">
            {/* Foundation Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-full md:w-1/3 text-center md:text-left">
                <span className="text-sky-500 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Integrated Foundation</h3>
                <p className="text-sky-600 font-bold tracking-widest text-[10px] uppercase mt-1">Classes 6th to 10th</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-slate-600 text-lg leading-relaxed">
                  We seamlessly integrate regular school syllabus (SSC, CBSE, ICSE) with early exposure to <strong>IIT–Medical Foundation concepts</strong>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['School Exam Dominance', 'Competitive Edge', 'Early Concept Clarity', 'Holistic Mentoring'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <FiCheck className="text-sky-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Senior Programs Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row-reverse gap-8 items-center bg-sky-50 p-8 md:p-12 rounded-[3rem] border border-sky-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-full md:w-1/3 text-center md:text-left">
                <span className="text-indigo-500 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Specialized Senior Programs</h3>
                <p className="text-indigo-600 font-bold tracking-widest text-[10px] uppercase mt-1">Classes 11th and 12th</p>
              </div>
              <div className="flex-1 grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-indigo-100">
                  <h4 className="font-black text-indigo-600 uppercase text-xs mb-2">Science Stream</h4>
                  <p className="text-sm text-slate-600">Rigorous training for <strong>JEE, NEET, and MHT-CET</strong> with advanced problem-solving modules.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-emerald-100">
                  <h4 className="font-black text-emerald-600 uppercase text-xs mb-2">Commerce Stream</h4>
                  <p className="text-sm text-slate-600">Integrated preparation for <strong>11th/12th & CA Foundation</strong> examination excellence.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 3: Pillars of Potential */}
        <div className="mt-24 bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[80px]" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">How we ensure every student emerges a leader</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { label: "Small Batch Sizes", sub: "Personalized Focus" },
                        { label: "Personal Mentorship", sub: "One-on-One Guidance" },
                        { label: "Parental Involvement", sub: "Active Feedback Loop" },
                    ].map((pill, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-sky-400 font-black text-xl md:text-2xl">{pill.label}</p>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{pill.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}