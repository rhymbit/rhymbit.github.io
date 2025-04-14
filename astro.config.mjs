// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rhymbit.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "rose-pine-moon",
        wrap: true,
      },
      gfm: false,
    }),
    sitemap(),
    icon(),
  ],
});
