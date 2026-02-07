import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Work');
  const tabs = ['Work', 'Skills', 'About Me', 'Contact'];

  const scrollToSection = (tab) => {
    setActiveTab(tab);
    
    // Convert "About Me" -> "about-me"
    const sectionId = tab.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);

    if (element) {
      // Offset calculation if you have a fixed header height
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 backdrop-blur-md border border-white/10 rounded-full shadow-2xl bg-black/20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab ? 'text-black' : 'text-white/70 hover:text-white'
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;