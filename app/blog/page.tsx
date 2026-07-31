import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllPostsMeta } from "@/lib/posts";
import { categoryList, getCategory } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on Japanese business customs, industry playbooks, market data, sales tactics, and why post-entry growth stalls.",
  alternates: { canonical: "/blog" },
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

      <div className="mt-6 flex flex-wrap gap-2">
        {categoryList.map((c) => (
          <span
            key={c.id}
            className="rounded-full border border-line px-3 py-1 text-xs text-slate"
          >
            {c.label}
          </span>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-sm text-slate">
          First articles are in progress — check back soon.
        </p>
      ) : (
        <div className="mt-12 divide-y divide-line">
          {posts.map((post) => {
            const category = getCategory(post.category);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8 first:pt-0"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {category?.label}
                  </p>
                  <p className="text-xs text-slate">{post.publishedDate}</p>
                </div>
                <h2 className="mt-2 font-serif text-2xl text-ink group-hover:text-navy">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
                  {post.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
}
