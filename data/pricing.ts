import { getCopy, type Locale } from "@/lib/i18n";
import type { ApiPlan } from "@/lib/api";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "USD";
  periodLabel: string;
  cadence: string;
  features: string[];
};

type PeriodCopy = {
  label: string;
  cadence: string;
};

const periods: Record<Locale, Record<string, PeriodCopy>> = {
  en: {
    day: { label: "/day", cadence: "Billed per day" },
    daily: { label: "/day", cadence: "Billed per day" },
    week: { label: "/week", cadence: "Billed per week" },
    weekly: { label: "/week", cadence: "Billed per week" },
    month: { label: "/month", cadence: "Billed monthly" },
    monthly: { label: "/month", cadence: "Billed monthly" },
    year: { label: "/year", cadence: "Billed yearly" },
    yearly: { label: "/year", cadence: "Billed yearly" },
    annual: { label: "/year", cadence: "Billed yearly" },
    annually: { label: "/year", cadence: "Billed yearly" },
  },
  ar: {
    day: { label: "/يوم", cadence: "يُحاسب عن كل يوم" },
    daily: { label: "/يوم", cadence: "يُحاسب عن كل يوم" },
    week: { label: "/أسبوع", cadence: "يُحاسب عن كل أسبوع" },
    weekly: { label: "/أسبوع", cadence: "يُحاسب عن كل أسبوع" },
    month: { label: "/شهر", cadence: "يُحاسب شهرياً" },
    monthly: { label: "/شهر", cadence: "يُحاسب شهرياً" },
    year: { label: "/سنة", cadence: "يُحاسب سنوياً" },
    yearly: { label: "/سنة", cadence: "يُحاسب سنوياً" },
    annual: { label: "/سنة", cadence: "يُحاسب سنوياً" },
    annually: { label: "/سنة", cadence: "يُحاسب سنوياً" },
  },
  fr: {
    day: { label: "/jour", cadence: "Facturé à la journée" },
    daily: { label: "/jour", cadence: "Facturé à la journée" },
    week: { label: "/semaine", cadence: "Facturé à la semaine" },
    weekly: { label: "/semaine", cadence: "Facturé à la semaine" },
    month: { label: "/mois", cadence: "Facturé au mois" },
    monthly: { label: "/mois", cadence: "Facturé au mois" },
    year: { label: "/an", cadence: "Facturé à l'année" },
    yearly: { label: "/an", cadence: "Facturé à l'année" },
    annual: { label: "/an", cadence: "Facturé à l'année" },
    annually: { label: "/an", cadence: "Facturé à l'année" },
  },
};

const pricing = {
  en: {
    eyebrow: "Pricing",
    title: "Duration packages",
    description: "Start with a single turnover or keep a locker on a longer plan.",
    cta: "Get the App",
    paymentNote: "Pay securely with Stripe or PayPal.",
    screenAlt: "KeyBank duration packages screen with daily, weekly, and yearly plans",
    unavailable: "Plans are unavailable right now. Please try again in a moment.",
  },
  ar: {
    eyebrow: "الأسعار",
    title: "باقات المدة",
    description: "ابدأ بإقامة واحدة أو أبقِ الخزانة على خطة أطول.",
    cta: "حمّل التطبيق",
    paymentNote: "ادفع بأمان عبر Stripe أو PayPal.",
    screenAlt: "شاشة باقات المدة في KeyBank للخطط اليومية والأسبوعية والسنوية",
    unavailable: "الباقات غير متاحة الآن. حاول مرة أخرى بعد قليل.",
  },
  fr: {
    eyebrow: "Tarifs",
    title: "Forfaits de durée",
    description: "Commencez par une seule rotation ou gardez un casier sur une formule plus longue.",
    cta: "Obtenir l'application",
    paymentNote: "Payez en sécurité avec Stripe ou PayPal.",
    screenAlt: "Écran des forfaits KeyBank : formules au jour, à la semaine et à l'année",
    unavailable: "Les forfaits sont indisponibles pour le moment. Réessayez dans un instant.",
  },
};

export function getPricing(locale: Locale) {
  return {
    ...getCopy(pricing, locale),
    screenSrc: "/images/app-pricing.png",
  };
}

export function toPricingPlans(plans: ApiPlan[], locale: Locale): PricingPlan[] {
  const labels = periods[locale];
  return plans.map((plan) => {
    const period = labels[plan.recurring];
    return {
      id: plan.id,
      name: plan.name,
      description: plan.description,
      price: plan.price,
      currency: "USD",
      periodLabel: period?.label ?? (plan.recurring ? `/${plan.recurring}` : ""),
      cadence: period?.cadence ?? plan.recurring,
      features: plan.features,
    };
  });
}
