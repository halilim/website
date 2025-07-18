import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [sitemap(), mdx(), pagefind(), icon()],
  vite: {
    plugins: [devtoolsJson(), tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  }
});