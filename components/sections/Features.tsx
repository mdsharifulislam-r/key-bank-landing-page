import {
  Bell,
  Building,
  ClipboardList,
  Languages,
  MapPin,
  Nfc,
  QrCode,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeatures, type FeatureIcon } from "@/data/features";
import type { Locale } from "@/lib/i18n";

const icons: Record<FeatureIcon, LucideIcon> = {
  properties: Building,
  codes: QrCode,
  share: Share2,
  alerts: Bell,
  activity: ClipboardList,
  gps: MapPin,
  hardware: Nfc,
  languages: Languages,
};

export function Features({ locale }: { locale: Locale }) {
  const copy = getFeatures(locale);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-28 bg-mist py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="features-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="h-full">
                <Reveal
                  delay={index * 0.05}
                  className="hover-lift h-full rounded-3xl border border-white bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(15,16,51,0.45)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brown">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/70">{item.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
