import React from "react";
import { Browsers, Cpu, Wheelchair, FlowArrow, Wrench, Check } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import CaseStudy from "./CaseStudy";
import WorkExamples from "./WorkExamples";

type Service = {
  id: string;
  icon: typeof Browsers;
  title: string;
  description: string;
  features: string[];
  stack: string;
};

const websiteServices: Service[] = [
  {
    id: "marketing-sites",
    icon: Browsers,
    title: "אתרי תדמית ודפי נחיתה",
    description:
      "עיצוב מקורי שנבנה סביב המותג שלכם, ומבנה שמוביל את הגולש מהביקור הראשון לפנייה.",
    features: [
      "עיצוב UI/UX מקורי, בלי תבניות משוכפלות",
      "התאמה מלאה לנייד, לטאבלט ולמחשב",
      "חיבור לאנליטיקס ולפיקסלים למדידת תוצאות",
      "דפי נחיתה קלים ומהירים לקמפיינים ממומנים",
    ],
    stack: "React / Vite / Tailwind CSS / Motion",
  },
  {
    id: "ai-hybrid-dev",
    icon: Cpu,
    title: "פיתוח היברידי עם AI",
    description:
      "כלי AI מאיצים את כתיבת הקוד. התכנון, העיצוב והבקרה נשארים בידיים של מפתח אנושי.",
    features: [
      "ארכיטקטורת קוד נקייה ובטוחה",
      "זמני אספקה קצרים משמעותית מסוכנות רגילה",
      "פתרונות מותאמים לתהליכים של העסק",
      "החיסכון בזמן עובר אליכם במחיר",
    ],
    stack: "TypeScript / Node.js / Gemini / REST APIs",
  },
  {
    id: "accessibility-perf",
    icon: Wheelchair,
    title: "נגישות ומהירות",
    description:
      "עמידה בתקן הנגישות הישראלי ת״י 5568 ברמת AA, וזמני טעינה שגוגל והגולשים אוהבים.",
    features: [
      "תמיכה מלאה בקוראי מסך ובניווט מקלדת",
      "ציון 95+ בכלי המדידה של Google",
      "עמידה בחוק הנגישות ומניעת חשיפה לתביעות",
      "בסיס טכני נכון לקידום אורגני (SEO)",
    ],
    stack: "WCAG 2.2 AA / ת״י 5568 / Lighthouse / Core Web Vitals",
  },
];

const timeServices: Service[] = [
  {
    id: "automations",
    icon: FlowArrow,
    title: "אוטומציות לעסק",
    description:
      "מחברים בין הכלים שכבר יש לכם, כמו וואטסאפ, מייל וגוגל שיטס, כדי שעבודה שחוזרת על עצמה תקרה לבד.",
    features: [
      "הזמנות ופניות שנרשמות אוטומטית בטבלה",
      "קריאת חשבוניות ומסמכי PDF והזנת הנתונים",
      "תזכורות, אישורים והודעות ללקוחות",
      "דוחות וסיכומים שמגיעים אליכם בזמן קבוע",
    ],
    stack: "Google Sheets / WhatsApp / PDF / APIs",
  },
  {
    id: "custom-tools",
    icon: Wrench,
    title: "כלים ואפליקציות מותאמים",
    description:
      "כשאין בשוק תוכנה שמתאימה בדיוק, בונים אחת. מערכת פשוטה שעובדת כמו שאתם עובדים, מהנייד ומהמחשב.",
    features: [
      "ממשק בעברית, פשוט לשימוש יומיומי",
      "עובד בנייד ובמחשב, בלי התקנה",
      "הנתונים נשארים אצלכם, למשל בגוגל שיטס",
      "עלות תחזוקה נמוכה, לפעמים אפסית",
    ],
    stack: "Next.js / TypeScript / Google Sheets API",
  },
];

function ServiceRow({ service, index }: { service: Service; index: number; key?: React.Key }) {
  const Icon = service.icon;
  return (
    <Reveal
      as="article"
      delay={index * 0.05}
      className="grid gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-10 md:py-14"
    >
      <div className="md:col-span-5">
        <Icon size={30} weight="light" className="text-accent" aria-hidden="true" />
        <h3 id={`service-${service.id}`} className="mt-5 text-2xl font-semibold tracking-tight text-fg">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[44ch] leading-relaxed text-fg-muted">{service.description}</p>
      </div>
      <div className="md:col-span-7">
        <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2" aria-labelledby={`service-${service.id}`}>
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-fg">
              <Check size={18} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-xs text-fg-subtle" dir="ltr" style={{ textAlign: "right" }}>
          {service.stack}
        </p>
      </div>
    </Reveal>
  );
}

function GroupHeading({ id, title, sub }: { id: string; title: string; sub: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-lg leading-relaxed text-fg-muted">{sub}</p>
    </Reveal>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" className="px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <PageHeader
            id="services-heading"
            title="מה אנחנו בונים"
            intro="שני דברים שכל עסק קטן צריך: אתר שמביא לקוחות, ופתרונות שחוסכים לכם זמן."
          />

          <section className="mt-20 md:mt-28" aria-labelledby="group-websites">
            <GroupHeading
              id="group-websites"
              title="אתרים שמביאים לקוחות"
              sub="אתר שנראה טוב, נטען מהר ונגיש לכל אחד, כחוק."
            />
            {websiteServices.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
            <WorkExamples />
          </section>

          <section className="mt-20 md:mt-28" aria-labelledby="group-time">
            <GroupHeading
              id="group-time"
              title="פתרונות שחוסכים זמן"
              sub="לא בטוחים מה אתם צריכים? ספרו לי מה גוזל לכם הכי הרבה זמן, ונמצא יחד את הפתרון."
            />
            {timeServices.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
            <div className="mt-6">
              <CaseStudy />
            </div>
          </section>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
