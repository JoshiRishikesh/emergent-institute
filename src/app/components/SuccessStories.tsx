"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Jaydeep Tupake",
    score: "10th CBSE: 97%",
    subject: "Science 100/100",
    text: "The conceptual clarity I gained here was phenomenal. Scoring a perfect 100 in Science wouldn't have been possible without the personalized attention and the rigorous mock tests conducted by the faculty.",
    accent: "border-blue-500",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    name: "Nihal Sayyad",
    score: "MHT-CET: 98%",
    subject: "Engineering",
    text: "The MHT-CET prep at Emergent is result-oriented. The shortcut techniques and time-management strategies taught in the classroom gave me the confidence to tackle the exam efficiently.",
    accent: "border-emerald-500",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    name: "Anushree Gaikwad",
    score: "10th CBSE: 97%",
    subject: "CBSE Boards",
    text: "Small batch sizes made a huge difference. I never felt hesitant to ask doubts, and the teachers stayed back until every concept was clear. It’s more than an institute; it’s a support system.",
    accent: "border-purple-500",
    glow: "group-hover:shadow-purple-500/20"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-125 h-125 bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <FiMessageCircle className="text-sky-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sky-200">Testimonials</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            HEAR FROM OUR <br />
            <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent italic filter drop-shadow-sm">
              ACHIEVERS.
            </span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl font-medium text-lg md:text-xl leading-relaxed">
            Real feedback from students who transformed their hard work 
            into <span className="text-white">national-level success.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative p-8 md:p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:bg-slate-900/80 shadow-2xl ${story.glow}`}
            >
              {/* Decorative Accent Bar */}
              <div className={`absolute top-10 left-0 w-1 h-20 rounded-r-full ${story.accent.replace('border', 'bg')} shadow-[0_0_15px_rgba(0,0,0,0.5)]`} />

              <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                <FaQuoteLeft size={48} />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} fill="currentColor" size={14} />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed text-lg md:text-xl font-medium italic mb-10">
                  "{story.text}"
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/5">
                <h4 className="text-xl font-bold text-white mb-1">{story.name}</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sky-400 font-extrabold text-xs uppercase tracking-tighter">
                    {story.score}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="text-slate-500 font-bold text-xs">
                    {story.subject}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination/Dots */}
        <div className="mt-16 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === 0 ? "w-12 bg-sky-500 shadow-[0_0_10px_#0ea5e9]" : "w-2 bg-slate-800"
              }`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}