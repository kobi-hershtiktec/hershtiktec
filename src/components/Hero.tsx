import React, { useEffect, useRef } from "react";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { CTA_CONTACT, CTA_WORK, EASE, WHATSAPP_URL } from "../site";
import { introAllowed } from "../intro";
import { imgUrl } from "../img";

// Showreel: real screen recordings of shipped client sites and demos (public/media/showreel.*).
// Always rendered (prerender + hydrate must match); paused by effect for reduced-motion users.
function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line bg-ink-3 shadow-[0_30px_80px_-40px_rgb(15_23_32/0.45)]">
      <video
        ref={ref}
        className="block aspect-[16/10] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/showreel.webp"
        aria-label="הקלטה של אתרים ודמואים שבנינו: Hershtik Capital, חוויית גלילה, חשיפת מוצר בתלת-ממד, AURA וי.ב שיפוצים"
      >
        <source src="/media/showreel.webm" type="video/webm" />
        <source src="/media/showreel.mp4" type="video/mp4" />
      </video>
      <figcaption className="absolute bottom-4 right-4 rounded-full bg-ink-2/90 px-4 py-2 text-sm text-fg shadow-sm backdrop-blur">
        הקלטה אמיתית מאתרים שבנינו
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce || !introAllowed() ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section id="home" className="px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:px-8 lg:pb-28" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <motion.a
              href="/about/"
              {...rise(0)}
              className="inline-flex items-center gap-3 rounded-full border border-line py-1.5 pe-4 ps-1.5 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <img src={imgUrl("kobi", 96)} alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
              סטודיו בוטיק בהובלת קובי הרשטיק
            </motion.a>

            <motion.h1
              id="hero-heading"
              {...rise(0.08)}
              className="mt-7 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-[3.9rem]"
            >
              אתרי פרימיום לעסקים קטנים.
              <span className="block text-accent">מהירים, נגישים ונבנים ידנית.</span>
            </motion.h1>
          </div>

          <motion.div {...rise(0.16)} className="lg:col-span-4 lg:pb-3">
            <p className="max-w-[40ch] text-lg leading-relaxed text-fg-muted">
              כל אתר מתוכנן, מעוצב ומפותח מאפס. קוד נקי, עמידה בתקן הנגישות ומחיר הוגן לעסק קטן.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-accent px-7 py-4 text-base font-semibold text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
                aria-label={`${CTA_CONTACT} בוואטסאפ (נפתח בחלון חדש)`}
              >
                <WhatsappLogo size={24} weight="bold" aria-hidden="true" className="shrink-0" />
                {CTA_CONTACT}
              </a>
              <a
                href="/portfolio/"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap px-2 py-3 text-base font-medium text-fg transition-colors hover:text-accent"
              >
                {CTA_WORK}
                <ArrowLeft size={18} className="transition-transform duration-300 ease-out-expo group-hover:-translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-16"
          initial={reduce || !introAllowed() ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          <Showreel />
        </motion.div>
      </div>
    </section>
  );
}
