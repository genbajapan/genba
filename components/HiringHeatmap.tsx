"use client";

import { useEffect, useMemo, useState } from "react";
import { companies, getCompany, jobs } from "@/lib/market-data";

function toMonthEnd(year: number, month: number) {
  return new Date(Date.UTC(year, month + 1, 0)).toISOString().slice(0, 10);
}

function buildSnapshots() {
  const first = [...jobs].sort((a, b) => a.firstSeen.localeCompare(b.firstSeen))[0]?.firstSeen;
  const last = [...jobs].sort((a, b) => b.lastChecked.localeCompare(a.lastChecked))[0]?.lastChecked;
  if (!first || !last) return [];

  const [startYear, startMonth] = first.split("-").map(Number);
  const [endYear, endMonth] = last.split("-").map(Number);
  const dates: string[] = [];
  let year = startYear;
  let month = startMonth - 1;

  while (year < endYear || (year === endYear && month <= endMonth - 1)) {
    const monthEnd = toMonthEnd(year, month);
    dates.push(monthEnd > last ? last : monthEnd);
    month += 1;
    if (month === 12) {
      month = 0;
      year += 1;
    }
  }

  return Array.from(new Set(dates));
}

const snapshots = buildSnapshots();
const allAreas = Array.from(new Set(companies.map((company) => company.category)));
const currentCounts = new Map<string, number>();

for (const job of jobs) {
  const area = getCompany(job.companySlug)?.category;
  if (area) currentCounts.set(area, (currentCounts.get(area) ?? 0) + 1);
}

const orderedAreas = allAreas.sort((a, b) => {
  const difference = (currentCounts.get(b) ?? 0) - (currentCounts.get(a) ?? 0);
  return difference || a.localeCompare(b);
});

function formatDate(date: string) {
  const [, month, day] = date.split("-");
  return `${Number(month)}/${Number(day)}`;
}

export default function HiringHeatmap() {
  const [snapshotIndex, setSnapshotIndex] = useState(Math.max(0, snapshots.length - 1));
  const [playing, setPlaying] = useState(false);
  const selectedDate = snapshots[snapshotIndex] ?? "";

  useEffect(() => {
    if (!playing || snapshots.length < 2) return;
    const timer = window.setInterval(() => {
      setSnapshotIndex((current) => {
        if (current >= snapshots.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 850);
    return () => window.clearInterval(timer);
  }, [playing]);

  const rows = useMemo(() => orderedAreas.map((area) => {
    const areaCompanies = companies.filter((company) => company.category === area);
    const count = jobs.filter((job) => {
      const company = getCompany(job.companySlug);
      return company?.category === area && job.firstSeen <= selectedDate;
    }).length;
    return { area, count, companies: areaCompanies.length };
  }), [selectedDate]);

  const total = rows.reduce((sum, row) => sum + row.count, 0);
  const activeAreas = rows.filter((row) => row.count > 0).length;
  const maximum = Math.max(1, ...orderedAreas.map((area) => currentCounts.get(area) ?? 0));
  const selectedMaximum = Math.max(0, ...rows.map((row) => row.count));
  const hotAreas = rows.filter((row) => row.count === selectedMaximum && row.count > 0).map((row) => row.area);

  const restartOrToggle = () => {
    if (!playing && snapshotIndex >= snapshots.length - 1) setSnapshotIndex(0);
    setPlaying((current) => !current);
  };

  return (
    <section className="market-heat" aria-labelledby="market-heat-title">
      <div className="market-heat-head">
        <div>
          <p className="eyebrow eyebrow-light">SOLUTION HIRING HEAT</p>
          <h2 id="market-heat-title">どの領域が、いま熱いか。</h2>
          <p>Genbaで公式確認できた掲載中の営業求人を、企業のソリューション領域別に集計しています。</p>
        </div>
        <div className="market-date" aria-live="polite">
          <span>表示時点</span>
          <strong>{selectedDate.replaceAll("-", ".")}</strong>
          <small>初回確認日ベース</small>
        </div>
      </div>

      <div className="market-dashboard">
        <div className="market-plot">
          <div className="market-axis"><span>ソリューション領域</span><span>掲載中の営業求人</span></div>
          {rows.map((row, index) => {
            const width = row.count === 0 ? 0 : Math.max(10, (row.count / maximum) * 100);
            const isHot = row.count > 0 && row.count === selectedMaximum;
            return (
              <div className={`market-row ${isHot ? "market-row-hot" : ""}`} key={row.area}>
                <div className="market-row-label">
                  <strong>{row.area}</strong>
                  <span>{row.companies}社を観測</span>
                </div>
                <div className="market-bar-track">
                  <div
                    className="market-bar"
                    style={{ width: `${width}%`, transitionDelay: `${index * 30}ms` }}
                  >
                    {row.count > 0 && <span className="market-point" />}
                  </div>
                  <strong>{row.count}<small>件</small></strong>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="market-insight">
          <p className="market-insight-label">この時点の採用温度</p>
          <strong className="market-total">{total}<small>件</small></strong>
          <p>{activeAreas}領域で営業求人を確認</p>
          <div className="market-hot-label">HOT AREA</div>
          <strong className="market-hot-value">{hotAreas.length ? hotAreas.join(" / ") : "観測開始前"}</strong>
          <p className="market-disclaimer">現在掲載中の求人を初回確認日から再構成した推移です。募集終了履歴は今後の観測データから蓄積します。</p>
        </aside>
      </div>

      <div className="market-timeline">
        <button type="button" className="market-play" onClick={restartOrToggle} aria-label={playing ? "推移の再生を停止" : "推移を再生"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>{playing ? "停止" : snapshotIndex >= snapshots.length - 1 ? "最初から再生" : "再生"}
        </button>
        <div className="market-range-wrap">
          <input
            type="range"
            min="0"
            max={Math.max(0, snapshots.length - 1)}
            value={snapshotIndex}
            onChange={(event) => {
              setPlaying(false);
              setSnapshotIndex(Number(event.target.value));
            }}
            aria-label="採用状況の表示時点"
            aria-valuetext={selectedDate}
          />
          <div className="market-ticks">
            {snapshots.map((date, index) => (
              <button key={date} type="button" onClick={() => { setPlaying(false); setSnapshotIndex(index); }} className={snapshotIndex === index ? "active" : ""}>
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
