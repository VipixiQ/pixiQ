import type { Config } from "tailwindcss"

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
        // PixIQ Brand Colors
        pixiq: {
          primary: "#2c4d98",
          secondary: "#1698d5",
          black: "#000000",
          gray: "#6f6f6e",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-sen)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Brand gradient: left to right from secondary to primary
        "pixiq-gradient": "linear-gradient(to right, #1698d5, #2c4d98)",
        "pixiq-gradient-reverse": "linear-gradient(to left, #1698d5, #2c4d98)",
        "pixiq-gradient-radial": "radial-gradient(circle, #1698d5, #2c4d98)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
}

export default config
