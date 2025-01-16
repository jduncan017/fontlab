import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        background2: "var(--background2)",
        background3: "var(--background3)",
        foreground: "var(--foreground)",
        foreground2: "var(--foreground2)",
        foreground3: "var(--foreground3)",
        P1: "#03C2F4",
        P2: "#00A7D3",
        P3: "#007392",
        P4: "#003B4B",
        N1: "#FFFFFF",
        N2: "#F7FFF9",
        N3: "#F1F9F3",
        N4: "#E4EDE6",
        G1: "#EAE9E6",
        G2: "#B4B1AD",
        G3: "#5E5C5A",
        G4: "#2E2D2B",
        S11: "#4CFF48",
        S12: "#2FD62C",
        S13: "#1C9A19",
        S14: "#0E560C",
        S21: "#FF32B9",
        S22: "#D11A93",
        S23: "#901767",
        S24: "#4F0937",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
      boxShadow: {
        themeBase: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
} satisfies Config;
