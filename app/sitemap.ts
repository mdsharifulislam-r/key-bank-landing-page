import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((locale) => [locale, `${site.url}/${locale}`])),
    "x-default": `${site.url}/en`,
  };

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date("2026-10-24"),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
