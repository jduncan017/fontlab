import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        background2: "var(--background2)",
        foreground: "var(--foreground)",
        foreground2: "var(--foreground2)",
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
