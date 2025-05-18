import { Box, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import NavItem from "./NavItem";

interface DesktopNavProps {
  activeSection: string;
  navItems: Array<{ id: string; label: string }>;
  onNavItemClick: (sectionId: string) => void;
}

const DesktopNav = ({
  activeSection,
  navItems,
  onNavItemClick,
}: DesktopNavProps) => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          id={item.id}
          label={item.label}
          activeSection={activeSection}
          onClick={onNavItemClick}
        />
      ))}

      <Button
        variant="contained"
        startIcon={<DescriptionIcon />}
        sx={{
          ml: 2,
          bgcolor: "#a3ff00",
          color: "#000000",
          "&:hover": {
            bgcolor: "#84cc16",
          },
        }}
      >
        Resume
      </Button>
    </Box>
  );
};

export default DesktopNav;
