import React, { useEffect, useState } from "react";
import { CONSENT_EVENT, analyticsEnabled, getConsent, setConsent } from "../analytics";

// Asks once before any measurement cookie is set. Rendered only on the client after mount,
// so the prerendered HTML never contains it (no hydration mismatch, no flash for returning visitors).
export default function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const check = () => setOpen(getConsent() === null);
    check();
    window.addEventListener(CONSENT_EVENT, check);
    return () => window.removeEventListener(CONSENT_EVENT, check);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="הודעה על עוגיות"
      className="fixed inset-x-3 bottom-3 z-[65] mx-auto max-w-xl rounded-2xl border border-line-strong bg-ink-2 p-5 shadow-[0_20px_60px_-20px_rgb(15_23_32/0.45)] sm:bottom-5"
    >
      <p className="text-sm leading-relaxed text-fg">
        נשמח למדוד ביקורים באתר בעזרת Google Analytics, כדי לדעת מה עובד ומה לשפר. זה משתמש בעוגיות, ורק באישורכם.{" "}
        <a href="/privacy/" className="text-accent underline underline-offset-4">
          פרטים במדיניות הפרטיות
        </a>
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
        >
          מאשר/ת
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-fg/5"
        >
          לא, תודה
        </button>
      </div>
    </div>
  );
}
