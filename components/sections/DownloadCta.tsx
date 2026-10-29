import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { getDownload } from "@/data/download";
import type { Locale } from "@/lib/i18n";

export function DownloadCta({ locale }: { locale: Locale }) {
  const copy = getDownload(locale);

  return (
    <section id="download" aria-labelledby="download-heading" className="scroll-mt-28 bg-mist py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white shadow-[0_30px_80px_-36px_rgba(15,16,51,0.8)] sm:px-10 lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                id="download-heading"
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
                align="start"
                tone="light"
              />
              <div className="mt-8">
                <StoreBadges
                  appStoreHref={copy.appStoreHref}
                  playStoreHref={copy.playStoreHref}
                  appStoreBadge={copy.appStoreBadge}
                  playStoreBadge={copy.playStoreBadge}
                  appStoreAlt={copy.appStoreAlt}
                  playStoreAlt={copy.playStoreAlt}
                  onDark
                />
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-3">
              <div
                className="pointer-events-none absolute -top-8 h-40 w-40 rounded-full bg-primary-500/30 blur-3xl"
                aria-hidden="true"
              />
              <PhoneMockup
                src={copy.leftSrc}
                alt={copy.phoneAltLeft}
                className="w-[44%] max-w-[200px] translate-y-6"
                sizes="200px"
              />
              <PhoneMockup
                src={copy.rightSrc}
                alt={copy.phoneAltRight}
                className="relative z-10 w-[48%] max-w-[220px]"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
