import ExperienceCard from "./components/ExperienceCard";
import GradientTextHero from "./components/GradientText";
import HeroSection from "./components/HeroSection";
import GlowingBorderProfile from "./components/LightningProfile";
import LightningProfile from "./components/LightningProfile";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import SpaceBackground from "./components/SpaceBackground";
import SkillsOrbit from "./pages/SkillsOrbit";
import SkillsHeader from "./components/SkillsHeader";
import EducationCard from "./components/EducationCard";
import ContactSection from "./components/ContactCard";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline";

const App = () => {
  const experiences = [
    { id: 1, color: "bg-blue-600", logo: "/path-to-logo1.png" },
    { id: 2, color: "bg-emerald-500", logo: "/path-to-logo2.png" },
    { id: 3, color: "bg-blue-400", logo: "/path-to-logo3.png" },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-white/20">
      <Navbar />
      <SpaceBackground>
        <HeroSection />
      </SpaceBackground>
      {/* <GlowingBorderProfile src="klo.jpeg"/> */}
      {/* <LightningProfile src="klo.jpeg" /> */}
      <main className="w-full mx-auto  bg-[#020617]">
        <AboutMe />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
        {/* <GradientTextHero /> */}
        <ExperienceTimeline />
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div> */}

        <SkillsHeader
          text1={"Skills & Expertise"}
          text2={
            "A comprehensive showcase of my technical abilities and expertise"
          }
        />

        <SkillsOrbit />

        <SkillsHeader
          text1={"Education"}
          text2={
            "My academic background that has provided the foundation for my professional journey"
          }
        />
        <EducationCard />

        <ContactSection />
        <SpaceBackground>
        <Footer />
        </SpaceBackground>
      </main>
    </div>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SkillsOrbit from './pages/SkillsOrbit'
// import PortfolioSection from './pages/PortfolioSection'

// function App() {

//   return (
//     <>
//     <PortfolioSection />
//       {/* <SkillsOrbit /> */}
//     </>
//   )
// }

// export default App
