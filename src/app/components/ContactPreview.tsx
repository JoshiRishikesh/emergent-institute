"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin, FiExternalLink } from "react-icons/fi";

const CONTACT_METHODS = [
  { icon: <FiPhone />, label: "Call Us", value: "+91 98810 12364", sub: "+91 93073 09067", href: "tel:+919881012364" },
  { icon: <FiMail />, label: "Email Us", value: "emergent.institute@gmail.com", href: "mailto:emergent.institute@gmail.com" },
];

const SOCIALS = [
  { icon: <FiInstagram />, href: "https://www.instagram.com/emergent_institute/" },
  { icon: <FiFacebook />, href: "https://www.facebook.com/p/Emergent-Institute-Coaching-Classes-100092282405234/" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/company/emergent-institue/" },
];

export default function ContactPreview() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-80 md:w-175 h-80 md:h-175 bg-sky-500/10 rounded-full blur-[100px] md:blur-[150px] -mr-32 md:-mr-56 -mt-32 md:-mt-56 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Brand Statement */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-4 text-sky-400 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-8">
              <span className="w-10 md:w-14 h-0.5 bg-sky-500" /> Connect
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              READY TO <br /> <span className="text-sky-500 italic">EMERGE?</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md leading-relaxed mb-10">
              Visit our Punawale campus or reach out online to start your academic journey.
            </p>
            
            <div className="flex gap-5">
              {SOCIALS.map((social, i) => (
                <Link key={i} href={social.href} target="_blank" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-sky-500 hover:border-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:col-span-7 w-full space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {CONTACT_METHODS.map((method, i) => (
                <motion.a key={i} href={method.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-[2.5rem] bg-white/3 border border-white/10 hover:border-sky-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-45 shadow-2xl relative">
                  <div className="h-12 w-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-inner">
                    {method.icon}
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{method.label}</p>
                    <p className="text-base md:text-lg font-black text-white group-hover:text-sky-400 transition-colors wrap-break-words">{method.value}</p>
                    {method.sub && <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-tighter">{method.sub}</p>}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address Banner */}
            <div className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-linear-to-br from-sky-600 via-sky-700 to-blue-900 text-white overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-[0.08] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <FiMapPin size={200} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg"><FiMapPin size={20} /></div>
                    <span className="font-black text-[11px] uppercase tracking-[0.2em] opacity-90">Punawale Campus</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black leading-tight tracking-tighter">
                    Second Floor, Kudale Skyone, <br className="hidden md:block" /> Malwadi, Pune
                  </h4>
                </div>
                
                <Link href="https://maps.google.com" target="_blank" className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-4 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl group/btn">
                  Get Directions <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}