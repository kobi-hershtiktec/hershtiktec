// Conversion tracking (Google Analytics 4), loaded only after the visitor accepts the cookie notice.
// Inert until GA_ID is set: no script is loaded and nothing is stored or sent.

export const GA_ID = "";

const CONSENT_KEY = "cookie-consent"; // "granted" | "denied"
export const CONSENT_EVENT = "cookie-consent-reset";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let loaded = false;

export type Consent = "granted" | "denied" | null;

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable: the notice will just show again next visit */
  }
  if (value === "granted") initAnalytics();
}

/** "Cookie settings" link in the footer: forget the choice and show the notice again. */
export function resetConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Whether there is anything to ask about (no GA_ID means nothing is ever collected). */
export const analyticsEnabled = () => Boolean(GA_ID);

/** Load gtag.js once, after the page is idle, and only with consent. */
export function initAnalytics() {
  if (!GA_ID || loaded || typeof window === "undefined" || getConsent() !== "granted") return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  const load = () => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  };
  if ("requestIdleCallback" in window) (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(load);
  else setTimeout(load, 2000);
}

/** Report an event. No-op until analytics is loaded. */
export function track(name: string, params: Record<string, string> = {}) {
  window.gtag?.("event", name, { page_path: window.location.pathname, ...params });
}

/** Page views for client-side navigation (the first one is sent by "config"). */
export function trackPageView(path: string) {
  window.gtag?.("event", "page_view", { page_path: path, page_location: window.location.href });
}

/**
 * Contact clicks anywhere on the site, classified by link target:
 * WhatsApp, phone and email are the conversion actions that matter.
 */
export function trackContactClick(href: string) {
  if (href.startsWith("https://wa.me/")) track("whatsapp_click");
  else if (href.startsWith("tel:")) track("phone_click");
  else if (href.startsWith("mailto:")) track("email_click");
}
