import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import { solutionIcons } from "./solutionIcons";
import CaseStudy from "./CaseStudy";
import CtaBand from "./CtaBand";
import { ServiceRow, timeServices } from "./Services";
import { solutionExamples, solutionsWhatsappText } from "../solutions";
import { CTA_AUTOMATION, whatsappWith } from "../site";

const steps = [
  { title: "מספרים מה גוזל זמן", body: "שיחה קצרה על העבודה הידנית שחוזרת על עצמה בעסק. לא צריך לדעת מה הפתרון, רק מה מעצבן." },
  { title: "ממפים את התהליך", body: "מבינים מאיפה המידע מגיע, לאן הוא צריך להגיע ומה קורה באמצע. תקבלו הצעה ומחיר קבוע." },
  { title: "בונים ובודקים", body: "הפתרון נבנה ונבדק על נתונים אמיתיים שלכם, עד שהתוצאה מדויקת." },
  { title: "מטמיעים ומלווים", body: "מראים לכם איך עובדים עם זה, ונשארים זמינים לשאלות ולשיפורים." },
];

const questions = [
  {
    q: "צריך להחליף את התוכנות שיש לי?",
    a: "ברוב המקרים לא. מחברים את מה שכבר עובד אצלכם, כמו גוגל שיטס, וואטסאפ ומייל, ומוסיפים רק את מה שחסר.",
  },
  {
    q: "כמה זה עולה?",
    a: "זה תלוי בהיקף. אחרי שיחה קצרה תקבלו הצעת מחיר קבועה. חלק מהפתרונות רצים בלי שום עלות חודשית.",
  },
  {
    q: "מה קורה אם משהו לא ברור למערכת?",
    a: "מערכת טובה לא מנחשת. כשמשהו לא ברור, היא עוצרת ומבקשת אישור במקום לכתוב נתון שגוי.",
  },
];

export default function Automations() {
  return (
    <>
      <section className="px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8" aria-labelledby="automations-heading">
        <div className="mx-auto max-w-7xl">
          <PageHeader
            id="automations-heading"
            title="אוטומציות וכלים מותאמים לעסקים קטנים"
            intro="עבודה שחוזרת על עצמה כל יום? אפשר לתת למחשב לעשות אותה. אנחנו מחברים בין הכלים שכבר יש לכם, ובונים כלי חדש כשצריך."
          >
            <a
              href={whatsappWith(solutionsWhatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-center text-base font-semibold leading-snug text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
              aria-label={`${CTA_AUTOMATION}: שיחה על אוטומציה לעסק בוואטסאפ (נפתח בחלון חדש)`}
            >
              <WhatsappLogo size={24} weight="bold" aria-hidden="true" className="shrink-0" />
              {CTA_AUTOMATION}
            </a>
          </PageHeader>

          <section className="mt-20 md:mt-28" aria-labelledby="auto-examples">
            <Reveal>
              <h2 id="auto-examples" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                מה אפשר להפוך לאוטומטי
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {solutionExamples.map((ex, i) => (
                <Reveal as="li" key={ex.pain} delay={(i % 2) * 0.06} className="border-t border-line py-8">
                  {(() => {
                  const Icon = solutionIcons[i];
                  return <Icon size={26} weight="duotone" className="mb-4 text-accent" aria-hidden="true" />;
                })()}
                <p className="text-xl font-medium text-fg">{ex.pain}</p>
                  <p className="mt-2 text-lg leading-relaxed text-fg-muted">{ex.result}</p>
                </Reveal>
              ))}
            </ul>
          </section>

          <section className="mt-16 md:mt-24" aria-label="סוגי הפתרונות">
            {timeServices.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
          </section>

          <div className="mt-8">
            <CaseStudy />
          </div>

          <section className="mt-24 md:mt-32" aria-labelledby="auto-steps">
            <Reveal className="max-w-2xl">
              <h2 id="auto-steps" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                איך זה עובד
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((st, i) => (
                <Reveal as="li" key={st.title} delay={i * 0.06} className="border-t border-line pt-7">
                  <h3 className="text-xl font-semibold text-fg">{st.title}</h3>
                  <p className="mt-3 leading-relaxed text-fg-muted">{st.body}</p>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="mt-24 md:mt-32" aria-labelledby="auto-faq">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-4">
                <h2 id="auto-faq" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                  שאלות שחוזרות
                </h2>
              </Reveal>
              <dl className="divide-y divide-line border-y border-line md:col-span-8">
                {questions.map((item, i) => (
                  <Reveal key={item.q} delay={i * 0.05} className="py-7">
                    <dt className="text-lg font-medium text-fg">{item.q}</dt>
                    <dd className="mt-2 max-w-[62ch] leading-relaxed text-fg-muted">{item.a}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
