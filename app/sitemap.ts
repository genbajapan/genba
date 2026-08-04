import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { companies } from "@/lib/market-data";

const siteUrl = "https://genbajapan.com";
const staticPaths = ["", "/companies", "/jobs", "/signals", "/insights", "/newsletter", "/advertise", "/methodology", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = staticPaths.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date("2026-08-04"), changeFrequency: route === "" ? "daily" as const : "weekly" as const }));
  const companyRoutes = companies.map((company) => ({ url: `${siteUrl}/companies/${company.slug}`, lastModified: company.lastChecked, changeFrequency: "weekly" as const }));
  const jaPostRoutes = getAllPostsMeta("ja").map((post) => ({ url: `${siteUrl}/ja/blog/${post.slug}`, lastModified: post.publishedDate }));
  return [...staticRoutes, ...companyRoutes, ...jaPostRoutes];
}
