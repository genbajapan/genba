import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvertisePageContent from "@/components/AdvertisePageContent";

export const metadata: Metadata = {
  title: { absolute: "Japan Sales Hiring Pilot Partnership — Genba" },
  description: "A 90-day pilot for global IT and SaaS companies hiring sales talent in Japan. Sponsored company page, newsletter, X distribution, tracked job links and monthly reporting.",
  alternates: { canonical: "/en/advertise", languages: { ja: "/advertise", en: "/en/advertise" } },
  openGraph: {
    type: "website",
    url: "/en/advertise",
    siteName: "Genba",
    title: "Japan Sales Hiring Pilot Partnership — Genba",
    description: "A measured 90-day hiring communication pilot for global IT and SaaS companies building sales teams in Japan.",
    images: [{ url: "/og-genba-v2.png", width: 1200, height: 630, alt: "Genba partnership for Japan sales hiring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Sales Hiring Pilot Partnership — Genba",
    description: "A measured 90-day hiring communication pilot for global IT and SaaS companies building sales teams in Japan.",
    images: ["/og-genba-v2.png"],
  },
};

export default function EnglishAdvertisePage() {
  return <div lang="en"><Header locale="en" displayLanguage="en" /><main className="flex-1"><AdvertisePageContent language="en" /></main><Footer locale="en" displayLanguage="en" /></div>;
}
