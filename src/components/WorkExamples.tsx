import React from "react";
import { ArrowUpLeft } from "@phosphor-icons/react";
import Reveal from "./Reveal";

// Real shipped sites and live interactive demos, shown under the websites track.
const examples = [
  { title: "Hershtik Capital", kind: "אתר תדמית", image: "/work/hershtik-capital.jpg", link: "https://www.hershtikcapital.com/" },
  { title: "חוויית גלילה בסגנון אפל", kind: "דמו אינטראקטיבי", image: "/work/scroll-demo.jpg", link: "https://kobi-hershtiktec.github.io/scroll-demo/" },
  { title: "AURA", kind: "חנות אונליין", image: "/work/aura.jpg", link: "https://kobi-hershtiktec.github.io/Aura/" },
  { title: "חשיפת מוצר בתלת-ממד", kind: "דמו אינטראקטיבי", image: "/work/camera-reveal.jpg", link: "https://kobi-hershtiktec.github.io/camera-reveal/" },
  { title: "י.ב שיפוצים", kind: "אתר תדמית", image: "/work/by-renovations.jpg", link: "https://kobi-hershtiktec.github.io/B.Y-renovations/" },
];

export default function WorkExamples() {
  return (
    <div className="mt-6 border-t border-line pt-12">
      <Reveal>
        <h3 className="text-xl font-semibold text-fg">דוגמאות ממה שבנינו</h3>
        <p className="mt-2 text-fg-muted">אתרים שעלו לאוויר, ודמואים שמראים מה אפשר לעשות עם אנימציה ותלת-ממד.</p>
      </Reveal>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
        {examples.map((ex, i) => (
          <Reveal key={ex.title} delay={(i % 3) * 0.06} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
            <a
              href={ex.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`${ex.title}, ${ex.kind} (נפתח בחלון חדש)`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-2">
                <img
                  src={ex.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-fg">{ex.title}</p>
                  <p className="mt-0.5 text-sm text-fg-muted">{ex.kind}</p>
                </div>
                <ArrowUpLeft
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-fg-subtle transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
