import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const containerRef = useRef(null);

  // Mouse tracking for the "Magic" effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothly transform the mouse coordinates into a radial gradient string
  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
  );

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // The function that fixes your "Scroll to Top" issue
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full h-100 text-white p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Section: Profile Avatar */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-24 h-24 rounded-full border-2 border-white/10 overflow-hidden bg-slate-800">
              <img 
                src="klo.jpeg" 
                alt="Noorul Ameen" 
                className="w-full h-full object-cover"
              />
              {/* Circular Text Overlay "LET'S TALK" */}
              <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white text-[8px] font-bold uppercase tracking-widest">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text>
                    {/* <textPath xlinkHref="#circlePath">Let's Talk • Let's Talk • Let's Talk •</textPath> */}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section: Dot Matrix "Connect With Me" */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative flex-1 max-w-2xl w-full h-24 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden cursor-default group"
        >
          {/* Spotlight Effect */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlightBg }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase opacity-80 dot-matrix-text">
              Connect With Me
            </h2>
            <span className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
              <span className="inline-block rotate-180">↳</span> hover or tap to see magic
            </span>
          </div>
          
          {/* Background Dot Grid */}
          <div className="absolute inset-0 -z-10 opacity-20 mask-[radial-gradient(ellipse_at_center,black,transparent)]">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
          </div>
        </div>

        {/* Right Section: Action Button (Now Working) */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          className="p-4 bg-blue-600/20 border border-blue-500/50 rounded-full hover:bg-blue-600/40 transition-colors shadow-lg shadow-blue-500/10"
        >
          <ArrowUp className="w-6 h-6 text-blue-400" />
        </motion.button>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-white/5 text-slate-500 text-sm">
        © 2026 Sharif Rayan. All rights reserved.
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .dot-matrix-text {
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
          background: linear-gradient(to bottom, #fff, #64748b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default Footer;