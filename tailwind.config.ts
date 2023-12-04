import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#4B46EE",
      lightGrey: "#9F9F9F",
      black: "#101010",
      copyGrey: "#4F4F4F",
      white: "#FFFFFF",
    },

    fontSize: {
      smaller: "clamp(0.6113rem, 0.7136rem + -0.0818vw, 0.6944rem)",
      small: "clamp(0.8331rem, 0.8138rem + 0.0825vw, 0.9169rem)",
      copy: "clamp(1rem, 0.9135rem + 0.3692vw, 1.375rem)",
      headline5: "clamp(1.2rem, 1.001rem + 0.8492vw, 2.0625rem)",
      headline4: "clamp(1.44rem, 1.0584rem + 1.6283vw, 3.0938rem)",
      headline3: "clamp(1.7281rem, 1.056rem + 2.8677vw, 4.6406rem)",
      headline2: "clamp(2.0738rem, 0.9459rem + 4.8123vw, 6.9613rem)",
      headline1: "clamp(2.4881rem, 0.6528rem + 7.8308vw, 10.4413rem)",
    },
    fontWeight: {
      light: "300",
      normal: "400",
    },
    transitionDuration: {
      "1000": "200ms",
    },
    transitionTimingFunction: {
      "custom-ease": "cubic-bezier(.51,-0.01,.42,1)",
    },
    transitionProperty: {
      all: "all",
    },
  },
  plugins: [],
};
export default config;
