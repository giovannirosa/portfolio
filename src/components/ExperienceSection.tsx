"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Typography,
  Container,
  Paper,
  Box,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import ComputerIcon from "@mui/icons-material/Computer";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Zion Systems Inc",
    period: "2022 - Present",
    description:
      "Leading the frontend development team in building responsive web applications using React and Next.js. Breaking free from legacy systems and implementing modern state management.",
    tags: ["React", "Next.js", "TypeScript", "Redux"],
    icon: <ComputerIcon />,
  },
  {
    title: "Full Stack Developer",
    company: "Matrix Innovations",
    period: "2019 - 2022",
    description:
      "Developed full-stack applications that bend reality. Collaborated with UX designers to implement responsive designs and ensure accessibility compliance across the digital realm.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icon: <CodeIcon />,
  },
  {
    title: "Junior Web Developer",
    company: "Blue Pill Agency",
    period: "2017 - 2019",
    description:
      "Unplugged from legacy systems and helped clients see the truth of modern web development. Built and maintained client websites using cutting-edge frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    icon: <TerminalIcon />,
  },
  {
    title: "Web Development Intern",
    company: "The Oracle StartUp",
    period: "2017",
    description:
      "Took the red pill and began my journey into the real world of software development. Assisted in developing user interfaces under senior developer supervision.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: <DeveloperModeIcon />,
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Box
      id="experience"
      ref={containerRef}
      sx={{
        py: 10,
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(13, 2, 8, 0.9) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Matrix code rain effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "0px 1000px"],
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            Work Experience
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
            My professional journey in the digital realm. Remember, there is no
            spoon.
          </Typography>
        </motion.div>

        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            "& .MuiTimelineItem-root": {
              minHeight: 0,
            },
            "& .MuiTimelineContent-root": {
              px: { xs: 2, md: 3 },
            },
            "& .MuiTimelineOppositeContent-root": {
              flex: { xs: 0, md: 1 },
              maxWidth: { xs: "30%", md: "none" },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.period}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  display: { xs: isMobile ? "none" : "block", md: "block" },
                }}
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.3,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    {exp.period}
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.3 + 0.1,
                      },
                    },
                  }}
                >
                  <TimelineDot color="primary">{exp.icon}</TimelineDot>
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: { xs: 1, md: 2 } }}>
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.3 + 0.2,
                      },
                    },
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 3 },
                      background: "rgba(13, 2, 8, 0.8)",
                      border: "1px solid",
                      borderColor: "primary.main",
                      backdropFilter: "blur(5px)",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        color: "primary.main",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "secondary.main",
                        fontWeight: "bold",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {exp.company}
                    </Typography>
                    {isMobile && (
                      <Typography
                        variant="body2"
                        sx={{
                          my: 1,
                          color: "text.secondary",
                          fontStyle: "italic",
                          fontFamily: "Courier New, monospace",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        my: 2,
                        color: "text.secondary",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {exp.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {exp.tags.map((tag) => (
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
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
              color: "text.secondary",
              fontFamily: "Courier New, monospace",
            }}
          >
            &quot;I know kung fu.&quot; - Neo
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
