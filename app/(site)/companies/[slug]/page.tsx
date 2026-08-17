import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyIntelligenceProfile from "@/components/CompanyIntelligenceProfile";
import { companies, getCompany, getCompanyJobs, getCompanySignals } from "@/lib/market-data";

export const dynamicParams = false;
export function generateStaticParams() { return companies.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const company = getCompany(params.slug);
  if (!company) return {};
  const isPreEntry = company.entryStatus === "not-entered";
  const title = isPreEntry ? `${company.name}の日本進出可能性・営業としての魅力・企業研究` : `${company.name}の応募判断・営業求人・併願企業`;
  const description = isPreEntry ? `${company.name}の海外成長、APAC展開、日本対応、営業としての面白さ、日本進出の追い風と反証を公開情報から整理。` : `${company.name}に今応募する価値、営業求人、ソリューション、日本組織、報酬の確認状況、合わせて見るべき企業を公開情報から整理。`;
  return {
    title,
    description,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: {
      type: "website",
      title: `${title} — Genba`,
      description,
      url: `/companies/${company.slug}`,
      siteName: "Genba",
      images: [{ url: "/og-genba-v3.png", width: 1200, height: 630, alt: "Genba — 小中規模外資IT企業研究所" }],
    },
    twitter: { card: "summary_large_image", title: `${title} — Genba`, description, images: ["/og-genba-v3.png"] },
  };
}

const siteUrl = "https://genbajapan.com";

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug);
  if (!company) notFound();
  const companyJobs = getCompanyJobs(company.slug);
  const companySignals = getCompanySignals(company.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Genba", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "企業一覧", item: `${siteUrl}/companies` },
      { "@type": "ListItem", position: 3, name: company.name, item: `${siteUrl}/companies/${company.slug}` },
    ],
  };
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: company.name,
    description: company.description,
    url: `${siteUrl}/companies/${company.slug}`,
    dateModified: company.lastChecked,
    isPartOf: { "@type": "WebSite", name: "Genba", url: siteUrl },
    about: {
      "@type": "Organization",
      name: company.name,
      description: company.description,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <CompanyIntelligenceProfile
        company={company}
        companyJobs={companyJobs}
        companySignals={companySignals}
        allCompanies={companies}
      />
    </>
  );
}
