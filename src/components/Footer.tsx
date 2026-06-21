import React from "react";
import { MessageSquare, Phone, Mail, FileText, ChevronUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/972505712342?text=שלום%20רב,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20בניית%20אתר%20פרימיום%20מ-HERSHTIKTEC";

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-bg border-t border-slate-900 py-16 text-slate-400 text-sm" id="global-site-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12" id="footer-links-grid">
          
          {/* Logo and Pitch (4 Columns) */}
          <div className="md:col-span-5 space-y-4" id="footer-logo-panel">
            <Logo className="h-10" />
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              סטודיו בוטיק ישראלי מתקדם לפיתוח אתרי אינטרנט מהירים וחדשניים לעסקים קטנים ובינוניים. אנו מספקים מענה שלם, נגישות מקצה לקצה ועמידה בלתי מתפשרת באיכות הקוד ובצרכים העסקיים שלכם.
            </p>
            {/* National/Patriotic signature */}
            <div className="inline-flex items-center gap-2 rounded bg-white/5 px-3 py-1.5 text-xs text-slate-300 border border-white/10">
              <span>תוצרת כחול-לבן 🇮🇱</span>
            </div>
          </div>

          {/* Links Column 1: Navigation (3 Columns) */}
          <div className="md:col-span-3 space-y-3" id="footer-nav-panel">
            <h4 className="text-white font-bold font-display text-[15px]">קיצורי דרך באתר</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors py-1 block">דף הבית (ראשי)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors py-1 block">השירותים שלנו</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors py-1 block">תיק עבודות ופרויקטים</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors py-1 block">מי אנחנו והאנשים שמאחורי</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors py-1 block">שאלות נפוצות ותשובות</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors py-1 block font-semibold text-brand-cyan/90">צור קשר</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal/Compliance (2 Columns) */}
          <div className="md:col-span-2 space-y-3" id="footer-compliance-panel">
            <h4 className="text-white font-bold font-display text-[15px]">נגישות ותקנון</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors py-1 block flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  <span>הצהרת נגישות (ת&quot;י 5568)</span>
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors py-1 block flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  <span>תנאי שימוש באתר</span>
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors py-1 block flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  <span>מדיניות פרטיות</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Shortcuts & Navigation (2 Columns) */}
          <div className="md:col-span-2 space-y-3 flex flex-col justify-between" id="footer-social-panel">
            {/* Scroll straight to top */}
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer py-1"
              aria-label="חזרה לראש האתר"
            >
              <ChevronUp className="h-4 w-4" />
              <span>חזור לראש העמוד</span>
            </button>
          </div>

        </div>

        {/* Lower Footer Bottom section */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="footer-copyright-panel">
          <p>
            כל הזכויות שמורות © {currentYear} ל-<strong>HERSHTIKTEC</strong>. פיתוח אתרי פרימיום, חנויות אונליין ונגישויות דיגיטליות מתקדמות לעסקים.
          </p>
          <div className="flex items-center gap-3">
            <span>מייסד ומנהל אחראי: קובי הרשטיק</span>
            <span className="text-slate-800">|</span>
            <span>קוד פתוח תחת רישוי Apache-2.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
