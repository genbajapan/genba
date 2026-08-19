"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { companies, jobs } from "@/lib/market-data";
import { companyListSortOptions, compareKnownNumbers, type CompanyListSortMetric, type CompanyListSortMode } from "@/lib/company-list-sort";
import { getHeadquartersRegion, headquartersRegions, type HeadquartersRegion } from "@/lib/company-headquarters";
import { broadCategories, buildHiringHeatRows, getHiringHeatCompanies } from "@/lib/solution-categories";
import CompanyCard from "./CompanyCard";
import { PRE_ENTRY_SIGNAL_DEFINITION, PRE_ENTRY_SIGNAL_FILTER_LABEL } from "@/lib/company-entry-status";

const statuses = [
  { value: "すべて", label: "すべて" },
  { value: "積極採用", label: "積極採用" },
  { value: "採用中", label: "採用中" },
  { value: "継続観測", label: "求人なし" },
];
const solutionAreas = ["すべて", ...broadCategories];
const heatRows = buildHiringHeatRows(companies, jobs);
const tierAreas = {
  hot: new Set(heatRows.filter((row) => row.tier === "hot").map((row) => row.area)),
  active: new Set(heatRows.filter((row) => row.tier === "active").map((row) => row.area)),
  selective: new Set(heatRows.filter((row) => row.tier === "selective").map((row) => row.area)),
};
const tierCompanySlugs = {
  hot: new Set(getHiringHeatCompanies(companies, jobs, "hot").map((company) => company.slug)),
  active: new Set(getHiringHeatCompanies(companies, jobs, "active").map((company) => company.slug)),
  selective: new Set(getHiringHeatCompanies(companies, jobs, "selective").map((company) => company.slug)),
};
type TierFilter = "すべて" | keyof typeof tierAreas;
const tierLabels: Record<TierFilter, string> = { "すべて": "すべて", hot: "HOT", active: "Active", selective: "Selective" };
type EntryFilter = "すべて" | "pre-entry" | "not-entered" | "pre-entry-signal";
const companyNameCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const returnPositionKey = "genba:company-explorer:return-position";

type ReturnPosition = {
  listKey: string;
  slug: string;
  cardOffset: number;
};

export default function CompanyExplorer({
  companyCardSummaries,
  companySortMetrics,
}: {
  companyCardSummaries: Record<string, string>;
  companySortMetrics: Record<string, CompanyListSortMetric>;
}) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const tierParam = searchParams.get("tier");
  const initialSolutionArea = categoryParam && solutionAreas.includes(categoryParam) ? categoryParam : "すべて";
  const entryParam = searchParams.get("entry");
  const initialEntry: EntryFilter = entryParam === "pre-entry" || entryParam === "not-entered" || entryParam === "pre-entry-signal" ? entryParam : "すべて";
  const initialTier: TierFilter = initialEntry === "すべて" && initialSolutionArea === "すべて" && (tierParam === "hot" || tierParam === "active" || tierParam === "selective") ? tierParam : "すべて";
  const statusParam = searchParams.get("status");
  const initialStatus = statusParam && statuses.some((item) => item.value === statusParam) ? statusParam : "すべて";
  const headquartersParam = searchParams.get("hq");
  const initialHeadquarters: HeadquartersRegion = headquartersRegions.some((region) => region.value === headquartersParam) ? headquartersParam as HeadquartersRegion : "すべて";
  const sortParam = searchParams.get("sort");
  const initialSort: CompanyListSortMode = companyListSortOptions.some((option) => option.value === sortParam) ? sortParam as CompanyListSortMode : "updated";
  const openJobsOnly = searchParams.get("openJobs") === "1";
  const companySlugsWithOpenJobs = useMemo(() => new Set(jobs.map((job) => job.companySlug)), []);
  const newestJobDates = useMemo(() => {
    const dates = new Map<string, string>();
    for (const job of jobs) {
      if (job.firstSeen > (dates.get(job.companySlug) ?? "")) dates.set(job.companySlug, job.firstSeen);
    }
    return dates;
  }, []);

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [status, setStatus] = useState(initialStatus);
  const [solutionArea, setSolutionArea] = useState(initialSolutionArea);
  const [tier, setTier] = useState<TierFilter>(initialTier);
  const [entry, setEntry] = useState<EntryFilter>(initialEntry);
  const [headquarters, setHeadquarters] = useState<HeadquartersRegion>(initialHeadquarters);
  const [sort, setSort] = useState<CompanyListSortMode>(initialSort);
  const results = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.broadCategory} ${company.category} ${company.hq} ${company.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "すべて" || company.hiringStatus === status;
    const matchesSolution = solutionArea === "すべて" || company.broadCategory === solutionArea;
    const matchesTier = tier === "すべて" || tierCompanySlugs[tier].has(company.slug);
    const matchesEntry = entry === "すべて"
      ? true
      : entry === "pre-entry"
        ? Boolean(company.entryStatus)
        : entry === "pre-entry-signal"
          ? company.entryStatus === "pre-entry-signal" && company.salesRoles > 0
          : company.entryStatus === entry;
    const matchesHeadquarters = headquarters === "すべて" || getHeadquartersRegion(company.hq) === headquarters;
    const matchesOpenJobs = !openJobsOnly || companySlugsWithOpenJobs.has(company.slug);
    return matchesQuery && matchesStatus && matchesSolution && matchesTier && matchesEntry && matchesHeadquarters && matchesOpenJobs;
  }).sort((a, b) => {
    const byName = companyNameCollator.compare(a.name, b.name);
    if (sort === "name") return byName;
    if (sort === "jobs") return b.salesRoles - a.salesRoles || (newestJobDates.get(b.slug) ?? "").localeCompare(newestJobDates.get(a.slug) ?? "") || byName;
    if (sort === "new-jobs") return (newestJobDates.get(b.slug) ?? "").localeCompare(newestJobDates.get(a.slug) ?? "") || b.salesRoles - a.salesRoles || b.lastChecked.localeCompare(a.lastChecked) || byName;
    const aMetric = companySortMetrics[a.slug];
    const bMetric = companySortMetrics[b.slug];
    if (sort === "entry-asc" || sort === "entry-desc") return compareKnownNumbers(aMetric?.japanEntryYear ?? null, bMetric?.japanEntryYear ?? null, sort === "entry-asc" ? "asc" : "desc") || byName;
    if (sort === "headcount-asc" || sort === "headcount-desc") return compareKnownNumbers(aMetric?.japanHeadcount ?? null, bMetric?.japanHeadcount ?? null, sort === "headcount-asc" ? "asc" : "desc") || byName;
    if (sort === "entity-asc" || sort === "entity-desc") return compareKnownNumbers(aMetric?.japanEntityYear ?? null, bMetric?.japanEntityYear ?? null, sort === "entity-asc" ? "asc" : "desc") || byName;
    return b.lastChecked.localeCompare(a.lastChecked) || b.salesRoles - a.salesRoles || byName;
  }), [query, status, solutionArea, tier, entry, headquarters, openJobsOnly, sort, companySlugsWithOpenJobs, newestJobDates, companySortMetrics]);

  const clearReturnTarget = useCallback(() => {
    window.sessionStorage.removeItem(returnPositionKey);
    if (window.location.hash.startsWith("#company-")) {
      const url = new URL(window.location.href);
      url.hash = "company-results";
      window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    const setOptionalParam = (key: string, value: string, defaultValue: string) => {
      if (value === defaultValue) url.searchParams.delete(key);
      else url.searchParams.set(key, value);
    };

    setOptionalParam("q", query, "");
    setOptionalParam("status", status, "すべて");
    setOptionalParam("category", solutionArea, "すべて");
    setOptionalParam("tier", tier, "すべて");
    setOptionalParam("entry", entry, "すべて");
    setOptionalParam("hq", headquarters, "すべて");
    setOptionalParam("sort", sort, "updated");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }, [query, status, solutionArea, tier, entry, headquarters, sort]);

  useLayoutEffect(() => {
    let timers: number[] = [];
    let frame = 0;

    const restorePosition = () => {
      if (!window.location.hash.startsWith("#company-")) {
        window.history.scrollRestoration = "auto";
        return;
      }

      const slug = decodeURIComponent(window.location.hash.slice("#company-".length));
      const target = document.getElementById(`company-${slug}`);
      if (!target) return;

      let saved: ReturnPosition | null = null;
      try {
        saved = JSON.parse(window.sessionStorage.getItem(returnPositionKey) ?? "null") as ReturnPosition | null;
      } catch {
        window.sessionStorage.removeItem(returnPositionKey);
      }

      const currentListKey = `${window.location.pathname}${window.location.search}`;
      const cardOffset = saved?.listKey === currentListKey && saved.slug === slug ? saved.cardOffset : 130;
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      window.history.scrollRestoration = "manual";
      root.style.scrollBehavior = "auto";

      const alignCard = () => {
        const top = window.scrollY + target.getBoundingClientRect().top - cardOffset;
        window.scrollTo(0, Math.max(0, top));
      };

      alignCard();
      timers.push(window.setTimeout(alignCard, 80));
      timers.push(window.setTimeout(() => {
        root.style.scrollBehavior = previousScrollBehavior;
        window.history.scrollRestoration = "auto";
      }, 140));
    };

    const scheduleRestore = () => {
      window.history.scrollRestoration = "manual";
      frame = window.requestAnimationFrame(() => window.requestAnimationFrame(restorePosition));
    };

    scheduleRestore();
    window.addEventListener("pageshow", scheduleRestore);
    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach(window.clearTimeout);
      window.removeEventListener("pageshow", scheduleRestore);
    };
  }, []);

  const rememberCompanyPosition = useCallback((slug: string) => {
    const card = document.getElementById(`company-${slug}`);
    const url = new URL(window.location.href);
    url.hash = `company-${slug}`;
    window.history.scrollRestoration = "manual";
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    const position: ReturnPosition = {
      listKey: `${url.pathname}${url.search}`,
      slug,
      cardOffset: card?.getBoundingClientRect().top ?? 130,
    };
    window.sessionStorage.setItem(returnPositionKey, JSON.stringify(position));
  }, []);

  function changeSolutionArea(nextArea: string) {
    clearReturnTarget();
    setSolutionArea(nextArea);
    setTier("すべて");
  }

  function changeStatus(nextStatus: string) {
    clearReturnTarget();
    setStatus(nextStatus);
    if (nextStatus === "すべて") setEntry("すべて");
  }

  function changeEntry(nextEntry: EntryFilter) {
    clearReturnTarget();
    setEntry(nextEntry);
    if (nextEntry !== "すべて") {
      setTier("すべて");
      setStatus("すべて");
    }
  }

  return (
    <>
      {tier !== "すべて" && (
        <div className={`tier-filter-summary tier-filter-summary-${tier}`}>
          <div><span>採用温度で絞り込み中</span><strong>{tierLabels[tier]}</strong></div>
          <p>{tierAreas[tier].size}つの大分類に属し、現在日本向け営業求人を確認できる企業だけを表示</p>
          <button type="button" onClick={() => { clearReturnTarget(); setTier("すべて"); }}>絞り込みを解除</button>
        </div>
      )}
      {entry !== "すべて" && (
        <div className="entry-filter-summary">
          <div><span>進出状況で絞り込み中</span><strong>{entry === "pre-entry-signal" ? PRE_ENTRY_SIGNAL_FILTER_LABEL : entry === "not-entered" ? "日本未進出" : "日本法人未確認"}</strong></div>
          <p>{entry === "pre-entry-signal" ? PRE_ENTRY_SIGNAL_DEFINITION : entry === "not-entered" ? "日本法人・国内拠点・日本向け求人が未確認で、将来の進出可能性を調査した企業を表示" : "日本法人・国内拠点を確認できない企業を、日本採用の有無を分けて表示"}</p>
          <button type="button" onClick={() => changeEntry("すべて")}>絞り込みを解除</button>
        </div>
      )}
      <div className="filter-panel company-filter-panel">
        <label className="search-field">
          <span>企業・カテゴリを検索</span>
          <input value={query} onChange={(event) => { clearReturnTarget(); setQuery(event.target.value); }} placeholder="例：Data、Enterprise、Braze" />
        </label>
        <label className="select-field">
          <span>ソリューション大分類</span>
          <select value={solutionArea} onChange={(event) => changeSolutionArea(event.target.value)}>
            {solutionAreas.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="select-field headquarters-select-field">
          <span>本社所在地</span>
          <select value={headquarters} onChange={(event) => { clearReturnTarget(); setHeadquarters(event.target.value as HeadquartersRegion); }}>
            {headquartersRegions.map((region) => <option key={region.value} value={region.value}>{region.label}</option>)}
          </select>
        </label>
        <div className="filter-chips status-filter-chips" aria-label="採用状況で絞り込み">
          {statuses.map((item) => (
            <button key={item.value} className={status === item.value ? "active" : ""} onClick={() => changeStatus(item.value)}>{item.label}</button>
          ))}
        </div>
        <div className="filter-chips entry-filter-chips" aria-label="日本進出状況で絞り込み">
          <button className={entry === "pre-entry-signal" ? "active entry-active" : ""} aria-pressed={entry === "pre-entry-signal"} onClick={() => changeEntry(entry === "pre-entry-signal" ? "すべて" : "pre-entry-signal")}>{PRE_ENTRY_SIGNAL_FILTER_LABEL}</button>
          <button className={entry === "not-entered" ? "active entry-active" : ""} aria-pressed={entry === "not-entered"} onClick={() => changeEntry(entry === "not-entered" ? "すべて" : "not-entered")}>日本未進出</button>
        </div>
        <p className="entry-status-definition"><strong>「{PRE_ENTRY_SIGNAL_FILTER_LABEL}」とは</strong>{PRE_ENTRY_SIGNAL_DEFINITION}</p>
      </div>
      <div className="company-results-toolbar">
        <p className="result-count" aria-live="polite">{entry === "pre-entry-signal" ? `${PRE_ENTRY_SIGNAL_FILTER_LABEL}企業${results.length}社を表示` : entry === "not-entered" ? `日本未進出の注目企業${results.length}社を表示` : entry === "pre-entry" ? `日本法人未確認企業${results.length}社を表示` : tier !== "すべて" ? `${tierLabels[tier]}に含まれる${results.length}社を表示` : openJobsOnly ? `現在求人ありの企業${results.length}社を表示` : `${results.length}社を表示`}</p>
        <label className="select-field company-sort-field">
          <span>並び替え</span>
          <select value={sort} onChange={(event) => { clearReturnTarget(); setSort(event.target.value as CompanyListSortMode); }}>
            {companyListSortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
      </div>
      <div className="card-grid company-card-grid">
        {results.map((company) => <CompanyCard key={company.slug} company={company} valueSummary={companyCardSummaries[company.slug]} onNavigate={rememberCompanyPosition} />)}
      </div>
    </>
  );
}
