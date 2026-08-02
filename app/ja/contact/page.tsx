import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "お問い合わせ — Genba",
  description: "Genbaへのお問い合わせ",
  alternates: {
    canonical: "/ja/contact",
    languages: { en: "/contact", ja: "/ja/contact" },
  },
};

export default function ContactPageJa() {
  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-prose">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          お問い合わせ
        </p>
        <h1 className="font-serif text-3xl text-navy md:text-4xl">
          お問い合わせ
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate">
          Genbaへの一番確実な連絡方法はメールです。正式なエンゲージメントになるかどうかにかかわらず、あなたの日本のパイプラインで実際に起きていることについての対話には価値があります。
        </p>

        <div className="mt-10 rounded-sm border border-line p-6">
          <p className="text-sm uppercase tracking-wide text-slate">メール</p>
          <a
            href="mailto:js@genbajapan.com"
            className="mt-1 block font-serif text-xl text-navy hover:text-accent"
          >
            js@genbajapan.com
          </a>
        </div>
      </div>
    </Container>
  );
}
