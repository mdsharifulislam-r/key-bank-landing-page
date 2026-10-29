import { Container } from "@/components/ui/Container";
import { Float } from "@/components/ui/Float";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNotifications } from "@/data/notifications";
import type { Locale } from "@/lib/i18n";
import Image from "next/image";

export function Notifications({ locale }: { locale: Locale }) {
  const copy = getNotifications(locale);
  const left = copy.cards.slice(0, 2);
  const right = copy.cards.slice(2);

  return (
    <section aria-labelledby="alerts-heading" className="overflow-hidden bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="alerts-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)]">
          <CardColumn cards={left} />
          <Float className="order-first mx-auto lg:order-none" y={12} duration={6.2}>
            <PhoneMockup src={copy.phoneSrc} alt={copy.phoneAlt} sizes="280px" />
          </Float>
          <CardColumn cards={right} />
        </div>
      </Container>
    </section>
  );
}

function CardColumn({
  cards,
}: {
  cards: Array<{
    src: string;
    alt: string;
    title: string;
    body: string;
    time: string;
  }>;
}) {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <Float key={card.src} delay={index * 0.35} duration={7} y={8}>
          <article className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-card backdrop-blur-md">
            <Image
              src={card.src}
              alt={card.alt}
              width={256}
              height={256}
              sizes="64px"
              className="h-16 w-16 shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0">
              <p className="flex items-baseline justify-between gap-3">
                <span className="font-heading text-sm font-semibold text-navy">{card.title}</span>
                <time className="shrink-0 text-xs text-navy/50">{card.time}</time>
              </p>
              <p className="mt-1 text-sm leading-5 text-navy/70">{card.body}</p>
            </div>
          </article>
        </Float>
      ))}
    </div>
  );
}
