import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";

const cursorBase = buildIntelligence({
  slug: "cursor",
  name: "Cursor",
  jobUrl: "https://cursor.com/careers",
  officialUrl: "https://cursor.com/ja",
  customersUrl: "https://cursor.com/blog/money-forward",
  externalUrl: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html",
  financeUrl: "https://cursor.com/blog/series-d",
  salesSnapshot: "「生成AIを使ってもissueからreview済みproduction codeまでの時間が縮まらない課題」をCTO・VP Engineeringへ問う会社。「開発者ごとにAI利用と成果がばらつき、投資対効果を説明できない課題」をEngineering Operationsへ可視化する会社。「source code・model・権限・監査を管理しながら全社展開できない課題」をeditor、agent、code review、cloud execution、enterprise controlへ束ねる会社で、developer起点の熱量を経営案件へ変える営業としての面白さがある。",
  growthSummary: "2025年11月に23億ドルを調達し、post-money valuation 293億ドル、annualized revenue 10億ドル超、global team 300人超を会社が公表。企業向けでは50,000社超、Fortune 500の64%が利用すると掲げ、2026年にMoney Forwardの国内大規模導入とJapan向けGTM・technical role 5件を公開している。",
  ipoSummary: "非公開企業。IPO時期、日本ARR、日本の有料顧客数は公表されていない。",
  milestones: [
    { year: "2022", label: "Anysphere創業", detail: "AI-nativeなsoftware development環境を作る会社として創業。", source: "company" },
    { year: "2024", label: "Series A", detail: "6,000万ドルを調達し、40,000超の顧客を公表。", source: "company" },
    { year: "2025.06", label: "Series C", detail: "9億ドルを調達し、valuation 99億ドル、ARR 5億ドル超を公表。", source: "finance" },
    { year: "2025.11", label: "Series D", detail: "23億ドルを調達し、valuation 293億ドル、annualized revenue 10億ドル超、team 300人超を公表。", source: "finance" },
    { year: "2026", label: "Japan GTM採用", detail: "Strategic AE、Channel、Field Engineering、FDE、Solutions Architectの5職種を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Money Forwardは1,000人超の日次利用を進め、engineering以外のproduct・design・QAにも利用を拡大。NVIDIAは30,000人のdeveloperが日次利用し、Stripeは3,000人超のengineerへ標準展開した。共通課題は個人のcode補完ではなく、大規模組織でAIを日常の開発workflowへ定着させ、速度と品質を同時に測ること。" },
    { title: "製品の成り立ちから見る課題", body: "Cursorは既存IDEへAI機能を足す発想ではなく、codebaseを理解して人とagentが共同作業するeditorから始まり、Cloud Agents、Bugbot、enterprise controlへ拡張した。設計思想は一行の生成速度より、調査・実装・test・reviewまでのsoftware development loopを短くすること。" },
    { title: "外部環境の要求から見る課題", body: "日本企業ではDX、内製化、legacy modernization、生成AI活用を進める一方、software人材不足とAI governanceへの説明責任が残る。生成量が増えるほどreview、security、品質保証が次のbottleneckになり、開発速度・品質・統制を同じworkflowで測れる基盤が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "各developerが複数のAI coding toolを試し、code生成量は増える一方、teamごとの使い方と成果指標が揃っていない。" },
    { label: "課題", body: "licenseを配ってもadoptionがばらつき、review待ち、legacy codeの理解、security・governance、tool乱立が残るため、経営はAI投資の成果を説明できない。" },
    { label: "解決策", body: "一つのteamとrepositoryでCursorを日常workflowへ組み込み、issue着手からreview済みPRまでの時間、review待ち、defect、adoption、tool costをbaseline比較する。" },
    { label: "選定の理由", body: "GitHub Copilot、Claude Code、Gemini Code Assist、既存IDEとの比較で、editorとagent、code review、enterprise governanceを一つにし、複数modelを使い分けながら大規模展開できる条件なら選ばれる。" },
  ],
  openingHook: "AI coding licenseを配った後、issueがreview済みproduction codeになるまでの時間は何%短くなり、品質指標はどう変わりましたか。",
  valueHypothesis: "対象teamでtime-to-reviewed-PR、review待ち時間、escaped defect、onboarding時間、active user、AI変更のacceptance、tool costを導入前後で比較する。",
  objection: "開発者はすでにCopilotやClaude Codeを使っており、新しいeditorへ標準化するとsecurity riskとchange costが増える。",
  reframe: "code補完の好みではなく、issueからproductionまでの時間、review・品質、model選択、source codeの扱い、全社統制、tool乱立を含む総costで比較する。",
  facts: [
    { label: "annualized revenue", value: "$1B+", detail: "2025年11月のSeries D発表時点の会社公表値。", source: "finance" },
    { label: "Series D", value: "$2.3B", detail: "2025年11月に調達。", source: "finance" },
    { label: "valuation", value: "$29.3B", detail: "Series D後のpost-money valuation。", source: "finance" },
    { label: "global team", value: "300+", detail: "Series D発表で公表。", source: "finance" },
    { label: "enterprise", value: "50,000+社", detail: "日本語Enterpriseページの会社公表値。", source: "company" },
    { label: "現在の求人", value: "Japan向け5件", detail: "Strategic AE、Channel、Field Engineering、FDE、Solutions Architectを確認。", source: "job" },
  ],
  customers: [
    { company: "Money Forward", products: "Cursor Enterprise / Agents", outcome: "1,000人超が日次利用。会社事例ではengineerあたり週15〜20時間の削減、QA生成70%高速化を紹介。", implication: "日本の大規模開発組織で、engineeringからproduct・design・QAへ横展開するreferenceになる。" },
    { company: "NVIDIA", products: "Cursor Enterprise", outcome: "30,000人のdeveloperが日次利用し、会社事例ではcode commitが3倍、bug rateは横ばいと紹介。", implication: "生成量だけでなく品質を維持した全社展開をbusiness caseにできる。" },
    { company: "Stripe", products: "Cursor Enterprise", outcome: "3,000人超のengineerへpre-installし、rules・guardrailsを整備して標準展開。", implication: "developer preferenceとenterprise standardを両立するchange management事例になる。" },
  ],
  externalSignals: [
    { label: "software内製化", value: "DXとAI活用を同時推進", detail: "IPAのDX動向2025は、agile、内製化、AI・生成AI、legacy modernization、人材の論点を横断して調査している。", caveat: "市場全体の傾向であり、Cursor導入による生産性を直接示すものではない。" },
    { label: "AI governance", value: "速度と統制の両立", detail: "生成AIを開発へ組み込むほど、利用model、data、access、review、責任分界を組織として管理する必要がある。", caveat: "必要なcontrolは業界、codebase、data、risk許容度で異なり、製品導入だけでは完結しない。" },
  ],
  role: "Strategic AEが日本のnamed accountでnew logoとexpansionを持ち、Channel責任者、Field Engineering、FDE、Solutions Architectとmarket entryからproduction adoptionまでを作る。",
  organization: "global team 300人超に対しJapan向けcommercial・partner・pre-sales・delivery・post-salesを同時採用する、初期GTMのbuild phase。",
  careerValue: "AI developer platformのPLG-to-enterprise、Strategic sales、partner ecosystem、technical evaluation、production adoptionを日本市場の立ち上げ局面で経験できる。",
  globalHeadcount: "300+",
  japanPresence: "日本語公式サイト / Japan・Tokyo向けGTM採用。日本法人・常設officeは一次情報で未確認",
  japanSince: "2026年にJapan向け5職種と国内大規模顧客事例を確認",
  solutions: [
    { name: "Cursor Agents / Editor", valueProp: "codebaseを理解し、調査・実装・testを人とagentで進めるAI-native development環境。", url: "https://cursor.com/ja", competitors: "GitHub Copilot、Claude Code、Gemini Code Assist。", differentiation: "editorを中心に複数modelとagent workflowを一体化し、個人利用からteam標準へ広げる。" },
    { name: "Cursor Enterprise", valueProp: "SSO・SCIM、centralized controls、privacy mode等で大規模組織のAI coding利用を管理。", url: "https://cursor.com/ja/enterprise", competitors: "GitHub Copilot Enterprise、Amazon Q Developer、Gemini Code Assist Enterprise。", differentiation: "developer adoptionを保ちながらzero data retention、model controls、管理機能を同じ製品で提供。" },
    { name: "Cloud Agents / Bugbot", valueProp: "backgroundで開発taskを進め、pull requestのreview・bug検出までdevelopment lifecycleを拡張。", url: "https://cursor.com/ja", competitors: "GitHub Copilot coding agent、Devin、CodeRabbit。", differentiation: "editor内のcontextとenterprise workflowをcloud execution・reviewへ接続する。" },
  ],
  fitTags: ["日本進出直後", "Strategic Enterprise", "AI Coding", "Developer Tools", "PLG-to-Enterprise", "Founding Team", "Partner", "Technical Sale", "高agency"],
  comparisons: [
    { arena: "AI coding platform", companies: ["Cursor", "GitHub Copilot", "Gemini Code Assist"], why: "editor、agent、model選択、enterprise governanceの比較" },
    { arena: "coding agent", companies: ["Cursor", "Claude Code", "Devin"], why: "interactive coding、autonomous task、production workflowの比較" },
    { arena: "AI code review", companies: ["Cursor Bugbot", "GitHub Copilot", "CodeRabbit"], why: "review coverage、repository context、既存workflowとの統合比較" },
  ],
});

const cursorSources: ResearchSource[] = [
  { id: "cursor-enterprise", label: "Cursor Enterprise（日本語）", url: "https://cursor.com/ja/enterprise", kind: "企業公式", scope: "企業利用数・管理機能・security", checkedAt: "2026-08-12" },
  { id: "cursor-security", label: "Cursor Security", url: "https://cursor.com/security", kind: "企業公式", scope: "security・privacy・compliance", checkedAt: "2026-08-12" },
  { id: "cursor-money-forward", label: "Cursor customer story: Money Forward", url: "https://cursor.com/blog/money-forward", kind: "企業公式", scope: "日本顧客・導入規模・成果", checkedAt: "2026-08-12" },
  { id: "cursor-nvidia", label: "Cursor customer story: NVIDIA", url: "https://cursor.com/blog/nvidia", kind: "企業公式", scope: "大規模導入・開発成果", checkedAt: "2026-08-12" },
  { id: "cursor-stripe", label: "Cursor customer story: Stripe", url: "https://cursor.com/blog/stripe", kind: "企業公式", scope: "全社展開・governance", checkedAt: "2026-08-12" },
  { id: "cursor-series-a", label: "Cursor Series A", url: "https://www.cursor.com/blog/series-a", kind: "企業公式", scope: "創業・資金調達・顧客規模", checkedAt: "2026-08-12" },
  { id: "cursor-series-c", label: "Cursor Series C", url: "https://www.cursor.com/en/blog/series-c", kind: "企業公式", scope: "資金調達・ARR・valuation", checkedAt: "2026-08-12" },
  { id: "cursor-job-ae", label: "Strategic Enterprise Account Executive - Japan", url: "https://cursor.com/careers/strategic-enterprise-account-executive-japan", kind: "企業公式", scope: "日本sales motion・採用要件", checkedAt: "2026-08-12" },
  { id: "cursor-job-partner", label: "Director, Channel & Partners", url: "https://cursor.com/careers/director-channel-partners", kind: "企業公式", scope: "Japan partner strategy・採用要件", checkedAt: "2026-08-12" },
  { id: "cursor-job-field", label: "Field Engineering - Japan", url: "https://cursor.com/careers/field-engineering-japan", kind: "企業公式", scope: "pre-sales・technical evaluation", checkedAt: "2026-08-12" },
  { id: "cursor-job-fde", label: "Forward Deployed Engineer - Japan", url: "https://cursor.com/careers/forward-deployed-engineer-australia-japan-singapore", kind: "企業公式", scope: "production adoption・customer engineering", checkedAt: "2026-08-12" },
  { id: "cursor-job-sa", label: "Solutions Architect - Japan", url: "https://cursor.com/careers/solutions-architect-japan", kind: "企業公式", scope: "post-sales adoption・expansion", checkedAt: "2026-08-12" },
];

const cursorIntelligence: CompanyPublicIntelligence = {
  ...cursorBase,
  marketStatus: {
    ...cursorBase.marketStatus,
    milestones: cursorBase.marketStatus.milestones.map((milestone) => ({
      ...milestone,
      sourceId:
        milestone.year === "2022" || milestone.year === "2024"
          ? "cursor-series-a"
          : milestone.year === "2025.06"
            ? "cursor-series-c"
            : milestone.sourceId,
    })),
  },
  facts: [
    { label: "annualized revenue", value: "$1B+", detail: "2025年11月のSeries D発表時点の会社公表値。", sourceIds: ["cursor-finance"] },
    { label: "Series D", value: "$2.3B", detail: "2025年11月に調達。", sourceIds: ["cursor-finance"] },
    { label: "valuation", value: "$29.3B", detail: "Series D後のpost-money valuation。", sourceIds: ["cursor-finance"] },
    { label: "global team", value: "300+", detail: "Series D発表で公表。", sourceIds: ["cursor-finance"] },
    { label: "enterprise", value: "50,000+社", detail: "日本語Enterpriseページの会社公表値。", sourceIds: ["cursor-enterprise"] },
    { label: "現在の求人", value: "Japan向け5件", detail: "Strategic AE、Channel、Field Engineering、FDE、Solutions Architectを確認。", sourceIds: ["cursor-job", "cursor-job-ae", "cursor-job-partner", "cursor-job-field", "cursor-job-fde", "cursor-job-sa"] },
  ],
  customerProof: [
    { company: "Money Forward", products: "Cursor Enterprise / Agents", outcome: "1,000人超が日次利用。会社事例ではengineerあたり週15〜20時間の削減、QA生成70%高速化を紹介。", implication: "日本の大規模開発組織で、engineeringからproduct・design・QAへ横展開するreferenceになる。", sourceId: "cursor-money-forward" },
    { company: "NVIDIA", products: "Cursor Enterprise", outcome: "30,000人のdeveloperが日次利用し、会社事例ではcode commitが3倍、bug rateは横ばいと紹介。", implication: "生成量だけでなく品質を維持した全社展開をbusiness caseにできる。", sourceId: "cursor-nvidia" },
    { company: "Stripe", products: "Cursor Enterprise", outcome: "3,000人超のengineerへpre-installし、rules・guardrailsを整備して標準展開。", implication: "developer preferenceとenterprise standardを両立するchange management事例になる。", sourceId: "cursor-stripe" },
  ],
  sources: [...cursorBase.sources, ...cursorSources],
};

export const cursorIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  cursor: cursorIntelligence,
};
