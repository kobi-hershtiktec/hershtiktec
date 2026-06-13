import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="contact-heading"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Centered Intro Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20" 
            id="contact-panel-badge"
          >
            שלחו הודעה או תתקשרו
          </span>
          <h2 
            id="contact-heading" 
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            בואו נבנה את פרויקט החלומות שלכם
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            זמינות ישירה, מענה אנושי מהיר וחוויית שירות אישית ללא בוטים או טפסים מורכבים. בחרו בדרך הנוחה לכם ליצירת קשר מיידי.
          </p>
        </div>

        {/* 2-Column Premium Interactive Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="contact-inner-grid">
          
          {/* Channel A: WhatsApp & Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8 relative frosted-glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
            id="contact-channel-whatsapp"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                טלפון ו-WhatsApp
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                זמין עבורכם לשיחות ישירות, שאלות טכניות, הודעות טקסט והתייעצות חלקה ומהירה בוואטסאפ בכל עת.
              </p>
              <span className="block text-xl font-bold text-white font-mono tracking-wide mb-6">
                050-5712342
              </span>
            </div>

            <a 
              href="https://wa.me/972505712342?text=%D7%94%D7%99%D7%99%20%D7%A7%D7%95%D7%91%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A6%D7%95%D7%AA%20%D7%A7%D7%A6%D7%A8%D7%94!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold h-11 px-4 text-sm transition-all active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              aria-label="שיחה או שליחת הודעה ישירה לקובי בוואטסאפ"
            >
              <span>מענה מהיר בוואטסאפ</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Channel B: Direct Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-8 relative frosted-glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
            id="contact-channel-email"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                אימייל ישיר
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                שלחו לי מייל עם פרטי הפרויקט, קובצי אפיון קיימים או דרישות טכניות מיוחדות ואחזור אליכם עם מתווה עבודה ראשוני.
              </p>
              <span className="block text-lg font-bold text-white font-mono break-all mb-6">
                kobi@hershtiktec.com
              </span>
            </div>

            <a 
              href="mailto:kobi@hershtiktec.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold h-11 px-4 text-sm transition-all active:scale-98 cursor-pointer border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="שלח אימייל ישיר לקובי"
            >
              <span>שלחו אימייל עכשיו</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>

        {/* Global Security Footer Notice inside Contact */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-lg mx-auto" id="contact-security-footer">
          התקשורת והפרטים שלכם מוגנים ומאובטחים ב-100%. לא נשלח דואר זבל ולא נשתף את פרטיכם עם אף גורם חיצוני מעולם.
        </div>

      </div>
    </section>
  );
}
