import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-23";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.23";
  return intelligence;
}

const vonageIntelligence = build({
  checkedAt,
  slug: "vonage",
  name: "Vonage",
  jobUrl: "https://job-boards.greenhouse.io/vonage/jobs/8528707002",
  officialUrl: "https://www.vonage.com/",
  customersUrl: "https://www.vonage.com/resources/customers/HugCome/",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/",
  financeUrl: "https://www.ericsson.com/en/press-releases/2022/7/ericsson-completes-acquisition-of-vonage",
  salesSnapshot: "顧客とのmessaging、voice、video、認証、contact centerをAPIとcloud applicationで組み込む会社。日本のCustomer Success Managerは、API導入後の利用、顧客成果、renewal、expansionを同時に持つ。",
  growthSummary: "2001年創業、2022年にEricssonが買収。公式サイトは世界100,000社超の利用、登録developer 160万人超、年間250億件のminutes・messagesを表示する。日本売上、日本team人数、retentionは非公開。",
  ipoSummary: "Ericsson傘下の非上場子会社。Vonage単体の売上、ARR、日本業績は公表されていない。",
  milestones: [
    { year: "2001", label: "創業", detail: "internet経由のvoice communication事業として創業。", source: "company" },
    { year: "2016", label: "Nexmo買収", detail: "communications APIへportfolioを拡張。", source: "company" },
    { year: "2017", label: "日本進出・東京拠点開設", detail: "初の日本拠点とCountry Directorを公式発表。", source: "company" },
    { year: "2022", label: "Ericsson傘下", detail: "Ericssonが買収を完了。", source: "finance" },
    { year: "2026.08", label: "日本CS採用", detail: "Work from Home - JapanのCustomer Success Managerを公式ATSで確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "日本企業HugComeの公式事例は、download不要のvideo体験を自社applicationへ組み込み、利用者が迷わないonline educationを作る目的を示す。通信機能ではなく顧客journeyと運用成果が導入理由になる。" },
    { title: "製品の成り立ちから見る課題", body: "internet voiceから始まり、Nexmoのmessaging・voice API、video、認証、contact centerへ拡張した。核は通信機能を自前で構築・運用せず、applicationとbusiness workflowへprogrammableに組み込むこと。" },
    { title: "外部環境の要求から見る課題", body: "企業がSMS、voice、video、認証で個人dataへ触れるほど、利用目的、委託先、越境移転、安全管理、delivery品質を説明しながら顧客接点を継続する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "顧客はweb、mobile、contact centerの複数channelで即時かつ安全な応答を期待する。" },
    { label: "課題", body: "channelごとにproviderと実装が分かれると、到達率、identity、顧客data、障害対応、費用の管理が複雑になる。" },
    { label: "解決策", body: "一つの重要journeyでAPI、routing、認証、monitoringを接続し、到達、conversion、support工数、継続率を測る。" },
    { label: "選定の理由", body: "Twilio、Sinch、Amazon Connect、Genesys等との比較で、API coverage、carrier reach、contact center統合、support、総costに優位がある場合に選ぶ。" },
  ],
  openingHook: "顧客への重要通知や認証が届かないとき、原因と事業影響を何分で特定できますか。",
  valueHypothesis: "message到達率、verification success、conversion、contact handling time、support ticket、renewal、usage expansionをbaseline比較する。",
  objection: "cloud providerの標準serviceか既存carrierとcontact centerで十分。",
  reframe: "API単価ではなく、global reach、delivery、channel統合、開発・運用工数、障害対応、顧客journey全体で比較する。",
  facts: [
    { label: "創業", value: "2001年", detail: "米国発のcloud communications企業。", source: "company" },
    { label: "親会社", value: "Ericsson", detail: "2022年に買収完了。", source: "finance" },
    { label: "business customers", value: "100,000社超", detail: "2026年8月の公式サイト表示。", source: "company" },
    { label: "registered developers", value: "160万人超", detail: "2026年8月の公式サイト表示。", source: "company" },
    { label: "日本拠点", value: "2017年開設", detail: "東京拠点の公式発表。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Junior Customer Success Manager (API)。", source: "job" },
  ],
  customers: [
    { company: "HugCome", products: "Vonage Video API", outcome: "download不要のvideo体験をonline教育serviceへ組み込み、直感的な操作と多言語supportを公式事例で紹介。", implication: "日本のapplicationへAPIを組み込むlocal proof。" },
    { company: "KDDI Web Communications", products: "Vonage Communications Platform", outcome: "日本企業へmessaging、voice、video、認証等を提供する協業を公式発表。", implication: "partner経由で国内deliveryを広げるproof。" },
  ],
  externalSignals: [
    { label: "個人情報", value: "委託・越境・安全管理", detail: "通信APIで個人dataを扱う場合、利用目的、委託、第三者提供、越境移転、安全管理の確認が必要。", caveat: "具体的義務はdata、契約、処理地域、利用目的で異なる。" },
    { label: "communication reliability", value: "deliveryと継続性", detail: "認証や重要通知は到達率、latency、failover、incident対応をbusiness KPIとして管理する必要がある。", caveat: "単一providerだけでend-to-endの到達を保証できない。" },
  ],
  role: "日本のAPI顧客へsuccess plan、利用data分析、adoption、training、renewal・upsell、issue解決を持ち、Product・Engineering・Salesと協働する。",
  organization: "Work from Home - Japanのfull-time role。日本法人は確認できるが、reporting line、team人数、担当社数、出社・出張条件は未公開。",
  careerValue: "communications API、technical Customer Success、usage analytics、renewal・expansion、global cross-functional deliveryを横断する経験。",
  globalHeadcount: "Ericsson傘下・Vonage単体は非公開",
  japanPresence: "Vonage Japan合同会社・東京拠点・Japan remote求人を確認",
  japanSince: "2017年に東京拠点を公式発表",
  solutions: [
    { name: "Communications APIs", valueProp: "messaging、voice、video、authenticationをapplicationへ組み込む。", url: "https://www.vonage.com/communications-apis/", competitors: "Twilio、Sinch、cloud provider API。", differentiation: "複数channel、carrier reach、network API、enterprise support。" },
    { name: "Vonage Contact Center", valueProp: "agentと顧客のvoice・digital interactionをcloudで管理する。", url: "https://www.vonage.com/contact-centers/", competitors: "Genesys、Amazon Connect、Five9。", differentiation: "communications APIとSalesforce等のworkflow統合。" },
    { name: "Network APIs", valueProp: "carrier networkのidentity・quality情報をdeveloper向けAPIで提供する。", url: "https://www.vonage.com/communications-apis/network-apis/", competitors: "carrier direct、other CPaaS。", differentiation: "Ericssonと通信事業者ecosystemへの接続。" },
  ],
  fitTags: ["CPaaS", "Customer Success", "API", "Expansion", "Japan Remote", "Ericsson"],
  comparisons: [
    { arena: "CPaaS", companies: ["Vonage", "Twilio", "Sinch"], why: "channel、reach、delivery、support、cost" },
    { arena: "Contact Center", companies: ["Vonage", "Genesys", "Amazon Connect"], why: "workflow、routing、AI、運用" },
    { arena: "Network API", companies: ["Vonage", "carrier direct", "other CPaaS"], why: "coverage、identity、quality、commercial model" },
  ],
}, {
  slug: "vonage", leaderName: "Niklas Heuveldop", leaderLabel: "CEO, Vonage / Group SVP, Ericsson", leaderUrl: "https://www.vonage.com/about-us/management-team/niklas-heuveldop/", localName: "未確認", localLabel: "Japan責任者", localUrl: "https://www.vonage.com/about-us/newsroom/press-releases/Vonage-Selected-by-KDDI-Web-Communications-to-Advance-Digital-Transformation-and-Customer-Engagement-for-Businesses-in-Japan/45c39f58-56fe-4f6f-a0ec-334a46f83dc3/",
  companyId: "vonage-company", jobId: "vonage-job", customersId: "vonage-customers", externalId: "vonage-external", financeId: "vonage-finance",
  targets: ["Digital Product・application責任者", "Customer Experience・contact center責任者", "Identity・authentication責任者"],
  heroSummary: "顧客接点がmessaging、voice、video、認証へ分かれ、provider、data、障害対応、費用の管理が複雑になる課題を解決する。通信機能をAPIとcloud workflowへ統合し、到達率、conversion、support効率、継続率を改善する。",
  competitors: "Twilio、Sinch、Genesys、Amazon Connect、carrier・cloud標準serviceとの比較では、channel coverage、到達、統合、support、総costを見る。",
  feature: "Communications API、Contact Center、Network APIで顧客とのdigital interactionを接続する。",
  advantage: "messaging、voice、video、認証、contact centerを一つのvendor関係とdeveloper ecosystemで扱い、Ericssonのnetwork接続へ広げる。",
  benefit: "到達率、認証成功、conversion、handling time、開発・運用工数を改善し、顧客接点の継続性を高める。",
  evidence: "日本企業HugComeのVideo API事例とKDDI Web Communicationsとの国内協業を公式公開。",
  marketVerdict: "日本法人・国内proof・現行CS求人は確認できるが、日本売上、顧客数、team人数、retentionは非公開。",
  marketParagraphs: ["顧客journeyがdigital化するほど、channel統合、認証、到達、個人data、継続性を同時に管理する需要が増える。", "日本ではglobal coverageだけでなく、国内carrier・partner、local support、delivery品質、契約・data handlingの説明が成長条件になる。"],
  cultureHeadline: "日本のAPI顧客へadoptionからrenewal・expansionまで入るRemote Customer Success role。",
  classification: "フルリモート", displayLabel: "Work from Home - Japan", officeDays: "出社日数は未記載", remoteOnly: "求人はWork from Home", flexibility: "出張頻度・勤務時間帯は未記載",
  goodFor: ["technical CSとcommercial expansionを両立したい人", "API利用を顧客KPIへ変えたい人"], cautionFor: ["pure supportだけを望む人", "担当範囲が固定された大組織を前提にする人"],
  unresolved: [
    ["担当portfolio", "adoption、renewal、expansionを持つ。", "担当社数、segment、ARR、renewal calendar、usage目標は何ですか。"],
    ["評価", "顧客成果とcommercial outcomeを担う。", "評価KPI、renewal・upsell credit、team quota、達成率を教えてください。"],
    ["delivery", "Product・Engineeringとissue解決する。", "日本語support、TAM、SE、incident escalationの責任境界はどうなっていますか。"],
    ["組織", "Japan remote roleである。", "雇用主体、reporting line、日本team人数、勤務時間帯、出張条件は何ですか。"],
    ["career", "Junior CSMとして採用する。", "直近24カ月の昇進・異動・退職と次levelの定量基準は。"],
  ],
});

const coderabbitIntelligence = build({
  checkedAt,
  slug: "coderabbit",
  name: "CodeRabbit",
  jobUrl: "https://jobs.ashbyhq.com/coderabbit/0e889e16-a2a3-47f3-bce9-ce87ef795762",
  officialUrl: "https://www.coderabbit.ai/",
  customersUrl: "https://www.coderabbit.ai/case-studies/how-coderabbit-is-helping-swiggy-ship-faster",
  externalUrl: "https://www.meti.go.jp/policy/netsecurity/mng_guide.html",
  financeUrl: "https://www.coderabbit.ai/blog/introducing-agentic-change-management",
  salesSnapshot: "AI coding agentで増えるpull requestをreview、優先順位付け、説明、security監視まで管理する会社。Japan AEはCTO・VP Engineering・DevOpsへ、review待ち、品質、security、限られた人の判断時間をbusiness caseとして売る。",
  growthSummary: "2026年8月の会社公式発表はSeries Cで1.43億ドルを調達し評価額15億ドル、前年比売上5倍超、週200万超のcode review、17,000社超の顧客を表示。日本売上、日本顧客数、local team人数は非公開。",
  ipoSummary: "非公開企業。Series C後の評価額は15億ドル。IPO時期、日本ARRは公表されていない。",
  milestones: [
    { year: "2023", label: "創業", detail: "AIが生成するcodeを独立して検証する課題からAI code reviewを開発。", source: "company" },
    { year: "2025", label: "Series B", detail: "AI code reviewの拡張資金を調達。", source: "finance" },
    { year: "2026.08", label: "Series C", detail: "1.43億ドルを調達し、評価額15億ドル。", source: "finance" },
    { year: "2026.08", label: "Agentic Change Management", detail: "reviewにtriage、change explainability、security monitoringを統合。", source: "company" },
    { year: "2026.08", label: "Japan Sales採用", detail: "日本営業のfounding memberとなるAccount Executiveを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Swiggyの公式事例は、manual review待ちとsenior engineerのbottleneckを減らし、平均PR merge timeを70%、review cycleを30%減らしたと説明する。価値はcomment数ではなくdelivery速度と品質の両立にある。" },
    { title: "製品の成り立ちから見る課題", body: "AIがcodeを書くほど誰が独立して検証するかという問いからcode reviewを始め、PRの優先順位、影響説明、merge後のsecurity監視へ拡張した。核は生成側とは別のjudgment layerを置くこと。" },
    { title: "外部環境の要求から見る課題", body: "生成AIでsoftware changeが増えるほど、企業はreview責任、secure development、dependency、access、audit、incident対応を保ちながらrelease速度を上げる必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "coding agentが大量のchangeを作り、人のreview capacityよりPRの量と複雑性が速く増える。" },
    { label: "課題", body: "review待ち、context不足、見逃し、priority不明が増え、speedを上げてもproduction riskとsenior engineerの負荷が高まる。" },
    { label: "解決策", body: "代表repositoryでAI review、triage、explainability、securityを既存CIへ組み込み、merge time、review cycle、defect、human hoursを測る。" },
    { label: "選定の理由", body: "GitHub Copilot review、CodeQL、Sonar、Snyk、manual reviewとの比較で、repository context、actionability、agent連携、security、運用負荷に優位がある場合に選ぶ。" },
  ],
  openingHook: "coding agentが増やしたPRのうち、人が十分なcontextを持ってreviewできず待っているものは何件ありますか。",
  valueHypothesis: "PR merge time、review cycle、human review hours、escaped defect、security finding、change failure rateを導入前後で比較する。",
  objection: "GitHubと既存SAST、human review、coding agentのself-checkで足りる。",
  reframe: "comment数ではなく、独立検証、repository context、優先順位、説明、merge後監視を含むengineering system全体で比較する。",
  facts: [
    { label: "Series C", value: "1.43億ドル", detail: "2026年8月の会社公式発表。", source: "finance" },
    { label: "評価額", value: "15億ドル", detail: "Series C後の会社公式発表。", source: "finance" },
    { label: "顧客", value: "17,000社超", detail: "2026年8月の公式表示。", source: "company" },
    { label: "利用repository", value: "600万", detail: "2026年8月の公式表示。", source: "company" },
    { label: "weekly reviews", value: "200万超", detail: "2026年8月の会社公式発表。", source: "finance" },
    { label: "日本求人", value: "Account Executive 1件", detail: "RemoteのJapan founding sales role。", source: "job" },
  ],
  customers: [
    { company: "Swiggy", products: "CodeRabbit", outcome: "平均PR merge time 70%減、review cycle 30%減、human reviewer 1人分の置換を公式事例で表示。", implication: "engineering velocityとqualityを同じPoVで測るproof。" },
    { company: "Visma", products: "CodeRabbit", outcome: "公式customer storyを公開。", implication: "複数teamへのEnterprise adoptionを検証する材料。" },
    { company: "日本企業", products: "CodeRabbit", outcome: "今回の一次調査でnamed customer caseを確認できず。", implication: "国内proofは面接と今後の公式発表で確認する。" },
  ],
  externalSignals: [
    { label: "secure development", value: "経営riskとしての管理", detail: "経産省のサイバーセキュリティ経営ガイドラインは経営者の責任と継続的なrisk管理を示す。", caveat: "AI review単体でsecurityや法令適合を保証しない。" },
    { label: "AI-generated code", value: "review capacityの制約", detail: "生成量が増えても、architecture、intent、security、production影響の最終責任は組織に残る。", caveat: "効果はrepository、language、workflow、運用ruleで異なる。" },
  ],
  role: "Japan Salesのfounding memberとしてnamed mid-enterpriseへoutboundし、demo、PoV、business value assessment、six-figure close、land-and-expandをfull-cycleで持つ。",
  organization: "日本Remoteのfull-time role。日本法人、常設office、雇用主体、reporting line、local SE・CS・supportは公式求人で確認できない。",
  careerValue: "AI developer tools、CTO・Engineering buyer、technical PoV、six-figure Enterprise deal、日本GTM構築を横断する経験。",
  globalHeadcount: "非公開",
  japanPresence: "Japan founding sales求人を確認。日本法人・常設officeは未確認",
  japanSince: "2026年8月に現行Japan求人を確認",
  solutions: [
    { name: "AI Code Review", valueProp: "pull requestをrepository contextとteam ruleで自動reviewする。", url: "https://www.coderabbit.ai/", competitors: "GitHub Copilot review、manual review、Sonar。", differentiation: "multi-repository context、学習、agent loop、committable suggestion。" },
    { name: "Triage / Change Stack", valueProp: "PRのpriority、risk、reviewer fitを整理し、大きなchangeの影響を説明する。", url: "https://www.coderabbit.ai/blog/introducing-agentic-change-management", competitors: "GitHub queue、issue tracker、manual architecture review。", differentiation: "review contextをpriorityとchange explainabilityへ再利用。" },
    { name: "CodeRabbit Security", valueProp: "merge後のcodebaseを継続監視し、reachableなriskと修正案を示す。", url: "https://www.coderabbit.ai/security", competitors: "Snyk、Semgrep、CodeQL、Sonar。", differentiation: "AI reviewと同じcodebase contextでlogic・security riskを検証。" },
  ],
  fitTags: ["日本未進出", "AI Code Review", "Developer Tools", "Enterprise", "Founding Sales", "Remote Japan"],
  comparisons: [
    { arena: "AI code review", companies: ["CodeRabbit", "GitHub Copilot", "manual review"], why: "context、actionability、human hours" },
    { arena: "Application security", companies: ["CodeRabbit", "Snyk", "Semgrep", "CodeQL"], why: "coverage、reachability、workflow" },
    { arena: "Change management", companies: ["CodeRabbit", "GitHub", "issue tracker"], why: "priority、explainability、governance" },
  ],
}, {
  slug: "coderabbit", leaderName: "Harjot Gill", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://www.coderabbit.ai/blog/introducing-agentic-change-management", localName: "未確認", localLabel: "Japan責任者", localUrl: "https://jobs.ashbyhq.com/coderabbit/0e889e16-a2a3-47f3-bce9-ce87ef795762",
  companyId: "coderabbit-company", jobId: "coderabbit-job", customersId: "coderabbit-customers", externalId: "coderabbit-external", financeId: "coderabbit-finance",
  targets: ["技術・開発責任者（CTO・VP Engineering）", "基盤開発・DevOps責任者", "アプリケーションセキュリティ責任者"],
  heroSummary: "coding agentが人のreview capacityを超える量と複雑さのPRを作り、review待ち、context不足、見逃し、priority不明が増える課題を解決する。独立したAI review、triage、影響説明、security監視でdelivery速度とsoftware品質を両立する。",
  competitors: "GitHub Copilot review、manual review、Snyk、Semgrep、CodeQL、Sonarとの比較では、context、actionability、agent連携、security、運用負荷を見る。",
  feature: "AI code review、PR triage、change explainability、post-merge security monitoringを一つのcontrol layerで提供する。",
  advantage: "repositoryとteam ruleのcontextをreviewだけでなくpriority、説明、securityへ再利用し、coding agentとも修正loopを作る。",
  benefit: "PR merge time、review cycle、human review hours、escaped defectを減らし、限られたsenior engineerの判断を重要changeへ集中させる。",
  evidence: "Swiggyの公式事例は平均PR merge time 70%減、review cycle 30%減を表示。日本のnamed caseは未確認。",
  marketVerdict: "急成長とJapan founding sales求人は強いsignalだが、日本法人、local delivery、国内顧客、pipeline、達成率は未確認。",
  marketParagraphs: ["AI code generationが増えるほど、review、priority、security、auditを同じ速度でscaleする需要が強まる。", "日本ではtechnical buyerへのPoVだけでなく、日本語、security review、local SE・CS、国内proof、雇用・契約主体が成立条件になる。"],
  cultureHeadline: "日本marketのoutbound、PoV、初期受注、playbook作りを持つfounding Enterprise Sales role。",
  classification: "フルリモート", displayLabel: "Japan Remote", officeDays: "常設office未確認", remoteOnly: "求人はRemote", flexibility: "雇用主体、勤務時間帯、出張頻度は未記載",
  goodFor: ["AI developer toolsの日本GTMを作りたい人", "CTO向けtechnical PoVとlarge dealを両立したい人"], cautionFor: ["完成済みの国内support体制を前提にする人", "inbound中心のterritoryを望む人"],
  unresolved: [
    ["法人・雇用", "Japan Remoteのfounding roleを採用する。", "雇用主体、契約形態、benefit、常設office、日本team計画は何ですか。"],
    ["territory", "named mid-enterpriseをoutboundする。", "named account数、既存顧客、white space、self-source比率、担当segmentは。"],
    ["quota", "six-figure dealとdirect revenueを持つ。", "quota、pay mix、ACV、cycle、coverage、ramp、達成率を教えてください。"],
    ["technical delivery", "PoVとdemoをAEが進める。", "日本語のSE、Security、CS、Support、PoV環境の責任境界は。"],
    ["国内proof", "global顧客と成長は確認できる。", "日本のproduction顧客、renewal、導入成果をいつ公式化できますか。"],
  ],
});

vonageIntelligence.sources.push({
  id: "vonage-2021-10k",
  label: "Vonage Holdings 2021 Form 10-K",
  url: "https://www.sec.gov/Archives/edgar/data/1272830/000127283022000040/vg-20211231.htm",
  kind: "法定開示",
  scope: "Ericsson買収前の最終通期売上・事業構成",
  checkedAt,
});
vonageIntelligence.facts.push({
  label: "2021年売上高（買収前）",
  value: "$1.409B",
  detail: "Ericsson買収前の最終通期Form 10-K。現在のVonage単体売上ではない。",
  sourceIds: ["vonage-2021-10k"],
});

coderabbitIntelligence.sources.push(
  {
    id: "coderabbit-revenue-interview",
    label: "CodeRabbit CEO interview (Summation)",
    url: "https://summation.buzzsprout.com/1783651/episodes/19628794-coderabbit-ceo-harjot-gill-on-software-s-new-bottleneck-and-zero-to-50m-arr-in-2-years",
    kind: "外部集計",
    scope: "2026年8月の経営者発言によるARR規模。監査済み財務ではない",
    checkedAt,
  },
  {
    id: "coderabbit-linkedin-scale",
    label: "CodeRabbit LinkedIn company page",
    url: "https://www.linkedin.com/company/coderabbitai",
    kind: "外部集計",
    scope: "会社規模レンジ。公式の厳密な在籍人数ではない",
    checkedAt,
  },
);
coderabbitIntelligence.facts.push({
  label: "年間売上規模（CEO発言）",
  value: "$50M ARR",
  detail: "2026年8月のCEO interviewで示された規模。監査済み財務ではなく、日本ARRでもない。",
  sourceIds: ["coderabbit-revenue-interview"],
});
coderabbitIntelligence.companyStats.globalHeadcount = {
  value: "201〜500人規模",
  detail: "LinkedIn company pageの会社規模レンジ。公式の厳密な在籍人数ではなく、表示上の所属人数とも一致しない場合がある。",
  sourceId: "coderabbit-linkedin-scale",
};

export const daily20260823IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  vonage: vonageIntelligence,
  coderabbit: coderabbitIntelligence,
};

export function applyDaily20260823Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const closures = [
    {
      slug: "patsnap",
      ids: new Set(["patsnap-job"]),
      detail: "Forward Deployed EngineerとKey Account Managerの公式求人URLが404となったため、Genba掲載求人から除外。別の現行求人の有無や採用停止までは意味しない。",
    },
    {
      slug: "pingcap",
      ids: new Set(["pingcap-job"]),
      detail: "Solution Architectの公式求人URLが404となったため、Genba掲載求人から除外。別の現行求人の有無や採用停止までは意味しない。",
    },
  ];

  for (const closure of closures) {
    const intelligence = intelligenceBySlug[closure.slug];
    if (!intelligence) continue;
    intelligence.researchedAt = checkedAt;
    intelligence.facts = intelligence.facts.map((fact) => /日本.*求人|求人.*日本/.test(fact.label)
      ? { ...fact, value: "Genba掲載0件", detail: `${closure.detail} 2026年8月23日確認。` }
      : fact);
    intelligence.marketStatus.milestones = [
      ...intelligence.marketStatus.milestones.filter((item) => !closure.ids.has(item.sourceId) || !/採用|求人/.test(item.label)),
      { year: "2026.08.23", label: "掲載求人終了", detail: closure.detail, sourceId: `${closure.slug}-job` },
    ];
    if (intelligence.marketStatus.japanGrowth) {
      intelligence.marketStatus.japanGrowth = {
        ...intelligence.marketStatus.japanGrowth,
        headline: "Genba掲載中の現行求人は0件。",
        narrative: `${closure.detail} 公式Career全体の採用状況は継続観測する。`,
      };
    }
  }
}
