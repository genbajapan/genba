import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const siteUrl = "https://genbajapan.com";
const staticPaths = ["", "/about", "/services", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const enStaticRoutes = staticPaths.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const jaStaticRoutes = staticPaths.map((route) => ({
    url: `${siteUrl}/ja${route}`,
    lastModified: new Date(),
  }));

  const enPostRoutes = getAllPostsMeta("en").map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate,
  }));

  const jaPostRoutes = getAllPostsMeta("ja").map((post) => ({
    url: `${siteUrl}/ja/blog/${post.slug}`,
    lastModified: post.publishedDate,
  }));

  return [...enStaticRoutes, ...jaStaticRoutes, ...enPostRoutes, ...jaPostRoutes];
}
