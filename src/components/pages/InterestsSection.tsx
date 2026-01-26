"use client";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import TypewriterQuote from "../shared/TypewriterQuote";

const interests = [
  {
    title: "Internet of Things",
    description:
      "A core area of my work and research, focused on how connected devices interact, exchange data, and enforce security, privacy, and reliability in real-world environments.",
  },
  {
    title: "Augmented Reality",
    description:
      "An area of interest for its potential to bridge digital systems and physical environments, particularly in urban, industrial, and context-aware applications.",
  },
  {
    title: "Machine Learning",
    description:
      "Explored as a tool to extract insight and adaptive behavior from large-scale data, especially when combined with IoT, security, and user behavior analysis.",
  },
  {
    title: "Blockchain",
    description:
      "Studied for its applications in trust, decentralization, and verifiable systems, particularly in scenarios requiring transparency, resilience, and reduced reliance on centralized control.",
  },
  {
    title: "Crypto Coins",
    description:
      "An area of interest from a systems and protocol perspective, focusing on consensus mechanisms, incentives, and the security properties of decentralized networks.",
  },
];

const InterestsSection = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Box
      component="section"
      id="interests"
      sx={{ pt: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 2,
              fontFamily: "Courier New, monospace",
            }}
          >
            Areas of Focus & Curiosity
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              mx: "auto",
              mb: 6,
              fontFamily: "Courier New, monospace",
            }}
          >
            Domains that guide my research, experimentation, and long-term
            technical direction.
          </Typography>
        </motion.div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 6, flexWrap: "wrap", mb: 8 }}
        >
          {interests.map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}
              style={{ width: 340, cursor: "pointer", perspective: 1000 }}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              tabIndex={0}
              onFocus={() => setActive(idx)}
              onBlur={() => setActive(null)}
            >
              <Box
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(13, 2, 8, 0.95) 80%, rgba(0,255,65,0.08) 100%)",
                  border: "2px solid #00FF41",
                  boxShadow:
                    active === idx
                      ? "0 0 48px 8px #00FF41CC, 0 2px 32px #000"
                      : "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                  color: active === idx ? "#000" : "#00FF41",
                  fontFamily: "Courier New, monospace",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(.4,2,.3,1)",
                  transform:
                    active === idx ? "rotateY(8deg) scale(1.05)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  textAlign: "center",
                  outline: active === idx ? "2px solid #00FF41" : "none",
                  zIndex: 3,
                }}
              >
                <Chip
                  label={interest.title}
                  sx={{
                    bgcolor: active === idx ? "#000" : "#00FF41",
                    color: active === idx ? "#00FF41" : "#000",
                    fontWeight: "bold",
                    fontFamily: "Courier New, monospace",
                    fontSize: "1.1rem",
                    whiteSpace: "normal", // allow wrapping
                    wordBreak: "break-word", // break long words
                    textAlign: "center", // center text
                    lineHeight: 1.3,
                    mb: 2,
                    px: 2,
                    py: 1,
                    boxShadow: active === idx ? "0 0 16px #00FF41" : "none",
                    border: "2px solid #00FF41",
                    letterSpacing: 1,
                    maxWidth: "100%",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: active === idx ? "#00FF41" : "#7affb0",
                    fontFamily: "Courier New, monospace",
                    fontSize: "1.05rem",
                    mt: 2,
                    opacity: active === idx ? 1 : 0.8,
                    transition: "color 0.3s, opacity 0.3s",
                  }}
                >
                  {interest.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Stack>
        <TypewriterQuote noMarginTop>
          &quot;What is real? How do you define &apos;real&apos;?&quot; -
          Morpheus
        </TypewriterQuote>
      </Container>
    </Box>
  );
};

export default InterestsSection;
