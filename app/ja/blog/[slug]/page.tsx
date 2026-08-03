import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categories";

export async function generateStaticParams() {
  return getAllSlugs("ja").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, "ja");
  if (!post) return {};
  return {
    title: `${post.title} — Genba`,
    description: post.excerpt,
    alternates: {
      canonical: `/ja/blog/${post.slug}`,
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

export default async function BlogPostPageJa({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug, "ja");
  if (!post) notFound();

  const categoryLabel = getCategoryLabel(post.category, "ja");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: "Genba",
    },
    publisher: {
      "@type": "Organization",
      name: "Genba",
    },
    mainEntityOfPage: `https://genbajapan.com/ja/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Genba", item: "https://genbajapan.com/ja" },
      { "@type": "ListItem", position: 2, name: "インサイト", item: "https://genbajapan.com/ja/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://genbajapan.com/ja/blog/${post.slug}` },
    ],
  };

  const relatedPosts = getRelatedPosts(post.slug, post.category, "ja");

  return (
    <Container className="py-16 md:py-20">
      <div className="mx-auto max-w-prose">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Link href="/ja/blog" className="text-sm text-accent hover:underline">
          &larr; インサイト一覧へ
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-wide text-accent">
          {categoryLabel}
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
              {categoryLabel}の関連記事
            </p>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/ja/blog/${related.slug}`}
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
            あなたの日本のパイプラインでも似たような状況が起きていますか?{" "}
            <Link href="/ja/contact" className="text-accent hover:underline">
              お問い合わせください
            </Link>
            。
          </p>
        </div>
      </div>
    </Container>
  );
}
