import React from 'react';
import { motion } from 'framer-motion';
import { 
  Glasses, 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Globe, 
  Terminal 
} from 'lucide-react';

const SKILLS = [
  // Outer Orbit: Infrastructure & Databases (Slowest)
  { id: 1, icon: "🗄️", name: "MySQL", radius: 210, speed: 35, delay: 0 },
  { id: 2, icon: "🍃", name: "Mongo", radius: 210, speed: 35, delay: 7 },
  { id: 3, icon: "🐳", name: "Docker", radius: 210, speed: 35, delay: 14 },
  { id: 4, icon: "☸️", name: "K8s", radius: 210, speed: 35, delay: 21 },
  { id: 5, icon: "🐙", name: "Git", radius: 210, speed: 35, delay: 28 },

  // Middle Orbit: Frameworks & Libraries (Medium)
  { id: 6, icon: "⚛️", name: "React", radius: 150, speed: 25, delay: 0 },
  { id: 7, icon: "🟢", name: "Node", radius: 150, speed: 25, delay: 5 },
  { id: 8, icon: "🌊", name: "Tailwind", radius: 150, speed: 25, delay: 10 },
  { id: 9, icon: "📞", name: "WebRTC", radius: 150, speed: 25, delay: 15 },
  { id: 10, icon: "⚡", name: "Socket", radius: 150, speed: 25, delay: 20 },

  // Inner Orbit: Core Languages (Fastest)
  { id: 11, icon: "JS", name: "JS", radius: 90, speed: 18, delay: 0 },
  { id: 12, icon: "☕", name: "Java", radius: 90, speed: 18, delay: 4.5 },
  { id: 13, icon: "🐍", name: "Py", radius: 90, speed: 18, delay: 9 },
  { id: 14, icon: "C++", name: "C++", radius: 90, speed: 18, delay: 13.5 },
];

const OrbitingSkill = ({ radius, speed, delay = 0, children }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: radius * 2,
        height: radius * 2,
        borderRadius: '50%',
        border: '1px dashed rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: -delay,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          left: `calc(50% - 22px)`, 
          top: -22,
          width: 44,
          height: 44,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: -delay,
        }}
      >
        <div className="group relative w-11 h-11 bg-slate-900/90 rounded-full flex items-center justify-center border border-slate-700 shadow-2xl backdrop-blur-sm hover:border-blue-400 transition-colors duration-300">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function SkillsOrbit() {
  return (
    <div className="relative w-full h-137.5 bg-[#020617] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute w-100 h-100 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute w-50 h-50 bg-purple-600/10 rounded-full blur-[80px] -bottom-10 -right-10" />
      
      {/* Central Core */}
      <div className="z-10 group relative">
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all" />
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] relative">
          <Code2 className="text-slate-900 cursor-pointer" size={38} />
        </div>
      </div>

      {/* Orbiting Elements */}
      {SKILLS.map((skill) => (
        <OrbitingSkill 
          key={skill.id} 
          radius={skill.radius} 
          speed={skill.speed} 
          delay={skill.delay}
        >
          <div className="flex flex-col cursor-pointer items-center">
            <span className="text-base">{skill.icon}</span>
            {/* Tooltip on hover */}
            <span className="absolute -bottom-8 bg-slate-800 text-[10px] text-blue-200 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
              {skill.name}
            </span>
          </div>
        </OrbitingSkill>
      ))}
    </div>
  );
}