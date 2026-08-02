import type { Metadata } from "next";
import Container from "@/components/Container";
import BlogList from "@/components/BlogList";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "インサイト — Genba",
  description:
    "日本の商習慣、業界別プレイブック、市場データ、セールス実践、そして進出後に成長が止まる理由についてのノート。",
  alternates: {
    canonical: "/ja/blog",
    languages: { en: "/blog", ja: "/ja/blog" },
  },
};

export default function BlogIndexPageJa() {
  const posts = getAllPostsMeta("ja");

  return (
    <Container className="py-16 md:py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        インサイト
      </p>
      <h1 className="font-serif text-3xl text-navy md:text-4xl">
        日本のエンタープライズセールス現場からのノート
      </h1>

      <BlogList posts={posts} locale="ja" />
    </Container>
  );
}
