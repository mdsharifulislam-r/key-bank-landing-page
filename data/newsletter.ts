import { getCopy, type Locale } from "@/lib/i18n";

const newsletter = {
  en: {
    eyebrow: "Get started",
    title: "Ready to make key handover effortless?",
    description:
      "Leave your email for product news and early access notes. This form checks the address on this page only.",
    label: "Email address",
    placeholder: "you@hostmail.com",
    button: "Notify me",
    requiredError: "Enter an email address.",
    invalidError: "Enter a valid email address.",
    success:
      "This preview accepted the address locally. It is not saved until the subscribe API is connected.",
    privacy: "No account is created. Replace this form action when the API route is ready.",
  },
  ar: {
    eyebrow: "ابدأ",
    title: "هل أنت مستعد لجعل تسليم المفاتيح سهلاً؟",
    description: "اترك بريدك لأخبار المنتج وملاحظات الوصول المبكر. يتحقق هذا النموذج من العنوان على هذه الصفحة فقط.",
    label: "البريد الإلكتروني",
    placeholder: "you@hostmail.com",
    button: "أبلغني",
    requiredError: "أدخل عنوان بريد إلكتروني.",
    invalidError: "أدخل بريداً إلكترونياً صالحاً.",
    success: "قبلت هذه المعاينة العنوان محلياً. لن يُحفظ قبل ربط واجهة الاشتراك.",
    privacy: "لا يُنشأ حساب. استبدل إجراء النموذج عندما يصبح مسار الواجهة جاهزاً.",
  },
  fr: {
    eyebrow: "Commencer",
    title: "Prêt à rendre la remise des clés simple ?",
    description:
      "Laissez votre e-mail pour les nouvelles du produit. Ce formulaire vérifie l'adresse sur cette page seulement.",
    label: "Adresse e-mail",
    placeholder: "vous@hote.com",
    button: "Me prévenir",
    requiredError: "Saisissez une adresse e-mail.",
    invalidError: "Saisissez une adresse e-mail valide.",
    success:
      "Cet aperçu a accepté l'adresse localement. Elle n'est pas enregistrée tant que l'API d'inscription n'est pas branchée.",
    privacy: "Aucun compte n'est créé. Remplacez l'action du formulaire quand la route API sera prête.",
  },
};

export function getNewsletter(locale: Locale) {
  return getCopy(newsletter, locale);
}
