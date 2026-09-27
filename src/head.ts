import { RouteMeta, SITE_URL } from "./routes";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const el = existing ?? Object.assign(document.createElement("script"), { id, type: "application/ld+json" });
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

// Per-route <head>: title, description, canonical, social tags and page-level structured data.
export function applyHead(route: RouteMeta, pageJsonLd: object | null = null) {
  const url = SITE_URL + route.path;
  document.title = route.title;
  setMeta("name", "description", route.description);
  setMeta("name", "robots", route.noindex ? "noindex, follow" : "index, follow");
  setLink("canonical", url);
  setMeta("property", "og:url", url);
  setMeta("property", "og:title", route.title);
  setMeta("property", "og:description", route.description);
  setMeta("name", "twitter:title", route.title);
  setMeta("name", "twitter:description", route.description);
  setJsonLd("page-jsonld", pageJsonLd);
}
