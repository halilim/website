import { defineConfig } from "astro/config";
import devtoolsJson from "vite-plugin-devtools-json";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",
  integrations: [sitemap(), mdx(), pagefind(), icon()],
  vite: {
    plugins: [devtoolsJson(), tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
