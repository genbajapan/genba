import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
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
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        en: `/blog/${post.slug}`,
        ja: `/ja/blog/${post.slug}`,
      },
    },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "Genba",
    },
    publisher: {
      "@type": "Organization",
      name: "Genba",
    },
    mainEntityOfPage: `https://genbajapan.com/blog/${post.slug}`,
  };

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <Container className="py-16 md:py-20">
      <div className="mx-auto max-w-prose">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
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

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-wide text-slate">
              More on {category?.label}
            </p>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block rounded-sm border border-line p-4 transition-colors hover:border-accent"
                >
                  <p className="font-serif text-base text-ink hover:text-navy">
                    {related.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-sm border border-line p-6">
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
