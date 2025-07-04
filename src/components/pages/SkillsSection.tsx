"use client";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import TypewriterQuote from "../shared/TypewriterQuote";

const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "AngularJS",
      "Angular 2+",
      "Vue.js",
      "React Native",
      "HTML",
      "CSS",
      "JSON",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "SST",
      "Java",
      "C",
      "C++",
      "Spring Boot",
      "Python",
      "Django REST Framework",
      "RESTful APIs",
    ],
  },
  {
    category: "Protocols",
    items: [
      "HTTP",
      "MQTT",
      "UDP",
      "TCP/IP",
      "RTSP",
      "HLS",
      "SSH",
      "SMTP",
      "DNS",
      "IP",
    ],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "Oracle", "DynamoDB"],
  },
  {
    category: "DevOps",
    items: [
      "Git",
      "Gitlab Pipelines",
      "Docker",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
  {
    category: "Tools",
    items: [
      "JIRA",
      "Scrum",
      "SVN",
      "Mininet",
      "VS Code",
      "Chrome DevTools",
      "Postman",
      "Figma",
      "ns-3",
      "XML",
    ],
  },
];

const SkillsSection = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        pt: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
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
            There is no spoon. I&apos;ve mastered bending these technologies to
            my will.
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {skills.map((skillGroup, index) => (
            <Grid key={skillGroup.category} size={{ xs: 12, sm: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                whileTap={{ y: -10 }}
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
                    boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                    mx: 0,
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                    },
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
                          transition: "transform 0.6s ease-in-out",
                          "&:hover": {
                            transform: "rotate(360deg)",
                            boxShadow: "0 10px 20px rgba(0, 255, 65, 0.1)",
                          },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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

            <TypewriterQuote noMarginTop>
              &quot;I know gaming.&quot; - Gio
            </TypewriterQuote>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;
