import { getCopy, type Locale } from "@/lib/i18n";

/**
 * PLACEHOLDER trust metrics.
 * Replace `value` and `label` with verified numbers before launch.
 * These are product facts used as stand-ins, not measured customer totals.
 */
const stats = {
  en: {
    heading: "KeyBank at a glance",
    items: [
      { value: "24/7", label: "Access" },
      { value: "100%", label: "Contactless" },
      { value: "3", label: "Languages" },
      { value: "Live", label: "Key alerts" },
    ],
  },
  ar: {
    heading: "KeyBank باختصار",
    items: [
      { value: "24/7", label: "الوصول" },
      { value: "100%", label: "بدون تلامس" },
      { value: "3", label: "لغات" },
      { value: "مباشر", label: "تنبيهات المفتاح" },
    ],
  },
  fr: {
    heading: "KeyBank en bref",
    items: [
      { value: "24/7", label: "Accès" },
      { value: "100%", label: "Sans contact" },
      { value: "3", label: "Langues" },
      { value: "Direct", label: "Alertes de clé" },
    ],
  },
};

export function getStats(locale: Locale) {
  return getCopy(stats, locale);
}
