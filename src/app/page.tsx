"use client";
import { Box, GlobalStyles } from "@mui/material";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/pages/HeroSection";
import AboutSection from "@/components/pages/AboutSection";
import SkillsSection from "@/components/pages/SkillsSection";
import ExperienceSection from "@/components/pages/ExperienceSection";
import LanguageSection from "@/components/pages/LanguageSection";
import ProjectsSection from "@/components/pages/ProjectsSection";
import ContactSection from "@/components/pages/ContactSection";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/shared/MatrixRain";
import CertificationsSection from "@/components/pages/CertificationsSection";
import PapersSection from "@/components/pages/PapersSection";
import InterestsSection from "@/components/pages/InterestsSection";
import { useState } from "react";
import ChatLauncher from "@/components/shared/ChatLauncher";

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <GlobalStyles
        styles={{
          html: {
            overflowY: chatOpen ? "hidden" : "auto",
          },
        }}
      />
      <Box className="matrix-container">
        <Header chatOpen={chatOpen} />
        <Box component="main">
          <MatrixRain>
            <ChatLauncher open={chatOpen} setOpen={setChatOpen} />
            <Box visibility={chatOpen ? "hidden" : "visible"}>
              <HeroSection setOpen={setChatOpen} />
              <AboutSection />
              <SkillsSection />
              <CertificationsSection />
              <PapersSection />
              <ExperienceSection />
              <LanguageSection />
              <ProjectsSection />
              <InterestsSection />
              <ContactSection />
            </Box>
          </MatrixRain>
        </Box>
        <Footer />
      </Box>
    </LazyMotion>
  );
};

export default Home;
