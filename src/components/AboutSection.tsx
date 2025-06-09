"use client";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import TypewriterQuote from "./shared/TypewriterQuote";

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 5, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
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
              mb: 3,
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
                height: "100%",
                width: "100%",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  color: "primary.main",
                  fontFamily: "Courier New, monospace",
                  fontWeight: "bold",
                }}
              >
                Computer Scientist & <br />
                Full Stack Software Engineer
              </Typography>

              <Box sx={{ color: "text.secondary", mb: 2 }}>
                <Typography
                  sx={{ fontFamily: "Courier New, monospace" }}
                  gutterBottom
                >
                  Hi! I&apos;m Gio, a passionate software engineer from Brazil
                  with over 9 years of experience designing and developing
                  modern, scalable web applications. My journey began with a
                  deep curiosity about how systems work and grew into a career
                  focused on creating smart, secure, and connected digital
                  experiences.
                </Typography>
                <Typography
                  sx={{ fontFamily: "Courier New, monospace" }}
                  gutterBottom
                >
                  With a strong academic background—holding both a
                  Bachelor&apos;s and a Master&apos;s degree in Computer Science
                  from UFPR—my expertise lies in crafting full stack solutions
                  using React, Node.js, Java, Python, and a range of modern
                  frameworks. I&apos;ve contributed to international and
                  national projects across various industries, including
                  aviation, healthcare, IoT, finance, and real estate, working
                  with clients such as SITA, Schneider, Corvalent, and RCI Bank.
                </Typography>
                <Typography
                  sx={{ fontFamily: "Courier New, monospace" }}
                  gutterBottom
                >
                  Today, I run{" "}
                  <span style={{ color: "#00FF41" }}>GRDS IT Services</span>,
                  where I build web platforms that connect to IoT devices,
                  manage real-time data via MQTT, IoT Core, Aurora, and deploy
                  cloud-native solutions on AWS and Azure.
                </Typography>
                <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                  When I&apos;m not writing code or solving architecture
                  puzzles, I&apos;m exploring my interests in IoT, machine
                  learning, blockchain, and augmented reality—or just enjoying
                  the latest breakthroughs in tech. Oh, and I also enjoy a
                  little gaming on the side—keeps me sharp!
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    color: "secondary.main",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                  }}
                >
                  Academic Education
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
                    Bachelor in Computer Science, University of Paraná (UFPR)
                    2014-2019
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      color: "text.secondary",
                      mb: 1,
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Master in Networks and Distributed Systems at NR2 -
                    University of Paraná (UFPR) - 2020-2023
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <TypewriterQuote>
          &quot;There is a difference between knowing the path and walking the
          path.&quot; - Morpheus
        </TypewriterQuote>
      </Container>
    </Box>
  );
};

export default AboutSection;
