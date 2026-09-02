import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-02";

type DailyInput = {
  profile: Profile;
  patch: CompactPatchInput;
  preEntry?: {
    verdict: string;
    factSignals: Array<[string, string, string[]]>;
    hurdles: Array<[string, string, string[]]>;
    conditions: Array<[string, string]>;
    watches: string[];
  };
};

function build(input: DailyInput) {
  const intelligence = buildIntelligence(input.profile);
  applyStandard(intelligence, buildCompactPatch(input.patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.02";
  if (input.preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: input.preEntry.verdict,
      factSignals: input.preEntry.factSignals.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      hurdles: input.preEntry.hurdles.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      readinessConditions: input.preEntry.conditions.map(([title, body]) => ({ title, body })),
      watchSignals: input.preEntry.watches,
    };
  }
  return intelligence;
}

const kong = build({
  profile: {
    checkedAt, slug: "kong", name: "Kong",
    jobUrl: "https://open.talentio.com/r/1/c/japancloud/homes/4310",
    officialUrl: "https://konghq.com/company/about-us",
    customersUrl: "https://jp.konghq.com/customers",
    externalUrl: "https://www.digital.go.jp/policies/priority-policy-program",
    financeUrl: "https://konghq.com/blog/news/kong-surpasses-100m-arr",
    salesSnapshot: "クラウド、社内サービス、生成AIごとに増える接続を、開発速度を落とさず安全に公開・統制・観測する課題を解く。APIとAIモデル間の通信を一つの運用へまとめ、障害・権限・費用の説明可能性を高める。",
    growthSummary: "会社公式は2023年にARR 1億ドル超、500人超、600超の顧客組織を公表。日本ではJapan Cloudとの合弁、六本木拠点、現行2求人を確認したが、日本売上・更新率・在籍人数は非公開。",
    ipoSummary: "非公開企業。2023年の公式情報でARR 1億ドル超を確認したが、IPO時期と日本単体の売上は公表されていない。",
    milestones: [
      { year: "2009", label: "前身Mashape創業", detail: "ミラノの小さな拠点でAPIをつなぐ事業を開始。", source: "company" },
      { year: "2017", label: "Kongへ集中", detail: "API gatewayをオープンソース化し、Kong事業へ集中。", source: "company" },
      { year: "2021", label: "評価額14億ドル", detail: "Series Dで1億ドルを調達。", source: "finance" },
      { year: "2023", label: "ARR 1億ドル超", detail: "500人超・600超の顧客組織も公式公表。", source: "finance" },
      { year: "2023.08", label: "日本法人設立", detail: "Kong株式会社の法人番号指定と東京拠点を確認。", source: "company" },
      { year: "2026.09", label: "日本で2職種採用", detail: "営業開発とAccount Executiveを公式確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "APIが部門・クラウドごとに増えると、公開、認証、監視、障害対応が分散し、変更速度と安全性を同時に保ちにくい。" },
      { title: "製品の成り立ちから見る課題", body: "APIを簡単につなぐMashapeから始まり、gateway、service mesh、開発、AI gatewayへ接続管理の範囲を広げた。" },
      { title: "外部環境の要求から見る課題", body: "生成AIの本番利用でモデル、agent、tool間の通信が増え、企業は速度だけでなく権限、情報流出、障害、利用費を説明する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "複数クラウドと生成AIでAPI・モデル接続が急増する。" },
      { label: "課題", body: "個別gatewayと独自実装を重ねるほど、権限、観測、障害、費用の責任が分かれる。" },
      { label: "解決策", body: "対象業務の接続を一つの管理面へ寄せ、公開時間、障害率、権限違反、利用費を導入前後で比較する。" },
      { label: "選定の理由", body: "Apigee、MuleSoft、AWS、Azure、各AI gatewayと比べ、既存環境の自由度、処理性能、統制、運用負荷に優位がある場合に選ぶ。" },
    ],
    openingHook: "本番のAPIとAI通信を一つ追加するまで、何部門と何日が必要ですか。",
    valueHypothesis: "公開までの日数、障害率、認証・権限違反、重複gateway、開発工数、AI利用費を導入前後で比較する。",
    objection: "既存クラウドのgatewayで十分で、追加の接続基盤は複雑さを増やす。",
    reframe: "製品数ではなく、複数クラウドとAI通信の統制を一つに寄せたときの変更速度、障害、権限、総運用費で比べる。",
    facts: [
      { label: "起点", value: "2009年", detail: "イタリア・ミラノでMashapeを創業。" },
      { label: "Kong事業", value: "2017年", detail: "API gatewayをオープンソース化。" },
      { label: "世界社員", value: "500人超", detail: "2023年会社公式。", source: "finance" },
      { label: "ARR", value: "1億ドル超", detail: "2023年会社公式。", source: "finance" },
      { label: "顧客組織", value: "600超", detail: "2023年会社公式。", source: "customers" },
      { label: "日本求人", value: "2件", detail: "営業開発とAccount Executive。", source: "job" },
    ],
    customers: [
      { company: "Yahoo! JAPAN", products: "Kong Enterprise", outcome: "会社公式が初期のEnterprise顧客として公表。", implication: "大規模なデジタルサービスでAPI接続を標準化する参照になる。" },
      { company: "Cargill", products: "Kong", outcome: "会社事例はAPI運用の標準化と開発者体験改善を紹介。", implication: "事業・地域をまたぐ接続管理へ適用できる。" },
    ],
    externalSignals: [
      { label: "行政・企業DX", value: "API連携の増加", detail: "デジタル庁の重点計画は相互運用性とデータ連携を継続課題に置く。", caveat: "個別製品の導入効果を保証しない。" },
      { label: "生成AI本番化", value: "通信の統制", detail: "agentと外部toolの接続が増えるほど認証、監視、費用管理が必要になる。", caveat: "利用量と効果は顧客環境で検証が必要。" },
    ],
    role: "日本で見込み顧客の創出からEnterpriseの新規開拓、価値提案、予測、交渉、受注までを担う。",
    organization: "Kong株式会社の六本木拠点でJapan Cloudと連携。日本の正確な在籍人数と職種別構成は非公開。",
    careerValue: "API・AI通信を開発者の技術課題から経営の速度・安全・費用へ翻訳し、日本でEnterprise商談を作る経験。",
    globalHeadcount: "500人超（2023年会社公式）", japanPresence: "Kong株式会社・東京六本木", japanSince: "2023年11月に日本法人設立を公式発表",
    solutions: [
      { name: "Kong Konnect", valueProp: "APIとAI通信の公開・統制・観測を一元化。", url: "https://konghq.com/products/kong-konnect", competitors: "Apigee、MuleSoft、AWS、Azure。", differentiation: "オープンソースgatewayと複数クラウドの運用をつなぐ。" },
      { name: "Kong AI Gateway", valueProp: "複数モデルへの接続、認証、利用量、policyを管理。", url: "https://konghq.com/products/kong-ai-gateway", competitors: "各クラウドAI gateway、独自proxy。", differentiation: "既存API運用とAI通信を同じ接続層で扱う。" },
    ],
    fitTags: ["API", "AI Gateway", "Enterprise", "Sales", "Tokyo"],
    comparisons: [
      { arena: "API management", companies: ["Kong", "Google Apigee", "MuleSoft"], why: "自由度、統制、運用" },
      { arena: "Cloud gateway", companies: ["Kong", "AWS", "Microsoft Azure"], why: "複数環境、費用、開発者体験" },
    ],
  },
  patch: {
    slug: "kong", leaderName: "Augusto Marietti", leaderLabel: "共同創業者・CEO", leaderUrl: "https://konghq.com/company/about-us",
    localName: "有泉 大樹", localLabel: "Kong株式会社 社長", localUrl: "https://jp.konghq.com/news/kongjapangm-20240703",
    companyId: "kong-company", jobId: "kong-job", customersId: "kong-customers", externalId: "kong-external", financeId: "kong-finance",
    targets: ["情報・技術責任者", "API・基盤責任者", "生成AI・セキュリティ責任者"],
    heroSummary: "クラウド、社内サービス、生成AIごとに増える接続を、開発速度を落とさず安全に公開・統制・観測する課題を解く。APIとAI通信を一つの運用へまとめ、障害・権限・費用の説明可能性を高める。",
    competitors: "Google Apigee、MuleSoft、AWS、Microsoft Azure、各AI gateway。複数環境、統制、性能、運用、総費用で比較する。",
    feature: "API gateway、service mesh、AI gateway、開発・観測をKong Konnectでつなぐ。",
    advantage: "オープンソースgatewayの採用基盤と複数クラウド対応を、Enterpriseの統制・支援へ接続する。",
    benefit: "APIとAI通信の公開時間、障害、権限違反、重複運用、利用費を減らせる可能性がある。",
    evidence: "会社公式はARR 1億ドル超、500人超、600超の顧客組織を公表。Yahoo! JAPANを初期Enterprise顧客として掲載。",
    marketVerdict: "日本法人、六本木拠点、国内Partner、現行2求人を確認。API管理の既存需要をAI通信の統制へ広げられるかが焦点。",
    marketParagraphs: ["API連携と生成AIの本番利用が増え、接続ごとの認証・観測・費用管理を統一する需要は続く。", "今後3〜5年はgateway機能だけでなく、複数cloud・modelの変更速度と統制を日本の事例で証明できるかが成長を分ける。"],
    cultureHeadline: "APIの開発者基盤を、AI時代の日本Enterpriseへ広げる営業組織。",
    classification: "ハイブリッド", displayLabel: "東京・六本木のHybrid勤務", officeDays: "出社日数は未確認", remoteOnly: "完全remoteではない", flexibility: "顧客訪問・出社・英語利用は面接確認",
    goodFor: ["技術課題を経営成果へ翻訳したい人", "新規開拓と市場形成を両方担いたい人"], cautionFor: ["既存顧客の定期訪問だけを望む人", "複雑な技術商談を避けたい人"],
    unresolved: [["日本の達成可能性", "2職種を採用。", "日本のquota、達成率、ACV、cycle、既存案件は。"], ["支援体制", "Japan Cloudと合弁。", "営業、SE、CS、Partnerの人数と責任境界は。"], ["AI需要", "AI Gatewayを展開。", "日本で本番利用・有償拡大した顧客事例は。"], ["競争", "主要cloudにもgatewayがある。", "日本での勝因・敗因と置換対象は。"], ["報酬・昇進", "給与・評価は非公開。", "pay mix、株式、立ち上がり保証、昇進基準は。"]],
  },
});

function preEntryCompany(input: {
  slug: string; name: string; jobUrl: string; officialUrl: string; customersUrl: string; financeUrl: string;
  salesSnapshot: string; growthSummary: string; role: string; globalHeadcount: string; japanPresence: string;
  facts: Profile["facts"]; customers: Profile["customers"]; solutions: Profile["solutions"]; comparisons: Profile["comparisons"];
  patch: Omit<CompactPatchInput, "slug" | "companyId" | "jobId" | "customersId" | "externalId" | "financeId">;
  preEntry: DailyInput["preEntry"];
}) {
  const ids = { companyId: `${input.slug}-company`, jobId: `${input.slug}-job`, customersId: `${input.slug}-customers`, externalId: `${input.slug}-external`, financeId: `${input.slug}-finance` };
  return build({
    profile: {
      checkedAt, slug: input.slug, name: input.name, jobUrl: input.jobUrl, officialUrl: input.officialUrl, customersUrl: input.customersUrl,
      externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: input.financeUrl,
      salesSnapshot: input.salesSnapshot, growthSummary: input.growthSummary,
      ipoSummary: "非公開企業。IPO時期、日本売上、日本法人の設立計画は公表されていない。",
      milestones: [
        { year: "創業", label: `${input.name}を創業`, detail: "会社公式の沿革・求人で事業の起点を確認。", source: "company" },
        { year: "現在", label: "製品・顧客を拡大", detail: input.growthSummary, source: "finance" },
        { year: "2026.09", label: "日本状況を再確認", detail: input.japanPresence, source: "job" },
      ],
      issueLenses: [
        { title: "既存顧客の導入目的から見る課題", body: input.customers[0].outcome },
        { title: "製品の成り立ちから見る課題", body: input.salesSnapshot },
        { title: "外部環境の要求から見る課題", body: "生成AIの利用拡大に伴い、企業は出力品質、情報源、権限、個人情報、投資効果を説明する必要がある。" },
      ],
      narrative: [
        { label: "背景", body: input.salesSnapshot },
        { label: "課題", body: "既存の検索・作業手順を置き換えるだけでは、品質、権限、定着、投資効果を説明できない。" },
        { label: "解決策", body: "対象業務を限定し、所要時間、再作業、利用率、品質、成果を導入前後で比較する。" },
        { label: "選定の理由", body: "既存製品・大手suite・内製と比べ、速度、使いやすさ、統合、信頼性、総費用に優位がある場合に選ぶ。" },
      ],
      openingHook: "対象業務の調査・整理・共有に、毎週何時間と何回の手戻りが発生していますか。",
      valueHypothesis: "対象業務の時間、再作業、利用率、品質、成果を導入前後で比較する。",
      objection: "既存suiteと汎用AIで十分で、新しい製品を増やす理由がない。",
      reframe: "機能数ではなく、対象業務の速度・品質・定着を、権限と情報源を守りながら再現できるかで比べる。",
      facts: input.facts, customers: input.customers,
      externalSignals: [
        { label: "AIガバナンス", value: "説明可能な利用", detail: "経産省はAI事業者向けガイドラインを公開。", caveat: "個別製品の適法性や安全性を保証しない。" },
        { label: "生産性", value: "業務単位の検証", detail: "生成AI導入は利用率だけでなく時間・品質・成果の検証が必要。", caveat: "効果は業務と運用で異なる。" },
      ],
      role: input.role, organization: input.japanPresence,
      careerValue: "日本進出前後の市場・顧客・製品適合を観測し、成立条件と反証を分けて判断する経験。",
      globalHeadcount: input.globalHeadcount, japanPresence: input.japanPresence, japanSince: "日本法人・正式な進出時期は未確認",
      solutions: input.solutions, fitTags: ["日本進出の観測", "AI", "Enterprise", "APAC"], comparisons: input.comparisons,
    },
    patch: { slug: input.slug, ...ids, ...input.patch }, preEntry: input.preEntry,
  });
}

const perplexity = preEntryCompany({
  slug: "perplexity", name: "Perplexity", jobUrl: "https://jobs.ashbyhq.com/perplexity/ab448b33-0a0e-4acf-8b86-df61f38716ac", officialUrl: "https://www.perplexity.ai/ja/hub/about",
  customersUrl: "https://www.perplexity.ai/enterprise", financeUrl: "https://www.perplexity.ai/ja/hub/blog/perplexity-launches-enterprise-pro",
  salesSnapshot: "検索結果のリンクを巡回して要約する時間を減らし、出典付きの回答と社内情報検索を一つの対話へまとめる。企業利用では権限、情報源、精度、利用定着を管理する。",
  growthSummary: "会社公式は月間1億6,900万件のqueryと2024年の累計調達1億6,500万ドルを公表し、SoftBankとの日本向け提携を発表。現行求人は月間数十億queryと東京のAPAC地域担当を示す。",
  role: "東京で日本本社のEnterprise顧客を担当し、導入、活用、更新、拡大とAPACの複雑な技術支援を一体で担う。",
  globalHeadcount: "501〜1,000人規模（LinkedIn公開レンジ）", japanPresence: "日本法人・国内office未確認。東京HybridのAPAC Customer Success求人あり",
  facts: [
    { label: "創業", value: "2022年", detail: "会社公式・公式求人。" },
    { label: "利用規模", value: "月間数十億query", detail: "現行公式求人。", source: "job" },
    { label: "2024年利用", value: "月間1億6,900万件", detail: "Enterprise Pro発表時。", source: "finance" },
    { label: "2024年累計調達", value: "1億6,500万ドル", detail: "会社公式。", source: "finance" },
    { label: "日本接点", value: "SoftBank提携", detail: "日本の消費者・法人向け展開を公式発表。", source: "customers" },
    { label: "日本求人", value: "1件", detail: "東京HybridのAPAC Customer Success。", source: "job" },
  ],
  customers: [
    { company: "SoftBank", products: "Perplexity", outcome: "日本の個人・法人顧客への提供・販売提携を会社公式が発表。", implication: "直接法人設立前でも日本の配布と需要検証が進む。" },
    { company: "Enterprise customers", products: "Enterprise Pro", outcome: "社内情報とWeb調査を出典付き回答へつなぐ。", implication: "情報検索の時間と再作業を対象業務で測れる。" },
  ],
  solutions: [
    { name: "Perplexity Enterprise", valueProp: "Webと社内情報を出典付き回答へ統合。", url: "https://www.perplexity.ai/enterprise", competitors: "Microsoft Copilot、Google Gemini、ChatGPT Enterprise。", differentiation: "検索・出典確認を中心にした回答体験。" },
    { name: "Perplexity API", valueProp: "検索・回答機能を自社製品へ組み込む。", url: "https://docs.perplexity.ai/", competitors: "OpenAI、Google、Anthropicと検索基盤。", differentiation: "最新Web検索と出典をAPIで返す。" },
  ],
  comparisons: [
    { arena: "企業向けAI検索", companies: ["Perplexity", "Microsoft", "Google"], why: "情報源、権限、統合、費用" },
    { arena: "回答AI", companies: ["Perplexity", "OpenAI", "Anthropic"], why: "検索、出典、model、使いやすさ" },
  ],
  patch: {
    leaderName: "Aravind Srinivas", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.perplexity.ai/ja/hub/about",
    localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://jobs.ashbyhq.com/perplexity/ab448b33-0a0e-4acf-8b86-df61f38716ac",
    targets: ["CIO・AI責任者", "情報・調査責任者", "顧客支援・営業企画責任者"],
    heroSummary: "検索結果のリンクと社内文書が分断し、調査・要約・根拠確認へ時間がかかる課題を解く。出典付きのWeb回答と権限を保った社内情報検索を一つの対話へまとめ、調査時間と再作業を減らして意思決定を速める。",
    competitors: "Microsoft Copilot、Google Gemini、ChatGPT Enterprise、Glean、既存検索。情報源、権限、精度、統合、費用で比較する。",
    feature: "Web検索、社内情報、複数model、出典表示を一つの回答体験へまとめる。",
    advantage: "消費者検索の利用基盤と出典中心の体験を、Enterpriseの権限・支援へ広げる。",
    benefit: "調査時間と再作業を減らし、意思決定の根拠を確認しやすくできる可能性がある。",
    evidence: "SoftBankとの日本向け提供・販売提携と、日本本社のEnterprise顧客を担当する東京求人を公式確認。",
    marketVerdict: "SoftBank提携と東京の地域担当求人は強いシグナル。一方、日本法人、office、雇用・契約、国内売上、支援人数は未確認。",
    marketParagraphs: ["日本企業の生成AI利用が調査から業務へ広がり、情報源と権限を保った回答需要は増える。", "今後3〜5年は配布提携だけでなく、日本語のEnterprise導入・技術支援・更新を再現できるかが正式進出を分ける。"],
    cultureHeadline: "東京の地域アンカーとして、顧客成果と最終技術支援を一体で作る局面。",
    classification: "ハイブリッド", displayLabel: "東京Hybrid・APAC担当", officeDays: "出社日数は未確認", remoteOnly: "完全remoteではない", flexibility: "雇用主体・office・時差対応は面接確認",
    goodFor: ["顧客成果と技術解決を一体で担いたい人", "日本のEnterprise利用を0→1で作りたい人"], cautionFor: ["完成した国内支援組織を前提にする人", "技術エスカレーションを避けたい人"],
    unresolved: [["雇用主体", "東京Hybrid求人。", "雇用主体、office、社会保険、福利厚生は。"], ["顧客基盤", "日本本社顧客を担当。", "有償顧客、契約規模、更新率、利用率は。"], ["責任範囲", "CSと最終技術支援を兼務。", "担当社数、support量、緊急対応、Salesとの境界は。"], ["local支援", "日本語・英語を必須。", "日本語のSE、Support、法務、security審査体制は。"], ["正式進出", "SoftBank提携あり。", "法人・office・追加採用の判断条件は。"]],
  },
  preEntry: {
    verdict: "進出可能性は高め。配布提携と東京の地域担当求人がある一方、日本法人・契約・支援基盤は未確認",
    factSignals: [["日本向け配布提携", "SoftBankとの消費者・法人向け提携を公式発表。", ["perplexity-finance"]], ["東京の地域担当", "日本本社のEnterprise顧客を担う東京Hybrid求人。", ["perplexity-job"]], ["顧客責任", "導入、活用、更新、拡大と技術支援を一体で担う。", ["perplexity-job"]], ["世界利用", "現行求人は月間数十億queryと説明。", ["perplexity-job"]]],
    hurdles: [["法人・雇用", "日本法人、office、雇用主体、請求を確認できない。", ["perplexity-job"]], ["国内実績", "日本のEnterprise顧客数、売上、更新率は非公開。", ["perplexity-customers"]], ["local delivery", "日本語のSE、Support、法務・security審査人数が未確認。", ["perplexity-job"]], ["競争", "Microsoft、Google、OpenAI等の既存契約と統合に勝つ必要がある。", ["perplexity-company"]]],
    conditions: [["日本の有償reference", "複数企業で本番、更新、拡大を確認。"], ["雇用・契約基盤", "日本の雇用主体、契約、請求を明確化。"], ["local technical coverage", "日本語のSE・Support・security審査を提供。"], ["repeatable adoption", "業務別に利用率と成果を再現。"], ["追加採用", "Sales・技術・CSの複数職種へ拡張。"]],
    watches: ["日本法人・雇用主体", "Japan Sales・SE求人", "国内Enterprise事例", "日本語Trust資料", "SoftBank法人展開", "東京office"],
  },
});

const linear = preEntryCompany({
  slug: "linear", name: "Linear", jobUrl: "https://linear.app/careers", officialUrl: "https://linear.app/about",
  customersUrl: "https://linear.app/customers/openai", financeUrl: "https://linear.app/now/sharing-growth-with-the-people-building-linear",
  salesSnapshot: "課題、製品計画、開発projectが複数toolと会議へ分散し、優先順位と進捗が見えにくくなる問題を解く。高速な同期と簡潔な操作で、製品開発の判断と実行を同じ作業系へ戻す。",
  growthSummary: "会社公式は2019年創業、4万社超の利用、OpenAIで3,000人規模への拡大を公表。現行採用地域は北米・欧州・豪州が中心で、日本法人・求人・国内officeは確認できない。",
  role: "日本向け公式求人は0件。過去に確認したAPAC営業求人は現行ATSから消えており、現在応募できるとは扱わない。",
  globalHeadcount: "201〜500人規模（LinkedIn公開レンジ）", japanPresence: "日本法人・国内office・日本向け公式求人を確認できず",
  facts: [
    { label: "創業", value: "2019年", detail: "会社公式。" },
    { label: "利用企業", value: "4万社超", detail: "現行公式求人。", source: "finance" },
    { label: "OpenAI利用", value: "3,000人", detail: "会社公式事例。", source: "customers" },
    { label: "主要地域", value: "北米・欧州・豪州", detail: "現行公式求人。", source: "job" },
    { label: "日本法人・office", value: "未確認", detail: "公式会社・採用情報で確認できず。", source: "company" },
    { label: "日本求人", value: "0件", detail: "現行公式ATSで確認。", source: "job" },
  ],
  customers: [
    { company: "OpenAI", products: "Linear", outcome: "会社事例は20人から3,000人へ利用が拡大したと公表。", implication: "高速成長する製品組織の課題・計画・実行を同じ作業系へ集約する。" },
    { company: "Cohere", products: "Linear", outcome: "導入が数週間で社内へ広がり、roadmapの可視性とSlack依存を改善。", implication: "異なる開発手法を持つ複数teamの状況把握へ適用できる。" },
  ],
  solutions: [
    { name: "Linear", valueProp: "課題、project、roadmapを高速な製品開発作業へ統合。", url: "https://linear.app/", competitors: "Jira、GitHub Issues、Asana、Notion。", differentiation: "速度と簡潔さを重視した製品開発専用設計。" },
    { name: "Linear for agents", valueProp: "人とAI agentの開発作業・文脈を同じ系で管理。", url: "https://linear.app/", competitors: "Jira、GitHub、AI開発tool。", differentiation: "既存の課題・project・顧客文脈をagentへ接続。" },
  ],
  comparisons: [
    { arena: "製品開発管理", companies: ["Linear", "Atlassian", "GitHub"], why: "速度、統合、権限、規模" },
    { arena: "軽量work management", companies: ["Linear", "Notion", "Asana"], why: "柔軟性、開発専用性、定着" },
  ],
  patch: {
    leaderName: "Karri Saarinen", leaderLabel: "共同創業者・CEO", leaderUrl: "https://linear.app/about",
    localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://linear.app/careers",
    targets: ["CTO・開発責任者", "Product責任者", "Engineering operations責任者"],
    heroSummary: "課題、製品計画、開発projectが複数toolと会議へ分散し、優先順位と進捗が見えにくくなる問題を解く。高速な同期と簡潔な操作で、製品開発の判断と実行を同じ作業系へ戻し、状況確認と更新の時間を減らして出荷速度を高める。",
    competitors: "Atlassian Jira、GitHub Issues、Asana、Notion。速度、開発tool統合、権限、拡張性、総費用で比較する。",
    feature: "課題、project、roadmap、顧客要望をリアルタイム同期する製品開発基盤。",
    advantage: "製品開発専用の簡潔な情報設計と高速な同期を、4万社超の利用文脈で磨く。",
    benefit: "状況確認の会議と更新作業を減らし、優先順位から出荷までの速度を高められる可能性がある。",
    evidence: "OpenAIが20人から3,000人へ利用を拡大した公式事例と、4万社超の利用を公式求人で確認。日本事例ではない。",
    marketVerdict: "世界利用とAI企業の強い事例はある一方、日本法人・office・求人・国内顧客事例・日本語GTMを確認できず、進出時期は判断不能。",
    marketParagraphs: ["AIで開発量が増えるほど、人とagentの優先順位、責任、文脈を同じ作業系で管理する需要は増える。", "今後3〜5年は英語製品の自然流入だけでなく、日本語・契約・支援・Partnerを置く投資判断が進出を分ける。"],
    cultureHeadline: "世界の製品開発基盤として伸びる一方、日本GTMは未確認。",
    classification: "フルリモート", displayLabel: "日本向け勤務は未確認", officeDays: "日本officeなし", remoteOnly: "現行求人の対象地域外", flexibility: "日本からの雇用・勤務は確認できない",
    goodFor: ["将来の日本進出を継続観測したい人", "製品開発toolのcategory形成を追いたい人"], cautionFor: ["現在日本から応募したい人", "国内雇用・支援体制が必要な人"],
    unresolved: [["日本需要", "世界4万社超。", "日本の有償顧客、利用者、更新、問い合わせは。"], ["APAC優先度", "現行採用は北米・欧州・豪州中心。", "APAC売上と日本の優先順位は。"], ["製品対応", "日本語GTMは未確認。", "日本語UI、support、security資料の計画は。"], ["進出基盤", "法人・office・求人なし。", "契約、請求、Partner、雇用の成立条件は。"], ["競争", "Jira・GitHub等が定着。", "日本で置換ではなく共存する勝ち筋は。"]],
  },
  preEntry: {
    verdict: "進出可能性は探索段階。世界利用と製品力は強いが、日本・APACの現行採用とcommercial基盤を確認できない",
    factSignals: [["世界利用", "4万社超が利用すると現行公式求人が説明。", ["linear-finance"]], ["AI企業の採用", "OpenAIで3,000人へ利用拡大。", ["linear-customers"]], ["製品の国際利用", "会社は北米・欧州・豪州へteamを拡大。", ["linear-job"]], ["日本求人0件", "現行公式ATSで日本・APAC営業求人を確認できない。", ["linear-job"]]],
    hurdles: [["GTM優先度", "現行採用地域は北米・欧州・豪州が中心。", ["linear-job"]], ["国内commercial proof", "日本の顧客名、売上、更新率を確認できない。", ["linear-customers"]], ["法人・雇用", "日本法人、office、雇用、契約、請求を確認できない。", ["linear-company"]], ["定着競争", "Jira、GitHub、Notion等の既存運用を越える必要がある。", ["linear-company"]]],
    conditions: [["日本の有償需要", "複数顧客の本番利用と更新を確認。"], ["APAC commercial owner", "地域営業・CSの責任者を配置。"], ["日本語・契約基盤", "UI、support、security、契約、請求を整備。"], ["Partner経路", "開発consulting・cloud・SIとの導入経路を確立。"], ["現行Japan求人", "公式採用で日本市場の職務を確認。"]],
    watches: ["Japan・APAC営業求人", "日本法人・契約", "国内顧客事例", "日本語UI・support", "APAC office", "国内Partner"],
  },
});

export const daily20260902IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { kong, perplexity, linear };
