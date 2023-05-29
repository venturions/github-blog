/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#3294F8",
      "base-title": "#E7EDF4",
      "base-subtitle": "#C4D4E3",
      "base-text": "#AFC2D4",
      "base-span": "#7B96B2",
      "base-label": "#3A536B",
      "base-border": "#1C2F41",
      "base-post": "#112131",
      "base-profile": "#0B1B2B",
      "base-background": "#071422",
      "base-input": "#040F1A",
      "header-background": "#0C243C",
      transparent: "transparent",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        profileCard: "0px 2px 28px rgba(0, 0, 0, 0.2)",
      },
      lineHeight: {
        snug: 1.3,
        normal: 1.6,
      },
    },
  },
  plugins: [],
};
