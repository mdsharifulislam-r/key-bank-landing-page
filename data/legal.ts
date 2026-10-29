import { getCopy, type Locale } from "@/lib/i18n";

/** PLACEHOLDER legal copy. Replace with counsel-approved policies before launch. */
const legal = {
  en: {
    privacy: {
      title: "Privacy",
      body: "This privacy page is a placeholder. KeyBank will describe what account, booking, and device data the app stores once the policy is published. Until then, do not submit personal data you are not comfortable sharing in a demo form.",
    },
    terms: {
      title: "Terms",
      body: "These terms are a placeholder. Subscription prices shown on the site mirror the duration packages in the app and can change. A full customer agreement will replace this page before launch.",
    },
  },
  ar: {
    privacy: {
      title: "الخصوصية",
      body: "صفحة الخصوصية هذه عنصر نائب. سيوضح KeyBank بيانات الحساب والحجز والجهاز التي يخزّنها التطبيق عند نشر السياسة. إلى ذلك الحين، لا ترسل بيانات شخصية لا ترغب في مشاركتها في نموذج تجريبي.",
    },
    terms: {
      title: "الشروط",
      body: "هذه الشروط عنصر نائب. أسعار الاشتراك المعروضة تطابق باقات المدة في التطبيق وقد تتغير. ستحل اتفاقية عملاء كاملة محل هذه الصفحة قبل الإطلاق.",
    },
  },
  fr: {
    privacy: {
      title: "Confidentialité",
      body: "Cette page de confidentialité est un texte provisoire. KeyBank décrira les données de compte, de réservation et d'appareil que l'application conserve une fois la politique publiée. D'ici là, n'envoyez pas de données personnelles que vous ne voulez pas partager dans un formulaire de démonstration.",
    },
    terms: {
      title: "Conditions",
      body: "Ces conditions sont un texte provisoire. Les prix d'abonnement affichés reprennent les forfaits de durée de l'application et peuvent changer. Un contrat client complet remplacera cette page avant le lancement.",
    },
  },
};

export function getLegal(locale: Locale) {
  return getCopy(legal, locale);
}
