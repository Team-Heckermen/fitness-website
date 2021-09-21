module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      0.5: "0.5px",
    },
    extend: {
      width: {
        "90%": "90%",
        "95%": "95%",
        "98%": "98%,",
      },
    },
    screens: {
      md: "925px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
