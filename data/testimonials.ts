import { getCopy, type Locale } from "@/lib/i18n";

/**
 * TODO: Replace these placeholder testimonials with real host reviews before launch.
 * Do not add Review or AggregateRating JSON-LD until the quotes are verified.
 * The carousel is sample layout content, not social proof.
 */
const testimonials = {
  en: {
    eyebrow: "Sample reviews",
    title: "Placeholder stories for the layout",
    description:
      "These quotes are fictional stand-ins. Replace them in data/testimonials.ts with verified reviews before launch.",
    previous: "Previous review",
    next: "Next review",
    items: [
      {
        quote:
          "Placeholder review: swapping porch meetups for a locker code gave me my Sundays back. Replace this quote before launch.",
        name: "Jordan Hale (Placeholder)",
        role: "Sample host · 4 listings",
        avatar: "/images/avatars/1.jpg",
        avatarAlt: "Illustrated placeholder avatar for Jordan Hale",
      },
      {
        quote:
          "Placeholder review: guests found the locker from the pin and I saw the collection alert before I landed. Replace this quote before launch.",
        name: "Samira El-Sayed (Placeholder)",
        role: "Sample host · city apartments",
        avatar: "/images/avatars/2.jpg",
        avatarAlt: "Illustrated placeholder avatar for Samira El-Sayed",
      },
      {
        quote:
          "Placeholder review: single-use codes stopped old guests from coming back to the lockbox. Replace this quote before launch.",
        name: "Camille Dubois (Placeholder)",
        role: "Sample property manager",
        avatar: "/images/avatars/3.jpg",
        avatarAlt: "Illustrated placeholder avatar for Camille Dubois",
      },
      {
        quote:
          "Placeholder review: the failed-attempt alert caught a wrong code before check-in night. Replace this quote before launch.",
        name: "Noah Patel (Placeholder)",
        role: "Sample host · two cities",
        avatar: "/images/avatars/4.jpg",
        avatarAlt: "Illustrated placeholder avatar for Noah Patel",
      },
      {
        quote:
          "Placeholder review: Arabic and French in the same app helped our mixed guest list. Replace this quote before launch.",
        name: "Elena Rossi (Placeholder)",
        role: "Sample co-host",
        avatar: "/images/avatars/5.jpg",
        avatarAlt: "Illustrated placeholder avatar for Elena Rossi",
      },
    ],
  },
  ar: {
    eyebrow: "آراء نموذجية",
    title: "قصص نائبة لتصميم الصفحة",
    description:
      "هذه الاقتباسات أمثلة خيالية. استبدلها في data/testimonials.ts بآراء موثّقة قبل الإطلاق.",
    previous: "الرأي السابق",
    next: "الرأي التالي",
    items: [
      {
        quote:
          "رأي نائب: استبدال لقاءات الباب برمز خزانة أعاد إليّ أيام الأحد. استبدل هذا الاقتباس قبل الإطلاق.",
        name: "Jordan Hale (نموذج)",
        role: "مضيف نموذجي · 4 إعلانات",
        avatar: "/images/avatars/1.jpg",
        avatarAlt: "صورة رمزية توضيحية نائبة لـ Jordan Hale",
      },
      {
        quote:
          "رأي نائب: وجد الضيوف الخزانة من الدبوس ورأيت تنبيه الاستلام قبل الهبوط. استبدل هذا الاقتباس قبل الإطلاق.",
        name: "Samira El-Sayed (نموذج)",
        role: "مضيفة نموذجية · شقق في المدينة",
        avatar: "/images/avatars/2.jpg",
        avatarAlt: "صورة رمزية توضيحية نائبة لـ Samira El-Sayed",
      },
      {
        quote:
          "رأي نائب: أوقفت الرموز أحادية الاستخدام عودة الضيوف السابقين إلى صندوق القفل. استبدل هذا الاقتباس قبل الإطلاق.",
        name: "Camille Dubois (نموذج)",
        role: "مديرة عقارات نموذجية",
        avatar: "/images/avatars/3.jpg",
        avatarAlt: "صورة رمزية توضيحية نائبة لـ Camille Dubois",
      },
      {
        quote:
          "رأي نائب: التقط تنبيه المحاولة الفاشلة رمزاً خاطئاً قبل ليلة الوصول. استبدل هذا الاقتباس قبل الإطلاق.",
        name: "Noah Patel (نموذج)",
        role: "مضيف نموذجي · مدينتان",
        avatar: "/images/avatars/4.jpg",
        avatarAlt: "صورة رمزية توضيحية نائبة لـ Noah Patel",
      },
      {
        quote:
          "رأي نائب: العربية والفرنسية في التطبيق نفسه ساعدتا قائمة ضيوف مختلطة. استبدل هذا الاقتباس قبل الإطلاق.",
        name: "Elena Rossi (نموذج)",
        role: "مضيفة مشاركة نموذجية",
        avatar: "/images/avatars/5.jpg",
        avatarAlt: "صورة رمزية توضيحية نائبة لـ Elena Rossi",
      },
    ],
  },
  fr: {
    eyebrow: "Avis d'exemple",
    title: "Témoignages provisoires pour la mise en page",
    description:
      "Ces citations sont fictives. Remplacez-les dans data/testimonials.ts par des avis vérifiés avant le lancement.",
    previous: "Avis précédent",
    next: "Avis suivant",
    items: [
      {
        quote:
          "Avis provisoire : remplacer les rendez-vous sur le pas de la porte par un code de casier m'a rendu mes dimanches. Remplacez cette citation avant le lancement.",
        name: "Jordan Hale (exemple)",
        role: "Hôte d'exemple · 4 annonces",
        avatar: "/images/avatars/1.jpg",
        avatarAlt: "Avatar illustré provisoire de Jordan Hale",
      },
      {
        quote:
          "Avis provisoire : les voyageurs ont trouvé le casier grâce au repère et j'ai vu l'alerte de retrait avant d'atterrir. Remplacez cette citation avant le lancement.",
        name: "Samira El-Sayed (exemple)",
        role: "Hôte d'exemple · appartements en ville",
        avatar: "/images/avatars/2.jpg",
        avatarAlt: "Avatar illustré provisoire de Samira El-Sayed",
      },
      {
        quote:
          "Avis provisoire : les codes à usage unique ont empêché d'anciens voyageurs de revenir à la boîte à clé. Remplacez cette citation avant le lancement.",
        name: "Camille Dubois (exemple)",
        role: "Gestionnaire d'exemple",
        avatar: "/images/avatars/3.jpg",
        avatarAlt: "Avatar illustré provisoire de Camille Dubois",
      },
      {
        quote:
          "Avis provisoire : l'alerte de tentative échouée a repéré un mauvais code avant la nuit d'arrivée. Remplacez cette citation avant le lancement.",
        name: "Noah Patel (exemple)",
        role: "Hôte d'exemple · deux villes",
        avatar: "/images/avatars/4.jpg",
        avatarAlt: "Avatar illustré provisoire de Noah Patel",
      },
      {
        quote:
          "Avis provisoire : l'arabe et le français dans la même application ont aidé une clientèle mixte. Remplacez cette citation avant le lancement.",
        name: "Elena Rossi (exemple)",
        role: "Co-hôte d'exemple",
        avatar: "/images/avatars/5.jpg",
        avatarAlt: "Avatar illustré provisoire d'Elena Rossi",
      },
    ],
  },
};

export function getTestimonials(locale: Locale) {
  return getCopy(testimonials, locale);
}
