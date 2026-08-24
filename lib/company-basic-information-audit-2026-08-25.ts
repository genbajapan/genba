import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";

const checkedAt = "2026-08-25";

type IntelligenceMap = Record<string, CompanyPublicIntelligence>;

type BasicInformationPatch = {
  localLabel?: string;
  localName?: string;
  localUrl?: string;
  globalLabel?: string;
  globalName?: string;
  globalUrl?: string;
  japanOffice?: { value: string; detail: string; sourceId: string };
  japanSince?: { value: string; detail: string; sourceId: string };
  sources: ResearchSource[];
  milestones?: Array<{ year: string; label: string; detail: string; sourceId: string }>;
};

const patches: Record<string, BasicInformationPatch> = {
  workato: {
    japanOffice: {
      value: "東京都千代田区丸の内1-9-2 グラントウキョウサウスタワー9F THE COLLECTIVE",
      detail: "Workato公式Aboutに掲載された東京office。現日本責任者は公式情報間で表記が競合するため断定していない。",
      sourceId: "basic-audit-workato-location",
    },
    sources: [{ id: "basic-audit-workato-location", label: "Workato About Us", url: "https://www.workato.com/ja-JP/about_us", kind: "企業公式", scope: "東京office所在地", checkedAt }],
  },
  "think-cell": {
    localLabel: "think-cell Japan社長",
    localName: "松塚 展国",
    localUrl: "https://www.think-cell.com/ja/resources/content-hub/summary-pivot-matsutsuka",
    japanOffice: {
      value: "東京都千代田区丸の内1-9-2 グラントウキョウサウスタワー9F",
      detail: "think-cell公式Contactに掲載された東京office。",
      sourceId: "basic-audit-think-cell-contact",
    },
    japanSince: {
      value: "2022年（日本拠点開設）",
      detail: "2022年6月22日の公式発表で、日本初拠点の開設を確認。松塚展国氏は2023年8月からthink-cell Japan代表。",
      sourceId: "basic-audit-think-cell-opening",
    },
    sources: [
      {
        id: "basic-audit-think-cell-leadership",
        label: "think-cell 松塚代表インタビューまとめ",
        url: "https://www.think-cell.com/ja/resources/content-hub/summary-pivot-matsutsuka",
        kind: "企業公式",
        scope: "日本法人代表・就任時期・日本利用者規模",
        checkedAt,
      },
      {
        id: "basic-audit-think-cell-contact",
        label: "think-cell お問い合わせ・拠点一覧",
        url: "https://www.think-cell.com/ja/company/contact",
        kind: "企業公式",
        scope: "東京office所在地",
        checkedAt,
      },
      {
        id: "basic-audit-think-cell-opening",
        label: "think-cell 日本拠点開設発表",
        url: "https://www.think-cell.com/ar/company/news/2022-06-22",
        kind: "企業公式",
        scope: "日本初拠点の開設日",
        checkedAt,
      },
    ],
    milestones: [
      { year: "2022.06", label: "日本進出・初拠点を開設", detail: "東京に日本初の拠点を開設し、日本市場への投資とlocal team拡大を発表。", sourceId: "basic-audit-think-cell-opening" },
      { year: "2023.08", label: "松塚展国氏が日本代表に就任", detail: "think-cell公式の日本語記事で、2023年8月からthink-cell Japan代表を務めることを確認。", sourceId: "basic-audit-think-cell-leadership" },
    ],
  },
  outsystems: {
    localLabel: "日本法人 代表取締役会長＆CEO",
    localName: "手島 主税",
    localUrl: "https://www.outsystems.com/ja-jp/news?c7742d7a_page=1",
    sources: [{ id: "basic-audit-outsystems-leadership", label: "OutSystems日本 Newsroom", url: "https://www.outsystems.com/ja-jp/news?c7742d7a_page=1", kind: "企業公式", scope: "2026年7月29日の日本法人代表就任発表", checkedAt }],
    milestones: [{ year: "2026.07", label: "手島主税氏が日本法人代表に就任", detail: "代表取締役会長＆CEOとして日本市場の成長を統括。", sourceId: "basic-audit-outsystems-leadership" }],
  },
  sailpoint: {
    localLabel: "日本法人代表・本社VP",
    localName: "福島 徹",
    localUrl: "https://www.sailpoint.com/ja/press-releases/sailpoint-japan-itr-report-2025",
    japanSince: { value: "2021年（日本事業を本格展開）", detail: "2025年の日本法人代表就任発表で、日本市場での本格展開を2021年からと説明。", sourceId: "basic-audit-sailpoint-appointment" },
    sources: [
      { id: "basic-audit-sailpoint-leadership", label: "SailPoint日本 2026年調査発表", url: "https://www.sailpoint.com/ja/press-releases/sailpoint-japan-itr-report-2025", kind: "企業公式", scope: "現日本法人代表", checkedAt },
      { id: "basic-audit-sailpoint-appointment", label: "SailPoint日本法人代表就任発表", url: "https://www.sailpoint.com/ja/press-releases/sailpoint-appoints-toru-fukushima", kind: "企業公式", scope: "代表就任・日本事業の本格展開時期", checkedAt },
    ],
    milestones: [{ year: "2025.09", label: "福島徹氏が日本法人代表に就任", detail: "日本市場の戦略と事業強化を担う日本法人代表に就任。", sourceId: "basic-audit-sailpoint-appointment" }],
  },
  tanium: {
    globalLabel: "Co-founder・CEO",
    globalName: "Orion Hindawi",
    globalUrl: "https://www.tanium.com/press-releases/tanium-reappoints-co-founder-orion-hindawi-as-ceo-to-drive-next-chapter-of-growth",
    localLabel: "日本代表執行役社長",
    localName: "原田 英典",
    localUrl: "https://www.tanium.jp/press-releases/gptw-award-2026/",
    japanOffice: { value: "東京都千代田区大手町2-6-4 常盤橋タワー25F", detail: "2026年の日本公式発表に掲載された日本office。", sourceId: "basic-audit-tanium-japan" },
    japanSince: { value: "2015年（日本法人設立）", detail: "2026年の日本公式発表に掲載された日本法人の設立年。", sourceId: "basic-audit-tanium-japan" },
    sources: [
      { id: "basic-audit-tanium-global-ceo", label: "Tanium CEO交代発表", url: "https://www.tanium.com/press-releases/tanium-reappoints-co-founder-orion-hindawi-as-ceo-to-drive-next-chapter-of-growth", kind: "企業公式", scope: "2026年8月20日付のCEO就任", checkedAt },
      { id: "basic-audit-tanium-japan", label: "タニウム 日本法人会社概要", url: "https://www.tanium.jp/press-releases/gptw-award-2026/", kind: "企業公式", scope: "日本代表・設立年・所在地", checkedAt },
    ],
  },
  "sensor-tower": {
    localLabel: "日本カントリーマネージャー", localName: "松尾 蔵人", localUrl: "https://sensortower.com/ja/blog/sensor-tower-apac-summit-2025-JP",
    japanOffice: { value: "東京都千代田区神田紺屋町45-1 神田ファースト3F", detail: "Sensor Tower公式Aboutに掲載された東京office。", sourceId: "basic-audit-sensor-tower-about" },
    japanSince: { value: "2025年（現東京office開設）", detail: "公式イベント記事で2025年からの新日本officeを確認。松尾蔵人氏は2024年9月から日本カントリーマネージャー。", sourceId: "basic-audit-sensor-tower-leadership" },
    sources: [
      { id: "basic-audit-sensor-tower-leadership", label: "Sensor Tower APAC SUMMIT 2025", url: "https://sensortower.com/ja/blog/sensor-tower-apac-summit-2025-JP", kind: "企業公式", scope: "日本カントリーマネージャー・現office開設", checkedAt },
      { id: "basic-audit-sensor-tower-about", label: "Sensor Tower 会社情報", url: "https://sensortower.com/about?locale=ja", kind: "企業公式", scope: "東京office所在地", checkedAt },
    ],
  },
  datasnipper: {
    localLabel: "日本カントリーマネージャー", localName: "砂山 源樹", localUrl: "https://www.datasnipper.com/jp/resources/my-journey-as-a-first-time-country-manager",
    japanSince: { value: "2024年7月（日本office立ち上げ）", detail: "公式記事で日本の初代カントリーマネージャー就任とoffice立ち上げを確認。", sourceId: "basic-audit-datasnipper-leadership" },
    sources: [{ id: "basic-audit-datasnipper-leadership", label: "DataSnipper 初めてのカントリーマネージャー", url: "https://www.datasnipper.com/jp/resources/my-journey-as-a-first-time-country-manager", kind: "企業公式", scope: "日本カントリーマネージャー・日本office立ち上げ", checkedAt }],
  },
  similarweb: {
    localLabel: "Similarweb Japanカントリーマネージャー", localName: "米田 匡克", localUrl: "https://www.similarweb.com/blog/ja/updates/announcements/customer-forum-2025-report/",
    sources: [{ id: "basic-audit-similarweb-leadership", label: "Similarweb Customer Forum TOKYO 2025", url: "https://www.similarweb.com/blog/ja/updates/announcements/customer-forum-2025-report/", kind: "企業公式", scope: "日本カントリーマネージャー", checkedAt }],
  },
  doubleverify: {
    localLabel: "代表取締役・日本法人代表", localName: "武田 隆", localUrl: "https://doubleverify.com/ja/blog/omnichannel/dvmap/dv-impact-tokyo-2025",
    japanSince: { value: "2020年（日本進出）", detail: "日本公式発表で2020年の日本進出を確認。", sourceId: "basic-audit-doubleverify-leadership" },
    sources: [{ id: "basic-audit-doubleverify-leadership", label: "DV IMPACT Tokyo 2025", url: "https://doubleverify.com/ja/blog/omnichannel/dvmap/dv-impact-tokyo-2025", kind: "企業公式", scope: "代表取締役・日本法人代表", checkedAt }],
  },
  dynatrace: {
    localLabel: "日本支社 代表執行役社長", localName: "徳永 信二", localUrl: "https://www.dynatrace.com/innovate/roadshow/tokyo/",
    japanOffice: { value: "東京都千代田区丸の内1-4-1 丸の内永楽ビルディング25F", detail: "Dynatrace公式Contactに掲載された日本office。", sourceId: "basic-audit-dynatrace-contact" },
    sources: [
      { id: "basic-audit-dynatrace-leadership", label: "Dynatrace Innovate Roadshow Tokyo 2026", url: "https://www.dynatrace.com/innovate/roadshow/tokyo/", kind: "企業公式", scope: "日本支社代表", checkedAt },
      { id: "basic-audit-dynatrace-contact", label: "Dynatrace お問い合わせ", url: "https://www.dynatrace.com/ja/contact/", kind: "企業公式", scope: "日本office所在地", checkedAt },
    ],
  },
  gitlab: {
    localLabel: "GitLab合同会社 Head of Japan", localName: "小澤 正治", localUrl: "https://about.gitlab.com/ja-jp/blog/event-report-transcend-tokyo-2026/",
    sources: [{ id: "basic-audit-gitlab-leadership", label: "GitLab Transcend Japan 2026レポート", url: "https://about.gitlab.com/ja-jp/blog/event-report-transcend-tokyo-2026/", kind: "企業公式", scope: "Head of Japan", checkedAt }],
  },
  watchguard: {
    globalLabel: "CEO", globalName: "Joe Smolarski", globalUrl: "https://www.watchguard.co.jp/about",
    localLabel: "日本法人代表", localName: "Sylvain Lejeune（シルヴァン・ルジュン）", localUrl: "https://www.watchguard.co.jp/about",
    japanOffice: { value: "東京都港区麻布台1-11-9 BPRプレイス神谷町5F", detail: "日本法人の公式会社概要に掲載された所在地。", sourceId: "basic-audit-watchguard-company" },
    japanSince: { value: "2002年11月（日本法人設立）", detail: "日本法人の公式会社概要に掲載された設立時期。", sourceId: "basic-audit-watchguard-company" },
    sources: [{ id: "basic-audit-watchguard-company", label: "WatchGuard日本法人 会社概要", url: "https://www.watchguard.co.jp/about", kind: "企業公式", scope: "日本法人代表・設立・所在地・global CEO", checkedAt }],
  },
  sayari: {
    localLabel: "Sayari Japan株式会社 代表取締役", localName: "草羽 宏和", localUrl: "https://sayari.com/jp/sayari-japan-conference-2026/",
    japanOffice: { value: "東京都中央区京橋3-1-1 東京スクエアガーデン14F", detail: "Sayari公式Contactに掲載された日本office。", sourceId: "basic-audit-sayari-contact" },
    japanSince: { value: "2025年（日本法人launch）", detail: "Sayari Japan Conference 2026の代表者紹介で、2025年から日本法人をlaunchしたことを確認。", sourceId: "basic-audit-sayari-leadership" },
    sources: [
      { id: "basic-audit-sayari-leadership", label: "Sayari Japan Conference 2026", url: "https://sayari.com/jp/sayari-japan-conference-2026/", kind: "企業公式", scope: "日本法人代表・日本法人launch時期", checkedAt },
      { id: "basic-audit-sayari-contact", label: "Sayari日本 お問い合わせ", url: "https://sayari.com/jp/contact-us/", kind: "企業公式", scope: "日本office所在地", checkedAt },
    ],
  },
  ivanti: {
    localLabel: "日本担当カントリーマネージャー（2023年就任を公式確認）", localName: "司馬 聡",
    localUrl: "https://www.ivanti.com/ja/company/press-releases/2023/ivanti-%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BD%93%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%BC%E3%81%AB%E5%8F%B8%E9%A6%AC%E8%81%A1%E3%82%92%E4%BB%BB%E5%91%BD",
    sources: [{ id: "basic-audit-ivanti-leadership", label: "Ivanti日本担当カントリーマネージャー就任発表", url: "https://www.ivanti.com/ja/company/press-releases/2023/ivanti-%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BD%93%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%BC%E3%81%AB%E5%8F%B8%E9%A6%AC%E8%81%A1%E3%82%92%E4%BB%BB%E5%91%BD", kind: "企業公式", scope: "2023年11月の日本担当カントリーマネージャー就任", checkedAt }],
  },
  "black-duck": {
    japanOffice: { value: "東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア39F", detail: "Black Duck公式Locationsに掲載された東京office。", sourceId: "basic-audit-black-duck-location" },
    sources: [{ id: "basic-audit-black-duck-location", label: "Black Duck Global Locations", url: "https://www.blackduck.com/company/locations.html", kind: "企業公式", scope: "東京office所在地", checkedAt }],
  },
  bluematrix: {
    japanOffice: { value: "東京都千代田区丸の内1-8-3 丸の内トラストタワー本館20F", detail: "BlueMatrix公式Aboutに掲載された日本office。", sourceId: "basic-audit-bluematrix-location" },
    sources: [{ id: "basic-audit-bluematrix-location", label: "BlueMatrix About Us", url: "https://www.bluematrix.com/about-us", kind: "企業公式", scope: "日本office所在地", checkedAt }],
  },
  dialpad: {
    japanOffice: { value: "東京都渋谷区渋谷2-9-8 CIRCLES渋谷6F", detail: "Dialpad公式Contactに掲載された東京office。", sourceId: "basic-audit-dialpad-location" },
    sources: [{ id: "basic-audit-dialpad-location", label: "Dialpad お問い合わせ", url: "https://www.dialpad.com/jp/contact-us/", kind: "企業公式", scope: "東京office所在地", checkedAt }],
  },
};

function replaceLeadership(intelligence: CompanyPublicIntelligence, patch: BasicInformationPatch) {
  const leadership = [...(intelligence.overviewLeadership ?? [])];
  if (patch.globalName && patch.globalUrl) {
    leadership[0] = { label: patch.globalLabel ?? leadership[0]?.label ?? "Global leadership", people: [{ name: patch.globalName, url: patch.globalUrl, linkLabel: "公式情報" }] };
  }
  if (patch.localName && patch.localUrl) {
    leadership[1] = { label: patch.localLabel ?? "Japan leadership", people: [{ name: patch.localName, url: patch.localUrl, linkLabel: "公式情報" }] };
  }
  if (leadership.length > 0) intelligence.overviewLeadership = leadership;
}

export function applyCompanyBasicInformationAudit20260825(intelligenceBySlug: IntelligenceMap) {
  for (const [slug, patch] of Object.entries(patches)) {
    const intelligence = intelligenceBySlug[slug];
    if (!intelligence) continue;
    intelligence.researchedAt = checkedAt;
    replaceLeadership(intelligence, patch);
    if (patch.japanOffice) intelligence.companyStats.japanOffice = patch.japanOffice;
    if (patch.japanSince) intelligence.companyStats.japanSince = patch.japanSince;

    const sourceIds = new Set(intelligence.sources.map((source) => source.id));
    for (const source of patch.sources) if (!sourceIds.has(source.id)) intelligence.sources.push(source);

    if (patch.milestones) {
      const retained = intelligence.marketStatus.milestones.filter(
        (milestone) => !patch.milestones?.some((addition) => addition.year === milestone.year && addition.label === milestone.label),
      );
      intelligence.marketStatus.milestones = [...retained, ...patch.milestones];
      intelligence.marketStatus.sourceIds = [...new Set([...intelligence.marketStatus.sourceIds, ...patch.milestones.map((milestone) => milestone.sourceId)])];
    }
  }

  const thinkCell = intelligenceBySlug["think-cell"];
  if (thinkCell) {
    thinkCell.marketStatus.milestones = thinkCell.marketStatus.milestones.filter((milestone) => milestone.label !== "日本事業開始済みを確認");
    thinkCell.facts = [
      ...thinkCell.facts.filter((fact) => fact.label !== "日本利用者"),
      { label: "日本利用者", value: "約2万2千人", detail: "think-cell Japan代表への公式インタビューまとめ掲載時点の会社説明。現在値ではない。", sourceIds: ["basic-audit-think-cell-leadership"] },
    ];
  }
}
