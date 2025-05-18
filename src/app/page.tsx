import { Box } from "@mui/material";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box className="matrix-container">
        <Header />
        <Box component="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </LazyMotion>
  );
};

export default Home;
