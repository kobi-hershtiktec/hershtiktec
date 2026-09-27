import React from "react";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import CaseStudy from "./CaseStudy";
import { solutionExamples, solutionsWhatsappText } from "../solutions";
import { CTA_CONTACT, whatsappWith } from "../site";

// Home-page entry to the second track: automations and custom tools.
export default function Solutions() {
  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="solutions-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              גם מאחורי הקלעים של העסק
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-fg-muted">
              אתר מביא לקוחות. אבל הרבה עסקים מאבדים שעות כל שבוע על עבודה ידנית. אוטומציות וכלים מותאמים מחזירים לכם את
              הזמן הזה.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={whatsappWith(solutionsWhatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-6 py-3 text-base font-medium text-fg transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={20} aria-hidden="true" />
                {CTA_CONTACT}
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-base font-medium text-fg-muted transition-colors hover:text-fg"
              >
                מה עוד אפשר לבנות
                <ArrowLeft size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
            </div>
          </Reveal>

          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {solutionExamples.map((ex, i) => (
              <Reveal as="li" key={ex.pain} delay={i * 0.06} className="border-t border-line py-7">
                <p className="text-lg font-medium text-fg">{ex.pain}</p>
                <p className="mt-2 leading-relaxed text-fg-muted">{ex.result}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <CaseStudy />
        </div>
      </div>
    </section>
  );
}
