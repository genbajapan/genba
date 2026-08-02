import Link from "next/link";
import Container from "./Container";
import type { Locale } from "@/lib/categories";

const copy: Record<Locale, { tagline: string; nav: { href: string; label: string }[] }> = {
  en: {
    tagline: "Winning Japan Sales for SaaS & IT.",
    nav: [
      { href: "/blog", label: "Insights" },
      { href: "/services", label: "Advisory" },
      { href: "/contact", label: "Contact" },
    ],
  },
  ja: {
    tagline: "SaaS・IT企業の日本セールスを勝ちに導く。",
    nav: [
      { href: "/ja/blog", label: "インサイト" },
      { href: "/ja/services", label: "アドバイザリー" },
      { href: "/ja/contact", label: "お問い合わせ" },
    ],
  },
};

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const { tagline, nav } = copy[locale];

  return (
    <footer className="mt-24 border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Genba. {tagline}
        </p>
        <div className="flex gap-5">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
