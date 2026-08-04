import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = { title: "掲載・スポンサーについて", description: "外資SaaS営業人材に届くGenbaの法人向け掲載・スポンサー情報。", alternates: { canonical: "/advertise" } };
const options = [
  ["採用パートナー", "企業データ・公式求人・編集企画を組み合わせ、継続的な認知と候補者理解を支援します。", "月額 50万円〜"],
  ["メディアスポンサー", "ニュースレターや特集の提供表示。編集判断と広告領域を明確に分離します。", "月額 30万円〜"],
  ["スポット掲載", "採用イベント、レポート、関連サービスを読者文脈に合わせて紹介します。", "個別見積もり"],
];
export default function AdvertisePage() { return <><section className="page-hero"><Container><p className="eyebrow">FOR HIRING TEAMS & PARTNERS</p><h1>外資SaaS営業を、理解している読者へ。</h1><p className="page-lead">Genbaは、転職潜在層を含む外資SaaS営業人材に、企業の採用背景と仕事の魅力を正確に届けるメディアを目指します。</p></Container></section><section className="content-section"><Container><div className="editorial-grid">{options.map(([title, body, price], index) => <article className="editorial-card" key={title}><span>0{index + 1} / PARTNERSHIP</span><h3>{title}</h3><p>{body}</p><p style={{marginTop:18,color:"#0b2638",fontWeight:800}}>{price}</p></article>)}</div><div className="detail-grid" style={{marginTop:60}}><div className="prose-genba"><h2>信頼を優先する掲載方針</h2><ul><li>広告・スポンサーであることを明示</li><li>ランキング順位や分析結果を販売しない</li><li>実態を確認できない求人は掲載しない</li><li>読者データを本人の同意なく提供しない</li></ul><h2>初期パートナーについて</h2><p>現在は媒体立ち上げ期のため、読者との相性を確認できる少数の企業に限定してご案内します。媒体資料と掲載可否はお問い合わせ後に共有します。</p></div><aside className="detail-sidebar"><h2>法人お問い合わせ</h2><p style={{color:"#5c6b73",fontSize:12,lineHeight:1.8}}>採用課題、想定職種、時期をメールでお知らせください。</p><a href="mailto:js@genbajapan.com?subject=Genba%20%E6%B3%95%E4%BA%BA%E6%8E%B2%E8%BC%89%E3%81%AE%E7%9B%B8%E8%AB%87" className="button button-primary" style={{width:"100%",marginTop:16}}>掲載を相談する</a></aside></div></Container></section></>; }
