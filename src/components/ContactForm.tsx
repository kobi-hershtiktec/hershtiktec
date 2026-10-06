import React, { useState } from "react";
import { CheckCircle, PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react";
import { EMAIL } from "../site";

// Static site: submissions are relayed by FormSubmit (formsubmit.co) to the business inbox.
// The first submission ever triggers a one-time activation email to EMAIL.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-line-strong bg-ink px-4 py-3 text-base text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "נא לכתוב שם";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) next.email = "נא לכתוב כתובת אימייל תקינה";
    if (!data.message?.trim()) next.message = "נא לכתוב כמה מילים על מה שאתם צריכים";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `פנייה חדשה מהאתר: ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-ink-2 p-8" role="status">
        <CheckCircle size={36} weight="duotone" className="text-accent" aria-hidden="true" />
        <p className="mt-4 text-xl font-semibold text-fg">ההודעה נשלחה, תודה!</p>
        <p className="mt-2 leading-relaxed text-fg-muted">אחזור אליכם לאימייל ששלחתם, בדרך כלל עוד באותו יום.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-ink-2 p-6 md:p-8" aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-xl font-semibold text-fg">
        מעדיפים לכתוב? השאירו הודעה
      </h2>
      <p className="mt-1 text-sm text-fg-muted">ההודעה מגיעה ישר אליי למייל, ואחזור אליכם בהקדם.</p>

      {/* Honeypot: hidden from people, bots fill it */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="cf-name" className="text-sm font-medium text-fg">שם</label>
          <input id="cf-name" name="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby="cf-name-err" />
          <p id="cf-name-err" className="min-h-4 text-sm text-danger">{errors.name}</p>
        </div>
        <div className="grid gap-2">
          <label htmlFor="cf-email" className="text-sm font-medium text-fg">אימייל</label>
          <input id="cf-email" name="email" type="email" dir="ltr" autoComplete="email" className={`${fieldClass} text-right`} aria-invalid={!!errors.email} aria-describedby="cf-email-err" />
          <p id="cf-email-err" className="min-h-4 text-sm text-danger">{errors.email}</p>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="cf-phone" className="text-sm font-medium text-fg">
            טלפון <span className="font-normal text-fg-muted">(לא חובה)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" dir="ltr" autoComplete="tel" className={`${fieldClass} text-right`} />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="cf-message" className="text-sm font-medium text-fg">במה אפשר לעזור?</label>
          <textarea id="cf-message" name="message" rows={4} className={`${fieldClass} resize-y`} aria-invalid={!!errors.message} aria-describedby="cf-message-err" />
          <p id="cf-message-err" className="min-h-4 text-sm text-danger">{errors.message}</p>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-2 flex items-start gap-2 text-sm text-danger" role="alert">
          <WarningCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          ההודעה לא נשלחה. נסו שוב, או כתבו לי ישירות ל-{EMAIL}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line-strong px-7 py-4 text-base font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent disabled:opacity-60 sm:w-auto"
      >
        <PaperPlaneTilt size={22} weight="bold" aria-hidden="true" />
        {status === "sending" ? "שולח…" : "שליחת הודעה"}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-fg-subtle">
        הפרטים נשלחים אליי בלבד, דרך שירות העברת טפסים. פרטים ב<a href="/privacy/" className="underline underline-offset-4 hover:text-fg">מדיניות הפרטיות</a>.
      </p>
    </form>
  );
}
