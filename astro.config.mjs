import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yahircreativo-art.github.io",
  base: "/Vertice",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});