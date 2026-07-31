import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { CategoryId } from "./categories";

const postsDirectory = path.join(process.cwd(), "content/blog/published");

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

function readSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = readSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
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

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
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

export function getAllSlugs(): string[] {
  return readSlugs();
}
