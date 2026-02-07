import ExperienceCard from "./components/ExperienceCard";
import GradientTextHero from "./components/GradientText";
import HeroSection from "./components/HeroSection";
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
  return (
    <div className="min-h-screen text-white selection:bg-white/20 bg-[#020617]">
      <Navbar />
      
      <SpaceBackground>
        <HeroSection />
      </SpaceBackground>

      <main className="w-full mx-auto">
        {/* ABOUT ME SECTION */}
        <section id="about-me" className="scroll-mt-20">
          <AboutMe />
        </section>

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        {/* WORK SECTION */}
        <section id="work" className="scroll-mt-20">
          <ExperienceTimeline />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-20">
          <SkillsHeader
            text1={"Skills & Expertise"}
            text2={"A comprehensive showcase of my technical abilities and expertise"}
          />
          <SkillsOrbit />
        </section>

        {/* EDUCATION (Optional: keeping it outside the main nav tabs) */}
        <section className="py-20">
          <SkillsHeader
            text1={"Education"}
            text2={"My academic background that has provided the foundation for my professional journey"}
          />
          <EducationCard />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>

        <SpaceBackground>
          <Footer />
        </SpaceBackground>
      </main>
    </div>
  );
};

export default App;