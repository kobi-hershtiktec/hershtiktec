import React, { useState } from "react";
import { Plus, WhatsappLogo } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { faqs } from "../faqs";
import PageHeader from "./PageHeader";
import { CTA_CONTACT, WHATSAPP_URL } from "../site";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <PageHeader
              id="faq-heading"
              title="שאלות ותשובות"
              intro="מה שכדאי לדעת לפני שמתחילים. לא מצאתם תשובה? שאלו אותי ישירות."
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-base font-medium text-accent transition-colors hover:text-accent-strong"
                aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={20} aria-hidden="true" />
                {CTA_CONTACT}
              </a>
            </PageHeader>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-line border-y border-line" id="faq-accordion-container">
            {faqs.map((faq) => {
              const isExpanded = openId === faq.id;
              return (
                <div key={faq.id} id={`faq-item-${faq.id}`}>
                  <h2>
                    <button
                      onClick={() => setOpenId(isExpanded ? null : faq.id)}
                      className="group flex w-full items-start justify-between gap-6 py-7 text-right"
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-btn-${faq.id}`}
                    >
                      <span className="text-lg font-medium leading-snug text-fg md:text-xl">{faq.question}</span>
                      <Plus
                        size={22}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 text-fg-muted transition-transform duration-300 ease-out-expo group-hover:text-fg ${
                          isExpanded ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h2>
                  {/* Answers stay in the DOM (for search engines); collapsed ones are hidden via grid rows + inert */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    aria-hidden={!isExpanded}
                    inert={!isExpanded ? true : undefined}
                    className={`grid ${reduce ? "" : "transition-[grid-template-rows,opacity] duration-500 ease-out-expo"} ${
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-8 leading-relaxed text-fg-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
