export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://keybank.app"
).replace(/\/$/, "");

export const site = {
  name: "KeyBank",
  url: siteUrl,
  /** PLACEHOLDER contact details — replace before launch. */
  email: "hello@keybank.app",
  phone: "+1 (000) 000-0000",
  phoneHref: "tel:+10000000000",
  /** PLACEHOLDER store listings. */
  appStoreUrl: "https://apps.apple.com/app/keybank",
  playStoreUrl: "https://play.google.com/store/apps/details?id=app.keybank",
  /** PLACEHOLDER host login. */
  loginUrl: "https://app.keybank.app/login",
} as const;
