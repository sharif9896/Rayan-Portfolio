import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AutoTypingCursor from './AutoTypingCursor';

const HeroSection = () => {
const words = ["Full-stack Developer.", "React & Node expert.", "Cloud & DevOps ready.", "Database Architect."];
  return (
    <section className="min-h-screen text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Star Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute h-1 w-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute h-1 w-1 bg-white rounded-full top-1/2 left-1/3 animate-ping" />
        <div className="absolute h-1 w-1 bg-white rounded-full top-3/4 left-2/3 animate-pulse" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Text Content (Changed to order-1 on large screens) */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
            <span className="text-sm font-medium text-white/80">Aspiring AI & DATA Engineer</span>
            <ChevronRight size={14} className="text-white/40" />
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              Hello, I am <br />
              <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic">Sharif Rayan</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 max-w-lg leading-relaxed"
            >
              An AI enthusiast and software developer passionate about leveraging technology to create innovative solutions. <AutoTypingCursor phrases={words} />
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Experience
            </button>
            <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 hover:bg-white/5 transition-all active:scale-95">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Floating Profile Picture (Changed to order-2 on large screens) */}
        <div className="flex justify-center lg:justify-center order-1 lg:order-2">
          <motion.div 
            className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rotating Lightning Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)' }}
            />
            {/* Aura Glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full blur-3xl"
              style={{ background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)' }}
            />
            {/* Inner Glass Ring */}
            <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 z-10" />
            {/* Profile Image */}
            <div className="relative w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full overflow-hidden z-20 border border-white/10">
              <img
                src="klo.jpeg" 
                alt="Sharif Rayan"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;