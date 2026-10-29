import { getCopy, type Locale } from "@/lib/i18n";

const notifications = {
  en: {
    eyebrow: "Live alerts",
    title: "See the key move without watching the door",
    description:
      "KeyBank sends the events that matter: the code is ready, the guest has the key, the key is back, or someone tried and failed.",
    phoneAlt: "KeyBank My Locker screen listing active compartments and expiry",
    cards: [
      {
        src: "/images/notification-1.png",
        alt: "Notification: key ready for the guest at Seaside Loft",
        title: "Key ready",
        body: "Access code is active for Seaside Loft",
        time: "2:02 PM",
      },
      {
        src: "/images/notification-2.png",
        alt: "Notification: guest collected the key at 2:14 PM",
        title: "Key collected",
        body: "Guest checked in at Seaside Loft",
        time: "2:14 PM",
      },
      {
        src: "/images/notification-3.png",
        alt: "Notification: key returned to the locker",
        title: "Key returned",
        body: "Drop-off confirmed at the locker",
        time: "11:06 AM",
      },
      {
        src: "/images/notification-4.png",
        alt: "Notification: failed attempt to open the locker",
        title: "Failed attempt",
        body: "An unrecognized code was declined",
        time: "8:41 PM",
      },
    ],
  },
  ar: {
    eyebrow: "تنبيهات مباشرة",
    title: "شاهد حركة المفتاح من دون مراقبة الباب",
    description:
      "يرسل KeyBank الأحداث المهمة: الرمز جاهز، الضيف معه المفتاح، المفتاح عاد، أو حاول أحدهم وفشل.",
    phoneAlt: "شاشة خزائني في KeyBank تعرض الخزائن النشطة وتاريخ الانتهاء",
    cards: [
      {
        src: "/images/notification-1.png",
        alt: "تنبيه: المفتاح جاهز للضيف في Seaside Loft",
        title: "المفتاح جاهز",
        body: "رمز الدخول نشط لعقار Seaside Loft",
        time: "2:02 م",
      },
      {
        src: "/images/notification-2.png",
        alt: "تنبيه: استلم الضيف المفتاح الساعة 2:14 م",
        title: "تم استلام المفتاح",
        body: "سجّل الضيف الوصول في Seaside Loft",
        time: "2:14 م",
      },
      {
        src: "/images/notification-3.png",
        alt: "تنبيه: أُرجع المفتاح إلى الخزانة",
        title: "تم إرجاع المفتاح",
        body: "تم تأكيد الإرجاع عند الخزانة",
        time: "11:06 ص",
      },
      {
        src: "/images/notification-4.png",
        alt: "تنبيه: محاولة فاشلة لفتح الخزانة",
        title: "محاولة فاشلة",
        body: "رُفض رمز غير معروف",
        time: "8:41 م",
      },
    ],
  },
  fr: {
    eyebrow: "Alertes en direct",
    title: "Voyez la clé bouger sans surveiller la porte",
    description:
      "KeyBank envoie ce qui compte : le code est prêt, le voyageur a la clé, la clé est revenue, ou quelqu'un a essayé et échoué.",
    phoneAlt: "Écran Mes casiers de KeyBank avec les compartiments actifs et leur expiration",
    cards: [
      {
        src: "/images/notification-1.png",
        alt: "Notification : clé prête pour le voyageur à Seaside Loft",
        title: "Clé prête",
        body: "Le code d'accès est actif pour Seaside Loft",
        time: "14:02",
      },
      {
        src: "/images/notification-2.png",
        alt: "Notification : le voyageur a récupéré la clé à 14:14",
        title: "Clé récupérée",
        body: "Arrivée enregistrée à Seaside Loft",
        time: "14:14",
      },
      {
        src: "/images/notification-3.png",
        alt: "Notification : clé rendue dans le casier",
        title: "Clé rendue",
        body: "Dépôt confirmé au casier",
        time: "11:06",
      },
      {
        src: "/images/notification-4.png",
        alt: "Notification : tentative échouée d'ouverture du casier",
        title: "Tentative échouée",
        body: "Un code inconnu a été refusé",
        time: "20:41",
      },
    ],
  },
};

export function getNotifications(locale: Locale) {
  return {
    ...getCopy(notifications, locale),
    phoneSrc: "/images/app-host-2.png",
  };
}
