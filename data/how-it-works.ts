import { getCopy, type Locale } from "@/lib/i18n";

const howItWorks = {
  en: {
    eyebrow: "How it works",
    title: "From empty locker to confirmed check-in",
    description: "Four steps. No meetup, no copied lockbox code, no wondering if the guest got in.",
    steps: [
      {
        title: "Add your property and link a locker",
        description:
          "Create the listing in KeyBank and connect the smart locker that holds the key.",
      },
      {
        title: "Generate a single-use or reusable code",
        description:
          "Choose a QR code or a short alphanumeric pass, valid once or for a stay you define.",
      },
      {
        title: "Share it by email or SMS",
        description:
          "Send the code to the guest, and resend it if they need it again before arrival.",
      },
      {
        title: "Get notified when the key moves",
        description:
          "See the moment the guest collects the key and the moment they return it.",
      },
    ],
  },
  ar: {
    eyebrow: "كيف يعمل",
    title: "من خزانة فارغة إلى تسجيل وصول مؤكد",
    description: "أربع خطوات. بلا لقاء، وبلا رمز صندوق منسوخ، وبلا تساؤل إن كان الضيف قد دخل.",
    steps: [
      {
        title: "أضف عقارك واربط خزانة",
        description: "أنشئ الإعلان في KeyBank ووصّل الخزانة الذكية التي تحتفظ بالمفتاح.",
      },
      {
        title: "أنشئ رمزاً لمرة واحدة أو قابلاً لإعادة الاستخدام",
        description: "اختر رمز QR أو رمزاً قصيراً، صالحاً لمرة واحدة أو لمدة إقامة تحددها.",
      },
      {
        title: "شاركه بالبريد أو برسالة نصية",
        description: "أرسل الرمز إلى الضيف، وأعد إرساله إذا احتاجه مرة أخرى قبل الوصول.",
      },
      {
        title: "تلقَّ تنبيهاً عندما يتحرك المفتاح",
        description: "شاهد لحظة استلام الضيف للمفتاح ولحظة إرجاعه.",
      },
    ],
  },
  fr: {
    eyebrow: "Comment ça marche",
    title: "D'un casier vide à une arrivée confirmée",
    description: "Quatre étapes. Pas de rendez-vous, pas de code de boîte recopié, plus de doute sur l'entrée du voyageur.",
    steps: [
      {
        title: "Ajoutez le logement et reliez un casier",
        description: "Créez l'annonce dans KeyBank et connectez le casier connecté qui garde la clé.",
      },
      {
        title: "Générez un code à usage unique ou réutilisable",
        description: "Choisissez un QR ou un court code alphanumérique, valable une fois ou pour un séjour que vous définissez.",
      },
      {
        title: "Partagez-le par e-mail ou SMS",
        description: "Envoyez le code au voyageur, et renvoyez-le s'il en a encore besoin avant l'arrivée.",
      },
      {
        title: "Soyez prévenu quand la clé bouge",
        description: "Voyez l'instant où le voyageur prend la clé et celui où il la rend.",
      },
    ],
  },
};

export function getHowItWorks(locale: Locale) {
  return getCopy(howItWorks, locale);
}
