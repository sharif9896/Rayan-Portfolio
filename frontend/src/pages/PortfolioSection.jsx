import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, User, Mail } from 'lucide-react';

const ExperienceCard = ({ gradientColor, logoSrc, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group w-full max-w-[350px] aspect-square rounded-[40px] bg-[#050505] border border-white/10 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Glow Effect */}
      <div 
        className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-3xl`}
        style={{ background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)` }}
      />
      
      {/* Card Border Glow */}
      <div className={`absolute inset-0 rounded-[40px] border-2 border-transparent group-hover:border-${gradientColor}/30 transition-colors duration-500`} 
           style={{ boxShadow: `inset 0 0 20px ${gradientColor}20` }} />

      {/* Central Logo UI */}
      <div className="relative z-10 w-32 h-32 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-2xl">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden p-4 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
           {/* Replace with <img> tag for your specific logos */}
           <div className="w-full h-full bg-slate-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const navItems = [
    { name: 'Work', icon: <Briefcase size={16} />, active: true },
    { name: 'Skills', icon: <Code size={16} />, active: false },
    { name: 'About Me', icon: <User size={16} />, active: false },
    { name: 'Contact', icon: <Mail size={16} />, active: false },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans p-8">
      {/* Header Navigation */}
      <nav className="flex justify-center mb-16">
        <div className="flex bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-2 gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                item.active 
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Text */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-6"
        >
          Professional Experience
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My journey through different roles that have shaped my career path and expertise in software development.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
        <ExperienceCard gradientColor="#4f46e5" title="Company A" />
        <ExperienceCard gradientColor="#10b981" title="Company B" />
        <ExperienceCard gradientColor="#3b82f6" title="Company C" />
      </div>
    </div>
  );
};

export default PortfolioSection;