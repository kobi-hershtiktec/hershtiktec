/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccessibilityToolbar from "./components/AccessibilityToolbar";
import BackgroundPlasmaGrid from "./components/BackgroundPlasmaGrid";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home";
      setActiveHash(currentHash);
      // Seamlessly scroll to the top of the viewport when changing pages
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initialize properly
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderActivePage = () => {
    switch (activeHash) {
      case "#services":
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Services />
          </motion.div>
        );
      case "#portfolio":
        return (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Portfolio />
          </motion.div>
        );
      case "#about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <About />
          </motion.div>
        );
      case "#faq":
        return (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <FAQ />
          </motion.div>
        );
      case "#contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Contact />
          </motion.div>
        );
      case "#home":
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Hero />
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-brand-bg text-slate-100 min-h-screen relative font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan" id="app-container">
      {/* Global Cinematic Plasma Network Background - Optimized & Responsive */}
      <BackgroundPlasmaGrid activeHash={activeHash} />

      {/* Skip to Content Link - Essential for power keyboard users / screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[99999] focus:rounded-lg focus:bg-cyan-500 focus:text-slate-950 focus:px-6 focus:py-3 focus:font-extrabold focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        דילוג לתוכן המרכזי באתר
      </a>

      {/* Main Top Header Navbar */}
      <Navbar activeHash={activeHash} />

      {/* Primary Page Layout Sections */}
      <main id="main-content" className="relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          {renderActivePage()}
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer />

      {/* Interactive Floater Accessibility Standard TI-5568 panel */}
      <AccessibilityToolbar />
    </div>
  );
}

