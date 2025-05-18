"use client";
import { motion } from "framer-motion";
import { Typography, Container, Box, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(13, 2, 8, 0.9) 100%)",
        position: "relative",
        overflow: "hidden",
        color: "text.secondary",
        borderTop: "1px solid",
        borderColor: "primary.main",
      }}
    >
      {/* Matrix code rain effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
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
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  mb: 2,
                  fontFamily: "Courier New, monospace",
                }}
              >
                Giovanni Rosa
              </Typography>
              <Typography
                sx={{
                  mb: 3,
                  fontFamily: "Courier New, monospace",
                  color: "text.secondary",
                  maxWidth: "md",
                }}
              >
                A passionate software engineer focused on building beautiful
                interfaces & experiences.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "primary.main",
                  fontFamily: "Courier New, monospace",
                }}
              >
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyleType: "none", p: 0, m: 0 }}>
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Experience",
                  "Projects",
                  "Contact",
                ].map((link) => (
                  <Box component="li" key={link} sx={{ mb: 1 }}>
                    <Typography
                      component="a"
                      href={`#${link.toLowerCase()}`}
                      sx={{
                        color: "text.secondary",
                        textDecoration: "none",
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "primary.main",
                        },
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {link}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "primary.main",
                  fontFamily: "Courier New, monospace",
                }}
              >
                Connect
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <IconButton
                  href="https://github.com/giovannirosa"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                  size="small"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/giovanni-rosa"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                  size="small"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:giovanni_rosa4@hotmail.com"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                  size="small"
                >
                  <EmailIcon />
                </IconButton>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Courier New, monospace",
                  color: "text.secondary",
                }}
              >
                giovanni_rosa4@hotmail.com
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "rgba(0, 255, 65, 0.2)",
            mt: 4,
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontFamily: "Courier New, monospace",
              color: "text.secondary",
            }}
          >
            © {new Date().getFullYear()} Giovanni Rosa. All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontFamily: "Courier New, monospace",
              color: "text.secondary",
            }}
          >
            Designed & Built with ♥ by Giovanni Rosa
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
