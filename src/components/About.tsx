import React from "react";
import { ShieldCheck, Heart, Users, Target, Zap, Rocket } from "lucide-react";
import { motion } from "motion/react";
import logoSvg from "@/logo.svg";

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
      title: "אמינות וערכי ברזל של מילואימניק",
      description: "מתוך שירות מילואים אקטיבי ביחידות טכנולוגיות ומבצעיות, אנו מביאים איתנו משמעת עצמית גבוהה, יושרה בלתי מתפשרת ומחויבות מוחלטת לביטחון השקט של הלקוח."
    },
    {
      icon: <Target className="h-6 w-6 text-cyan-400" />,
      title: "עבודה תחת לחץ ודיוק תפעולי",
      description: "בדיוק כמו במילואים, שבהם תפוסי המציאות משתנים ברגע, אנו מומחים במציאת פתרונות יצירתיים, הנדסת קוד מדויקת ביותר, ועמידה ביעדים מחמירים בלי תירוצים."
    },
    {
      icon: <Heart className="h-6 w-6 text-cyan-400" />,
      title: "שותפות אמיתית לעסק קטן",
      description: "אנו לא סוכנות שעובדת בשיטת 'שגר ושכח'. אנו מלווים אתכם יד ביד, מנתחים את יעדי המכירות והשיווק שלכם, והופכים את האתר לכלי שמייצר הכנסות פסיביות ואמינות."
    }
  ];

  return (
    <section 
      id="about" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative"
      aria-labelledby="about-heading"
    >
      {/* Abstract background graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      {/* Subtle background slow-spinning logo watermark */}
      <div className="absolute right-[-8%] bottom-[8%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] opacity-[0.012] pointer-events-none select-none z-0 overflow-hidden">
        <motion.img 
          src={logoSvg} 
          alt="" 
          className="w-full h-full object-contain filter invert opacity-60"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 160, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-layout-grid">
          
          {/* Column 1: Copywriting (7 columns on desktop) */}
          <div className="lg:col-span-7" id="about-text-content">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20" id="about-badge">
              קצת עלינו ועל הערכים
            </span>
            <h2 
              id="about-heading" 
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
            >
              האנשים מאחורי הקוד: הנדסה קפדנית, אמינות ישראלית
            </h2>
            
            <div className="mt-6 text-slate-300 text-base leading-relaxed space-y-4">
              <p>
                מאחורי המותג <strong>HERSHTIKTEC</strong> עומד צוות פיתוח מקצועי ומחויב בהובלת קובי הרשטיק - מהנדס תוכנה מנוסה, ארכיטקט מערכות, ו<strong>מילואימניק פעיל</strong> בחטיבה לוחמת. אנו מביאים את ערכי הרעות, המקצועיות ללא פשרות, וההתגייסות המלאה למשימה - היישר אל תוך תהליך כתיבת הקוד של האתר שלכם.
              </p>
              <p>
                אנו מאמינים כי קוד הוא יצירה אנושית. בעידן שבו כולם רצים להדביק פתרונות AI גנריים וזולים, אנו ב-HERSHTIKTEC משקיעים את המחשבה, האדריכלות וההתאמה האישית שכל עסק כה זקוק לה. 
              </p>
              <p className="border-r-2 border-cyan-500 pr-4 italic text-slate-400">
                &quot;עבורנו, ה-AI הוא כלי עזר סופר-מתוחכם להאצת פיתוח המכניקה, אך הלב, המוח, הנגישות, עיצוב ה-UI העדין והמילים המוכרות - כולם 100% פרי תכנון הנדסי אנושי המבוצע ברזולוציה הגבוהה ביותר.&quot;
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="mt-12 space-y-6" id="about-values">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 items-start" id={`about-value-${idx}`}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10" aria-hidden="true">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">{val.title}</h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Visual High-Tech Reservist/Tech Card (5 columns on desktop) */}
          <div className="lg:col-span-5" id="about-visual-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl p-8 shadow-2xl frosted-glass"
            >
              {/* Corner tech lines */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-500/60 rounded-tr" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-500/60 rounded-bl" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">הצהרת כוונות ושירות</span>
              </div>

              <h3 className="text-lg font-bold text-white font-display mb-4">
                למה לבחור דווקא ב-HERSHTIKTEC?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono">01/</span>
                  <p><strong>משמעת זמן קשוחה:</strong> האתר שלכם יבוצע ויימסר בזמן קבוע מראש, ללא שינויי מחיר או עיכובים מיותרים.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono">02/</span>
                  <p><strong>בלי קוד מלוכלך:</strong> אנו לא משתמשים באלמנטור או תוספים כבדים שמאטים את הנייד. קוד ה-React ו-Tailwind שלנו קל, נקי ומהיר במיוחד לגוגל.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono">03/</span>
                  <p><strong>חסינות מסנקציות ותביעות:</strong> התאמה קשיחה לתקנות חוק שוויון זכויות לאנשים עם מוגבלות (ת&quot;י 5568).</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono">04/</span>
                  <p><strong>זמינות גם מהשטח:</strong> גם כשאנו משרתים את המדינה במילואים, המערך שלנו מגובה ומאובטח כדי לספק תמיכה טכנית רציפה בחירום ובשמונים אחוז זמינות.</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-slate-500">מייסד הסטודיו</span>
                  <span className="text-sm font-bold text-slate-200">קובי הרשטיק</span>
                </div>
                <span className="rounded bg-slate-950 px-2.5 py-1 text-[11px] font-bold text-cyan-400 border border-slate-800">
                  מילואימניק גאה 🇮🇱
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
