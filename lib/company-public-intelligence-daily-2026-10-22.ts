import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-22";

const megaport = buildDailyCompanyIntelligence({
  slug: "megaport", name: "Megaport", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/megaport/d8f1e7d3-92f4-4172-9455-9b75bb95f0d5", officialUrl: "https://www.megaport.com/ja/",
  customersUrl: "https://www.megaport.com/resources/case-studies/", financeUrl: "https://www.megaport.com/about-megaport/",
  problem: "企業のクラウド、データセンター、拠点接続が個別回線と長い調達工程へ分かれると、新しい環境を増やすたびに開通待ち、過剰帯域、運用の分断が増える。",
  origin: "2013年、豪州ブリスベンのエンジニアが『接続はなぜこれほど複雑なのか』と問い、ネットワークをソフトウェアから即時に利用できる事業として創業した。",
  externalNeed: "複数クラウド、分散拠点、AI計算基盤が広がるほど、企業は固定回線を案件ごとに待つのではなく、帯域、経路、費用、安全性を需要に合わせて変更する必要がある。",
  solution: "クラウド、データセンター、拠点、GPU・計算基盤を世界の共通網へ接続し、ポータル、API、Terraformから回線と仮想ルーターを短時間で配備・変更する。",
  selection: "通信事業者の専用線、クラウド各社の個別接続、SD-WAN、内製ネットワークと比べ、接続先、開通時間、帯域変更、複数クラウド運用、障害分離、総費用を同じ設計で比較する。",
  growth: "2013年創業、豪州証券取引所上場。会社公式は31カ国超、顧客4,000社超、対応拠点1,200超、サービス提供者410超を掲載。公式求人は世界600人超と説明する。",
  role: "日本のSales Development Representativeと東京・大阪のSales Executiveが、案件創出から100万ドル超の企業商談、直販・販売パートナーでの受注まで担う。",
  organization: "Megaport Japan株式会社と東京都港区の公式拠点を確認。国内の正確な在籍人数と職種別人数は未確認。",
  career: "複数クラウドとネットワークの技術要件を、企業の可用性、開通速度、運用工数、費用へ翻訳し、新規開拓から大企業受注まで持つ経験。",
  globalHeadcount: "600人超（2026年10月の会社公式求人）", japanPresence: "Megaport Japan株式会社、東京都港区。国内人数は未確認", japanSince: "2019年",
  customer: { company: "NXP", outcome: "クラウドの本番環境立ち上げを半年の計画から約1週間へ短縮したと会社公式で紹介。日本企業の実名・定量事例は今回未確認。" },
  facts: [["創業","2013年","豪州ブリスベンで創業。"],["顧客","4,000社超","会社公式。"],["対応拠点","1,200超","31カ国超。"],["従業員","600人超","2026年10月の会社公式求人。"],["日本進出","2019年","日本法人と東京拠点を確認。"],["日本求人","2件","SDRとSales Executive。"]],
  products: [["Megaport Virtual Cross Connect","クラウドとデータセンターをオンデマンド接続。","https://www.megaport.com/services/megaport/"],["Megaport Cloud Router","物理機器なしで複数クラウド間を仮想接続。","https://www.megaport.com/services/megaport-cloud-router/"],["Megaport Virtual Edge","SD-WANやネットワーク機能を仮想配備。","https://www.megaport.com/services/megaport-virtual-edge/"]],
  competitors: "通信事業者の専用線、Equinix Fabric、PacketFabric、クラウド各社の個別接続、SD-WAN・内製ネットワーク",
  leader: ["Michael Reid","Chief Executive Officer","https://www.megaport.com/about-megaport/"], local: ["未確認","日本事業責任者","https://www.megaport.com/ja/contact/"],
  work: ["ハイブリッド","東京・大阪・リモート","固定出社日数は未確認","SDRはリモート、Sales Executiveはハイブリッド","Sales Executiveは販売パートナー行事へ通常週1〜2回参加。担当範囲、出張、目標を選考で確認"],
}, checkedAt);
megaport.sources.push(
  { id: "megaport-about", label: "Megaport会社情報", url: "https://www.megaport.com/about-megaport/", kind: "企業公式", scope: "創業・規模・顧客・製品・日本進出", checkedAt },
  { id: "megaport-contact", label: "Megaport連絡先", url: "https://www.megaport.com/contact/", kind: "企業公式", scope: "日本拠点・所在地", checkedAt },
  { id: "megaport-japan-company", label: "Megaport Japan会社情報", url: "https://docs.megaport.com/pdf/finance/onboarding/JP-onboarding-letter.pdf", kind: "企業公式", scope: "日本法人名・法人番号・所在地", checkedAt },
  { id: "megaport-cases", label: "Megaport導入事例", url: "https://www.megaport.com/resources/case-studies/", kind: "企業公式", scope: "顧客の導入目的・成果", checkedAt },
  { id: "megaport-sdr", label: "Sales Development Representative", url: "https://jobs.lever.co/megaport/80b34baf-e689-41e6-abb3-add16166efdc", kind: "企業公式", scope: "現行求人・勤務地・責任・規模", checkedAt },
  { id: "megaport-sales", label: "Sales Executive", url: "https://jobs.lever.co/megaport/d8f1e7d3-92f4-4172-9455-9b75bb95f0d5", kind: "企業公式", scope: "現行求人・勤務地・責任・勤務形態", checkedAt },
  { id: "gbiz-headcount-megaport", label: "gBizINFO Megaport Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010401140545", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
megaport.companyStats.japanOffice = { value: "東京都港区高輪3-25-29", detail: "会社公式の現行連絡先。", sourceId: "megaport-contact" };
megaport.companyStats.japanHeadcount = { value: "掲載なし", detail: "法人と所在地は確認したが、事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-megaport" };
if (megaport.salesMarketOutlook) megaport.salesMarketOutlook.cases = [{ company: "国内公式事例は未確認", need: "NXPのクラウド立ち上げ短縮は海外公式事例。日本企業の実名・定量成果は今回確認できず、国内での再現性は別途検証が必要。", sourceId: "megaport-cases" }];

const tradinghub = buildDailyCompanyIntelligence({
  slug: "tradinghub", name: "TradingHub", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/tradinghub/635d2759-fae5-430d-851f-24c2bd1e6a15", officialUrl: "https://tradinghub.com/about",
  customersUrl: "https://tradinghub.com/trade-surveillance", financeUrl: "https://tradinghub.com/insights/tradinghub-secures-strategic-investment-from-nordic-capital-to-accelerate-next-phase-of-growth",
  problem: "金融機関の取引監視が商品別の固定ルールへ分かれると、相関商品を使った市場操作を見逃す一方、誤検知の大量調査で本当に重大な案件へ時間を使えない。",
  origin: "市場の実務家が持つリスクと価格影響の見方を取引監視へ持ち込むため、2010年に英国で創業した。",
  externalNeed: "電子取引と商品横断戦略が複雑になるほど、金融機関は単純な閾値ではなく、取引意図、価格影響、相関、重要度を説明できる監視と規制対応が必要になる。",
  solution: "MASTが注文、約定、見積り、ポジションを数理モデルで分析し、単一商品・商品横断の市場不正を検知、重要度順に調査対象を絞る。",
  selection: "従来型のルール監視、Nasdaq、NICE Actimize、Eventus、SteelEye、内製分析と比べ、商品横断検知、誤検知、資産クラス範囲、モデル説明、調整負荷、調査時間で比較する。",
  growth: "2010年創業。会社公式は1日1.35億件超の取引、世界運用資産の25%に相当する取引、45カ国超、Tier 1〜4投資銀行18社を掲載。公式求人は世界150人超と説明する。",
  role: "東京のSenior Relationship Managerが日本展開の最初の採用として、顧客関係、提案・実演、全営業工程、売上拡大、製品への市場要望を担う。",
  organization: "ロンドン、トロント、シンガポール、シドニーの拠点を公式確認。日本法人、国内拠点、雇用主体、既存国内顧客は未確認。",
  career: "金融市場・規制・取引監視の専門性を、日本の一人目商業採用として顧客関係、販売、市場教育、製品学習へ広げる経験。",
  globalHeadcount: "150人超（2026年10月の会社公式求人）", japanPresence: "日本法人・国内拠点は未確認。東京の日本展開責任者求人1件を確認", japanSince: "未進出",
  customer: { company: "投資銀行18社", outcome: "会社公式はTier 1〜4の投資銀行18社で利用され、1日1.35億件超の取引を分析すると掲載。顧客名と日本企業事例は未確認。" },
  facts: [["創業","2010年","英国で創業。"],["分析取引","1日1.35億件超","会社公式。"],["監視範囲","世界運用資産の25%相当","会社公式。"],["顧客","投資銀行18社","Tier 1〜4。"],["日本法人","未確認","国内法人・拠点・雇用主体を確認できず。"],["日本求人","1件","Senior Relationship Manager。"]],
  products: [["MAST","市場リスクと価格影響モデルで市場不正を検知。","https://tradinghub.com/trade-surveillance"],["Order Book Surveillance","注文板と市場再生を使って操作行動を調査。","https://tradinghub.com/trade-surveillance"],["Calculation as a Service","顧客固有の監視・分析・報告を追加。","https://tradinghub.com/surveillance"]],
  competitors: "従来型ルール監視、Nasdaq、NICE Actimize、Eventus、SteelEye、内製分析",
  leader: ["Mike Coats","Chief Executive Officer","https://tradinghub.com/about"], local: ["未確認","日本事業責任者","https://tradinghub.com/contact-us"],
  work: ["ハイブリッド","東京","固定出社日数は未確認","完全リモートではない","日本展開の最初のRelationship Management採用。雇用主体、出張、担当社数、目標を選考で確認"],
  preEntry: {
    verdict: "進出可能性は高。東京で日本展開を主導する最初の商業採用を出した一方、日本法人・国内拠点・雇用主体は未確認。",
    signal: "東京勤務のSenior Relationship Managerを公式募集し、日本の顧客関係、営業全工程、売上基盤、業界プレゼンスを一人目から作ると明記。",
    hurdle: "日本法人、国内拠点、雇用主体、既存国内顧客、日本語の契約・技術支援、国内チーム人数を確認できない。",
    conditions: ["日本の金融機関で取引監視の有償需要と更新・拡大を再現する。", "国内の契約、データ管理、金融規制、技術支援の責任主体を整える。", "営業だけでなく導入・分析・顧客支援を日本語で継続できる体制を作る。"],
    watches: ["日本法人・国内拠点", "雇用主体と国内チーム", "日本の金融機関の公式事例", "日本語契約・技術支援", "Japan導入・分析求人"],
  },
}, checkedAt);
tradinghub.sources.push(
  { id: "tradinghub-about", label: "TradingHub会社情報", url: "https://tradinghub.com/about", kind: "企業公式", scope: "創業・製品・拠点・経営陣", checkedAt },
  { id: "tradinghub-mast", label: "MAST Trade Surveillance", url: "https://tradinghub.com/trade-surveillance", kind: "企業公式", scope: "製品・顧客規模・分析量・差別化", checkedAt },
  { id: "tradinghub-investment", label: "Nordic Capital投資発表", url: "https://tradinghub.com/insights/tradinghub-secures-strategic-investment-from-nordic-capital-to-accelerate-next-phase-of-growth", kind: "企業公式", scope: "資本・成長・拠点", checkedAt },
  { id: "tradinghub-job", label: "Senior Relationship Manager", url: "https://jobs.ashbyhq.com/tradinghub/635d2759-fae5-430d-851f-24c2bd1e6a15", kind: "企業公式", scope: "現行求人・勤務地・日本展開・規模", checkedAt },
  { id: "tradinghub-contact", label: "TradingHub拠点一覧", url: "https://tradinghub.com/contact-us", kind: "企業公式", scope: "グローバル拠点・日本拠点の未掲載確認", checkedAt },
  { id: "gbiz-headcount-tradinghub", label: "gBizINFO TradingHub法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
tradinghub.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京求人は確認したが、日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-tradinghub" };
if (tradinghub.salesMarketOutlook) tradinghub.salesMarketOutlook.cases = [{ company: "国内公式事例は未確認", need: "会社公式は投資銀行18社と分析規模を公表するが顧客名は非公開。日本企業の実名・定量成果は今回未確認。", sourceId: "tradinghub-mast" }];
if (tradinghub.marketStatus.japanGrowth) {
  tradinghub.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。東京の日本展開求人1件を確認";
  tradinghub.marketStatus.japanGrowth.narrative = "日本展開を主導する最初のSenior Relationship Managerを東京で公式募集。応募可能な求人はあるが、雇用主体、日本法人、国内拠点、導入・支援チームは未確認。";
}

export function applyDaily20261022Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug["extreme-networks"];
  if (!intelligence) return;
  const sourceId = "extreme-networks-systems-engineer-closure-20261022";
  const label = "Systems Engineer求人終了";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({
      id: sourceId,
      label: `${label}（公式求人）`,
      url: "https://jobs.lever.co/extremenetworks/b2bb5e7a-e890-4ff2-9dfd-8b57c5cdd071",
      kind: "企業公式",
      scope: "旧公式URLの404と求人終了を確認",
      checkedAt,
    });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
    { year: "2026.10.22", label, detail: "旧公式求人URLが404を返したため掲載から除外。別IDのSenior Systems Engineerなど日本の公式求人は継続しており、これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261022IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  megaport,
  tradinghub,
};
