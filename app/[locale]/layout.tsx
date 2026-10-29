import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { getSeo } from "@/data/seo";
import { getDirection, hasLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C9961B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = hasLocale(locale) ? locale : "en";
  const seo = getSeo(safe);

  const image = {
    url: `${site.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: seo.ogAlt,
  };

  return {
    metadataBase: new URL(site.url),
    title: {
      default: seo.title,
      template: "%s | KeyBank",
    },
    applicationName: site.name,
    openGraph: {
      images: [image],
    },
    twitter: {
      images: [image.url],
    },
    icons: {
      icon: [{ url: "/images/favicon.png", type: "image/png" }],
      apple: [{ url: "/images/favicon.png" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-mist font-sans text-navy antialiased">{children}</body>
    </html>
  );
}
