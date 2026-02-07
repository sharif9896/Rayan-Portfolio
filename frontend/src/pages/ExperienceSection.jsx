import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './lib/utils'; // Adjust path based on where you save the util

const Card = ({ children, className, glowColor }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={cn(
      "relative group w-full aspect-[4/5] md:aspect-square rounded-[3rem] bg-[#080808] border border-white/10 overflow-hidden flex items-center justify-center",
      className
    )}
  >
    {/* Inner Glow */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
      style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)` }}
    />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>

    {/* Bottom Border Glow */}
    <div className={cn(
      "absolute bottom-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500",
      `bg-gradient-to-r from-transparent via-[${glowColor}] to-transparent`
    )} style={{ backgroundColor: glowColor }} />
  </motion.div>
);

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-[#020202] text-white py-20 px-6 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex justify-center mb-24">
        <div className="inline-flex items-center bg-[#111111]/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
          {['Work', 'Skills', 'About Me', 'Contact'].map((item) => (
            <button
              key={item}
              className={cn(
                "relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                item === 'Work' ? "bg-white text-black" : "text-gray-400 hover:text-white"
              )}
            >
              {item === 'Work' && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-white blur-[4px] rounded-full" />
              )}
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-[#666] bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          My journey through different roles that have shaped my career path and expertise in software development.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card glowColor="#6366f1">
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" className="w-12" />
        </Card>
        
        {/* Middle card with special "Matrix" style background */}
        <Card glowColor="#10b981" className="border-emerald-500/20">
           <div className="absolute inset-0 opacity-10 font-mono text-[8px] leading-none overflow-hidden break-all p-4 pointer-events-none text-emerald-400">
              {Array(20).fill("0101101011001010101101").join("")}
           </div>
           <div className="w-12 h-12 bg-emerald-500 rounded-lg rotate-45 flex items-center justify-center">
              <div className="-rotate-45 font-bold text-white">AI</div>
           </div>
        </Card>

        <Card glowColor="#3b82f6">
           <div className="w-12 h-12 bg-blue-600 rounded-full" />
        </Card>
      </div>
    </div>
  );
}