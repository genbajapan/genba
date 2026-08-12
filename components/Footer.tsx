import Link from "next/link";
import Container from "./Container";
import type { Locale } from "@/lib/categories";

const copy: Record<Locale, { tagline: string; nav: { href: string; label: string }[] }> = {
  en: {
    tagline: "外資IT戦士と予備軍の作戦会議室",
    nav: [
      { href: "/companies", label: "企業" },
      { href: "/jobs", label: "求人" },
      { href: "/methodology", label: "調査方針" },
      { href: "/advertise", label: "掲載・広告" },
      { href: "/about", label: "運営情報" },
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

export default function Footer({ locale = "en", displayLanguage = "ja" }: { locale?: Locale; displayLanguage?: "ja" | "en" }) {
  const base = copy[locale];
  const tagline = displayLanguage === "en" ? "The briefing room for global IT sales professionals in Japan." : base.tagline;
  const footerNav = displayLanguage === "en" ? [
    { href: "/companies", label: "Companies (Japanese)" },
    { href: "/jobs", label: "Jobs (Japanese)" },
    { href: "/methodology", label: "Methodology (Japanese)" },
    { href: "/en/advertise", label: "Partnership" },
    { href: "/about", label: "About (Japanese)" },
  ] : base.nav;

  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div><Link href={locale === "ja" ? "/ja" : "/"} className="footer-brand">Genba</Link><p>{tagline}</p><p className="footer-note">{displayLanguage === "en" ? "Independent media separating official facts, update dates and editorial analysis." : "公式情報・更新日・分析を分けて伝える、独立系メディアです。"}</p></div>
        <div className="footer-links">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-publisher"><span>{displayLanguage === "en" ? "PUBLISHER / EDITOR" : "運営・編集"}</span><a href="https://x.com/chosenshi08" target="_blank" rel="noreferrer">@chosenshi08 ↗</a><p>{displayLanguage === "en" ? "Edited by a working global SaaS account executive. No confidential employer information is used." : "外資SaaSの現役AEによる編集。所属企業の非公開情報は扱いません。"}</p></div>
      </Container>
      <Container className="footer-bottom"><p>&copy; {new Date().getFullYear()} Genba</p><p><Link href="/privacy">{displayLanguage === "en" ? "Privacy policy (Japanese)" : "プライバシーポリシー"}</Link><span>{displayLanguage === "en" ? "Applications are completed on each company’s official careers site." : "求人応募は各社の公式サイトで行われます。"}</span></p></Container>
    </footer>
  );
}
