export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      /*default-320px*/
      "phone-sm": "360px",
      "phone-md": "412px",
      "phone-lg": "480px",
      "tablet-sm": "600px",
      "tablet-md": "768px",
      "tablet-lg": "820px",
      "desktop-sm": "1024px",
      "desktop-md": "1280px",
      "desktop-lg": "1440px",
      "desktop-xl": "1728px",
    },
  },
  plugins: [],
};
