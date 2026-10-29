import { getCopy, type Locale } from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: string;
};

type NavigationCopy = {
  skip: string;
  getApp: string;
  openMenu: string;
  closeMenu: string;
  languageLabel: string;
  items: NavItem[];
};

const navigation: { en: NavigationCopy; ar: NavigationCopy; fr: NavigationCopy } = {
  en: {
    skip: "Skip to content",
    getApp: "Get the App",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    items: [
      { href: "#home", label: "Home" },
      { href: "#how-it-works", label: "How it Works" },
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
  ar: {
    skip: "تخطي إلى المحتوى",
    getApp: "حمّل التطبيق",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    languageLabel: "اللغة",
    items: [
      { href: "#home", label: "الرئيسية" },
      { href: "#how-it-works", label: "كيف يعمل" },
      { href: "#features", label: "المميزات" },
      { href: "#pricing", label: "الأسعار" },
      { href: "#faq", label: "الأسئلة الشائعة" },
      { href: "#contact", label: "تواصل معنا" },
    ],
  },
  fr: {
    skip: "Aller au contenu",
    getApp: "Obtenir l'application",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
    items: [
      { href: "#home", label: "Accueil" },
      { href: "#how-it-works", label: "Comment ça marche" },
      { href: "#features", label: "Fonctionnalités" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
};

export function getNavigation(locale: Locale) {
  const copy = getCopy(navigation, locale);
  return {
    ...copy,
    items: copy.items.map((item) => ({
      ...item,
      href: `/${locale}${item.href}`,
    })),
  };
}
