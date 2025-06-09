import { Button } from "@mui/material";
import { motion } from "framer-motion";

interface NavItemProps {
  id: string;
  label: string;
  activeSection: string;
  onClick: (sectionId: string) => void;
}

const NavItem = ({ id, label, activeSection, onClick }: NavItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={() => onClick(id)}
        sx={({ palette }) => ({
          mx: 1,
          color: activeSection === id ? palette.primary.main : "white",
          "&:hover": {
            color: palette.primary.main,
          },
          position: "relative",
          "&::after":
            activeSection === id
              ? {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  bgcolor: palette.primary.main,
                }
              : {},
        })}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default NavItem;
