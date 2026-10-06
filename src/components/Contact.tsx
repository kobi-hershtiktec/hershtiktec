import React from "react";
import { ArrowUpLeft, WhatsappLogo } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
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
            intro="מענה אישי ומהיר, בלי בוטים. בחרו את הדרך הנוחה לכם: וואטסאפ, טלפון, אימייל או השארת הודעה."
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-center text-base font-semibold leading-snug text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
              aria-label={`${CTA_CONTACT} בוואטסאפ (נפתח בחלון חדש)`}
            >
              <WhatsappLogo size={24} weight="bold" aria-hidden="true" className="shrink-0" />
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
                      className="mt-2 block font-mono text-xl text-fg transition-colors [overflow-wrap:anywhere] group-hover:text-accent sm:text-2xl md:text-3xl"
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
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
