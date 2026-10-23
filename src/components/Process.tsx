import React from "react";
import Reveal from "./Reveal";

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

// The process as plain rows (title / what happens / what we need from you), not an icon grid.
export default function Process() {
  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="process-heading">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            איך זה עובד
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            מהשיחה הראשונה ועד שהאתר באוויר. דף נחיתה תוך 5 עד 7 ימי עסקים, ואתר מלא תוך 14 עד 21 ימי עסקים, לפי לוח זמנים שנקבע יחד מראש.
          </p>
        </Reveal>

        <ol className="border-t border-line lg:col-span-8">
          {stages.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.title}
              delay={i * 0.06}
              className="grid gap-3 border-b border-line py-8 sm:grid-cols-[3rem_1fr] sm:gap-6"
            >
              <span className="text-sm font-medium tabular-nums text-fg-subtle" dir="ltr">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-fg md:text-2xl">{stage.title}</h3>
                <p className="mt-3 max-w-[60ch] leading-relaxed text-fg-muted">{stage.body}</p>
                <p className="mt-4 text-sm text-fg-subtle">
                  <span className="font-medium text-fg-muted">מה צריך מכם: </span>
                  {stage.bring}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
