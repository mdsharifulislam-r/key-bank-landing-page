import { getCopy, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const download = {
  en: {
    eyebrow: "Download",
    title: "Download KeyBank for iPhone and Android",
    description:
      "Issue codes on the way to the airport. Guests open the locker when they arrive. Both of you stay off the doorstep.",
    appStoreAlt: "Download KeyBank on the App Store",
    playStoreAlt: "Get KeyBank on Google Play",
    phoneAltLeft: "KeyBank home screen with an active locker and Unlock Compartment",
    phoneAltRight: "KeyBank welcome screen with Get Started and Sign in",
  },
  ar: {
    eyebrow: "التنزيل",
    title: "حمّل KeyBank لآيفون وأندرويد",
    description:
      "أصدر الرموز وأنت في الطريق إلى المطار. يفتح الضيوف الخزانة عند وصولهم. ويبقى الطرفان بعيداً عن عتبة الباب.",
    appStoreAlt: "حمّل KeyBank من آب ستور",
    playStoreAlt: "احصل على KeyBank من جوجل بلاي",
    phoneAltLeft: "الشاشة الرئيسية في KeyBank مع خزانة نشطة وزر فتح الخزانة",
    phoneAltRight: "شاشة الترحيب في KeyBank مع بدء الاستخدام وتسجيل الدخول",
  },
  fr: {
    eyebrow: "Téléchargement",
    title: "Téléchargez KeyBank pour iPhone et Android",
    description:
      "Émettez des codes en route vers l'aéroport. Les voyageurs ouvrent le casier en arrivant. Personne n'attend sur le pas de la porte.",
    appStoreAlt: "Télécharger KeyBank sur l'App Store",
    playStoreAlt: "Disponible sur Google Play",
    phoneAltLeft: "Écran d'accueil KeyBank avec un casier actif et Ouvrir le compartiment",
    phoneAltRight: "Écran d'accueil KeyBank avec Commencer et Se connecter",
  },
};

export function getDownload(locale: Locale) {
  return {
    ...getCopy(download, locale),
    appStoreHref: site.appStoreUrl,
    playStoreHref: site.playStoreUrl,
    appStoreBadge: "/images/badge-appstore.svg",
    playStoreBadge: "/images/badge-googleplay.svg",
    leftSrc: "/images/app-host-1.png",
    rightSrc: "/images/app-guest-1.png",
  };
}
