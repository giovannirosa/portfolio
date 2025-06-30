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
import { AutoAwesome } from "@mui/icons-material";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: Array<{ id: string; label: string }>;
  onNavItemClick: (sectionId: string) => void;
  setOpen: (open: boolean) => void;
}

const MobileDrawer = ({
  open,
  onClose,
  activeSection,
  navItems,
  onNavItemClick,
  setOpen,
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
          borderLeft: ({ palette }) => `1px solid ${palette.primary.main}`,
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
            mb: 2,
          }}
        >
          Giovanni Rosa
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
                  color: ({ palette }) =>
                    activeSection === item.id ? palette.primary.main : "white",
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: activeSection === item.id ? "bold" : 400,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
                startIcon={<AutoAwesome />}
              >
                Oracle
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  window.open("/Resume Giovanni Rosa.pdf", "_blank")
                }
                startIcon={<DescriptionIcon />}
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
