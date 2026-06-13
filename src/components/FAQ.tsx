import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "ai-hybrid-uniqueness",
      question: "מה זה פיתוח היברידי מבוסס AI והאם האתר שלי יהיה ייחודי?",
      answer: "לחלוטין כן. ה-AI הוא כלי עבודה סופר-מתקדם המאפשר לנו להאיץ את תהליך הפיתוח ולדייק את הקוד. עם זאת, הארכיטקטורה, העיצוב, התוכן, השיווק והתאמת האתר באופן קונקרטי לעסק שלך נעשים באופן 100% אנושי ומותאם אישית בסטודיו שלנו. אין שכפולים או שימוש בתבניות גנריות שיש לכולם."
    },
    {
      id: "mobileness-accessibility",
      question: "האם האתר מותאם למובייל ולחוק הנגישות הישראלי?",
      answer: "כן, בהחלט. כל אתר נבנה מיומו הראשון עם רספונסיביות מלאה לחלוטין לכל סוגי המכשירים הניידים, הטאבלטים והמחשבים הנייחים. בנוסף, האתר נבנה בתקן נגישות ישראלי קשיח ת\"י 5568 רמת AA ו-WCAG 2.2, המגן על העסק שלך מפני תביעות משפטיות ומאפשר לכל גולש ליהנות מחוויית קריאה חלקה."
    },
    {
      id: "project-timeline",
      question: "כמה זמן לוקח להקים אתר פרימיום ב-HERSHTIKTEC?",
      answer: "בזכות המודל ההיברידי המתקדם שלנו, דף נחיתה איכותי וממוקד נמסר לרוב תוך 5 עד 7 ימי עסקים בלבד. אתר תדמית מרובה עמודים או חנות אונליין נבנים ונמסרים תוך 14 עד 21 ימי עסקים. כל שלבי האספקה ולוחות הזמנים מוגדרים בצורה קשיחה מראש בחוזה העבודה."
    },
    {
      id: "site-maintenance",
      question: "האם אני מקבל הדרכה על ניהול האתר ותחזוקתו?",
      answer: "בוודאי. אנו נמסור לכם סרטון הדרכה מצולם ואישי המיועד עבורכם. האתר נבנה בצורה המאפשרת עדכוני טקסט, הפקת פוסטים חדשים, שינויי תמונות וניהול פניות בדרך פשוטה ומהירה ללא צורך בידע בקוד."
    },
    {
      id: "landing-vs-website",
      question: "מה ההבדל בין דף נחיתה לאתר אינטרנט מלא?",
      answer: "דף נחיתה הוא עמוד בודד וממוקד במטרה אחת ברורה – להניע את הגולש לפעולה קונקרטית (כמו השארת פרטים בטופס או רכישת מוצר ספציפי), והוא מושלם לקמפיינים ופרסום ממומן. אתר אינטרנט מלא, לעומת זאת, הוא פלטפורמה מרובת עמודים המציגה את מגוון השירותים, ערכי המותג, סיפור העסק וערוצי יצירת קשר שונים. אתר מלא מיועד לבניית סמכות, נוכחות מקיפה בגוגל וחיבור אורגני ארוך טווח עם לקוחותיכם."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20" id="faq-badge">
            שאלות נפוצות
          </span>
          <h2 
            id="faq-heading" 
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
          >
            תשובות לכל מה שחשוב לדעת
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            רוצים לדעת איך אנחנו עובדים? ריכזנו עבורכם את התשובות לשאלות החשובות ביותר רגע לפני שמתחילים לבנות.
          </p>
        </div>

        {/* Accordion Component List */}
        <div className="space-y-4" role="presentation" id="faq-accordion-container">
          {faqs.map((faq) => {
            const isExpanded = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="overflow-hidden rounded-xl frosted-glass frosted-glass-hover"
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-right font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:bg-white/5 cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-display pr-2 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-cyan-400 shrink-0 select-none" />
                    <span>{faq.question}</span>
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {isExpanded ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                    >
                      <div className="p-6 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 bg-black/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
