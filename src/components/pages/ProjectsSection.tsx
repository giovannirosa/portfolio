"use client";
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Typography,
  Container,
  Paper,
  Link,
  Grid,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import TypewriterQuote from "../shared/TypewriterQuote";

const projects = [
  {
    title: "Blackjack",
    period: "2015",
    description: `My first app, a blackjack game to develop my Java 8 knowledge. I used Java 8 and JavaFX, which were my first professional technologies at the time.`,
    link: "https://github.com/giovannirosa/blackjack",
  },
  {
    title: "Workflow Manager",
    period: "2016 - 2017",
    description: `I developed a system to assist in upgrading and implementing the international project SITA - Airfare Insight, where the MySQL database is powered by Excel spreadsheets, transforming them into JSON.`,
  },
  {
    title: "Dionysus",
    period: "2017 - 2018",
    description: `I developed this inventory and sales control system for a bar. I used Java 8 and JavaFX, which were my most advanced knowledge at the time, being a desktop application integrated with an API of the EPSON TM-T20 laser printer.`,
  },
  {
    title: "Database Packager",
    period: "2018",
    description: `I developed a system to extract files from an SVN repository, present them in a friendly interface and export them in a compressed form in .zip.`,
  },
  {
    title: "Mercurius",
    period: "2018 - unfinished",
    description: `I started to develop a system for complete control of a trade, including its customers, services, stock, calendar, and cashier for a salon. I used Spring Boot on the backend and Angular 6 on the frontend, a responsive web application that can be accessed on any device.`,
  },
  {
    title: "Matrix Portfolio",
    period: "2025",
    description: `This portfolio is a personal project that showcases my skills and projects in a creative way, inspired by the Matrix universe. It features a unique design with a terminal-like interface, animations, and interactive elements.`,
    link: "https://github.com/giovannirosa/portfolio",
  },
];

const academicHighlights = [
  {
    description: `Implementation of a Superpipeline using VHDL.`,
  },
  {
    description: `Resolution of linear systems using conjugated gradient method optimized and implemented in C.`,
  },
  {
    description: `Construction and testing of the UFPR Informatics Department network using Mininet and Python.`,
  },
  {
    description: `Graph implementation and resolution of the minimum color problem in C.`,
  },
  {
    description: `Algorithm for congestion control of a UDP network in C++.`,
  },
];

const ProjectsSection = () => {
  return (
    <Box
      component="section"
      id="projects"
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
            Personal Projects
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
            A selection of my personal, professional, and academic
            projects—where code meets creativity and real-world impact.
          </Typography>
          <Grid container spacing={4} alignItems="stretch">
            {projects.map((project) => (
              <Grid
                key={project.title}
                size={{
                  xs: 12,
                  md:
                    projects.length % 2 === 1 &&
                    projects[projects.length - 1].title === project.title
                      ? 12
                      : 6,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      background:
                        "linear-gradient(135deg, rgba(13, 2, 8, 0.95) 80%, rgba(0,255,65,0.08) 100%)",
                      border: "2px solid #00FF41",
                      boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                      borderRadius: 3,
                      minWidth: 240,
                      width: "100%",
                      height: "100%",
                      mx: "auto",
                      fontFamily: "Courier New, monospace",
                      position: "relative",
                      overflow: "visible",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "scale(1.03) rotate(-1deg)",
                        boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#00FF41",
                          fontFamily: "Courier New, monospace",
                          letterSpacing: 1,
                          textShadow: "0 0 8px #00FF41, 0 0 2px #00FF41",
                        }}
                      >
                        {project.title}{" "}
                        <span
                          style={{
                            fontWeight: 400,
                            color: "#7affb0",
                            fontSize: "1rem",
                          }}
                        >
                          [{project.period}]
                        </span>
                      </Typography>
                      {project.link && (
                        <Link
                          color="primary"
                          href={project.link}
                          target="_blank"
                          rel="noopener"
                        >
                          <GitHub />
                        </Link>
                      )}
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      {project.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, mb: 6 }}>
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontFamily: "Courier New, monospace",
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Academic Highlights & GitHub
            </Typography>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                background:
                  "linear-gradient(135deg, rgba(13, 2, 8, 0.95) 80%, rgba(0,255,65,0.08) 100%)",
                border: "2px solid #00FF41",
                boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                borderRadius: 3,
                minWidth: 280,
                width: "100%",
                mx: "auto",
                fontFamily: "Courier New, monospace",
                position: "relative",
                overflow: "visible",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.03) rotate(-1deg)",
                  boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                },
              }}
            >
              <Typography variant="body2" sx={{ color: "#00FF41", mb: 2 }}>
                <Link
                  href="https://github.com/giovannirosa"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="#00FF41"
                >
                  github.com/giovannirosa
                </Link>
              </Typography>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {academicHighlights.map((item) => (
                  <li
                    key={item.description}
                    style={{
                      color: "#7affb0",
                      marginBottom: 8,
                      fontFamily: "Courier New, monospace",
                      fontSize: "1rem",
                    }}
                  >
                    {item.description}
                  </li>
                ))}
              </ul>
            </Paper>
          </Box>
        </motion.div>
        <TypewriterQuote noMarginTop>
          &quot;I didn&apos;t come here to tell you how this is going to end. I
          came here to tell you how it&apos;s going to begin.&quot; - Neo
        </TypewriterQuote>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
