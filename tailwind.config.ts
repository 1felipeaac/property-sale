// tailwind.config.ts
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-light": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "400% 0%" },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], 
          heading: ["Outfit", "sans-serif"], 
        },
      },
      animation: {
        "border-light": "border-light 4s linear infinite",
      },
    },
  },
  plugins: [],
};
