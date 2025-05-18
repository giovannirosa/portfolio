"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted parallax effect thresholds to prevent premature disappearing
  const opacity = useTransform(
    scrollYProgress,
    [0.9, 0.5, 0.3, 0],
    [0.2, 1, 1, 0.2]
  );
  const y = useTransform(scrollYProgress, [0.8, 0.2], ["-30px", "30px"]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSnackbar({
        open: true,
        message: "Message sent! We'll unplug you soon.",
        severity: "success",
      });
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="section"
      id="contact"
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

      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0) 70%)",
          y,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                mb: 1,
                fontFamily: "Courier New, monospace",
              }}
            >
              Exit Program
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
              The Matrix has you. Follow the white rabbit. Knock, knock, Neo.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    color: "primary.main",
                    fontFamily: "Courier New, monospace",
                  }}
                >
                  Operator Standing By
                </Typography>

                <List>
                  {/* ——— Email Item ——— */}
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      slotProps={{
                        // Props passed to the primary Typography slot
                        primary: {
                          children: "Email",
                          variant: "body1",
                          sx: {
                            fontWeight: "bold",
                            color: "text.primary",
                            fontFamily: "Courier New, monospace",
                          },
                        },
                        // Props passed to the secondary Typography slot
                        secondary: {
                          children: (
                            <Link
                              href="mailto:neo@thematrix.dev"
                              sx={{
                                color: "text.secondary",
                                "&:hover": { color: "primary.main" },
                                fontFamily: "Courier New, monospace",
                              }}
                            >
                              neo@thematrix.dev
                            </Link>
                          ),
                          component: "div", // so it can legally wrap Link/Box
                        },
                      }}
                    />
                  </ListItem>

                  {/* ——— Social Networks Item ——— */}
                  <ListItem disableGutters sx={{ mt: 3 }}>
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText
                      slotProps={{
                        primary: {
                          children: "Social Networks",
                          variant: "body1",
                          sx: {
                            fontWeight: "bold",
                            color: "text.primary",
                            fontFamily: "Courier New, monospace",
                          },
                        },
                        secondary: {
                          children: (
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                mt: 1,
                                fontFamily: "Courier New, monospace",
                              }}
                            >
                              <Link
                                href="#"
                                sx={{
                                  color: "text.secondary",
                                  "&:hover": { color: "primary.main" },
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                }}
                              >
                                <GitHubIcon fontSize="small" /> GitHub
                              </Link>
                              <Link
                                href="#"
                                sx={{
                                  color: "text.secondary",
                                  "&:hover": { color: "primary.main" },
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                }}
                              >
                                <LinkedInIcon fontSize="small" /> LinkedIn
                              </Link>
                              <Link
                                href="#"
                                sx={{
                                  color: "text.secondary",
                                  "&:hover": { color: "primary.main" },
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                }}
                              >
                                <TwitterIcon fontSize="small" /> Twitter
                              </Link>
                            </Box>
                          ),
                          component: "div",
                        },
                      }}
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: "primary.main",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    System Status
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    &quot;I&apos;m trying to free your mind, Neo. But I can only
                    show you the door. You&apos;re the one that has to walk
                    through it.&quot;
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontStyle: "italic",
                      color: "text.secondary",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Currently available for new projects and collaborations.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "rgba(13, 2, 8, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      align="center"
                      gutterBottom
                      sx={{
                        mb: 4,
                        color: "primary.main",
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      Jack In
                    </Typography>

                    <form onSubmit={handleSubmit}>
                      <Box sx={{ mb: 3 }}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          slotProps={{
                            input: {
                              startAdornment: (
                                <PersonIcon
                                  sx={{ mr: 1, color: "primary.main" }}
                                />
                              ),
                            },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(0, 255, 65, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "primary.main",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              fontFamily: "Courier New, monospace",
                            },
                            "& .MuiInputBase-input": {
                              color: "text.primary",
                              fontFamily: "Courier New, monospace",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          slotProps={{
                            input: {
                              startAdornment: (
                                <EmailIcon
                                  sx={{ mr: 1, color: "primary.main" }}
                                />
                              ),
                            },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(0, 255, 65, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "primary.main",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              fontFamily: "Courier New, monospace",
                            },
                            "& .MuiInputBase-input": {
                              color: "text.primary",
                              fontFamily: "Courier New, monospace",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 4 }}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          slotProps={{
                            input: {
                              startAdornment: (
                                <SubjectIcon
                                  sx={{ mr: 1, mt: 1, color: "primary.main" }}
                                />
                              ),
                            },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(0, 255, 65, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "primary.main",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              fontFamily: "Courier New, monospace",
                            },
                            "& .MuiInputBase-input": {
                              color: "text.primary",
                              fontFamily: "Courier New, monospace",
                            },
                          }}
                        />
                      </Box>

                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                        endIcon={<SendIcon />}
                        sx={{
                          bgcolor: "primary.main",
                          color: "black",
                          "&:hover": {
                            bgcolor: "secondary.main",
                          },
                          py: 1.5,
                          fontFamily: "Courier New, monospace",
                          fontWeight: "bold",
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontFamily: "Courier New, monospace",
              }}
            >
              &quot;Remember... all I&apos;m offering is the truth. Nothing
              more.&quot; - Morpheus
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
