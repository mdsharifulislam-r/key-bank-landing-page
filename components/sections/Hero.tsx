import { Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Float } from "@/components/ui/Float";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Reveal } from "@/components/ui/Reveal";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { getHero } from "@/data/hero";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const copy = getHero(locale);

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_75%_40%,black,transparent_70%)]" />
        <div className="absolute -start-16 top-16 h-64 w-64 rounded-full bg-primary-200/70 blur-3xl" />
        <div className="absolute end-0 bottom-0 h-72 w-72 rounded-full bg-primary-300/40 blur-3xl" />
        <svg
          className="absolute -end-10 top-0 hidden h-full w-[62%] lg:block"
          viewBox="0 0 800 900"
          fill="none"
        >
          <path
            d="M210 0C390 50 560 190 520 400C470 680 280 820 80 900H800V0H210Z"
            fill="url(#heroGold)"
          />
          <defs>
            <linearGradient id="heroGold" x1="180" y1="0" x2="760" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2C06E" />
              <stop offset="0.48" stopColor="#C9961B" />
              <stop offset="1" stopColor="#A67B14" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:py-24">
        <Reveal>
          <h1
            id="hero-heading"
            className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            {copy.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-navy/75 sm:text-lg">{copy.line1}</p>
          <p className="mt-3 max-w-xl text-base leading-7 text-navy/75 sm:text-lg">{copy.line2}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/${locale}#download`}>{copy.download}</ButtonLink>
            <ButtonLink href={`/${locale}#how-it-works`} variant="secondary">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              {copy.watch}
            </ButtonLink>
          </div>
          <div className="mt-8">
            <StoreBadges
              appStoreHref={copy.appStoreHref}
              playStoreHref={copy.playStoreHref}
              appStoreBadge={copy.appStoreBadge}
              playStoreBadge={copy.playStoreBadge}
              appStoreAlt={copy.appStoreAlt}
              playStoreAlt={copy.playStoreAlt}
            />
          </div>
        </Reveal>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Float className="relative z-10 mx-auto w-[78%] max-w-[300px]" y={14} duration={6}>
            <PhoneMockup
              src={copy.phoneSrc}
              alt={copy.phoneAlt}
              priority
              sizes="(max-width: 1024px) 70vw, 300px"
              className="max-w-none"
            />
          </Float>
          <Float
            className="absolute start-0 top-16 z-20 hidden w-56 lg:block"
            y={10}
            duration={7}
            delay={0.4}
          >
            <GlassCard title={copy.collectedTitle} body={copy.collectedBody} tone="success" />
          </Float>
          <Float
            className="absolute end-0 bottom-16 z-20 hidden w-56 lg:block"
            y={8}
            duration={6.5}
            delay={0.8}
          >
            <GlassCard title={copy.codeTitle} body={copy.codeBody} tone="info" />
          </Float>
          <div className="relative z-20 mt-4 grid gap-3 lg:hidden">
            <GlassCard title={copy.collectedTitle} body={copy.collectedBody} tone="success" />
            <GlassCard title={copy.codeTitle} body={copy.codeBody} tone="info" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function GlassCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "success" | "info";
}) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_18px_50px_-24px_rgba(15,16,51,0.55)] backdrop-blur-md">
      <p className="flex items-center gap-2 text-sm font-semibold text-navy">
        <span
          className={
            tone === "success"
              ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs text-navy"
              : "inline-flex h-6 w-6 items-center justify-center rounded-full bg-cream text-xs text-brown"
          }
          aria-hidden="true"
        >
          {tone === "success" ? "✓" : "•"}
        </span>
        {title}
      </p>
      <p className="mt-1 ps-8 text-sm text-navy/70">{body}</p>
    </div>
  );
}
