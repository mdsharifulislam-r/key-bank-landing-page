import { getCopy, type Locale } from "@/lib/i18n";

export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const showcase = {
  en: {
    eyebrow: "The product",
    title: "A clear job for hosts and guests",
    description:
      "The same key handover, seen from the person who sends the code and the person who uses it.",
    tabs: [
      {
        id: "hosts",
        label: "For Hosts",
        summary: "Set up properties, issue codes, and watch each key move.",
        points: [
          "Sign up and log in to a host account",
          "Manage multiple properties in one place",
          "Link a locker to each listing",
          "Generate, share, and resend access codes",
          "Read notifications and the activity log",
          "Subscribe and pay with Stripe or PayPal",
          "Choose English, Arabic, or French",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-host-1.png",
            alt: "KeyBank home screen with compartment A-204 and Unlock Compartment",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-2.png",
            alt: "KeyBank My Locker screen listing compartments at Marina Walk, Dubai",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-3.png",
            alt: "KeyBank profile screen with notification settings and account options",
            width: 472,
            height: 1024,
          },
        ] satisfies ShowcaseImage[],
      },
      {
        id: "guests",
        label: "For Guests",
        summary: "Arrive, open the locker, and leave the key without a meetup.",
        points: [
          "Receive a QR or alphanumeric code by email or SMS",
          "Scan or enter the code to open the locker",
          "See the property and locker details before arriving",
          "Get notified when the key is ready, collected, or returned",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-guest-1.png",
            alt: "KeyBank welcome screen with Get Started and Sign in",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-guest-2.png",
            alt: "KeyBank home screen showing an active compartment in Marina, Dubai",
            width: 472,
            height: 1024,
          },
        ] satisfies ShowcaseImage[],
      },
    ],
  },
  ar: {
    eyebrow: "المنتج",
    title: "دور واضح للمضيفين والضيوف",
    description: "تسليم المفتاح نفسه، كما يراه من يرسل الرمز ومن يستخدمه.",
    tabs: [
      {
        id: "hosts",
        label: "للمضيفين",
        summary: "جهّز العقارات، وأصدر الرموز، وتابع حركة كل مفتاح.",
        points: [
          "إنشاء حساب وتسجيل الدخول كمضيف",
          "إدارة عدة عقارات من مكان واحد",
          "ربط خزانة بكل إعلان",
          "إنشاء رموز الوصول ومشاركتها وإعادة إرسالها",
          "قراءة التنبيهات وسجل النشاط",
          "الاشتراك والدفع عبر Stripe أو PayPal",
          "اختيار الإنجليزية أو العربية أو الفرنسية",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-host-1.png",
            alt: "الشاشة الرئيسية في KeyBank مع الخزانة A-204 وزر فتح الخزانة",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-2.png",
            alt: "شاشة خزائني في KeyBank تعرض خزائن مارينا ووك في دبي",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-3.png",
            alt: "شاشة الملف الشخصي في KeyBank مع إعدادات التنبيه وخيارات الحساب",
            width: 472,
            height: 1024,
          },
        ],
      },
      {
        id: "guests",
        label: "للضيوف",
        summary: "صل، وافتح الخزانة، واترك المفتاح من دون لقاء.",
        points: [
          "استلام رمز QR أو رمز حرفي بالبريد أو برسالة نصية",
          "مسح الرمز أو إدخاله لفتح الخزانة",
          "رؤية تفاصيل العقار والخزانة قبل الوصول",
          "التنبيه عندما يكون المفتاح جاهزاً أو مُستلماً أو مُرجَعاً",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-guest-1.png",
            alt: "شاشة الترحيب في KeyBank مع بدء الاستخدام وتسجيل الدخول",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-guest-2.png",
            alt: "الشاشة الرئيسية في KeyBank تعرض خزانة نشطة في مارينا دبي",
            width: 472,
            height: 1024,
          },
        ],
      },
    ],
  },
  fr: {
    eyebrow: "Le produit",
    title: "Un rôle clair pour les hôtes et les voyageurs",
    description:
      "La même remise de clé, vue par celui qui envoie le code et celui qui l'utilise.",
    tabs: [
      {
        id: "hosts",
        label: "Pour les hôtes",
        summary: "Préparez les logements, émettez des codes et suivez chaque clé.",
        points: [
          "Créer un compte et se connecter en tant qu'hôte",
          "Gérer plusieurs logements au même endroit",
          "Relier un casier à chaque annonce",
          "Générer, partager et renvoyer des codes d'accès",
          "Lire les notifications et le journal d'activité",
          "S'abonner et payer avec Stripe ou PayPal",
          "Choisir l'anglais, l'arabe ou le français",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-host-1.png",
            alt: "Écran d'accueil KeyBank avec le compartiment A-204 et Ouvrir le compartiment",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-2.png",
            alt: "Écran Mes casiers de KeyBank avec les compartiments de Marina Walk à Dubaï",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-host-3.png",
            alt: "Écran profil KeyBank avec les réglages de notification et le compte",
            width: 472,
            height: 1024,
          },
        ],
      },
      {
        id: "guests",
        label: "Pour les voyageurs",
        summary: "Arrivez, ouvrez le casier et laissez la clé sans rendez-vous.",
        points: [
          "Recevoir un QR ou un code alphanumérique par e-mail ou SMS",
          "Scanner ou saisir le code pour ouvrir le casier",
          "Voir le logement et le casier avant d'arriver",
          "Être prévenu quand la clé est prête, récupérée ou rendue",
        ],
        layout: "phones" as const,
        images: [
          {
            src: "/images/app-guest-1.png",
            alt: "Écran d'accueil KeyBank avec Commencer et Se connecter",
            width: 472,
            height: 1024,
          },
          {
            src: "/images/app-guest-2.png",
            alt: "Écran d'accueil KeyBank avec un compartiment actif à Marina, Dubaï",
            width: 472,
            height: 1024,
          },
        ],
      },
    ],
  },
};

export function getShowcase(locale: Locale) {
  return getCopy(showcase, locale);
}
