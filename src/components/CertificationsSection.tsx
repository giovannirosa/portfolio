"use client";
import { motion, Variants } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import TypewriterQuote from "./shared/TypewriterQuote";

const certifications = [
  {
    title: "Voxy Proficiency Achievement Certificate - Low Advanced",
    issuer: "Voxy",
    year: "2022",
    credential:
      "https://app.voxy.com/certificates/proficiency-test/62fa4cfad8f6ea11d511fdba/",
  },
  {
    title: "SBSeg2021 Presentation Certification",
    issuer: "Sociedade Brasileira de Computação - SBC",
    year: "2021",
    credential:
      "https://drive.google.com/file/d/1X3tQaurJ4BP_KecyMIXGyoaowxDvLc6H/view?usp=sharing",
  },
  {
    title: "Secure Programming Foundation",
    issuer: "IDESP - Instituto Daryus de Ensino Superior Paulista",
    year: "2021",
    credential:
      "https://drive.google.com/file/d/1OKhCqNy7N6HaVxupMWsKX1wcVH0IZ96Y/view?usp=sharing",
  },
  {
    title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
    issuer: "Qwiklabs",
    year: "2020",
    credential:
      "https://www.cloudskillsboost.google/public_profiles/993ebc91-a5b4-49eb-8e38-751c12eaae42/badges/387515",
  },
  {
    title: "Essential Google Cloud Infrastructure: Core Services",
    issuer: "Coursera",
    year: "2020",
    credential: "http://coursera.org/verify/S6L94DX656QJ",
  },
  {
    title: "Essential Google Cloud Infrastructure: Foundation",
    issuer: "Coursera",
    year: "2020",
    credential: "http://coursera.org/verify/QNFC8W32982C",
  },
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    issuer: "Coursera",
    year: "2020",
    credential: "http://coursera.org/verify/HCVW7UF5PYBY",
  },
  {
    title: "Certificado Semana OmniStack 11",
    issuer: "Rocketseat",
    year: "2020",
    credential:
      "https://drive.google.com/file/d/1S3yYTNDjy7xKFDAE1V_w-m2RgoMqO6r4/view?usp=sharing",
  },
  {
    title: "R Programming A-Z™: R For Data Science With Real Exercises!",
    issuer: "Udemy",
    year: "2019",
    credential: "https://www.udemy.com/certificate/UC-GX6YSA4Y/",
  },
  {
    title: "Complete Java Masterclass",
    issuer: "Udemy",
    year: "2018",
    credential: "https://www.udemy.com/certificate/UC-2CMM5BC1/",
  },
  {
    title: "Database Design Introduction",
    issuer: "Udemy",
    year: "2018",
    credential: "https://www.udemy.com/certificate/UC-2TUZE9C4/",
  },
  {
    title: "Oracle Certified Professional Java SE 8 Programmer II",
    issuer: "Oracle",
    year: "2017",
    credential:
      "https://www.credly.com/badges/30eebda1-ba5b-4ccd-8bb5-055b84f0650e/linked_in",
  },
  {
    title: "Oracle Certified Associate Java SE 8 Programmer I",
    issuer: "Oracle",
    year: "2016",
    credential:
      "https://www.credly.com/badges/0e5eec63-64c8-4982-9708-942ed294e89d/linked_in_profile",
  },
  {
    title: "Test of English as a Foreign Language (TOEFL)",
    issuer: "ETS",
    year: "2016 - grade 580/677",
  },
  {
    title: "Test of English for International Communication (TOEIC)",
    issuer: "ETS",
    year: "2014 - grade 975/990",
  },
];

const paperContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren", // Animate paper first, then stagger children
      staggerChildren: 0.08, // Stagger delay for each certification item
    },
  },
};

const itemVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100, // Alternating start position: left (-100px) or right (100px)
  }),
  visible: {
    opacity: 1,
    x: 0, // Animate to natural position (0px offset)
    transition: {
      type: "tween",
      duration: 1, // Slightly faster for individual lines
      ease: "easeOut",
    },
  },
};

const CertificationsSection = () => (
  <Box
    component="section"
    id="certifications"
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
          Certifications
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "text.secondary",
            mx: "auto",
            mb: 6,
            fontFamily: "Courier New, monospace",
          }}
        >
          Unlocking achievements in the Matrix. Each certification is a new key
          to the digital world.
        </Typography>
        <motion.div
          variants={paperContainerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              background: "rgba(13, 2, 8, 0.8)",
              border: "1px solid",
              borderColor: "primary.main",
              backdropFilter: "blur(5px)",
              minWidth: 280,
              width: "100%",
              mb: 2,
              fontFamily: "Courier New, monospace",
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                custom={index} // Pass index for alternating animation
                style={{ overflow: "hidden" }} // Crucial to hide the animating overflow
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="space-between"
                  sx={{
                    mb: 2,
                    "&:last-child": { mb: 0 },
                  }}
                >
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography sx={{ color: "#00FF41", fontWeight: "bold" }}>
                      {cert.title}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: cert.credential ? 6 : 12, md: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {cert.issuer ? `${cert.issuer}, ` : ""}
                      {cert.year}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, md: 2 }}>
                    {cert.credential ? (
                      <Typography
                        variant="body2"
                        textAlign="right"
                        sx={{
                          color: "primary.main",
                          textDecoration: "underline",
                          mt: 0.5,
                        }}
                      >
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          View Credential
                        </a>
                      </Typography>
                    ) : (
                      <Box />
                    )}
                  </Grid>
                  {index < certifications.length - 1 && (
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "primary.main",
                        my: 1,
                      }}
                    />
                  )}
                </Grid>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
        <TypewriterQuote>
          &quot;The Matrix is everywhere. It is all around us. Even now, in this
          very room.&quot; - Morpheus
        </TypewriterQuote>
      </motion.div>
    </Container>
  </Box>
);

export default CertificationsSection;
