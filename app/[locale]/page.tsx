import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { DownloadCta } from "@/components/sections/DownloadCta";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { Navbar } from "@/components/sections/Navbar";
import { Newsletter } from "@/components/sections/Newsletter";
import { Notifications } from "@/components/sections/Notifications";
import { Pricing } from "@/components/sections/Pricing";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { getSeo } from "@/data/seo";
import { hasLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};

  const seo = getSeo(locale);
  const languages = Object.fromEntries([
    ...locales.map((item) => [item, `${site.url}/${item}`]),
    ["x-default", `${site.url}/en`],
  ]);

  const image = {
    url: `${site.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: seo.ogAlt,
  };

  return {
    metadataBase: new URL(site.url),
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: seo.canonical,
      title: seo.title,
      description: seo.description,
      siteName: site.name,
      locale: locale === "ar" ? "ar" : locale === "fr" ? "fr_FR" : "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image.url],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <JsonLd locale={locale} />
      <Navbar locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <Stats locale={locale} />
        <ProblemSolution locale={locale} />
        <HowItWorks locale={locale} />
        <Features locale={locale} />
        <AppShowcase locale={locale} />
        <Notifications locale={locale} />
        <Pricing locale={locale} />
        <Integrations locale={locale} />
        <DownloadCta locale={locale} />
        <Testimonials locale={locale} />
        <Faq locale={locale} />
        <Newsletter locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
