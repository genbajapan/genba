import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "アドバイザリー — Genba",
  description:
    "Genbaのアドバイザリーの仕組み:日本でのセールス停滞の診断であり、フラクショナル営業の実行代行ではありません。",
  alternates: {
    canonical: "/ja/services",
    languages: { en: "/services", ja: "/ja/services" },
  },
};

const faqs = [
  {
    question: "Genbaは日本でフラクショナル営業の実行代行を行いますか?",
    answer:
      "いいえ。Genbaはアドバイザリー専業です。日本の商談・パイプラインがなぜ停滞しているのか、何を変えるべきかという戦略的な助言を提供します。実際の営業活動、キャンペーンの実行、ローカライズ業務は含みません。",
  },
  {
    question: "Genbaは日本市場参入エージェンシーと何が違いますか?",
    answer:
      "多くの日本GTMエージェンシーは、ローカライズ・参入モード・パートナー開拓について助言します。Genbaは、なぜエンタープライズセールスが参入後に停滞するのかという点に特化しており、外側からの助言ではなく、実際に商談サイクルを回してきた経験に基づいています。",
  },
  {
    question: "Genbaは現在、有料クライアントを受け付けていますか?",
    answer:
      "まだです。Genbaは現在コンテンツ発信のフェーズにあります。それでもぜひご連絡ください——正式なエンゲージメントの前でも、日本のパイプラインで見えている状況についての対話には価値があります。",
  },
  {
    question: "Genbaはどのくらいの企業規模を対象にしていますか?",
    answer:
      "SMBからエンタープライズまで対象です。Genbaの背景となる経歴がこの3つのセグメントすべてにまたがっているため、特定のディール規模に限定されません。",
  },
];

export default function ServicesPageJa() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-prose">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          アドバイザリー
        </p>
        <h1 className="font-serif text-3xl text-navy md:text-4xl">
          診断であって、実行代行ではない
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate">
          Genbaはアドバイザリー専業です。提供するのは、日本でのセールスがなぜ停滞しているのか、何を変えるべきかという戦略的な助言であり、フラクショナル営業の代行でも、キャンペーンやローカライズの実行でもありません。
        </p>

        <div className="prose-genba mt-10 text-base text-ink">
          <h2>Genbaが支援すること</h2>
          <ul>
            <li>参入後、あるいはパイロット後に商談・パイプラインが停滞している理由の診断</li>
            <li>代理店・SI経由のセールスモーションが機能していない場合のレビュー</li>
            <li>フラクショナル営業支援から自社チームへ移行する適切なタイミングの判断</li>
            <li>
              稟議・根回しなど、日本企業の意思決定が実際にどう社内で進むかを踏まえた商談戦略の設計
            </li>
          </ul>

          <h2>エンゲージメントの構成</h2>
          <p>
            フラクショナルVP of
            Salesの料金体系を参考にした、2つのティアを用意しています:
          </p>
          <ul>
            <li>
              <strong>Entry-Level</strong> —
              ほとんどのエンゲージメントで基本となるティア。月間の稼働時間を限定した、戦略的な助言・壁打ち相手としての関与。チームの直接的なマネジメントは行いません。
            </li>
            <li>
              <strong>Mid-Range</strong> —
              特に相性が良い、あるいはスコープが大きい少数の企業向け。プレイブック設計や採用への関与など、より実務に近い形で関わります。
            </li>
          </ul>
          <p>
            アドバイザリー形式であることと、同時に受けるエンゲージメント数を意図的に絞っていることから、具体的なスコープと料金は個別にご相談の上決定します。
          </p>

          <h2>現在の状況</h2>
          <p>
            Genbaは現在、コンテンツ発信のフェーズにあります。日本のパイプラインで見えている状況について話してみたい方は、ぜひご連絡ください——正式なエンゲージメントにつながるかどうかにかかわらず、その対話には価値があると考えています。
          </p>

          <h2>よくある質問</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/ja/contact"
            className="rounded-sm bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </Container>
  );
}
