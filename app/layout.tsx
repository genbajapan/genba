import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://genbajapan.com";
const description =
  "外資SaaS企業の日本採用、営業求人、組織の変化を公式情報から追う無料インテリジェンスメディア。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genba — 外資SaaS採用インテリジェンス",
    template: "%s — Genba",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Genba",
    title: "Genba — 外資SaaSの日本採用を、変化から読む",
    description,
    images: [{ url: "/og-genba.png", width: 1200, height: 630, alt: "Genba — 外資SaaSの日本採用を、変化から読む。" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genba — 外資SaaSの日本採用を、変化から読む",
    description,
    images: ["/og-genba.png"],
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
  slogan: "外資SaaSの日本採用を、変化から読む。",
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
      </body>
    </html>
  );
}
