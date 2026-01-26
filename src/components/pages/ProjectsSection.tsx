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
    description: `Early learning project developed to explore Java 8 and JavaFX concepts, focusing on object-oriented design and desktop application development.`,
    link: "https://github.com/giovannirosa/blackjack",
  },
  {
    title: "Workflow Manager",
    period: "2016 - 2017",
    description: `Internal tooling developed to support data migration and upgrades for the SITA Airfare Insight project, transforming Excel-based workflows into structured JSON data backed by MySQL.`,
  },
  {
    title: "Dionysus",
    period: "2017 - 2018",
    description: `Desktop inventory and sales management system developed for a small business, built with Java 8 and JavaFX and integrated with EPSON TM-T20 fiscal printer APIs.`,
  },
  {
    title: "Database Packager",
    period: "2018",
    description: `Utility tool designed to extract, organize, and package selected files from SVN repositories, providing a user-friendly interface and compressed export for deployment workflows.`,
  },
  {
    title: "Mercurius",
    period: "2018",
    description: `Experimental web platform prototype designed to manage customers, services, inventory, scheduling, and payments for small businesses, built with Spring Boot and Angular. Development was intentionally discontinued as a learning-focused architectural exercise.`,
  },
  {
    title: "Matrix Portfolio",
    period: "2025",
    description: `Personal technical showcase built to explore advanced UI animation, interaction design, and narrative-driven presentation using React, Framer Motion, and a Matrix-inspired visual language.`,
    link: "https://github.com/giovannirosa/portfolio",
  },
];

const academicHighlights = [
  {
    description: `Design and implementation of a superpipelined processor architecture using VHDL.`,
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
    description: `Design and implementation of a custom UDP congestion control algorithm in C++.`,
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
            Selected Projects & Technical Experiments
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
            A selection of technical experiments and systems developed across
            different stages of my engineering career.
          </Typography>
          <Grid container spacing={4} alignItems="stretch">
            {projects.map((project) => (
              <Grid
                key={project.title}
                size={{
                  xs: 12,
                  md:
                    projects.length % 2 === 1 &&
                    projects.at(-1)?.title === project.title
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
              Academic & Low-Level Systems Highlights
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
