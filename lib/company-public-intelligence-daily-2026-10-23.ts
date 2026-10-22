import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-23";

const kraken = buildDailyCompanyIntelligence({
  slug: "kraken-technologies", name: "Kraken Technologies", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/krakentech/6536943b-ed50-407d-9ece-c3c3d8195f90", officialUrl: "https://www.kraken.tech/ja/about",
  customersUrl: "https://kraken.tech/case-studies/tokyo-gas", financeUrl: "https://www.kraken.tech/press-releases/octopus-energy-group-to-spin-off-kraken",
  problem: "公益事業者の顧客管理、請求、メーターデータ、現場作業、分散型エネルギー資源が古い個別システムへ分かれると、新料金の投入、顧客対応、移行、系統運用に長い時間と高い費用がかかる。",
  origin: "2016年、Octopus Energyの創業時に、既存の公益事業向け基幹システムでは料金・顧客体験を速く変えられない課題から社内基盤として生まれ、2025年に独立を発表した。",
  externalNeed: "再生可能エネルギー、蓄電池、EV、変動料金が増えるほど、公益事業者は請求だけでなく、顧客接点、設備、需給、規制対応を同じデータと権限で即時に動かす必要がある。",
  solution: "Kraken Customer、Field、Flex、Gridを通じて、顧客・請求・計量・通信・現場・分散型資産を一つのクラウド業務基盤へつなぎ、AIで対応と運用を支援する。",
  selection: "SAP・Oracle等の公益事業向け基幹、CRM・請求の個別製品、内製基盤と比べ、移行実績、料金投入速度、顧客対応費、分散型資産制御、標準化と個別対応の境界を同じ業務成果で比較する。",
  growth: "会社公式は世界2,000人超、9,000万超の顧客アカウント、30カ国、40件超の移行、接続機器40万超を掲載。2025年の独立発表時に契約済み年次収益5億ドルを公表した。",
  role: "東京・日本向けの公式求人12件が、顧客変革、導入、Customer Success、データ、蓄電池・系統連携、開発、人事運用を横断する。",
  organization: "Kraken Technologies Japan合同会社と東京都港区の拠点を公式・gBizINFOで確認。gBizINFOの事業所被保険者数は158人で、役員・制度対象外・業務委託等を含む総在籍人数とは一致しない。",
  career: "公益事業者の大規模な基幹移行を、顧客体験、業務設計、データ、製品開発、エネルギー資産運用まで横断して成果へ変える経験。",
  globalHeadcount: "2,000人超（会社公式）", japanPresence: "Kraken Technologies Japan合同会社・東京。gBizINFO事業所被保険者数158人", japanSince: "2022年",
  customer: { company: "東京ガス", outcome: "共同事業の設立から6カ月で時間帯別料金を開始し、全国10送配電事業者へ接続、約2万顧客をKrakenへ移行したと会社公式で紹介。" },
  facts: [["創業","2016年","Octopus Energyの業務基盤として創業。"],["顧客アカウント","9,000万超","会社公式。"],["従業員","2,000人超","会社公式。"],["契約済み年次収益","5億ドル","2025年の独立発表時点。認識済み売上・利益ではない。"],["国内事業所被保険者","158人","gBizINFO掲載。総在籍人数ではない。"],["日本求人","12件","公式Ashby APIで東京・日本の掲載を確認。"]],
  products: [["Kraken Customer","顧客管理、請求、計量、CRM、通信を一つの業務基盤で運用。","https://kraken.tech/what-is-kraken/kraken-customer"],["Kraken Field","現場作業、経路、技能、設備導入を計画・実行。","https://kraken.tech/what-is-kraken/kraken-field"],["Kraken Flex","EV、蓄電池、ヒートポンプ等の分散型資産を集約・最適化。","https://kraken.tech/what-is-kraken/kraken-flex"]],
  competitors: "SAP Utilities、Oracle Utilities、Salesforce Energy & Utilities、公益事業者の内製・既存基幹",
  leader: ["Amir Orad","Chief Executive Officer","https://www.kraken.tech/about"], local: ["Mark Soper","General Manager APAC","https://www.kraken.tech/about"],
  work: ["ハイブリッド","東京ハイブリッド／一部日本国内リモート","職種ごとに異なり固定日数は未確認","開発職は日本国内リモート可。その他は東京ハイブリッド","顧客訪問・出張・現地対応の有無は職種ごとに異なる。求人別に確認"],
}, checkedAt);
const krakenHiringMilestone = kraken.marketStatus.milestones.find((milestone) => milestone.label === "日本採用を確認");
if (krakenHiringMilestone) krakenHiringMilestone.year = "2026.10";
kraken.sources.push(
  { id: "kraken-about", label: "Kraken会社情報", url: "https://www.kraken.tech/about", kind: "企業公式", scope: "創業・規模・顧客アカウント・製品・経営陣", checkedAt },
  { id: "kraken-japan-about", label: "Kraken日本会社情報", url: "https://www.kraken.tech/ja/about", kind: "企業公式", scope: "日本法人名・日本語会社情報", checkedAt },
  { id: "kraken-tokyo-gas", label: "Kraken × 東京ガス", url: "https://kraken.tech/case-studies/tokyo-gas", kind: "企業公式", scope: "国内顧客・導入目的・移行成果", checkedAt },
  { id: "kraken-origin", label: "Kraken × Origin", url: "https://www.kraken.tech/case-studies/origin", kind: "企業公式", scope: "移行・業務費用・顧客成果", checkedAt },
  { id: "kraken-spin-off", label: "Kraken独立発表", url: "https://www.kraken.tech/press-releases/octopus-energy-group-to-spin-off-kraken", kind: "企業公式", scope: "独立・契約済み年次収益・規模", checkedAt },
  { id: "kraken-jobs", label: "Kraken Careers", url: "https://jobs.ashbyhq.com/krakentech", kind: "企業公式", scope: "現行日本求人12件・勤務地・勤務形態・責任", checkedAt },
  { id: "gbiz-headcount-kraken-technologies", label: "gBizINFO Kraken Technologies Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010003036696", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt },
);
kraken.companyStats.japanOffice = { value: "東京都港区六本木", detail: "会社公式とgBizINFOで日本法人・東京拠点を確認。", sourceId: "gbiz-headcount-kraken-technologies" };
kraken.companyStats.japanHeadcount = { value: "158人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-kraken-technologies" };
if (kraken.salesMarketOutlook) kraken.salesMarketOutlook.cases = [{ company: "東京ガス", need: "時間帯別料金の投入、全国の送配電網への接続、顧客移行を短期間で進める共通基盤が必要だった。共同事業と顧客側運用を含む成果で、Kraken単独因果とは扱わない。", sourceId: "kraken-tokyo-gas" }];

const ciq = buildDailyCompanyIntelligence({
  slug: "ciq", name: "CIQ", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/ciq/jobs/5414772008", officialUrl: "https://ciq.com/company/about",
  customersUrl: "https://ciq.com/partners/customers", financeUrl: "https://ciq.com/company/about",
  problem: "企業や研究機関がCentOS後継、AI、HPCを別々のLinux、コンテナ、クラスタ管理で運用すると、長期保守、脆弱性対応、GPU効率、再現性、監査の責任が分断する。",
  origin: "CentOS、Warewulf、Singularityの開発者Gregory Kurtzerが2020年に創業し、CentOSの方針変更後にコミュニティとRocky Linuxを立ち上げ、企業向けの商用支援とAI/HPC基盤へ広げた。",
  externalNeed: "AI計算と高性能計算が重要になるほど、企業はGPUだけでなく、OS、カーネル、コンテナ、クラスタ、長期保守、脆弱性修正を一つの責任範囲で再現可能にする必要がある。",
  solution: "Rocky Linuxを基盤に、RLC Pro、Fuzzball、Warewulf Pro、Apptainer Pro等で企業Linux、クラスタ配備、AI/HPC実行、長期支援をカーネルから統合する。",
  selection: "Red Hat Enterprise Linux、SUSE、Ubuntu、クラウド標準AI/HPC、内製オープンソース運用と比べ、互換性、修正速度、長期支援、GPU・HPC運用、コミュニティ統治、総運用工数で比較する。",
  growth: "2020年創業、2022年にSeries A 2,600万ドル。会社公式はRocky Linuxの稼働環境275万超、世界最大企業の90%が同社の基盤ソフトウェアを利用すると説明するが、有償顧客数や現行従業員数は非公開。",
  role: "日本在住を必須とするSr. Linux Solutions Architectが、営業と並走して技術探索、設計、実証、導入、販売パートナー支援を担う。",
  organization: "本社は米国ネバダ州リノ、追加拠点はUAEアブダビ。日本法人、国内拠点、雇用主体、日本の正確なチーム人数は未確認。",
  career: "Linux、コンテナ、AI/HPCの深い技術を、日本の顧客・販売パートナーの評価、設計、実証、本番定着へ翻訳する初期市場づくりの経験。",
  globalHeadcount: "51〜200人規模（LinkedIn公開レンジ。現行の公式絶対数は非公開）", japanPresence: "日本法人・国内拠点は未確認。日本在住必須の技術営業求人1件を確認", japanSince: "未進出",
  customer: { company: "トヨタシステムズ", outcome: "会社公式の顧客一覧でRocky Linux LTS利用企業として掲載。導入範囲、期間、定量成果は今回確認できず。" },
  facts: [["創業","2020年","米国ネバダ州リノで創業。"],["Rocky Linux稼働環境","275万超","EPEL telemetryに基づく会社公式値。"],["資金調達","Series A 2,600万ドル","2022年。売上・利益ではない。"],["製品","9製品","LinuxからAI/HPCオーケストレーションまで。"],["日本法人","未確認","国内法人・拠点・雇用主体を確認できず。"],["日本求人","1件","Sr. Linux Solutions Architect。"]],
  products: [["RLC Pro","Rocky Linuxへ長期支援、直接修正、企業向け保守を提供。","https://ciq.com/products/rlc-pro"],["Fuzzball","AI・HPCの処理を複数クラウド・計算環境で統合実行。","https://ciq.com/products/fuzzball"],["Warewulf Pro","大規模なベアメタル・クラスタの配備と管理を標準化。","https://ciq.com/products/warewulf-pro"]],
  competitors: "Red Hat Enterprise Linux、SUSE、Ubuntu、クラウド各社のAI・HPC基盤、内製オープンソース運用",
  leader: ["Gregory Kurtzer","Founder and Chief Executive Officer","https://ciq.com/company/leadership"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/ciq"],
  work: ["フルリモート","日本国内リモート","対象求人は日本在住を必須","公式求人はremote-firstで多くの職種に出張不要と記載","雇用主体、顧客訪問、勤務時間帯、販売目標への関与を選考で確認"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本在住必須の技術営業職と国内顧客掲載はあるが、日本法人・拠点・雇用主体・商業責任者は未確認。",
    signal: "日本在住必須のSr. Linux Solutions Architectを公式募集し、日本の顧客・販売パートナーの技術評価、実証、導入を担当すると明記。",
    hurdle: "日本法人、国内拠点、雇用主体、契約・請求主体、日本語サポート、日本営業責任者、国内有償顧客数を確認できない。",
    conditions: ["日本の顧客・販売パートナーで有償案件と更新・拡大を再現する。", "日本語の契約、請求、技術支援、障害連絡の責任主体を明確にする。", "技術営業だけでなく商業責任者と継続支援体制を置ける採算を作る。"],
    watches: ["日本法人・国内拠点", "雇用・契約・請求主体", "Japan営業求人", "日本語サポート・安全資料", "国内顧客の定量事例"],
  },
}, checkedAt);
const ciqHiringMilestone = ciq.marketStatus.milestones.find((milestone) => milestone.label === "日本採用を確認");
if (ciqHiringMilestone) ciqHiringMilestone.year = "2026.10";
ciq.sources.push(
  { id: "ciq-about", label: "CIQ会社情報", url: "https://ciq.com/company/about", kind: "企業公式", scope: "創業・製品・規模・資金調達・拠点", checkedAt },
  { id: "ciq-customers", label: "CIQ顧客一覧", url: "https://ciq.com/partners/customers", kind: "企業公式", scope: "顧客・国内顧客掲載", checkedAt },
  { id: "ciq-japan-job", label: "Sr. Linux Solutions Architect", url: "https://job-boards.greenhouse.io/ciq/jobs/5414772008", kind: "企業公式", scope: "現行求人・日本在住要件・責任・勤務形態", checkedAt },
  { id: "ciq-cases", label: "CIQ導入事例", url: "https://ciq.com/customer-stories", kind: "企業公式", scope: "導入目的・定量成果・用途", checkedAt },
  { id: "ciq-linkedin", label: "CIQ LinkedIn企業ページ", url: "https://www.linkedin.com/company/ctrliq", kind: "外部集計", scope: "グローバル従業員規模レンジ", checkedAt },
  { id: "gbiz-headcount-ciq", label: "gBizINFO CIQ法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
ciq.companyStats.japanOffice = { value: "未確認", detail: "会社公式はリノとアブダビを掲載。日本法人・国内拠点を確認できない。", sourceId: "ciq-about" };
ciq.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "CIQと結びつく国内法人・事業所をgBizINFOで特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-ciq" };
if (ciq.marketStatus.japanGrowth) {
  ciq.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。日本在住必須求人1件を確認";
  ciq.marketStatus.japanGrowth.narrative = "日本在住必須のSr. Linux Solutions Architectへ応募可能だが、雇用主体、国内拠点、契約・請求・支援体制は公開情報で確認できない。";
}
if (ciq.salesMarketOutlook) ciq.salesMarketOutlook.cases = [{ company: "トヨタシステムズ", need: "Rocky Linux LTSの利用企業として会社公式一覧へ掲載されるが、導入範囲、選定理由、定量成果を確認できず、国内での再現性は別途検証が必要。", sourceId: "ciq-customers" }];

export const daily20261023IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "kraken-technologies": kraken,
  ciq,
};
