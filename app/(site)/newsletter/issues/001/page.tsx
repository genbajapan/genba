import type { Metadata } from "next";
import NewsletterIssue001 from "@/components/NewsletterIssue001";

export const metadata: Metadata = {
  title: "Genba発掘 #001｜AIデータ、衛星、会話AIの5社",
  description: "Figma、Zilliz、Dialpad、Planet、Airtable。外資ITの5社を3分で発掘します。",
  alternates: { canonical: "/newsletter/issues/001" },
};

export default function NewsletterIssue001Page() {
  return <NewsletterIssue001 />;
}
