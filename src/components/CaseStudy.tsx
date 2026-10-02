import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { caseStudy } from "../solutions";
import { responsive } from "../img";

// Real delivered system, anonymized. Numbers come from the project's own verification runs.
// `compact`: side-by-side teaser for the home page (fits one screen with its section).
export default function CaseStudy({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Reveal
        as="article"
        className="overflow-hidden rounded-2xl border border-line bg-ink-2 bg-[linear-gradient(160deg,rgb(76_201_220/0.09),transparent_45%)]"
      >
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10 lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-accent">פרויקט שבנינו</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-fg">{caseStudy.title}</h3>
              <p className="mt-2 text-fg-muted">עבור {caseStudy.client}</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6">
              {caseStudy.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tabular-nums text-fg" dir="ltr" style={{ textAlign: "right" }}>
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-fg-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="/case-studies/fruit-delivery-system/"
              className="group inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent-strong"
            >
              לסיפור המלא, עם צילומי מסך
              <ArrowLeft size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
            </a>
          </div>
          <a
            href="/case-studies/fruit-delivery-system/"
            className="group relative block min-h-56 overflow-hidden border-t border-line lg:col-span-7 lg:border-r lg:border-t-0"
            aria-label="לסיפור המלא של מערכת תעודות המשלוח"
          >
            <img
              {...responsive("fruit-dashboard", "(min-width: 1024px) 700px, 100vw")}
              width={2560}
              height={1720}
              alt="לוח המחוונים של מערכת תעודות המשלוח (נתוני דוגמה)"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-right-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            />
          </a>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal
      as="article"
      className="relative overflow-hidden rounded-2xl border border-line bg-ink-2 bg-[linear-gradient(160deg,rgb(76_201_220/0.09),transparent_45%)]"
    >
      <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-accent">פרויקט שבנינו</p>
          <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-fg md:text-3xl">{caseStudy.title}</h3>
          <p className="mt-2 text-fg-muted">עבור {caseStudy.client}</p>
          <a
            href="/case-studies/fruit-delivery-system/"
            className="group mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent-strong"
          >
            לסיפור המלא, עם צילומי מסך
            <ArrowLeft size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>

        <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
          <div>
            <dt className="text-sm font-medium text-fg-subtle">לפני</dt>
            <dd className="mt-2 leading-relaxed text-fg-muted">{caseStudy.before}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-fg-subtle">אחרי</dt>
            <dd className="mt-2 leading-relaxed text-fg">{caseStudy.after}</dd>
          </div>
        </dl>
      </div>

      <a href="/case-studies/fruit-delivery-system/" className="group block px-8 md:px-12" aria-label="לסיפור המלא של מערכת תעודות המשלוח">
        <div className="relative h-56 overflow-hidden rounded-t-xl border border-b-0 border-line-strong md:h-80">
          <img
            {...responsive("fruit-dashboard", "(min-width: 1280px) 1120px, 92vw")}
            width={2560}
            height={1720}
            alt="לוח המחוונים של מערכת תעודות המשלוח (נתוני דוגמה)"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
          />
        </div>
      </a>

      <dl className="grid border-t border-line sm:grid-cols-3">
        {caseStudy.stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-8 py-7 md:px-12 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-r" : ""}`}
          >
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold tabular-nums text-fg md:text-4xl" dir="ltr" style={{ textAlign: "right" }}>
                {s.value}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-fg-muted">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
