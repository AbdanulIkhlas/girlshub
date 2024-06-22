/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      // screens: {
      //   hp: "360px",
      // },
      colors: {
        bigText: "#282C4B",
        textColor: "#747582",
        borderPink50: "#FF698D",
      },
      boxShadow: {
        firstShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        photoShadow: "0 4px 16px 0 rgba(67, 67, 67, 0.16);",
        cardBeforeHover:"-40px 100px 70px 0 rgba(121, 121, 121, 0.05), 40px 0 70px 0 rgba(121, 121, 121, 0.05)",
        cardAfterHover: "0 4px 8px 0 rgba(67, 67, 67, 0.28)",
        miniCard:
          "0 3px 2px 0 rgba(0, 0, 0, 0.02), 0 7px 5px 0 rgba(0, 0, 0, 0.03), 0 13px 10px 0 rgba(0, 0, 0, 0.04), 0 22px 18px 0 rgba(0, 0, 0, 0.04), 0 42px 33px 0 rgba(0, 0, 0, 0.05), 0 100px 80px 0 rgba(0, 0, 0, 0.07)",
      },
      backgroundImage: {
        "gradient-to-right": "linear-gradient(to right, #FF698D, #FB3F6C)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      // borderRadius: {
      //   customRounded: "52% 48% 48% 52% / 50% 54% 46% 50% ",
      // },
      // width: {
      //   round: "calc(100% - 160px)",
      // },
      // aspectRatio: {
      //   "9/16": "9 / 16",
      // },
    },
  },
  plugins: [],
};
