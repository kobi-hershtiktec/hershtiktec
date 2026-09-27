import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import { caseStudy } from "../solutions";

// Full case study: delivery-certificate + invoice-analysis system.
// Screenshots were taken from a local copy of the app running on fictional demo data.

function Shot({ src, alt, host = "fruit-certificates.app", className = "" }: { src: string; alt: string; host?: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-line-strong bg-ink-2 shadow-[0_40px_120px_-50px_rgb(0_0_0/0.9)] ${className}`}>
      <div className="flex h-8 items-center justify-center border-b border-line bg-ink-3/80">
        <span className="font-mono text-[11px] text-fg-subtle" dir="ltr">{host}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </figure>
  );
}

const features = [
  {
    title: "תעודת משלוח בחצי דקה",
    body: "בוחרים לקוח, פרי וגודל, ומקלידים כמה קרטונים יצאו. המערכת מחשבת לבד כמה פירות או כמה קילו יש בתעודה, מציעה את מספר התעודה הבא ושומרת הכול בגיליון.",
    points: ["אננס לפי יחידות, קובו, ליצי ופיטאיה לפי משקל", "הדפסה והורדה של התעודה", "תעודה שהופקה ננעלת לעריכה, לפי כללי ניהול ספרים"],
  },
  {
    title: "החשבונית נקראת לבד",
    body: "מעלים את קובץ ה-PDF שהמשווק שלח. המערכת קוראת כל שורה, מתאימה אותה לתעודת המשלוח הנכונה, מחשבת עמלה ומחיר נטו, ומצליבה את הסכום מול סך החשבונית.",
    points: ["תומכת בשני פורמטים של חשבוניות משווקים", "עשרות חשבוניות בהעלאה אחת", "מה שלא ברור לא נכתב לבד. הוא מוצג לאישור בלחיצה"],
  },
  {
    title: "כל התמונה במסך אחד",
    body: "לוח מחוונים שמראה כמה נשלח לכל לקוח, כמה שולם, כמה עמלה ירדה, ואילו משלוחים עדיין מחכים לחשבונית. עובד גם מהנייד, ישר מהשטח.",
    points: ["סיכום לפי לקוח ולפי פרי", "מחיר ממוצע לכל גודל", "התראה על מחירים חריגים"],
  },
];

export default function CaseFruit() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 md:pt-16 lg:px-8" aria-labelledby="case-heading">
        <div className="mx-auto max-w-7xl">
          <a href="#services" className="group mb-10 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg">
            <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            חזרה לשירותים
          </a>
          <PageHeader
            id="case-heading"
            title={caseStudy.title}
            intro={`מערכת שבנינו עבור ${caseStudy.client}, שהחליפה שעות של בדיקה ידנית בכמה שניות של העלאת קובץ.`}
          />
          <Reveal delay={0.1} className="mt-14">
            <Shot src="/work/fruit/dashboard.jpg" alt="לוח המחוונים של המערכת: סיכומים, משלוחים שמחכים לחשבונית וסיכום לפי לקוח" />
            <p className="mt-3 text-sm text-fg-subtle">הצילומים מציגים נתוני דוגמה. שמות הלקוחות והסכומים אינם אמיתיים.</p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="case-problem">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-line pt-16 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <h2 id="case-problem" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              הבעיה
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-lg leading-relaxed text-fg-muted md:col-span-7">
            <p>{caseStudy.before}</p>
            <p>
              כל משווק שולח חשבונית בפורמט אחר, חלק מהשורות מפוצלות בין כמה תעודות, ולפעמים הכמות שחויבה שונה ממה שנשלח. טעות
              אחת קטנה, והכסף פשוט לא נספר.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature 1: form, image beside text */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="case-f1">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="case-f1" className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">{features[0].title}</h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{features[0].body}</p>
            <ul className="mt-6 space-y-3">
              {features[0].points.map((pt) => (
                <li key={pt} className="border-r-2 border-accent/60 pr-4 text-fg">{pt}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <Shot src="/work/fruit/certificate.jpg" alt="טופס תעודת משלוח: לקוח, פרי, גודל ומספר קרטונים, עם חישוב אוטומטי של מספר הפירות" />
          </Reveal>
        </div>
      </section>

      {/* Feature 2: invoice, full-width image under text */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="case-f2">
        <div className="mx-auto max-w-7xl rounded-2xl border border-line bg-ink-2 p-6 md:p-12">
          <Reveal className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <h2 id="case-f2" className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">{features[1].title}</h2>
              <p className="mt-4 leading-relaxed text-fg-muted">{features[1].body}</p>
            </div>
            <ul className="space-y-3 self-end md:col-span-6">
              {features[1].points.map((pt) => (
                <li key={pt} className="border-r-2 border-accent/60 pr-4 text-fg">{pt}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <Shot src="/work/fruit/invoice.jpg" alt="מסך ניתוח חשבונית: הצלבה מול סכום החשבונית, שורה שדורשת אישור, וטבלת השורות שעודכנו" />
          </Reveal>
        </div>
      </section>

      {/* Feature 3: dashboard on mobile */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="case-f3">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 id="case-f3" className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">{features[2].title}</h2>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-fg-muted">{features[2].body}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {features[2].points.map((pt) => (
                <li key={pt} className="rounded-2xl border border-line bg-ink-2 p-5 text-fg">{pt}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <div className="mx-auto w-[62%] max-w-[260px] overflow-hidden rounded-[1.9rem] border-[6px] border-ink-3 bg-ink-3 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.9)] ring-1 ring-line-strong">
              <img
                src="/work/fruit/dashboard-mobile.jpg"
                alt="לוח המחוונים בנייד"
                loading="lazy"
                className="block w-full rounded-[1.4rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8" aria-labelledby="case-results">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 id="case-results" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              התוצאה
            </h2>
          </Reveal>
          <dl className="mt-10 grid border-y border-line sm:grid-cols-3">
            {caseStudy.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className={`py-8 sm:pe-8 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-r sm:ps-8" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-4xl font-semibold tabular-nums text-fg md:text-5xl" dir="ltr" style={{ textAlign: "right" }}>
                    {s.value}
                  </span>
                  <span className="mt-3 block leading-relaxed text-fg-muted">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-12 grid gap-6 md:grid-cols-12">
            <h3 className="text-lg font-semibold text-fg md:col-span-4">איך זה בנוי</h3>
            <p className="max-w-[60ch] leading-relaxed text-fg-muted md:col-span-8">
              אפליקציית ווב שעובדת מכל דפדפן, בלי התקנה. הנתונים נשמרים בגוגל שיטס של הלקוח, כך שהוא יכול לפתוח אותם גם בלי
              המערכת, והכניסה מוגנת בסיסמה. האירוח חינמי, ולכן אין עלות חודשית.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
