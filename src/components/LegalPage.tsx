import React from "react";
import PageHeader from "./PageHeader";

interface LegalSection {
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  id: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

// Long-form document layout for statements and policies.
export default function LegalPage({ id, title, updated, intro, sections }: LegalPageProps) {
  return (
    <section className="px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8" aria-labelledby={id}>
      <div className="mx-auto max-w-7xl">
        <PageHeader id={id} title={title} intro={intro}>
          <p className="mt-4 text-sm text-fg-subtle">עודכן לאחרונה: {updated}</p>
        </PageHeader>

        <div className="mt-16 max-w-3xl divide-y divide-line border-t border-line">
          {sections.map((s) => (
            <div key={s.title} className="py-10">
              <h2 className="text-xl font-semibold text-fg md:text-2xl">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-fg-muted [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ms-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:space-y-2">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
