import React from "react";
import Reveal from "./Reveal";
import { caseStudy } from "../solutions";

// Real delivered system, anonymized. Numbers come from the project's own verification runs.
export default function CaseStudy() {
  return (
    <Reveal
      as="article"
      className="relative overflow-hidden rounded-2xl border border-line bg-ink-2 bg-[linear-gradient(160deg,rgb(76_201_220/0.09),transparent_45%)]"
    >
      <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-accent">מקרה אמיתי</p>
          <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-fg md:text-3xl">{caseStudy.title}</h3>
          <p className="mt-2 text-fg-muted">עבור {caseStudy.client}</p>
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
