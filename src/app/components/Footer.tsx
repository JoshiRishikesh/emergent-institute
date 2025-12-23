'use client';

import { useState, useEffect } from 'react'; // Added Hooks
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMail, FiPhone, FiArrowUpRight, FiGlobe, FiMapPin, FiExternalLink, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// ... (SOCIAL_LINKS and QUICK_LINKS stay the same)

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/emergent_institute/', name: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/p/Emergent-Institute-Coaching-Classes-100092282405234/', name: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/emergent-institue/?originalSubdomain=in', name: 'LinkedIn' },
];

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Results', href: '/results' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="relative overflow-hidden bg-[#020617] pt-24 font-sans text-slate-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* --- Back to Top Button --- */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[110] flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-2xl shadow-sky-500/40 hover:bg-sky-400 active:scale-90 transition-all md:bottom-10 md:right-10"
            aria-label="Back to Top"
          >
            <FiArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- Aesthetic Grid Overlay --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- Ambient Glows --- */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Brand Identity */}
          <motion.div className="lg:col-span-4 space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <Image 
                  src="/logo.avif" 
                  alt="Logo" 
                  width={180} 
                  height={50} 
                  className="h-14 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
                />
              </Link>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                Architecting excellence in Pune through specialized coaching for <span className="text-white font-semibold">JEE, NEET, and Professional Commerce.</span>
              </p>
            </div>
            
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sitemaps */}
          <motion.div className="lg:col-span-3 grid grid-cols-1 gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-6 h-px bg-sky-500" /> Navigation
              </h3>
              <ul className="space-y-4">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-bold flex items-center group">
                      <FiArrowUpRight className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Bento Card */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-sky-500/10 transition-colors">
                <FiExternalLink size={120} />
              </div>

              <h4 className="text-2xl font-black text-white mb-8 tracking-tight">Visit Our Campus</h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    2nd Floor, Kudale Skyone, Malwadi,<br /> 
                    Punawale, Pune, Maharashtra 411033
                  </p>
                </div>

                <div className="h-px bg-white/5 w-full" />

                <div className="flex flex-col gap-4">
                  <a href="mailto:emergent.institute@gmail.com" className="flex items-center gap-4 group/link">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-sky-500 transition-colors shrink-0">
                      <FiMail size={18} />
                    </div>
                    <span className="text-sm font-bold group-hover/link:text-white transition-colors">emergent.institute@gmail.com</span>
                  </a>

                  <a href="tel:+919307309067" className="flex items-center gap-4 group/link">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-sky-500 transition-colors shrink-0">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">24/7 Helpline</p>
                      <span className="text-sm font-black group-hover/link:text-white transition-colors">+91 93073 09067</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Legal & Credits --- */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <FiGlobe className="text-sky-500" />
            <span>© {new Date().getFullYear()} Emergent Institute</span>
          </div>
          
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <a 
              href="https://www.lupaentertainment.com" 
              target="_blank"
              className="text-[10px] font-black uppercase tracking-widest text-sky-500 hover:brightness-125 transition-all flex items-center gap-2"
            >
              Crafted by <span className="text-slate-300">Lupa Entertainment</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}