import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://genbajapan.com";
const description =
  "Advisory for foreign SaaS and IT companies whose Japan sales have stalled after entry — from someone who has run enterprise deals inside foreign companies in Japan, not just advised on them from outside.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genba — Winning Japan Sales for SaaS & IT",
    template: "%s — Genba",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Genba",
    title: "Genba — Winning Japan Sales for SaaS & IT",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Genba — Winning Japan Sales for SaaS & IT",
    description,
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
  slogan: "Winning Japan Sales for SaaS & IT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
