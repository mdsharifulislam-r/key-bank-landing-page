import { getFaq } from "@/data/faq";
import { getFeatures } from "@/data/features";
import { toPricingPlans } from "@/data/pricing";
import { getSeo } from "@/data/seo";
import { getLocalizedFaqs, getPlans } from "@/lib/api";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function JsonLd({ locale }: { locale: Locale }) {
  const seo = getSeo(locale);
  const remoteFaqs = await getLocalizedFaqs(locale);
  const faqItems = remoteFaqs ?? getFaq(locale).items;
  const plans = toPricingPlans((await getPlans()) ?? [], locale);
  const features = getFeatures(locale);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/favicon.png`,
        email: site.email,
        description: seo.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: ["en", "ar", "fr"],
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android",
        description: seo.description,
        ...(plans.length > 0
          ? {
              offers: plans.map((plan) => ({
                "@type": "Offer",
                name: plan.name,
                price: String(plan.price),
                priceCurrency: plan.currency,
                description: [plan.description, plan.features.join(", "), plan.cadence]
                  .filter(Boolean)
                  .join(". "),
                url: `${site.url}/${locale}#pricing`,
              })),
            }
          : {}),
        featureList: features.items.map((item) => item.title),
        inLanguage: ["en", "ar", "fr"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
