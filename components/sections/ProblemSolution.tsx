import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProblem } from "@/data/problem";
import type { Locale } from "@/lib/i18n";

export function ProblemSolution({ locale }: { locale: Locale }) {
  const copy = getProblem(locale);

  return (
    <section aria-labelledby="problem-heading" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="problem-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-card">
          <div className="grid border-b border-navy/5 md:grid-cols-2">
            <p className="bg-mist px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy/60">
              {copy.beforeTitle}
            </p>
            <p className="bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brown">
              {copy.afterTitle}
            </p>
          </div>
          <ul>
            {copy.rows.map((row, index) => (
              <li key={row.problem} className="grid border-b border-navy/5 last:border-b-0 md:grid-cols-2">
                <Reveal delay={index * 0.05} className="flex gap-4 px-6 py-6">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-navy/70">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-lg font-semibold text-navy">{row.problem}</span>
                    <span className="mt-1 block text-sm leading-6 text-navy/70">{row.problemDetail}</span>
                  </span>
                </Reveal>
                <Reveal delay={index * 0.05 + 0.05} className="flex gap-4 bg-cream/60 px-6 py-6">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-navy">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-lg font-semibold text-navy">{row.solution}</span>
                    <span className="mt-1 block text-sm leading-6 text-navy/75">{row.solutionDetail}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
