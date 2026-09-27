import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";

export default function NotFound() {
  return (
    <section className="px-4 pb-32 pt-24 sm:px-6 md:pt-32 lg:px-8" aria-labelledby="notfound-heading">
      <div className="mx-auto max-w-7xl">
        <PageHeader id="notfound-heading" title="העמוד הזה לא קיים" intro="אולי הקישור השתנה. אפשר להמשיך מכאן:">
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              ["לדף הבית", "/"],
              ["לשירותים", "/services/"],
              ["לתיק העבודות", "/portfolio/"],
              ["ליצירת קשר", "/contact/"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="group inline-flex items-center gap-2 text-lg font-medium text-accent hover:text-accent-strong">
                {label}
                <ArrowLeft size={18} aria-hidden="true" className="transition-transform group-hover:-translate-x-1" />
              </a>
            ))}
          </div>
        </PageHeader>
      </div>
    </section>
  );
}
