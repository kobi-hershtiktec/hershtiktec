import React, { useState, useEffect } from "react";
import {
  Wheelchair as Accessibility,
  X,
  MagnifyingGlassPlus as ZoomIn,
  MagnifyingGlassMinus as ZoomOut,
  Eye,
  ArrowClockwise as RefreshCw,
  Link as Link2,
  Keyboard,
  TextAa as Type,
  Check,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { AccessibilitySettings } from "../types";

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSizeScale: 1.0,
  grayscale: false,
  highContrast: false,
  invert: false,
  readableFont: false,
  highlightLinks: false,
  keyboardGuide: false,
};

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem("heshtiktec_accessibility");
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Apply settings to document.body and HTML root
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Apply font-size scale inline directly to html
    html.style.fontSize = `${settings.fontSizeScale * 100}%`;

    // Grayscale
    if (settings.grayscale) {
      body.classList.add("accessibility-grayscale");
    } else {
      body.classList.remove("accessibility-grayscale");
    }

    // High Contrast
    if (settings.highContrast) {
      body.classList.add("accessibility-high-contrast");
    } else {
      body.classList.remove("accessibility-high-contrast");
    }

    // Invert Colors
    if (settings.invert) {
      body.classList.add("accessibility-invert");
    } else {
      body.classList.remove("accessibility-invert");
    }

    // Readable Font
    if (settings.readableFont) {
      body.classList.add("accessibility-readable-font");
    } else {
      body.classList.remove("accessibility-readable-font");
    }

    // Highlight Links
    if (settings.highlightLinks) {
      body.classList.add("accessibility-highlight-links");
      // Inject CSS into body dynamically for high specificity
      const styleId = "accessibility-highlight-links-style";
      let styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = styleId;
        styleTag.innerHTML = `
          body.accessibility-highlight-links a {
            outline: 2px dashed var(--color-accent) !important;
            outline-offset: 4px !important;
            background-color: color-mix(in srgb, var(--color-accent) 15%, transparent) !important;
            color: var(--color-fg) !important;
            text-decoration: underline !important;
            text-decoration-color: var(--color-accent) !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
    } else {
      body.classList.remove("accessibility-highlight-links");
      const styleTag = document.getElementById("accessibility-highlight-links-style");
      if (styleTag) {
        styleTag.remove();
      }
    }

    localStorage.setItem("heshtiktec_accessibility", JSON.stringify(settings));
  }, [settings]);

  // Handle escape key to close accessibility menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const adjustFontSize = (increment: boolean) => {
    setSettings(prev => {
      const nextScale = increment 
        ? Math.min(1.3, prev.fontSizeScale + 0.1) 
        : Math.max(0.9, prev.fontSizeScale - 0.1);
      return { ...prev, fontSizeScale: parseFloat(nextScale.toFixed(1)) };
    });
  };

  const resetAll = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[55]" id="accessibility-root">
      {/* Floating Trigger Button */}
      <button
        id="accessibility-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-ink-2 text-fg shadow-lg shadow-black/40 transition-colors hover:border-accent/60 hover:text-accent active:scale-95"
        aria-label="תפריט נגישות ואפשרויות סיוע קוליות/חזותיות"
        aria-expanded={isOpen}
        aria-controls="accessibility-drawer"
      >
        <Accessibility className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Drawer Overlay & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for clickout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black"
              aria-hidden="true"
            />

            {/* Sliding Panel */}
            <motion.div
              id="accessibility-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 flex w-full max-w-sm flex-col text-fg shadow-2xl border-r border-line p-6 z-[10000] overflow-y-auto bg-ink-2"
              role="dialog"
              aria-modal="true"
              aria-label="סרגל נגישות דיגיטלי"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Accessibility className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-bold font-display" id="accessibility-title">סרגל נגישות ואפשרויות תצוגה</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-fg-muted hover:bg-fg/5 hover:text-fg transition-colors"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Instructions */}
              <p className="text-xs text-fg-muted mb-6 bg-fg/5 p-3 rounded-lg border border-line">
                אתר זה מונגש במלואו לפי תקן נגישות <strong>ת&quot;י 5568</strong> והנחיות <strong>WCAG 2.2 AA</strong>. באפשרותכם להשתמש בהגדרות הבאות להתאמת חוויית הגלישה.
              </p>

              {/* Control Sections */}
              <div className="space-y-6 flex-1">
                {/* 1. Font Size Control */}
                <div className="space-y-2">
                  <span className="block text-sm font-semibold text-fg">גודל גופן</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => adjustFontSize(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-fg/5 hover:bg-fg/10 text-fg active:scale-95 transition-colors disabled:opacity-40"
                      disabled={settings.fontSizeScale <= 0.9}
                      aria-label="הקטן גודל טקסט"
                    >
                      <ZoomOut className="h-5 w-5" />
                    </button>
                    <span 
                      className="flex-1 text-center font-mono font-bold text-accent" 
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {Math.round(settings.fontSizeScale * 100)}%
                    </span>
                    <button
                      onClick={() => adjustFontSize(true)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-fg/5 hover:bg-fg/10 text-fg active:scale-95 transition-colors disabled:opacity-40"
                      disabled={settings.fontSizeScale >= 1.3}
                      aria-label="הגדל גודל טקסט"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* 2. Visual Filters Grid */}
                <div className="space-y-3">
                  <span className="block text-sm font-semibold text-fg">התאמות חזותיות</span>
                  
                  {/* Grayscale */}
                  <button
                    onClick={() => updateSetting("grayscale", !settings.grayscale)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.grayscale 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.grayscale}
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">מונוכרום (גווני אפור)</span>
                    </div>
                    {settings.grayscale && <Check className="h-5 w-5 text-accent" />}
                  </button>

                  {/* High Contrast */}
                  <button
                    onClick={() => updateSetting("highContrast", !settings.highContrast)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.highContrast 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">ניגודיות גבוהה</span>
                    </div>
                    {settings.highContrast && <Check className="h-5 w-5 text-accent" />}
                  </button>

                  {/* Color Invert */}
                  <button
                    onClick={() => updateSetting("invert", !settings.invert)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.invert 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.invert}
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">היפוך צבעים</span>
                    </div>
                    {settings.invert && <Check className="h-5 w-5 text-accent" />}
                  </button>
                </div>

                {/* 3. Text & Interaction Enhancements */}
                <div className="space-y-3">
                  <span className="block text-sm font-semibold text-fg">שיפורי קריאות ותנועה</span>

                  {/* Readable Font */}
                  <button
                    onClick={() => updateSetting("readableFont", !settings.readableFont)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.readableFont 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.readableFont}
                  >
                    <div className="flex items-center gap-3">
                      <Type className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">גופן מערכת פשוט (קריא)</span>
                    </div>
                    {settings.readableFont && <Check className="h-5 w-5 text-accent" />}
                  </button>

                  {/* Highlight Links */}
                  <button
                    onClick={() => updateSetting("highlightLinks", !settings.highlightLinks)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.highlightLinks 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.highlightLinks}
                  >
                    <div className="flex items-center gap-3">
                      <Link2 className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">הדגשת קישורים וכפתורים</span>
                    </div>
                    {settings.highlightLinks && <Check className="h-5 w-5 text-accent" />}
                  </button>

                  {/* Keyboard Navigation Helper */}
                  <button
                    onClick={() => updateSetting("keyboardGuide", !settings.keyboardGuide)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 border transition-all ${
                      settings.keyboardGuide 
                        ? "bg-accent/10 border-accent/60 text-fg" 
                        : "bg-fg/5 border-line-strong text-fg hover:border-accent/30"
                    }`}
                    aria-pressed={settings.keyboardGuide}
                  >
                    <div className="flex items-center gap-3">
                      <Keyboard className="h-5 w-5 text-fg-muted" />
                      <span className="text-sm font-medium">מדריך ניווט למשתמשי מקלדת</span>
                    </div>
                    {settings.keyboardGuide && <Check className="h-5 w-5 text-accent" />}
                  </button>
                </div>

                {/* Keyboard Quick Guide panel */}
                {settings.keyboardGuide && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 bg-ink rounded-lg text-xs leading-relaxed text-fg border border-line space-y-1.5"
                  >
                    <div className="font-bold text-accent mb-1">מקשי קיצור לניווט המהיר:</div>
                    <p>⌨️ השתמשו ב-<strong>Tab</strong> כדי לעבור בין קישורים וכפתורים קדימה.</p>
                    <p>⌨️ השתמשו ב-<strong>Shift + Tab</strong> כדי לעבור ביניהם אחורה.</p>
                    <p>⌨️ לחצו על <strong>Enter</strong> או <strong>Space</strong> להפעלה.</p>
                    <p>⌨️ השתמשו במקשי החצים כדי לגלול באתר מעלה ומטה.</p>
                    <p>⌨️ לחצו <strong>Esc</strong> לסגירת חלונות או תפריטים צפים.</p>
                  </motion.div>
                )}
              </div>

              {/* Reset Section */}
              <div className="border-t border-line pt-4 mt-6">
                <button
                  onClick={resetAll}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-line-strong bg-fg/5 text-fg font-medium py-2.5 px-4 transition-colors hover:bg-fg/10 text-sm"
                >
                  <RefreshCw className="h-4 w-4" />
                  איפוס כל ההגדרות לברירת מחדל
                </button>
                <a
                  href="/accessibility/"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block text-center text-sm text-accent underline-offset-4 hover:underline"
                >
                  להצהרת הנגישות המלאה
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
