import { Check, CreditCard } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPricing, toPricingPlans } from "@/data/pricing";
import { getPlans } from "@/lib/api";
import type { Locale } from "@/lib/i18n";
import { cn, formatUsd } from "@/lib/utils";

export async function Pricing({ locale }: { locale: Locale }) {
  const copy = getPricing(locale);
  const plans = toPricingPlans((await getPlans()) ?? [], locale);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-28 bg-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="pricing-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-14 grid items-center gap-10 xl:grid-cols-[240px_minmax(0,1fr)]">
          <Reveal className="mx-auto hidden xl:block">
            <PhoneMockup
              src={copy.screenSrc}
              alt={copy.screenAlt}
              width={390}
              height={844}
              sizes="240px"
            />
          </Reveal>
          <div
            className={cn(
              "grid items-stretch gap-5",
              plans.length === 1 && "md:max-w-sm md:grid-cols-1",
              plans.length === 2 && "md:grid-cols-2",
              plans.length >= 3 && "md:grid-cols-3",
            )}
          >
            {plans.length === 0 ? (
              <p className="text-sm leading-6 text-navy/70">{copy.unavailable}</p>
            ) : null}
            {plans.map((plan) => (
              <article
                key={plan.id}
                className="relative flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-card"
              >
                <h3 className="font-heading text-xl font-bold text-navy">{plan.name}</h3>
                {plan.description ? (
                  <p className="mt-2 text-sm leading-6 text-navy/70">{plan.description}</p>
                ) : null}
                <p className="mt-4 flex items-end gap-1 text-navy">
                  <span className="font-heading text-4xl font-bold">{formatUsd(plan.price)}</span>
                  <span className="mb-1 text-sm font-medium text-navy/60">{plan.periodLabel}</span>
                </p>
                {plan.cadence ? <p className="mt-1 text-sm text-navy/60">{plan.cadence}</p> : null}
                {plan.features.length > 0 ? (
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-navy/80">
                        <Check className="h-4 w-4 text-brown" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ButtonLink
                  href={`/${locale}#download`}
                  variant="primary"
                  className="mt-8 w-full"
                >
                  {copy.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-navy/70">
          <CreditCard className="h-4 w-4 text-brown" aria-hidden="true" />
          {copy.paymentNote}
        </p>
        <div className="mx-auto mt-8 max-w-[220px] xl:hidden">
          <PhoneMockup
            src={copy.screenSrc}
            alt={copy.screenAlt}
            width={390}
            height={844}
            sizes="220px"
          />
        </div>
      </Container>
    </section>
  );
}
