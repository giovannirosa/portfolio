"use client";
import { useChat } from "@ai-sdk/react";
import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

export default function ChatBox() {
  const theme = useTheme();
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    experimental_throttle: 50,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1} // fill the parent’s available height
      width="100%"
      sx={{
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 2,
      }}
    >
      {/* ===== Scrollable messages area ===== */}
      <List
        sx={{
          flex: 1, // <-- this grows
          overflowY: "auto", // <-- only this scrolls
          mb: 2,
          width: "100%",
          px: { xs: 0, sm: 10, md: 20, lg: 40 },
          maxHeight: "calc(100vh - 138px)",
        }}
      >
        {messages.map((m) => (
          <ListItem
            key={m.id}
            sx={{
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                px: 2,
                py: 1,
                bgcolor:
                  m.role === "user"
                    ? theme.palette.primary.light
                    : theme.palette.grey[200],
                maxWidth: "80%",
              }}
            >
              <Typography gutterBottom fontWeight="bold" color="black">
                {m.role === "user" ? "You" : "The Oracle"}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                whiteSpace="pre-wrap"
                color="black"
              >
                {m.content}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>

      {/* ===== Input bar pinned at bottom ===== */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        gap={1}
        width="100%"
        px={{ xs: 1, sm: 10, md: 20, lg: 40 }}
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`,
          py: 1,
        }}
      >
        <TextField
          fullWidth
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me about my portfolio…"
          size="small"
          sx={{
            background: "black",
          }}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </Box>
  );
}
