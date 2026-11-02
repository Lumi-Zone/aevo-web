// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * GitHub Pages serves project sites from /repo/, but custom domains are served
 * from /. The deploy workflow sets CUSTOM_DOMAIN so Astro emits root-relative
 * asset URLs for aevo-ada-pruefung.de.
 */
function pagesConfig() {
  const customDomain = process.env.CUSTOM_DOMAIN;
  if (customDomain) {
    return { site: `https://${customDomain}`, base: '/' };
  }

  const full = process.env.GITHUB_REPOSITORY;
  if (!full?.includes('/')) {
    return { site: 'https://aevo-ada-pruefung.de', base: '/' };
  }

  const [owner, repo] = full.split('/');
  return {
    site: `https://${owner}.github.io`,
    // Trailing slash so import.meta.env.BASE_URL joins correctly (e.g. favicon path).
    base: `/${repo}/`,
  };
}

const { site, base } = pagesConfig();

// Keep sitemap freshness explicit and stable. Search engines can use these
// dates to prioritize recrawls; using the build time would incorrectly mark
// every page as changed on every deployment.
const sitemapLastModified = new Map([
  ['/', '2026-10-30'],
  ['/aevo-app/', '2026-10-30'],
  ['/aevo-lernplan-4-wochen/', '2026-11-02'],
  ['/aevo-ihk/', '2026-10-30'],
  ['/aevo-online/', '2026-10-30'],
  ['/aevo-praktische-pruefung/', '2026-10-30'],
  ['/aevo-pruefung/', '2026-10-30'],
  ['/aevo-pruefungsfragen/', '2026-10-30'],
  ['/aevo-pruefungsvorbereitung/', '2026-10-30'],
  ['/aevo-unterweisung-themen-beispiele/', '2026-11-02'],
  ['/ausbilder-werden/', '2026-10-30'],
  ['/ausbilderschein-kosten-dauer-gueltigkeit/', '2026-11-02'],
  ['/ausbilderschein-ada-schein/', '2026-10-30'],
  ['/datenschutz/', '2026-10-30'],
  ['/ios-app/', '2026-10-30'],
  ['/nutzungsbedingungen/', '2026-10-30'],
  ['/ratgeber/', '2026-11-02'],
  ['/support/', '2026-10-30'],
  ['/ueber-aevo-ada/', '2026-10-30'],
]);

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const normalizedPath = base !== '/' && pathname.startsWith(base)
          ? `/${pathname.slice(base.length)}`
          : pathname;
        const lastmod = sitemapLastModified.get(normalizedPath);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
