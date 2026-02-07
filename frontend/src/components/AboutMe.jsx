import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Users, Bot } from "lucide-react";
import SkillsHeader from "./SkillsHeader";

const AboutMe = () => {
  const stats = [
    {
      label: "Active Users",
      value: "500+",
      icon: <Users className="w-5 h-5" />,
    },
    { label: "Core Stack", value: "MERN", icon: <Cpu className="w-5 h-5" /> },
    {
      label: "Systems Built",
      value: "50+",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      label: "AI & MlOps",
      value: "Enthusiast",
      icon: <Bot className="w-5 h-5" />,
    },
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PHP",
    "MySQL",
    "WebRTC",
    "Socket.IO",
    "Tailwind CSS",
    "REST APIs",
  ];

  return (
    <>
      <SkillsHeader text1={"About Me."} text2={""} />
      {/* <div className="flex justify-center items-center w-full h-auto text-white text-3xl font-semibold font-serif">About Me.</div> */}
      <section className="relative w-full bg-[#020617] text-white py-20 px-8 overflow-hidden">
        {/* Background Decorative Element */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Opportunities
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Engineering Solutions, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Not Just Code.
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              I’m a Full Stack Engineer passionate about building scalable,
              real-world applications. From a **College Management System
              supporting 500+ users** to custom-built Version Control Systems, I
              thrive on turning complex problems into seamless digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-900 border border-white/5 rounded-md text-sm text-slate-300 hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Cards/Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Main Achievement Card */}
            <div className="relative group p-6 rounded-2xl bg-slate-900/50 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" /> Real-World Impact
              </h3>
              <p className="text-sm text-slate-400 leading-snug">
                Developed an end-to-end LMS used daily by staff and students for
                attendance, exams, and automated workflows.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-black/20 border border-white/5 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-blue-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Dot Pattern (Matches your footer) */}
        <div className="absolute inset-0 -z-10 opacity-10 mask-[radial-gradient(ellipse_at_center,black,transparent)]">
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px]"></div>
        </div>
        
      </section>
    </>
  );
};

export default AboutMe;
