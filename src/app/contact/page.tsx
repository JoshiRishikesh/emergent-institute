"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiMail, FiPhone, FiMapPin, FiInstagram, 
  FiFacebook, FiLinkedin, FiExternalLink, FiMessageCircle 
} from "react-icons/fi";

const CONTACT_METHODS = [
  { 
    icon: <FiPhone />, 
    label: "Call Us", 
    value: "+91 98810 12364", 
    sub: "Direct Admissions", 
    href: "tel:+919881012364",
    color: "group-hover:text-sky-400"
  },
  { 
    icon: <FiMessageCircle />, 
    label: "WhatsApp", 
    value: "+91 93073 09067", 
    sub: "Instant Support", 
    href: "https://wa.me/919307309067",
    color: "group-hover:text-green-400"
  },
  { 
    icon: <FiMail />, 
    label: "Email Us", 
    value: "emergent.institute@gmail.com", 
    sub: "Official Queries", 
    href: "mailto:emergent.institute@gmail.com",
    color: "group-hover:text-sky-400"
  },
];

const SOCIALS = [
  { icon: <FiInstagram />, href: "https://www.instagram.com/emergent_institute/" },
  { icon: <FiFacebook />, href: "https://www.facebook.com/p/Emergent-Institute-Coaching-Classes-100092282405234/" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/company/emergent-institue/" },
];

export default function ContactPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-20 overflow-hidden">
      {/* --- BACKGROUND ORNAMENTS --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-sky-400 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-8"
          >
            <span className="w-10 md:w-14 h-0.5 bg-sky-500" /> Connect With Us
          </motion.div>
          
          <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-12">
            READY TO <br /> <span className="text-sky-500 italic">EMERGE?</span>
          </h1>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="relative pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* LEFT SIDE: DIRECT CONTACTS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {CONTACT_METHODS.map((method, i) => (
                <motion.a 
                  key={i} 
                  href={method.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-sky-500/40 hover:bg-white/[0.07] transition-all flex items-center gap-6 shadow-2xl"
                >
                  <div className="h-14 w-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{method.label}</p>
                    <p className={`text-base md:text-lg font-black text-white transition-colors ${method.color}`}>
                      {method.value}
                    </p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">{method.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SOCIALS BOX */}
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Social Presence</span>
              <div className="flex gap-4">
                {SOCIALS.map((social, i) => (
                  <Link key={i} href={social.href} target="_blank" className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-sky-500 hover:-translate-y-1 transition-all">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MAP & ADDRESS */}
          <div className="lg:col-span-7 space-y-8">
            {/* ADDRESS CARD */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-sky-600 via-sky-700 to-blue-900 text-white overflow-hidden group shadow-2xl">
              <FiMapPin className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" size={250} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <FiMapPin size={20} />
                  </div>
                  <span className="font-black text-[11px] uppercase tracking-[0.2em] opacity-90">Punawale Campus</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-8">
                  Second Floor, Kudale Skyone, <br className="hidden md:block" /> 
                  Malwadi, Punawale, Pune
                </h2>

                <Link 
                  href="https://maps.app.goo.gl/vX9M7H356z9qX6mX7" 
                  target="_blank" 
                  className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl group/btn"
                >
                  Get Directions <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* MAP EMBED */}
            <div className="h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4282362628045!2d73.7318554751936!3d18.637114182485507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbcffdcf2d65%3A0xb0bf3e6c25f4a8f5!2sEmergent%20Institute!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER-STYLE BRAND MARK */}
      <section className="py-20 text-center opacity-20 select-none">
        <h2 className="text-[15vw] font-black text-white leading-none tracking-[1px] md:tracking-[20px]">
          EMERGENT
        </h2>
      </section>
    </main>
  );
}