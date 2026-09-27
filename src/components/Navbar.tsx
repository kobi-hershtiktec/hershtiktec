import React, { useEffect, useState } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import { CTA_CONTACT, CTA_CONTACT_SHORT, EASE, WHATSAPP_URL } from "../site";

interface NavbarProps {
  activePath: string;
}

const navLinks = [
  { name: "ראשי", href: "/" },
  { name: "שירותים", href: "/services/" },
  { name: "אוטומציות", href: "/automations/" },
  { name: "תיק עבודות", href: "/portfolio/" },
  { name: "מי אנחנו", href: "/about/" },
  { name: "שאלות ותשובות", href: "/faq/" },
  { name: "צור קשר", href: "/contact/" },
];

export default function Navbar({ activePath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();

  // Close the mobile drawer whenever the page changes
  useEffect(() => setIsOpen(false), [activePath]);

  const isActive = (href: string) => activePath === href;

  return (
    <header className="nav-glass sticky top-0 z-50 border-b border-line" id="main-navigation-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0 rounded-md" aria-label="HERSHTIKTEC דף הבית">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי באתר" id="desktop-navbar">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[15px] transition-colors duration-200 ${
                  active ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId={reduce ? undefined : "nav-active"}
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4.5 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
          >
            <WhatsappLogo size={18} aria-hidden="true" />
            {CTA_CONTACT_SHORT}
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-white/5 hover:text-fg lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
        >
          {isOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="border-t border-line bg-ink lg:hidden"
          >
            <nav className="flex flex-col px-4 py-4" aria-label="ניווט ראשי בנייד">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-3.5 text-lg ${
                    isActive(link.href) ? "bg-white/[0.05] text-fg" : "text-fg-muted"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-on-accent"
                aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
                {CTA_CONTACT}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
