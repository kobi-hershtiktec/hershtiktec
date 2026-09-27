import React from "react";
import Logo from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "../site";

const siteLinks = [
  { name: "ראשי", href: "#home" },
  { name: "שירותים", href: "#services" },
  { name: "תיק עבודות", href: "#portfolio" },
  { name: "מי אנחנו", href: "#about" },
  { name: "שאלות ותשובות", href: "#faq" },
  { name: "צור קשר", href: "#contact" },
];

const legalLinks = [
  { name: "הצהרת נגישות", href: "#accessibility" },
  { name: "מדיניות פרטיות", href: "#privacy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 pb-10 pt-16 text-sm sm:px-6 lg:px-8" id="global-site-footer">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-[38ch] leading-relaxed text-fg-muted">
              סטודיו בוטיק לאתרים, אוטומציות וכלים דיגיטליים לעסקים קטנים ובינוניים. תוצרת כחול-לבן.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="ניווט בתחתית האתר">
            <h2 className="font-medium text-fg">האתר</h2>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fg-muted transition-colors hover:text-fg">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="font-medium text-fg">מידע</h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-fg-muted transition-colors hover:text-fg">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-medium text-fg">יצירת קשר</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={PHONE_TEL} className="font-mono text-fg-muted transition-colors hover:text-fg" dir="ltr">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="break-all text-fg-muted transition-colors hover:text-fg">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row sm:justify-between">
          <p>© {currentYear} HERSHTIKTEC. כל הזכויות שמורות.</p>
          <p>קובי הרשטיק, מייסד ומנהל</p>
        </div>
      </div>
    </footer>
  );
}
