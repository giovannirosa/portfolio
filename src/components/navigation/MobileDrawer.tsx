import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: Array<{ id: string; label: string }>;
  onNavItemClick: (sectionId: string) => void;
}

const MobileDrawer = ({
  open,
  onClose,
  activeSection,
  navItems,
  onNavItemClick,
}: MobileDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
          background: "rgba(0, 0, 0, 0.9)",
          borderLeft: "1px solid rgba(163, 255, 0, 0.2)",
        },
      }}
    >
      <Box sx={{ textAlign: "center", pt: 2, pb: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            color: "#a3ff00",
            mb: 2,
          }}
        >
          Portfolio
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  onNavItemClick(item.id);
                  onClose();
                }}
                sx={{
                  textAlign: "center",
                  color: activeSection === item.id ? "#a3ff00" : "white",
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<DescriptionIcon />}
                sx={{
                  bgcolor: "#a3ff00",
                  color: "#000000",
                  "&:hover": {
                    bgcolor: "#84cc16",
                  },
                }}
              >
                Resume
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
