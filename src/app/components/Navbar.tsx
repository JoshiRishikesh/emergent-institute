"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiHome, FiInfo, FiBookOpen, FiTrendingUp, FiAward, FiImage, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "About", href: "/about", icon: FiInfo },
    { name: "Courses", href: "/courses", icon: FiBookOpen },
    { name: "Enhancement", href: "/enhancement", icon: FiTrendingUp },
    { name: "Results", href: "/results", icon: FiAward },
    { name: "Gallery", href: "/gallery", icon: FiImage },
  ];

  return (
    // Changed: Removed pointer-events-none to ensure sticky reliability 
    // Added: w-full and z-[100] to stay above all content
    <header className="sticky top-0 left-0 w-full z-[100] flex justify-center pb-1 md:pb-1 p-4 md:p-6 transition-colors duration-300">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className={`flex items-center justify-between px-4 md:px-8 transition-all duration-500 border ${
          scrolled 
            ? "w-full max-w-6xl rounded-2xl bg-white/90 backdrop-blur-xl border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-4" 
            : "w-full max-w-7xl rounded-3xl bg-transparent border-transparent py-4"
        }`}
      >
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group relative">
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.avif" 
              alt="Logo" 
              width={48} 
              height={48} 
              priority 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm md:text-base font-black tracking-tighter text-slate-900 uppercase">
              Emergent
            </p>
            <p className="text-[7px] md:text-[9px] tracking-[0.3em] font-bold uppercase text-sky-600">
              Institute
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/50 p-1 border border-slate-200/60 backdrop-blur-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative px-5 py-2 text-[12px] font-bold transition-colors duration-300 ${
                  active ? "text-white" : "text-slate-600 hover:text-sky-600"
                }`}
              >
                {active && (
                  <motion.span 
                    layoutId="nav-pill" 
                    className="absolute inset-0 rounded-full bg-slate-900 shadow-lg shadow-slate-900/20" 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-[12px] font-bold text-white transition-all hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/20 active:scale-95"
          >
            Enrol Now
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-900 shadow-sm transition-active active:scale-90"
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: -10 }} 
              className="absolute top-full left-0 right-0 mt-3 overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-2xl md:hidden p-4 origin-top"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                        pathname === link.href 
                          ? "bg-slate-900 text-white shadow-md" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <link.icon size={20} className={pathname === link.href ? "text-sky-400" : "text-slate-400"} />
                      <span className="text-base font-bold">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a 
                    href="tel:+919307309067" 
                    className="flex items-center justify-center gap-3 rounded-2xl bg-sky-50 py-4 font-bold text-sky-700 active:bg-sky-100 transition-colors"
                  >
                    <FiPhone /> +91 93073 09067
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;