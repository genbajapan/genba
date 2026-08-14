import Link from "next/link";
import Container from "./Container";
import type { Locale } from "@/lib/categories";

const nav: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/companies", label: "企業を探す" },
    { href: "/jobs", label: "求人を探す" },
    { href: "/advertise", label: "掲載について" },
  ],
  ja: [
    { href: "/ja/blog", label: "インサイト" },
    { href: "/ja/services", label: "アドバイザリー" },
    { href: "/ja/about", label: "会社概要" },
    { href: "/ja/contact", label: "お問い合わせ" },
  ],
};

export default function Header({ locale = "en", displayLanguage = "ja" }: { locale?: Locale; displayLanguage?: "ja" | "en" }) {
  const homeHref = locale === "ja" ? "/ja" : "/";
  const activeNav = displayLanguage === "en" ? [
    { href: "/companies", label: "Companies (JP)" },
    { href: "/jobs", label: "Jobs (JP)" },
    { href: "/en/advertise", label: "Partnership" },
  ] : nav[locale];

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href={homeHref} className="brand">
          <span className="brand-copy"><strong>
            Genba
          </strong></span>
        </Link>
        <div className="header-actions">
          <nav className="primary-nav" aria-label={displayLanguage === "en" ? "Main navigation" : "メインナビゲーション"}>
            {activeNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {locale === "en" && <Link href="/newsletter" className="button button-primary header-cta">{displayLanguage === "en" ? "Newsletter (JP)" : "無料購読"}</Link>}
        </div>
      </Container>
      {locale === "en" && <Container className="mobile-nav"><nav>{activeNav.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></Container>}
    </header>
  );
}
