import type { Metadata } from "next";
import "./globals.css";
import GenbaChatWidget from "@/components/GenbaChatWidget";

const siteUrl = "https://genbajapan.com";
const description =
  "外資SaaS企業の日本採用、営業求人、組織の変化を公式情報から追う無料インテリジェンスメディア。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genba — 外資IT戦士と予備軍の作戦会議室",
    template: "%s — Genba",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Genba",
    title: "Genba — 外資IT戦士と予備軍の作戦会議室",
    description,
    images: [{ url: "/og-genba-v3.png", width: 1200, height: 630, alt: "Genba — 小中規模外資IT企業研究所" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genba — 外資IT戦士と予備軍の作戦会議室",
    description,
    images: ["/og-genba-v3.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Genba",
  url: siteUrl,
  description,
  slogan: "外資IT戦士と予備軍の作戦会議室",
  logo: `${siteUrl}/og-genba-v3.png`,
  sameAs: ["https://x.com/chosenshi08"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <GenbaChatWidget />
      </body>
    </html>
  );
}
