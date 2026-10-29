import { getCopy, type Locale } from "@/lib/i18n";

const problem = {
  en: {
    eyebrow: "The problem",
    title: "Key handovers still run on luck and lockboxes",
    description:
      "Short-term rental hosts lose hours, keys, and peace of mind every turnover. KeyBank replaces the meetup with a locker, a code, and a record.",
    beforeTitle: "Manual handover",
    afterTitle: "With KeyBank",
    rows: [
      {
        problem: "Security risks",
        problemDetail: "A physical key passes between strangers with no record of who held it.",
        solution: "Authenticated codes",
        solutionDetail: "The locker releases a key only for a code you issued, and every attempt is logged.",
      },
      {
        problem: "Late arrivals",
        problemDetail: "Someone has to wait on a porch, in a lobby, or in a parking lot.",
        solution: "Check-in on their schedule",
        solutionDetail: "Guests collect the key when they arrive, including after midnight.",
      },
      {
        problem: "Wasted time",
        problemDetail: "Every turnover repeats the same drive, text thread, and spare-key hunt.",
        solution: "A code in seconds",
        solutionDetail: "Generate a QR or alphanumeric pass and send it by email or SMS.",
      },
      {
        problem: "Lost keys",
        problemDetail: "A missing key means a locksmith, a dark lock, and an unhappy guest.",
        solution: "A trail for every key",
        solutionDetail: "Collection, drop-off, and failed attempts show up as they happen.",
      },
    ],
  },
  ar: {
    eyebrow: "المشكلة",
    title: "تسليم المفاتيح ما زال يعتمد على الحظ وصناديق الأقفال",
    description:
      "يخسر مضيفو الإيجار قصير الأمد ساعات ومفاتيح وراحة البال في كل مغادرة. يستبدل KeyBank اللقاء بخزانة ورمز وسجل.",
    beforeTitle: "التسليم اليدوي",
    afterTitle: "مع KeyBank",
    rows: [
      {
        problem: "مخاطر أمنية",
        problemDetail: "ينتقل المفتاح بين غرباء من دون أي سجل لمن حمله.",
        solution: "رموز موثّقة",
        solutionDetail: "لا تُخرج الخزانة المفتاح إلا لرمز أصدرته أنت، ويُسجَّل كل محاولة.",
      },
      {
        problem: "الوصول المتأخر",
        problemDetail: "يضطر أحدهم إلى الانتظار عند الباب أو في الردهة أو في الموقف.",
        solution: "تسجيل وصول بوقت الضيف",
        solutionDetail: "يستلم الضيوف المفتاح عند وصولهم، حتى بعد منتصف الليل.",
      },
      {
        problem: "وقت ضائع",
        problemDetail: "تتكرر في كل إقامة الرحلة نفسها وسلسلة الرسائل والبحث عن مفتاح احتياطي.",
        solution: "رمز خلال ثوانٍ",
        solutionDetail: "أنشئ رمز QR أو رمزاً حرفياً وأرسله بالبريد أو برسالة نصية.",
      },
      {
        problem: "مفاتيح ضائعة",
        problemDetail: "المفتاح المفقود يعني قفلاً وضيفاً غير راضٍ وزيارة لقفّال.",
        solution: "أثر لكل مفتاح",
        solutionDetail: "يظهر الاستلام والإرجاع والمحاولات الفاشلة لحظة وقوعها.",
      },
    ],
  },
  fr: {
    eyebrow: "Le problème",
    title: "La remise des clés repose encore sur le hasard et les boîtes à clé",
    description:
      "Les hôtes en location courte durée perdent des heures, des clés et leur tranquillité à chaque rotation. KeyBank remplace le rendez-vous par un casier, un code et un historique.",
    beforeTitle: "Remise manuelle",
    afterTitle: "Avec KeyBank",
    rows: [
      {
        problem: "Risques de sécurité",
        problemDetail: "Une clé physique passe entre des inconnus sans trace de qui l'a eue.",
        solution: "Codes authentifiés",
        solutionDetail: "Le casier ne libère la clé que pour un code que vous avez émis, et chaque tentative est enregistrée.",
      },
      {
        problem: "Arrivées tardives",
        problemDetail: "Quelqu'un doit attendre sur le pas de la porte, dans un hall ou sur un parking.",
        solution: "Arrivée à leur heure",
        solutionDetail: "Les voyageurs récupèrent la clé en arrivant, même après minuit.",
      },
      {
        problem: "Temps perdu",
        problemDetail: "Chaque rotation rejoue le même trajet, le même fil de messages et la même chasse au double.",
        solution: "Un code en quelques secondes",
        solutionDetail: "Générez un QR ou un code alphanumérique et envoyez-le par e-mail ou SMS.",
      },
      {
        problem: "Clés perdues",
        problemDetail: "Une clé manquante, c'est un serrurier, une serrure bloquée et un voyageur mécontent.",
        solution: "Une trace pour chaque clé",
        solutionDetail: "Le retrait, le retour et les tentatives échouées apparaissent au moment où ils se produisent.",
      },
    ],
  },
};

export function getProblem(locale: Locale) {
  return getCopy(problem, locale);
}
