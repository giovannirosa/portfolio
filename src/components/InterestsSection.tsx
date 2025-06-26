"use client";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import TypewriterQuote from "./shared/TypewriterQuote";

const interests = [
  {
    title: "Internet of Things",
    description:
      "My most significant interest is Computing because, in my view, the future will depend on how the various products will interact with the Internet, using the information to have a significant impact on people's daily lives.",
  },
  {
    title: "Augmented Reality",
    description:
      "Another critical area that will develop more and more as technology advances. It should also impact people's routines; it will be key for the big cities of the future.",
  },
  {
    title: "Machine Learning",
    description:
      "Considering the amount of data people generate today, their analysis and processing are becoming increasingly important for commercial and social purposes.",
  },
  {
    title: "Blockchain",
    description:
      "This innovative technology is the next level for secure and resilient contracts with less bureaucracy through a decentralized and more efficient system.",
  },
  {
    title: "Crypto Coins",
    description:
      "It is not clear what the role of these new currencies will be in the future, but their concept is very innovative and helps society not to depend on monetary policies centralized in the figure of a State.",
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
            Greatest Interests
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
            The future is shaped by curiosity. Here are the fields that inspire
            me to build, learn, and innovate.
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
