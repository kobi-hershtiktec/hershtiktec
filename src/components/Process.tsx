import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { EASE } from "../site";

const stages = [
  {
    title: "שיחת היכרות",
    body: "שיחה קצרה בוואטסאפ או בטלפון. מבינים את העסק, הלקוחות והמטרה, ותקבלו הצעת מחיר קבועה ולוח זמנים.",
    bring: "לוגו, אם יש, וכמה אתרים שאהבתם",
  },
  {
    title: "עיצוב",
    body: "עיצוב של עמוד הבית שמותאם למותג שלכם. מאשרים יחד את הכיוון לפני שכותבים שורת קוד.",
    bring: "משוב כנה על העיצוב",
  },
  {
    title: "פיתוח",
    body: "בניית האתר, התאמה לנייד ונגישות. תקבלו קישור צפייה ותוכלו לעקוב אחרי ההתקדמות.",
    bring: "טקסטים ותמונות של העסק",
  },
  {
    title: "עלייה לאוויר",
    body: "חיבור לדומיין, בדיקות מהירות ונגישות אחרונות, והאתר באוויר. גם אחרי ההשקה אנחנו כאן.",
    bring: "גישה לדומיין, ונעשה את השאר",
  },
];

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            איך זה עובד
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            מהשיחה הראשונה ועד שהאתר באוויר. דף נחיתה תוך 5-7 ימי עסקים, אתר מלא תוך 14-21.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.title} delay={i * 0.08} className="relative border-t border-line pt-8">
              {/* Accent segment draws in sequence to show order */}
              <motion.span
                aria-hidden="true"
                className="absolute -top-px right-0 h-px w-16 origin-right bg-accent"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: EASE }}
              />
              <h3 className="text-xl font-semibold text-fg">{stage.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{stage.body}</p>
              <p className="mt-5 text-sm text-fg-subtle">
                <span className="text-fg-muted">מה צריך מכם: </span>
                {stage.bring}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
