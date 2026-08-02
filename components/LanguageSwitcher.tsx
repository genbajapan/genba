"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isJa = pathname === "/ja" || pathname.startsWith("/ja/");

  const enHref = isJa ? pathname.replace(/^\/ja/, "") || "/" : pathname;
  const jaHref = isJa
    ? pathname
    : `/ja${pathname === "/" ? "" : pathname}`;

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <Link
        href={enHref}
        className={!isJa ? "text-navy" : "text-slate hover:text-accent"}
      >
        EN
      </Link>
      <span className="text-line">/</span>
      <Link
        href={jaHref}
        className={isJa ? "text-navy" : "text-slate hover:text-accent"}
      >
        日本語
      </Link>
    </div>
  );
}
