"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getNotFound } from "@/data/not-found";
import { hasLocale, type Locale } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale: Locale = hasLocale(segment) ? segment : "en";
  const copy = getNotFound(locale);

  return (
    <main id="main" className="bg-mist">
      <Container className="flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brown">404</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-navy">{copy.title}</h1>
        <p className="mt-4 max-w-md text-base leading-7 text-navy/75">{copy.body}</p>
        <ButtonLink href={`/${locale}`} className="mt-8">
          {copy.action}
        </ButtonLink>
      </Container>
    </main>
  );
}
