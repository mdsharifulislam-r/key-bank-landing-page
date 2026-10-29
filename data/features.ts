import { getCopy, type Locale } from "@/lib/i18n";

export type FeatureIcon =
  | "properties"
  | "codes"
  | "share"
  | "alerts"
  | "activity"
  | "gps"
  | "hardware"
  | "languages";

type FeatureCopy = {
  eyebrow: string;
  title: string;
  description: string;
  items: { icon: FeatureIcon; title: string; description: string }[];
};

const features: Record<Locale, FeatureCopy> = {
  en: {
    eyebrow: "Why KeyBank",
    title: "Everything a host needs between bookings",
    description:
      "One app for the properties, the lockers, the codes, and the moment a guest actually picks up the key.",
    items: [
      {
        icon: "properties" as const,
        title: "Multi-property management",
        description: "Run every listing from one login, with a locker and a key history on each.",
      },
      {
        icon: "codes" as const,
        title: "Single-use and reusable codes",
        description: "Issue a QR or an alphanumeric pass for one arrival or for a longer stay.",
      },
      {
        icon: "share" as const,
        title: "Share by email or SMS",
        description: "Send the code in the channel the guest already watches, and resend it anytime.",
      },
      {
        icon: "alerts" as const,
        title: "Real-time notifications",
        description: "Know when a key is ready, collected, returned, or when an attempt fails.",
      },
      {
        icon: "activity" as const,
        title: "Key activity tracking",
        description: "Review collection, drop-off, and failed attempts without chasing a text thread.",
      },
      {
        icon: "gps" as const,
        title: "GPS locker mapping",
        description: "Show guests where the locker sits so the first arrival is not a scavenger hunt.",
      },
      {
        icon: "hardware" as const,
        title: "QR, RFID, and NFC hardware",
        description: "Connect locker hardware that opens by code, card, or a tap from the phone.",
      },
      {
        icon: "languages" as const,
        title: "English, Arabic, and French",
        description: "Hosts and guests can use the app in the language they already think in.",
      },
    ],
  },
  ar: {
    eyebrow: "لماذا KeyBank",
    title: "كل ما يحتاجه المضيف بين الحجوزات",
    description: "تطبيق واحد للعقارات والخزائن والرموز وللحظة التي يأخذ فيها الضيف المفتاح فعلاً.",
    items: [
      {
        icon: "properties",
        title: "إدارة عدة عقارات",
        description: "أدِر كل إعلان من تسجيل دخول واحد، مع خزانة وسجل مفاتيح لكل عقار.",
      },
      {
        icon: "codes",
        title: "رموز لمرة واحدة وقابلة لإعادة الاستخدام",
        description: "أصدر رمز QR أو رمزاً حرفياً لوصول واحد أو لإقامة أطول.",
      },
      {
        icon: "share",
        title: "المشاركة بالبريد أو بالرسالة النصية",
        description: "أرسل الرمز في القناة التي يتابعها الضيف، وأعد إرساله في أي وقت.",
      },
      {
        icon: "alerts",
        title: "تنبيهات فورية",
        description: "اعرف متى يكون المفتاح جاهزاً أو مُستلماً أو مُرجَعاً، أو متى تفشل محاولة.",
      },
      {
        icon: "activity",
        title: "تتبع نشاط المفتاح",
        description: "راجع الاستلام والإرجاع والمحاولات الفاشلة من دون مطاردة الرسائل.",
      },
      {
        icon: "gps",
        title: "تحديد موقع الخزانة",
        description: "أظهر للضيوف مكان الخزانة حتى لا يتحول الوصول الأول إلى بحث.",
      },
      {
        icon: "hardware",
        title: "أجهزة QR وRFID وNFC",
        description: "اربط خزائن تُفتح برمز أو ببطاقة أو بلمسة من الهاتف.",
      },
      {
        icon: "languages",
        title: "الإنجليزية والعربية والفرنسية",
        description: "يستخدم المضيفون والضيوف التطبيق باللغة التي يفكرون بها.",
      },
    ],
  },
  fr: {
    eyebrow: "Pourquoi KeyBank",
    title: "Tout ce dont un hôte a besoin entre deux séjours",
    description: "Une application pour les logements, les casiers, les codes, et le moment où le voyageur prend vraiment la clé.",
    items: [
      {
        icon: "properties",
        title: "Gestion de plusieurs logements",
        description: "Pilotez chaque annonce depuis une seule connexion, avec un casier et un historique de clés.",
      },
      {
        icon: "codes",
        title: "Codes à usage unique et réutilisables",
        description: "Émettez un QR ou un code alphanumérique pour une arrivée ou un séjour plus long.",
      },
      {
        icon: "share",
        title: "Partage par e-mail ou SMS",
        description: "Envoyez le code sur le canal que le voyageur consulte déjà, et renvoyez-le à tout moment.",
      },
      {
        icon: "alerts",
        title: "Notifications en temps réel",
        description: "Sachez quand une clé est prête, récupérée, rendue, ou quand une tentative échoue.",
      },
      {
        icon: "activity",
        title: "Suivi de l'activité des clés",
        description: "Consultez les retraits, les retours et les échecs sans courir après un fil de messages.",
      },
      {
        icon: "gps",
        title: "Localisation GPS du casier",
        description: "Montrez aux voyageurs où se trouve le casier pour que la première arrivée ne soit pas une chasse.",
      },
      {
        icon: "hardware",
        title: "Matériel QR, RFID et NFC",
        description: "Reliez un casier qui s'ouvre par code, par carte ou par un contact du téléphone.",
      },
      {
        icon: "languages",
        title: "Anglais, arabe et français",
        description: "Hôtes et voyageurs utilisent l'application dans la langue qu'ils parlent déjà.",
      },
    ],
  },
};

export function getFeatures(locale: Locale) {
  return getCopy(features, locale);
}
