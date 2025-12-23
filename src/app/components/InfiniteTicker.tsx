"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "Empowering Students for JEE & NEET Success",
  "Specialized Coaching for MHT-CET",
  "6th–12th Classes | SSC • CBSE • ICSE",
  "Premium Commerce & CA Foundation Programs",
  "Cutting-Edge IIT-Medical Foundation",
  "6th - 10th: Foundation Excellence",
  "11th - 12th: Science (JEE/NEET/CET)",
  "11th - 12th: Commerce & Professional CA Foundation",
  "Your Gateway to Academic Excellence",
];

// InfiniteTicker.tsx - Updated return
export default function InfiniteTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    // Removed: fixed, top-24, inset-x-0, z-60, pointer-events-none
    // Added: relative, w-full, z-10
    <div className="relative w-full flex justify-center px-4 md:px-6 mb-4">
      <div className="w-full max-w-7xl overflow-hidden bg-white/70 backdrop-blur-xl border-t border-b border-slate-200/60 rounded-xl md:rounded-2xl py-2.5 shadow-sm">
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {items.map((text, index) => (
            <div key={index} className="flex items-center gap-6 px-6">
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.15em] uppercase text-slate-600">
                {text}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}