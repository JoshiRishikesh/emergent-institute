"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiStar, FiAward } from "react-icons/fi";

const CATEGORIES = [
  {
    title: "MHT-CET & Competitive",
    icon: FiAward,
    color: "emerald",
    students: [
      { name: "Nihal Sayyad", score: "98%", sub: "CET Scorer" },
      { name: "Dnyaneshwar Gutte", score: "97%", sub: "CET / 502 NEET" },
      { name: "Sandhya Chalak", score: "92%", sub: "CET Scorer" },
      { name: "Harsh Kumbhar", score: "92%", sub: "CET Scorer" },
      { name: "Sakshi Ghongade", score: "90%", sub: "CET Scorer" },
      { name: "Samiksha Gaikwad", score: "89%", sub: "CET Scorer" },
      { name: "Swapnil Naykwade", score: "82%", sub: "CET Scorer" },
    ]
  },
  {
    title: "10th CBSE Board",
    icon: FiStar,
    color: "blue",
    students: [
      { name: "Jaydeep Tupake", score: "97%", sub: "100 Sci / 98 Math" },
      { name: "Anushree Gaikwad", score: "97%", sub: "Academic Star" },
      { name: "Sayali Ranvade", score: "92%", sub: "Distinction" },
      { name: "Akhil Sirish", score: "91%", sub: "Distinction" },
      { name: "Rutika Shinde", score: "83%", sub: "First Class" },
      { name: "Yash Gaikwad", score: "82%", sub: "First Class" },
      { name: "Lalit Koli", score: "82%", sub: "First Class" },
    ]
  },
  {
    title: "10th SSC (State Board)",
    icon: FiBookOpen,
    color: "rose",
    students: [
      { name: "Yogita More", score: "90%", sub: "Distinction" },
      { name: "Gaurav Nirpal", score: "87%", sub: "Distinction" },
      { name: "Krushnath Jadhav", score: "85%", sub: "Distinction" },
      { name: "Avdhoot Dhumal", score: "82%", sub: "First Class" },
      { name: "Sumit Gatkul", score: "81%", sub: "First Class" },
      { name: "Mahi Solunke", score: "76%", sub: "Merit" },
    ]
  }
];

export default function ResultCategories() {
  return (
    <section className="py-20 bg-[#fafbff]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="space-y-20">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`p-3 rounded-2xl bg-${cat.color}-100 text-${cat.color}-600`}>
                  <cat.icon size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  {cat.title}
                </h2>
                <div className="flex-1 h-px bg-slate-200 hidden md:block" />
              </div>

              {/* Students Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.students.map((student, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group p-6 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                          {student.name.split(' ')[0]} <br /> {student.name.split(' ')[1]}
                        </span>
                      </div>
                      <span className={`text-2xl font-black text-${cat.color}-600`}>
                        {student.score}
                      </span>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-50">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {student.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}