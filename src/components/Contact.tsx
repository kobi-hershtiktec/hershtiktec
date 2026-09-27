import React from "react";
import { ArrowUpLeft, WhatsappLogo } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import { CTA_CONTACT, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../site";

const channels = [
  { label: "טלפון", value: PHONE_DISPLAY, href: PHONE_TEL, ltr: true, external: false },
  { label: "אימייל", value: EMAIL, href: `mailto:${EMAIL}`, ltr: true, external: false },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <PageHeader
            id="contact-heading"
            title="בואו נדבר על האתר שלכם"
            intro="מענה אישי ומהיר, בלי בוטים ובלי טפסים. בחרו את הדרך הנוחה לכם."
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-semibold text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
              aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
            >
              <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
              {CTA_CONTACT}
            </a>
          </PageHeader>
        </div>

        <div className="lg:col-span-6 lg:pt-3">
          <ul className="divide-y divide-line border-y border-line">
            {channels.map((c, i) => (
              <Reveal as="li" key={c.label} delay={0.1 + i * 0.06}>
                <a href={c.href} className="group flex items-center justify-between gap-6 py-8">
                  <span>
                    <span className="block text-sm text-fg-muted">{c.label}</span>
                    <span
                      className="mt-2 block break-all font-mono text-2xl text-fg transition-colors group-hover:text-accent md:text-3xl"
                      dir={c.ltr ? "ltr" : undefined}
                      style={{ textAlign: "right" }}
                    >
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpLeft
                    size={24}
                    aria-hidden="true"
                    className="shrink-0 text-fg-subtle transition-all duration-300 ease-out-expo group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm text-fg-muted">הפרטים שלכם נשארים אצלנו. לא נשלח דואר זבל ולא נעביר אותם לאף גורם.</p>
        </div>
      </div>
    </section>
  );
}
