import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SkillsHeader = ({text1, text2}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-[#020617] min-h-50 font-sans">
      {/* Container for Heading and Icon */}
      <div className="flex items-center gap-3 mb-1">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight text-white"
        >
          {text1}
        </motion.h1>
      </div>

      {/* Glowing Divider Line */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative h-0.5 w-full max-w-2xl mt-2 overflow-visible"
      >
        {/* The main line with a blue gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-cyan-400 to-transparent" />
        
        {/* The Glow Effect (Glows brighter in the center) */}
        <div className="absolute inset-0 bg-blue-500 blur-xs opacity-50" />
      </motion.div>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6 text-lg text-slate-400 font-medium"
      >
        {text2}
      </motion.p>
    </div>
  );
};

export default SkillsHeader;