import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const baseUrl = base.endsWith('/') ? base : `${base}/`;
  const origin = site ? `${new URL(site).origin}/` : 'https://lumi-zone.github.io/';
  const publicRoot = new URL(baseUrl, origin);
  const sitemapHref = new URL('sitemap-index.xml', publicRoot).href;
  const body = `# AEVO Ada is public and may be indexed, surfaced and cited.\n# Search crawlers\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: bingbot\nAllow: /\n\n# Gemini Apps, future Gemini model training and Google Search grounding control\n# Google-Extended is a robots.txt product token, not a separate HTTP user agent.\nUser-agent: Google-Extended\nAllow: /\n\n# ChatGPT search\nUser-agent: OAI-SearchBot\nAllow: /\n\n# User-requested retrieval and optional model-training crawler\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\n# All other standards-compliant crawlers\nUser-agent: *\nAllow: /\n\nSitemap: ${sitemapHref}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
