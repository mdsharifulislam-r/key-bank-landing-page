import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getHowItWorks } from "@/data/how-it-works";
import type { Locale } from "@/lib/i18n";

export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = getHowItWorks(locale);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-28 bg-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="how-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="relative mt-14">
          <div
            className="absolute top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent md:inset-x-[10%] md:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 md:grid-cols-4">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="relative text-center md:text-start">
              <Reveal delay={index * 0.08}>
                <span className="relative z-10 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 font-heading text-lg font-bold text-navy shadow-glow md:mx-0">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/70">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </Container>
    </section>
  );
}
