"use client";
import { motion } from "framer-motion";
import { Box, Container, Typography, Paper } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MatrixProgressBar from "./MatrixProgressBar";

const languages = [
  { name: "Portuguese", level: "Native", value: 100 },
  { name: "English", level: "Proficient (C2)", value: 100 },
  { name: "Spanish", level: "Intermediate (B1)", value: 50 },
  { name: "French", level: "Beginner (A1)", value: 10 },
  { name: "Italian", level: "Beginner (A1)", value: 10 },
];

const LanguageSection = () => {
  return (
    <Box
      component="section"
      id="languages"
      sx={{ pt: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
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
            Languages
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              mb: 6,
              fontFamily: "Courier New, monospace",
            }}
          >
            Decoding the world, one language at a time. Welcome to my linguistic
            matrix.
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            pb: 6,
          }}
        >
          {languages.map((lang) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 0 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 50,
                bounce: 1,
              }}
              viewport={{ amount: 0.4 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              key={lang.name}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, md: 3 },
                  background:
                    "linear-gradient(135deg, rgba(13, 2, 8, 0.95) 80%, rgba(0,255,65,0.08) 100%)",
                  border: "2px solid #00FF41",
                  boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                  borderRadius: 3,
                  minWidth: 280,
                  maxWidth: 400,
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  position: "relative",
                  overflow: "visible",
                  "::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: -18,
                    left: 24,
                    width: 60,
                    height: 12,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #00FF41 60%, #003f1a 100%)",
                    boxShadow: "0 0 8px 2px #00FF41AA",
                    border: "1.5px solid #00FF41",
                    zIndex: 2,
                  },
                  "::after": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    bottom: 8,
                    right: 16,
                    width: 32,
                    height: 4,
                    borderRadius: 1,
                    background:
                      "linear-gradient(90deg, #00FF41 40%, #003f1a 100%)",
                    opacity: 0.5,
                    zIndex: 2,
                  },
                  fontFamily: "Courier New, monospace",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.03) rotate(-1deg)",
                    boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                  },
                }}
              >
                <PublicIcon color="primary" sx={{ mr: 2, mt: 1 }} />
                <Box width="100%">
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00FF41",
                      fontFamily: "Courier New, monospace",
                      letterSpacing: 1,
                      textShadow: "0 0 8px #00FF41, 0 0 2px #00FF41",
                    }}
                  >
                    {lang.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#00FF41",
                      fontFamily: "Courier New, monospace",
                      opacity: 0.8,
                    }}
                  >
                    {lang.level}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <MatrixProgressBar
                      value={lang.value}
                      variant="determinate"
                    />
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default LanguageSection;
