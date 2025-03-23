import plugin from "tailwindcss/plugin";

export default plugin(function ({ addComponents }) {
  addComponents({
    ".border-test": {
      "border": "1px solid red",
    },

    ".flex-center": {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
    },
  });
});
