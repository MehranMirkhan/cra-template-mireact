module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    borderWidth: ["first", "last", "direction"],
    margin: ["responsive", "direction"],
    padding: ["responsive", "direction"],
  },
  plugins: [require("tailwindcss-dir")()],
};
