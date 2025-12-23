'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FiMail, FiPhone, FiArrowUpRight, FiGlobe, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/emergent_institute/', name: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/p/Emergent-Institute-Coaching-Classes-100092282405234/', name: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/emergent-institue/?originalSubdomain=in', name: 'LinkedIn' },
];

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Enhancement', href: '/enhancement' },
  { name: 'Results', href: '/results' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  return (
    <motion.footer
      className="relative overflow-hidden bg-[#020617] pt-24 font-sans text-slate-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* --- Visual Transition Highlight --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" /> 
        <div className="absolute -top-24 -left-24 w-125 h-125 bg-[#0eaed7]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
          
          {/* Brand Section */}
          <motion.div className="lg:col-span-4 space-y-8 text-center lg:text-left" variants={itemVariants}>
            <div className="space-y-6">
              <Image 
                src="/logo.avif" 
                alt="Logo" 
                width={180} 
                height={50} 
                className="h-12 w-auto object-contain mx-auto lg:mx-0 brightness-110"
              />
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
                Redefining educational excellence with a focus on IIT-JEE, NEET, and Professional Foundation courses.
                <span className="block mt-4 text-[#0eaed7] font-semibold tracking-wide uppercase text-xs">Empowering Dreams, Building Futures.</span>
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4">
              {SOCIAL_LINKS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-[#0eaed7] hover:text-white hover:border-[#0eaed7] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 text-center lg:text-left underline underline-offset-8 decoration-slate-800">Navigation</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 text-center lg:text-left">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-[#0eaed7] transition-all duration-300 text-sm font-medium inline-flex items-center group">
                    <span className="h-1px w-0 bg-[#0eaed7] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & CTA Section */}
          <motion.div className="lg:col-span-5 space-y-10" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 to-black border border-slate-800 p-8 shadow-2xl group">
              <div className="relative z-10">
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight">Ready to Transform?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Join our focused learning ecosystem designed to unlock your potential.</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0eaed7] px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-slate-950 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(14,174,215,0.3)]"
                >
                  Apply Online <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 bg-[#0eaed7]/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
            </div>

            {/* --- Fixed Contact Info --- */}
            <div className="flex flex-col space-y-6">
              {/* Address Row */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#0eaed7] transition-colors group-hover:bg-slate-800">
                   <FiMapPin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Institute Campus</p>
                  <p className="text-sm text-slate-300 leading-snug font-medium">
                    2nd Floor, Kudale Skyone, Malwadi, Punawale, Pune, India
                  </p>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#0eaed7] transition-colors group-hover:bg-slate-800">
                   <FiMail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Email Support</p>
                  <a 
                    href="mailto:emergent.institute@gmail.com" 
                    className="text-sm md:text-base text-slate-200 font-medium hover:text-[#0eaed7] transition-colors truncate block"
                  >
                    emergent.institute@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#0eaed7] transition-colors group-hover:bg-slate-800">
                   <FiPhone size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Admission Helpline</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href="tel:+919881012364" className="text-sm md:text-base text-slate-200 font-semibold hover:text-[#0eaed7] transition-colors underline decoration-slate-800 underline-offset-4">
                      +91 98810 12364
                    </a>
                    <a href="tel:+919307309067" className="text-sm md:text-base text-slate-200 font-semibold hover:text-[#0eaed7] transition-colors underline decoration-slate-800 underline-offset-4">
                      +91 93073 09067
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-900/50 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium uppercase tracking-wider">
            <FiGlobe className="text-[#0eaed7] animate-pulse" />
            <span>© {new Date().getFullYear()} Emergent Institute. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms</Link>
            <a 
              href="https://www.lupaentertainment.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0eaed7] hover:brightness-125 transition-all flex items-center gap-1 group"
            >
              Dev: <span className="text-slate-300 group-hover:text-white transition-colors">Lupa Entertainment</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}