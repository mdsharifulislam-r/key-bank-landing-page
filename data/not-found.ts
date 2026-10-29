import { getCopy, type Locale } from "@/lib/i18n";

const notFound = {
  en: {
    title: "This page is not in the locker",
    body: "The link may be out of date. Head back to the KeyBank homepage.",
    action: "Back to KeyBank",
  },
  ar: {
    title: "هذه الصفحة ليست في الخزانة",
    body: "قد يكون الرابط قديماً. عُد إلى الصفحة الرئيسية لـ KeyBank.",
    action: "العودة إلى KeyBank",
  },
  fr: {
    title: "Cette page n'est pas dans le casier",
    body: "Le lien est peut-être périmé. Revenez à l'accueil KeyBank.",
    action: "Retour à KeyBank",
  },
};

export function getNotFound(locale: Locale) {
  return getCopy(notFound, locale);
}
