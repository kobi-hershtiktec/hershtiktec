/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccessibilityToolbar from "./components/AccessibilityToolbar";
import AccessibilityStatement from "./components/AccessibilityStatement";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CaseFruit from "./components/CaseFruit";
import { EASE } from "./site";

const pages: Record<string, () => React.ReactElement> = {
  "#home": Home,
  "#services": Services,
  "#portfolio": Portfolio,
  "#about": About,
  "#faq": FAQ,
  "#contact": Contact,
  "#accessibility": AccessibilityStatement,
  "#privacy": PrivacyPolicy,
  "#case-fruit": CaseFruit,
};

export default function App() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || "#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const pageKey = pages[activeHash] ? activeHash : "#home";
  const Page = pages[pageKey];

  return (
    <div className="relative min-h-[100dvh] bg-ink font-sans text-fg" id="app-container">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:font-semibold focus:text-on-accent"
      >
        דילוג לתוכן המרכזי באתר
      </a>

      <Navbar activeHash={activeHash} />

      <main id="main-content" className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={reduce ? false : { opacity: 0 }}
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
