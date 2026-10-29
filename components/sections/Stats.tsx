import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getStats } from "@/data/stats";
import type { Locale } from "@/lib/i18n";

export function Stats({ locale }: { locale: Locale }) {
  const copy = getStats(locale);

  return (
    <section aria-labelledby="trust-heading" className="border-y border-navy/5 bg-white">
      <h2 id="trust-heading" className="sr-only">
        {copy.heading}
      </h2>
      <Container className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4 lg:py-10">
        {copy.items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08} className="text-center">
            <p className="font-heading text-3xl font-bold text-brown sm:text-4xl">{item.value}</p>
            <p className="mt-1 text-sm font-medium text-navy/70">{item.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
