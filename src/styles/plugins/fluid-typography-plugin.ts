import plugin from "tailwindcss/plugin";

export default plugin(function ({ addBase, addComponents }) {
  addBase({
    html: {
      "font-size": "clamp(1rem, calc(0.3rem + 0.3vw), 1.2rem);",

      "h1,h2,h3,h4,h5,h6": {
        color:
          "color-mix(in srgb, var(--color-base-content) 93%, var(--color-primary));",
      },
      h1: {
        "font-size": "clamp(2.5rem, calc(2.2rem + 1.7vw), 7rem);"
      },
      h2: {
        "font-size": "clamp(2rem, calc(1.7rem + 1.5vw), 6.5rem);",
      },
      h3: {
        "font-size": "clamp(2rem, calc(1.8rem + 1vw), 6rem);",
      },
      h4: {
        "font-size": "clamp(1.5rem, calc(1.3rem + 1vw), 5.5rem);",
      },
      h5: {
        "font-size": "clamp(1rem, calc(0.8rem + 1vw), 5rem);",
      },
      h6: {
        "font-size": "clamp(1rem, calc(0.6rem + 0.8vw), 4rem);",
      },
    },
  }),
    addComponents({
      ".text-h1": {
        "font-size": "clamp(2.5rem, calc(2.2rem + 1.7vw), 7rem);",
      },
      ".text-h2": {
        "font-size": "clamp(2rem, calc(1.7rem + 1.5vw), 6.5rem);",
      },
      ".text-h3": {
        "font-size": "clamp(2rem, calc(1.8rem + 1vw), 6rem);",
      },
      ".text-h4": {
        "font-size": "clamp(1.5rem, calc(1.3rem + 1vw), 5.5rem);",
      },
      ".text-h5": {
        "font-size": "clamp(1rem, calc(0.8rem + 1vw), 5rem);",
      },
      ".text-h6": {
        "font-size": "clamp(1rem, calc(0.6rem + 0.8vw), 4rem);",
      },
      ".text-p": {
        "font-size": "clamp(1rem, calc(0.3rem + 0.3vw), 1.2rem);",
      },
    });
});
