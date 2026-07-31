import Link from "next/link";
import Container from "@/components/Container";
import { getAllPostsMeta } from "@/lib/posts";
import { categoryList } from "@/lib/categories";

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 6);

  return (
    <>
      <section className="border-b border-line bg-white/40">
        <Container className="py-20 md:py-28">
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
            Winning Japan Sales for SaaS &amp; IT
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
            You got into Japan. Now your pipeline has gone quiet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Genba is sales advisory for foreign SaaS and IT companies whose
            Japan deals stall after the pilot. Not localization. Not a GTM
            agency. Straight talk on why enterprise buyers here go quiet —
            from someone who has run the deals, not just studied them.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-sm bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              How the advisory works
            </Link>
            <Link
              href="/blog"
              className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Read the Insights
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl text-navy">Latest Insights</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent hover:underline"
            >
              View all
            </Link>
          </div>
          {posts.length === 0 ? (
            <p className="text-sm text-slate">
              First articles are in progress — check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post) => {
                const category = categoryList.find(
                  (c) => c.id === post.category
                );
                const isLatest = post.publishedDate === posts[0]?.publishedDate;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group block rounded-sm border p-6 transition-colors ${
                      isLatest
                        ? "border-2 border-red-500 hover:border-red-600"
                        : "border-line hover:border-accent"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {isLatest && (
                        <span className="inline-block rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          New Today
                        </span>
                      )}
                      <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                        {category?.label}
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
                The problem isn&apos;t your product
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Most stalled Japan deals fail on process, not fit — ringi,
                nemawashi, and who actually holds veto power inside the
                account.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-navy">02</p>
              <h3 className="mt-2 font-medium text-ink">
                Diagnosis before execution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Genba is advisory-only: strategic input on why the pipeline
                is stuck and what to change, not fractional sales execution.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-navy">03</p>
              <h3 className="mt-2 font-medium text-ink">
                Built on deals, not decks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Grounded in years of running enterprise sales inside foreign
                companies entering Japan — Cisco and Shopify among them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl">
              Not sure if it&apos;s a Japan problem or a process problem?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              Genba is currently publishing insights only — get in touch to
              talk through what you&apos;re seeing.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
