import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ChatsCircle, PencilRuler, Code, RocketLaunch } from "@phosphor-icons/react";
import Reveal from "./Reveal";

const stages = [
  {
    icon: ChatsCircle,
    title: "שיחת היכרות",
    body: "שיחה קצרה בוואטסאפ או בטלפון. מבינים את העסק, הלקוחות והמטרה, ותקבלו הצעת מחיר קבועה ולוח זמנים.",
    bring: "לוגו, אם יש, וכמה אתרים שאהבתם",
  },
  {
    icon: PencilRuler,
    title: "עיצוב",
    body: "עיצוב של עמוד הבית שמותאם למותג שלכם. מאשרים יחד את הכיוון לפני שכותבים שורת קוד.",
    bring: "משוב כנה על העיצוב",
  },
  {
    icon: Code,
    title: "פיתוח",
    body: "בניית האתר, התאמה לנייד ונגישות. תקבלו קישור צפייה ותוכלו לעקוב אחרי ההתקדמות.",
    bring: "טקסטים ותמונות של העסק",
  },
  {
    icon: RocketLaunch,
    title: "עלייה לאוויר",
    body: "חיבור לדומיין, בדיקות מהירות ונגישות אחרונות, והאתר באוויר. גם אחרי ההשקה אנחנו כאן.",
    bring: "גישה לדומיין, ונעשה את השאר",
  },
];

export default function Process() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  // The timeline fills as the steps scroll into view, showing the order of the process.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            איך זה עובד
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            מהשיחה הראשונה ועד שהאתר באוויר. דף נחיתה תוך 5 עד 7 ימי עסקים, ואתר מלא תוך 14 עד 21 ימי עסקים, לפי לוח זמנים שנקבע יחד מראש.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* Timeline track + scroll-driven fill (desktop) */}
          <div aria-hidden="true" className="absolute inset-x-0 top-6 hidden h-px bg-line lg:block">
            <motion.div
              className="h-full origin-right bg-accent"
              style={{ scaleX: reduce ? 1 : progress }}
            />
          </div>

          <ol ref={listRef} className="relative grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <Reveal as="li" key={stage.title} delay={i * 0.1}>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-line-strong bg-ink-2 text-accent shadow-[0_0_0_6px_var(--color-ink)]">
                    <Icon size={24} weight="duotone" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-fg">{stage.title}</h3>
                  <p className="mt-3 leading-relaxed text-fg-muted">{stage.body}</p>
                  <p className="mt-5 text-sm text-fg-subtle">
                    <span className="text-fg-muted">מה צריך מכם: </span>
                    {stage.bring}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
