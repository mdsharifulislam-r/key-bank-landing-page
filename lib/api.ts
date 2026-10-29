import { cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n";
import { translateHtml, translateTexts } from "@/lib/translate";

const apiBase = (process.env.KEYBANK_API_URL ?? "http://10.10.26.164:5001/api/v1").replace(
  /\/$/,
  "",
);

type ApiEnvelope<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ApiPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  recurring: string;
  features: string[];
};

function authHeaders(): HeadersInit {
  const headers: Record<string, string> = { Accept: "application/json" };
  return headers;
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${apiBase}${path}`, {
      headers: authHeaders(),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const body = (await response.json()) as ApiEnvelope<T>;
    if (!body.success) return null;
    return body.data;
  } catch {
    return null;
  }
}

function asPlan(value: unknown): ApiPlan | null {
  if (!value || typeof value !== "object") return null;
  const plan = value as Record<string, unknown>;
  const price = typeof plan.price === "number" ? plan.price : Number(plan.price);
  const id = typeof plan._id === "string" ? plan._id : "";
  const name = typeof plan.name === "string" ? plan.name.trim() : "";
  if (!id || !name || !Number.isFinite(price)) return null;
  if (typeof plan.status === "string" && plan.status !== "active") return null;

  const features = Array.isArray(plan.features)
    ? plan.features.filter((item): item is string => typeof item === "string" && item.trim() !== "")
    : [];

  return {
    id,
    name,
    description: typeof plan.description === "string" ? plan.description.trim() : "",
    price,
    recurring: typeof plan.recurring === "string" ? plan.recurring.trim().toLowerCase() : "",
    features,
  };
}

export async function getPlans(): Promise<ApiPlan[] | null> {
  "use cache";
  cacheLife("minutes");

  const data = await apiGet<unknown>("/plan");
  if (!Array.isArray(data)) return null;
  return data.map(asPlan).filter((plan): plan is ApiPlan => plan !== null);
}

/** Disclaimer `data` is an HTML string. Scripts and inline handlers are removed. */
export async function getDisclaimer(type: "terms" | "privacy"): Promise<string | null> {
  "use cache";
  cacheLife("minutes");

  const data = await apiGet<unknown>(`/disclaimer?type=${type}`);
  if (typeof data !== "string") return null;
  const html = data.trim();
  if (!html) return null;
  return sanitizeHtml(html);
}

/** English HTML from the API, machine-translated for Arabic and French. */
export async function getLocalizedDisclaimer(
  type: "terms" | "privacy",
  locale: Locale,
): Promise<string | null> {
  "use cache";
  cacheLife("hours");

  const html = await getDisclaimer(type);
  if (!html || locale === "en") return html;
  return translateHtml(html, locale);
}

export async function getLocalizedFaqs(locale: Locale): Promise<FaqItem[] | null> {
  "use cache";
  cacheLife("hours");

  const data = await apiGet<unknown>("/faq");
  if (!Array.isArray(data)) return null;

  const faqs = data.map(asFaq).filter((item): item is FaqItem => item !== null);
  if (locale === "en" || faqs.length === 0) return faqs;

  const translated = await translateTexts(
    faqs.flatMap((item) => [item.question, item.answer]),
    locale,
  );

  return faqs.map((item, index) => ({
    ...item,
    question: translated[index * 2] || item.question,
    answer: translated[index * 2 + 1] || item.answer,
  }));
}

function asFaq(value: unknown): FaqItem | null {
  if (!value || typeof value !== "object") return null;
  const faq = value as Record<string, unknown>;
  const id = typeof faq._id === "string" ? faq._id : "";
  const question = typeof faq.question === "string" ? faq.question.trim() : "";
  const answer = typeof faq.answer === "string" ? faq.answer.trim() : "";
  if (!id || !question) return null;
  return { id, question, answer };
}

function sanitizeHtml(html: string): string {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const source = body?.[1] ?? html;

  return source
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<(iframe|object|embed|link|meta)[^>]*?>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(iframe|object|embed|link|meta)\b[^>]*\/?>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(['"])\s*javascript:[\s\S]*?\2/gi, '$1="#"');
}
