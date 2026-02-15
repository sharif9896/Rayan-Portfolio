import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Briefcase, 
  MessageSquare, 
  Utensils, 
  GraduationCap, 
  Video, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Github,
  Server,
  Code2
} from 'lucide-react';


const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "DiyaproSoft, Bengaluru",
    date: "Mar 2025 – July 2025",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Developed a complete CMS and LMS supporting 500+ active users, automating attendance and daily workflows.",
    tech: ["MERN Stack", "MVC", "Python"],
    links: { demo: "https://lms-murex-seven.vercel.app/", github: "https://github.com/sharif9896/LMS-REAL-LIFE-PROJECT" }
  },

  {
    title: "Alameen Educational Software (500+) -> User",
    company: "Custom System Deployment",
    date: "2024 - 2025",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Customized educational software using PHP/MySQL. Leveraged GD Library for image processing and Ajax for asynchronous data updates without page reloads.",
    tech: ["PHP", "MySQL", "JS ES6+", "Ajax", "GD Library", "Bootstrap"],
    links: { demo: "https://labcruise.in/alameen/index.php", github: "https://diyaprosoft.in/cpanel" }
  },

  {
    title: "ICA Attendance System  (500+) -> User",
    company: "College Deployment",
    date: "2025",
    icon: <CheckCircle2 className="w-5 h-5" />,
    description: "Replaced outdated manual scripts with a real-time tracking web app used in daily college operations.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    links: { demo: "https://ica-app.vercel.app/", github: "https://github.com/sharif9896/ICA-Attendance-App-REAL-LIFE-PROJECT" }
  },

  {
    title: "Full Stack Food Delivery App",
    company: "MERN Production Project",
    date: "2025",
    icon: <Utensils className="w-5 h-5" />,
    description: "Developed a comprehensive food ordering platform with JWT authentication and secure image handling via Multer/Cloudinary. Implemented a strict MVC architecture for scalability.",
    tech: ["React.js", "Node.js", "JWT", "TailwindCSS", "Multer"],
    links: { demo: "https://food-order-ten-drab.vercel.app/", github: "https://github.com/sharif9896/Food-Order" }
  },

  {
    title: "StreamX - Real-time Streaming",
    company: "Personal Project",
    date: "2025",
    icon: <Video className="w-5 h-5" />,
    description: "Full-stack live video streaming application utilizing WebRTC and Socket.IO for low-latency communication.",
    tech: ["WebRTC", "Socket.IO", "Express.js"],
    links: { demo: "https://stream-flow-jade.vercel.app/", github: "https://github.com/sharif9896/StreamX-Video-Call" }
  },

  {
    title: "Real-time Communication System",
    company: "Distributed Systems Project",
    date: "2026",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "Architected a high-scale chat system using RabbitMQ for message queuing and Redis for caching. Dockerized the microservices for seamless deployment and used Socket.io for duplex communication.",
    tech: ["RabbitMQ", "Socket.io", "Redis", "Docker", "MongoDB", "Cloudinary"],
    links: { demo: "https://real-time-chat-application-ten-ochre.vercel.app/", github: "https://github.com/sharif9896/Real-Time-Chat-Application" }
  },

  {
    title: "ExamCraft - Lead Developer",
    company: "Internal Project",
    date: "2026",
    icon: <FileText className="w-5 h-5" />,
    description: "Built an intelligent question paper generator replacing manual MS Word processes for college staff.",
    tech: ["React.js", "Node.js", "MongoDB"],
    links: { demo: "https://exam-craft-rose.vercel.app/", github: "https://github.com/sharif9896/Exam_Craft" }
  },
];

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-950 py-20 px-4 text-slate-200 font-sans" ref={containerRef}>
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">Professional Experience</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">A journey through full-stack development, real-time systems, and educational innovation.</p>
        </div>

        {/* Vertical Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent h-full origin-top hidden md:block"
        />

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col`}
            >
              <div className="hidden md:block w-5/12" />

              {/* Icon Node */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] z-10 hidden md:flex"
              >
                {exp.icon}
              </motion.div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 group">
                <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 group-hover:border-purple-500/50 transition-all duration-300 backdrop-blur-md shadow-2xl relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition-colors" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
                      {exp.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <Server className="w-4 h-4 text-slate-500" /> {exp.company}
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-800/80 rounded-md text-[11px] font-semibold text-slate-300 border border-slate-700/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4 border-t border-slate-800">
                    <a href={exp.links.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Source
                    </a>
                    <a href={exp.links.demo} className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import { 
//   Briefcase, 
//   GraduationCap, 
//   Video, 
//   FileText, 
//   CheckCircle2, 
//   ExternalLink, 
//   Github 
// } from 'lucide-react';

// const experiences = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "DiyaproSoft, Bengaluru",
//     date: "Mar 2025 – July 2025",
//     icon: <Briefcase className="w-5 h-5" />,
//     description: "Developed a complete CMS and LMS supporting 500+ active users, automating attendance and daily workflows.",
//     tech: ["MERN Stack", "MVC", "Python"],
//     links: { demo: "#", github: "#" }
//   },
//   {
//     title: "ExamCraft - Lead Developer",
//     company: "Internal Project",
//     date: "2025",
//     icon: <FileText className="w-5 h-5" />,
//     description: "Built an intelligent question paper generator replacing manual MS Word processes for college staff.",
//     tech: ["React.js", "Node.js", "MongoDB"],
//     links: { demo: "#", github: "#" }
//   },
//   {
//     title: "StreamX - Real-time Streaming",
//     company: "Personal Project",
//     date: "2025",
//     icon: <Video className="w-5 h-5" />,
//     description: "Full-stack live video streaming application utilizing WebRTC and Socket.IO for low-latency communication.",
//     tech: ["WebRTC", "Socket.IO", "Express.js"],
//     links: { demo: "#", github: "#" }
//   },
//   {
//     title: "ICA Attendance System",
//     company: "College Deployment",
//     date: "2025",
//     icon: <CheckCircle2 className="w-5 h-5" />,
//     description: "Replaced outdated manual scripts with a real-time tracking web app used in daily college operations.",
//     tech: ["JavaScript", "Node.js", "MongoDB"],
//     links: { demo: "#", github: "#" }
//   }
// ];

// const ExperienceTimeline = () => {
//   const containerRef = useRef(null);
  
//   // Track scroll progress for the vertical line
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <div className="bg-slate-950 py-20 px-4 text-slate-200" ref={containerRef}>
//       <div className="max-w-4xl mx-auto relative">
//         <h2 className="text-3xl font-bold text-center mb-16 text-white">Experience Journey</h2>

//         {/* The Animated Center Line */}
//         <motion.div 
//           style={{ scaleY }}
//           className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-blue-500 to-purple-600 h-full origin-top hidden md:block"
//         />

//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative flex items-center justify-between w-full ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
//               } flex-col`}
//             >
//               {/* Desktop Spacer */}
//               <div className="hidden md:block w-5/12" />

//               {/* Icon / Pivot Point */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 z-10 md:flex">
//                 {exp.icon}
//               </div>

//               {/* Card Content */}
//               <div className="w-full md:w-5/12 bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors backdrop-blur-sm shadow-xl">
//                 <span className="text-blue-400 text-sm font-mono">{exp.date}</span>
//                 <h3 className="text-xl font-bold mt-1 text-white">{exp.title}</h3>
//                 <p className="text-slate-400 text-sm mb-3">{exp.company}</p>
//                 <p className="text-slate-300 text-sm leading-relaxed mb-4">
//                   {exp.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {exp.tech.map((t) => (
//                     <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs text-blue-300 border border-slate-700">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a href={exp.links.github} className="flex items-center gap-1 text-xs hover:text-white transition-colors">
//                     <Github className="w-4 h-4" /> Code
//                   </a>
//                   <a href={exp.links.demo} className="flex items-center gap-1 text-xs hover:text-white transition-colors text-blue-400">
//                     <ExternalLink className="w-4 h-4" /> Live Demo
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;