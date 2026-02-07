import React from 'react';
import { motion } from 'framer-motion';

const GlowingBorderProfile = ({ src, alt = "Profile" }) => {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-50 h-50"
      // Floating Animation
      animate={{ 
        y: [0, -15, 0] 
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      
      {/* 1. The Rotating Lightning Source (Border) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)',
        }}
      />

      {/* 2. The High-Intensity Blur (Aura Glow) */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -inset-3 rounded-full blur-2xl"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)',
        }}
      />

      {/* 3. The Glass Inner Border (The Coloring Border) */}
      <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 z-10" />

      {/* 4. The Profile Image Container */}
      <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full overflow-hidden z-20 border border-white/20 shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

export default GlowingBorderProfile;

// import React from 'react';
// import { motion } from 'framer-motion';

// const GlowingBorderProfile = ({ src, alt = "Profile" }) => {
//   return (
//     <div className="relative flex items-center justify-center w-48 h-48">
      
//       {/* 1. The Rotating Lightning Source */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 rounded-full"
//         style={{
//           background: 'conic-gradient(from 0deg, #00fff2, #7d2ae8, #ff00c1, #00fff2)',
//         }}
//       />

//       {/* 2. The High-Intensity Blur (Creates the "Lightning" Aura) */}
//       <motion.div
//         animate={{ 
//           rotate: 360,
//           scale: [1, 1.01, 1],
//           opacity: [0.5, 0.8, 0.5]
//         }}
//         transition={{ 
//           rotate: { duration: 3, repeat: Infinity, ease: "linear" },
//           duration: 2, repeat: Infinity, ease: "easeInOut" 
//         }}
//         className="absolute -inset-2 rounded-full blur-xl"
//         style={{
//           background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)',
//         }}
//       />

//       {/* 3. The Inner Border Wrapper (Replaces the black) */}
//       {/* This uses a semi-transparent backdrop to keep the image crisp while showing color */}
//       <div className="absolute inset-1 rounded-full bg-linear-to-tr from-white/20 to-transparent backdrop-blur-sm border border-white/30 z-10" />

//       {/* 4. The Profile Image Container */}
//       <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full overflow-hidden z-20 border border-white/10">
//         <img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
//         />
//       </div>
//     </div>
//   );
// };

// export default GlowingBorderProfile;
// import React from 'react';
// import { motion } from 'framer-motion';

// const LightningProfile = ({ src, alt = "Profile" }) => {
//   return (
//     <div className="relative flex items-center justify-center w-48 h-48 group">
      
//       {/* 1. The Animated "Lightning" Border */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 rounded-full p-0.75"
//         style={{
//           background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)',
//         }}
//       />        

//       {/* 2. The Outer Glow (Blurred version of the border) */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"
//         style={{
//           background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #ef4444, #3b82f6)',
//         }}
//       />

//       {/* 3. The Inner Container (Matches your dark UI theme) */}
//       <div className="relative w-full h-full rounded-full bg-[#0a0a0c] p-1 overflow-hidden">
//         {/* The Actual Image */}
//         <img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover rounded-full"
//         />
        
//         {/* Subtle Glass Overlay */}
//         <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 shadow-inner" />
//       </div>
//     </div>
//   );
// };

// export default LightningProfile;