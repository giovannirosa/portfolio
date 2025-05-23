"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted parallax effect thresholds to prevent premature disappearing
  const imageScale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1]);
  const textX = useTransform(scrollYProgress, [0.1, 0.5], ["-10px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1]);

  return (
    <Box
      component="section"
      id="about"
      ref={ref}
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 6,
              fontFamily: "Courier New, monospace",
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%", width: "100%" }}>
            <motion.div
              style={{
                scale: imageScale,
                opacity: imageOpacity,
                height: "100%",
                width: "100%",
              }}
            >
              <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "primary.main",
                    opacity: 0.2,
                    transform: "rotate(6deg)",
                    borderRadius: 2,
                    zIndex: 0,
                    height: "100%",
                    width: "100%",
                  }}
                />
                <Card
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    background: "rgba(13, 2, 8, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: "primary.main",
                    height: { xs: 450, md: 749 },
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ p: 0, height: "100%", width: "100%" }}>
                    <Image
                      src="/profile.jpg"
                      alt="Developer Portrait"
                      fill
                      style={{
                        borderRadius: "4px",
                        objectFit: "cover",
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div style={{ x: textX, opacity: textOpacity }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: "primary.main",
                  fontFamily: "Courier New, monospace",
                  fontWeight: "bold",
                }}
              >
                Software Engineer & Problem Solver
              </Typography>

              <Box sx={{ color: "text.secondary", mb: 4 }}>
                <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                  Hello! I&apos;m Neo, a passionate software engineer with a
                  background in building scalable web applications. My journey
                  in coding started when I discovered there was no spoon, and
                  I&apos;ve been bending the rules of the digital world ever
                  since.
                </Typography>
                <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                  My main focus these days is building accessible, inclusive
                  products and digital experiences at{" "}
                  <span style={{ color: "#00FF41" }}>Zion Systems</span> for a
                  variety of clients.
                </Typography>
                <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                  I also recently launched a course that covers everything you
                  need to build a web app with the MERN stack and escape the
                  Matrix.
                </Typography>
                <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                  When I&apos;m not at the computer, I&apos;m usually practicing
                  kung fu, dodging agents, or exploring glitches in the system.
                </Typography>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: "secondary.main",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                  }}
                >
                  Education & Training
                </Typography>
                <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
                  <Box
                    component="li"
                    sx={{
                      color: "text.secondary",
                      mb: 1,
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    B.S. in Computer Science, University of Technology
                    (2015-2019)
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      color: "text.secondary",
                      mb: 1,
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Full Stack Web Development Bootcamp, Code Academy (2020)
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Martial Arts Training with Morpheus, The Nebuchadnezzar
                    (Ongoing)
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              fontFamily: "Courier New, monospace",
            }}
          >
            &quot;There is a difference between knowing the path and walking the
            path.&quot; - Morpheus
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
