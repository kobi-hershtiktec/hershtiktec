import React, { useEffect, useState } from "react";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import projectsData from "../projects.json";
import { Project } from "../types";
import { CATEGORY_NAMES, CTA_CONTACT, CTA_WORK, EASE, WHATSAPP_URL } from "../site";
import { introAllowed } from "../intro";
import { imgUrl, responsive } from "../img";

const projects = projectsData as Project[];
const CYCLE_MS = 5500;

function hostOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

// Real screenshots of shipped client sites, rotating to show range of work.
function WorkShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const current = projects[index];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % projects.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduce, index]);

  const fade = {
    initial: reduce ? false : { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.9, ease: EASE },
  } as const;

  return (
    <div className="relative">
      {/* Desktop frame */}
      <div className="overflow-hidden rounded-2xl border border-line-strong bg-ink-2 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.8)]">
        <div className="flex h-9 items-center justify-center border-b border-line bg-ink-3/80">
          <span className="font-mono text-[11px] text-fg-subtle" dir="ltr">{hostOf(current.link)}</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-3">
          <AnimatePresence initial={false}>
            <motion.img
              key={current.id}
              {...responsive(current.img, "(min-width: 1280px) 610px, (min-width: 1024px) 48vw, 100vw")}
              width={1440}
              height={900}
              fetchPriority={index === 0 ? "high" : "auto"}
              alt={`צילום מסך של האתר ${current.title}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
              {...fade}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Phone frame (device exception to the 16px radius rule) */}
      {current.mobileImg && (
        <div className="absolute -bottom-8 -left-2 w-[26%] min-w-[92px] overflow-hidden rounded-[1.6rem] border-[5px] border-ink-3 bg-ink-3 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)] ring-1 ring-line-strong sm:-left-6">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[1.2rem] bg-ink-2">
            <AnimatePresence initial={false}>
              <motion.img
                key={current.id}
                {...responsive(current.mobileImg, "(min-width: 1024px) 160px, 26vw")}
                width={390}
                height={844}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top"
                {...fade}
              />
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Caption + selector, outside the image */}
      <div className="mt-6 flex items-center justify-between gap-4 pl-[30%] sm:pl-[28%]">
        <p className="text-sm text-fg-muted" aria-live="polite">
          <span className="font-medium text-fg">{current.title}</span>
          <span className="hidden sm:inline">
            <span className="mx-2 text-fg-subtle">/</span>
            {CATEGORY_NAMES[current.category]}
          </span>
        </p>
        <div className="flex gap-1.5" role="tablist" aria-label="בחירת פרויקט להצגה">
          {projects.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={i === index}
              aria-label={p.title}
              onClick={() => setIndex(i)}
              className="group flex h-11 min-w-8 items-center justify-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ease-out-expo ${
                  i === index ? "w-7 bg-accent" : "w-3.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
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
    <section
      id="home"
      className="relative px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:px-8 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[560px] w-[70%] bg-[radial-gradient(ellipse_at_top_left,rgb(76_201_220/0.10),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
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
            className="mt-7 text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-fg sm:text-5xl lg:text-[3.05rem] xl:text-[3.4rem]"
          >
            אתרי פרימיום לעסקים קטנים.
            <span className="block text-fg-muted">מהירים, נגישים ובנויים ביד.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-fg-muted">
            כל אתר מתוכנן, מעוצב ומפותח מאפס. קוד נקי, עמידה בתקן הנגישות ומחיר הוגן לעסק קטן.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-accent px-7 py-4 text-base font-semibold text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-strong active:scale-[0.98]"
              aria-label={`${CTA_CONTACT} (נפתח בחלון חדש)`}
            >
              <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
              {CTA_CONTACT}
            </a>
            <a
              href="/portfolio/"
              className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-base font-medium text-fg transition-colors hover:text-accent"
            >
              {CTA_WORK}
              <ArrowLeft size={18} className="transition-transform duration-300 ease-out-expo group-hover:-translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-6"
          initial={reduce || !introAllowed() ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          <WorkShowcase />
        </motion.div>
      </div>
    </section>
  );
}
