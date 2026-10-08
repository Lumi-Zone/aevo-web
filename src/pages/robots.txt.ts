import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const baseUrl = base.endsWith('/') ? base : `${base}/`;
  const origin = site ? `${new URL(site).origin}/` : 'https://lumi-zone.github.io/';
  const publicRoot = new URL(baseUrl, origin);
  const sitemapHref = new URL('sitemap-index.xml', publicRoot).href;
  const body = `# AEVO Ada is public and may be indexed and cited by search assistants.\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${sitemapHref}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
