import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Work');
  const tabs = ['Work', 'Skills', 'About Me', 'Contact'];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2  backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
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