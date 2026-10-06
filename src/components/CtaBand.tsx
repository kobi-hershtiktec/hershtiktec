import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { CTA_CONTACT, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../site";
import { responsive } from "../img";

// Closing call-to-action shown at the bottom of content pages.
// A real face next to the button: the person who answers the WhatsApp.
export default function CtaBand() {
  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="cta-band-heading">
      <Reveal className="relative mx-auto flex max-w-7xl items-center overflow-hidden rounded-2xl border border-line bg-ink-2 px-5 py-14 sm:px-12 md:min-h-[min(560px,calc(100dvh-10rem))] md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgb(76_201_220/0.18),transparent)]"
        />
        <div className="relative grid w-full items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="cta-band-heading" className="text-3xl font-semibold leading-[1.12] tracking-tight text-fg md:text-6xl">
              יש לכם עסק שמגיע לו אתר טוב יותר?
            </h2>
            <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-fg-muted md:text-lg">
              ספרו לי על העסק בשיחה קצרה. תקבלו כיוון ברור, לוח זמנים והצעת מחיר קבועה.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-5 py-4 text-center sm:w-auto sm:px-7 text-base font-semibold leading-snug text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
                aria-label={`${CTA_CONTACT} בוואטסאפ (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={24} weight="bold" aria-hidden="true" className="shrink-0" />
                {CTA_CONTACT}
              </a>
              <a href={PHONE_TEL} className="text-sm text-fg-muted transition-colors hover:text-fg">
                או בטלפון: <span className="font-mono text-fg" dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          <figure className="hidden md:col-span-5 md:flex md:flex-col md:items-center">
            <div className="relative w-[min(300px,100%)]">
              <div
                aria-hidden="true"
                className="absolute inset-[-14%] rounded-full bg-[radial-gradient(closest-side,rgb(76_201_220/0.22),transparent)]"
              />
              <img
                {...responsive("kobi", "300px")}
                width={953}
                height={953}
                alt="קובי הרשטיק"
                loading="lazy"
                className="relative aspect-square w-full rounded-full object-cover ring-1 ring-line-strong"
              />
            </div>
            <figcaption className="mt-5 text-center text-sm text-fg-muted">
              <span className="block text-base font-semibold text-fg">קובי הרשטיק</span>
              עונה לכם אישית
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
