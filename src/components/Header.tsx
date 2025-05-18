"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import DesktopNav from "./navigation/DesktopNav";
import MobileDrawer from "./navigation/MobileDrawer";
import { NAV_ITEMS } from "./navigation/constants";
import { useScrollActive } from "./navigation/useScrollActive";

const Header = () => {
  const activeSection = useScrollActive();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        background: trigger ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        boxShadow: trigger ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease",
      }}
      elevation={trigger ? 4 : 0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                fontFamily: '"Poppins", sans-serif',
                color: "#a3ff00",
              }}
            >
              Portfolio
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <DesktopNav
            activeSection={activeSection}
            navItems={NAV_ITEMS}
            onNavItemClick={scrollToSection}
          />

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: "#a3ff00" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        activeSection={activeSection}
        navItems={NAV_ITEMS}
        onNavItemClick={scrollToSection}
      />
    </AppBar>
  );
};

export default Header;
