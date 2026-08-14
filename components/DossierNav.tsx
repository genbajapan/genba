"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function DossierNav({ companyName, isPreEntry, hasPlaybook }: { companyName: string; isPreEntry: boolean; hasPlaybook: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const [showMoreHint, setShowMoreHint] = useState(false);

  const updateOverflow = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    setShowMoreHint(nav.scrollLeft < 4 && nav.scrollWidth > nav.clientWidth + 4);
  }, []);

  useEffect(() => {
    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [updateOverflow]);

  function revealMore() {
    const nav = navRef.current;
    if (!nav) return;
    nav.scrollBy({ left: Math.max(220, nav.clientWidth * .72), behavior: "smooth" });
    setShowMoreHint(false);
  }

  return (
    <div className="dossier-nav-bar">
      <a className="dossier-company-marker" href="#company-top" title={`${companyName}のページ先頭へ戻る`}>
        <span aria-hidden="true" />
        <strong>{companyName}</strong>
      </a>
      <nav ref={navRef} className="dossier-nav" aria-label="企業ページ内ナビゲーション" onScroll={updateOverflow}>
        <a href="#overview">会社概要</a>
        <a href="#work-there">{isPreEntry ? "海外で働く人" : "働く人を見る"}</a>
        <a href="#roles">{isPreEntry ? "進出時の論点" : "募集中ポジション"}</a>
        <a href="#decision">5つの仮説</a>
        <a href="#solution">ソリューション深掘り</a>
        {hasPlaybook && <a href="#playbook">想定できる売り方</a>}
        <a href="#compare">併願候補</a>
      </nav>
      <button type="button" className={`dossier-nav-more${showMoreHint ? " is-visible" : ""}`} onClick={revealMore} aria-label="続きの企業研究メニューを見る">
        <span>続きの企業研究を見る</span><strong aria-hidden="true">→</strong>
      </button>
    </div>
  );
}
