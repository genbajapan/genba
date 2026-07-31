import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const category = getCategory(post.category);

  return (
    <Container className="py-16 md:py-20">
      <div className="mx-auto max-w-prose">
        <Link
          href="/blog"
          className="text-sm text-accent hover:underline"
        >
          &larr; All Insights
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-wide text-accent">
          {category?.label}
        </p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-navy md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-slate">{post.publishedDate}</p>

        <div
          className="prose-genba mt-10 text-base text-ink"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 rounded-sm border border-line p-6">
          <p className="text-sm leading-relaxed text-slate">
            Seeing something similar in your own Japan pipeline?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
