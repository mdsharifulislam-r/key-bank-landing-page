"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { getNavigation } from "@/data/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar({ locale }: { locale: Locale }) {
  const copy = getNavigation(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled || open
          ? "border-b border-navy/5 bg-white/85 shadow-[0_10px_30px_-18px_rgba(15,16,51,0.45)] backdrop-blur-xl"
          : "bg-mist/80 backdrop-blur-md",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {copy.skip}
      </a>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href={`/${locale}#home`} className="shrink-0 rounded-xl" aria-label="KeyBank">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {copy.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-navy/80 transition hover:bg-cream hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch locale={locale} label={copy.languageLabel} />
          <ButtonLink href={`/${locale}#download`}>{copy.getApp}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-navy/5 bg-white px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {copy.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-12 items-center rounded-2xl px-3 text-base font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-navy/5 pt-4">
            <LanguageSwitch locale={locale} label={copy.languageLabel} />
            <ButtonLink href={`/${locale}#download`} className="w-full">
              {copy.getApp}
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div
      role="navigation"
      aria-label={label}
      className="inline-flex items-center rounded-full bg-mist p-1"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <a
            key={item}
            href={`/${item}`}
            hrefLang={item}
            lang={item}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide",
              active ? "bg-white text-brown shadow-sm" : "text-navy/60 hover:text-navy",
            )}
          >
            <span className="sr-only">{localeNames[item]} </span>
            {item.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
