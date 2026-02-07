import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, href }) => (
  <motion.div
    whileHover={{ scale: 1.02, translateY: -5 }}
    className="relative group bg-[#111827]/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col items-start gap-4 transition-all hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
  >
    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-white font-semibold text-lg">{value}</p>
    </div>
  </motion.div>
);

export default function ContactSection() {
  const contactData = [
    { icon: Mail, title: "Email", value: "sharifrayan952@gmail.com" },
    { icon: Phone, title: "Phone", value: "+91 8838612520" },
    { icon: MapPin, title: "Location", value: "Vaniyambadi, Tamil Nadu, India" }
  ];

  return (
    <section className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Let's Create Something Amazing Together
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Reach out through any of these platforms and let's create something amazing together
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        {contactData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ContactCard {...item} />
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-6 mt-16"
      >
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-3 rounded-full bg-[#111827] border border-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 transition-all hover:scale-110"
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}