"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { categoryList, getCategory } from "@/lib/categories";

function pillClass(active: boolean) {
  return `rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
    active
      ? "border-accent bg-accent text-white"
      : "border-line text-slate hover:border-accent hover:text-accent"
  }`;
}

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={pillClass(activeCategory === null)}
        >
          All
        </button>
        {categoryList.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={pillClass(activeCategory === category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-slate">
          No articles in this category yet.
        </p>
      ) : (
        <div className="mt-12 divide-y divide-line">
          {filtered.map((post) => {
            const category = getCategory(post.category);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8 first:pt-0"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <span className="inline-block w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                    {category?.label}
                  </span>
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
    </>
  );
}
