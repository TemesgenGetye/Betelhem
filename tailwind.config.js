/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeInUp 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
