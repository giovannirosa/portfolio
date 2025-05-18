"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "GraphQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "CI/CD", "AWS", "Netlify", "Vercel"],
  },
  {
    category: "Tools",
    items: ["VS Code", "Figma", "Jira", "Postman", "Chrome DevTools"],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted parallax effect thresholds to prevent premature disappearing
  // Scale increases from 0.85 to 1 as we scroll through the section
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.85, 1]);
  // Opacity increases from 0.2 to 1 as we scroll through the section
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0.2, 1]);

  return (
    <Box
      component="section"
      id="skills"
      ref={ref}
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg, rgba(13, 2, 8, 0.9) 0%, rgba(0,0,0,0.95) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Matrix code effect for background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 500px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><text x="10" y="30" fill="%2300FF41" font-family="monospace" font-size="20">10</text><text x="50" y="50" fill="%2300FF41" font-family="monospace" font-size="20">01</text><text x="30" y="70" fill="%2300FF41" font-family="monospace" font-size="20">01</text><text x="70" y="20" fill="%2300FF41" font-family="monospace" font-size="20">10</text></svg>')`,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div style={{ scale, opacity }}>
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
              My Skills
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
              There is no spoon. I&apos;ve mastered bending these technologies
              to my will.
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="stretch">
            {skills.map((skillGroup, index) => (
              <Grid key={skillGroup.category} size={{ xs: 12, sm: 6, lg: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
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
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: "primary.main",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {skillGroup.category}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skillGroup.items.map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            bgcolor: "rgba(0, 255, 65, 0.1)",
                            color: "primary.main",
                            borderColor: "primary.main",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderRadius: "16px",
                            px: 1.5,
                            py: 0.5,
                            display: "inline-block",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            mb: 1,
                            fontFamily: "Courier New, monospace",
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                background: "linear-gradient(to right, #00FF41, #07A64B)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Courier New, monospace",
                fontWeight: "bold",
              }}
            >
              Always Learning
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
                fontFamily: "Courier New, monospace",
              }}
            >
              &quot;I know kung fu.&quot; - The Matrix
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;
