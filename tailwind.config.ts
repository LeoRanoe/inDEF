import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0D1B2A",
        "surface": "#061423",
        "surface-low": "#0F1C2C",
        "surface-high": "#1E2B3B",
        "steel": "#1A5276",
        "bright-blue": "#2E86C1",
        "gold": "#B8860B",
        "teal": "#148F77",
        "muted": "#8395A7",
        "on-surface": "#D6E4F9",
        "on-surface-dim": "#9EAFC6",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headline: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        label: ["var(--font-barlow)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        md: "0px",
        sm: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
