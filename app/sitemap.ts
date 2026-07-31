import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const siteUrl = "https://genbajapan.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = getAllPostsMeta().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate,
  }));

  return [...staticRoutes, ...postRoutes];
}
