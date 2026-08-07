import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { companies, jobs } from "@/lib/market-data";

const siteUrl = "https://genbajapan.com";
const staticInfoPaths = ["/newsletter", "/advertise", "/methodology", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const latestCompanyUpdate = companies.reduce(
    (latest, company) => (company.lastChecked > latest ? company.lastChecked : latest),
    companies[0]?.lastChecked ?? new Date().toISOString().slice(0, 10)
  );
  const latestJobUpdate = jobs.reduce(
    (latest, job) => (job.lastChecked > latest ? job.lastChecked : latest),
    jobs[0]?.lastChecked ?? latestCompanyUpdate
  );

  const dataDrivenRoutes = [
    { url: `${siteUrl}/`, lastModified: latestCompanyUpdate, changeFrequency: "daily" as const },
    { url: `${siteUrl}/companies`, lastModified: latestCompanyUpdate, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/jobs`, lastModified: latestJobUpdate, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/signals`, lastModified: latestCompanyUpdate, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/insights`, lastModified: new Date(), changeFrequency: "weekly" as const },
  ];
  const staticRoutes = staticInfoPaths.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const }));
  const companyRoutes = companies.map((company) => ({ url: `${siteUrl}/companies/${company.slug}`, lastModified: company.lastChecked, changeFrequency: "weekly" as const }));
  const jaPostRoutes = getAllPostsMeta("ja").map((post) => ({ url: `${siteUrl}/ja/blog/${post.slug}`, lastModified: post.publishedDate }));
  return [...dataDrivenRoutes, ...staticRoutes, ...companyRoutes, ...jaPostRoutes];
}
