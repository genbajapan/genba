import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  applyStandard,
  buildCompactPatch,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) {
    intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
  }
}

function patchDialpad(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2016", "日本提供開始", "2016年12月、SoftBankとの提携で日本市場へ提供開始。日本法人設立日ではない。", "rollout-dialpad-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "dialpad", leaderName: "Craig Walker", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.dialpad.com/leadership/", localName: "非公開", localLabel: "Japan Country Manager", localUrl: "https://job-boards.greenhouse.io/dialpad",
    companyId: "rollout-dialpad-company", jobId: "rollout-dialpad-jobs-20260817", customersId: "rollout-dialpad-proto", externalId: "rollout-dialpad-mhlw-customer-harassment", financeId: "rollout-dialpad-arr-2026",
    targets: ["情報システム・CIO・電話基盤", "顧客対応・Contact Center・Support", "営業・Revenue Operations", "セキュリティ・法務・Privacy", "人事・従業員保護"], competitors: "RingCentral、Five9、Microsoft Teams・Teams Phone、Zoom Phone、legacy PBX、既存contact center、point conversation intelligence・recording",
    feature: "Dialpad Connect、Support、SellとAI Agentsを、phone、meeting、contact center、sales coaching、日本語文字起こし・recap・analyticsで統合する。", advantage: "UCaaSとCCaaS、会話data、AI、coachingを同じplatformで扱い、SoftBank channelと国内3,000社の利用基盤を持つ。", benefit: "after-call入力、応答・解決、QA、coaching、seller ramp、BCP、telephony運用を改善し、顧客体験と従業員保護の証跡を作れる可能性がある。", evidence: "Proto Solutionは1日で導入し、USENは初期1,000 usersを約2週間で可視化。日本語AI EAPは匿名60社超でlog作成時間50%以上削減と会社発表。",
    marketVerdict: "結論：cloud telephony、contact center AI、2026年10月のカスタマーハラスメント防止措置が追い風。ARR 3.5億米ドル超（約557.8億円）・顧客4万社超だが、売上・利益・FCFと日本売上は非公開。東京の対象2求人を確認。", marketParagraphs: ["電話・meeting・contact center・CRMが分断すると、after-call入力、sample QA、coaching、BCP、従業員保護の事実確認が手作業になる。", "今後3〜5年は日本語AIとomnichannel統合が追い風だが、Teams・Zoom等のbundle、音声品質、番号移行、録音・privacy、AI精度、uptimeが選定条件になる。", "Genba分析：一つのteamで日本語精度、after-call time、QA coverage、resolution、coaching、uptime、番号移行、3年TCOを既存stackと比較する。"],
    cultureHeadline: "公式求人はScrappy、Curious、Optimistic、Persistent、Empatheticと全社員のAI活用を掲げる。AEの勤務形態は非公開、SEは東京officeとのHybrid・出張最大50%。", classification: "ハイブリッド", displayLabel: "東京・職種別", officeDays: "明記なし", remoteOnly: "完全在宅とは確認できない", flexibility: "SEはHybrid・出張最大50%。AEは勤務形態を補完しない",
    goodFor: ["voiceとAIを業務KPIへ変えたい", "UCaaS・CCaaSを横断したい", "Sales・Support・ITを一つのcaseへ束ねたい"], cautionFor: ["監査済み財務の透明性を必須にする", "録音・AI monitoringの法務確認を避けたい", "固定された勤務形態を事前に必要とする"],
    unresolved: [["財務の質", "ARRと顧客規模は会社発表。", "recognized revenue、growth、gross margin、profit、FCF、retentionは？"], ["日本体制", "東京office、国内3,000社、SoftBank提携を確認。", "日本法人設立日、Country Manager氏名、人数、売上、direct・channel比率は？"], ["AI・録音governance", "日本語AIと録音・analyticsを提供。", "告知・同意、保存、access、学習利用、human review、誤認識率は？"], ["Commercial条件", "対象2求人の金額報酬は非公開。", "pay mix、quota、ramp、attainment、担当社数、new・expansion・product creditは？"], ["Production quality", "国内の迅速導入例はある。", "番号移行、音声品質、uptime、support SLA、BCP、3年TCOは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・収益性", value: "非公開", detail: "監査済み売上、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-dialpad-company"] },
    { label: "ARR", value: "3.5億米ドル超（約557.8億円）", detail: "2026年4月時点のcompany-reported run-rate。売上高ではない。", sourceIds: ["rollout-dialpad-arr-2026", "rollout-b09-boj-usd-20260814"] },
    { label: "事業固有規模", value: "顧客4万社超／AI Recaps累計約10億", detail: "2026年4月の会社発表。国内3,000社とは尺度・時点が異なる。", sourceIds: ["rollout-dialpad-arr-2026", "rollout-dialpad-customers-jp"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,000人超", detail: "現行公式Aboutの表示。厳密値・基準日は非公開。", sourceId: "rollout-dialpad-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "4件の東京求人は現在人数を示さない。", sourceId: "rollout-dialpad-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都渋谷区渋谷2-9-8 CIRCLES渋谷6階", detail: "現行公式Contact。", sourceId: "rollout-dialpad-contact" };
  intelligence.companyStats.japanSince = { value: "2016年12月", detail: "SoftBankとの提携による提供開始。日本法人設立日は確認不能。", sourceId: "rollout-dialpad-japan-launch" };
  intelligence.customerProof = [
    { company: "Proto Solution", products: "Dialpad", outcome: "2018年に1日で導入し、120人・39業務のcall centerで36人が利用。約半数はremote。", implication: "vendor-selected事例。改善率・cost比較は非公開。", sourceId: "rollout-dialpad-proto" },
    { company: "USEN", products: "Dialpad", outcome: "初期1,000 usersを導入し、約2週間で運用を可視化。", implication: "端末・保守cost回避は定性で金額非公開。", sourceId: "rollout-dialpad-usen" },
  ];
  intelligence.roleLens = { salesMotion: "Mid-Market AEがfull-cycleを持ち、Sales Engineerがtechnical discovery・solution・validationを支える。Support・office職を対象求人へ含めない。", compensation: "AEはcompetitive salaryの定性記載、SEも金額非公開。給与・OTE・pay mixは確認不能。", quota: "quota、担当社数、ACV、cycle、attainment、new・expansion・product creditは非公開。", collaboration: "Sales、SE、Support、Product・AI、SoftBank・partner、顧客IT・Contact Center・Sales・Securityが連携する。" };
  intelligence.salesAppeal = { intro: "AI communicationsを日本の業務成果へ変える営業・技術提案経験を整理した。", points: [
    { title: "会話dataを経営KPIへ変える", detail: "AEとSales Engineerがphone・contact center・sales coachingを、after-call time、QA coverage、resolution、seller rampで定量化する。", sourceIds: ["rollout-dialpad-jobs-20260817", "rollout-dialpad-proto"] },
    { title: "営業とtechnical validationを横断する", detail: "Mid-Market AEのfull-cycleと、SEのsolution design・最大50% travelを同時採用している。", sourceIds: ["rollout-dialpad-jobs-20260817"] },
    { title: "日本語AIと従業員保護を扱う", detail: "録音・文字起こし・recapの価値と、privacy・カスハラ対応のgovernanceを一つの提案で扱う。", sourceIds: ["rollout-dialpad-mhlw-customer-harassment", "rollout-dialpad-company"] },
  ] };
  addSources(intelligence, [
    { id: "rollout-dialpad-company", label: "Dialpad company information", url: "https://www.dialpad.com/llm-info/", kind: "企業公式", scope: "創業・会社概要", checkedAt: researchedAt },
    { id: "rollout-dialpad-about", label: "Dialpad About", url: "https://www.dialpad.com/au/about-us/", kind: "企業公式", scope: "従業員1,000人超・世界12拠点", checkedAt: researchedAt },
    { id: "rollout-dialpad-jobs-20260817", label: "Dialpad現行日本求人", url: "https://job-boards.greenhouse.io/dialpad", kind: "企業公式", scope: "東京4求人・対象2求人", checkedAt: researchedAt },
    { id: "rollout-dialpad-arr-2026", label: "Dialpad 2026 scale", url: "https://www.dialpad.com/au/press/dialpad-named-a-leader-in-the-aragon-research-globe/", kind: "企業公式", scope: "ARR・顧客・AI Recaps", checkedAt: researchedAt },
    { id: "rollout-dialpad-contact", label: "Dialpad Contact", url: "https://www.dialpad.com/contact-us/", kind: "企業公式", scope: "本社・東京office", checkedAt: researchedAt },
    { id: "rollout-dialpad-japan-launch", label: "Dialpad・SoftBank日本提供開始", url: "https://www.dialpad.com/jp/press/softbank-dialpad-first-pure-cloud-business-communication-japan/", kind: "企業公式", scope: "日本提供開始", checkedAt: researchedAt },
    { id: "rollout-dialpad-customers-jp", label: "Dialpad日本顧客", url: "https://www.dialpad.com/jp/customers/", kind: "企業公式", scope: "国内3,000社", checkedAt: researchedAt },
    { id: "rollout-dialpad-proto", label: "Dialpad・Proto Solution事例", url: "https://www.dialpad.com/jp/customers/proto-solution/", kind: "企業公式", scope: "国内導入・規模", checkedAt: researchedAt },
    { id: "rollout-dialpad-usen", label: "Dialpad・USEN事例", url: "https://www.dialpad.com/jp/customers/usen/", kind: "企業公式", scope: "国内1,000 users・導入", checkedAt: researchedAt },
    { id: "rollout-dialpad-mhlw-customer-harassment", label: "厚生労働省 カスタマーハラスメント対策", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/seisaku06/", kind: "公的機関", scope: "2026年10月の事業主措置", checkedAt: researchedAt },
    { id: "rollout-b09-boj-usd-20260814", label: "日本銀行 外国為替市況 2026年8月14日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=159.38円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchDocusign(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2015", "日本法人設立・東京office開設", "Docusign Japan K.K.を設立し東京officeを開設。", "rollout-docusign-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "docusign", leaderName: "Allan Thygesen", leaderLabel: "CEO", leaderUrl: "https://www.docusign.com/ja-jp/blog/about-docusign", localName: "Hiroki Yoshida", localLabel: "President, Docusign Japan", localUrl: "https://www.docusign.com/ja-jp/blog/docusign-japan-new-countrymanager-hirokiyoshida",
    companyId: "rollout-docusign-company", jobId: "rollout-docusign-jobs-20260817", customersId: "rollout-docusign-jal", externalId: "rollout-docusign-digital-agency-sign", financeId: "rollout-docusign-q1fy27",
    targets: ["法務・契約・Compliance", "営業・Revenue Operations", "調達・財務・Operations", "情報システム・Security・Identity", "人事・People Operations"], competitors: "Adobe Acrobat Sign、global software suiteのbasic e-signature、地域・業界specialist、CLM・contract analytics、LLM・data platform、enterprise suite、paper・manual・内製",
    feature: "IAM、eSignature、CLM、Iris AI、Workflow Builder、Agreement Manager、Identify、Workspaces、APIと1,100超のpartner integrationを提供する。", advantage: "10億超users・180万超顧客のeSignature networkを、契約作成、review、approval、締結、repository、obligation、renewalへ広げる。", benefit: "契約lead time、担当工数、紙・印紙・郵送、検索、更新漏れ、audit trailを改善し、agreement dataをCRM・ERP・AIへ接続できる可能性がある。", evidence: "JALはprocurementを28日から14日、JERAは契約を1〜2週間から平均1.5日、Olympusは最大2カ月から1〜2日へ短縮したと公式事例で説明。",
    marketVerdict: "結論：電子署名の法的基盤と電子取引data保存により、署名からIAMへの拡張余地がある。FY2026売上32.20億米ドル（約5,131.2億円）、GAAP営業黒字・FCF黒字。東京の対象7求人を確認。", marketParagraphs: ["電子署名が定着しても、draft、review、approval、repository、obligation、renewalがemail、PDF、CRM・ERPへ分断し、delayとriskが残る。", "今後3〜5年はAI contract analyticsとidentityが追い風だが、basic e-sign bundle、国内・global competitor、migration、legal validity、data governance、change managementが選定条件になる。", "Genba分析：一つのagreement processでcycle、touch time、error、search、renewal、cost、adoptionをbaseline化し、eSignature単体とIAM拡張のincremental valueを比較する。"],
    cultureHeadline: "公式valuesはCustomer First、Deliver Results、Say What Matters、Own It Make It Better、One Team。日本の対象求人はHybrid・office最低週2日で、global一般benefitsを日本保証へ一般化しない。", classification: "ハイブリッド", displayLabel: "東京・office最低週2日", officeDays: "最低週2日", remoteOnly: "対象7求人はHybrid", flexibility: "role・teamで差があり、Partnerは出張最大25%、Enterprise AEは通常10%",
    goodFor: ["eSignatureからIAMへcategoryを広げたい", "Legal・Sales・Procurement・ITを横断したい", "partner ecosystemとenterprise workflowを扱いたい"], cautionFor: ["署名単機能だけを売りたい", "bundle競争を避けたい", "日本のquota・達成率開示を必須にする"],
    unresolved: [["IAM transition", "IAMはQ1 total ARRの12.6%。", "eSignature→IAM conversion、product mix、implementation、adoption、renewalは？"], ["日本組織", "新責任者・office・対象7求人を確認。", "Japan revenue、customer、headcount、segment・partner coverage、support capacityは？"], ["AI・data", "Iris AIとagreement dataを扱う。", "日本語精度、training use、retention、access、human review、auditは？"], ["Competition・TCO", "180万超顧客と1,100 integrations。", "Adobe・bundle・国内service比のunit cost、migration、support、3年TCOは？"], ["報酬・達成", "日本11求人は数値給与非公開。", "pay mix、quota、ramp、attainment、担当社数、new・expansion・partner creditは？"]],
  }));
  intelligence.facts = [
    { label: "Q1 FY2027売上・GAAP営業利益", value: "8.30億米ドル（約1,323.2億円）／1.11億米ドル（約177.4億円）", detail: "GAAP営業margin 13.4%、GAAP純利益0.78億米ドル（約124.6億円）、FCF 2.89億米ドル（約461.3億円）。", sourceIds: ["rollout-docusign-q1fy27", "rollout-b09-boj-usd-20260814"] },
    { label: "FY2026売上・GAAP営業利益", value: "32.20億米ドル（約5,131.2億円）／2.99億米ドル（約475.9億円）", detail: "GAAP純利益3.09億米ドル（約492.6億円）、FCF 10.59億米ドル（約1,687.1億円）。", sourceIds: ["rollout-docusign-fy2026", "rollout-b09-boj-usd-20260814"] },
    { label: "FY2026 ARR", value: "32.72億米ドル（約5,214.9億円）", detail: "run-rateで売上高ではない。Q1 FY2027のIAM比率はtotal ARRの12.6%。", sourceIds: ["rollout-docusign-fy2026", "rollout-docusign-q1fy27", "rollout-b09-boj-usd-20260814"] },
  ];
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年8月17日",
    metrics: [
      { label: "Q1 FY2027売上", value: "8.30億米ドル（約1,323.2億円）", change: "前年比+9%", interpretation: "成熟したeSignature基盤からIAMへ拡張中。", sourceId: "rollout-docusign-q1fy27" },
      { label: "Q1 GAAP営業利益・FCF", value: "1.11億米ドル（約177.4億円）／2.89億米ドル（約461.3億円）", change: "GAAP・cashとも黒字", interpretation: "成長率とprofitabilityを両方評価できる。", sourceId: "rollout-docusign-q1fy27" },
    ],
    growthDrivers: [{ title: "eSignatureからIAMへ", evidence: "IAMはQ1 total ARRの12.6%、投資顧客4万。", japanMeaning: "JapanはAE、Partner、Marketing、MDRを同時採用しcategory expansionを進める。", sourceIds: ["rollout-docusign-q1fy27", "rollout-docusign-jobs-20260817"] }],
    risks: [{ title: "bundle・AI・地域競争", disclosedRisk: "basic e-signature、enterprise suite、CLM、AI・内製と競合する。", companyResponse: "IAM、AI、identity、workflow、integrationへ拡張。", genbaRead: "migrationと3年TCO、IAM adoption、AI精度をprocess単位で比較したい。", sourceIds: ["rollout-docusign-10k"] }],
    japanCommitment: { verdict: "新責任者・拡張office・対象7求人は強いsignalだが、日本売上・quota達成率は非公開。", summary: "2015年法人設立、2026年責任者就任・office移転、AE・Partner・Marketing・MDRを採用。", signals: [{ year: "2026", title: "日本体制更新", detail: "新President就任とoffice面積2.5倍、対象7求人。", sourceIds: ["rollout-docusign-japan-leader", "rollout-docusign-jobs-20260817"] }], unknowns: ["Japan revenue・ARR・customer", "segment別quota・attainment", "IAM implementation・CS capacity"] },
    scenarios: [{ scenario: "基本", title: "IAM mixが段階拡大", body: "eSignature installed baseへagreement workflow・AIを追加する。" }, { scenario: "上振れ", title: "AI・partner連携が加速", body: "SAP・Salesforce等とのjoint GTMでenterprise IAMが広がる。" }, { scenario: "下振れ", title: "bundle・低価格署名へ回帰", body: "署名単体の価格圧力とIAM導入負荷で成長が鈍る。" }],
    sourceIds: ["rollout-docusign-q1fy27", "rollout-docusign-fy2026", "rollout-docusign-10k", "rollout-docusign-jobs-20260817"],
  };
  intelligence.companyStats.globalHeadcount = { value: "7,044人", detail: "2026年1月31日時点。約60%が米国、残りが海外。", sourceId: "rollout-docusign-10k" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "11 requisitionsは現在人数を示さない。", sourceId: "rollout-docusign-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区虎ノ門1-23-1 虎ノ門ヒルズ森タワー11階", detail: "2026年8月移転。", sourceId: "rollout-docusign-japan-leader" };
  intelligence.companyStats.japanSince = { value: "2015年", detail: "Docusign Japan K.K.設立・東京office開設。", sourceId: "rollout-docusign-japan-launch" };
  intelligence.customerProof = [
    { company: "JAL", products: "Docusign", outcome: "年約16,000電子契約。procurement 28日→14日、署名requestから相手署名まで平均3日。", implication: "vendor-selected事例。40超subaccountsの特定運用。", sourceId: "rollout-docusign-jal" },
    { company: "JERA", products: "Docusign", outcome: "契約を1〜2週間から平均1.5日、staff工数を約7分の1へ短縮。", implication: "顧客自己申告で一般保証ではない。", sourceId: "rollout-docusign-jera" },
    { company: "Olympus", products: "Docusign", outcome: "契約を最大2カ月から1〜2日へ短縮し、4カ月の印紙・郵送削減が年額fee相当。", implication: "vendor-selected事例。5 vendors比較の個別結果。", sourceId: "rollout-docusign-olympus" },
  ];
  intelligence.roleLens = { salesMotion: "SMB AE 2 req、Enterprise AE、SAP・Salesforce Partner、Field Marketing、MDRがeSignature installed baseからIAMへpipeline・revenueを作る。", compensation: "対象7求人を含む日本11求人は数値給与・OTE非公開。", quota: "quota、担当社数、ACV、cycle、attainment、new・expansion・partner creditは非公開。", collaboration: "AE、Partner、Marketing、MDR、SE・CS、Product・AI、Legal・Security、SAP・Salesforce ecosystemが連携する。" };
  intelligence.salesAppeal = { intro: "eSignatureのinstalled baseからIAMへ広げる、複数segment・partner横断のGTM経験を整理した。", points: [
    { title: "SMBからEnterpriseまで売り分ける", detail: "SMB AE 2 requisitions、Enterprise AE、MDRを同時採用し、velocityとcomplex saleの両方を強化している。", sourceIds: ["rollout-docusign-jobs-20260817"] },
    { title: "SAP・Salesforce ecosystemでIAMを広げる", detail: "専任Partner Account Manager 2職がjoint plan、pipeline、integrationを通じてagreement workflowを拡張する。", sourceIds: ["rollout-docusign-jobs-20260817"] },
    { title: "署名後までbusiness caseを広げる", detail: "JAL・JERA・Olympusのcycle timeと工数成果を、CLM・AI・identity・renewalの追加価値へつなげる。", sourceIds: ["rollout-docusign-jal", "rollout-docusign-jera", "rollout-docusign-olympus"] },
  ] };
  addSources(intelligence, [
    { id: "rollout-docusign-company", label: "Docusign Japan会社概要", url: "https://www.docusign.com/ja-jp/blog/about-docusign", kind: "企業公式", scope: "会社・日本法人・経営", checkedAt: researchedAt },
    { id: "rollout-docusign-jobs-20260817", label: "Docusign現行日本求人", url: "https://careers.docusign.com/api/jobs?limit=100&page=1", kind: "企業公式", scope: "日本11 requisitions・対象7求人", checkedAt: researchedAt },
    { id: "rollout-docusign-q1fy27", label: "Docusign Q1 FY2027決算", url: "https://investor.docusign.com/news-and-events/press-releases/news-details/2026/Docusign-Announces-First-Quarter-Fiscal-2027-Financial-Results/default.aspx", kind: "企業公式", scope: "売上・GAAP利益・FCF・IAM", checkedAt: researchedAt },
    { id: "rollout-docusign-fy2026", label: "Docusign FY2026決算", url: "https://investor.docusign.com/files/doc_financials/2026/q4/Q426-EX-99-1-ER.pdf", kind: "企業公式", scope: "通期売上・利益・FCF・ARR", checkedAt: researchedAt },
    { id: "rollout-docusign-10k", label: "Docusign FY2026 10-K", url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm", kind: "企業公式", scope: "顧客・競合・risk", checkedAt: researchedAt },
    { id: "rollout-docusign-japan-leader", label: "Docusign Japan新President・office", url: "https://www.docusign.com/ja-jp/blog/docusign-japan-new-countrymanager-hirokiyoshida", kind: "企業公式", scope: "日本責任者・office", checkedAt: researchedAt },
    { id: "rollout-docusign-japan-launch", label: "Docusign Japan launch", url: "https://www.docusign.com/company/news-center/docusign-and-shachihata-to-bring-hanko-into-the-digital-age", kind: "企業公式", scope: "2015年日本法人・office", checkedAt: researchedAt },
    { id: "rollout-docusign-jal", label: "Docusign・JAL事例", url: "https://www.docusign.com/ja-jp/customer-stories/jal-streamlines-contract-process-with-docusign", kind: "企業公式", scope: "国内契約成果", checkedAt: researchedAt },
    { id: "rollout-docusign-jera", label: "Docusign・JERA事例", url: "https://www.docusign.com/ja-jp/customer-stories/JERA-to-streamline-agreement-process-and-promote-work-system-reform", kind: "企業公式", scope: "国内契約成果", checkedAt: researchedAt },
    { id: "rollout-docusign-olympus", label: "Docusign・Olympus事例", url: "https://www.docusign.com/ja-jp/customer-stories/olympus-promotes-operational-reform-project-and-adopts-docusign", kind: "企業公式", scope: "国内契約・cost成果", checkedAt: researchedAt },
    { id: "rollout-docusign-digital-agency-sign", label: "デジタル庁 電子署名", url: "https://www.digital.go.jp/policies/digitalsign", kind: "公的機関", scope: "電子署名の法的基盤", checkedAt: researchedAt },
    { id: "rollout-b09-boj-usd-20260814", label: "日本銀行 外国為替市況 2026年8月14日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=159.38円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchDragos(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本市場進出", "Macnica経由で日本提供を開始。日本法人設立ではない。", "rollout-dragos-japan-entry");
  applyStandard(intelligence, buildCompactPatch({
    slug: "dragos", leaderName: "Robert M. Lee", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.dragos.com/about", localName: "Kaori Nieda", localLabel: "Country Manager, Japan", localUrl: "https://www.dragos.com/resources/press-release/dragos-appoints-kaori-nieda-country-manager-japan",
    companyId: "rollout-dragos-about", jobId: "rollout-dragos-jobs-20260817", customersId: "rollout-dragos-macnica", externalId: "rollout-dragos-meti-factory", financeId: "rollout-dragos-accenture",
    targets: ["セキュリティ責任者・CISO・OT Security", "工場・Plant・制御・設備", "監視運用・SOC・Incident Response", "重要インフラ経営・Risk", "販売代理・SI・MSSP"], competitors: "Claroty、Nozomi Networks、Armis、Microsoft Defender for IoT、Palo Alto・Fortinet等security suite、OT consulting・MSSP、manual inventory",
    feature: "Dragos Platform 3.0でOT・IT・IoT・IIoT asset可視化、OT文脈付き脆弱性優先度、threat detection、investigation、responseを提供し、WorldViewとIR servicesを組み合わせる。", advantage: "OT practitioner由来のthreat intelligenceとincident response知見をproductへcodifyし、停止を避けるpassive中心のvisibilityとMacnica deliveryを組み合わせる。", benefit: "asset accuracy、対応対象の絞り込み、調査時間、SOC連携、incident readinessを改善し、patchが難しい現場の停止riskを下げる可能性がある。", evidence: "日本のnamed end-customerと定量ROIは確認できない。Macnica経由の市場参入とglobal 20カ国・11業種・400社超は、日本customer outcomeとは別尺度。",
    marketVerdict: "結論：工場DXとOT接続、ransomware・supply-chain riskは追い風。日本責任者と営業・初technical hireを確認したが、Dragos単体売上・ARR・利益、日本法人・国内customer outcomeは非公開。", marketParagraphs: ["工場・重要インフラでcloud・vendor・supply-chain接続が増える一方、IT台帳とCVSSだけではOT asset、業務impact、停止を避ける優先度が分からない。", "今後3〜5年は半導体・製造・energy・transportのOT governanceが追い風だが、passive coverage、air-gap、partner delivery、既存SOC、multi-site costが選定条件になる。", "Genba分析：一拠点でasset accuracy、優先対応削減、investigation time、SOC連携、運用負荷をClaroty・Nozomi・Armis・現状維持と同条件で比較する。"],
    cultureHeadline: "公式Careersはremote-first、Transparency、Authenticity、Mission-Driven、Trust、results over conformityを掲げる。日本2求人もRemote。OTE上限は公開するが内訳は非公開。", classification: "フルリモート", displayLabel: "日本・リモート", officeDays: "出社指定なし", remoteOnly: "現行2求人はRemote", flexibility: "会社は可能な職種でWFHと年複数回onsiteを説明。日本個別の頻度は非公開",
    goodFor: ["OT・critical infrastructureのmissionへ寄せたい", "salesとtechnical country buildを作りたい", "threat intelとincident responseを売りたい"], cautionFor: ["国内named customer proofを必須にする", "単体財務の透明性を求める", "日本の常設officeを必須にする"],
    unresolved: [["単体財務", "取引発表は3社合算ARRのみ。", "Dragos単体revenue、ARR、growth、profit、FCF、retentionは？"], ["取引状態", "Accenture majority stakeは2026年8〜9月close予定。", "close、governance、product・channel autonomy、employee impactは？"], ["日本delivery", "Country Manager、AE、初technical hire、Macnicaを確認。", "日本法人、office、customer、installed base、support・IR SLAは？"], ["PoC・operability", "OT-native visibilityとintelを訴求。", "asset coverage、false positive、air-gap、upgrade、multi-site、existing SOC、TCOは？"], ["報酬・達成", "OTE上限はAE 3,184万円、ASA 3,000万円。", "base・variable、quota、ramp、attainment、partner credit、equityは？"]],
  }));
  intelligence.facts = [
    { label: "単体売上高・ARR・収益性", value: "非公開", detail: "3社合算指標からDragos単体を推定しない。", sourceIds: ["rollout-dragos-accenture"] },
    { label: "2026年取引評価", value: "32億米ドル（約5,041.9億円）", detail: "Accentureによるmajority stake取得時のDragos評価。8月17日時点でclose確認不能。売上ではない。", sourceIds: ["rollout-dragos-accenture", "rollout-b09-customs-usd-20260816"] },
    { label: "2023年資金調達", value: "0.74億米ドル（約116.6億円）／累計4.40億米ドル（約693.3億円）", detail: "Series D extensionと累計調達で、売上・利益ではない。", sourceIds: ["rollout-dragos-series-d", "rollout-b09-customs-usd-20260816"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "約580人", detail: "2026年Accenture取引発表。", sourceId: "rollout-dragos-accenture" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "AEと日本初technical hireの募集は現在人数を示さない。", sourceId: "rollout-dragos-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "Japan Remote求人はあるが、日本法人・常設office住所は確認できない。", sourceId: "rollout-dragos-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2023年", detail: "Macnica経由の市場参入。日本法人設立年ではない。", sourceId: "rollout-dragos-japan-entry" };
  intelligence.customerProof = [{ company: "国内named customerは確認不能", products: "Dragos Platform・WorldView・Services", outcome: "Macnica経由で2023年に日本提供を開始。", implication: "global 400社超や名古屋港attack記事を日本顧客成果へ転用しない。", sourceId: "rollout-dragos-macnica" }];
  intelligence.roleLens = { salesMotion: "Senior Enterprise AEがpartnerとenergy・water・transport・manufacturingを開拓し、Advisory Solutions Architectがpre-salesからpost-sales・enablementまで支える。", compensation: "AEは最大3,184万円OTE、ASAは最大3,000万円OTE。base・variable内訳とequity額は非公開。", quota: "quota、担当社数、ACV、cycle、attainment、partner・services・renewal creditは非公開。", collaboration: "AE、ASA、Macnica、Microsoft・Omron等partner、global Product・Intel・IR、顧客CISO・OT・SOC・Plantが連携する。" };
  intelligence.salesAppeal = { intro: "OT securityの日本country buildで、commercialとtechnicalの両面を担う希少性を整理した。", points: [
    { title: "日本territoryを初期から作る", detail: "Senior Enterprise AEがenergy・water・transport・manufacturingをpartnerと開拓する高自律ICとして募集されている。", sourceIds: ["rollout-dragos-jobs-20260817"] },
    { title: "日本初technical hireと伴走する", detail: "Advisory Solutions Architectはpre-sales、PoC、post-sales guidance、partner enablementまで顧客lifecycleを横断する。", sourceIds: ["rollout-dragos-jobs-20260817"] },
    { title: "OT固有の停止riskを売る", detail: "IT securityの検知数ではなく、asset accuracy、優先対応、investigation time、incident readinessを商談KPIにする。", sourceIds: ["rollout-dragos-meti-factory", "rollout-dragos-about"] },
  ] };
  addSources(intelligence, [
    { id: "rollout-dragos-about", label: "Dragos About", url: "https://www.dragos.com/about", kind: "企業公式", scope: "創業・CEO・本社", checkedAt: researchedAt },
    { id: "rollout-dragos-jobs-20260817", label: "Dragos現行日本求人", url: "https://job-boards.greenhouse.io/dragos", kind: "企業公式", scope: "日本2求人・Remote・言語・OTE", checkedAt: researchedAt },
    { id: "rollout-dragos-accenture", label: "Dragos・Accenture取引発表", url: "https://www.dragos.com/resources/press-release/dragos-ot-cybersecurity-with-accenture", kind: "企業公式", scope: "取引評価・3社合算ARR・人員", checkedAt: researchedAt },
    { id: "rollout-dragos-series-d", label: "Dragos Series D extension", url: "https://www.dragos.com/resources/press-release/dragos-raises-74m-in-series-d-round-extension-funding", kind: "企業公式", scope: "資金調達・日本参入", checkedAt: researchedAt },
    { id: "rollout-dragos-japan-entry", label: "Dragos日本参入", url: "https://www.dragos.com/resources/press-release/dragos-raises-74m-in-series-d-round-extension-funding", kind: "企業公式", scope: "2023年日本市場参入", checkedAt: researchedAt },
    { id: "rollout-dragos-macnica", label: "Macnica Dragos提供開始", url: "https://www.macnica.co.jp/public-relations/news/2023/143937/", kind: "企業公式", scope: "日本partner・提供開始", checkedAt: researchedAt },
    { id: "rollout-dragos-japan-leader", label: "Dragos Japan Country Manager", url: "https://www.dragos.com/resources/press-release/dragos-appoints-kaori-nieda-country-manager-japan", kind: "企業公式", scope: "日本責任者", checkedAt: researchedAt },
    { id: "rollout-dragos-meti-factory", label: "経産省 工場システムのサイバー・フィジカル対策", url: "https://www.meti.go.jp/policy/netsecurity/wg1/factorysystems_guideline.html", kind: "公的機関", scope: "工場DX・OT risk", checkedAt: researchedAt },
    { id: "rollout-b09-customs-usd-20260816", label: "税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchElastic(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2014", "日本法人設立", "2014年9月、Elasticsearch株式会社を設立。", "rollout-elastic-ricoh");
  applyStandard(intelligence, buildCompactPatch({
    slug: "elastic", leaderName: "Ashutosh Kulkarni / Shay Banon", leaderLabel: "CEO／Founder・CTO", leaderUrl: "https://www.elastic.co/about/leadership", localName: "大谷 健", localLabel: "Elasticsearch株式会社 代表取締役社長", localUrl: "https://www.elastic.co/jp/about/press/elastic-announces-former-microsoft-japan-executive-ken-otani-appointed-president-and-ceo-of-elasticsearch-inc",
    companyId: "rollout-elastic-leadership", jobId: "rollout-elastic-jobs-20260817", customersId: "rollout-elastic-nikkei", externalId: "rollout-elastic-ipa-dx2025", financeId: "rollout-elastic-fy2026",
    targets: ["技術責任者・CTO・Engineering・AI Platform", "情報システム・CIO・IT Operations・SRE", "セキュリティ責任者・CISO・SOC", "データ・検索・Application Architecture", "小売・製造・Digital Product"], competitors: "Search・AIはAlgolia、Solr、Coveo、Pinecone、Qdrant、Weaviate、MongoDB Atlas、Azure AI Search、AWS fork。ObservabilityはDatadog、Dynatrace、New Relic、Splunk。SecurityはMicrosoft Sentinel、CrowdStrike、Google SecOps、Palo Alto、Splunk",
    feature: "Search AI Platformを共通基盤にElasticsearch、Elastic Observability、Elastic SecurityをCloud Serverless、Hosted、self-managedで提供する。", advantage: "search、logs・traces、security event、unstructured dataを同じengineとopen・extensible architectureへ載せ、hybrid・multi-cloudで展開できる。", benefit: "search relevance・latency、MTTR、SOC調査、tool・retention cost、運用工数を改善し、AI applicationへ信頼できるcontextを供給できる可能性がある。", evidence: "日本経済新聞社は2.1億件規模でinfra cost 22.5%減、リコーは35 nodes・日2TB log、ぐるなびは50 sources・500億documentsを公式事例で説明。",
    marketVerdict: "結論：生成AI、cloud-native運用、cyber riskで共通data layerの需要がある。FY2026売上17.39億米ドル（約2,740.5億円）、GAAP営業赤字・FCF黒字。日本3求人はOnsiteで、7% workforce削減はcounter-signal。", marketParagraphs: ["search、telemetry、security、unstructured dataが増える一方、point tools・別indexではrelevance、MTTR、SOC investigation、storage・retention costが分断する。", "今後3〜5年はRAG・AI application、observability、SIEMが追い風だが、hyperscaler・open source・specialist、resource cost、migration、workforce削減が選定条件になる。", "Genba分析：RAG、APM・logs、SIEMの一つから始め、relevance、latency、ingest・storage cost、MTTR、analyst time、運用工数を既存stackと比較してplatform expansionを判断する。"],
    cultureHeadline: "Source CodeはCustomer 1st、Home Dinner、IT Depends、Progress>Perfection、As YOU Are等を掲げdistributed by intention。一方、現行日本3求人はOnsiteで、2026年6月に全社約7%削減を公表。", classification: "出社中心", displayLabel: "東京・オンサイト", officeDays: "具体日数は非公開", remoteOnly: "現行3求人はOnsite taxonomy", flexibility: "会社全体のdistributed policyを日本求人のremote保証へ転用しない",
    goodFor: ["Search・Observability・Securityを横断したい", "open sourceとenterprise platformを扱いたい", "technical buyerとeconomic buyerをつなぎたい"], cautionFor: ["完全remoteを必須にする", "GAAP営業黒字だけを求める", "組織削減の不確実性を避けたい"],
    unresolved: [["収益性", "FY2026はGAAP営業赤字・FCF黒字。", "FY2027 growth、SBC、margin、FCF durability、NERは？"], ["日本体制", "法人・責任者・対象3求人を確認。", "Japan revenue、customer、headcount、segment・product coverage、office日数は？"], ["Platform economics", "search・observability・securityを共通化。", "ingest、storage、compute、retention、serverless・hosted・self-managedの3年TCOは？"], ["Workforce change", "2026年6月に約7%削減。", "Japan impact、role stability、coverage、ramp、support qualityは？"], ["報酬・達成", "3求人の数値給与・OTEは非公開。", "pay mix、quota、ramp、attainment、担当社数、cloud・cross-sell creditは？"]],
  }));
  intelligence.facts = [
    { label: "FY2026売上高", value: "17.39億米ドル（約2,740.5億円）", detail: "前年比+17%。subscription 16.34億米ドル（約2,575.3億円）、Elastic Cloudは売上の48%。", sourceIds: ["rollout-elastic-fy2026", "rollout-elastic-10k", "rollout-b09-customs-usd-20260816"] },
    { label: "FY2026稼ぐ力", value: "GAAP営業損失0.33億米ドル（約52.0億円）／adjusted FCF 3.46億米ドル（約544.4億円）", detail: "non-GAAP営業利益2.85億米ドル（約449.1億円）。GAAPと調整指標を分ける。", sourceIds: ["rollout-elastic-fy2026", "rollout-b09-customs-usd-20260816"] },
    { label: "RPO・顧客", value: "RPO 19.82億米ドル（約3,122.8億円）／顧客約24,000", detail: "RPOは売上・ARRではない。ACV 10万米ドル（約1,575.6万円）超は1,720社超、NER約112%。", sourceIds: ["rollout-elastic-fy2026", "rollout-b09-customs-usd-20260816"] },
  ];
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年8月17日",
    metrics: [{ label: "FY2026売上", value: "17.39億米ドル（約2,740.5億円）", change: "前年比+17%", interpretation: "Cloud、AI、Observability、Securityのplatform expansionが成長を支える。", sourceId: "rollout-elastic-fy2026" }, { label: "GAAP営業損失・adjusted FCF", value: "0.33億米ドルの損失（約52.0億円）／3.46億米ドル（約544.4億円）", change: "GAAP赤字・cash黒字", interpretation: "profitabilityは指標を分けて評価する。", sourceId: "rollout-elastic-fy2026" }],
    growthDrivers: [{ title: "Search AI・Observability・Securityの共通engine", evidence: "Elastic Cloudは売上の48%、RPOは前年比+28%、NER約112%。", japanMeaning: "Sales 2件とSA leadership 1件でretail・manufacturing・strategic accountを強化。", sourceIds: ["rollout-elastic-fy2026", "rollout-elastic-jobs-20260817"] }],
    risks: [{ title: "競争・cost・workforce再編", disclosedRisk: "hyperscaler、open source、specialist、suiteと競争し、2026年6月に約7%削減。", companyResponse: "AI・automationとlean operationへskillを移す。", genbaRead: "Japan coverage、production support、TCO、role stabilityを個別確認したい。", sourceIds: ["rollout-elastic-10k", "rollout-elastic-layoff"] }],
    japanCommitment: { verdict: "日本責任者・法人・3求人・国内事例は確認できるが、日本売上・人数・削減影響は非公開。", summary: "2014年法人設立、2025年に大谷社長就任。Retail SalesとSA leadershipを採用。", signals: [{ year: "2026", title: "日本3求人", detail: "Retail Enterprise sales 2件とSolutions Architecture leadership。", sourceIds: ["rollout-elastic-jobs-20260817"] }], unknowns: ["Japan revenue・customer・headcount", "7%削減のJapan影響", "quota・attainment・product mix"] },
    scenarios: [{ scenario: "基本", title: "platform expansion継続", body: "Searchを起点にObservability・Security・AIへland-and-expandする。" }, { scenario: "上振れ", title: "Enterprise AI searchが加速", body: "RAGとAgent contextがSearch AI需要を押し上げる。" }, { scenario: "下振れ", title: "bundle・cost圧力", body: "hyperscaler・open source・specialistでprice・migration圧力が強まる。" }],
    sourceIds: ["rollout-elastic-fy2026", "rollout-elastic-10k", "rollout-elastic-jobs-20260817", "rollout-elastic-layoff"],
  };
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "2026年6月の約7%削減後の厳密な人数を確認できない。", sourceId: "rollout-elastic-layoff" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "3求人とlocal functionから人数を推定しない。", sourceId: "rollout-elastic-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区", detail: "公式pressで本社所在区を確認。番地・現在のoffice運用は確認不能。", sourceId: "rollout-elastic-japan-leader" };
  intelligence.companyStats.japanSince = { value: "2014年9月", detail: "Elasticsearch株式会社設立。", sourceId: "rollout-elastic-ricoh" };
  intelligence.customerProof = [
    { company: "日本経済新聞社", products: "Elasticsearch・Elastic Cloud", outcome: "2.1億件規模。infra costを22.5%削減し、NIKKEI KAIを開発開始から1年未満で商用化。", implication: "vendor-selected事例。組織・migrationも寄与する。", sourceId: "rollout-elastic-nikkei" },
    { company: "ぐるなび", products: "Elastic Cloud", outcome: "50 data sources、500億documentsの全app・network logを処理。", implication: "運用属人化軽減は定性で、cost・MTTRの数値は非公開。", sourceId: "rollout-elastic-gurunavi" },
    { company: "リコー", products: "Elastic Stack", outcome: "35 nodes、1日2TBのlogをglobal監視しreal-time可視化。", implication: "導入規模であり、定量business outcomeではない。", sourceId: "rollout-elastic-ricoh" },
  ];
  intelligence.roleLens = { salesMotion: "Retail Enterprise AEと日本語のRetail・Manufacturing Account Salesがnew・expansionを担い、Senior Manager SAがstrategic・global accountのtechnical teamとpartnerを率いる。", compensation: "3求人の数値給与・OTEは非公開。", quota: "quota、担当社数、ACV、cycle、attainment、cloud consumption・cross-sell creditは非公開。", collaboration: "Sales、SA、Partner、Product・Engineering、Support、顧客Search・SRE・SOC・CIO・CISOが連携する。" };
  intelligence.salesAppeal = { intro: "Search AI・Observability・Securityを、retail・manufacturingの業務成果へ束ねるplatform saleを整理した。", points: [
    { title: "Retail・Manufacturingのaccount strategyを作る", detail: "現行2 sales rolesがnew logoとexpansionを持ち、TCO・ROIをtechnical use caseへ接続する。", sourceIds: ["rollout-elastic-jobs-20260817"] },
    { title: "Solutions Architecture組織を率いる", detail: "Senior Manager SAがstrategic・global accounts、partner strategy、technical teamの成果を担う。", sourceIds: ["rollout-elastic-jobs-20260817"] },
    { title: "三つのbuyerへ同じdata layerを売る", detail: "Search・SRE・SOCの課題を、relevance、MTTR、analyst工数、data costで共通business caseへ変える。", sourceIds: ["rollout-elastic-nikkei", "rollout-elastic-fy2026"] },
  ] };
  addSources(intelligence, [
    { id: "rollout-elastic-leadership", label: "Elastic Leadership", url: "https://www.elastic.co/about/leadership", kind: "企業公式", scope: "経営・創業者", checkedAt: researchedAt },
    { id: "rollout-elastic-jobs-20260817", label: "Elastic現行日本求人", url: "https://jobs.elastic.co/", kind: "企業公式", scope: "日本3求人・Onsite・言語", checkedAt: researchedAt },
    { id: "rollout-elastic-fy2026", label: "Elastic FY2026決算", url: "https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx", kind: "企業公式", scope: "売上・利益・FCF・RPO・顧客", checkedAt: researchedAt },
    { id: "rollout-elastic-10k", label: "Elastic FY2026 10-K", url: "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm", kind: "企業公式", scope: "財務・競合・risk", checkedAt: researchedAt },
    { id: "rollout-elastic-japan-leader", label: "Elastic Japan新社長", url: "https://www.elastic.co/jp/about/press/elastic-announces-former-microsoft-japan-executive-ken-otani-appointed-president-and-ceo-of-elasticsearch-inc", kind: "企業公式", scope: "日本責任者・法人", checkedAt: researchedAt },
    { id: "rollout-elastic-layoff", label: "Elastic CEO employee announcement", url: "https://www.elastic.co/blog/ceo-ash-kulkarni-announcement-to-elastic-employees", kind: "企業公式", scope: "2026年7% workforce削減", checkedAt: researchedAt },
    { id: "rollout-elastic-nikkei", label: "Elastic・日本経済新聞社事例", url: "https://www.elastic.co/customers/nikkei", kind: "企業公式", scope: "国内search・cost成果", checkedAt: researchedAt },
    { id: "rollout-elastic-gurunavi", label: "Elastic・ぐるなび事例", url: "https://www.elastic.co/jp/customers/gurunavi", kind: "企業公式", scope: "国内log規模", checkedAt: researchedAt },
    { id: "rollout-elastic-ricoh", label: "Elastic・リコー事例", url: "https://www.elastic.co/jp/about/press/ricoh-harnesses-the-elastic-stack-to-monitor-and-detect-security-threats", kind: "企業公式", scope: "日本法人設立・国内security規模", checkedAt: researchedAt },
    { id: "rollout-elastic-ipa-dx2025", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html", kind: "公的機関", scope: "data・AI・legacy・内製化", checkedAt: researchedAt },
    { id: "rollout-b09-customs-usd-20260816", label: "税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchExtremeNetworks(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "1993", "日本法人設立", "1993年3月の現行公式会社概要上の法人設立日。Extreme brandの日本進出年とは断定しない。", "rollout-extreme-japan-company");
  applyStandard(intelligence, buildCompactPatch({
    slug: "extreme-networks", leaderName: "Ed Meyercord", leaderLabel: "President・CEO", leaderUrl: "https://www.extremenetworks.com/about-extreme-networks/company/leadership/ed-meyercord", localName: "横山 尊信", localLabel: "Extreme Networks株式会社 代表取締役社長", localUrl: "https://www.extremenetworks.com/jp/about-extreme-networks/company/extreme-networks-kk",
    companyId: "rollout-extreme-about", jobId: "rollout-extreme-jobs-20260817", customersId: "rollout-extreme-aucfan", externalId: "rollout-extreme-ipa-threats", financeId: "rollout-extreme-q3fy26",
    targets: ["情報システム・CIO・CTO・Infrastructure", "ネットワーク・NetOps・IT Operations", "セキュリティ責任者・CISO・IAM", "教育・自治体・医療・製造・Venue", "販売パートナー・SI・Distributor"], competitors: "Cisco、HPE・Juniper、Huawei、Arista、CommScope、Fortinet、Ubiquiti、AWS・Microsoft・Google cloud networking、既存multi-vendor network",
    feature: "Platform ONEでwired、wireless、fabric、SD-WAN、cloud NAC・ZTNA、security、third-party visibility、AI automation、inventory・licensing・supportを統合する。", advantage: "campus、branch、data centerをsingle cloud control planeとFabric segmentationへつなぎ、11,000超partnerと日本servicesでmigration・lifecycleを支える。", benefit: "site立上げ、config step・error、MTTR、policy・audit coverage、operator hours、tool・license、5年TCOを改善できる可能性がある。", evidence: "オークファンは通常6カ月のdesign-to-installを1カ月、hardware delivery・configを1週間で実施。富士通は運用工数半減を説明するが旧portfolio事例。",
    marketVerdict: "結論：distributed network、ransomware・supply-chain risk、人材不足が統合運用の追い風。FY2025売上11.40億米ドル（約1,835.5億円）はGAAP純損失、FY2026 Q3はGAAP黒字。日本の対象4求人を確認。", marketParagraphs: ["wired、wireless、SD-WAN、NAC、site別CLI、vendor consoleが分断すると、変更error、MTTR、audit、現地dispatch、license costが増える。", "今後3〜5年はAI・cloud・remote・OTと公共cloudが追い風だが、Cisco・HPE-Juniper等のinstalled base、single-vendor lock-in、partner quality、supply、FCF volatilityが選定条件になる。", "Genba分析：重要siteでtool数、config step・error、site立上げ、MTTR、policy・audit coverage、operator hours、rollback、5年TCOを競合と同条件で測る。"],
    cultureHeadline: "公式valuesはTeamwork、Transparency、Candor、Curiosity、Ownership、Inclusion。SEはRemote、Services Sales・DeliveryはHybrid。会社一般のFlex Firstを求人個別へ一律適用しない。", classification: "ハイブリッド", displayLabel: "東京・職種別", officeDays: "JTACは週2日、対象4求人は具体日数非公開", remoteOnly: "SE 2件はRemote、Services 2件はHybrid", flexibility: "Services Salesは出張あり。国別benefits・RSUは個別確認",
    goodFor: ["networkとsecurity・AIを横断したい", "channelとservicesを含むlifecycle saleをしたい", "国内public・education・multi-siteへ価値を出したい"], cautionFor: ["single-vendor lock-inを避けたい", "安定したGAAP profitだけを求める", "全職種完全remoteを必須にする"],
    unresolved: [["収益性", "FY2025 GAAP純損失、FY2026 Q3は黒字。", "FY2026通期actual、FCF durability、SaaS mix、marginは？"], ["日本scale", "法人・責任者・office・対象4求人を確認。", "Japan revenue、ARR、customer、headcount、Platform ONE adoptionは？"], ["統合とlock-in", "single control planeとFabricを訴求。", "third-party depth、standards、export、rollback、outage concentrationは？"], ["Partner・services", "11,000超partnerとJapan services。", "deal ownership、delivery quality、escalation、coverage、renewal責任は？"], ["報酬・達成", "SE 2件はOTEと70:30を公開。", "Services報酬、quota、ramp、attainment、attach・renewal credit、equityは？"]],
  }));
  intelligence.facts = [
    { label: "FY2025売上・GAAP純損失", value: "11.40億米ドル（約1,835.5億円）／0.07億米ドルの損失（約12.0億円）", detail: "GAAP営業利益0.17億米ドル（約27.3億円）、FCF 1.27億米ドル（約205.0億円）。", sourceIds: ["rollout-extreme-10k", "rollout-b09-boj-usd-202608"] },
    { label: "Q3 FY2026売上・GAAP営業利益", value: "3.17億米ドル（約510.2億円）／0.17億米ドル（約27.9億円）", detail: "GAAP純利益0.11億米ドル（約17.0億円）、FCF 0.08億米ドル（約12.6億円）。", sourceIds: ["rollout-extreme-q3fy26", "rollout-b09-boj-usd-202608"] },
    { label: "SaaS ARR", value: "2.36億米ドル（約380.6億円）", detail: "Q3 FY2026時点、前年比+28.6%。売上高ではない。", sourceIds: ["rollout-extreme-q3fy26", "rollout-b09-boj-usd-202608"] },
  ];
  intelligence.marketStatus = {
    ...intelligence.marketStatus,
    isPublic: true,
    ticker: "EXTR",
    exchange: "NASDAQ",
    listedSince: "1999年",
    stockLinkUrl: "https://investor.extremenetworks.com/stock-information/default.aspx",
  };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年8月17日",
    metrics: [{ label: "Q3 FY2026売上", value: "3.17億米ドル（約510.2億円）", change: "前年比+11%", interpretation: "productとsubscription・supportが成長。", sourceId: "rollout-extreme-q3fy26" }, { label: "FY2025 GAAP純損失・FCF", value: "0.07億米ドルの損失（約12.0億円）／1.27億米ドル（約205.0億円）", change: "GAAP赤字・FCF黒字", interpretation: "Q3黒字化とcash volatilityを継続確認する。", sourceId: "rollout-extreme-10k" }],
    growthDrivers: [{ title: "Platform ONEとSaaS ARR", evidence: "SaaS ARR 2.36億米ドル（約380.6億円）、前年比+28.6%。cloud管理devices 330万超。", japanMeaning: "SE、Services Sales、Deliveryを採用し、technical winからlifecycle valueを強化。", sourceIds: ["rollout-extreme-q3fy26", "rollout-extreme-jobs-20260817"] }],
    risks: [{ title: "競争・consolidation・supply", disclosedRisk: "Cisco、HPE-Juniper等との競争、supply concentration、inventory、profit volatilityを10-Kで開示。", companyResponse: "Platform ONE、AI、Fabric、servicesとchannelで差別化。", genbaRead: "single-vendor simplificationとlock-in、5年TCO、partner qualityを同時に検証する。", sourceIds: ["rollout-extreme-10k"] }],
    japanCommitment: { verdict: "法人・責任者・Sales・SE・Delivery求人は確認できるが、日本売上・ARR・人数は非公開。", summary: "霞が関のSales & Services officeと横山社長、対象4求人、国内customer proofを確認。", signals: [{ year: "2026", title: "日本の技術・services採用", detail: "SE 2、Services Sales 1、Premier Delivery 1。", sourceIds: ["rollout-extreme-jobs-20260817"] }], unknowns: ["Japan revenue・ARR・customer・headcount", "Platform ONE booking・adoption", "quota・attainment・partner delivery capacity"] },
    scenarios: [{ scenario: "基本", title: "SaaS・Platform ONE mix拡大", body: "installed networkへcloud control、AI、security、servicesを追加する。" }, { scenario: "上振れ", title: "multi-site刷新が加速", body: "人材不足とsecurity要求でautomation・Fabric需要が高まる。" }, { scenario: "下振れ", title: "incumbent統合・lock-in懸念", body: "HPE-Juniper・Ciscoのbundleとmigration riskで置換が遅れる。" }],
    sourceIds: ["rollout-extreme-q3fy26", "rollout-extreme-10k", "rollout-extreme-jobs-20260817"],
  };
  intelligence.companyStats.globalHeadcount = { value: "2,811人", detail: "2025年6月30日時点。現行About表示は2,800人超。", sourceId: "rollout-extreme-10k" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "7 posting・5 unique jobから人数を推定しない。", sourceId: "rollout-extreme-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区霞が関1-4-2 大同生命霞が関ビル11階", detail: "Sales & Services office。", sourceId: "rollout-extreme-japan-company" };
  intelligence.companyStats.japanSince = { value: "法人設立1993年3月", detail: "global創業1996年より前のため、Extreme brand進出年とは断定しない。", sourceId: "rollout-extreme-japan-company" };
  intelligence.customerProof = [
    { company: "オークファン", products: "Extreme Networks・partner services", outcome: "120席・150 endpoints、AP 13台。通常6カ月のdesign-to-installを1カ月、delivery・configを1週間で実施。", implication: "東京エレクトロン デバイス支援を含む複合成果。", sourceId: "rollout-extreme-aucfan" },
    { company: "札幌学院大学", products: "SPB・Campus Network", outcome: "2 campusでVLAN 255超、変更をedge switch中心に限定し安定運用。", implication: "時間・率の定量値はなく、single-vendor simplificationはlock-in論点も伴う。", sourceId: "rollout-extreme-sapporo" },
    { company: "四街道市", products: "Wired・Wireless Network", outcome: "6〜7カ月構築を予定どおり実施し、稼働後backboneに目立つincidentなし。", implication: "vendor-selected事例で工数・cost削減率は非公開。", sourceId: "rollout-extreme-yotsukaido" },
  ];
  intelligence.roleLens = { salesMotion: "Services Salesがchannel案件へProfessional・Premier・Managed Servicesを付け、SE 2職がPoC・architecture、Premier Deliveryが導入・運用を担う。", compensation: "Senior SEはOTE 1,600万〜1,900万円、SEは1,000万〜1,400万円、いずれも70:30。Services 2職は有効な金額非公開。", quota: "quota、担当社数、attainment、services attach、renewal、partner creditは非公開。", collaboration: "Services Sales、SE、Delivery、Support、Product・AI、distributor・SI、顧客Network・Security・CIOが連携する。" };
  intelligence.salesAppeal = { intro: "network platformのpre-sales、services attach、deliveryを横断できる日本4求人の価値を整理した。", points: [
    { title: "pre-salesの報酬と期待を比較できる", detail: "Senior SEとSEは公式OTEレンジと70:30を公開し、demo、RFP・RFI、architecture、PoC、partner支援を担う。", sourceIds: ["rollout-extreme-jobs-20260817"] },
    { title: "servicesをcommercial motionへ組み込む", detail: "Services Salesがprofessional・managed services、onboarding、renewalをchannel型で拡張する。", sourceIds: ["rollout-extreme-jobs-20260817"] },
    { title: "売って終わらずdeliveryまで理解する", detail: "Premier Deliveryが設計・導入・運用を担い、顧客Network・SecurityとProduct・Engineeringをつなぐ。", sourceIds: ["rollout-extreme-jobs-20260817", "rollout-extreme-aucfan"] },
  ] };
  intelligence.solutions = [
    { name: "Extreme Platform ONE", valueProp: "wired、wireless、fabric、SD-WAN、security、AI operationsを共通control planeで統合。", url: "https://www.extremenetworks.com/jp/platform-one", competitors: "Cisco、HPE Aruba・Juniper、Arista、Fortinet", differentiation: "third-party visibility、inventory・license・supportとagentic automationまで一画面へ集約。", retention: "network policy、operations data、automation、support lifecycleへ定着。" },
    { name: "Extreme Fabric", valueProp: "campus、data center、branchでsegmentationと変更を自動化。", url: "https://www.extremenetworks.com/jp/solutions/network-fabric", competitors: "Cisco・HPE Aruba・Juniper fabric、manual VLAN", differentiation: "service-based fabricでedge変更とmulti-site運用を簡素化。", retention: "network topology、segmentation policy、運用playbookへ定着。" },
    { name: "Cloud NAC・ZTNA", valueProp: "identity policy、network access、segmentationをcloudから統合。", url: "https://www.extremenetworks.com/jp/solutions/security", competitors: "Cisco ISE、Aruba ClearPass、Fortinet、Zscaler等", differentiation: "network fabricとidentity accessを同じplatformへ接続。", retention: "identity policy、certificate、device inventory、auditへ定着。" },
  ];
  addSources(intelligence, [
    { id: "rollout-extreme-about", label: "Extreme Networks About", url: "https://www.extremenetworks.com/about-extreme-networks", kind: "企業公式", scope: "創業・規模・partner", checkedAt: researchedAt },
    { id: "rollout-extreme-jobs-20260817", label: "Extreme Networks現行東京求人", url: "https://jobs.lever.co/extremenetworks?location=Tokyo%2C+Japan", kind: "企業公式", scope: "7 pages・5 unique・対象4求人・報酬", checkedAt: researchedAt },
    { id: "rollout-extreme-q3fy26", label: "Extreme Networks Q3 FY2026決算", url: "https://investor.extremenetworks.com/news/news-details/2026/Extreme-Networks-Reports-Third-Quarter-Fiscal-Year-2026-Financial-Results/default.aspx", kind: "企業公式", scope: "売上・利益・FCF・SaaS ARR", checkedAt: researchedAt },
    { id: "rollout-extreme-10k", label: "Extreme Networks FY2025 10-K", url: "https://www.sec.gov/Archives/edgar/data/1078271/000095017025109742/extr-20250630.htm", kind: "企業公式", scope: "財務・人員・競合・risk", checkedAt: researchedAt },
    { id: "rollout-extreme-japan-company", label: "Extreme Networks株式会社 会社概要", url: "https://www.extremenetworks.com/jp/about-extreme-networks/company/extreme-networks-kk", kind: "企業公式", scope: "日本法人・責任者・office", checkedAt: researchedAt },
    { id: "rollout-extreme-aucfan", label: "Extreme Networks・オークファン事例", url: "https://jp.extremenetworks.com/wp-content/uploads/sites/3/2024/04/61638-Aucfan-JP-CS_v2.pdf", kind: "企業公式", scope: "国内導入期間・規模", checkedAt: researchedAt },
    { id: "rollout-extreme-sapporo", label: "Extreme Networks・札幌学院大学事例", url: "https://www.extremenetworks.com/jp/resources/case-study/sapporo-gakuin-university", kind: "企業公式", scope: "国内campus network", checkedAt: researchedAt },
    { id: "rollout-extreme-yotsukaido", label: "Extreme Networks・四街道市事例", url: "https://www.extremenetworks.com/jp/resources/case-study/yotsukaido-city", kind: "企業公式", scope: "国内公共network", checkedAt: researchedAt },
    { id: "rollout-extreme-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b09-boj-usd-202608", label: "日本銀行 2026年8月基準外国為替相場", url: "https://www.boj.or.jp/about/services/tame/tame_rate/kijun/kiju2608.htm", kind: "公的機関", scope: "円換算レート（1米ドル=161円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchNine(records: Record<string, CompanyPublicIntelligence>) {
  if (records.dialpad) patchDialpad(records.dialpad);
  if (records.docusign) patchDocusign(records.docusign);
  if (records.dragos) patchDragos(records.dragos);
  if (records.elastic) patchElastic(records.elastic);
  if (records["extreme-networks"]) patchExtremeNetworks(records["extreme-networks"]);
}
