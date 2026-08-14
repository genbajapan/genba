import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvertisePageContent from "@/components/AdvertisePageContent";

export const metadata: Metadata = {
  title: { absolute: "Japan Sales Hiring Pilot Partnership — Genba" },
  description: "A one-month ¥80,000 pilot for global IT and SaaS companies hiring sales talent in Japan, with three months recommended for meaningful measurement.",
  alternates: { canonical: "/en/advertise", languages: { ja: "/advertise", en: "/en/advertise" } },
  openGraph: {
    type: "website",
    url: "/en/advertise",
    siteName: "Genba",
    title: "Japan Sales Hiring Pilot Partnership — Genba",
    description: "Start with a one-month hiring communication pilot, with three months recommended for meaningful measurement.",
    images: [{ url: "/og-genba-v3.png", width: 1200, height: 630, alt: "Genba — research on small and midsize foreign IT companies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Sales Hiring Pilot Partnership — Genba",
    description: "Start with a one-month hiring communication pilot, with three months recommended for meaningful measurement.",
    images: ["/og-genba-v3.png"],
  },
};

export default function EnglishAdvertisePage() {
  return <div lang="en"><Header locale="en" displayLanguage="en" /><main className="flex-1"><AdvertisePageContent language="en" /></main><Footer locale="en" displayLanguage="en" /></div>;
}
