import { getCopy, type Locale } from "@/lib/i18n";

const faq = {
  en: {
    eyebrow: "FAQ",
    title: "Questions hosts ask before the first code",
    description: "Straight answers about check-in, codes, properties, languages, and billing.",
    items: [
      {
        question: "How do guests get the key?",
        answer:
          "You generate a QR code or an alphanumeric code in KeyBank and send it by email or SMS. The guest scans the QR or enters the code at the smart locker, and the locker releases the key. You get a notification when that happens.",
      },
      {
        question: "What if a guest loses the code?",
        answer:
          "Open the stay in the app and resend the code, or issue a new single-use code. The activity log shows whether the original code was used, so you are not guessing from a text thread.",
      },
      {
        question: "Can I manage multiple properties?",
        answer:
          "Yes. Each property can have its own locker, codes, and activity history, and you switch between them from the same host account.",
      },
      {
        question: "Which languages are supported?",
        answer:
          "KeyBank supports English, Arabic, and French. You can change the language in the app, and this site is structured for the same three locales.",
      },
      {
        question: "Which payment methods can I use?",
        answer:
          "Subscriptions and duration packages can be paid with Stripe or PayPal. The yearly, weekly, and daily prices on this page are the current duration packages.",
      },
      {
        question: "Is check-in contactless?",
        answer:
          "Yes. The guest uses a QR code or an alphanumeric code at the locker. You do not need to meet them to hand over a physical key.",
      },
      {
        question: "What locker hardware is supported?",
        answer:
          "KeyBank integrates with locker hardware that opens by QR code, RFID, or NFC. Link the locker to a property, then issue codes against that device.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "The duration packages do not include a separate free trial. Pay As You Go starts at a single day, so you can run one turnover before you choose a longer plan. Talk to us from the contact form if you need a pilot across several properties.",
      },
    ],
  },
  ar: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة يطرحها المضيفون قبل أول رمز",
    description: "إجابات مباشرة عن تسجيل الوصول والرموز والعقارات واللغات والفوترة.",
    items: [
      {
        question: "كيف يحصل الضيوف على المفتاح؟",
        answer:
          "تنشئ رمز QR أو رمزاً حرفياً في KeyBank وترسله بالبريد أو برسالة نصية. يمسح الضيف الرمز أو يدخله عند الخزانة الذكية فتُخرج المفتاح. وتصلك رسالة عند حدوث ذلك.",
      },
      {
        question: "ماذا لو فقد الضيف الرمز؟",
        answer:
          "افتح الإقامة في التطبيق وأعد إرسال الرمز، أو أصدر رمزاً جديداً لمرة واحدة. يُظهر سجل النشاط إن كان الرمز الأصلي قد استُخدم، فلا تحتاج إلى التخمين من الرسائل.",
      },
      {
        question: "هل يمكنني إدارة عدة عقارات؟",
        answer:
          "نعم. يمكن أن يكون لكل عقار خزانته ورموزه وسجل نشاطه، وتنتقل بينها من حساب المضيف نفسه.",
      },
      {
        question: "ما اللغات المدعومة؟",
        answer:
          "يدعم KeyBank الإنجليزية والعربية والفرنسية. يمكنك تغيير اللغة في التطبيق، وهذا الموقع مبني على اللغات الثلاث نفسها.",
      },
      {
        question: "ما طرق الدفع المتاحة؟",
        answer:
          "يمكن دفع الاشتراكات وباقات المدة عبر Stripe أو PayPal. الأسعار السنوية والأسبوعية واليومية في هذه الصفحة هي باقات المدة الحالية.",
      },
      {
        question: "هل تسجيل الوصول بدون تلامس؟",
        answer:
          "نعم. يستخدم الضيف رمز QR أو رمزاً حرفياً عند الخزانة. لا تحتاج إلى مقابلته لتسليم مفتاح فعلي.",
      },
      {
        question: "ما أجهزة الخزائن المدعومة؟",
        answer:
          "يتكامل KeyBank مع خزائن تُفتح برمز QR أو RFID أو NFC. اربط الخزانة بعقار ثم أصدر الرموز لهذا الجهاز.",
      },
      {
        question: "هل توجد تجربة مجانية؟",
        answer:
          "لا تتضمن باقات المدة تجربة مجانية منفصلة. يبدأ الدفع حسب الاستخدام بيوم واحد، فيمكنك تجربة إقامة واحدة قبل اختيار خطة أطول. راسلنا من نموذج التواصل إذا احتجت تجربة على عدة عقارات.",
      },
    ],
  },
  fr: {
    eyebrow: "FAQ",
    title: "Les questions des hôtes avant le premier code",
    description: "Des réponses directes sur l'arrivée, les codes, les logements, les langues et la facturation.",
    items: [
      {
        question: "Comment les voyageurs obtiennent-ils la clé ?",
        answer:
          "Vous générez un QR ou un code alphanumérique dans KeyBank et l'envoyez par e-mail ou SMS. Le voyageur scanne le QR ou saisit le code au casier, qui libère la clé. Vous recevez une notification à ce moment-là.",
      },
      {
        question: "Et si un voyageur perd le code ?",
        answer:
          "Ouvrez le séjour dans l'application et renvoyez le code, ou émettez un nouveau code à usage unique. Le journal indique si le code d'origine a été utilisé.",
      },
      {
        question: "Puis-je gérer plusieurs logements ?",
        answer:
          "Oui. Chaque logement peut avoir son casier, ses codes et son historique, et vous passez de l'un à l'autre depuis le même compte hôte.",
      },
      {
        question: "Quelles langues sont prises en charge ?",
        answer:
          "KeyBank prend en charge l'anglais, l'arabe et le français. Vous changez la langue dans l'application, et ce site suit les trois mêmes langues.",
      },
      {
        question: "Quels moyens de paiement puis-je utiliser ?",
        answer:
          "Les abonnements et forfaits de durée se paient avec Stripe ou PayPal. Les prix annuel, hebdomadaire et journalier de cette page sont les forfaits actuels.",
      },
      {
        question: "L'arrivée se fait-elle sans contact ?",
        answer:
          "Oui. Le voyageur utilise un QR ou un code alphanumérique au casier. Vous n'avez pas à le rencontrer pour lui remettre une clé physique.",
      },
      {
        question: "Quel matériel de casier est pris en charge ?",
        answer:
          "KeyBank s'intègre aux casiers qui s'ouvrent par QR, RFID ou NFC. Reliez le casier à un logement, puis émettez des codes pour cet appareil.",
      },
      {
        question: "Y a-t-il un essai gratuit ?",
        answer:
          "Les forfaits de durée n'incluent pas d'essai gratuit séparé. Le paiement à l'usage commence à une journée, pour tester une rotation avant une formule plus longue. Écrivez-nous depuis le formulaire de contact pour un pilote sur plusieurs logements.",
      },
    ],
  },
};

export function getFaq(locale: Locale) {
  return getCopy(faq, locale);
}
