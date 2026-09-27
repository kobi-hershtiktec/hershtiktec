// Post-build step: render every route in a headless browser and save it as static HTML,
// so search engines get full content without running JavaScript. Also writes sitemap.xml
// and robots.txt. Runs after `vite build` (locally and in the GitHub Pages workflow).

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const routes = JSON.parse(fs.readFileSync(path.join(root, "src/routes.json"), "utf8"));
const SITE_URL = "https://hershtiktec.com";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium-browser",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const chromePath = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!chromePath) throw new Error("prerender: no Chrome found; set CHROME_PATH");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

// Static server over dist/ with SPA fallback to the original (unrendered) index.html.
const shell = fs.readFileSync(path.join(dist, "index.html"));
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(dist, urlPath);
  if (file.startsWith(dist) && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { "Content-Type": MIME[".html"] });
  res.end(shell);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ["--no-sandbox"] });
const rendered = [];
try {
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.goto(base + route.path, { waitUntil: "networkidle0", timeout: 60000 });
    // Scroll through so every in-view reveal settles into its final state.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 600));
    const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
    const h1 = await page.evaluate(() => document.querySelector("h1")?.textContent?.trim() || "");
    if (!h1) throw new Error(`prerender: no <h1> rendered for ${route.path}`);
    rendered.push({ route, html });
    console.log(`prerendered ${route.path.padEnd(40)} ${h1}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

for (const { route, html } of rendered) {
  const out =
    route.key === "notFound"
      ? path.join(dist, "404.html")
      : path.join(dist, route.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`prerender: ${rendered.length} pages, sitemap.xml, robots.txt`);
