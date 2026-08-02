import type { Metadata } from "next";
import Container from "@/components/Container";
import BlogList from "@/components/BlogList";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on Japanese business customs, industry playbooks, market data, sales tactics, and why post-entry growth stalls.",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", ja: "/ja/blog" },
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <Container className="py-16 md:py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Insights
      </p>
      <h1 className="font-serif text-3xl text-navy md:text-4xl">
        Notes from the Japan enterprise sales floor
      </h1>

      <BlogList posts={posts} />
    </Container>
  );
}
