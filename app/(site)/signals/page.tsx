import Container from "@/components/Container";
import SignalCard from "@/components/SignalCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import { signals } from "@/lib/market-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "外資SaaS採用シグナル", description: "新着求人や募集領域の変化から外資SaaS日本組織の動きを追跡。", path: "/signals" });
export default function SignalsPage() { return <><section className="page-hero"><Container className="page-hero-grid"><div><p className="eyebrow">HIRING SIGNALS</p><h1>点ではなく、採用の変化を見る。</h1><p className="page-lead">新しい求人、担当セグメント、周辺職種の広がり。公開情報の変化を記録し、日本組織がどこへ向かっているかを読み解きます。</p></div><div className="page-summary"><div><strong>{signals.length}</strong><span>公開シグナル</span></div><div><strong>2</strong><span>根拠の区分</span></div></div></Container></section><section className="content-section"><Container><div className="signal-feed">{signals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div><NewsletterCTA compact /></Container></section></>; }
