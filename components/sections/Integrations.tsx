import { CreditCard, Nfc, QrCode, Radio, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIntegrations } from "@/data/integrations";
import type { Locale } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  qr: QrCode,
  rfid: Radio,
  nfc: Nfc,
  stripe: CreditCard,
  paypal: Wallet,
};

export function Integrations({ locale }: { locale: Locale }) {
  const copy = getIntegrations(locale);

  return (
    <section aria-labelledby="integrations-heading" className="bg-mist py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="integrations-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {copy.items.map((item) => {
            const Icon = icons[item.id] ?? QrCode;
            return (
              <li key={item.id}>
                <div className="flex min-w-28 items-center justify-center gap-2 rounded-2xl border border-white bg-white px-5 py-4 shadow-card">
                  <Icon className="h-5 w-5 text-brown" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy">{item.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
