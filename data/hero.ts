import { getCopy, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type HeroCopy = {
  title: string;
  line1: string;
  line2: string;
  download: string;
  watch: string;
  collectedTitle: string;
  collectedBody: string;
  codeTitle: string;
  codeBody: string;
  phoneAlt: string;
  appStoreAlt: string;
  playStoreAlt: string;
};

const hero: { en: HeroCopy; ar: HeroCopy; fr: HeroCopy } = {
  en: {
    title: "Smart Key Handover for Modern Hosts",
    line1:
      "Store keys in a smart locker and send a single-use or reusable code as a QR or a short alphanumeric pass.",
    line2:
      "Guests collect and return the key without meeting you, and you get a live alert the moment it happens.",
    download: "Download App",
    watch: "Watch How It Works",
    collectedTitle: "Key collected",
    collectedBody: "Guest checked in at 2:14 PM",
    codeTitle: "New access code sent",
    codeBody: "SMS delivered to the guest",
    phoneAlt:
      "KeyBank welcome screen: Smart Key Management, with Get Started and Sign in",
    appStoreAlt: "Download KeyBank on the App Store",
    playStoreAlt: "Get KeyBank on Google Play",
  },
  ar: {
    title: "تسليم المفاتيح الذكي للمضيفين العصريين",
    line1:
      "خزّن المفاتيح في خزانة ذكية وأرسل رمز دخول لمرة واحدة أو قابلاً لإعادة الاستخدام كرمز QR أو رمز قصير.",
    line2:
      "يستلم الضيف المفتاح ويعيده دون لقاء، ويصلك تنبيه مباشر في اللحظة نفسها.",
    download: "حمّل التطبيق",
    watch: "شاهد كيف يعمل",
    collectedTitle: "تم استلام المفتاح",
    collectedBody: "سجّل الضيف الوصول الساعة 2:14 م",
    codeTitle: "تم إرسال رمز دخول جديد",
    codeBody: "وصلت الرسالة إلى الضيف",
    phoneAlt: "شاشة الترحيب في KeyBank: إدارة المفاتيح الذكية، مع بدء الاستخدام وتسجيل الدخول",
    appStoreAlt: "حمّل KeyBank من آب ستور",
    playStoreAlt: "احصل على KeyBank من جوجل بلاي",
  },
  fr: {
    title: "Remise de clés intelligente pour les hôtes modernes",
    line1:
      "Rangez les clés dans un casier connecté et envoyez un code à usage unique ou réutilisable, en QR ou en quelques caractères.",
    line2:
      "Le voyageur récupère et rend la clé sans rendez-vous, et vous êtes alerté à l'instant où cela se produit.",
    download: "Télécharger l'application",
    watch: "Voir comment ça marche",
    collectedTitle: "Clé récupérée",
    collectedBody: "Voyageur arrivé à 14 h 14",
    codeTitle: "Nouveau code envoyé",
    codeBody: "SMS remis au voyageur",
    phoneAlt:
      "Écran d'accueil KeyBank : gestion intelligente des clés, avec Commencer et Se connecter",
    appStoreAlt: "Télécharger KeyBank sur l'App Store",
    playStoreAlt: "Disponible sur Google Play",
  },
};

export function getHero(locale: Locale) {
  return {
    ...getCopy(hero, locale),
    phoneSrc: "/images/hero-phone.png",
    appStoreHref: site.appStoreUrl,
    playStoreHref: site.playStoreUrl,
    appStoreBadge: "/images/badge-appstore.svg",
    playStoreBadge: "/images/badge-googleplay.svg",
  };
}
