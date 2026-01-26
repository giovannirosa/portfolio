"use client";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";
import TypewriterQuote from "../shared/TypewriterQuote";
import { School } from "@mui/icons-material";

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        pt: { xs: 8, md: 10 },
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
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  background: "rgba(13, 2, 8, 0.8)",
                  border: "1px solid",
                  borderColor: "primary.main",
                  backdropFilter: "blur(5px)",
                  height: "100%",
                  mx: 0,
                  boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                  "&:hover": {
                    boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                  },
                }}
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
                  Software Technical Lead | IoT & Distributed Systems Specialist
                </Typography>

                <Box sx={{ color: "text.secondary", mb: 2 }}>
                  <Typography
                    sx={{ fontFamily: "Courier New, monospace" }}
                    gutterBottom
                  >
                    Hi, I&apos;m Gio, a software technical lead from Brazil with
                    over 9 years of experience designing and delivering scalable
                    software platforms. My work focuses on building production
                    systems where architecture, reliability, and long-term
                    maintainability matter.
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Courier New, monospace" }}
                    gutterBottom
                  >
                    I hold both a Bachelor&apos;s and a Master&apos;s degree in
                    Computer Science from UFPR, with academic and professional
                    focus on distributed systems and networked environments. I
                    have designed and delivered full stack and backend solutions
                    using React, Node.js, Java, and Python for international and
                    national projects across aviation, healthcare, industrial
                    IoT, finance, and real estate, working with clients such as
                    SITA, Schneider, Corvalent, and RCI Bank.
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Courier New, monospace" }}
                    gutterBottom
                  >
                    Today, I operate through{" "}
                    <span style={{ color: "#00FF41" }}>GRDS IT Services</span>,
                    where I lead the design and development of IoT platforms
                    that integrate real-time device data, messaging protocols,
                    and cloud-native infrastructure. My work includes defining
                    system architecture and deploying scalable solutions across
                    AWS and Azure.
                  </Typography>
                  <Typography sx={{ fontFamily: "Courier New, monospace" }}>
                    Beyond day-to-day development and architecture work, I stay
                    actively engaged with emerging areas such as IoT security,
                    machine learning integration, blockchain-based systems, and
                    augmented reality, continuously exploring how these
                    technologies can be applied to real-world platforms.
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <School />
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
                  </Stack>
                  <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
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
                  </Box>
                </Box>
              </Paper>
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
