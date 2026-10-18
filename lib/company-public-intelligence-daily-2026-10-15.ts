import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-15";

const tenable = buildDailyCompanyIntelligence({
  slug: "tenable", name: "Tenable", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/tenableinc/jobs/5379199008", officialUrl: "https://jp.tenable.com/about-tenable/about-us",
  customersUrl: "https://jp.tenable.com/case-studies/techmatrix", financeUrl: "https://investors.tenable.com/static-files/50dc4e4f-6b04-460b-97df-75a87bb7a427",
  problem: "IT、クラウド、ID、OTへ資産と弱点が分散すると、脆弱性件数は増えても、どの経路が事業へ大きな損失を与えるかを判断しにくい。限られた担当者が重大リスクへ対応を集中できない課題がある。",
  origin: "17歳のRenaud Deraisonが1998年に公開した脆弱性スキャナーNessusを起点に、Ron Gula、Jack Huffardと2002〜2003年にTenableを創業した。",
  externalNeed: "クラウド、SaaS、ID、生成AI、工場設備まで攻撃面が広がり、企業は個別の検出件数ではなく、侵入経路、資産の重要度、悪用可能性を結び、修正を説明可能な優先順位へ変える必要がある。",
  solution: "Tenable OneでIT、クラウド、ID、OTなどの資産と弱点を統合し、攻撃経路と事業リスクを可視化して対応の優先順位を付ける。",
  selection: "Qualys、Rapid7、Microsoft、Wiz、各種スキャナーや内製台帳と比べ、資産範囲、Nessusの検査知識、攻撃経路、優先順位、既存運用への接続で比較する。",
  growth: "会社公式は世界4万社超、Fortune 500の65%、Global 2000の50%を顧客として掲載。2026年第1四半期売上は2.621億ドルで前年同期比9.6%増。",
  role: "Commercial Territory Account Managerが日本の担当顧客で新規・既存商談、地域販売計画、実演、交渉、案件優先順位、予測、長期価値を担う。",
  organization: "2013年にTenable Network Security Japanを設立し、東京・丸の内オフィスとCountry Managerへの報告線を確認。国内の正確な在籍人数は未確認。",
  career: "脆弱性管理、クラウド・ID・OTのリスクを、経営層と現場が合意できる優先順位へ変え、企業販売と顧客拡大を担う経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "Tenable Network Security Japan、東京オフィス、国内導入事例、東京求人1件", japanSince: "2013年に日本法人設立",
  customer: { company: "テクマトリックス", outcome: "Tenable OneでIT資産を包括的に可視化し、リスクに基づく優先順位付けで対応工数を減らし、Active Directoryの死角を可視化したと紹介。" },
  facts: [["創業","2002年","Nessusを起点に創業。"],["顧客","4万社超","会社公式。"],["Fortune 500","65%","会社公式。"],["Q1売上","2.621億ドル","2026年第1四半期。"],["日本法人","2013年","会社公式発表。"],["日本求人","1件","Commercial Territory Account Manager。"]],
  products: [["Tenable One","IT、クラウド、ID、OTの攻撃面を統合して優先順位付け。","https://jp.tenable.com/products/tenable-one"],["Tenable Vulnerability Management","資産と脆弱性を継続的に発見・評価。","https://jp.tenable.com/products/tenable-io"],["Tenable Cloud Security","クラウドの設定、権限、ワークロードのリスクを管理。","https://jp.tenable.com/cloud-security"]],
  competitors: "Qualys、Rapid7、Microsoft、Wiz、各種脆弱性スキャナー、内製資産台帳",
  leader: ["Steve Vintz / Mark Thurmond","Co-Chief Executive Officers","https://investors.tenable.com/static-files/50dc4e4f-6b04-460b-97df-75a87bb7a427"], local: ["未確認","Country Manager, Japan","https://job-boards.greenhouse.io/tenableinc/jobs/5379199008"],
  work: ["未確認","東京オフィス","固定出社日数は未確認","完全リモートの明記なし","担当社数、商談期間、目標、達成率、技術支援体制を選考で確認"],
}, checkedAt);
tenable.sources.push(
  { id: "tenable-about", label: "Tenable会社情報", url: "https://jp.tenable.com/about-tenable/about-us", kind: "企業公式", scope: "創業・顧客・製品範囲", checkedAt },
  { id: "tenable-nessus-origin", label: "Nessus turns 10", url: "https://www.tenable.com/blog/nessus-turns-10", kind: "企業公式", scope: "Nessus・創業背景", checkedAt },
  { id: "tenable-japan", label: "Tenable日本法人設立発表", url: "https://www.tenable.com/press-releases/tenable-network-security-names-toyo-corporation-as-value-added-distributor-in-japan", kind: "企業公式", scope: "日本法人・国内展開", checkedAt },
  { id: "tenable-tokyo", label: "Tenable東京オフィス", url: "https://jp.tenable.com/about-tenable/contact-tenable", kind: "企業公式", scope: "国内所在地", checkedAt },
  { id: "tenable-techmatrix", label: "テクマトリックス導入事例", url: "https://jp.tenable.com/case-studies/techmatrix", kind: "企業公式", scope: "国内顧客・導入効果", checkedAt },
  { id: "tenable-q1-2026", label: "Tenable Q1 2026 results", url: "https://investors.tenable.com/static-files/50dc4e4f-6b04-460b-97df-75a87bb7a427", kind: "法定開示", scope: "売上・成長・経営体制", checkedAt },
  { id: "tenable-japan-job", label: "Commercial Territory Account Manager", url: "https://job-boards.greenhouse.io/tenableinc/jobs/5379199008", kind: "企業公式", scope: "現行求人・勤務地・責任", checkedAt },
  { id: "gbiz-headcount-tenable", label: "gBizINFO Tenable法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
tenable.companyStats.japanOffice = { value: "東京都千代田区丸の内2-7-2", detail: "JPタワー14階。会社公式で確認。", sourceId: "tenable-tokyo" };
tenable.companyStats.japanHeadcount = { value: "対象事業所情報なし", detail: "日本法人と東京オフィスは確認したが、gBizINFOの事業所情報で被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-tenable" };

const zimperium = buildDailyCompanyIntelligence({
  slug: "zimperium", name: "Zimperium", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/zimperium/5a7bd1a4-928d-474f-8a86-fd0a5718c584", officialUrl: "https://zimperium.com/company",
  customersUrl: "https://zimperium.com/blog/softbank-goes-live-with-security-checker", financeUrl: "https://zimperium.com/hubfs/Zimperium/Corporate%20Fact%20Sheet%2025.pdf",
  problem: "従業員端末と顧客向けアプリが業務・認証・個人データの入口になる一方、フィッシング、悪性アプリ、改ざん、端末侵害、未知の攻撃を従来のPC中心の防御だけでは捉えにくい。",
  origin: "Zuk Avrahamが2010年にARMの脆弱性を研究し、モバイルもPCと同じ高度な攻撃を受けると考え、管理者権限なしで端末上の攻撃を検知する会社を創業した。",
  externalNeed: "業務と顧客接点がモバイルへ移り、攻撃者も認証情報、アプリ改ざん、端末侵害を狙うため、企業は端末とアプリを開発時から実行時まで継続的に守る必要がある。",
  solution: "端末上で動くAI検知、モバイル端末防御、アプリ脆弱性検査、改ざん防止・鍵保護を一つの基盤へ統合し、未知の攻撃と対応負荷を減らす。",
  selection: "Microsoft、Lookout、Ivanti、Jamf、アプリ保護SDK、内製対策と比べ、端末とアプリの両面、端末上の検知、未知攻撃、導入経路、データ保護で比較する。",
  growth: "2010年創業。Liberty Strategic CapitalとSoftBankが支援し、日本を主要市場として公式求人に掲載。SoftBank、TOYOとの国内展開実績がある。",
  role: "Sales Directorが日本で案件創出、提案・実演、複雑な契約、販売予測、販売組織の運営・育成、提携者・経営層との関係を担う。",
  organization: "東京勤務の責任者求人と日本を主要市場とする記載を確認。日本法人名、国内拠点住所、正確な在籍人数は未確認。",
  career: "モバイル端末とアプリのリスクを企業課題へ翻訳し、日本市場の販売戦略、案件、提携、組織を一つの責任として作る経験。",
  globalHeadcount: "約300人（会社公式Fact Sheet）", japanPresence: "日本を主要市場として公式掲載。SoftBank・TOYOとの国内実績、東京のSales Director求人1件", japanSince: "2014年にTOYOを国内販売会社として確認",
  customer: { company: "SoftBank", outcome: "Zimperiumの端末上AI検知を使うSecurity Checkerを日本の顧客向けに展開したと会社公式が紹介。" },
  facts: [["創業","2010年","ARM攻撃研究を起点に創業。"],["本社","Dallas","会社公式。"],["投資家","Liberty Strategic Capital・SoftBank","会社公式。"],["国内実績","SoftBank・TOYO","会社公式。"],["対象","端末・アプリ","会社公式。"],["日本求人","1件","Sales Director。"]],
  products: [["Mobile Threat Defense","端末上でフィッシング、悪性アプリ、端末・ネットワーク攻撃を検知。","https://zimperium.com/mobile-threat-defense"],["Mobile App Protection","顧客向けアプリへ改ざん防止と実行時保護を組み込む。","https://zimperium.com/mobile-app-protection"],["Mobile App Vetting","アプリの脆弱性とリスクを開発・配布前に検査。","https://zimperium.com/mobile-app-vetting"]],
  competitors: "Lookout、Microsoft、Ivanti、Jamf、各種アプリ保護SDK、内製モバイル対策",
  leader: ["Shridhar Mittal","Chief Executive Officer","https://zimperium.com/company"], local: ["未確認","日本事業責任者","https://jobs.lever.co/zimperium/5a7bd1a4-928d-474f-8a86-fd0a5718c584"],
  work: ["ハイブリッド","東京都","出社日数は未確認","東京への出社と地域出張あり","販売組織人数、目標、達成率、技術・顧客支援体制を選考で確認"],
}, checkedAt);
zimperium.sources.push(
  { id: "zimperium-company", label: "Zimperium会社情報", url: "https://zimperium.com/company", kind: "企業公式", scope: "使命・製品・経営陣", checkedAt },
  { id: "zimperium-origin", label: "Zimperium創業者記事", url: "https://zimperium.com/blog/welcoming-shridhar-mittal-to-the-z-family", kind: "企業公式", scope: "創業背景・技術思想", checkedAt },
  { id: "zimperium-fact-sheet", label: "Zimperium Corporate Fact Sheet", url: "https://zimperium.com/hubfs/Zimperium/Corporate%20Fact%20Sheet%2025.pdf", kind: "企業公式", scope: "創業・本社・投資家", checkedAt },
  { id: "zimperium-softbank", label: "SoftBank国内展開", url: "https://zimperium.com/blog/softbank-goes-live-with-security-checker", kind: "企業公式", scope: "国内顧客・導入内容", checkedAt },
  { id: "zimperium-toyo", label: "TOYO国内販売・投資", url: "https://zimperium.com/blog/zimperium-raises-12m-in-series-b-funding-led-by-telstra-2", kind: "企業公式", scope: "国内販売体制", checkedAt },
  { id: "zimperium-japan-job", label: "Sales Director (Tokyo, Japan)", url: "https://jobs.lever.co/zimperium/5a7bd1a4-928d-474f-8a86-fd0a5718c584", kind: "企業公式", scope: "現行求人・勤務地・言語・責任", checkedAt },
  { id: "gbiz-headcount-zimperium", label: "gBizINFO Zimperium法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
zimperium.companyStats.japanOffice = { value: "東京（住所未確認）", detail: "東京勤務のハイブリッド求人を確認。日本法人名と常設オフィス住所は未確認。", sourceId: "zimperium-japan-job" };
zimperium.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本市場と東京求人は確認したが、gBizINFOの事業所情報で対象法人と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-zimperium" };

const fireworksAi = buildDailyCompanyIntelligence({
  slug: "fireworks-ai", name: "Fireworks AI", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/fireworks/1fc5eb25-08ad-4c82-aaee-5b903b9ab0ea", officialUrl: "https://fireworks.ai/",
  customersUrl: "https://fireworks.ai/customers", financeUrl: "https://fireworks.ai/blog/series-d-announcement",
  problem: "企業が生成AIを試作品から本番へ移すと、モデルの速度、費用、品質、評価、学習、GPU運用が分断し、利用増加に合わせて安定して改善しにくい。汎用モデルだけでは企業固有のデータと業務へ最適化しにくい課題がある。",
  origin: "MetaでPyTorchを率いたLin Qiaoらが2022年に独立し、企業が汎用モデルを借り続けるのではなく、自社データと用途に合わせて学習・提供できるAI基盤を作った。",
  externalNeed: "AI機能が試作から顧客向け本番へ広がり、企業は速度・費用・品質を同時に測りながら、固有データ、権限、評価、モデル更新を継続運用する必要がある。",
  solution: "公開モデルの高速推論、専用配備、微調整、強化学習、評価を統合し、企業固有のデータと業務に合わせたAIを本番提供する。",
  selection: "OpenAI、Anthropic、AWS、Google Cloud、Together AI、Baseten、内製GPU基盤と比べ、モデル選択、推論速度、学習との循環、費用、企業データの制御で比較する。",
  growth: "2026年7月に15.05億ドルのSeries D、評価額175億ドル、年率換算売上10億ドル超、1日40兆トークン超を会社公式が公表。シンガポールで技術職3件を募集する。",
  role: "SingaporeのAI Field Engineerが顧客のコードと基盤へ入り、実証、評価、微調整、本番配備、経営層との設計合意、製品改善まで担う。日本勤務・日本担当の求人ではない。",
  organization: "シンガポールでAI Field Engineer、Applied Machine Learning Engineer、Cloud Infrastructure Engineerを募集。日本法人、国内拠点、日本在住人員は未確認。",
  career: "正式進出後は、生成AIの評価・学習・推論と顧客の本番業務を結び、技術導入と事業成果を同時に作る経験になり得る。",
  globalHeadcount: "201〜500人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本在住求人・国内顧客名は未確認。Singaporeの技術求人3件", japanSince: "未進出",
  customer: { company: "Notion", outcome: "モデルの微調整で応答遅延を約2秒から350ミリ秒へ短縮し、1億人超の利用者へAI機能を広げたと紹介。" },
  facts: [["創業","2022年","PyTorch出身チームが創業。"],["資金調達","15.05億ドル","2026年Series D。"],["評価額","175億ドル","2026年会社公式。"],["年率換算売上","10億ドル超","2026年会社公式。"],["処理量","1日40兆トークン超","2026年会社公式。"],["日本求人","0件","Singaporeの技術求人3件。"]],
  products: [["Fireworks Inference","公開・専用モデルを低遅延で本番提供。","https://fireworks.ai/"],["Fireworks Training","微調整と強化学習で企業用途へモデルを合わせる。","https://fireworks.ai/"],["Evaluations and Deployments","品質、速度、費用を測り専用配備へつなぐ。","https://fireworks.ai/enterprise"]],
  competitors: "OpenAI、Anthropic、AWS、Google Cloud、Together AI、Baseten、内製GPU基盤",
  leader: ["Lin Qiao","Co-Founder and Chief Executive Officer","https://fireworks.ai/team"], local: ["未採用","日本市場責任者","https://fireworks.ai/careers"],
  work: ["未確認","日本国内求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中低。Singaporeの技術導入・基盤人員と大規模な成長資金はあるが、日本専任体制、国内顧客、販売・支援条件は未確認。",
    signal: "SingaporeでAI Field Engineer、Applied Machine Learning Engineer、Cloud Infrastructure Engineerを募集し、APACで顧客導入と計算基盤を作る体制を整える。",
    hurdle: "日本法人、国内拠点、日本語の販売・契約・セキュリティ支援、国内顧客事例、日本向けデータ所在・請求条件が未整備。",
    conditions: ["Singaporeから日本企業の有償需要と導入用途を確認する。","日本語の契約、セキュリティ、技術支援、請求体制を整える。","日本在住の営業・技術導入人員または国内パートナーを置く。","国内顧客の本番事例とデータ所在・モデル利用条件を明確にする。"],
    watches: ["日本在住求人","日本法人・国内拠点","日本企業の社名入り事例","日本語サイト・契約・支援情報","国内クラウド・販売パートナー","日本向けデータ所在・請求"],
  },
}, checkedAt);
fireworksAi.sources.push(
  { id: "fireworks-company", label: "Fireworks公式", url: "https://fireworks.ai/", kind: "企業公式", scope: "製品・用途・提供形態", checkedAt },
  { id: "fireworks-team", label: "Fireworks founding team", url: "https://fireworks.ai/team", kind: "企業公式", scope: "創業者・経歴", checkedAt },
  { id: "fireworks-series-d", label: "Fireworks Series D", url: "https://fireworks.ai/blog/series-d-announcement", kind: "企業公式", scope: "資金調達・評価額・売上・処理量", checkedAt },
  { id: "fireworks-customers", label: "Fireworks customer stories", url: "https://fireworks.ai/customers", kind: "企業公式", scope: "顧客・導入成果", checkedAt },
  { id: "fireworks-careers", label: "Fireworks Careers", url: "https://fireworks.ai/careers", kind: "企業公式", scope: "Singapore採用・日本求人未確認", checkedAt },
  { id: "fireworks-field-engineer", label: "AI Field Engineer, Singapore", url: "https://jobs.ashbyhq.com/fireworks/1fc5eb25-08ad-4c82-aaee-5b903b9ab0ea", kind: "企業公式", scope: "APAC技術導入採用", checkedAt },
  { id: "fireworks-applied-ml", label: "Applied Machine Learning Engineer, Singapore", url: "https://jobs.ashbyhq.com/fireworks/044b1823-7d0d-4da2-b265-676f2a5a50c3", kind: "企業公式", scope: "APAC技術採用", checkedAt },
  { id: "fireworks-cloud", label: "Cloud Infrastructure, Singapore", url: "https://jobs.ashbyhq.com/fireworks/93faf385-9322-4172-8ef2-42a9a6c889e6", kind: "企業公式", scope: "APAC基盤採用", checkedAt },
  { id: "gbiz-headcount-fireworks", label: "gBizINFO Fireworks AI法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
fireworksAi.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOの事業所情報で日本法人・国内事業所と被保険者数を特定できず、日本法人での想定従業員数は算定しない。Singapore採用だけで0人とは扱わない。", sourceId: "gbiz-headcount-fireworks" };
if (fireworksAi.marketStatus.japanGrowth?.entryAssessment) {
  fireworksAi.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "Singapore技術導入採用", body: "顧客の実証から本番配備まで担うAI Field EngineerをSingaporeで募集。", sourceIds: ["fireworks-field-engineer"] },
    { title: "APACの技術基盤", body: "Applied MLとCloud Infrastructureの技術者もSingaporeで募集し、導入と基盤を同時に増強。", sourceIds: ["fireworks-applied-ml", "fireworks-cloud"] },
    { title: "大規模な成長資金", body: "2026年Series Dで15.05億ドルを調達し、計算基盤と世界展開への投資を掲げる。", sourceIds: ["fireworks-series-d"] },
  ];
}

export function applyDaily20261015Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const closures: Array<[string, string, string, string]> = [
    ["coupa", "Customer Solution Partner Services Sales求人終了", "coupa-csp-services-sales-closure-20261015", "https://jobs.lever.co/coupa/"],
    ["cursor", "Forward Deployed Engineer, Japan求人終了", "cursor-fde-japan-closure-20261015", "https://cursor.com/careers"],
    ["workato", "Partner Sales Manager求人終了", "workato-partner-sales-closure-20261015", "https://www.workato.com/careers"],
    ["coupa", "Alliances Director求人終了", "coupa-alliances-director-closure-20261015", "https://jobs.lever.co/coupa/"],
  ];
  for (const [slug, label, sourceId, url] of closures) {
    const intelligence = intelligenceBySlug[slug];
    if (!intelligence) continue;
    if (!intelligence.sources.some((source) => source.id === sourceId)) {
      intelligence.sources.push({ id: sourceId, label, url, kind: "企業公式", scope: "旧公式URLの404と現行採用一覧を確認", checkedAt });
    }
    intelligence.researchedAt = checkedAt;
    intelligence.marketStatus.milestones = [
      ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
      { year: "2026.10.15", label, detail: "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", sourceId },
    ];
  }
}

export const daily20261015IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  tenable,
  zimperium,
  "fireworks-ai": fireworksAi,
};
