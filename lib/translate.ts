import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const SEPARATOR = "\n⟦⟧\n";
const MAX_CHARS = 420;

/**
 * MyMemory's free translation API. English is returned unchanged.
 * https://mymemory.translated.net/doc/spec.php
 */
/** Plain strings, in order. English is returned unchanged. A failed batch keeps the originals. */
export async function translateTexts(texts: string[], locale: Locale): Promise<string[]> {
  if (locale === "en" || texts.length === 0) return texts;

  const jobs: { index: number; text: string }[] = [];
  texts.forEach((value, index) => {
    const text = value.replace(/\s+/g, " ").trim();
    if (!text || !/[A-Za-z]/.test(text)) return;
    for (const piece of splitLong(text)) jobs.push({ index, text: piece });
  });
  if (jobs.length === 0) return texts;

  const translated = new Map<number, string[]>();
  for (const batch of batchesOf(jobs)) {
    const result = await translateBatch(
      batch.map((job) => job.text),
      locale,
    );
    if (!result) return texts;
    batch.forEach((job, index) => {
      const list = translated.get(job.index) ?? [];
      list.push(result[index] ?? job.text);
      translated.set(job.index, list);
    });
  }

  return texts.map((original, index) => translated.get(index)?.join(" ") ?? original);
}

export async function translateHtml(html: string, locale: Locale): Promise<string> {
  if (locale === "en") return html;

  const parts = html.split(/(<[^>]+>)/);
  const jobs: { index: number; text: string }[] = [];

  parts.forEach((part, index) => {
    if (part.startsWith("<")) return;
    const text = decodeEntities(part).replace(/\s+/g, " ").trim();
    if (!text || !/[A-Za-z]/.test(text)) return;
    for (const piece of splitLong(text)) jobs.push({ index, text: piece });
  });

  if (jobs.length === 0) return html;

  const translated = new Map<number, string[]>();
  for (const batch of batchesOf(jobs)) {
    const result = await translateBatch(
      batch.map((job) => job.text),
      locale,
    );
    if (!result) return html;
    batch.forEach((job, index) => {
      const list = translated.get(job.index) ?? [];
      list.push(result[index] ?? job.text);
      translated.set(job.index, list);
    });
  }

  return parts
    .map((part, index) => {
      const pieces = translated.get(index);
      if (!pieces) return part;
      return escapeHtml(pieces.join(" "));
    })
    .join("");
}

function splitLong(text: string): string[] {
  if (text.length <= MAX_CHARS) return [text];
  const pieces: string[] = [];
  let rest = text;
  while (rest.length > MAX_CHARS) {
    let cut = rest.lastIndexOf(" ", MAX_CHARS);
    if (cut < 160) cut = MAX_CHARS;
    pieces.push(rest.slice(0, cut));
    rest = rest.slice(cut).trim();
  }
  if (rest) pieces.push(rest);
  return pieces;
}

function batchesOf(jobs: { index: number; text: string }[]) {
  const batches: { index: number; text: string }[][] = [];
  let current: { index: number; text: string }[] = [];
  let length = 0;

  for (const job of jobs) {
    const next = length + job.text.length + SEPARATOR.length;
    if (current.length > 0 && next > MAX_CHARS) {
      batches.push(current);
      current = [job];
      length = job.text.length;
    } else {
      current.push(job);
      length = current.length === 1 ? job.text.length : next;
    }
  }

  if (current.length > 0) batches.push(current);
  return batches;
}

async function translateBatch(texts: string[], locale: "ar" | "fr"): Promise<string[] | null> {
  try {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", texts.join(SEPARATOR));
    url.searchParams.set("langpair", `en|${locale}`);
    url.searchParams.set("de", process.env.MYMEMORY_EMAIL ?? site.email);

    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) return null;

    const body = (await response.json()) as {
      responseStatus?: number;
      quotaFinished?: boolean;
      responseData?: { translatedText?: string };
    };
    const translated = body.responseData?.translatedText ?? "";
    if (body.responseStatus !== 200 || body.quotaFinished || /MYMEMORY WARNING/i.test(translated)) {
      return null;
    }

    const pieces = translated.split(/\s*⟦⟧\s*/).map((piece) => piece.trim());
    if (pieces.length !== texts.length) return null;
    return pieces;
  } catch {
    return null;
  }
}

function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
