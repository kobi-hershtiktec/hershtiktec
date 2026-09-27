import React from "react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";

const values = [
  {
    title: "אמינות של מילואימניק",
    description:
      "שירות מילואים פעיל לימד אותנו משמעת, יושרה ומחויבות למשימה. אותם ערכים מלווים כל פרויקט.",
  },
  {
    title: "דיוק תחת לחץ",
    description:
      "כשהתנאים משתנים, מוצאים פתרון. קוד מדויק, עמידה ביעדים ובלי תירוצים.",
  },
  {
    title: "שותפות לעסק קטן",
    description:
      "אנחנו לא עובדים בשיטת שגר ושכח. מלווים אתכם, מבינים את יעדי השיווק ובונים אתר שמביא פניות.",
  },
];

const reasons = [
  {
    title: "לוח זמנים קבוע",
    body: "האתר נמסר בתאריך שסגרנו מראש, במחיר שסגרנו מראש.",
    tone: "accent",
  },
  {
    title: "בלי אלמנטור ותוספים כבדים",
    body: "קוד נקי וקל שנכתב ביד, נטען מהר בנייד ואהוב על גוגל.",
    tone: "plain",
  },
  {
    title: "נגישות לפי החוק",
    body: "התאמה לתקנות שוויון זכויות לאנשים עם מוגבלות (ת״י 5568).",
    tone: "plain",
  },
  {
    title: "זמינות גם מהשטח",
    body: "גם בזמן מילואים יש גיבוי ותמיכה טכנית רציפה לאתר שלכם.",
    tone: "raised",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <PageHeader id="about-heading" title="האנשים מאחורי הקוד" />
            <Reveal className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-fg-muted">
              <p>
                מאחורי <strong className="font-semibold text-fg">HERSHTIKTEC</strong> עומד קובי הרשטיק: ארכיטקט
                פתרונות דיגיטליים, מפתח, ו<strong className="font-semibold text-fg">מילואימניק פעיל</strong> בחטיבה
                לוחמת. את הרעות, המקצועיות וההתגייסות למשימה אנחנו מביאים ישר לתוך הקוד של האתר שלכם.
              </p>
              <p>
                קוד טוב הוא עבודה של בני אדם. בזמן שרבים מדביקים פתרונות AI גנריים, אנחנו משקיעים בתכנון, בארכיטקטורה
                ובהתאמה האישית שכל עסק צריך.
              </p>
            </Reveal>
            <Reveal delay={0.1} as="div" className="mt-10 border-r-2 border-accent pr-6">
              <blockquote className="text-xl leading-relaxed text-fg md:text-2xl">
                ה-AI הוא כלי שמאיץ את העבודה. התכנון, העיצוב, הנגישות והמילים נשארים אנושיים.
              </blockquote>
              <p className="mt-3 text-sm text-fg-muted">קובי הרשטיק, מייסד</p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-4">
            <figure className="mx-auto max-w-sm lg:mr-auto lg:ml-0">
              <div className="relative aspect-square">
                <div
                  aria-hidden="true"
                  className="absolute inset-[-12%] rounded-full bg-[radial-gradient(closest-side,rgb(76_201_220/0.14),transparent)]"
                />
                <img
                  src="/kobi.png"
                  alt="קובי הרשטיק, מייסד HERSHTIKTEC"
                  className="relative h-full w-full rounded-full object-cover ring-1 ring-line-strong"
                  width={953}
                  height={953}
                />
              </div>
              <figcaption className="mt-8 text-center lg:text-right">
                <span className="block text-2xl font-semibold text-fg">קובי הרשטיק</span>
                <span className="mt-1 block text-fg-muted">מייסד הסטודיו, מילואימניק גאה</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 id="values-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              איך אנחנו עובדים
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="grid gap-2 py-8 md:grid-cols-12 md:gap-10">
                <dt className="text-lg font-semibold text-fg md:col-span-4">{v.title}</dt>
                <dd className="max-w-[60ch] leading-relaxed text-fg-muted md:col-span-8">{v.description}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8" aria-labelledby="reasons-heading">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 id="reasons-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              למה לבחור ב-HERSHTIKTEC
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 0.05}
                className={`rounded-2xl p-8 md:p-10 ${
                  i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                } ${
                  r.tone === "accent"
                    ? "bg-accent text-on-accent"
                    : r.tone === "raised"
                      ? "border border-line bg-[linear-gradient(135deg,rgb(76_201_220/0.10),transparent_60%)] bg-ink-2"
                      : "border border-line bg-ink-2"
                }`}
              >
                <h3 className={`text-xl font-semibold md:text-2xl ${r.tone === "accent" ? "" : "text-fg"}`}>{r.title}</h3>
                <p className={`mt-3 max-w-[48ch] leading-relaxed ${r.tone === "accent" ? "text-on-accent/80" : "text-fg-muted"}`}>
                  {r.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
