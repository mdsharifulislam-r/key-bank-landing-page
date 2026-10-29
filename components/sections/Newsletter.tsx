"use client";

import { FormEvent, useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { getNewsletter } from "@/data/newsletter";
import type { Locale } from "@/lib/i18n";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter({ locale }: { locale: Locale }) {
  const copy = getNewsletter(locale);
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST the address to an API route such as /api/subscribe once the newsletter service exists.
    const value = email.trim();
    if (!value) {
      setDone(false);
      setError(copy.requiredError);
      return;
    }
    if (!emailPattern.test(value)) {
      setDone(false);
      setError(copy.invalidError);
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500 px-6 py-12 shadow-glow sm:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brown">{copy.eyebrow}</p>
            <h2 id="contact-heading" className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-navy/80">{copy.description}</p>
          </div>
          <form className="mx-auto mt-8 max-w-xl" onSubmit={onSubmit} noValidate>
            <label htmlFor={inputId} className="sr-only">
              {copy.label}
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id={inputId}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder={copy.placeholder}
                value={email}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError("");
                }}
                className="min-h-12 w-full rounded-full border border-navy/10 bg-white px-5 text-sm text-navy outline-none placeholder:text-navy/40"
              />
              <button
                type="submit"
                className="hover-lift inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {copy.button}
              </button>
            </div>
            {error ? (
              <p id={errorId} role="alert" className="mt-3 text-sm font-semibold text-navy">
                {error}
              </p>
            ) : null}
            {done ? (
              <p role="status" className="mt-3 text-sm font-medium text-navy">
                {copy.success}
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-5 text-navy">{copy.privacy}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
