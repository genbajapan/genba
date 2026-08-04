import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F6F5",
        ink: "#10212B",
        slate: "#5C6B73",
        navy: "#0B2638",
        accent: "#0B7A70",
        line: "#D9E1E2",
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
