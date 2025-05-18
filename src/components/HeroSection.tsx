"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Container, Button, Stack, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";

const matrixCodeRain = Array(20)
  .fill(0)
  .map(() => ({
    position: Math.random() * 100,
    speed: Math.random() * 10 + 5,
    length: Math.floor(Math.random() * 20) + 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      {/* Matrix rain effect in background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          overflow: "hidden",
        }}
      >
        {matrixCodeRain.map((rain, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: `${rain.position}%` }}
            animate={{
              y: ["0vh", "100vh"],
            }}
            transition={{
              duration: rain.speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: i * 0.2,
            }}
            style={{
              position: "absolute",
              color: "#00FF41",
              fontFamily: "monospace",
              fontSize: "1.2rem",
              textShadow: "0 0 8px #00FF41",
              writingMode: "vertical-rl",
              opacity: rain.opacity,
            }}
          >
            {Array(rain.length)
              .fill(0)
              .map((_, i) => (
                <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
              ))}
          </motion.div>
        ))}
      </Box>

      <motion.div style={{ y: backgroundY, position: "absolute", inset: 0 }}>
        <Box
          sx={{
            background:
              "radial-gradient(circle, rgba(0,255,65,0.2) 0%, rgba(0,0,0,0.9) 70%)",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div style={{ y: textY }}>
          <Box
            sx={{
              maxWidth: "48rem",
              mx: "auto",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  color: "#00FF41",
                  fontWeight: 500,
                  mb: 1,
                  fontFamily: "Courier New, monospace",
                }}
              >
                Welcome to the Matrix
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(to right, #00FF41, #07A64B)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Courier New, monospace",
                }}
              >
                Giovanni Rosa
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 3,
                  color: "text.primary",
                  fontFamily: "Courier New, monospace",
                }}
              >
                I know code.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  color: "text.secondary",
                  mb: 4,
                  maxWidth: "42rem",
                  mx: "auto",
                  fontFamily: "Courier New, monospace",
                }}
              >
                There is a difference between knowing the path and walking the
                path. I&apos;m a software engineer specializing in building
                exceptional digital experiences. Take the red pill and I&apos;ll
                show you how deep the rabbit hole goes.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<VisibilityIcon />}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    bgcolor: "#00FF41",
                    color: "#000000",
                    "&:hover": {
                      bgcolor: "#07A64B",
                    },
                    px: 3,
                    py: 1.5,
                  }}
                >
                  Take The Red Pill
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    borderColor: "#00FF41",
                    color: "#00FF41",
                    "&:hover": {
                      borderColor: "#07A64B",
                      bgcolor: "rgba(0, 255, 65, 0.1)",
                    },
                    px: 3,
                    py: 1.5,
                  }}
                >
                  Free Your Mind
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              style={{ marginTop: "2rem" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#00FF41", fontFamily: "Courier New, monospace" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  _
                </motion.span>{" "}
                Follow the white rabbit.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll down indicator, using Box instead of motion.div with sx */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#00FF41",
        }}
      >
        <motion.div
          style={{ opacity }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
