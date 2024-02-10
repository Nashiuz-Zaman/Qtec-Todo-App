/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
        "2md": "850px",
        "3xl": "1700px",
      },
      spacing: {
        customXl: "16rem",
        customLg: "11rem",
        custom2md: "7.5rem",
        customMd: "6rem",
        customSm: "4.2rem",
        customXsm: "2.8rem",
        custom2xsm: "1.6rem",
      },
      boxShadow: {
        large: "0 10px 60px -5px rgba(0,0,0,0.3)",
        medium: "0 5px 40px -5px rgba(0,0,0,0.25)",
        small: "0 3px 20px -3px rgba(0,0,0,0.2)",
      },
      transitionDuration: {
        default: "150ms",
      },
      colors: {
        primary: "#3498db",
        secondary: "#a8e063",
        primaryDark: "#2a7aaf",
        primaryLight: "#5dade2",
        primaryLightest: "#d6eaf8",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#f5f5f5",
        lightBorder: "#ddd",
        blackLight: "#111",
        darkThemeBg: "#202124",
      },
      fontFamily: {
        default: "'Poppins', sans-serif",
      },
      borderRadius: {
        default: "5px",
        defaultLg: "10px",
      },
    },
  },
  plugins: [],
};
