import type { Metadata } from "next";
import NewsletterIssue001 from "@/components/NewsletterIssue001";

export const metadata: Metadata = {
  title: "最新のGenba発掘",
  description: "Genba発掘の最新号。外資ITの5社を3分で発掘します。",
  alternates: { canonical: "/newsletter/issues/001" },
  robots: { index: false, follow: true },
};

export default function LatestNewsletterPage() {
  return <NewsletterIssue001 />;
}
