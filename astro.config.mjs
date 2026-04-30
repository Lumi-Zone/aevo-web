// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aevo-ada-pruefung.de',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
