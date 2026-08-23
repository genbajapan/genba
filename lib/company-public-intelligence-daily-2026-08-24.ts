import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-24";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.24";
  return intelligence;
}

const datasnipperIntelligence = build({
  checkedAt,
  slug: "datasnipper",
  name: "DataSnipper",
  jobUrl: "https://jobs.ashbyhq.com/datasnipper/3adf1eee-09c2-4187-837b-0579591afe3a",
  officialUrl: "https://www.datasnipper.com/about-us",
  customersUrl: "https://www.datasnipper.com/customers",
  externalUrl: "https://www.fsa.go.jp/news/r6/sonota/20250304/20250304.html",
  financeUrl: "https://www.datasnipper.com/resources/datasnipper-and-microsoft-join-forces-to-bring-ai-agents-to-audit-finance",
  salesSnapshot: "監査・財務の証憑抽出、突合、検証をExcel中心のAI workflowへ変える会社。日本の最初期AEはCFO、監査法人、内部監査へ、manual作業の削減とtraceabilityを同時に提案する。",
  growthSummary: "2017年創業。公式情報は600,000人超のactive user、175カ国、Big Four全社の利用、2024年Series Bで1億ドル調達・評価額10億ドルを示す。Careersはglobal 200人超を表示するが、日本売上と国内team人数は非公開。",
  ipoSummary: "非公開企業。2024年Series B時の会社公表評価額は10億ドル。IPO時期、日本売上、Japan ARRは公表されていない。",
  milestones: [
    { year: "2017", label: "創業", detail: "Amsterdamで監査・財務のmanualな証憑照合を自動化する会社として創業。", source: "company" },
    { year: "2024", label: "Series B", detail: "1億ドルを調達し評価額10億ドルと会社が公表。", source: "finance" },
    { year: "2025", label: "Microsoft協業", detail: "Azure上のaudit・finance向けAI agents開発を公式発表。", source: "finance" },
    { year: "2026.08", label: "日本採用開始を確認", detail: "Sales Account Executiveの現行Japan求人を公式ATSで確認。東京officeの開設年は未確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式事例は大量の証憑から数値を抽出・照合する時間を減らし、監査人がrisk判断や顧客への助言へ時間を戻す目的を示す。単なるOCRではなく、review可能なevidenceをExcelへ残すことが導入理由になる。" },
    { title: "製品の成り立ちから見る課題", body: "監査のdocument cross-referenceをExcel内で速くする発想から始まり、Document Matching、Form Extraction、AI agentsへ拡張した。核は現場が使うExcelを残しながら、manual testingをtraceableに自動化すること。" },
    { title: "外部環境の要求から見る課題", body: "監査・財務でAI利用が広がっても、組織には証拠、判断過程、data管理、human reviewの説明責任が残る。効率だけでなく、誰が何を検証したかを追えるworkflowが投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "監査・経理teamが扱うdocumentと検証項目は増える一方、繁忙期に投入できる人員は増えにくい。" },
    { label: "課題", body: "PDFからExcelへの転記と突合が人手に残ると、時間がかかり、review trailが分散し、高risk領域へ十分な時間を割けない。" },
    { label: "解決策", body: "一つのtesting procedureで抽出、照合、validation、reviewを標準化し、所要時間、sample処理量、review差戻し、例外発見をbaseline比較する。" },
    { label: "選定の理由", body: "manual Excel、RPA、汎用OCR、監査platformとの比較で、現場定着、evidence traceability、監査methodology適合、security、総工数に優位がある場合に選ぶ。" },
  ],
  openingHook: "繁忙期の監査testingで、証憑の抽出と突合に何時間使い、reviewの差戻しは何件発生していますか。",
  valueHypothesis: "testing時間、処理sample数、review差戻し、例外発見、繁忙期残業、high-risk workへの再配分時間をbaseline比較する。",
  objection: "監査は判断業務なのでAIへ任せられず、既存ExcelとRPAで十分。",
  reframe: "判断の自動化ではなく、反復的な抽出・突合をAI agentへ渡し、人がevidenceと例外をreviewする統制、traceability、methodology適合で比較する。",
  facts: [
    { label: "創業", value: "2017年", detail: "Amsterdam発のaudit・finance automation企業。", source: "company" },
    { label: "active users", value: "600,000人超", detail: "2026年8月の会社公式表示。", source: "company" },
    { label: "利用国", value: "175カ国", detail: "会社公式表示。", source: "company" },
    { label: "Big Four", value: "4社すべて", detail: "会社公式表示。", source: "customers" },
    { label: "global team", value: "200人超", detail: "会社公式Careers表示。", source: "finance" },
    { label: "日本求人", value: "1件", detail: "Sales Account Executive。", source: "job" },
  ],
  customers: [
    { company: "FGMK", products: "DataSnipper Platform", outcome: "high-volume testingで85%の時間削減を会社公式サイトが表示。比較条件は事例本文で確認が必要。", implication: "繁忙期の処理能力とreview時間をbusiness caseにできる。" },
    { company: "Walker & Dunlop", products: "DataSnipper", outcome: "10,000 data pointをsource document横断で検証したと会社公式サイトが表示。", implication: "大量documentのevidence validationをscaleするproof。" },
    { company: "Kushner LaGraize", products: "DataSnipper", outcome: "document reviewを90%高速化したと会社公式サイトが表示。", implication: "速度とtrustを同時に測る参照例。" },
  ],
  externalSignals: [
    { label: "監査品質", value: "human reviewと証拠", detail: "監査でAIを使っても、適切な証拠、専門家判断、品質管理の責任は監査主体に残る。", caveat: "具体的な監査手続・基準適用は案件と監査主体で異なる。" },
    { label: "data governance", value: "機密証憑の管理", detail: "財務・監査documentを扱うため、data location、retention、model training利用、access、監査log、vendor管理の確認が必要。", caveat: "製品の認証だけで個別企業の統制充足を保証しない。" },
  ],
  role: "日本の最初期AEとしてprospecting、discovery、demo、proposal、negotiation、closeをfull-cycleで持ち、BDR、Marketing、Productと市場playbookを作る。",
  organization: "JapanのHybrid full-time role。東京officeは公式確認できるが、日本法人、雇用主体、reporting line、team人数、出社日数は求人で確認できない。",
  careerValue: "監査AI、CFO・監査法人buyer、Enterprise value selling、Japan launch、global product feedbackを横断する経験。",
  globalHeadcount: "200人超",
  japanPresence: "渋谷ヒカリエの東京officeと日本向けSales Account Executiveを公式確認",
  japanSince: "2026年までに東京officeを公式確認（開設年は未確認）",
  solutions: [
    { name: "DataSnipper Platform", valueProp: "Excel内でdocumentの抽出、突合、validation、review evidenceを管理する。", url: "https://www.datasnipper.com/", competitors: "manual Excel、RPA、汎用OCR、audit suite。", differentiation: "監査・財務workflowとExcelへの特化、source traceability。" },
    { name: "AI Agents", valueProp: "revenue testingやtest of details等のend-to-end procedureを実行し、人がreviewする。", url: "https://www.datasnipper.com/", competitors: "汎用agent、internal automation、audit platform。", differentiation: "audit expert向けのprebuilt workflowとhuman-in-the-loop。" },
    { name: "Document Matching / Extraction", valueProp: "source documentからdataを抽出・照合し、例外を確認できる形で残す。", url: "https://knowledge.datasnipper.com/en/articles/632645-getting-started-with-datasnipper", competitors: "OCR、manual sampling、spreadsheet macro。", differentiation: "Excelから離れずsource evidenceへ辿れる。" },
  ],
  fitTags: ["Audit AI", "Finance", "Excel", "Enterprise Sales", "Japan Launch", "Hybrid"],
  comparisons: [
    { arena: "Audit automation", companies: ["DataSnipper", "manual Excel", "audit suite", "RPA"], why: "traceability、methodology、定着、工数" },
    { arena: "Document AI", companies: ["DataSnipper", "generic OCR", "cloud document AI"], why: "accuracy、review、source link、governance" },
    { arena: "Finance agents", companies: ["DataSnipper", "internal build", "general AI agents"], why: "procedure coverage、control、security、TCO" },
  ],
}, {
  slug: "datasnipper", leaderName: "Vidya Peters", leaderLabel: "CEO", leaderUrl: "https://www.datasnipper.com/about-us", localName: "未確認", localLabel: "Japan責任者", localUrl: "https://jobs.ashbyhq.com/datasnipper/3adf1eee-09c2-4187-837b-0579591afe3a",
  companyId: "datasnipper-company", jobId: "datasnipper-job", customersId: "datasnipper-customers", externalId: "datasnipper-external", financeId: "datasnipper-finance",
  targets: ["監査法人・Audit Transformation責任者", "内部監査・SOX責任者", "CFO・Financial Control責任者"],
  heroSummary: "監査・財務で増え続ける証憑の抽出、突合、検証が人手とExcel転記に残り、繁忙期の処理能力とreview品質を制約する課題を解決する。AI agentが反復作業を担い、人がevidenceと例外をreviewできる形へ変える。",
  competitors: "manual Excel、RPA、汎用OCR、audit suite、internal AIとの比較では、traceability、methodology適合、security、現場定着、総工数を見る。",
  feature: "Excel中心のdocument extraction、matching、validationとaudit・finance向けAI agentsを提供する。",
  advantage: "汎用OCRではなくaudit・finance procedureとsource evidenceに特化し、現場のExcel workflowを大きく変えずにhuman reviewを残す。",
  benefit: "testing時間とreview差戻しを減らし、監査人をexception、risk判断、advisoryへ再配分する。",
  evidence: "公式サイトは600,000人超、175カ国、Big Four全社利用と、high-volume testingで85%時間削減の事例表示を掲載。",
  marketVerdict: "東京office、初期AE求人、global proofは確認できるが、日本法人、国内顧客、日本売上、team人数、quota達成率は未公開。",
  marketParagraphs: ["監査・財務のdocument量とAI利用が増えるほど、速度だけでなくevidence、human review、data governanceを同時に満たす需要が強まる。", "日本では監査法人と事業会社でbuyer、methodology、security reviewが異なるため、初期AEがsegment別の再現性を作れるかが成長条件になる。"],
  cultureHeadline: "日本の最初期AEとしてfull-cycle salesとmarket playbookを作るHybrid role。",
  classification: "ハイブリッド", displayLabel: "Japan Hybrid", officeDays: "出社日数は未記載", remoteOnly: "完全remoteとは記載なし", flexibility: "東京office利用、出張頻度、勤務時間帯は未記載",
  goodFor: ["audit・financeの業務課題をAI投資へ変えたい人", "日本の初期playbookを自分で作りたい人"], cautionFor: ["完成済みの国内territoryを前提にする人", "製品demo後の変革・定着を持ちたくない人"],
  unresolved: [
    ["組織", "初期AEとBDRを採用する。", "日本の雇用主体、reporting line、team人数、12カ月の採用計画は。"],
    ["territory", "日本でPMFがあると求人に記載。", "既存顧客数、ICP、pipeline、平均ACV、cycle、self-source比率は。"],
    ["quota", "full-cycleでcloseを持つ。", "quota、pay mix、ramp、coverage、達成率、acceleratorは。"],
    ["delivery", "global teamと市場を作る。", "日本語のSE、Onboarding、CS、Support、Security reviewの責任境界は。"],
    ["proof", "global成果は確認できる。", "日本のnamed caseと導入前後KPIをいつ公式化できますか。"],
  ],
});

const runwayIntelligence = build({
  checkedAt,
  slug: "runway",
  name: "Runway",
  jobUrl: "https://jobs.ashbyhq.com/runway-ml/5d5a91ae-b091-425c-96b5-2d4a88d0c796",
  officialUrl: "https://runwayml.com/",
  customersUrl: "https://runwayml.com/customer-stories",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://runwayml.com/news/runway-partners-with-lionsgate",
  salesSnapshot: "映像、広告、media制作を生成AI modelとcloud workflowへ変える会社。日本のGeneral Managerはtool販売ではなく、初期顧客、Enterprise partnership、GTM、local teamとofficeを一から作る。",
  growthSummary: "2018年創業。公式サイトは50 million超のcreator利用を表示し、Lionsgate等とのEnterprise partnershipを公開する。日本売上、国内顧客、global headcount、Japan pipelineは非公開。",
  ipoSummary: "非公開企業。IPO時期、売上、ARR、日本単体業績は公表されていない。",
  milestones: [
    { year: "2018", label: "創業", detail: "New YorkでAI researchをcreative toolへ応用する会社として創業。", source: "company" },
    { year: "2022", label: "AI Film Festival", detail: "AIを用いる映像作家のfestivalを開始。", source: "company" },
    { year: "2024", label: "Lionsgate提携", detail: "studio向けにcustom AI modelを開発するpartnershipを公式発表。", source: "finance" },
    { year: "2026.08", label: "Japan GM採用", detail: "日本市場のGTMとlocal teamを作るGeneral Managerを公式ATSで確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式事例はstoryboard、concept、VFX、campaign assetを速く試し、production前の選択肢を増やす目的を示す。生成本数ではなく、企画から承認・公開までの時間と制作可能性が導入理由になる。" },
    { title: "製品の成り立ちから見る課題", body: "artistsと研究者がAI modelを創作へ開く発想から始まり、video generation、editing、API、Enterprise workspace、world model研究へ拡張した。核はmodelだけでなくcreative workflowへ直接入ること。" },
    { title: "外部環境の要求から見る課題", body: "生成映像がproductionへ入るほど、企業は権利、同意、brand、training data、synthetic content表示、security、human approvalを説明する必要がある。制作速度とgovernanceを同じworkflowで満たすことが投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "映像・広告の需要とversion数が増える一方、撮影、VFX、localizationの時間とbudgetは有限。" },
    { label: "課題", body: "企画検証が遅いままでは採用されない案がproduction costを消費し、個人のAI利用を野放しにすると権利・brand・data管理が崩れる。" },
    { label: "解決策", body: "一つのcampaignまたはproduction工程でstoryboard、generation、editing、approvalをpilotし、time-to-first-cut、iteration数、外注費、再撮影、brand・rights incidentを測る。" },
    { label: "選定の理由", body: "Adobe、OpenAI、Google、specialized production tool、制作会社との比較で、video quality、control、workflow、Enterprise governance、API、商用条件に優位がある場合に選ぶ。" },
  ],
  openingHook: "企画承認前の映像案を一つ増やすために、何日と何人の制作工数が必要ですか。",
  valueHypothesis: "time-to-first-cut、creative iteration、撮影・VFX・localization費、campaign asset数、approval時間、権利・brand差戻しをbaseline比較する。",
  objection: "生成映像は品質と権利riskが読めず、既存制作会社とAdobe workflowで十分。",
  reframe: "一発のdemo品質ではなく、制御性、consistency、human approval、rights・security、既存productionへの統合、反復速度、総costで比較する。",
  facts: [
    { label: "創業", value: "2018年", detail: "New York発のAI research・technology company。", source: "company" },
    { label: "creators", value: "50 million超", detail: "2026年8月の会社公式表示。", source: "company" },
    { label: "Enterprise partner", value: "Lionsgate", detail: "custom AI modelの共同開発を公式発表。", source: "customers" },
    { label: "製品", value: "Creative / Dev / Research", detail: "creative suite、API、world model研究を展開。", source: "company" },
    { label: "Tokyo event", value: "AI Festival 2026", detail: "Tokyoで公式festival開催を確認。進出済みの証拠ではない。", source: "finance" },
    { label: "日本求人", value: "1件", detail: "General Manager, Japan。", source: "job" },
  ],
  customers: [
    { company: "Lionsgate", products: "custom AI model / Runway", outcome: "film・television portfolioで使うcustom modelを共同開発するpartnershipを公式発表。", implication: "studio固有IPとproduction workflowへ入るEnterprise proof。" },
    { company: "Amazon MGM Studios / House of David", products: "Runway", outcome: "公式customer storyでproductionへの生成AI活用を紹介。", implication: "screen productionでcreative controlと速度を検証する例。" },
    { company: "Tool", products: "Runway", outcome: "commercial production processをAIと組み合わせる公式事例を掲載。", implication: "広告制作会社のhybrid workflowを示す。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "権利・透明性・human oversight", detail: "生成AIを事業利用する企業は、data、output、権利、品質、透明性、incident対応をriskに応じて管理する必要がある。", caveat: "具体的義務は用途、契約、法域、素材で異なる。" },
    { label: "production governance", value: "brandと承認", detail: "creative速度が上がっても、素材権利、talent consent、brand guideline、最終承認、archiveをworkflowへ残す必要がある。", caveat: "tool導入だけで権利clearanceや品質を保証しない。" },
  ],
  role: "日本のfoundational General ManagerとしてGTM戦略、Enterprise partnership、初期顧客を作り、将来のAE、Growth、Deploymentを含むlocal teamとTokyo officeを構築する。",
  organization: "Japan full-time role。求人はTokyo拠点化とCountry Managerへの発展可能性を記載するが、日本法人、常設office、雇用主体、現在のlocal teamは確認できない。",
  careerValue: "creative AI、media・advertising ecosystem、Enterprise partnership、country launch、team buildを横断する経営経験。",
  globalHeadcount: "51〜200人規模",
  japanPresence: "General Manager, Japan求人を確認。日本法人・常設office・local teamは未確認",
  japanSince: "2026年8月に現行Japan GM求人を確認",
  solutions: [
    { name: "Runway Creative", valueProp: "video、image、audioのgenerationとeditingを一つのcloud workspaceで扱う。", url: "https://runwayml.com/", competitors: "Adobe、OpenAI、Google、specialized creative tools。", differentiation: "video-firstのmodel研究とproduction workflowの統合。" },
    { name: "Runway Enterprise", valueProp: "team workspace、SSO、管理、supportで企業のcreative AI利用を運用する。", url: "https://help.runwayml.com/hc/en-us/articles/48625698573075-Enterprise-Features", competitors: "Adobe Enterprise、cloud AI platform、internal workflow。", differentiation: "creative model、workspace、brand機能、Enterprise supportを一体化。" },
    { name: "Runway API / Dev", valueProp: "image・video modelを企業applicationとworkflowへ組み込む。", url: "https://runwayml.com/", competitors: "OpenAI API、Google Vertex AI、other model APIs。", differentiation: "creative productionで育てたvideo modelとworkflow資産。" },
  ],
  fitTags: ["日本未進出", "Generative Video", "Creative AI", "Enterprise", "Country Launch", "Japan"],
  comparisons: [
    { arena: "Creative AI", companies: ["Runway", "Adobe", "OpenAI", "Google"], why: "quality、control、workflow、rights、TCO" },
    { arena: "Video production", companies: ["Runway", "production agency", "VFX tools"], why: "speed、creative control、integration、governance" },
    { arena: "Enterprise model platform", companies: ["Runway Dev", "cloud AI", "internal models"], why: "API、model quality、security、commercial terms" },
  ],
}, {
  slug: "runway", leaderName: "Cristóbal Valenzuela", leaderLabel: "Co-Founder / Co-CEO", leaderUrl: "https://runwayml.com/", localName: "未採用", localLabel: "General Manager, Japan", localUrl: "https://jobs.ashbyhq.com/runway-ml/5d5a91ae-b091-425c-96b5-2d4a88d0c796",
  companyId: "runway-company", jobId: "runway-job", customersId: "runway-customers", externalId: "runway-external", financeId: "runway-finance",
  targets: ["映像・VFX production責任者", "Brand・Creative責任者", "Media・Entertainment事業責任者"],
  heroSummary: "映像・広告の需要とversion数が増える一方、企画、撮影、VFX、localizationの時間とbudgetが追いつかない課題を解決する。生成AI modelとcreative workflowでiterationを増やし、Enterprise管理の下でproductionへ接続する。",
  competitors: "Adobe、OpenAI、Google、制作会社、VFX toolとの比較では、video quality、制御性、workflow、rights・security、API、総costを見る。",
  feature: "video・image・audio generation、editing、Enterprise workspace、API、world model研究を提供する。",
  advantage: "video-firstの研究modelをcreator向けtool、Enterprise workflow、developer APIへ同じ会社で接続する。",
  benefit: "企画からfirst cutまでの時間と制作costを減らし、より多くのcreative iterationとlocalizationを可能にする。",
  evidence: "公式サイトは50 million超のcreator利用を表示し、Lionsgateとのcustom AI model partnershipやproduction事例を公開。",
  marketVerdict: "Japan GM求人とTokyoでの公式eventは強いsignalだが、日本法人、常設office、雇用主体、国内顧客、local deliveryは未確認。",
  marketParagraphs: ["映像需要と生成AI品質が上がるほど、企画、production、localizationを速める需要と、rights・brand・securityを統制する需要が同時に増える。", "日本ではmedia・広告の既存商流へ入り、国内proof、契約・権利説明、日本語のdeployment支援を揃えられるかが成立条件になる。"],
  cultureHeadline: "日本のGTM、初期顧客、partnership、teamとofficeを一から作るcountry build role。",
  classification: "未確認", displayLabel: "Japan full-time / Tokyo拠点化を想定", officeDays: "現時点の常設officeと出社日数は未確認", remoteOnly: "完全remoteとは記載なし", flexibility: "雇用主体、勤務場所、出張頻度は未記載",
  goodFor: ["creative AIの日本市場を経営視点で作りたい人", "media・広告のnetworkをEnterprise GTMへ変えられる人"], cautionFor: ["既存local teamと完成済みplaybookを前提にする人", "個人向けtoolの販売だけを想定する人"],
  unresolved: [
    ["法人・雇用", "Japan GMをfoundational roleとして募集。", "雇用主体、法人設立、office開設、benefit、P&L権限の計画は。"],
    ["市場", "初期顧客とpartnershipを作る。", "既存日本顧客、pipeline、ICP、優先industry、初年度目標は。"],
    ["組織", "AE、Growth、Deploymentを将来採用。", "採用時期、budget、reporting line、global支援、local decision rightsは。"],
    ["delivery", "Enterprise expansionを担う。", "日本語SE、Deployment、CS、Support、rights・Security reviewを誰が持つ。"],
    ["報酬・評価", "Country Managerへ発展可能。", "base、bonus、equity、売上・顧客・採用KPIと昇格条件は。"],
  ],
});

runwayIntelligence.sources.push({
  id: "runway-linkedin-scale",
  label: "Runway LinkedIn company page",
  url: "https://www.linkedin.com/company/runwayml/",
  kind: "外部集計",
  scope: "会社規模レンジ。所属表示人数とは一致せず、公式の厳密な在籍人数ではない",
  checkedAt,
});
runwayIntelligence.companyStats.globalHeadcount = {
  value: "51〜200人規模",
  detail: "LinkedIn company pageの会社規模レンジ。公式の厳密な在籍人数ではなく、同ページの所属表示人数とも一致しないため概算の基準に限定する。",
  sourceId: "runway-linkedin-scale",
};

export const daily20260824IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  datasnipper: datasnipperIntelligence,
  runway: runwayIntelligence,
};
