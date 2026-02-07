import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Star } from 'lucide-react';

const EducationCard = () => {
  return (
    <div className="flex items-center justify-center p-6">
      {/* Container for Hover Group */}
      <motion.div 
        className="relative group w-full max-auto max-w-2xl"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Floating CGPA Badge */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 20, scale: 0.95 },
            hover: { opacity: 1, y: -10, scale: 1 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="bg-black/80 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
            <span className="text-white font-bold text-sm tracking-wide">CGPA : 8.79</span>
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
          </div>
        </motion.div>

        {/* Main Card */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border-[6px] border-black bg-[#e2e8f0] shadow-2xl">
          
          {/* Left Sidebar (Blue Section) */}
          <div className="bg-[#0081ff] p-8 flex flex-col items-center justify-center text-center md:w-1/3">
            <div className="bg-white p-3 rounded-full mb-4 shadow-inner">
              <img 
                src="jjj.jpeg" 
                alt="University Logo" 
                className="w-20 h-20 object-contain rounded-4xl"
              />
            </div>
            <h3 className="text-white font-bold text-lg leading-tight">
              Thiruvalluvar University
            </h3>
            <p className="text-blue-100 text-sm mt-1">Vellore</p>
          </div>

          {/* Right Content Section */}
          <div className="p-8 md:w-2/3 flex flex-col justify-center bg-[#e2e8f0]">
            <h2 className="text-[#1e293b] text-2xl font-bold mb-4 leading-tight">
              Bachelor of Science in Computer Science
            </h2>
            
            <div className="flex items-center gap-2 text-slate-500 mb-4">
              <Calendar size={18} />
              <span className="font-medium">2023-2026</span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Graduated with a Computer Science degree specializing in software 
              engineering, database management, and advanced computing concepts.
            </p>

            <div className="flex items-center gap-2 text-[#0081ff] font-semibold">
              <BookOpen size={20} />
              <span>Computer Science</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationCard;