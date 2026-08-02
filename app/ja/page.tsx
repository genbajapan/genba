import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllPostsMeta } from "@/lib/posts";
import { getCategoryLabel } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Genba — SaaS・IT企業の日本セールスを勝ちに導く",
  description:
    "日本での参入後にセールスが停滞している、外資系SaaS・IT企業向けのアドバイザリー。実際に日本のエンタープライズ商談を回してきた経験に基づく助言。",
  alternates: {
    canonical: "/ja",
    languages: { en: "/", ja: "/ja" },
  },
};

export default function HomePageJa() {
  const posts = getAllPostsMeta("ja").slice(0, 6);

  return (
    <>
      <section className="border-b border-line bg-white/40">
        <Container className="py-20 md:py-28">
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
            SaaS・IT企業の日本セールスを勝ちに導く
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
            日本市場には参入できた。なのに、パイプラインが静かになった。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Genbaは、パイロット導入後に商談が止まってしまう、外資系SaaS・IT企業向けのセールスアドバイザリーです。ローカライズ支援でも、GTMエージェンシーでもありません。日本のエンタープライズバイヤーがなぜ静かになるのか——机上の分析ではなく、実際に商談を回してきた人間による率直な解説です。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/ja/services"
              className="rounded-sm bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              アドバイザリーの仕組みを見る
            </Link>
            <Link
              href="/ja/blog"
              className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              インサイトを読む
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl text-navy">最新インサイト</h2>
            <Link
              href="/ja/blog"
              className="text-sm font-medium text-accent hover:underline"
            >
              すべて見る
            </Link>
          </div>
          {posts.length === 0 ? (
            <p className="text-sm text-slate">
              記事を準備中です。近日公開します。
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post) => {
                const isLatest = post.publishedDate === posts[0]?.publishedDate;
                return (
                  <Link
                    key={post.slug}
                    href={`/ja/blog/${post.slug}`}
                    className={`group block rounded-sm border p-6 transition-colors ${
                      isLatest
                        ? "border-2 border-red-500 hover:border-red-600"
                        : "border-line hover:border-accent"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {isLatest && (
                        <span className="inline-block rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          本日公開
                        </span>
                      )}
                      <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                        {getCategoryLabel(post.category, "ja")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-lg leading-snug text-ink group-hover:text-navy">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate">
                      {post.publishedDate}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      {post.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      <section className="border-y border-line py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-serif text-2xl text-navy">01</p>
              <h3 className="mt-2 font-medium text-ink">
                問題は、あなたのプロダクトではない
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                停滞している日本の商談の多くは、プロダクトの適合性ではなくプロセスで失敗しています——稟議、根回し、そして誰が実質的な拒否権を持っているか。
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-navy">02</p>
              <h3 className="mt-2 font-medium text-ink">
                実行の前に、診断を
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Genbaはアドバイザリー専業です。なぜパイプラインが停滞しているのか、何を変えるべきかという戦略的な助言を提供します。フラクショナル営業の実行代行は行いません。
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-navy">03</p>
              <h3 className="mt-2 font-medium text-ink">
                作られたのは資料ではなく、商談の現場
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                日本市場に参入する外資系企業の中で、長年エンタープライズセールスを実際に回してきた経験に基づいています——CiscoやShopifyなどでの経験を含む。
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl">
              それが日本特有の問題なのか、プロセスの問題なのか、判断がつきませんか?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              Genbaは現在、情報発信のみを行っています。あなたが直面している状況について、まずは話をしてみませんか。
            </p>
          </div>
          <Link
            href="/ja/contact"
            className="whitespace-nowrap rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy"
          >
            お問い合わせ
          </Link>
        </Container>
      </section>
    </>
  );
}
