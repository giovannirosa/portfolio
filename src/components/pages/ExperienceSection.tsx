"use client";
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
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import PublicIcon from "@mui/icons-material/Public";
import TypewriterQuote from "../shared/TypewriterQuote";

const experiences = [
  {
    title: "Software Technical Lead",
    company: "GRDS IT Services",
    period: "Dec 2022 - Present",
    description:
      "Leading the design and delivery of two international IoT platforms used for device monitoring and control. Responsible for system architecture, technical direction, and integration of real-time data pipelines using React (Next.js), Node.js, MQTT, and InfluxDB, deployed across AWS and Azure. Platforms integrate cloud-native services including IoT Core, Kinesis, Lambda, Aurora, AppSync, Athena, S3, API Gateway, Cognito, and Amplify.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "MQTT",
      "InfluxDB",
      "AWS",
      "Azure",
      "SST",
      "IoT Core",
      "Kinesis",
      "Lambda",
      "Aurora",
      "AppSync",
      "Athena",
      "S3",
      "API Gateway",
      "Cognito",
      "Amplify",
    ],
    icon: <PublicIcon />,
  },
  {
    title: "Senior Software Engineer",
    company: "CI&T - dynaConnections",
    period: "Aug 2022 - Dec 2022",
    description:
      "Led the modernization of connectMLS, a large-scale real estate platform for U.S. realtors, migrating legacy AngularJS and Java systems to React and Spring Boot. Contributed to architectural improvements, scalability, and long-term maintainability.",
    tags: ["React", "Java", "Spring Boot", "AngularJS", "Real Estate"],
    icon: <CodeIcon />,
  },
  {
    title: "Senior Software Engineer",
    company: "CI&T - Corvalent",
    period: "Jun 2021 - Jul 2022",
    description:
      "Designed and developed CAT-APM, an IoT platform for asset and device management. Worked on frontend and backend components using React and ClearBlade, contributing to scalable device communication and system integration.",
    tags: ["React", "Node.js", "IoT", "ClearBlade"],
    icon: <StorageIcon />,
  },
  {
    title: "Senior Software Engineer",
    company: "CINQ - Schneider Electric",
    period: "May 2021 - Jun 2021",
    description:
      "Developed AI Backoffice, an internal platform to resolve invoice mismatches, built with Django and React and integrated into global enterprise finance systems.",
    tags: ["React", "Python", "Django REST", "Finance"],
    icon: <ComputerIcon />,
  },
  {
    title: "Software Engineer",
    company: "CINQ - SASCAR",
    period: "Jul 2020 - May 2021",
    description:
      "Contributed to the development of SASWeb 2, a fleet management platform supporting national logistics operations, using AngularJS and Java Spring Boot in production environments.",
    tags: ["AngularJS", "Java", "Spring Boot", "Fleet Management"],
    icon: <TerminalIcon />,
  },
  {
    title: "Software Engineer",
    company: "CINQ - COMPAR",
    period: "Jan 2020 - Jul 2020",
    description:
      "Developed the Tudobem health platform using React and React Native, improving digital engagement between patients and healthcare providers.",
    tags: ["React", "React Native", "Material UI", "Healthcare"],
    icon: <DeveloperModeIcon />,
  },
  {
    title: "Software Engineer",
    company: "CINQ - Systecon",
    period: "Dec 2019 - Jan 2020",
    description:
      "Modernized the Opus Suite desktop application into a web-based platform using Vue.js and Vuetify, improving usability for logistics planning and operations.",
    tags: ["Vue.js", "Vuetify", "Modernization"],
    icon: <CodeIcon />,
  },
  {
    title: "Software Engineer",
    company: "CINQ - RCI Bank",
    period: "Oct 2019 - Dec 2019",
    description:
      "Developed a web application for car dealership management using Angular and Material UI, supporting automotive sales and operational workflows.",
    tags: ["Angular", "Material UI", "Automotive"],
    icon: <TerminalIcon />,
  },
  {
    title: "Junior Software Engineer",
    company: "CINQ - Imprint Energy",
    period: "Dec 2018 - Oct 2019",
    description:
      "Built a full stack factory control platform using React and Django REST, supporting production monitoring and automation in energy technology environments.",
    tags: ["React", "Python", "Django REST", "Factory Automation"],
    icon: <StorageIcon />,
  },
  {
    title: "Intern & Junior Developer",
    company: "CINQ - SITA",
    period: "Mar 2015 - Dec 2018",
    description:
      "Maintained and extended Airfare Insight, a Java Swing application used for aviation pricing analysis, integrated with Oracle databases and WebLogic in enterprise environments.",
    tags: ["Java", "Swing", "Oracle", "Weblogic", "Aviation"],
    icon: <ComputerIcon />,
  },
];

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      id="experience"
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
            A progression through systems, scale, and responsibility. Remember,
            there is no spoon.
          </Typography>
        </motion.div>
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            "& .MuiTimelineItem-root": { minHeight: 0 },
            "& .MuiTimelineContent-root": { px: { xs: 2, md: 3 } },
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
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: 0.2 }}
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
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ amount: 0.2 }}
                >
                  <TimelineDot color="primary">{exp.icon}</TimelineDot>
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: { xs: 1, md: 2 } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: 0.2 }}
                  whileHover={{ y: -10 }}
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
                      boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                      },
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
                            transition: "transform 0.6s ease-in-out",
                            "&:hover": {
                              transform: "rotate(360deg)",
                              boxShadow: "0 10px 20px rgba(0, 255, 65, 0.1)",
                            },
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
        <TypewriterQuote>
          &quot;Unfortunately, no one can be told what the Matrix is. You have
          to see it for yourself.&quot; - Morpheus
        </TypewriterQuote>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
