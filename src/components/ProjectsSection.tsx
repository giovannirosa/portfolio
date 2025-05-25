"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution built with Next.js, including product listings, shopping cart, and secure checkout process with Stripe integration.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    links: {
      github: "https://github.com/johndoe/ecommerce-platform",
      live: "https://ecommerce-platform.demo",
    },
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, user authentication, and kanban board interface for efficient project organization.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    links: {
      github: "https://github.com/johndoe/task-manager",
      live: "https://task-manager.demo",
    },
  },
  {
    title: "Weather Forecast App",
    description:
      "A location-based weather application that provides accurate forecasts using OpenWeatherMap API and geolocation services.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "REST API"],
    links: {
      github: "https://github.com/johndoe/weather-app",
      live: "https://weather-app.demo",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my projects and skills. Built with parallax scrolling effects and modern design principles.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/johndoe/portfolio",
      live: "https://johndoe.dev",
    },
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted parallax effect thresholds to prevent premature disappearing
  const y = useTransform(scrollYProgress, [0.1, 0.5], ["50px", "-50px"]);

  return (
    <Box
      component="section"
      id="projects"
      ref={ref}
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              mb: 2,
              fontFamily: "Courier New, monospace",
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              fontFamily: "Courier New, monospace",
            }}
          >
            &quot;Do you think that&apos;s air you&apos;re breathing now?&quot;
            These projects are a glimpse into what I can build in the digital
            realm.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(13, 2, 8, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: "rgba(0, 255, 65, 0.3)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 20px rgba(0, 255, 65, 0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: "text.secondary",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "rgba(0, 255, 65, 0.1)",
                            color: "primary.main",
                            borderColor: "primary.main",
                            borderWidth: 1,
                            borderStyle: "solid",
                            fontFamily: "Courier New, monospace",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.links.github}
                      target="_blank"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        mr: 1,
                        "&:hover": {
                          bgcolor: "rgba(0, 255, 65, 0.1)",
                        },
                      }}
                      variant="outlined"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.links.live}
                      target="_blank"
                      sx={{
                        bgcolor: "primary.main",
                        color: "black",
                        "&:hover": {
                          bgcolor: "secondary.main",
                        },
                      }}
                      variant="contained"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Decorative parallax elements with adjusted motion */}
        <motion.div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0) 70%)",
            y: useTransform(scrollYProgress, [0.1, 0.5], ["-50px", "50px"]),
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(7,166,75,0.1) 0%, rgba(0,0,0,0) 70%)",
            y,
          }}
        />

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
              color: "text.secondary",
              fontFamily: "Courier New, monospace",
            }}
          >
            &quot;The Matrix is everywhere. It is all around us.&quot; -
            Morpheus
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
