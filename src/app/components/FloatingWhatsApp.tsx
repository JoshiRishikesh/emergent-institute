"use client";

import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatingWhatsApp() {
  const phoneNumber = "919307309067"; 
  const message = encodeURIComponent("Hello! I'm interested in admissions at Emergent Institute.");

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative h-12 w-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
      >
        {/* Subtle Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        <IoLogoWhatsapp />

        {/* Small Theme Dot */}
        <span className="absolute top-0 right-0 h-3 w-3 bg-sky-500 border-2 border-slate-950 rounded-full" />
      </motion.a>
    </div>
  );
}