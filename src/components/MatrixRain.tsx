"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";

const svg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <text x="10" y="30" fill="#00FF41" font-family="monospace" font-size="20">10</text>
    <text x="50" y="50" fill="#00FF41" font-family="monospace" font-size="20">01</text>
    <text x="30" y="70" fill="#00FF41" font-family="monospace" font-size="20">01</text>
    <text x="70" y="20" fill="#00FF41" font-family="monospace" font-size="20">10</text>
  </svg>
`);

const MatrixRain = ({ children }: { children: ReactElement[] }) => {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0px 0px", "100px 500px"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `linear-gradient(
          180deg,
          rgba(13,2,8,0.9)   0%,
          rgba(0,0,0,0.95) 100%
        ),
        url("data:image/svg+xml;utf8,${svg}"
      )`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MatrixRain;
