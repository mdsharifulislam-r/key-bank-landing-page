import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

/**
 * Locale routes render <html> and <body> in app/[locale]/layout.tsx so lang and dir
 * can follow the active locale, including dir="rtl" for Arabic.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
