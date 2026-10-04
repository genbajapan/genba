import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-04";

const magnetForensics = buildDailyCompanyIntelligence({
  slug: "magnet-forensics", name: "Magnet Forensics", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/magnetforensics/dd9fcd02-0997-48a4-829f-e4a3eeccfa85", officialUrl: "https://www.magnetforensics.com/our-story/",
  customersUrl: "https://www.magnetforensics.com/customer-stories/", financeUrl: "https://www.magnetforensics.com/why-magnet-forensics/",
  problem: "犯罪・不正・サイバー事故の証拠がスマートフォン、PC、クラウド、映像、車載機器へ分散し、取得、解析、共有が遅れると、捜査・調査の滞留と証拠の見落としが増える。",
  origin: "警察官・デジタル鑑識官だったJad Salibaが、所属部署でデジタル証拠を回収するソフトウェアを作った経験から、2011年にMagnet Forensicsを創業した。",
  externalNeed: "端末とクラウドのデータ量、暗号化、生成AIによる合成情報、法的手続きが増えるほど、捜査機関と企業は証拠の完全性、権限、人権、監査、専門家の負担を同時に管理する必要がある。",
  solution: "端末・クラウド・車載・映像から証拠を取得し、解析、事案管理、共同レビュー、自動化までをデジタル捜査の流れとしてつなぐ。",
  selection: "対応端末・データ源だけでなく、証拠の完全性、解析速度、事案横断の共同作業、監査、人権・輸出管理、既存鑑識基盤との接続で比較する。",
  growth: "会社公式は100カ国超、6,000超の機関・企業、Fortune 100の70%超を掲載。日本を主市場とする北アジア企業営業を募集し、日本のトレーニングパートナーも案内している。",
  role: "Enterprise Account Executive – North Asiaが日本を主市場にCISO、SOC、インシデント対応部門へ新規・拡大商談を作り、技術評価、商務、販売パートナーを動かす。",
  organization: "公式拠点はカナダ、米国、シンガポール。日本のトレーニングパートナーは確認したが、日本法人、国内オフィス、雇用主体、正確な国内在籍人数は未確認。",
  career: "デジタル鑑識、企業調査、インシデント対応を、技術評価、法務・調達、経営課題へ翻訳し、日本と北アジアの市場を作る企業営業経験。",
  globalHeadcount: "公式の現員数は未確認。カナダ・米国・シンガポールの拠点と世界各地の従業員を掲載", japanPresence: "日本法人・国内オフィスは未確認。日本を主市場とする現行求人と国内トレーニングパートナーを確認", japanSince: "未進出",
  customer: { company: "Fairfax County Police Department", outcome: "80台超の端末滞留を解消し、証拠の返却時間を数カ月から数日へ短縮したと公式事例で紹介。会社作成事例であり独立監査済み成果ではない。" },
  facts: [["創業","2011年","元警察官・デジタル鑑識官の現場課題から創業。"],["顧客組織","6,000超","会社公式。"],["FY2022売上","$98.9M(約155億円)","買収・非公開化前の2022年通期売上。現在の売上規模ではない。"],["展開国","100カ国超","会社公式。"],["Fortune 100","70%超","会社公式。"],["日本体制","未確認","法人・国内オフィス・雇用主体は未確認。"],["日本求人","1件","Enterprise Account Executive – North Asia。"]],
  products: [["Magnet Axiom","モバイル、PC、クラウド、車載等のデジタル証拠を取得・解析する。","https://www.magnetforensics.com/products/magnet-axiom/"],["Magnet One","取得、解析、事案管理、共有をクラウド型の流れでつなぐ。","https://www.magnetforensics.com/products/"],["Magnet Axiom Cyber","企業の端末から遠隔で証拠を収集し、事故対応と内部調査を支援する。","https://www.magnetforensics.com/products/magnet-axiom-cyber/"]],
  competitors: "Cellebrite、Exterro FTK、OpenText EnCase、Nuix、各機関・企業の個別鑑識ツール",
  leader: ["Adam Belsher","Chief Executive Officer","https://www.magnetforensics.com/our-team/"], local: ["未確認","North Asia Enterprise Sales","https://jobs.lever.co/magnetforensics/dd9fcd02-0997-48a4-829f-e4a3eeccfa85"],
  work: ["フルリモート","東京、日本、名古屋、大阪、横浜","常設オフィスへの出社条件は未確認","求人はリモートと明記","日本を主市場に北アジアへ30〜50%の出張を想定"],
  preEntry: {
    verdict: "進出可能性は高め。日本を主市場とする企業営業と国内トレーニングパートナーを確認した一方、日本法人、国内オフィス、雇用主体、国内顧客名は未確認。",
    signal: "日本を主市場とし、東京・日本・名古屋・大阪・横浜を勤務地候補に含むEnterprise Account Executive – North Asiaを募集している。",
    hurdle: "日本法人、国内オフィス、雇用・契約主体、公共機関・企業の公開事例、日本語の技術支援とデータ取扱条件を確認できない。",
    conditions: ["日本での雇用、契約、税務、個人情報・証拠データ取扱を担う主体を明確にする。", "国内の公共・企業顧客と販売・トレーニングパートナーから再現可能な需要を確認する。", "日本語の技術評価、導入、障害対応、研修、法務・人権審査を継続提供する。", "長い調達・技術評価を支える営業技術・顧客成功体制を整える。"],
    watches: ["日本法人・国内オフィス", "国内顧客事例", "日本語の技術・導入支援", "追加の営業技術・顧客成功求人", "雇用・契約・データ取扱主体"],
  },
}, checkedAt);

magnetForensics.sources.push(
  { id: "magnet-founder", label: "Magnet Forensics leadership", url: "https://www.magnetforensics.com/our-team/", kind: "企業公式", scope: "創業者・創業背景", checkedAt },
  { id: "magnet-training-japan", label: "Magnet Forensics training partners", url: "https://www.magnetforensics.com/training-partners/", kind: "企業公式", scope: "日本のトレーニングパートナー", checkedAt },
  { id: "magnet-fy2022-results", label: "Magnet Forensics FY2022 results", url: "https://www.magnetforensics.com/news/magnet-forensics-announces-2022-fourth-quarter-and-year-end-results/", kind: "企業公式", scope: "買収前の2022年通期売上", checkedAt },
  { id: "gbiz-headcount-magnet-forensics", label: "gBizINFO Magnet Forensics法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
magnetForensics.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOの法人プロフィールと事業所情報を検索したが、ブランドと結びつく国内法人を特定できない。健康保険・厚生年金の被保険者数ではなく、日本在住者、EOR雇用者、制度対象外の従業者を含む人数とも断定しない。", sourceId: "gbiz-headcount-magnet-forensics" };

export const magnetForensicsIntelligence20261004: Record<string, CompanyPublicIntelligence> = { "magnet-forensics": magnetForensics };
