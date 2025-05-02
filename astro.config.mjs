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
    server: {
      allowedHosts: ["copper-locate-no-lost.trycloudflare.com"],
    },
  },

  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "catppuccin-macchiato",
        wrap: true,
      },
      gfm: false,
    }),
    sitemap(),
    icon(),
  ],
});
