import Link from "next/link";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/categories";

const nav: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/blog", label: "Insights" },
    { href: "/services", label: "Advisory" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  ja: [
    { href: "/ja/blog", label: "インサイト" },
    { href: "/ja/services", label: "アドバイザリー" },
    { href: "/ja/about", label: "会社概要" },
    { href: "/ja/contact", label: "お問い合わせ" },
  ],
};

const taglines: Record<Locale, string> = {
  en: "Winning Japan Sales",
  ja: "日本のセールスを勝ちに導く",
};

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const homeHref = locale === "ja" ? "/ja" : "/";

  return (
    <header className="border-b border-line">
      <Container className="flex items-center justify-between py-6">
        <Link href={homeHref} className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Genba
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-slate sm:inline">
            {taglines[locale]}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            {nav[locale].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
