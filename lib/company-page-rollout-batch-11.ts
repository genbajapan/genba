import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function patchIdeals(intelligence: CompanyPublicIntelligence) {
  const founding = intelligence.marketStatus.milestones.find((item) => item.label === "創業");
  if (founding) Object.assign(founding, { year: "2007・2008", detail: "2007年にKyivの8名で始動し、2008年にVDR事業を開始。公式内で創業年表記が分かれる。", sourceId: "rollout-ideals-story" });
  else ensureMilestone(intelligence, "2007・2008", "創業", "2007年に8名で始動、2008年にVDR事業を開始。", "rollout-ideals-story");
  ensureMilestone(intelligence, "確認不能", "日本市場活動開始は確認不能", "現行のTokyo teamは確認できるが、法人設立・正式進出年は非公開。", "rollout-ideals-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "ideals", leaderName: "Evgeny Sergeev", leaderLabel: "Co-founder・CEO", leaderUrl: "https://es.idealsvdr.com/quienes-somos/", localName: "非公開", localLabel: "日本責任者", localUrl: "https://jobs.ashbyhq.com/ideals",
    companyId: "rollout-ideals-about", jobId: "rollout-ideals-jobs-20260817", customersId: "rollout-ideals-global-cases", externalId: "rollout-ideals-meti-ma", financeId: "rollout-ideals-finance",
    targets: ["事業開発・M&A責任者", "投資銀行・アドバイザリー・PE", "法務・CFO・財務", "IT・セキュリティ・調達", "資金調達・ライフサイエンス取引チーム"], competitors: "Datasite、Intralinks、Drooms、Firmex、DealRoom、Box・Microsoft 365・Dropboxなど汎用storage",
    feature: "Virtual Data Room、8段階permission、Fence View、redaction、Q&A、audit・reporting、IP restriction、24/7 support、MCP連携を提供する。", advantage: "deal専用の権限、閲覧証跡、Q&A、redaction、外部参加者UXを一つのworkspaceにまとめる。", benefit: "deal setup、document review、Q&A、auditの手作業と漏えい・版管理riskを低減し、deal velocityとcontrolを両立できる可能性がある。", evidence: "日本企業のnamed定量事例は確認できない。Global公式事例はStoneX、Equitix、CareVetの利用を説明。",
    marketVerdict: "結論：公正・説明可能なM&A、海外案件のDD、機密data統制が追い風。Profitable・bootstrappedと公式は説明するが、売上・利益額は非公開。東京の3機能roleを確認。", marketParagraphs: ["M&Aは多数の社内外participant、機密document、権限変更、Q&A、redactionを同時に管理する。", "汎用storageではdeal固有の監査、Q&A、権限粒度、外部参加者supportが分断しやすい。", "Genba分析：日本語support、data location、契約主体、room立上げ時間、permission error、Q&A lead timeをPoCで比較する。"],
    cultureHeadline: "公式valuesはTrust、Excellence、Collaboration、Commitment、Care。現行日本roleはremote-first・Hybridだが出社頻度は非公開。", classification: "ハイブリッド", displayLabel: "東京・remote-first", officeDays: "顧客訪問時、通常日数は非公開", remoteOnly: "完全在宅とは確認できない", flexibility: "日常は自宅可、商談時は丸の内二重橋ビルへ訪問",
    goodFor: ["M&A・Finance・Legal buyerを開拓したい", "early local teamでsalesとdeliveryを作りたい", "securityとdeal velocityを両立したい"], cautionFor: ["日本named customerの定量proofを必須にする", "監査済み財務を必須にする", "数値報酬・quota開示を必須にする"],
    unresolved: [["財務", "Profitable・bootstrapped・過去5年30%超成長と公式は説明。", "revenue、ARR、profit額・margin、FCF、定義・期間は？"], ["日本体制", "東京のground sales team 3名とdelivery採用を確認。", "法人、日本責任者、進出年、雇用主体、support人数は？"], ["国内proof", "日本語supportとlocal teamを確認。", "named customer、契約数、setup時間、renewal、NPSは？"], ["Security・data", "9 data centers、権限、audit、Fence Viewを提供。", "Japan data location、subprocessor、retention、MCPのdata境界は？"], ["Commercial", "東京の3機能roleを確認。", "給与、OTE、quota、attainment、cycle、担当社数は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "公式はprofitable・bootstrappedとするが、revenue、ARR、利益額・率、FCFは確認できない。", sourceIds: ["rollout-ideals-finance"] },
    { label: "事業固有指標", value: "200万超users／30万companies", detail: "500人超・28カ国超。日本語求人の17.5万companiesと不一致。", sourceIds: ["rollout-ideals-about"] },
    { label: "日本採用", value: "3機能role", detail: "AE英日mirrorは1機能に統合。AE、Premium Solutions、BDAを確認。", sourceIds: ["rollout-ideals-jobs-20260817"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "500人超・28カ国超", detail: "公式About表示。", sourceId: "rollout-ideals-about" };
  intelligence.companyStats.japanHeadcount = { value: "sales team 3名（求人記載）", detail: "現在の全日本人数は非公開。", sourceId: "rollout-ideals-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "丸の内二重橋ビル（求人記載）", detail: "法人・登記住所は確認不能。", sourceId: "rollout-ideals-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "非公開", detail: "日本進出・法人設立年は確認できない。", sourceId: "rollout-ideals-jobs-20260817" };
  intelligence.customerProof = [{ company: "日本named customer", products: "iDeals VDR", outcome: "公式の日本企業名・定量成果は確認できない。", implication: "Global事例を日本実績へ外挿しない。", sourceId: "rollout-ideals-global-cases" }];
  intelligence.roleLens = { salesMotion: "AE・BDAがoutboundからannual contractまで担い、Premium Solutionsがonboarding、permission、migration、Q&Aの成功を支援。", compensation: "3機能roleの日本の給与・OTE・pay mix・equityは非公開。", quota: "quota、attainment、ACV、cycle、担当社数、new・renewal creditは非公開。", collaboration: "Sales、Premium Solutions、Support、Product、Security、顧客CorpDev・Legal・Financeが連携。" };
  addSources(intelligence, [
    { id: "rollout-ideals-about", label: "iDeals About", url: "https://es.idealsvdr.com/quienes-somos/", kind: "企業公式", scope: "経営・規模・CEO", checkedAt: researchedAt },
    { id: "rollout-ideals-story", label: "iDeals Our Story", url: "https://ideals.jobs/our-story/", kind: "企業公式", scope: "創業沿革・表記差", checkedAt: researchedAt },
    { id: "rollout-ideals-jobs-20260817", label: "iDeals現行Tokyo求人", url: "https://jobs.ashbyhq.com/ideals", kind: "企業公式", scope: "4掲載・3機能・言語・勤務", checkedAt: researchedAt },
    { id: "rollout-ideals-finance", label: "iDeals official hiring growth profile", url: "https://ideals.jobs/germany-sales-hiring/", kind: "企業公式", scope: "bootstrapped・profitability・成長claim", checkedAt: researchedAt },
    { id: "rollout-ideals-global-cases", label: "iDeals client cases", url: "https://www.idealsvdr.com/clients/case-study-stonex/", kind: "企業公式", scope: "Global事例・国内成果非確認", checkedAt: researchedAt },
    { id: "rollout-ideals-meti-ma", label: "経済産業省 M&A指針・報告書", url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html", kind: "公的機関", scope: "公正なM&A・予見可能性・信頼", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchKnowBe4(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2020", "日本法人設立", "2020年2月、100%出資のKnowBe4 Japan合同会社を設立。", "rollout-knowbe4-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "knowbe4", leaderName: "Bryan Palma / Stu Sjouwerman", leaderLabel: "President・CEO／Founder・Executive Chairman", leaderUrl: "https://www.knowbe4.com/press/knowbe4-appoints-bryan-palma-as-president-and-ceo", localName: "力 一浩", localLabel: "KnowBe4 Japan Country Manager・職務執行者社長", localUrl: "https://www.knowbe4.com/ja/press/new-japan-country-manager-appointment?hs_amp=true",
    companyId: "rollout-knowbe4-company", jobId: "rollout-knowbe4-jobs-20260817", customersId: "rollout-knowbe4-moneydesign", externalId: "rollout-knowbe4-ipa-threats", financeId: "rollout-knowbe4-2021-10k",
    targets: ["CISO・CIO・セキュリティ経営層", "セキュリティ教育・人事・人材開発", "SOC・メールセキュリティ・IT", "コンプライアンス・リスク・監査", "チャネル・セキュリティアドバイザー"], competitors: "Proofpoint、Microsoft Attack Simulation Training、Cofense、Hoxhunt、Mimecast、内製LMS・標的型mail訓練",
    feature: "HRM+、Security Awareness Training、SecurityCoach、Compliance Plus、PhishER Plus、Defend・Prevent・Protect、AIDA、Agent Risk Managerを提供。", advantage: "training、simulation、不審mail報告、triage・remediation、behavior・risk score、AI personalizationを一つのhuman-risk programへつなぐ。", benefit: "click・report rate、高risk user、training・translation・triage工数、incident readinessを改善できる可能性がある。", evidence: "お金のデザインは手作り時比工数50〜60%削減、訓練hit率約30%かsingle-digitへ低下と顧客報告。",
    marketVerdict: "結論：ransomware、標的型攻撃、BEC、AI social engineeringと経営主導のrisk管理が追い風。非公開化後の財務は非公開。東京の対象6求人を確認。", marketParagraphs: ["年1回の座学・一斉模擬訓練では忘却と個人差を埋めにくく、報告後のtriage・follow-upが手作業化する。", "Human risk platformは行動dataとadaptive interventionを扱う一方、privacy、employee monitoring、existing email・identity stackとの境界を設計する必要がある。", "Genba分析：導入前後のclick・report、high-risk user、triage時間、training completion、incident、admin工数を比較する。"],
    cultureHeadline: "公式valuesはExtreme Ownership、Radical Transparency、Right.Fast.Fun。Tokyo拠点はHybrid Environmentだが、role別出社日数は非公開。", classification: "ハイブリッド", displayLabel: "Tokyo Hybrid Environment", officeDays: "role別は非公開", remoteOnly: "remote・office・hybridを選択可と拠点ページは説明", flexibility: "個別条件は選考で確認",
    goodFor: ["Cybersecurityと人の行動変容を横断したい", "SalesからCS・Advisor・SEまでlocal teamで働きたい", "国内定量事例を使いvalue saleしたい"], cautionFor: ["非公開会社の最新財務を必須にする", "employee monitoringの合意形成を避けたい", "数値報酬・quota開示を必須にする"],
    unresolved: [["最新財務", "FY2021監査値・Q3 2022公開値はある。", "非公開化後revenue、ARR、profit、FCF、growth、NRRは？"], ["日本scale", "法人、office、Country Manager、6対象求人を確認。", "Japan revenue、headcount、active paid customers、partner売上は？"], ["顧客数", "current claimは国内1,000社超。", "同じpageの旧500社表記との基準日・定義は？"], ["Outcome・privacy", "国内事例で工数・hit率改善を確認。", "他control寄与、対照群、employee dataの利用目的・retentionは？"], ["Commercial", "6対象roleを確認。", "給与、OTE、quota、attainment、ACV、cycle、担当社数は？"]],
  }));
  intelligence.facts = [
    { label: "FY2021売上・稼ぐ力（最新監査年次）", value: "売上2.46億米ドル（約388.1億円）／純損失0.12億米ドル（約18.7億円）／FCF 0.71億米ドル（約112.2億円）", detail: "非公開化前のhistorical値。現在値として表示しない。", sourceIds: ["rollout-knowbe4-2021-10k", "rollout-b11-customs-usd"] },
    { label: "Q3 2022事業固有指標", value: "ARR 3.47億米ドル（約547.0億円）／54,200 customers", detail: "ARRはannualized subscription metricで認識売上ではない。", sourceIds: ["rollout-knowbe4-2022-10q", "rollout-b11-customs-usd"] },
    { label: "Current scale", value: "70,000超organizations／15年のbehavioral data", detail: "会社公式claim。国内は1,000社超表記と旧500社表記が併存。", sourceIds: ["rollout-knowbe4-ceo", "rollout-knowbe4-japan-cases"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "現行の一次情報による厳密人数は確認できない。", sourceId: "rollout-knowbe4-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "7求人から現在人数を推測しない。", sourceId: "rollout-knowbe4-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京ミッドタウン・タワー18F", detail: "東京都港区赤坂9-7-1。", sourceId: "rollout-knowbe4-tokyo" };
  intelligence.companyStats.japanSince = { value: "2020年2月", detail: "100%出資日本法人を設立。", sourceId: "rollout-knowbe4-japan-launch" };
  intelligence.customerProof = [
    { company: "お金のデザイン", products: "KSAT・PhishER", outcome: "手作り時比の作業工数を体感50〜60%削減、訓練hit率を約30%かsingle-digitへ低下と報告。", implication: "customer-reported・vendor-hosted。training cadenceや他security controlの寄与を分離できない。", sourceId: "rollout-knowbe4-moneydesign" },
    { company: "MAX", products: "Security Awareness Training", outcome: "海外向け資料作成・翻訳・練習の工数がほぼ不要と報告。", implication: "定量工数と独立監査はない。", sourceId: "rollout-knowbe4-max" },
  ];
  intelligence.roleLens = { salesMotion: "Enterprise AE、Sales Director、Partner AM、Sales Engineerがnew・expansion・channel・technical winを分担し、CISO Advisorがcategoryを作り、CSAがadoptionを担う。", compensation: "対象6roleの日本の数値給与・OTE・pay mix・equityは非公開。", quota: "AEはmonthly quota、DirectorはARR責任。額、attainment、ACV、cycle、credit ruleは非公開。", collaboration: "Sales、SE、CSA、Advisor、Partner、Product、Marketing、顧客CISO・SOC・HRが連携。" };
  addSources(intelligence, [
    { id: "rollout-knowbe4-company", label: "KnowBe4 company・leadership", url: "https://www.knowbe4.com/leadership/bryan-palma", kind: "企業公式", scope: "CEO・会社", checkedAt: researchedAt },
    { id: "rollout-knowbe4-ceo", label: "KnowBe4 Bryan Palma CEO就任", url: "https://www.knowbe4.com/press/knowbe4-appoints-bryan-palma-as-president-and-ceo", kind: "企業公式", scope: "CEO・current scale", checkedAt: researchedAt },
    { id: "rollout-knowbe4-jobs-20260817", label: "KnowBe4現行Tokyo求人", url: "https://boards-api.greenhouse.io/v1/boards/knowbe4/jobs?content=true", kind: "企業公式", scope: "7求人・対象6・言語・報酬非開示", checkedAt: researchedAt },
    { id: "rollout-knowbe4-2021-10k", label: "KnowBe4 FY2021 10-K", url: "https://www.sec.gov/Archives/edgar/data/1664998/000166499822000025/knbe-20211231.htm", kind: "法定開示", scope: "売上・損失・cash flow・FCF", checkedAt: researchedAt },
    { id: "rollout-knowbe4-2022-10q", label: "KnowBe4 Q3 2022 10-Q", url: "https://www.sec.gov/Archives/edgar/data/1664998/000166499822000118/knbe-20220930.htm", kind: "法定開示", scope: "Q3・9カ月・ARR・customers", checkedAt: researchedAt },
    { id: "rollout-knowbe4-japan-launch", label: "KnowBe4 Japan法人設立", url: "https://www.knowbe4.com/ja/press/knowbe4-japan-business-expansion", kind: "企業公式", scope: "2020年日本法人", checkedAt: researchedAt },
    { id: "rollout-knowbe4-tokyo", label: "KnowBe4 Tokyo location", url: "https://www.knowbe4.com/careers/locations/tokyo", kind: "企業公式", scope: "office・Hybrid・benefits", checkedAt: researchedAt },
    { id: "rollout-knowbe4-japan-cases", label: "KnowBe4 Japan customer cases", url: "https://www.knowbe4.com/ja/resources/case-studies", kind: "企業公式", scope: "国内導入数claim・事例", checkedAt: researchedAt },
    { id: "rollout-knowbe4-moneydesign", label: "KnowBe4・お金のデザイン事例", url: "https://www.knowbe4.com/hubfs/Japan/Knowbe4-MoneyDesign-CaseStudy.pdf?hsLang=ja", kind: "企業公式", scope: "国内工数・hit率", checkedAt: researchedAt },
    { id: "rollout-knowbe4-max", label: "KnowBe4・MAX事例", url: "https://www.knowbe4.com/hubfs/Japan/MAX_CaseStudy.pdf", kind: "企業公式", scope: "多言語訓練・工数", checkedAt: researchedAt },
    { id: "rollout-knowbe4-ipa-threats", label: "IPA 情報セキュリテ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI・BEC", checkedAt: researchedAt },
    { id: "rollout-b11-customs-usd", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円、1ユーロ=181.66円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchMambu(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2019", "日本市場活動開始・技術検証", "NTT DATAが日本初のMambu cloud core初期技術検証と簡易demoを発表。本番導入・進出年とはみなさない。", "rollout-mambu-nttdata");
  applyStandard(intelligence, buildCompactPatch({
    slug: "mambu", leaderName: "Fernando Zandona", leaderLabel: "CEO", leaderUrl: "https://mambu.com/en/mambu-leadership", localName: "非公開", localLabel: "日本責任者", localUrl: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job",
    companyId: "rollout-mambu-about", jobId: "rollout-mambu-jobs-20260817", customersId: "rollout-mambu-nttdata", externalId: "rollout-mambu-boj-cloud", financeId: "rollout-mambu-series-e",
    targets: ["銀行・貸金業・FinTechのCEO・COO", "CIO・CTO・エンタープライズ設計", "コアバンキング・デジタル・製品責任者", "運用・リスク・コンプライアンス・財務", "SI・販売代理店・クラウドpartner"], competitors: "Temenos、Thought Machine、10x Banking、Finastra、FIS、Fiserv、Oracle、既存core更新、段階内製・現状維持",
    feature: "Composable true-SaaS coreとしてDeposits、Lending、Payments、Islamic Banking、BaaS・embedded finance、greenfield・dual-core・migrationを提供する。", advantage: "product configurationとAPIを通じ、monolithic coreの全面更新でなく、新商品・segmentから段階的にmodernizationする選択肢を持つ。", benefit: "time-to-launch、change lead time、運用・保守負担を改善しながら、移行・reconciliation・resilience・exitをstage-gateで検証できる可能性がある。", evidence: "日本のnamed本番顧客・定量成果は確認できない。2019年のNTT DATA初期技術検証のみ確認。",
    marketVerdict: "結論：金融のcloud利用、legacy現代化、新商品・embedded financeが追い風。一方、resilience・third-party・移行riskの立証が必須。売上・ARR・利益は非公開。Japan RemoteのChannel AE 1求人を確認。", marketParagraphs: ["monolithic coreは長いrelease cycle、高い保守負担、複雑なintegrationで商品変更を遅らせる。", "ただしmission-criticalの全靮移行はdata accuracy、reconciliation、停止、DR、委託先集中、exitのriskが大きい。", "Genba分析：1商品・segmentのgreenfieldまたはdual-coreでlaunch時間、defect、API、RTO・RPO、migration error、運用cost、5〜10年TCOを比較する。"],
    cultureHeadline: "公式valuesはBe bold、customer-obsessed、accountable、one Mambu、curious and evolve、be you。現行Japan求人はJP-Remote、60日working abroad。", classification: "フルリモート", displayLabel: "JP-Remote・Employee of Record", officeDays: "明記なし", remoteOnly: "現行求人はJP-Remote", flexibility: "location-dependent Hybrid・Remote、60日working abroad",
    goodFor: ["FinTech・Core Bankingの大型変革を扱いたい", "directではなくpartner-led GTMを作りたい", "product速度とresilience・governanceを横断したい"], cautionFor: ["国内本番顧客のnamed proofを必須にする", "日本法人・officeの安定を必須にする", "製品終了・統合roadmapの不確実性を避けたい"],
    unresolved: [["財務", "2021年Series Eと事業scaleは公閏。", "current revenue、ARR、profit、FCF、NRR、cash、valuationは？"], ["日本entry", "2019年NTT DATA検証とJP-Remote roleを確認。", "法人、office、責任者、雇用主体、channel portfolio、supportは？"], ["国内proof", "技術検証は確認。", "本番顧客、稼働商品、移行規模、availability、time-to-market、renewalは？"], ["Product lifecycle", "Core・Payments・APIを提供。", "MPO廃止・Connector support縮小の期限、代替、migration support、contractは？"], ["Commercial", "Channel AEはNew ACVを担う。", "quota、OTE、pay mix、attainment、partner credit、ramp、担当社数は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "revenue、ARR、営業・純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-mambu-series-e"] },
    { label: "2021 Series E（historical）", value: "2.35億ユーロ（約426.9億円）調達／49億ユーロ（約8,901.3億円）評価額", detail: "調達・評価額は売上・利益でなく、現在価値でもない。", sourceIds: ["rollout-mambu-series-e", "rollout-b11-customs-usd"] },
    { label: "事業固有指標", value: "2.3億end users／1日5億超API calls／65カ国超／450超partners", detail: "current homepage claim。end-user数は他の公式資料の1億超・1.14億と定義・時点差がある。", sourceIds: ["rollout-mambu-home"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "551人（2025年10月末）", detail: "法定・準法定statement。2021年の800人と範囲・時点差がある。", sourceId: "rollout-mambu-slavery-2025" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "JP-Remote 1求人は現在人数を示さない。", sourceId: "rollout-mambu-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "公式office一覧にTokyo・Japanはない。", sourceId: "rollout-mambu-offices" };
  intelligence.companyStats.japanSince = { value: "法人・進出年は確認不能", detail: "2019年までにNTT DATA技術検証を確認。", sourceId: "rollout-mambu-nttdata" };
  intelligence.customerProof = [{ company: "NTT DATA（技術検証）", products: "Mambu cloud core・AWS・BeSTA FinTech Lab", outcome: "2019年に日本初の初期技術検証と簡易demoを公表。", implication: "本番導入、有償customer、business outcomeの証明ではない。", sourceId: "rollout-mambu-nttdata" }];
  intelligence.roleLens = { salesMotion: "Japan Channel AEがreseller portfolio経由のNew ACV、partner採用・onboarding・enablement・certification、joint GTMを担う。", compensation: "competitive base salaryとcompany equityは公式記載。金額、通貨、OTE、pay mixは非公開。", quota: "annual New ACVは責任範囲。額、attainment、partner・product credit、ramp、acceleratorは非公開。", collaboration: "Reseller・SI、Product、Legal、Professional Services、Customer Success、顧客CIO・Core・Riskが連携。" };
  intelligence.solutions = [
    { name: "Mambu Core", valueProp: "Deposits・Lendingをconfigurable SaaS coreとAPIで構築。", url: "https://mambu.com/en", competitors: "Temenos、Thought Machine、10x、既存core更新。", differentiation: "greenfield・dual-core・progressive modernizationを選べる。", retention: "account・loan・product・transactionが稼働すると継続利用の核になる。" },
    { name: "Mambu Payments", valueProp: "payment account・processingをcoreと接続する。", url: "https://mambu.com/en", competitors: "payment hub、processor、内製ledger。", differentiation: "composable coreと同じproduct・API文脈で扱う。", retention: "transaction volumeと商品拡張が継続利用を作るが、absolute volumeは非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-mambu-about", label: "Mambu About", url: "https://mambu.com/en/about-us", kind: "企業公式", scope: "創業・会社沿革", checkedAt: researchedAt },
    { id: "rollout-mambu-home", label: "Mambu official homepage", url: "https://mambu.com/en", kind: "企業公式", scope: "製品・users・API・国・partners", checkedAt: researchedAt },
    { id: "rollout-mambu-jobs-20260817", label: "Mambu現行Japan求人", url: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job", kind: "企業公式", scope: "Channel AE・Remote・報酬・言語非開示", checkedAt: researchedAt },
    { id: "rollout-mambu-series-e", label: "Mambu Series E 2021", url: "https://mambu.com/en/insights/press/mambu-raises-eur235-million-at-eur4-9-billion-valuation-in-eqt-growth-led-series-e", kind: "企業公式", scope: "historical funding・valuation", checkedAt: researchedAt },
    { id: "rollout-mambu-slavery-2025", label: "Mambu Modern Slavery Statement 2025", url: "https://cloud.mambu.com/hubfs/2026/Website/Modern_Slavery_Statement_-_2025.pdf", kind: "法定開示", scope: "HQ・金融機関・国・users・従業員", checkedAt: researchedAt },
    { id: "rollout-mambu-offices", label: "Mambu offices", url: "https://mambu.com/offices", kind: "企業公式", scope: "global offices・Japan office非確認", checkedAt: researchedAt },
    { id: "rollout-mambu-nttdata", label: "NTT DATA・Mambu初期技術検証", url: "https://www.nttdata.com/global/ja/news/services_info/2019/011701", kind: "企業公式", scope: "日本での技術検証", checkedAt: researchedAt },
    { id: "rollout-mambu-ecosystem", label: "Mambu ecosystem lifecycle notice", url: "https://ecosystem.mambu.com/", kind: "企業公式", scope: "Connectors・MPO phase-out", checkedAt: researchedAt },
    { id: "rollout-mambu-boj-cloud", label: "日本銀行 金融機関のcloud利用動向", url: "https://www.boj.or.jp/research/brp/fsr/fsrb240130.htm", kind: "公的機関", scope: "cloud利用・risk management", checkedAt: researchedAt },
    { id: "rollout-mambu-fsa-resilience", label: "金融庁 IT resilience report", url: "https://www.fsa.go.jp/news/r6/sonota/20250630-2/01.pdf", kind: "公的機関", scope: "障害・third-party・復旧", checkedAt: researchedAt },
    { id: "rollout-b11-customs-usd", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円、1ユーロ=181.66円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchLakera(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2025", "Check Pointが買収完了", "2025年10月22日にCheck PointがLakeraの買収を完了。", "rollout-lakera-acquisition");
  ensureMilestone(intelligence, "過去観測", "日本市場活動開始・過去採用", "過去Japan AEを確認したが、2026年8月17日の公式ATSは0件。進出年・現行体制の証明ではない。", "rollout-lakera-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "lakera", leaderName: "David Haber / Nadav Zafrir", leaderLabel: "VP, AI Security／Check Point CEO", leaderUrl: "https://www.checkpoint.com/press-releases/check-point-launches-ai-defense-plane-to-secure-the-agentic-enterprise-at-scale/", localName: "確認不能", localLabel: "Lakera日本責任者", localUrl: "https://jobs.ashbyhq.com/lakera.ai",
    companyId: "rollout-lakera-acquisition", jobId: "rollout-lakera-jobs-20260817", customersId: "rollout-lakera-customers", externalId: "rollout-lakera-meti-ai", financeId: "rollout-lakera-checkpoint-20f",
    targets: ["CISO・AIセキュリティ責任者", "AppSec・プロダクトセキュリティ", "AI・MLプラットフォーム・生成AI製品", "リスク・法務・コンプライアンス", "SOC・セキュリティ設計"], competitors: "model-provider guardrails、Protect AI、HiddenLayer、Prompt Security、CalypsoAI、WAF・DLP・API gateway、内製red team",
    feature: "AI Guardrails、AI Agent Security、AI Red Teamingでprompt injection、RAG poisoning、data leakage、unauthorized action、unsafe contentをpre-deploy・runtimeで検証・制御する。", advantage: "model・provider横断のred-team、runtime policy、Gandalf由来のthreat intelligenceをCheck Point AI Defense Planeと接続する。", benefit: "attack success、data・PII leak、tool misuse、policy incidentを下げつつ、false positive・latencyと安全なAI本番化を両立できる可能性がある。", evidence: "日本顧客事例は確認できない。Dropbox事例は低false positive・低latencyを定性的に説明するが、vendor-authoredでROI非開示。",
    marketVerdict: "結論：GenAI・RAG・agent本番化とsecurity-by-design・証跡要求が追い風。ただしLakera単体の売上・ARR・利益は非公開で、買収後2025年寄与はimmaterial。現行日本求人は0件。", marketParagraphs: ["provider guardrail、WAF、DLP、手動red teamだけではprompt injection、RAG poisoning、tool misuse、横断policyに空白が残る。", "runtime防御は過剰blockによるUX悪化、latency、日本語・domain適合、data residency、loggingが導入条件になる。", "Genba分析：1〜2本番appでattack success、false positive、p95 latency、leak、tool-policy incident、SOC工数を既存guardrail・内製と比較する。"],
    cultureHeadline: "公式valuesはLess but better、Take risks and learn、Drivers not passengers、Execute as one、In IT to win IT。現行日本求人0のため日本の勤務条件は確認不能。", classification: "未確認", displayLabel: "現行日本求人なし", officeDays: "該当なし", remoteOnly: "過去求人の条件を転用しない", flexibility: "Global Hybrid方針の日末適用は未確認",
    goodFor: ["AI SecurityとAppSecを横断したい", "runtimeとred-teamを同じプログラムで扱いたい", "Check Point統合後のcategoryを作りたい"], cautionFor: ["今すぐ応募できる日本roleを必須にする", "Lakera単体の財務を必須にする", "日本法人・専用team・国内caseを必須にする"],
    unresolved: [["日末体制", "過去Japan AEは確認。現行ATSは0件。", "Check Point JapanとLakeraの専任Sales・SE・CS、日末責任者、product ownershipは？"], ["単体財務", "取得価額と親連結は公閏。", "Lakera revenue、ARR、profit、customer、retention、買収後synergyは？"], ["Performance", ">98% detection、<50ms、<0.5% false positiveのvendor claimあり。", "日本語・domain・real traffic・競合条件での再現値は？"], ["Data・deployment", "SaaS・self-hostを選択可。", "Japan region、log・prompt retention、training use、subprocessor、SIEM、MCP・agent tool coverageは？"], ["Product integration", "Check Point AI Defense Planeへ統合。", "Lakera brand、pricing、contract、support、migration、bundle discount、roadmapは？"]],
  }));
  intelligence.facts = [
    { label: "Lakera単体の年間売上・稼ぐ力", value: "非公開", detail: "2025年取得後の年末までの売上・営業成績寄与はCheck Point 20-F上immaterial。", sourceIds: ["rollout-lakera-checkpoint-20f"] },
    { label: "取得対価", value: "2.018億米ドル（約321.6億円）", detail: "goodwill 1.501億米ドル等。売上・valuationではない。", sourceIds: ["rollout-lakera-checkpoint-20f", "rollout-b11-boj-usd"] },
    { label: "Vendor-reported technical scale", value: ">98% detection／<50ms latency／<0.5% false positive／8,000万超adversarial patterns", detail: "比較条件・日本語での独立再現は確認できない。", sourceIds: ["rollout-lakera-acquisition"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "公式は11 PhDsと説明するが、買収後のLakera専用headcountは確認できない。", sourceId: "rollout-lakera-acquisition" };
  intelligence.companyStats.japanHeadcount = { value: "確認不能", detail: "現行日本求人0。", sourceId: "rollout-lakera-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "Lakera専用officeは確認不能", detail: "Check Point Japan拠点をLakera専用体制とみなさない。", sourceId: "rollout-lakera-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "過去にJapan AE採用", detail: "進出年・法人・現行体制の証明ではない。", sourceId: "rollout-lakera-jobs-20260817" };
  intelligence.customerProof = [{ company: "日本named customer", products: "Lakera Guard・AI Security", outcome: "公式の国内顧客名・定量成果は確認できない。", implication: "Dropbox・匿名EdTechのglobal vendor caseを日末実績へ外挿しない。", sourceId: "rollout-lakera-customers" }];
  intelligence.roleLens = { salesMotion: "2026年8月17日時点で公式Ashby boardは0求人。過去Japan AEは終了とし、現行のSales・SE・CS・channel分担を推測しない。", compensation: "現行日本roleがなく、日末向け給与・OTE・equityは該当なし。", quota: "現行のJapan quota、attainment、ACV、cycle、partner creditは非公開。", collaboration: "Check Point AI Security、ThreatCloud、Sales・SE・Support、顧客CISO・AppSec・AI Platformの境界は選考・商談で確認が必要。" };
  addSources(intelligence, [
    { id: "rollout-lakera-jobs-20260817", label: "Lakera official Ashby board API", url: "https://api.ashbyhq.com/posting-api/job-board/lakera.ai", kind: "企業公式", scope: "現行求人0・過去Japan AE終了", checkedAt: researchedAt },
    { id: "rollout-lakera-acquisition", label: "Check Point・Lakera買収発表", url: "https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/", kind: "企業公式", scope: "創業・買収・技術指標", checkedAt: researchedAt },
    { id: "rollout-lakera-checkpoint-20f", label: "Check Point FY2025 20-F", url: "https://www.sec.gov/Archives/edgar/data/1015922/000117891326001932/zk2634942.htm", kind: "法定開示", scope: "取得対価・無形資産・Lakera寄与", checkedAt: researchedAt },
    { id: "rollout-lakera-customers", label: "Lakera customer stories", url: "https://www.lakera.ai/customers", kind: "企業公式", scope: "global customer evidence・vendor claim", checkedAt: researchedAt },
    { id: "rollout-lakera-meti-ai", label: "経済産業省 AI事業者ガイドライン1.2", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI risk governance・security-by-design", checkedAt: researchedAt },
    { id: "rollout-lakera-ipa-ai-security", label: "IPA AIセキュリティ", url: "https://www.ipa.go.jp/digital/ai/security/index.html", kind: "公的機関", scope: "AI固有risk・対策", checkedAt: researchedAt },
    { id: "rollout-b11-boj-usd", label: "日本銀行 2026年8月14日外国為替市況", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算（1米ドル=159.38円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchLighthouse(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2021", "日本語提供・日本市場活動開始を確認", "2021年までに日本語UIと日本国内customer storyを公開。法人設立・正式進出年は確認不能。", "rollout-lighthouse-park-front");
  applyStandard(intelligence, buildCompactPatch({
    slug: "lighthouse", leaderName: "Sean Fitzpatrick", leaderLabel: "CEO", leaderUrl: "https://www.mylighthouse.com/company/about", localName: "非公開", localLabel: "日本責任者", localUrl: "https://job-boards.eu.greenhouse.io/lighthouse/jobs/4500582101",
    companyId: "rollout-lighthouse-about", jobId: "rollout-lighthouse-jobs-20260817", customersId: "rollout-lighthouse-park-front", externalId: "rollout-lighthouse-tourism", financeId: "rollout-lighthouse-finance",
    targets: ["ホテルowner・総支配人", "レベニューマネージャー・クラスター・ポートフォリオ", "CRO・コマーシャル責任者", "営業・マーケティング・EC・流通", "財務・IT・DMO・観光組織"], competitors: "IDeaS、Duetto、Amadeus、RateGain、SiteMinder、Cloudbeds、PMS・CRS report、OTA extranet、spreadsheet・内製BI",
    feature: "Pricing、Performance、Direct、Distribution、reservation・payments、Data Solutions、Commercial Strategy ServicesをAI commercial operating platformで提供。", advantage: "external market・demand、property・portfolio BI、pricing recommendation・automation、direct・distributionを一つのcommercial workflowで扱う。", benefit: "manual rate shop・reporting時間、decision speed、forecast error、rate parity、ADR・occupancy・RevPAR、direct shareを改善できる可能性がある。", evidence: "The Park Front Hotelはdata収集・資料作成が約半日から数click・約1分になったとcustomer storyで説明。",
    marketVerdict: "結論：日本宿泊需要の変動、人手不足・生産性制約、PMS・OTA・search・event data分断が追い風。ARR 1億米ドル超（約159.4億円超）だが売上ではなく、group利益は非公開。Japan RemoteのAE 1件を確認。", marketParagraphs: ["manual rate shop・reportingは需要peak、underpricing、parity、OTA依存、portfolio不整合への対応を遅らせる。", "hotelのcommercial stackはPMS・RMS・CRS・channel・BIと重複するため、local integration、explainability、recommendation adoption、日本語support、TCOが選定条件。", "Genba分析：1〜3施設・90日でanalyst hours、decision speed、forecast error、adoption、ADR・RevPAR、parity、direct shareをbaseline・holdout比較する。"],
    cultureHeadline: "公式valuesはPursuit of greatness、Meaningful work matters、Elevate each other。現行Japan roleはFull-Time Remote、fluent Japanese・English。", classification: "フルリモート", displayLabel: "Greater Tokyo・Remote", officeDays: "明記なし", remoteOnly: "現行求人はFull-Time Remote", flexibility: "Global careersはflexible environment・benefits vary by regionと説明",
    goodFor: ["HospitalityとData・AIの営業を横断したい", "self-sourced pipelineでJapan marketを作りたい", "pricingだけでなくcommercial stack全体を売りたい"], cautionFor: ["日本法人・office・責任者を必須にする", "group監査財務を必須にする", "日本の数値報酬・quota開示を必須にする"],
    unresolved: [["Group finance", "ARR 1億米ドル超（約159.4億円超）と2024年growth investmentは公閏。", "recognized revenue、gross・operating・net profit、EBITDA、FCF、NRRは？"], ["法定entity", "UK entity FY2024財務は開示。", "group連結との範囲、transfer pricing、revenue recognition、その他entityは？"], ["日末体制", "Greater Tokyo Remote AEと日本語UI・事例を確認。", "法人、office、責任者、SE・CS・support、Japan revenue・customersは？"], ["Customer outcomes", "国内customer quoteで時間削減を確認。", "ADR・RevPAR・profitのholdout、PMS・運用・市況寄与、renewalは？"], ["Commercial", "AEは3x coverage・MEDDPICCを要件化。", "給与、OTE、quota額、attainment、ACV、cycle、equityは？"]],
  }));
  intelligence.facts = [
    { label: "Group年間売上・稼ぐ力", value: "非公開", detail: "連結revenue、営業・純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-lighthouse-finance"] },
    { label: "年間売上規模の参考値（ARR）", value: "1億米ドル超（約159.4億円超）", detail: "現行求人のcompany-reported run-rate。売上高ではない。", sourceIds: ["rollout-lighthouse-jobs-20260817", "rollout-b11-boj-usd"] },
    { label: "UK entity FY2024（group連結ではない）", value: "turnover 2,595.8万ポンド（約55.6億円）／営業利益162.0万ポンド（約3.5億円）", detail: "cost-plusでgroup entityへ費用charge。entity turnoverをgroup売上とみなさない。", sourceIds: ["rollout-lighthouse-uk-accounts", "rollout-b11-boj-gbp"] },
    { label: "事業固有指標", value: "8万超hotels／185カ国／400超technology partners", detail: "現行求人は850人超・35カ国、top 15 global chainsと説明。", sourceIds: ["rollout-lighthouse-scale", "rollout-lighthouse-jobs-20260817"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "850人超・35カ国", detail: "現行公式求人のcompany profile。", sourceId: "rollout-lighthouse-jobs-20260817" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Remote AE 1求人とJapan BDMのevent登壇は全人数を示さない。", sourceId: "rollout-lighthouse-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "Greater Tokyoは求人location。常設officeの証明ではない。", sourceId: "rollout-lighthouse-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2021年までに日本語UI・国内case", detail: "正式進出・法人設立年は非公開。", sourceId: "rollout-lighthouse-park-front" };
  intelligence.customerProof = [
    { company: "The Park Front Hotel at Universal Studios Japan", products: "Lighthouse", outcome: "data収集・資料作成約半日から数click・約1分へ短縮と報告。", implication: "vendor-authored customer quote。監査済みROI・RevPARはない。", sourceId: "rollout-lighthouse-park-front" },
    { company: "Pacifica Capital K.K.", products: "Lighthouse", outcome: "internal・market・competitor dataのheavy liftingの80〜90%をLighthouseが担うとcustomer quote。", implication: "主観的帰属で、売上uplift・対照群はない。", sourceId: "rollout-lighthouse-pacifica" },
  ];
  intelligence.roleLens = { salesMotion: "Japan Remote AEがfull-cycle hunterとしてself-sourced pipeline、3x coverage、MEDDPICC、new logoを担う。", compensation: "日本の給与、OTE、pay mix、equity、benefitsは非公開。", quota: "3x coverageは要件。quota額、attainment、ACV、cycle、new・expansion・product creditは非公開。", collaboration: "Sales、Product、Customer Success、Partner、顧客GM・Revenue・Commercial・ITが連携。" };
  addSources(intelligence, [
    { id: "rollout-lighthouse-about", label: "Lighthouse About", url: "https://www.mylighthouse.com/company/about", kind: "企業公式", scope: "創業・経営・製品", checkedAt: researchedAt },
    { id: "rollout-lighthouse-jobs-20260817", label: "Lighthouse現行Japan求人", url: "https://job-boards.eu.greenhouse.io/lighthouse/jobs/4500582101", kind: "企業公式", scope: "AE・Remote・言語・ARR", checkedAt: researchedAt },
    { id: "rollout-lighthouse-finance", label: "Lighthouse Series C growth investment", url: "https://www.mylighthouse.com/ja/resources/blog/lighthouse-announces-370-million-series-c-investment-led-by-kkr-to-accelerate-platform-innovation-and-growth", kind: "企業公式", scope: "2024 growth investment・scale", checkedAt: researchedAt },
    { id: "rollout-lighthouse-uk-accounts", label: "Lighthouse Intelligence Ltd FY2024 accounts", url: "https://find-and-update.company-information.service.gov.uk/company/08178250/filing-history/MzQ4Mzk4ODg4NGFkaXF6a2N4/document?format=pdf&download=0", kind: "法定開示", scope: "UK entity turnover・profit・transfer pricing", checkedAt: researchedAt },
    { id: "rollout-lighthouse-scale", label: "Lighthouse 2026 company scale", url: "https://www.mylighthouse.com/resources/blog/lighthouse-named-to-fast-company-most-innovative-companies-2026", kind: "企業公式", scope: "hotels・company scale", checkedAt: researchedAt },
    { id: "rollout-lighthouse-park-front", label: "Lighthouse・The Park Front Hotel事例", url: "https://www.mylighthouse.com/ja/resources/customer-stories/park-front-hotel-jp", kind: "企業公式", scope: "国内workflow時間削減", checkedAt: researchedAt },
    { id: "rollout-lighthouse-pacifica", label: "Lighthouse・Pacifica Capital事例", url: "https://www.mylighthouse.com/resources/customer-stories/pacifica-capital", kind: "企業公式", scope: "国内customer quote", checkedAt: researchedAt },
    { id: "rollout-lighthouse-tourism", label: "観光庁 観光白書2026", url: "https://www.mlit.go.jp/kankocho/news02_00092.html", kind: "公的機関", scope: "宿泊業の人手・生産性・resilience", checkedAt: researchedAt },
    { id: "rollout-b11-boj-usd", label: "日本銀行 2026年8月14日外国為替市況", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算（1米ドル=159.38円）", checkedAt: researchedAt },
    { id: "rollout-b11-boj-gbp", label: "日本銀行 2026年8月報告省令レート", url: "https://www.boj.or.jp/about/services/tame/tame_rate/syorei/hou2608.htm", kind: "公的機関", scope: "円換算（1ポンド=214.13円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchEleven(records: Record<string, CompanyPublicIntelligence>) {
  if (records.ideals) patchIdeals(records.ideals);
  if (records.knowbe4) patchKnowBe4(records.knowbe4);
  if (records.lakera) patchLakera(records.lakera);
  if (records.lighthouse) patchLighthouse(records.lighthouse);
  if (records.mambu) patchMambu(records.mambu);
}
