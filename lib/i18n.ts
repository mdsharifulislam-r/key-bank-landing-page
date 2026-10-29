export const locales = ["en", "ar", "fr"] as const;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
};

/** Missing Arabic or French copy falls back to English. */
export function getCopy<T>(table: { en: T; ar?: T; fr?: T }, locale: Locale): T {
  return table[locale] ?? table.en;
}
