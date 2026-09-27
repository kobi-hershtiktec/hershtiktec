/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Automations from "./components/Automations";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccessibilityToolbar from "./components/AccessibilityToolbar";
import AccessibilityStatement from "./components/AccessibilityStatement";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CaseFruit from "./components/CaseFruit";
import NotFound from "./components/NotFound";
import { EASE } from "./site";
import { LEGACY_HASHES, RouteKey, routeForPath } from "./routes";
import { applyHead } from "./head";
import { introAllowed, markNavigated } from "./intro";
import { faqs } from "./faqs";

const pages: Record<RouteKey, () => React.ReactElement> = {
  home: Home,
  services: Services,
  automations: Automations,
  portfolio: Portfolio,
  about: About,
  faq: FAQ,
  contact: Contact,
  caseFruit: CaseFruit,
  accessibility: AccessibilityStatement,
  privacy: PrivacyPolicy,
  notFound: NotFound,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Old links like /#services keep working: rewrite them to the real path on load.
function initialPath() {
  const legacy = LEGACY_HASHES[window.location.hash];
  if (legacy) window.history.replaceState(null, "", legacy);
  return window.location.pathname;
}

export default function App() {
  const [path, setPath] = useState(initialPath);
  const reduce = useReducedMotion();
  const route = routeForPath(path);

  const navigate = useCallback((to: string) => {
    markNavigated();
    window.history.pushState(null, "", to);
    setPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  // Client-side navigation for internal links; everything else behaves normally.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (!a || !href || !href.startsWith("/") || a.target === "_blank") return;
      e.preventDefault();
      if (href !== window.location.pathname) navigate(href);
    };
    const onPop = () => {
      markNavigated();
      setPath(window.location.pathname);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, [navigate]);

  useEffect(() => {
    applyHead(route, route.key === "faq" ? faqJsonLd : null);
  }, [route]);

  const Page = pages[route.key];

  return (
    <div className="relative min-h-[100dvh] bg-ink font-sans text-fg" id="app-container">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:font-semibold focus:text-on-accent"
      >
        דילוג לתוכן המרכזי באתר
      </a>

      <Navbar activePath={route.path} />

      <main id="main-content" className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={route.key}
            initial={reduce || !introAllowed() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <Page />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <AccessibilityToolbar />
    </div>
  );
}
