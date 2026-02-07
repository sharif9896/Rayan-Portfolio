import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const AutoTypingCursor = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); // Pause at end
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Deleting is usually faster than typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <div className="flex items-center gap-3 font-mono text-2xl font-bold text-slate-600">
      <Terminal className="text-indigo-600"  size={28} />
      
      <div className="relative">
        <span>{phrases[index].substring(0, subIndex)}</span>
        
        {/* Animated Cursor */}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.8, 
            ease: "linear" 
          }}
          className="inline-block w-0.75 h-7 ml-1 bg-indigo-600 align-middle"
        />
      </div>
    </div>
  );
};

export default AutoTypingCursor;
// export default function HeroSection() {
//   const words = ["Build faster.", "Design better.", "Ship smarter."];
  
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
//       <h1 className="mb-4 text-sm font-semibold tracking-widest text-slate-400 uppercase">
//         The Future of Workflow
//       </h1>
//       <AutoTypingCursor phrases={words} />
//     </div>
//   );
// }