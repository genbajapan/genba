import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Genba is the independent advisory practice of Jio, built on years of running enterprise sales inside foreign companies entering Japan.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-prose">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          About Genba
        </p>
        <h1 className="font-serif text-3xl text-navy md:text-4xl">
          The correct romanization of 現場 — not the imported version
        </h1>

        <div className="prose-genba mt-8 text-base text-ink">
          <p>
            Genba is named after the Japanese word for &ldquo;the actual
            place where the work happens&rdquo; — deliberately spelled the
            way it&apos;s actually romanized in Japanese, not the
            Westernized &ldquo;Gemba&rdquo; that shows up in Lean
            manufacturing circles. The distinction is the point: this is
            advice built from the floor of real sales cycles, not from
            theory imported and repackaged.
          </p>

          <h2>Why this exists</h2>
          <p>
            Most foreign SaaS and IT companies don&apos;t fail to enter
            Japan. They enter, sign a pilot or two, and then the pipeline
            goes quiet — and the usual Japan GTM playbook, which is mostly
            about localization and market-entry mode, has very little to say
            about why. Genba exists to answer that specific question: why
            enterprise deals stall after entry, and what to actually change
            about how you sell.
          </p>

          <h2>Background</h2>
          <p>
            Genba is run by Jio, who has spent his career on the inside of
            foreign companies selling into Japanese enterprise accounts —
            first in sales at Cisco Systems, then close to five years at
            Shopify Japan helping build and scale a foreign e-commerce
            platform&apos;s presence in the market from the ground up. That
            work spanned SMB, mid-market, and enterprise segments, which is
            part of why the advisory isn&apos;t narrowly scoped to one deal
            size.
          </p>
          <p>
            Jio is currently in enterprise sales in the payments space,
            with exposure to the OTA and travel industry, alongside running
            Genba independently. Bilingual in Japanese and English, and
            raised in Japan.
          </p>

          <h2>What makes this different</h2>
          <p>
            Japan GTM agencies generally advise from the outside — market
            entry strategy, localization, partner discovery. Genba&apos;s
            angle is the opposite: it&apos;s built on having actually run
            the enterprise deal cycle inside a foreign company in Japan,
            including the parts that don&apos;t show up in a market-entry
            deck — who really needs to sign off internally, why the first
            meeting almost never closes anything, and what changes once a
            deal moves from champion-level interest to a real internal
            decision.
          </p>

          <h2>How Genba operates</h2>
          <p>
            Genba is advisory only — no fractional sales execution, no paid
            media, no web/localization production. That&apos;s a deliberate
            scope decision, not a resourcing gap: the goal is advice that
            stays useful regardless of how large your Japan team is, rather
            than a service that requires headcount handed over.
          </p>
        </div>
      </div>
    </Container>
  );
}
