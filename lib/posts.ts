import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { CategoryId, Locale } from "./categories";

const postsDirectories: Record<Locale, string> = {
  en: path.join(process.cwd(), "content/blog/published"),
  ja: path.join(process.cwd(), "content/blog/published-ja"),
};

export interface PostMeta {
  slug: string;
  title: string;
  category: CategoryId;
  publishedDate: string;
  excerpt: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readSlugs(locale: Locale): string[] {
  const dir = postsDirectories[locale];
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsMeta(locale: Locale = "en"): PostMeta[] {
  const dir = postsDirectories[locale];
  const slugs = readSlugs(locale);
  const posts = slugs.map((slug) => {
    const fullPath = path.join(dir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title as string,
      category: String(data.category) as CategoryId,
      publishedDate: data.published_date as string,
      excerpt: (data.excerpt as string) ?? "",
    };
  });

  return posts.sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}

export async function getPostBySlug(
  slug: string,
  locale: Locale = "en"
): Promise<Post | null> {
  const dir = postsDirectories[locale];
  const fullPath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    category: String(data.category) as CategoryId,
    publishedDate: data.published_date as string,
    excerpt: (data.excerpt as string) ?? "",
    contentHtml,
  };
}

export function getAllSlugs(locale: Locale = "en"): string[] {
  return readSlugs(locale);
}

export function getRelatedPosts(
  currentSlug: string,
  category: CategoryId,
  locale: Locale = "en",
  limit = 3
): PostMeta[] {
  return getAllPostsMeta(locale)
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
