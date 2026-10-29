import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { getLegal } from "@/data/legal";
import { getLocalizedDisclaimer } from "@/lib/api";
import { hasLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return { robots: { index: false, follow: false } };
  return {
    title: getLegal(locale).privacy.title,
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const copy = getLegal(locale).privacy;
  const html = await getLocalizedDisclaimer("privacy", locale);

  return (
    <>
      <Navbar locale={locale} />
      <main id="main" className="bg-white">
        <Container className="max-w-3xl py-20">
          <h1 className="font-heading text-4xl font-bold text-navy">{copy.title}</h1>
          {html ? (
            <div
              className="legal-html mt-8 text-base leading-7 text-navy/80"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p className="mt-6 text-base leading-7 text-navy/75">{copy.body}</p>
          )}
        </Container>
      </main>
      <Footer locale={locale} />
    </>
  );
}
