// Single source of truth for page URLs and their search metadata.
// Paths use a trailing slash because GitHub Pages serves each route as <path>/index.html.
// Route data lives in routes.json so scripts/prerender.mjs can read it too.

import routesData from "./routes.json";

export const SITE_URL = "https://hershtiktec.com";

export type RouteKey =
  | "home"
  | "services"
  | "automations"
  | "portfolio"
  | "about"
  | "faq"
  | "contact"
  | "caseFruit"
  | "accessibility"
  | "privacy"
  | "notFound";

export interface RouteMeta {
  key: RouteKey;
  path: string;
  title: string;
  description: string;
  /** Excluded from sitemap / indexing */
  noindex?: boolean;
}

export const ROUTES = routesData as RouteMeta[];

export const pathOf = (key: RouteKey) => ROUTES.find((r) => r.key === key)!.path;

/** "/services" and "/services/index.html" -> "/services/" */
export function normalizePath(pathname: string): string {
  let p = pathname.replace(/index\.html$/, "");
  if (!p.endsWith("/")) p += "/";
  return p;
}

export function routeForPath(pathname: string): RouteMeta {
  const p = normalizePath(pathname);
  return ROUTES.find((r) => r.path === p) ?? ROUTES.find((r) => r.key === "notFound")!;
}

/** Old hash URLs (before real paths) mapped to their new path. */
export const LEGACY_HASHES: Record<string, string> = {
  "#home": "/",
  "#services": "/services/",
  "#portfolio": "/portfolio/",
  "#about": "/about/",
  "#faq": "/faq/",
  "#contact": "/contact/",
  "#accessibility": "/accessibility/",
  "#privacy": "/privacy/",
  "#case-fruit": "/case-studies/fruit-delivery-system/",
};
