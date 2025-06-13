"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import TypewriterQuote from "./shared/TypewriterQuote";

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/d130e097a44e9510594f7400977741b2";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _template: "table",
          _subject: "Portfolio Message",
        }),
      });

      const data = await response.json();

      console.log({ response, data });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent! We'll unplug you soon.",
          severity: "success",
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Formsubmit failed");
      }
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        py: { xs: 8, md: 10 },
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
            The Matrix has you. Follow the white rabbit. Knock, knock, Gio.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
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
                    primary="Email"
                    secondary={
                      <Link
                        href="mailto:giovanni_rosa4@hotmail.com"
                        sx={{
                          color: "text.secondary",
                          "&:hover": { color: "primary.main" },
                          fontFamily: "Courier New, monospace",
                        }}
                      >
                        giovanni_rosa4@hotmail.com
                      </Link>
                    }
                    slotProps={{
                      // what used to be primaryTypographyProps
                      primary: {
                        variant: "body1",
                        sx: {
                          fontWeight: "bold",
                          color: "text.primary",
                          fontFamily: "Courier New, monospace",
                        },
                      },
                      // what used to be secondaryTypographyProps
                      secondary: {
                        component: "div", // so it can legally wrap our Link
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
                    primary="Social Networks"
                    secondary={
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          mt: 1,
                          fontFamily: "Courier New, monospace",
                        }}
                      >
                        <Link
                          href="https://github.com/giovannirosa"
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
                          href="https://www.linkedin.com/in/giovanni-rosa"
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
                      </Box>
                    }
                    slotProps={{
                      primary: {
                        variant: "body1",
                        sx: {
                          fontWeight: "bold",
                          color: "text.primary",
                          fontFamily: "Courier New, monospace",
                        },
                      },
                      secondary: {
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

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
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

                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />

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

        <TypewriterQuote>
          &quot;Remember... all I&apos;m offering is the truth. Nothing
          more.&quot; - Morpheus
        </TypewriterQuote>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={10_000}
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
