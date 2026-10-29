"use client";

import { Check } from "lucide-react";
import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getShowcase } from "@/data/showcase";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function AppShowcase({ locale }: { locale: Locale }) {
  const copy = getShowcase(locale);
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tab = copy.tabs[active];

  return (
    <section aria-labelledby="showcase-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="showcase-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div
          role="tablist"
          aria-label={copy.title}
          className="mx-auto mt-10 flex w-full max-w-xl flex-wrap justify-center gap-2 rounded-full bg-mist p-1.5"
        >
          {copy.tabs.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  "min-h-11 flex-1 rounded-full px-4 text-sm font-semibold transition",
                  selected ? "bg-navy text-white shadow-card" : "text-navy/70 hover:text-navy",
                )}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                  event.preventDefault();
                  const direction = event.key === "ArrowRight" ? 1 : -1;
                  const next = (index + direction + copy.tabs.length) % copy.tabs.length;
                  setActive(next);
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          <div>
            <h3 className="font-heading text-2xl font-bold text-navy">{tab.label}</h3>
            <p className="mt-3 text-base leading-7 text-navy/75">{tab.summary}</p>
            <ul className="mt-6 space-y-3">
              {tab.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-navy/80">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-end justify-center gap-2 sm:gap-4">
            {tab.images.map((image, index) => {
              const count = tab.images.length;
              const frame =
                count === 2
                  ? index === 0
                    ? "w-[44%] max-w-[230px]"
                    : "z-10 w-[48%] max-w-[250px]"
                  : index === 1
                    ? "z-10 w-[34%] max-w-[210px] -translate-y-3"
                    : "w-[30%] max-w-[180px]";
              return (
                <PhoneMockup
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={frame}
                  sizes="220px"
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
