import React from "react";
import { ArrowLeft, ArrowUpLeft } from "@phosphor-icons/react";
import Hero from "./Hero";
import CtaBand from "./CtaBand";
import Process from "./Process";
import Solutions from "./Solutions";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import projectsData from "../projects.json";
import { Project } from "../types";
import { CATEGORY_NAMES } from "../site";
import { responsive } from "../img";

const projects = projectsData as Project[];

const proofPoints = [
  { value: "נגיש", label: "לפי החוק ותקן ישראלי 5568, מהיום הראשון" },
  { value: "95+", label: "ציון Google PageSpeed בנייד" },
  { value: "0", label: "תבניות. כל אתר נכתב מאפס" },
];

function ProofStrip() {
  return (
    <section aria-label="עקרונות העבודה" className="px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl border-y border-line sm:grid-cols-3">
        {proofPoints.map((p, i) => (
          <div
            key={p.value}
            className={`flex items-baseline gap-4 py-7 sm:flex-col sm:gap-2 sm:py-10 sm:pe-8 ${
              i > 0 ? "border-t border-line sm:border-t-0 sm:border-r sm:ps-8" : ""
            }`}
          >
            <CountUp
              value={p.value}
              className="shrink-0 text-2xl font-semibold tabular-nums text-fg md:text-4xl"
              dir={/^[0-9]/.test(p.value) ? "ltr" : undefined}
            />
            <span className="text-sm leading-relaxed text-fg-muted md:text-base">{p.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function WorkTile({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col"
      aria-label={`${project.title}, ${CATEGORY_NAMES[project.category]} (נפתח בחלון חדש)`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-ink-2 ${
          large ? "aspect-[4/3] md:aspect-auto md:min-h-0 md:flex-1" : "aspect-[16/10] md:aspect-auto md:min-h-0 md:flex-1"
        }`}
      >
        <img
          {...responsive(project.img, large ? "(min-width: 768px) 56vw, 100vw" : "(min-width: 768px) 38vw, 100vw")}
          width={1440}
          height={900}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
          <p className="mt-1 text-sm text-fg-muted">{CATEGORY_NAMES[project.category]}</p>
        </div>
        <ArrowUpLeft
          size={20}
          aria-hidden="true"
          className="mt-1 shrink-0 text-fg-subtle transition-all duration-300 ease-out-expo group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
    </a>
  );
}

function SelectedWork() {
  const [first, ...rest] = projects;
  return (
    <section className="px-4 py-24 sm:px-6 md:py-16 lg:px-8" aria-labelledby="selected-work-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <h2 id="selected-work-heading" className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            עבודות נבחרות
          </h2>
          <a
            href="/portfolio/"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            כל העבודות
            <ArrowLeft size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </Reveal>

        {/* On desktop the whole grid fits one screen height */}
        <div className="grid gap-10 md:h-[min(600px,calc(100dvh-16rem))] md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7 md:min-h-0">
            <WorkTile project={first} large />
          </Reveal>
          <div className="grid gap-10 md:col-span-5 md:min-h-0 md:grid-rows-2 md:gap-8">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={0.08 * (i + 1)} className="md:min-h-0">
                <WorkTile project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <Solutions />
      <Process />
      <CtaBand />
    </>
  );
}
