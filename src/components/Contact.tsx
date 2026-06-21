import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Quantum Glow elements from design theme */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(34,_211,_238,_0.15)_0%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(59,_130,_246,_0.1)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Visual background accents: neon radial glows & technical grid mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/15 via-brand-bg to-brand-bg pointer-events-none" />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-[0.2] pointer-events-none" 
        id="cyber-grid"
      />

      {/* Subtle giant rotating background brand logo watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1150px] md:h-[1150px] opacity-[0.04] pointer-events-none select-none z-0 overflow-hidden">
        <motion.img 
          src="/favicon.png" 
          alt="" 
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Centered Intro Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
