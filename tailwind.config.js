export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      /*default-320px*/
      "phone-sm": "375px",
      "phone-md": "412px",
      sm: "640px",
      md: "768px",
      tablet: "820px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
