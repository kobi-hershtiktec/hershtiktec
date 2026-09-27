import React, { useState } from "react";
import { Plus, WhatsappLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { FAQItem } from "../types";
import PageHeader from "./PageHeader";
import { CTA_CONTACT, EASE, WHATSAPP_URL } from "../site";

const faqs: FAQItem[] = [
  {
    id: "ai-hybrid-uniqueness",
    question: "מה זה פיתוח היברידי עם AI, והאם האתר שלי יהיה ייחודי?",
    answer:
      "כן. ה-AI הוא כלי עבודה שמאיץ את כתיבת הקוד ומדייק אותה. הארכיטקטורה, העיצוב, התוכן וההתאמה לעסק שלכם נעשים בידי אדם, מאפס. אין שכפולים ואין תבניות גנריות.",
  },
  {
    id: "mobileness-accessibility",
    question: "האם האתר מותאם לנייד ולחוק הנגישות?",
    answer:
      "כן. כל אתר נבנה מהיום הראשון לנייד, לטאבלט ולמחשב. הוא עומד בתקן הנגישות הישראלי ת״י 5568 ברמת AA וב-WCAG 2.2, כך שהעסק מוגן וכל גולש יכול להשתמש בו בנוחות.",
  },
  {
    id: "project-timeline",
    question: "כמה זמן לוקח להקים אתר?",
    answer:
      "דף נחיתה נמסר בדרך כלל תוך 5 עד 7 ימי עסקים. אתר תדמית מרובה עמודים או חנות אונליין נמסרים תוך 14 עד 21 ימי עסקים. לוחות הזמנים נקבעים מראש בחוזה.",
  },
  {
    id: "automations",
    question: "אתם בונים גם אוטומציות ומערכות, לא רק אתרים?",
    answer:
      "כן. אנחנו בונים אוטומציות שחוסכות עבודה ידנית, כמו רישום הזמנות, קריאת חשבוניות ושליחת תזכורות, וגם כלים מותאמים לעסק כשאין בשוק תוכנה שמתאימה. לא צריך לדעת מראש מה בדיוק אתם צריכים. מספיק לספר לי מה גוזל לכם זמן.",
  },
  {
    id: "landing-vs-website",
    question: "מה ההבדל בין דף נחיתה לאתר מלא?",
    answer:
      "דף נחיתה הוא עמוד אחד עם מטרה אחת: להביא את הגולש לפעולה, כמו השארת פרטים או רכישה. הוא מושלם לקמפיינים ממומנים. אתר מלא מציג את השירותים, הסיפור וערוצי הקשר של העסק, ובונה נוכחות ארוכת טווח בגוגל.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <PageHeader
              id="faq-heading"
              title="שאלות ותשובות"
              intro="מה שכדאי לדעת לפני שמתחילים. לא מצאתם תשובה? שאלו אותי ישירות."
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-base font-medium text-accent transition-colors hover:text-accent-strong"
                aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={20} aria-hidden="true" />
                {CTA_CONTACT}
              </a>
            </PageHeader>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-line border-y border-line" id="faq-accordion-container">
            {faqs.map((faq) => {
              const isExpanded = openId === faq.id;
              return (
                <div key={faq.id} id={`faq-item-${faq.id}`}>
                  <h2>
                    <button
                      onClick={() => setOpenId(isExpanded ? null : faq.id)}
                      className="group flex w-full items-start justify-between gap-6 py-7 text-right"
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-btn-${faq.id}`}
                    >
                      <span className="text-lg font-medium leading-snug text-fg md:text-xl">{faq.question}</span>
                      <Plus
                        size={22}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 text-fg-muted transition-transform duration-300 ease-out-expo group-hover:text-fg ${
                          isExpanded ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[62ch] pb-8 leading-relaxed text-fg-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
