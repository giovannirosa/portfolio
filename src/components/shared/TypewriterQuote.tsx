import React, { useEffect, useState, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const TypewriterQuote = ({
  children,
  noMarginTop = false,
}: {
  children: ReactNode;
  noMarginTop?: boolean;
}) => {
  const fullText = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join("");

  const [displayedText, setDisplayedText] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [show, fullText]);

  return (
    <motion.div
      style={{ marginTop: noMarginTop ? 0 : "64px" }}
      onViewportEnter={() => setShow(true)}
      onViewportLeave={() => setShow(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          whiteSpace: "normal",
          fontFamily: "Courier New, monospace",
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            fontStyle: "italic",
            color: "text.secondary",
            whiteSpace: "pre-wrap",
            display: "inline",
          }}
        >
          {displayedText}
          {show && (
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: "0.10em",
                marginLeft: "2px",
                backgroundColor: "green",
                animation: "blink-caret 0.75s step-end infinite",
                verticalAlign: "bottom",
                height: "28px",
              }}
            />
          )}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default TypewriterQuote;
