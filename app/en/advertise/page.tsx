import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvertisePageContent from "@/components/AdvertisePageContent";

export const metadata: Metadata = {
  title: { absolute: "Sponsorship inquiries — Genba" },
  description: "Contact Genba about sponsorships that create value for people working in or considering global IT and SaaS careers in Japan.",
  alternates: { canonical: "/en/advertise", languages: { ja: "/advertise", en: "/en/advertise" } },
  openGraph: {
    type: "website",
    url: "/en/advertise",
    siteName: "Genba",
    title: "Sponsorship inquiries — Genba",
    description: "Reach a focused audience interested in global IT and SaaS careers in Japan.",
    images: [{ url: "/og-genba-v3.png", width: 1200, height: 630, alt: "Genba — research on small and midsize foreign IT companies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsorship inquiries — Genba",
    description: "Reach a focused audience interested in global IT and SaaS careers in Japan.",
    images: ["/og-genba-v3.png"],
  },
};

export default function EnglishAdvertisePage() {
  return <div lang="en"><Header locale="en" displayLanguage="en" /><main className="flex-1"><AdvertisePageContent language="en" /></main><Footer locale="en" displayLanguage="en" /></div>;
}
