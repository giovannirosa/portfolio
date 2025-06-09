"use client";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FF41", // Matrix green
    },
    secondary: {
      main: "#08BF68", // Darker Matrix green
    },
    background: {
      default: "#000000",
      paper: "#0D0208",
    },
    text: {
      primary: "#00FF41", // Matrix green text
      secondary: "#7DFB81", // Lighter Matrix green
    },
  },
  typography: {
    fontFamily: '"Courier New", "Poppins", monospace',
    h1: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0, // Matrix-style sharp edges
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(rgba(13, 2, 8, 0.8), rgba(10, 10, 10, 0.9))",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(0, 255, 65, 0.3)",
          border: "1px solid",
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
