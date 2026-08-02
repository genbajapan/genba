import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categories";

const siteUrl = "https://genbajapan.com";

export const dynamic = "force-static";

export async function GET() {
  const enPosts = getAllPostsMeta("en");
  const jaPosts = getAllPostsMeta("ja");

  const lines = [
    "# Genba",
    "",
    "> Genba is a Japan sales advisory for foreign SaaS and IT companies whose deals stall after entry. Available in English and Japanese (`/ja/*`). Advisory-only — no fractional sales execution.",
    "",
    "## Key pages",
    `- [About](${siteUrl}/about) / [会社概要](${siteUrl}/ja/about)`,
    `- [Advisory](${siteUrl}/services) / [アドバイザリー](${siteUrl}/ja/services)`,
    `- [Contact](${siteUrl}/contact) / [お問い合わせ](${siteUrl}/ja/contact)`,
    "",
    "## Insights (English)",
    ...enPosts.map(
      (post) =>
        `- [${post.title}](${siteUrl}/blog/${post.slug}) — ${getCategoryLabel(
          post.category,
          "en"
        )}, ${post.publishedDate}`
    ),
    "",
    "## インサイト (日本語)",
    ...jaPosts.map(
      (post) =>
        `- [${post.title}](${siteUrl}/ja/blog/${post.slug}) — ${getCategoryLabel(
          post.category,
          "ja"
        )}, ${post.publishedDate}`
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
