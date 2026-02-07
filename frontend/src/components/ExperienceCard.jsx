import { motion } from 'framer-motion';

const ExperienceCard = ({ logo, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative group w-full aspect-4/5 rounded-[2.5rem] p-1 overflow-hidden bg-slate-900`}
    >
      {/* Dynamic Border Glow */}
      <div className={`absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${color}`} />
      
      <div className="relative h-full w-full bg-[#0a0a0c] rounded-[2.4rem] flex items-center justify-center overflow-hidden border border-white/5">
        
        {/* Concentric Circle Background Effect */}
        <div className="absolute flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute w-36 h-36 rounded-full border border-white/10 bg-white/2" />
        </div>

        {/* Logo Container */}
        <div className="relative z-10 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <img src={logo} alt="Company Logo" className="w-16 h-16 object-contain" />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;