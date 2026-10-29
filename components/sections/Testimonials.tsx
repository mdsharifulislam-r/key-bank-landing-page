"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTestimonials } from "@/data/testimonials";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Testimonials({ locale }: { locale: Locale }) {
  const copy = getTestimonials(locale);
  const [index, setIndex] = useState(0);
  const item = copy.items[index];
  const total = copy.items.length;

  function go(next: number) {
    setIndex((next + total) % total);
  }

  return (
    <section id="testimonials" aria-labelledby="reviews-heading" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="reviews-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="relative mx-auto mt-12 max-w-3xl">
          <figure className="rounded-3xl border border-navy/5 bg-cream px-6 py-8 shadow-card sm:px-10 sm:py-10">
            <blockquote>
              <p className="text-lg leading-8 text-navy sm:text-xl">{item.quote}</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image
                src={item.avatar}
                alt={item.avatarAlt}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span>
                <span className="block font-heading text-base font-semibold text-navy">{item.name}</span>
                <span className="block text-sm text-navy/65">{item.role}</span>
              </span>
            </figcaption>
          </figure>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy"
              aria-label={copy.previous}
              onClick={() => go(index - 1)}
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label={copy.title}>
              {copy.items.map((review, dot) => (
                <button
                  key={review.name}
                  type="button"
                  role="tab"
                  aria-selected={dot === index}
                  aria-label={review.name}
                  className={cn(
                    "h-2.5 rounded-full transition",
                    dot === index ? "w-6 bg-primary-500" : "w-2.5 bg-navy/20",
                  )}
                  onClick={() => setIndex(dot)}
                />
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy"
              aria-label={copy.next}
              onClick={() => go(index + 1)}
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
