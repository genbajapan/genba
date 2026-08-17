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

function patchSchrodinger(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "1990", "創業", "計算化学・分子設計software企業として創業。", "rollout-sch-company");
  ensureMilestone(intelligence, "2002", "日本法人設立", "Schrödinger K.K.を東京で設立。", "rollout-sch-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "schrodinger", leaderName: "Ramy Farid", leaderLabel: "President・CEO", leaderUrl: "https://www.schrodinger.com/about/leadership/", localName: "Schrödinger K.K.", localLabel: "日本法人", localUrl: "https://www.schrodinger.com/schrodinger-kk/",
    companyId: "rollout-sch-company", jobId: "rollout-sch-jobs-20260817", customersId: "rollout-sch-panasonic", externalId: "rollout-sch-meti-health", financeId: "rollout-sch-q1-2026",
    targets: ["製薬・biotechのR&D", "材料・化学・electronics R&D", "計算化学・CAE・data science", "研究IT・informatics", "企業venture・drug discovery partnership"], competitors: "BIOVIA、OpenEye、Cresset、Materials Studio、Ansys・Altair、generic AI、in-house simulation・実験screening",
    feature: "physics-based molecular simulation、AI・ML、FEP+、LiveDesign、Materials Science workflowと自社drug discoveryを統合。", advantage: "ground-truth physicsとenterprise research workflowを組み合わせ、候補生成だけでなく予測・共有・実験判断まで接続できる。", benefit: "合成・実験前の候補絞り込み、simulation turnaround、研究者工数、design cycle、成功確率を改善できる可能性がある。", evidence: "Panasonicとの材料事例は1,400万候補から9,000件のDFT、50超の有望候補を評価し、再配置energyを最大22%低減したと報告。個別共同研究のvendor caseで一般化不可。",
    marketVerdict: "結論：創薬・材料R&Dの高コスト化とAI活用がphysics-based validation需要を作る。Q1 FY2026は売上5,850万米ドル（約92.2億円）、純損失6,000万米ドル（約94.5億円）。日本の現行2求人を確認。", marketParagraphs: ["研究者不足と巨大なchemical design spaceにより、実験だけでは探索速度・費用・再現性に限界がある。", "BuyerはAIの生成数でなく、holdout精度、physics consistency、実験validation、IP・security、既存research workflowへの定着を求める。", "Genba分析：限定use caseでprediction error、候補削減、cycle time、compute・research hours、実験hit rateをbaseline比較する。"],
    cultureHeadline: "scientific rigorとcommercial outcomeを両立。日本の2求人は柔軟な働き方を掲げるが、出社日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・柔軟な働き方", officeDays: "非公開", remoteOnly: "full remoteの明記なし", flexibility: "Applications Scientistは出張あり",
    goodFor: ["scienceを顧客価値へ翻訳したい", "長期R&Dの意思決定へ入りたい", "physics・AI・実験を横断したい"], cautionFor: ["GAAP黒字を必須にする", "短いtransactional saleを好む", "domain scienceの学習を避けたい"],
    unresolved: [["Territory", "Materials SalesとApplicationsの2求人を確認。", "Life Science・Materials別のnamed accounts、installed base、white spaceは？"], ["Compensation", "数値報酬は非公開。", "base、OTE、pay mix、quota、ramp、attainment、equityは？"], ["Japan scale", "2002年日本法人を確認。", "Japan revenue、customers、headcount、Sales・Applications・Support人数は？"], ["Validation", "Panasonicの定量事例あり。", "PoCのgold set、error threshold、実験validation、IP・data boundaryは？"], ["Career", "scientific salesとapplication roleを募集。", "昇進、technical-commercial移動、manager span、離職の具体例は？"]],
  }));
  intelligence.marketStatus.growthSummary = "Q1 FY2026 total revenue 5,850万米ドル（約92.2億円）、software revenue 3,560万米ドル、drug discovery revenue 2,290万米ドル。";
  intelligence.facts = [
    { label: "Q1 FY2026売上", value: "5,850万米ドル（約92.2億円）", detail: "softwareは3,560万、drug discoveryは2,290万米ドル。", sourceIds: ["rollout-sch-q1-2026", "rollout-b15-customs-fx"] },
    { label: "Q1 FY2026稼ぐ力", value: "純損失6,000万米ドル（約94.5億円）", detail: "cash等は4.06億米ドル。黒字化を補完しない。", sourceIds: ["rollout-sch-q1-2026", "rollout-b15-customs-fx"] },
    { label: "FY2025", value: "売上2.559億米ドル（約403.2億円）／純損失1.033億米ドル（約162.8億円）", detail: "software gross margin 74%。期間をQ1と分離。", sourceIds: ["rollout-sch-fy2025", "rollout-b15-customs-fx"] },
  ];
  intelligence.companyStats.japanOffice = { value: "Schrödinger K.K.・東京", detail: "日本法人は2002年設立。", sourceId: "rollout-sch-japan" };
  intelligence.companyStats.japanSince = { value: "2002年", detail: "公式日本法人情報。", sourceId: "rollout-sch-japan" };
  intelligence.marketStatus.capitalMarketRead = { asOf: "2026年8月17日", metrics: [{ label: "Q1売上", value: "5,850万米ドル（約92.2億円）", change: "software -21%・drug discovery増", interpretation: "hosted licensing移行とcollaboration収益でmixが変動。", sourceId: "rollout-sch-q1-2026" }, { label: "純損失", value: "6,000万米ドル（約94.5億円）", change: "赤字継続", interpretation: "software growthとR&D投資・drug pipeline riskを分けて評価。", sourceId: "rollout-sch-q1-2026" }], growthDrivers: [{ title: "hosted software・platform expansion", evidence: "2026 ACV guidanceは2.18〜2.28億米ドル（約343.5〜359.2億円）。", japanMeaning: "Materials SalesとApplications採用で日本のcommercial・technical coverageを強化。", sourceIds: ["rollout-sch-q1-2026", "rollout-sch-jobs-20260817"] }], risks: [{ title: "GAAP赤字・R&D・revenue mix", disclosedRisk: "drug program、collaboration milestone、hosted transitionでperiod revenueが変動する。", companyResponse: "software ACV成長とplatform・pipelineを並行投資。", genbaRead: "Japan pipeline、renewal、materials adoption、cash runwayを分けて確認する。", sourceIds: ["rollout-sch-q1-2026", "rollout-sch-fy2025"] }], japanCommitment: { verdict: "2002年日本法人と現行2求人、国内materials caseを確認。日本売上・人数は非公開。", summary: "SalesとApplicationsを同時採用。", signals: [{ year: "2026", title: "日本2求人", detail: "Materials Account ManagerとApplications Scientist。", sourceIds: ["rollout-sch-jobs-20260817"] }], unknowns: ["Japan revenue・customer・headcount", "quota・attainment・ACV", "hosted移行のJapan impact"] }, scenarios: [{ scenario: "基本", title: "software ACV成長", body: "hosted platformとmaterials・life science adoptionが拡大。" }, { scenario: "上振れ", title: "simulation＋AI標準化", body: "physics validationがAI discovery workflowの標準になる。" }, { scenario: "下振れ", title: "赤字・program volatility", body: "R&D支出とcollaboration milestoneで収益が変動。" }], sourceIds: ["rollout-sch-q1-2026", "rollout-sch-fy2025", "rollout-sch-jobs-20260817"] };
  intelligence.customerProof = [{ company: "Panasonic", products: "Materials Science・ML・DFT", outcome: "1,400万候補をenumerateし9,000件をDFT、50超の候補を特定。reorganization energyを最大22%低減。", implication: "特定材料設計の共同caseで独立監査・一般化はない。", sourceId: "rollout-sch-panasonic" }];
  intelligence.roleLens = { salesMotion: "Account Managerがpipeline・full-cycle・expansion、Applications Scientistがdemo・training・technical adoptionを担う。", compensation: "competitive salary等の定性記載のみ。数値給与・OTEは非公開。", quota: "quota、attainment、ACV、cycle、portfolioは非公開。", collaboration: "Sales、Applications、Product、Researchと顧客のscientist・R&D・IT・Procurementを横断。" };
  addSources(intelligence, [
    { id: "rollout-sch-company", label: "Schrödinger company", url: "https://www.schrodinger.com/about/", kind: "企業公式", scope: "会社・platform・leadership", checkedAt: researchedAt },
    { id: "rollout-sch-japan", label: "Schrödinger K.K.", url: "https://www.schrodinger.com/schrodinger-kk/", kind: "企業公式", scope: "日本法人", checkedAt: researchedAt },
    { id: "rollout-sch-jobs-20260817", label: "Schrödinger Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/schrdinger/jobs?content=true", kind: "企業公式", scope: "現行日本求人2件・終了反証", checkedAt: researchedAt },
    { id: "rollout-sch-q1-2026", label: "Schrödinger Q1 2026", url: "https://www.sec.gov/Archives/edgar/data/1490978/000149097826000036/sdgr-20260331x8kxexx991.htm", kind: "法定開示", scope: "売上・純損失・cash", checkedAt: researchedAt },
    { id: "rollout-sch-fy2025", label: "Schrödinger FY2025", url: "https://www.sec.gov/Archives/edgar/data/1490978/000149097826000009/sdgr-20251231xexx991.htm", kind: "法定開示", scope: "通期売上・利益・margin", checkedAt: researchedAt },
    { id: "rollout-sch-panasonic", label: "Schrödinger・Panasonic case", url: "https://www.schrodinger.com/life-science/learn/case-studies/de-novo-design-hole-conducting-molecules-organic-electronics/", kind: "企業公式", scope: "国内材料R&D定量case", checkedAt: researchedAt },
    { id: "rollout-sch-meti-health", label: "経産省 Healthcare Industries", url: "https://www.meti.go.jp/policy/mono_info_service/healthcare/index.html", kind: "公的機関", scope: "創薬・healthcare政策環境", checkedAt: researchedAt },
    { id: "rollout-b15-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchSensorTower(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2013", "創業", "mobile・digital market intelligence企業として創業。", "rollout-st-company");
  ensureMilestone(intelligence, "2021", "日本進出", "2021年春にJapan teamを開始。", "rollout-st-japan-office");
  applyStandard(intelligence, buildCompactPatch({
    slug: "sensor-tower", leaderName: "Oliver Yeh", leaderLabel: "Co-founder・CEO", leaderUrl: "https://sensortower.com/about", localName: "公開情報で確認不能", localLabel: "Japan責任者", localUrl: "https://sensortower.com/ja/blog/sensor-tower-japan-office-relocation",
    companyId: "rollout-st-company", jobId: "rollout-st-jobs-20260817", customersId: "rollout-st-unext", externalId: "rollout-st-meti-ec", financeId: "rollout-st-company",
    targets: ["モバイルapp・gaming", "デジタル広告・agency", "小売・ecommerce・CPG", "メディア・entertainment", "金融・investment・market intelligence"], competitors: "data.ai系legacy、Similarweb、AppMagic、Apptopia、Semrush、adjust・AppsFlyer、platform-native analytics、survey・internal BI",
    feature: "mobile、web、digital advertising、gaming、audienceのmarket intelligenceを統合し、acquisitionしたdata.ai・AppMagic等をportfolioへ組み込む。", advantage: "自社performance dataだけでは見えないcompetitor、category、広告、audienceの相対位置を同じcommercial workflowで比較できる。", benefit: "market selection、campaign、creative、product、partnership、investment判断を早め、portfolio・顧客の相対performanceを説明できる。", evidence: "U-NEXTは4〜5年利用し、internal dataとの強い相関と施策の相対performance・ROI判断を報告。定量upliftは非公開。",
    marketVerdict: "結論：mobile・web・広告・commerceの分断とprivacy制約が外部market intelligence需要を作る。非公開会社で売上・利益は非公開。東京の現行5 ATS record（実質4職種）を確認。", marketParagraphs: ["platform別dashboardと自社dataだけでは、市場規模、競合、creative、audience、category shiftを同じ定義で比較しにくい。", "Buyerはcoverage、推計method、privacy、historical continuity、API・workflow、decision accuracy、価格を求める。", "Genba分析：既知のinternal actualと推計値のcorrelation、decision lead time、campaign・product判断、analyst hoursをPoCで比較する。"],
    cultureHeadline: "small・fast-paced teamでownershipを重視。東京求人は火・木office、週3日在宅のHybrid。", classification: "ハイブリッド", displayLabel: "東京Hybrid", officeDays: "火・木の週2日", remoteOnly: "週3日在宅", flexibility: "現行5 ATS record共通のHybrid表記",
    goodFor: ["dataをexecutive decisionへ変えたい", "JapanとAPAC GTMを横断したい", "renewal・expansion・partnerを作りたい"], cautionFor: ["認識売上・利益の透明性を必須にする", "完全なremoteを求める", "推計dataのvalidationを避けたい"],
    unresolved: [["Records", "5 ATS record・実質4職種を確認。", "Team Director英日2票は同一採用枠か、採用人数はいくつか？"], ["Compensation", "数値報酬は非公開。", "base、OTE、bonus、quota、ramp、attainment、equityは？"], ["Japan scale", "2021年Japan team・東京officeを確認。", "Japan revenue、customers、headcount、leadership、Sales・AM・Marketing人数は？"], ["Data quality", "U-NEXTはinternal dataとの相関を報告。", "category別error、method change、privacy、coverage、SLAをどう検証する？"], ["Account economics", "AMはNRR、renewal、upsellを担当。", "portfolio、NRR target、renewal calendar、product penetration、creditは？"]],
  }));
  intelligence.marketStatus.growthSummary = "売上、ARR、operating・net income、FCFは非公開。公式求人は2,500社超のenterprise利用を掲載するが財務指標ではない。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "private company。認識売上、ARR、profit、FCFを確認できない。", sourceIds: ["rollout-st-company"] },
    { label: "事業固有規模", value: "2,500社超", detail: "現行求人のglobal enterprise利用。paid・free内訳、Japan内訳は非公開。", sourceIds: ["rollout-st-jobs-20260817"] },
    { label: "portfolio", value: "data.ai・AppMagic等を買収", detail: "買収金額・統合後売上・利益は非公開。", sourceIds: ["rollout-st-dataai", "rollout-st-appmagic"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京都荒川区東日暮里6-42-1 2F", detail: "2023年の公式office移転記事。", sourceId: "rollout-st-japan-office" };
  intelligence.companyStats.japanSince = { value: "2021年", detail: "2021年春にJapan team開始。", sourceId: "rollout-st-japan-office" };
  intelligence.customerProof = [{ company: "U-NEXT", products: "Sensor Tower Digital Intelligence", outcome: "4〜5年利用。internal measuresとの強い相関と相対performance・ROI判断を報告。", implication: "具体的な売上・工数upliftは非公開。vendor-selected case。", sourceId: "rollout-st-unext" }];
  intelligence.roleLens = { salesMotion: "Agency Partner、Account Director、AM Director、APAC PMMでJapanのrenewal・upsell・partner・positioningを拡張。", compensation: "数値給与・OTEは全件非公開。", quota: "NRR、renewal、upsell責任は明記されるがtarget・attainment・portfolioは非公開。", collaboration: "Sales、AM、Product、Engineering、Marketing、Supportと顧客のC-level・data・marketingを横断。" };
  addSources(intelligence, [
    { id: "rollout-st-company", label: "Sensor Tower company", url: "https://sensortower.com/about", kind: "企業公式", scope: "会社・製品・規模", checkedAt: researchedAt },
    { id: "rollout-st-jobs-20260817", label: "Sensor Tower Ashby API", url: "https://api.ashbyhq.com/posting-api/job-board/sensor-tower", kind: "企業公式", scope: "現行日本求人5 record・終了反証", checkedAt: researchedAt },
    { id: "rollout-st-japan-office", label: "Sensor Tower Japan office", url: "https://sensortower.com/ja/blog/sensor-tower-japan-office-relocation", kind: "企業公式", scope: "日本進出・office", checkedAt: researchedAt },
    { id: "rollout-st-unext", label: "Sensor Tower・U-NEXT", url: "https://sensortower.com/ja/unext-customer-story-JP", kind: "企業公式", scope: "国内顧客case", checkedAt: researchedAt },
    { id: "rollout-st-dataai", label: "Sensor Tower acquires data.ai", url: "https://sensortower.com/press/press-release-sensor-tower-acquires-market-intelligence-platform-data-ai", kind: "企業公式", scope: "portfolio・scale", checkedAt: researchedAt },
    { id: "rollout-st-appmagic", label: "Sensor Tower acquires AppMagic", url: "https://sensortower.com/press/press-release-sensor-tower-acquires-appmagic-adding-dedicated-smb-solution-to-comprehensive-suite-of-digital-intelligence", kind: "企業公式", scope: "SMB portfolio", checkedAt: researchedAt },
    { id: "rollout-st-meti-ec", label: "経産省 電子商取引市場調査", url: "https://www.meti.go.jp/policy/it_policy/statistics/outlook/ie_outlook.html", kind: "公的機関", scope: "digital commerce外部環境", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchShopify(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2006", "創業", "commerce platformとして創業。", "rollout-shopify-company");
  ensureMilestone(intelligence, "確認不能", "日本事業開始年は確認不能", "現行日本市場組織・求人は確認できるが、公式一次資料で開始年を確定できない。", "rollout-shopify-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "shopify", leaderName: "Tobi Lütke", leaderLabel: "Founder・CEO", leaderUrl: "https://www.shopify.com/about", localName: "日本市場組織", localLabel: "Japan", localUrl: "https://www.shopify.com/jp/",
    companyId: "rollout-shopify-company", jobId: "rollout-shopify-jobs-20260817", customersId: "rollout-shopify-sanyo", externalId: "rollout-shopify-meti-ec", financeId: "rollout-shopify-fy2025",
    targets: ["D2C・小売・omnichannel", "大企業commerce", "B2B商取引", "決済・financial services", "commerce app・技術partner"], competitors: "Adobe Commerce、Salesforce Commerce Cloud、BigCommerce、commercetools、SAP Commerce、EC-CUBE・makeshop等国内platform、custom commerce・marketplace",
    feature: "online・POS・B2B・international・payments・checkout・marketing・analytics・app ecosystemを一つのcommerce operating platformへ統合。", advantage: "merchantの立ち上げからenterprise・global scaleまで、core platformとpartner ecosystemを同じdata・checkout・adminで拡張できる。", benefit: "site release、conversion、GMV、operating cost、channel・country expansion、partner integrationの速度を改善できる可能性がある。", evidence: "三陽商会は8 EC siteを統合し、前年同期比GMV 115%、session 120%、full-price商品売上120%を報告。vendor-selected caseでShopify単独因果ではない。",
    marketVerdict: "結論：EC・店舗・B2B・AI shoppingの融合がcommerce再構築需要を作る。FY2025売上は約116億米ドル（約1.83兆円）、FCF margin 17%。日本の現行対象求人はProduct Partnerships Lead 1件。", marketParagraphs: ["channel・country・payment・logistics・marketingごとの分断は、change lead time、data consistency、conversion、運用costを悪化させる。", "Buyerはcheckout・scaleだけでなく、migration、local payment・logistics、data・security、partner availability、3〜5年TCO、platform riskを求める。", "Genba分析：代表brand・marketでGMV、conversion、release lead time、operating hours、platform・app cost、availabilityをbaseline比較する。"],
    cultureHeadline: "Digital by Design。約8,000人規模でremoteを基本に、onboarding・Summit・Burst等の対面機会が年3回程度。", classification: "フルリモート", displayLabel: "日本Remote・Digital by Design", officeDays: "定常出社の明記なし", remoteOnly: "Remote", flexibility: "年3回程度の対面travelを会社Careerが案内",
    goodFor: ["product ecosystemを日本で作りたい", "commerceの複数buyerを横断したい", "remoteでglobal productと協働したい"], cautionFor: ["対面機会・travelを避けたい", "単一の短期partner dealだけを好む", "platform ecosystemの競合・利害調整を避けたい"],
    unresolved: [["Partnership scope", "現行1求人を確認。", "priority partner category、named targets、integration・commercial ownershipは？"], ["Compensation", "数値報酬は非公開。", "base、bonus、equity、target、ramp、attainmentは？"], ["Japan scale", "日本Remote roleを確認。", "Japan GMV、revenue、merchant、headcount、decision rightsは？"], ["Partner economics", "複雑なproduct agreementを担当。", "sourced revenue、merchant adoption、app attach、co-marketingのKPIは？"], ["Platform risk", "FY2025 growth・FCFを確認。", "migration failure、outage、app dependency、data・AI governanceをどう評価する？"]],
  }));
  intelligence.marketStatus.growthSummary = "FY2025 revenue約116億米ドル（約1.83兆円、30%増）、FCF約20億米ドル（約3,151億円）、FCF margin 17%。";
  intelligence.facts = [
    { label: "FY2025売上", value: "約116億米ドル（約1.83兆円）", detail: "前年比30%増。会社発表のrounded value。", sourceIds: ["rollout-shopify-fy2025", "rollout-b15-customs-fx"] },
    { label: "FY2025稼ぐ力", value: "FCF約20億米ドル（約3,151億円）", detail: "FCF margin 17%。non-GAAP cash metricとして扱う。", sourceIds: ["rollout-shopify-fy2025", "rollout-b15-customs-fx"] },
    { label: "事業固有規模", value: "数百万merchant・175+カ国・merchant sales 1兆米ドル超（約157.6兆円）", detail: "現行求人のglobal scale。Shopify売上高と混同しない。", sourceIds: ["rollout-shopify-jobs-20260817"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "約8,000人", detail: "Career掲載値。個別求人は8,300+表記で差がある。", sourceId: "rollout-shopify-careers" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行対象求人は1件。", sourceId: "rollout-shopify-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "現行日本市場組織・求人は確認できるが開始年は一次情報で確定できない。", sourceId: "rollout-shopify-jobs-20260817" };
  intelligence.marketStatus.capitalMarketRead = { asOf: "2026年8月17日", metrics: [{ label: "FY2025売上", value: "約116億米ドル（約1.83兆円）", change: "+30%", interpretation: "commerce volumeとpayments・platform expansionが成長。", sourceId: "rollout-shopify-fy2025" }, { label: "FCF", value: "約20億米ドル（約3,151億円）", change: "margin 17%", interpretation: "成長とcash generationを両立。", sourceId: "rollout-shopify-fy2025" }], growthDrivers: [{ title: "enterprise・international・AI commerce", evidence: "数百万merchant、175+ countries、merchant sales 1兆米ドル超（約157.6兆円）。", japanMeaning: "Product Partnerships Leadが日本のpayments・logistics・marketing ecosystemを拡張。", sourceIds: ["rollout-shopify-jobs-20260817"] }], risks: [{ title: "platform competition・merchant sensitivity", disclosedRisk: "competition、payments・partner dependency、macro・merchant failureが影響する。", companyResponse: "product・AI・international・ecosystemへ継続投資。", genbaRead: "Japan GMV、merchant mix、partner economics、migration・TCOを分けて確認する。", sourceIds: ["rollout-shopify-fy2025"] }], japanCommitment: { verdict: "日本RemoteのProduct Partnerships Leadと国内多数caseを確認。Japan売上・人数・進出年は非公開。", summary: "ecosystem expansionを採用。", signals: [{ year: "2026", title: "Japan Product Partnerships", detail: "marketplace、payments、logistics、marketing、vertical SaaSを担当。", sourceIds: ["rollout-shopify-jobs-20260817"] }], unknowns: ["Japan GMV・revenue・merchant", "Japan headcount・decision rights", "partner target・compensation"] }, scenarios: [{ scenario: "基本", title: "commerce platform拡大", body: "enterprise・international・paymentsが成長。" }, { scenario: "上振れ", title: "agentic commerce", body: "AI channelでShopify catalog・checkoutが標準になる。" }, { scenario: "下振れ", title: "competition・merchant pressure", body: "platform・payment競争とmacroが成長を圧迫。" }], sourceIds: ["rollout-shopify-fy2025", "rollout-shopify-jobs-20260817"] };
  intelligence.customerProof = [{ company: "三陽商会", products: "Shopify Plus", outcome: "8 EC siteを統合し、前年同期比GMV 115%、session 120%、full-price商品売上120%。", implication: "OMO・運用改革を含む複合成果。Shopify単独因果ではない。", sourceId: "rollout-shopify-sanyo" }];
  intelligence.roleLens = { salesMotion: "Product Partnerships Leadがmarketplace、payments、logistics、marketing、vertical SaaSのecosystemを日本で構築。", compensation: "日本の給与、bonus、equityは非公開。", quota: "partner target、sourced revenue、adoption、integration KPIは非公開。", collaboration: "Product、Engineering、Legal、Finance、Marketing、Salesとpartner executive・product teamを横断。" };
  addSources(intelligence, [
    { id: "rollout-shopify-company", label: "Shopify company", url: "https://www.shopify.com/about", kind: "企業公式", scope: "会社・platform・leadership", checkedAt: researchedAt },
    { id: "rollout-shopify-careers", label: "Shopify Careers", url: "https://www.shopify.com/careers", kind: "企業公式", scope: "culture・workstyle・規模", checkedAt: researchedAt },
    { id: "rollout-shopify-jobs-20260817", label: "Shopify Product Partnerships Lead", url: "https://www.shopify.com/careers/product-partnerships-lead_d9993b7d-d973-409c-9da3-0c8d48cff776", kind: "企業公式", scope: "現行日本求人1件・role条件", checkedAt: researchedAt },
    { id: "rollout-shopify-fy2025", label: "Shopify FY2025 results", url: "https://www.shopify.com/investors/press-releases/shopifys-standout-2025-the-launchpad-for-a-new-era-of-commerce-in-2026", kind: "法定開示", scope: "売上成長・FCF", checkedAt: researchedAt },
    { id: "rollout-shopify-sanyo", label: "Shopify・三陽商会", url: "https://www.shopify.com/jp/case-studies/sanyo-shokai", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-shopify-meti-ec", label: "経産省 電子商取引市場調査", url: "https://www.meti.go.jp/policy/it_policy/statistics/outlook/ie_outlook.html", kind: "公的機関", scope: "国内EC外部環境", checkedAt: researchedAt },
    { id: "rollout-b15-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchSierra(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "創業", "Bret TaylorとClay Bavorが共同創業。", "rollout-sierra-company");
  ensureMilestone(intelligence, "2025", "日本進出", "東京office開設を公式発表。", "rollout-sierra-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "sierra", leaderName: "Bret Taylor・Clay Bavor", leaderLabel: "Co-founders", leaderUrl: "https://sierra.ai/about", localName: "Opera Tech team", localLabel: "Japan delivery base", localUrl: "https://sierra.ai/blog/sierra-acquires-opera-tech-in-japan",
    companyId: "rollout-sierra-company", jobId: "rollout-sierra-jobs-20260817", customersId: "rollout-sierra-softbank", externalId: "rollout-sierra-mhlw-customer", financeId: "rollout-sierra-year-two",
    targets: ["顧客service・contact center", "小売・commerce", "金融service・insurance", "通信・subscription", "大企業digital・AI governance"], competitors: "Salesforce Agentforce、Microsoft・Google・AWS、Intercom、Zendesk、Cognigy・Kore.ai、Ada、Genesys・NiCE、SI・in-house LLM agent",
    feature: "Agent OS 2.0、Agent Studio、Agent Data Platform、Ghostwriter、outcome-based Agents as a Serviceでcustomer-facing AI agentを設計・運用。", advantage: "回答botでなく、system action、memory、knowledge、testing、analytics、human handoffをproduction customer workflowへ統合し、outcome課金を選べる。", benefit: "resolution、CSAT、cost-to-serve、conversion、availabilityを改善し、電話・chat・digital serviceの体験をscaleできる可能性がある。", evidence: "SoftBankのLINEMOは従来solution比で問い合わせ解決率97%、顧客満足度93%を報告。Sierra・SoftBank共同発表で独立監査はない。",
    marketVerdict: "結論：customer harassment対策、labor shortage、AI agent化が安全なself-service・agent assist需要を作る。Sierraは1.5億米ドル超ARR（約236.3億円）を発表。現行Tokyo求人2件はいずれもRecruitingでGenba対象0件。", marketParagraphs: ["問い合わせ量・channel・期待水準が上がる一方、従来botは回答範囲、system action、handoff、quality・auditで止まりやすい。", "Buyerはresolutionだけでなくhallucination、policy・authorization、data boundary、human escalation、Japanese quality、cost・outcome attributionを求める。", "Genba分析：限定intentでresolution、CSAT、AHT、escalation、containment、error・policy violation、cost/outcomeをholdout比較する。"],
    cultureHeadline: "builders中心の高成長AI企業。東京にはRecruiting 2求人のみで、現行の営業・導入対象求人は0件。", classification: "未確認", displayLabel: "現行対象求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Tokyo recruiting求人はOn-siteだが対象職へ転用しない",
    goodFor: ["AI agentとCXの事業成果を作りたい", "初期Japan市場をpartnerと開拓したい", "product・deliveryを近距離で作りたい"], cautionFor: ["今すぐ対象求人へ応募したい", "認識売上・利益の透明性を必須にする", "AI risk・誤作動の検証を避けたい"],
    unresolved: [["Hiring", "TokyoはRecruiting 2件、対象求人0件。", "営業・Agent Strategist・Engineeringの採用再開時期とemployment entityは？"], ["Compensation", "対象求人がなく日本報酬は不明。", "次回roleのbase、OTE、equity、quota、ramp、attainmentは？"], ["Japan scale", "Tokyo office、Opera Tech買収、SoftBank独占販売partnerを確認。", "Japan headcount、decision rights、delivery・support、customer数は？"], ["Outcome", "LINEMOは97% resolution・93% CSATを報告。", "baseline、intent mix、human escalation、error、cost、独立検証は？"], ["Risk", "Agentがsystem actionまで実行。", "authorization、rollback、audit、model・data boundary、SLAは？"]],
  }));
  intelligence.marketStatus.growthSummary = "2026年2月時点でARR 1.5億米ドル超（約236.3億円）。認識売上・profit・FCFは非公開。2026年5月に9.5億米ドル調達、評価額150億米ドル超を発表。";
  intelligence.facts = [
    { label: "事業固有規模", value: "ARR 1.5億米ドル超（約236.3億円）", detail: "ARRは売上高ではない。7四半期で1億米ドルARR到達と会社発表。", sourceIds: ["rollout-sierra-year-two", "rollout-b15-customs-fx"] },
    { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、operating・net income、EBITDA、FCFは非公開。", sourceIds: ["rollout-sierra-company"] },
    { label: "資本", value: "2026年9.5億米ドル調達・評価額150億米ドル超", detail: "約1,496.8億円・2.36兆円超。売上・利益ではない。", sourceIds: ["rollout-sierra-funding", "rollout-b15-customs-fx"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京office", detail: "2025年開設、2026年Opera Tech買収。street addressは非公開。", sourceId: "rollout-sierra-japan" };
  intelligence.companyStats.japanSince = { value: "2025年", detail: "東京office開設を公式発表。", sourceId: "rollout-sierra-japan" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行Tokyo求人2件はいずれもRecruiting。", sourceId: "rollout-sierra-jobs-20260817" };
  intelligence.customerProof = [{ company: "SoftBank・LINEMO", products: "Sierra AI agent", outcome: "従来solution比で問い合わせ解決率97%、顧客満足度93%。", implication: "SoftBank・Sierra共同発表。baseline details・独立監査なし。", sourceId: "rollout-sierra-softbank" }];
  intelligence.roleLens = { salesMotion: "現行対象求人0件。SoftBankが日本の独占販売partner、Sierraがdesign・deploy・optimizationを提供。", compensation: "現行対象求人がなく日本報酬は確認不能。", quota: "Japan ARR、partner target、quota、attainmentは非公開。", collaboration: "SoftBank、Japan delivery、Agent Strategist、Product、Engineering、customer service・IT・Securityを横断すると考えられるが採用時確認が必要。" };
  addSources(intelligence, [
    { id: "rollout-sierra-company", label: "Sierra company", url: "https://sierra.ai/about", kind: "企業公式", scope: "会社・product・leadership", checkedAt: researchedAt },
    { id: "rollout-sierra-jobs-20260817", label: "Sierra Ashby API", url: "https://api.ashbyhq.com/posting-api/job-board/Sierra", kind: "企業公式", scope: "Tokyo対象求人0・Recruiting 2件", checkedAt: researchedAt },
    { id: "rollout-sierra-japan", label: "Sierra launches in Japan", url: "https://sierra.ai/blog/sierra-in-japan", kind: "企業公式", scope: "東京office・日本進出", checkedAt: researchedAt },
    { id: "rollout-sierra-softbank", label: "Sierra・SoftBank partnership", url: "https://sierra.ai/jp/blog/announcing-our-partnership-with-softbank-corp", kind: "企業公式", scope: "国内partner・LINEMO定量case", checkedAt: researchedAt },
    { id: "rollout-sierra-year-two", label: "Sierra Year two", url: "https://sierra.ai/blog/corporate", kind: "企業公式", scope: "ARR・growth", checkedAt: researchedAt },
    { id: "rollout-sierra-funding", label: "Sierra 2026 funding", url: "https://sierra.ai/blog/better-customer-experiences-built-on-sierra", kind: "企業公式", scope: "funding・valuation・scale", checkedAt: researchedAt },
    { id: "rollout-sierra-mhlw-customer", label: "厚労省 カスタマーハラスメント対策", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/seisaku06/", kind: "公的機関", scope: "customer service外部環境", checkedAt: researchedAt },
    { id: "rollout-b15-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchSysdig(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2014", "創業", "Wireshark共同作者Loris Degioanniらが創業。", "rollout-sysdig-company");
  ensureMilestone(intelligence, "確認不能", "日本事業開始年は確認不能", "日本語site・国内顧客は確認できるが、公式一次資料で開始年を確定できない。", "rollout-sysdig-company");
  applyStandard(intelligence, buildCompactPatch({
    slug: "sysdig", leaderName: "Suresh Vasudevan", leaderLabel: "CEO", leaderUrl: "https://sysdig.com/company/leadership/", localName: "公開情報で確認不能", localLabel: "Japan責任者", localUrl: "https://www.sysdig.com/jp/",
    companyId: "rollout-sysdig-company", jobId: "rollout-sysdig-jobs-20260817", customersId: "rollout-sysdig-ntt", externalId: "rollout-sysdig-ipa-threats", financeId: "rollout-sysdig-financing",
    targets: ["CISO・クラウドSecurity", "基盤Engineering・Kubernetes", "開発Security・AppSec", "SOC・事故対応", "Compliance・Risk管理"], competitors: "Palo Alto Prisma Cloud、Wiz、Orca、Aqua、CrowdStrike、Microsoft Defender for Cloud、cloud-native tools、open-source Falco・Prometheus",
    feature: "CNAPP・CSPM、vulnerability、Kubernetes・container runtime detection、cloud detection・response、compliance、observabilityをruntime insightで統合。", advantage: "open-source Falcoとruntime contextを軸に、postureのlistだけでなく実行中risk、attack path、investigation・responseへ優先順位を付ける。", benefit: "vulnerability noise、incident investigation、compliance operation、tool数、developer・security工数を減らせる可能性がある。", evidence: "NTTドコモは8,000万人超が利用するRAFTEL基盤・社内60組織超で利用し、security・operations・developmentの3 teamを共通toolで接続。定量削減率は非公開。",
    marketVerdict: "結論：Kubernetes・cloud・AI workloadとransomware・supply-chain riskがruntime security需要を作る。private companyで売上・利益は非公開。公式Leverに日本求人は0件。", marketParagraphs: ["cloud posture、vulnerability、runtime、logsが別toolだと、稼働中のcritical riskとincident timelineを絞れず、developer・SOCの負荷が増える。", "Buyerはcoverageだけでなくnoise reduction、runtime prevention、investigation speed、agent overhead、open-source・cloud integration、pricingを求める。", "Genba分析：実workloadでcritical exposure、noise、MTTD・MTTR、investigation hours、agent overhead、tool・cloud costをbaseline比較する。"],
    cultureHeadline: "open-source rootsとruntime securityを核にcustomer outcomeを重視。2026年8月17日時点で現行日本求人は0件。", classification: "未確認", displayLabel: "現行日本求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "旧Country Manager条件を現行へ転用しない",
    goodFor: ["cloud runtimeの技術をbusiness riskへ変えたい", "CISOとPlatform teamを横断したい", "国内大規模caseをvalue saleへ使いたい"], cautionFor: ["今すぐ日本求人へ応募したい", "認識売上・利益の透明性を必須にする", "agent・runtime検証を避けたい"],
    unresolved: [["Hiring", "公式LeverにJapan・Tokyoは0。旧Country Managerは終了。", "日本採用の再開時期、予定職種、employment entityは？"], ["Compensation", "現行対象求人がない。", "次回roleのbase、OTE、equity、quota、ramp、attainmentは？"], ["Japan scale", "NTTドコモ・ログラス事例を確認。", "Japan revenue、customers、headcount、leader、SE・CS・support coverageは？"], ["Economics", "customers pageはnoise・工数削減をaggregate claim。", "pricing、agent overhead、data cost、3年TCOを実環境でどう測る？"], ["Product risk", "runtime・posture・AI guidanceを統合。", "false positive・negative、response rollback、availability、data boundaryは？"]],
  }));
  intelligence.marketStatus.growthSummary = "recognized revenue、ARR current absolute、operating・net income、FCFは非公開。2021年Series G 3.5億米ドル（約551.5億円）・評価額25億米ドル（約3,939億円）はhistorical資本指標。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "private company。recognized revenue、profit、FCFを確認できない。", sourceIds: ["rollout-sysdig-company"] },
    { label: "2025年事業signal", value: "Sage顧客採用45%・user adoption 337%増", detail: "会社発表。ARR 2.5億米ドル（約393.9億円）は目標表現でcurrent実績ではない。", sourceIds: ["rollout-sysdig-cro"] },
    { label: "historical資本", value: "2021年Series G 3.5億米ドル（約551.5億円）", detail: "当時評価額25億米ドル。売上・現在価値ではない。", sourceIds: ["rollout-sysdig-financing", "rollout-b15-customs-fx"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行日本求人0件。", sourceId: "rollout-sysdig-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "公式一次情報で確認不能", detail: "日本語site・国内顧客は確認できるがcurrent office住所は補完しない。", sourceId: "rollout-sysdig-company" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "国内活動は確認できるが開始年は一次情報で確定できない。", sourceId: "rollout-sysdig-company" };
  intelligence.customerProof = [
    { company: "NTTドコモ", products: "Sysdig Secure・Monitor", outcome: "8,000万人超のserviceを支えるRAFTELを社内60組織超が利用し、security・operations・developmentの3 teamで共通利用。", implication: "response・cost削減率は非公開。vendor case。", sourceId: "rollout-sysdig-ntt" },
    { company: "ログラス", products: "Sysdig Secure・Sage", outcome: "AWS ECS・Fargateのcompliance、vulnerability、修正guidanceを実装。競合比のcost performanceを顧客が評価。", implication: "定量ROI・独立監査はない。", sourceId: "rollout-sysdig-loglass" },
  ];
  intelligence.roleLens = { salesMotion: "現行日本求人0件。旧Country ManagerはJapan strategy、team、partner、forecastを担う想定だったが現在条件へ転用しない。", compensation: "現行対象求人がなく日本報酬は確認不能。", quota: "Japan quota、attainment、ACV、cycle、partner mixは非公開。", collaboration: "CISO、Cloud・Platform、SOC、DeveloperとSales、SE、CS、partnerを横断すると考えられるが採用時確認が必要。" };
  addSources(intelligence, [
    { id: "rollout-sysdig-company", label: "Sysdig company", url: "https://sysdig.com/company/", kind: "企業公式", scope: "会社・product・leadership", checkedAt: researchedAt },
    { id: "rollout-sysdig-jobs-20260817", label: "Sysdig Lever API", url: "https://api.lever.co/v0/postings/sysdig?mode=json", kind: "企業公式", scope: "現行日本求人0・終了反証", checkedAt: researchedAt },
    { id: "rollout-sysdig-ntt", label: "Sysdig・NTTドコモ", url: "https://www.sysdig.com/customers/ntt-docomo", kind: "企業公式", scope: "国内大規模case", checkedAt: researchedAt },
    { id: "rollout-sysdig-loglass", label: "Sysdig・ログラス", url: "https://www.sysdig.com/jp/customers/loglass", kind: "企業公式", scope: "国内cloud security case", checkedAt: researchedAt },
    { id: "rollout-sysdig-cro", label: "Sysdig 2025 leadership・growth", url: "https://sysdig.com/press-releases/gary-olson-appointed-cro-crendal-kear-appointed-cbo/", kind: "企業公式", scope: "Sage adoption・ARR target", checkedAt: researchedAt },
    { id: "rollout-sysdig-financing", label: "Sysdig Series G", url: "https://sysdig.com/press-releases/350m-series-g-financing-2-5b-valuation/", kind: "企業公式", scope: "historical funding・valuation", checkedAt: researchedAt },
    { id: "rollout-sysdig-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b15-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchFifteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.schrodinger) patchSchrodinger(records.schrodinger);
  if (records["sensor-tower"]) patchSensorTower(records["sensor-tower"]);
  if (records.shopify) patchShopify(records.shopify);
  if (records.sierra) patchSierra(records.sierra);
  if (records.sysdig) patchSysdig(records.sysdig);
}
