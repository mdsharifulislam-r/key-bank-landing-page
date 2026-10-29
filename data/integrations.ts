import { getCopy, type Locale } from "@/lib/i18n";

const integrations = {
  en: {
    eyebrow: "Integrations",
    title: "Lockers, codes, and checkout in one flow",
    description:
      "KeyBank uses secure authentication, encrypted access codes, and an activity log for every collection, return, and failed attempt.",
    items: [
      { id: "qr", label: "QR" },
      { id: "rfid", label: "RFID" },
      { id: "nfc", label: "NFC" },
      { id: "stripe", label: "Stripe" },
      { id: "paypal", label: "PayPal" },
    ],
  },
  ar: {
    eyebrow: "التكاملات",
    title: "الخزائن والرموز والدفع في مسار واحد",
    description:
      "يستخدم KeyBank مصادقة آمنة ورموز دخول مشفّرة وسجل نشاط لكل استلام وإرجاع ومحاولة فاشلة.",
    items: [
      { id: "qr", label: "QR" },
      { id: "rfid", label: "RFID" },
      { id: "nfc", label: "NFC" },
      { id: "stripe", label: "Stripe" },
      { id: "paypal", label: "PayPal" },
    ],
  },
  fr: {
    eyebrow: "Intégrations",
    title: "Casiers, codes et paiement dans un seul flux",
    description:
      "KeyBank repose sur une authentification sécurisée, des codes d'accès chiffrés et un journal pour chaque retrait, retour et tentative échouée.",
    items: [
      { id: "qr", label: "QR" },
      { id: "rfid", label: "RFID" },
      { id: "nfc", label: "NFC" },
      { id: "stripe", label: "Stripe" },
      { id: "paypal", label: "PayPal" },
    ],
  },
};

export function getIntegrations(locale: Locale) {
  return getCopy(integrations, locale);
}
