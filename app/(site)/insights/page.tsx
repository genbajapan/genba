import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import NewsletterCTA from "@/components/NewsletterCTA";
import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categories";

export const metadata: Metadata = { title: "インサイト", description: "外資SaaSの営業キャリア、採用、日本市場を現役AEの視点で読み解く。", alternates: { canonical: "/insights" } };
export default function InsightsPage() {
  const posts = getAllPostsMeta("ja");
  return <><section className="page-hero"><Container><p className="eyebrow">FIELD INTELLIGENCE</p><h1>外資SaaSの現場を、構造で読む。</h1><p className="page-lead">求人データだけでは見えない営業組織、キャリア、日本市場の論点を、現役AEの視点で解説します。</p></Container></section><section className="content-section"><Container><div className="editorial-grid">{posts.map((post, index) => <article className="editorial-card" key={post.slug}><span>{getCategoryLabel(post.category, "ja")} / {post.publishedDate}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={`/ja/blog/${post.slug}`}>記事を読む →</Link>{index === 0 && <small style={{display:"block", marginTop:10, color:"#0b7a70"}}>最新</small>}</article>)}</div><NewsletterCTA compact /></Container></section></>;
}
