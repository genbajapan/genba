import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "How Genba's advisory works: diagnosis of stalled Japan sales, not fractional execution.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-prose">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Advisory
        </p>
        <h1 className="font-serif text-3xl text-navy md:text-4xl">
          Diagnosis, not execution
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate">
          Genba is advisory-only. The engagement is strategic input on why
          Japan sales have stalled and what to change — not a fractional
          sales hire, not campaign or localization execution.
        </p>

        <div className="prose-genba mt-10 text-base text-ink">
          <h2>What Genba helps with</h2>
          <ul>
            <li>
              Diagnosing why a deal or pipeline has stalled after entry or
              after a pilot
            </li>
            <li>
              Reviewing underperforming agency- or SI-led sales motions
            </li>
            <li>
              Judging the right timing to move from fractional sales support
              to an in-house team
            </li>
            <li>
              Shaping deal strategy around how Japanese buying decisions —
              ringi, nemawashi — actually move internally
            </li>
          </ul>

          <h2>How engagements are structured</h2>
          <p>
            Two tiers, modeled loosely on fractional VP-of-Sales pricing
            conventions:
          </p>
          <ul>
            <li>
              <strong>Entry-Level</strong> — the default tier for most
              engagements. Strategic advisory and sounding-board input on a
              limited monthly time budget. No direct management of your
              team.
            </li>
            <li>
              <strong>Mid-Range</strong> — reserved for a small number of
              companies where the fit is unusually strong or the scope is
              larger. Includes more hands-on involvement, such as input on
              playbook design or sales hiring.
            </li>
          </ul>
          <p>
            Given the advisory format and a deliberately limited number of
            concurrent engagements, exact scope and pricing are discussed
            directly rather than published here.
          </p>

          <h2>Where things stand today</h2>
          <p>
            Genba is currently in a content-and-insights phase. Reach out if
            you want to talk through what you&apos;re seeing in your Japan
            pipeline — that conversation is worth having regardless of
            whether a formal engagement follows.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-sm bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </Container>
  );
}
