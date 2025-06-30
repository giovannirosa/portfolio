import { Box, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import NavItem from "./NavItem";
import { AutoAwesome } from "@mui/icons-material";

interface DesktopNavProps {
  activeSection: string;
  navItems: Array<{ id: string; label: string }>;
  onNavItemClick: (sectionId: string) => void;
  setOpen: (open: boolean) => void;
}

const DesktopNav = ({
  activeSection,
  navItems,
  onNavItemClick,
  setOpen,
}: DesktopNavProps) => {
  return (
    <Box sx={{ display: { xs: "none", xl: "flex" } }}>
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
        onClick={() => setOpen(true)}
        startIcon={<AutoAwesome />}
        sx={{
          ml: 2,
        }}
      >
        Oracle
      </Button>

      <Button
        variant="contained"
        onClick={() => window.open("/Resume Giovanni Rosa.pdf", "_blank")}
        startIcon={<DescriptionIcon />}
        sx={{
          ml: 2,
        }}
      >
        Resume
      </Button>
    </Box>
  );
};

export default DesktopNav;
