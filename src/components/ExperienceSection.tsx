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
import TypewriterQuote from "./shared/TypewriterQuote";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "GRDS IT Services",
    period: "Dec 2022 - Present",
    description:
      "Leading the development of two international web applications for IoT device management. One is built with React (Next.js) and Node.js, integrated with MQTT and InfluxDB, deployed on AWS and Azure. The other is built with React and SST (Node.js), integrated with MQTT, IoT Core, Kinesis, Lambda, Aurora, AppSync, Athena, S3, API Gateway, Cognito, and deployed on AWS with Amplify.",
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
    title: "Full Stack Developer",
    company: "CI&T - dynaConnections",
    period: "Aug 2022 - Dec 2022",
    description:
      "Modernized connectMLS, a real estate web app for US realtors. Migrated legacy code from AngularJS/Java to React/Spring Boot and improved system architecture.",
    tags: ["React", "Java", "Spring Boot", "AngularJS", "Real Estate"],
    icon: <CodeIcon />,
  },
  {
    title: "Full Stack Developer",
    company: "CI&T - Corvalent",
    period: "Jun 2021 - Jul 2022",
    description:
      "Developed CAT-APM, a web app to manage IoT devices. Used React on the frontend and ClearBlade (Node.js-based) on the backend.",
    tags: ["React", "Node.js", "IoT", "ClearBlade"],
    icon: <StorageIcon />,
  },
  {
    title: "Full Stack Developer",
    company: "CINQ - Schneider Electric",
    period: "May 2021 - Jun 2021",
    description:
      "Built AI Backoffice, a tool to resolve invoice mismatches using Django and React, integrated into global finance systems.",
    tags: ["React", "Python", "Django REST", "Finance"],
    icon: <ComputerIcon />,
  },
  {
    title: "Full Stack Developer",
    company: "CINQ - SASCAR",
    period: "Jul 2020 - May 2021",
    description:
      "Developed SASWeb 2, a fleet management platform using AngularJS and Java Spring Boot for national logistics solutions.",
    tags: ["AngularJS", "Java", "Spring Boot", "Fleet Management"],
    icon: <TerminalIcon />,
  },
  {
    title: "Frontend Developer",
    company: "CINQ - COMPAR",
    period: "Jan 2020 - Jul 2020",
    description:
      "Built the Tudobem web/mobile health platform using React and React Native for improved patient engagement.",
    tags: ["React", "React Native", "Material UI", "Healthcare"],
    icon: <DeveloperModeIcon />,
  },
  {
    title: "Frontend Developer",
    company: "CINQ - Systecon",
    period: "Dec 2019 - Jan 2020",
    description:
      "Modernized the Opus Suite desktop app into a web app using Vue.js and Vuetify, enhancing usability for logistics planning.",
    tags: ["Vue.js", "Vuetify", "Modernization"],
    icon: <CodeIcon />,
  },
  {
    title: "Frontend Developer",
    company: "CINQ - RCI Bank",
    period: "Oct 2019 - Dec 2019",
    description:
      "Developed a web application for car dealership management using Angular and Material.",
    tags: ["Angular", "Material UI", "Automotive"],
    icon: <TerminalIcon />,
  },
  {
    title: "Full Stack Developer",
    company: "CINQ - Imprint Energy",
    period: "Dec 2018 - Oct 2019",
    description:
      "Created a full stack battery factory control web app using React and Django REST for energy tech solutions.",
    tags: ["React", "Python", "Django REST", "Factory Automation"],
    icon: <StorageIcon />,
  },
  {
    title: "Intern & Junior Developer",
    company: "CINQ - SITA",
    period: "Mar 2015 - Dec 2018",
    description:
      "Maintained and developed Airfare Insight, a Java Swing application for aviation pricing control integrated with Oracle DB.",
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
            My professional journey in the digital realm. Remember, there is no
            spoon.
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
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 10px 20px rgba(0, 255, 65, 0.1)",
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
