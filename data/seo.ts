import { getCopy, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const seo = {
  en: {
    title: "KeyBank — Smart Key Handover for Modern Hosts",
    description:
      "Smart key locker app for short-term rental hosts. Issue QR codes for Airbnb check-in, exchange keys contactlessly, and track every handover in real time.",
    ogAlt: "KeyBank, the contactless smart key locker app for short-term rental hosts",
  },
  ar: {
    title: "KeyBank — تسليم المفاتيح الذكي للمضيفين العصريين",
    description:
      "تطبيق خزانة مفاتيح ذكية لمضيفي الإيجار قصير الأمد. أرسل رموز QR لتسجيل وصول Airbnb وتابع تسليم المفاتيح دون تلامس لحظة بلحظة.",
    ogAlt: "KeyBank، تطبيق خزانة المفاتيح الذكية لتسليم المفاتيح دون تلامس",
  },
  fr: {
    title: "KeyBank — Remise de clés intelligente pour les hôtes modernes",
    description:
      "Application de casier à clés pour les hôtes en location courte durée. Codes QR pour le check-in Airbnb, échange sans contact et alertes en temps réel.",
    ogAlt: "KeyBank, l'application de remise de clés sans contact pour les hôtes",
  },
};

export const keywords = [
  "smart key locker app",
  "short-term rental key management",
  "Airbnb key handover",
  "contactless key exchange",
  "self check-in key box app",
  "QR code key locker",
];

export function getSeo(locale: Locale) {
  return {
    ...getCopy(seo, locale),
    keywords,
    canonical: `${site.url}/${locale}`,
  };
}
