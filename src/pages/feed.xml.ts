import type { APIRoute } from 'astro';
import { seoPages } from '../data/seoPages';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const root = new URL(base, site ?? 'https://aevo-ada-pruefung.de');
  const articles = [...seoPages].sort((a, b) => b.updatedDate.localeCompare(a.updatedDate));
  const lastBuildDate = new Date(`${articles[0]?.updatedDate ?? '2026-11-02'}T12:00:00Z`).toUTCString();

  const items = articles.map((article) => {
    const link = new URL(`${article.slug}/`, root).href;
    const publicationDate = article.publishedDate ?? '2026-06-19';
    return `
    <item>
      <title>${escapeXml(article.h1)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(`${publicationDate}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AEVO Ada Ratgeber</title>
    <link>${escapeXml(new URL('ratgeber/', root).href)}</link>
    <description>Ratgeber zu AEVO-Prüfung, Ausbilderschein und Prüfungsvorbereitung.</description>
    <language>de-DE</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(new URL('feed.xml', root).href)}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
