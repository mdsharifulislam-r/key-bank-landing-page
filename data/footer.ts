import { getCopy, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * PLACEHOLDER company links, social profiles, and contact details.
 * Point legal pages and social hrefs at the real destinations before launch.
 */
const footer = {
  en: {
    description:
      "KeyBank is a secure mobile platform for contactless key handover. Hosts store keys in smart lockers and guests check in with a code.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it Works", href: "#how-it-works" },
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Download", href: "#download" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Reviews", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help center", href: "#faq" },
          { label: "Contact", href: "#contact" },
          { label: site.email, href: `mailto:${site.email}` },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "X", href: "https://x.com" },
    ],
    rights: `© ${new Date().getFullYear()} KeyBank. All rights reserved.`,
    contactLabel: "Contact",
  },
  ar: {
    description:
      "KeyBank منصة جوال آمنة لتسليم المفاتيح دون تلامس. يخزّن المضيفون المفاتيح في خزائن ذكية ويسجّل الضيوف الوصول برمز.",
    columns: [
      {
        title: "المنتج",
        links: [
          { label: "كيف يعمل", href: "#how-it-works" },
          { label: "المميزات", href: "#features" },
          { label: "الأسعار", href: "#pricing" },
          { label: "التنزيل", href: "#download" },
        ],
      },
      {
        title: "الشركة",
        links: [
          { label: "الآراء", href: "#testimonials" },
          { label: "الأسئلة الشائعة", href: "#faq" },
          { label: "تواصل معنا", href: "#contact" },
        ],
      },
      {
        title: "الدعم",
        links: [
          { label: "مركز المساعدة", href: "#faq" },
          { label: "تواصل معنا", href: "#contact" },
          { label: site.email, href: `mailto:${site.email}` },
        ],
      },
      {
        title: "قانوني",
        links: [
          { label: "الخصوصية", href: "/privacy" },
          { label: "الشروط", href: "/terms" },
        ],
      },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "X", href: "https://x.com" },
    ],
    rights: `© ${new Date().getFullYear()} KeyBank. جميع الحقوق محفوظة.`,
    contactLabel: "التواصل",
  },
  fr: {
    description:
      "KeyBank est une plateforme mobile sécurisée pour la remise de clés sans contact. Les hôtes rangent les clés dans des casiers connectés et les voyageurs arrivent avec un code.",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "Comment ça marche", href: "#how-it-works" },
          { label: "Fonctionnalités", href: "#features" },
          { label: "Tarifs", href: "#pricing" },
          { label: "Télécharger", href: "#download" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "Avis", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Assistance",
        links: [
          { label: "Centre d'aide", href: "#faq" },
          { label: "Contact", href: "#contact" },
          { label: site.email, href: `mailto:${site.email}` },
        ],
      },
      {
        title: "Mentions",
        links: [
          { label: "Confidentialité", href: "/privacy" },
          { label: "Conditions", href: "/terms" },
        ],
      },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "X", href: "https://x.com" },
    ],
    rights: `© ${new Date().getFullYear()} KeyBank. Tous droits réservés.`,
    contactLabel: "Contact",
  },
};

export function getFooter(locale: Locale) {
  const copy = getCopy(footer, locale);
  return {
    ...copy,
    email: site.email,
    phone: site.phone,
    phoneHref: site.phoneHref,
    columns: copy.columns.map((column) => ({
      ...column,
      links: column.links.map((link) => ({
        ...link,
        href: link.href.startsWith("#")
          ? `/${locale}${link.href}`
          : link.href.startsWith("/")
            ? `/${locale}${link.href}`
            : link.href,
      })),
    })),
  };
}
