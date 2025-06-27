// ChatLauncher.tsx
"use client";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChatBox from "@/components/shared/ChatBox";
import { AppBar, Dialog, Toolbar, Typography, Zoom } from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(
  props: React.ComponentProps<typeof Zoom>,
  ref: React.Ref<unknown>
) {
  return (
    <Zoom
      ref={ref}
      style={{ transformOrigin: "50% 50% 0" }}
      timeout={{ enter: 600, exit: 400 }}
      {...props}
    />
  );
});

interface ChatLauncherProps {
  readonly open: boolean;
  readonly setOpen: (open: boolean) => void;
}

export default function ChatLauncher({ open, setOpen }: ChatLauncherProps) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      slots={{ transition: Transition }}
      slotProps={{
        backdrop: {
          // make the gray backdrop fully transparent
          sx: { backgroundColor: "transparent" },
          // or simply: invisible: true
          // invisible: true
        },
        paper: {
          // remove the white panel & shadow
          sx: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
      }}
    >
      <AppBar
        sx={{
          position: "relative",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            The Oracle
          </Typography>
        </Toolbar>
      </AppBar>

      <ChatBox />
    </Dialog>
  );
}
