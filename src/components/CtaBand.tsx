import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { CTA_CONTACT, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../site";

// Closing call-to-action shown at the bottom of content pages.
export default function CtaBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-24 md:pb-32" aria-labelledby="cta-band-heading">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-line bg-ink-2 px-6 py-14 sm:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-[-10%] h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgb(76_201_220/0.16),transparent)]"
        />
        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 id="cta-band-heading" className="text-3xl font-semibold leading-[1.15] tracking-tight text-fg md:text-5xl">
              יש לכם עסק שמגיע לו אתר טוב יותר?
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-fg-muted md:text-lg">
              ספרו לי על העסק בשיחה קצרה. תקבלו כיוון ברור, לוח זמנים והצעת מחיר קבועה.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:col-span-5 md:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-semibold text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
              aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
            >
              <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
              {CTA_CONTACT}
            </a>
            <a href={PHONE_TEL} className="text-sm text-fg-muted transition-colors hover:text-fg">
              או בטלפון: <span className="font-mono text-fg" dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
