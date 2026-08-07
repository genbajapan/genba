import Link from "next/link";
import Container from "@/components/Container";
import NewsletterCTA from "@/components/NewsletterCTA";
import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "役立ち記事", description: "外資SaaSの営業キャリア、採用、日本市場を現役AEの視点で読み解く。", path: "/insights" });
export default function InsightsPage() {
  const posts = getAllPostsMeta("ja");
  return <><section className="page-hero"><Container><p className="eyebrow">USEFUL ARTICLES</p><h1>外資SaaSの現場を、構造で読む。</h1><p className="page-lead">求人データだけでは見えない営業組織、キャリア、日本市場の論点を、現役AEの視点で解説します。</p></Container></section><section className="content-section"><Container>{posts.length > 0 ? <div className="editorial-grid">{posts.map((post, index) => <article className="editorial-card" key={post.slug}><span>{getCategoryLabel(post.category, "ja")} / {post.publishedDate}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={`/ja/blog/${post.slug}`}>記事を読む →</Link>{index === 0 && <small style={{display:"block", marginTop:10, color:"#0b7a70"}}>最新</small>}</article>)}</div> : <div className="empty-intel-state"><span>PREPARING</span><h3>記事を準備中です</h3><p>現役外資ITセールスの視点による記事を近日公開します。準備が整い次第、順次追加します。</p></div>}<NewsletterCTA compact /></Container></section></>;
}
