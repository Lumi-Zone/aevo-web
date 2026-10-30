const siteOrigin = new URL(process.env.INDEXNOW_SITE_ORIGIN ?? 'https://aevo-ada-pruefung.de');
const key = process.env.INDEXNOW_KEY
  ?? 'c9e62ab267a46abfc4ce59907bc16df373ce7a1b18502f28e84aa4d1161f6644';
const keyLocation = new URL(`${key}.txt`, siteOrigin).href;
const cacheToken = process.env.GITHUB_SHA ?? Date.now().toString();

const decodeXml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&apos;', "'");

const extractLocations = (xml) => [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)]
  .map((match) => decodeXml(match[1].trim()));

async function fetchText(url) {
  const requestUrl = new URL(url);
  requestUrl.searchParams.set('indexnow', cacheToken);
  const response = await fetch(requestUrl, {
    headers: { 'user-agent': 'AEVO-Ada-IndexNow/1.0' },
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    throw new Error(`Could not read ${requestUrl.href}: HTTP ${response.status}`);
  }

  return response.text();
}

const sitemapIndexUrl = new URL('sitemap-index.xml', siteOrigin);
const sitemapIndex = await fetchText(sitemapIndexUrl);
const sitemapLocations = extractLocations(sitemapIndex);
const sitemapDocuments = sitemapLocations.length > 0
  ? await Promise.all(sitemapLocations.map(fetchText))
  : [sitemapIndex];

const urlList = [...new Set(sitemapDocuments.flatMap(extractLocations))]
  .filter((url) => {
    try {
      return new URL(url).origin === siteOrigin.origin;
    } catch {
      return false;
    }
  });

if (urlList.length === 0) {
  throw new Error('No canonical URLs were found in the sitemap.');
}

const payload = {
  host: siteOrigin.host,
  key,
  keyLocation,
  urlList,
};

if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(`IndexNow dry run: ${urlList.length} URLs from ${sitemapIndexUrl.href}`);
  process.exit(0);
}

const keyResponse = await fetch(`${keyLocation}?indexnow=${encodeURIComponent(cacheToken)}`, {
  signal: AbortSignal.timeout(20_000),
});
const publishedKey = keyResponse.ok ? (await keyResponse.text()).trim() : '';
if (publishedKey !== key) {
  throw new Error(`IndexNow key is not available at ${keyLocation} (HTTP ${keyResponse.status}).`);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(20_000),
});

if (![200, 202].includes(response.status)) {
  const responseBody = await response.text();
  throw new Error(`IndexNow submission failed: HTTP ${response.status} ${responseBody}`.trim());
}

console.log(`IndexNow accepted ${urlList.length} canonical URLs (HTTP ${response.status}).`);
