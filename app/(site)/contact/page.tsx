import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Genba.",
  alternates: {
    canonical: "/contact",
    languages: { en: "/contact", ja: "/ja/contact" },
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-prose">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </p>
        <h1 className="font-serif text-3xl text-navy md:text-4xl">
          Get in touch
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate">
          The best way to reach Genba is by email. Whether or not a formal
          engagement makes sense, a conversation about what&apos;s actually
          happening in your Japan pipeline is worth having.
        </p>

        <div className="mt-10 rounded-sm border border-line p-6">
          <p className="text-sm uppercase tracking-wide text-slate">Email</p>
          {/* MX records point at Google Workspace already; confirm this inbox actually receives mail */}
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
