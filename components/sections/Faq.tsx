import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/sections/FaqList";
import { getFaq } from "@/data/faq";
import { getLocalizedFaqs, type FaqItem } from "@/lib/api";
import type { Locale } from "@/lib/i18n";

export async function Faq({ locale }: { locale: Locale }) {
  const copy = getFaq(locale);
  const remote = await getLocalizedFaqs(locale);
  const items: FaqItem[] =
    remote ??
    copy.items.map((item, index) => ({
      id: `local-${index}`,
      question: item.question,
      answer: item.answer,
    }));

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28 bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <FaqList items={items} />
      </Container>
    </section>
  );
}
