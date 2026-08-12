import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";

const gongSources: ResearchSource[] = [
  { id: "gong-about", label: "Gong About", url: "https://www.gong.io/about", kind: "企業公式", scope: "創業背景・経営陣・グローバル拠点", checkedAt: "2026-08-12" },
  { id: "gong-careers", label: "Gong Careers", url: "https://www.gong.io/careers", kind: "企業公式", scope: "海外採用地域・ARR・日本向け求人の有無", checkedAt: "2026-08-12" },
  { id: "gong-growth", label: "Gong ARR 5億ドル突破発表", url: "https://www.gong.io/press/gong-growth-accelerates-past-55-yoy-arr-tops-500m", kind: "企業公式", scope: "ARR・成長率・顧客数・複数製品利用", checkedAt: "2026-08-12" },
  { id: "gong-series-e", label: "Gong Series E発表", url: "https://www.gong.io/press/gong-raises-250-million-in-series-e-funding-at-7-25-billion-valuation", kind: "企業公式", scope: "資金調達・過去の評価額", checkedAt: "2026-08-12" },
  { id: "gong-platform", label: "Gong Revenue AI Operating System", url: "https://www.gong.io/platform", kind: "企業公式", scope: "製品構造・Revenue Graph・アプリケーション", checkedAt: "2026-08-12" },
  { id: "gong-forecast", label: "Gong Forecast", url: "https://www.gong.io/platform/revenue-forecasting-software", kind: "企業公式", scope: "Forecast・商談リスク・パイプライン管理", checkedAt: "2026-08-12" },
  { id: "gong-trust", label: "Gong Trust Center", url: "https://www.gong.io/platform/trust", kind: "企業公式", scope: "セキュリティ・認証・顧客データの学習利用方針", checkedAt: "2026-08-12" },
  { id: "gong-language", label: "Gong Language Support", url: "https://help.gong.io/docs/what-languages-are-supported-in-gong", kind: "企業公式", scope: "日本語文字起こし・翻訳・UI・英語限定機能", checkedAt: "2026-08-12" },
  { id: "gong-customers", label: "Gong Customer Stories", url: "https://www.gong.io/customers/case-studies", kind: "企業公式", scope: "顧客基盤・公開事例", checkedAt: "2026-08-12" },
  { id: "gong-anthropic", label: "Anthropic導入事例", url: "https://www.gong.io/customers/case-studies/anthropics-64-productivity-gain-combining-revenue-ai-with-a-customer-centric-gtm-strategy", kind: "企業公式", scope: "生産性・立ち上がり・組織拡大", checkedAt: "2026-08-12" },
  { id: "gong-canva", label: "Canva導入事例", url: "https://www.gong.io/customers/case-studies/canvas-6-revenue-boost-how-using-gong-transformed-their-strategy", kind: "企業公式", scope: "営業余力・売上・部門横断利用", checkedAt: "2026-08-12" },
  { id: "gong-experian", label: "Experian導入事例", url: "https://www.gong.io/customers/case-studies/how-experian-boosted-win-rates-by-25-and-achieved-sustainable-growth-with-gong-s-ai-insights", kind: "企業公式", scope: "勝率・販売量・規制産業", checkedAt: "2026-08-12" },
  { id: "gong-linkedin", label: "LinkedIn公開プロフィール検索", url: "https://www.linkedin.com/search/results/people/?keywords=Gong%20Singapore%20sales&origin=GLOBAL_SEARCH_HEADER", kind: "外部集計", scope: "Singaporeの公開GTMプロフィール4件を役割単位で集計", checkedAt: "2026-08-12" },
  { id: "meti-ai", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "国内企業のAIガバナンス要求", checkedAt: "2026-08-12" },
  { id: "ppc-recording", label: "個人情報保護委員会 通話録音Q&A", url: "https://www.ppc.go.jp/all_faq_index/faq1-q1-10/", kind: "公的機関", scope: "通話内容・録音と個人情報の取扱い", checkedAt: "2026-08-12" },
];

const gongIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-12",
  salesSnapshot: "Gongは、CRO・営業責任者・RevOps・Enablementに、顧客との通話・メール・商談データを統合し、Revenue AIで売上実行を改善するOSを提供する会社。顧客が抱えるのは「CRMが自己申告に依存して商談の実態が見えない」「マネージャーのコーチングが抜き打ちの通話確認に偏る」「Forecast・Enablement・Engagementが分断して次の行動へつながらない」という3つの課題。会話記録を入口にSales、RevOps、Enablement、CS、Productまで入り、案件実行・予測・育成・顧客理解へ提案を広げられる点が営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2026年5月にARR 5億ドル超、直近四半期の前年比成長率55%超を発表。5,000社超の顧客基盤と複数製品利用の拡大が成長を支える。",
    ipoOutlookSummary: "IPO時期・計画は公式に確認できない。2021年のSeries Eでは評価額72.5億ドル、累計調達額5.84億ドルと発表したが、これは現在価値ではなく過去の資金調達時点の事実。",
    milestones: [
      { year: "2015", label: "創業", detail: "Amit BendovとEilon Reshefが、CRMの自己申告では見えない顧客会話をAIで分析する発想から創業。", sourceId: "gong-about" },
      { year: "2021", label: "Series E", detail: "2.5億ドルを調達し、当時の評価額72.5億ドル、累計調達額5.84億ドルを発表。", sourceId: "gong-series-e" },
      { year: "2024", label: "Revenue AI OSへ拡張", detail: "会話分析単体ではなく、Revenue Graphと複数アプリケーションを束ねるOSとして製品を展開。", sourceId: "gong-platform" },
      { year: "2026", label: "ARR 5億ドル突破", detail: "直近四半期のARR成長率55%超、10四半期連続で成長率が加速したと発表。", sourceId: "gong-growth" },
      { year: "2026", label: "5,000社超", detail: "顧客は5,000社超、半数が複数製品を利用。Fortune 10の半数を顧客に持つと発表。", sourceId: "gong-growth" },
    ],
    sourceIds: ["gong-growth", "gong-series-e", "gong-about"],
    genbaVerdict: { headline: "業績は進出候補水準。日本進出計画は未確認", body: "ARR、成長率、顧客数、APAC拠点は日本進出を検討できる規模を示す。一方、日本法人、日本向け求人、日本拠点、日本語UI、国内顧客事例は公式に確認できず、2〜3年以内の進出はGenba仮説に留める。" },
    growthDrivers: [
      { title: "会話分析からRevenue AI OSへ", body: "Forecast、Engage、Enablement、AssistantをRevenue Graph上で束ね、単一用途から複数製品への拡張余地を作る。", sourceId: "gong-platform" },
      { title: "既存顧客での複数製品化", body: "顧客の50%が複数製品を利用。新規ロゴだけでなく、既存基盤からのland-and-expandが成長を支える。", sourceId: "gong-growth" },
      { title: "APACと多言語対応", body: "Singapore拠点とAustralia採用を確認。70以上の言語、日本語音声の文字起こし・分析にも対応する。", sourceId: "gong-language" },
    ],
    japanGrowth: {
      headline: "日本は未進出。APACの基盤はあるが、Japan固有のシグナルはまだ弱い",
      narrative: "公式拠点一覧と採用地域にはSingapore・Australiaがある一方、Japan・Tokyoは確認できない。日本語音声には対応するが、日本語UIと全機能の同等提供は未完成。日本進出の可能性はAPAC拡大の延長線上にあるものの、時期を断定できる公式材料はない。",
      qualitativeSignals: [
        { label: "公式拠点", detail: "San Francisco、New York、Dublin、Tel Aviv、Singapore等を掲載。Japan・Tokyoは掲載なし。", sourceId: "gong-about" },
        { label: "公式採用地域", detail: "US、Dublin、London、Singapore、Australiaの採用を確認。日本向け求人は未確認。", sourceId: "gong-careers" },
        { label: "海外GTM人材", detail: "Singaporeの公開プロフィール4件からField Sales、SDR、Sales Management、Marketingを確認。小標本のため組織全体の傾向は断定しない。", sourceId: "gong-linkedin" },
      ],
      sourceIds: ["gong-about", "gong-careers", "gong-language", "gong-linkedin"],
    },
    riskHypotheses: [
      { title: "日本語対応と製品ローカライズは別問題", body: "日本語音声の文字起こしには対応する一方、UIの日本語表示は未提供で、一部AI機能は英語のみ。国内営業組織が売り切るには、日本語UI・サポート・AI精度の実証が必要。", confidence: "高", evidence: ["日本語音声を対応言語に掲載", "UI言語は英語・フランス語中心", "一部機能は英語限定"], counterSignal: "AI翻訳と70以上の言語対応は、初期導入の技術障壁を下げる。", sourceIds: ["gong-language"] },
      { title: "録音データの運用設計が商談の前提", body: "会話録音・メール・CRMデータを扱うため、国内顧客では利用目的、保存、権限、削除、AI学習の扱いをLegal・Security・現場で合意する必要がある。", confidence: "中", evidence: ["通話内容は個人を識別できる場合に個人情報となる", "利用目的の通知・公表が必要", "Gongは顧客データを生成AIの学習に使わないと説明"], counterSignal: "SOC 2やISO群、BYOK、region control等の統制はEnterprise審査を支える。", sourceIds: ["ppc-recording", "gong-trust"] },
    ],
  },
  sellingPlaybook: {
    frameIntro: "会話の録音ツールとして入るのではなく、経営が信頼できる売上実行システムとして課題を組み立てる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "Anthropicは営業生産性と立ち上がり、Canvaは担当者の余力と部門横断の顧客理解、Experianは勝率と販売量を改善。共通するのは、商談データが増えても、管理職が全件を読み解いて再現可能な行動へ変えられない課題。" },
      { title: "製品の成り立ちから見る課題", body: "創業者自身が悪い四半期の原因をCRMや担当者の報告から説明できなかった経験が起点。顧客の実際の言葉を観測せず、主観的な入力だけでForecastや育成を行う経営リスクを解く。" },
      { title: "外部環境の要求から見る課題", body: "経営はAIによる営業生産性を求める一方、国内ではAIガバナンスと通話録音データの適正管理も必要。成果と統制を同時に説明できなければ、現場のツール導入で止まり全社展開できない。" },
    ],
    narrative: [
      { label: "背景", body: "顧客接点が通話、Web会議、メール、CRMへ分散し、マネージャーが商談の実態を把握できない。" },
      { label: "課題", body: "Forecastは担当者の主観、コーチングは一部通話の抜き打ち確認、勝ち筋はトップ営業の暗黙知に残る。" },
      { label: "解決策", body: "Gongが顧客会話と案件データをRevenue Graphへ集約し、リスク、次の行動、Forecast、育成を同じ証拠から支援する。" },
      { label: "選定の理由", body: "単なる録音・要約ではなく、5,000社超の顧客基盤と複数アプリを持ち、経営から現場まで同じ商談事実を使える点が選定条件になる。" },
    ],
    openingHook: "今期のForecastが外れたとき、CRM入力ではなく、顧客が実際に発した言葉まで遡って原因を説明できますか。",
    valueHypothesis: "失注・停滞・立ち上がりの原因を会話データから特定し、Forecast精度、マネージャーの時間、担当者の生産性を一つのRevenue AI基盤で改善する。",
    commonObjection: { objection: "Web会議の録画やCRMのAI要約で十分", reframe: "録音の保存ではなく、複数接点を案件・担当者・顧客単位で結び、Forecast・育成・Engagementの次の行動へ変えられるかを比較する。" },
  },
  facts: [
    { label: "年間経常収益", value: "5億ドル超", detail: "2026年5月時点。直近四半期の前年比成長率は55%超と会社発表。", sourceIds: ["gong-growth"] },
    { label: "顧客数", value: "5,000社超", detail: "Fortune 10の半数を顧客に持つと会社発表。", sourceIds: ["gong-growth"] },
    { label: "複数製品利用", value: "顧客の50%", detail: "会話分析からForecast・Engage・Enablement等への拡張を示す。", sourceIds: ["gong-growth", "gong-platform"] },
    { label: "資金調達", value: "累計5.84億ドル", detail: "2021年Series E時点。評価額72.5億ドルは過去の調達時評価であり現在価値ではない。", sourceIds: ["gong-series-e"] },
    { label: "APAC拠点", value: "Singapore", detail: "公式拠点一覧と採用地域で確認。Australia採用も掲載。", sourceIds: ["gong-about", "gong-careers"] },
    { label: "日本進出", value: "未確認", detail: "日本法人・国内拠点・日本向け求人・公式な進出計画を確認できず。", sourceIds: ["gong-about", "gong-careers"] },
  ],
  hypotheses: [
    { topic: "製品・市場", title: "Revenue Intelligence単体からRevenue AI OSへ", conclusion: "会話分析を入口にForecast、Enablement、Engagementへ広げ、point solutionから経営基盤へ上がる戦略。", confidence: "高", evidence: ["Revenue Graphと複数アプリを公式展開", "顧客の50%が複数製品を利用", "ARR 5億ドル超"], counterSignals: ["製品ごとのARR・NRRは非公開", "CRMや会議基盤のAI機能と競合する"], interviewQuestions: ["製品別ARRとattach rateは", "Conversation IntelligenceからForecastへ拡張する典型経路は"], sourceIds: ["gong-platform", "gong-growth"] },
    { topic: "営業モデル", title: "CRO・RevOps起点のEnterprise land-and-expand", conclusion: "現場の録音導入ではなく、売上予測と営業生産性の経営課題から入り、複数部門・複数製品へ広げる営業が中心。", confidence: "中", evidence: ["Forecast・Engage・Enablementを同一基盤で提供", "複数製品利用50%", "Enterprise顧客事例"], counterSignals: ["平均ACV・sales cycle・quota達成率は非公開"], interviewQuestions: ["APACの平均ACVとsales cycleは", "new logoとexpansionのcreditは"], sourceIds: ["gong-platform", "gong-growth", "gong-experian"] },
    { topic: "日本進出", title: "2〜3年以内の進出可能性は中程度", conclusion: "Singaporeを起点にAPACを拡大し、日本語音声にも対応しているため進出条件は整いつつある。ただしJapan固有の公式シグナルはなく、時期は予測できない。", confidence: "中", evidence: ["Singapore拠点", "Australiaを含むAPAC採用", "日本語音声対応", "ARR 5億ドル超"], counterSignals: ["日本法人・求人・顧客事例を未確認", "日本語UI未提供", "一部機能は英語限定"], interviewQuestions: ["Japan launchの判断条件は", "Singaporeから日本顧客を担当しているか", "日本語UIのロードマップは"], sourceIds: ["gong-about", "gong-careers", "gong-language", "gong-growth"] },
    { topic: "報酬・Quota", title: "将来の日本採用条件は推測不可", conclusion: "日本向け求人がないため、Singaporeや米国の報酬・Quotaを日本の代理値にしない。進出求人が出た時点でterritory、ramp、既存顧客、quota creditを確認する。", confidence: "高", evidence: ["日本向け求人を未確認"], counterSignals: ["海外求人の存在は将来の日本条件を示さない"], interviewQuestions: ["Japan greenfield quotaかAPAC既存案件を引き継ぐか", "現地採用前のcustomer baseは"], sourceIds: ["gong-careers"] },
    { topic: "人材・キャリア", title: "APAC立ち上げ型のGTM経験になる可能性", conclusion: "SingaporeではField Sales、SDR、Sales Management、Marketingの公開プロフィールを確認。日本進出時は完成した組織への入社より、category creationと現地GTM構築の比重が高くなる可能性。", confidence: "探索中", evidence: ["Singaporeの公開GTMプロフィール4件", "公式Singapore拠点"], counterSignals: ["4件の小標本で組織全体や採用要件を断定できない", "日本採用は未発表"], interviewQuestions: ["APAC内の国別ownershipは", "Japanの最初の10名に必要な役割は"], sourceIds: ["gong-linkedin", "gong-about"] },
  ],
  cultureNotes: {
    organizationReadTitle: "創業者主導でcategoryを作り、単一製品からOSへ拡張する成長組織",
    hypothesis: { title: "数字と顧客会話の証拠を重視", body: "創業背景も製品価値も『営業の自己申告ではなく顧客の実際の言葉を見る』ことに集中。営業自身にもデータでForecastと行動を説明する文化が求められる可能性。" },
    careerValue: { title: "Revenue AIのcategory creationとAPAC拡張", body: "CRO・RevOps向けの経営提案、複数製品のland-and-expand、AI・録音データのガバナンスを同時に扱う経験になる。日本採用は未発表のため、現時点では将来候補としての価値。", confidence: "中" },
  },
  customerProof: [
    { company: "Anthropic", products: "Gong Revenue AI", outcome: "営業生産性64%向上、立ち上がり46%短縮と会社事例で紹介。", implication: "急拡大するAI企業で、増員だけに頼らず営業余力と育成を改善する用途。", sourceId: "gong-anthropic" },
    { company: "Canva", products: "Gong Revenue AI", outcome: "担当者の営業余力60%増、売上6%増と会社事例で紹介。", implication: "SalesだけでなくProduct・Marketingも顧客会話を使う部門横断の価値。", sourceId: "gong-canva" },
    { company: "Experian", products: "Gong Revenue AI", outcome: "勝率25%向上、販売量10%増と会社事例で紹介。", implication: "規制・データ要件が重いEnterpriseでも、商談標準化と成長を両立する用途。", sourceId: "gong-experian" },
  ],
  externalSignals: [
    { label: "国内AIガバナンス", value: "第1.2版", detail: "経済産業省がAI事業者ガイドラインを更新。国内導入では便益だけでなくリスク管理と説明責任が調達論点になる。", caveat: "ガイドラインはGong固有の適合性や法的結論を示さない。", sourceId: "meti-ai" },
    { label: "通話録音", value: "個人情報になり得る", detail: "個人を識別できる通話内容は個人情報に該当し、利用目的の通知または公表が必要。", caveat: "録音通知の要否や適法性は個別の利用方法・契約・社内規程を含め確認が必要。", sourceId: "ppc-recording" },
  ],
  roleLens: {
    salesMotion: "海外ではCRO、Sales Leader、RevOps、Enablementを起点に、会話データからForecast・Productivity・Coachingを変えるEnterprise sale。日本向け求人がないため、国内territoryやpartner modelは未定。",
    compensation: "日本のbase、OTE、Pay Mix、equityは存在・公開ともに未確認。米国やSingaporeの条件を日本の代理値にしない。",
    quota: "日本のquota、ACV、達成率、ramp、existing pipelineは未確認。進出求人が出た時点でgreenfieldかAPAC既存案件の継承かを最優先で確認する。",
    collaboration: "海外の製品構造からはAE、Solution Consulting、Customer Success、RevOps、Security、Legal、Productとの連携が中心。日本では録音・個人情報・AIガバナンスの説明体制も必要になる。",
  },
  leadership: { name: "Amit Bendov", role: "CEO / Co-founder", read: "自身がCEOとして悪い四半期の原因をCRMから説明できなかった経験を起点にGongを創業。Revenue AIというcategoryを会話分析からOSへ広げている。", sourceId: "gong-about" },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "最新の公式従業員数は本調査で確認できていない。" },
    japanHeadcount: { value: "確認できず", detail: "日本在籍メンバーを公式情報で確認できていない。", sourceId: "gong-careers" },
    japanOffice: { value: "未進出", detail: "公式拠点一覧にJapan・Tokyoの掲載なし。", sourceId: "gong-about" },
    japanSince: { value: "未設立", detail: "日本法人の設立発表を確認できていない。", sourceId: "gong-about" },
  },
  salesAppeal: {
    intro: "日本採用はまだない。進出時に得られる可能性がある営業経験を、事実と仮説に分けて整理。",
    points: [
      { title: "Revenue AIのcategory creation", detail: "録音ツールではなく、Forecast・生産性・育成を変える経営課題としてCRO・RevOpsへ売る。", sourceIds: ["gong-platform", "gong-growth"] },
      { title: "複数製品のland-and-expand", detail: "会話分析からForecast、Engage、Enablementへ広げ、単一部門から全社のRevenue workflowへ上がる。", sourceIds: ["gong-platform", "gong-growth"] },
      { title: "APACの次市場を作る可能性", detail: "Singapore基盤と日本語音声対応を持つ一方、日本GTMは未整備。進出時はterritory・顧客・partner・categoryを作る比重が高い。", sourceIds: ["gong-about", "gong-language"] },
    ],
  },
  interviewPrep: {
    intro: "現時点では応募面接ではなく、日本進出やAPAC採用が動いた際に確認する論点。",
    questions: [
      { question: "Japan launchを決める条件と、現時点の日本顧客・pipelineは。", why: "進出時期とterritoryの実在を、期待ではなく数字で確認する。", sourceIds: ["gong-about", "gong-careers"] },
      { question: "日本語通話で英語と同等に使える機能、精度、未対応機能、UI roadmapは。", why: "日本語文字起こし対応と、営業現場での製品完成度を分けて見る。", sourceIds: ["gong-language"] },
      { question: "録音同意、保存、削除、data region、生成AI学習、Security reviewを誰が支援するか。", why: "国内Enterprise導入の技術外リスクと支援体制を確認する。", sourceIds: ["gong-trust", "ppc-recording"] },
      { question: "最初のJapan GTMはAE単独か、SC・CS・Marketing・partnerを同時採用するか。", why: "greenfield quotaを実行できるcoverageと役割境界を見る。", sourceIds: ["gong-linkedin", "gong-careers"] },
    ],
  },
  solutions: [
    { name: "Gong Revenue AI Operating System", valueProp: "顧客会話、メール、CRM、商談データをRevenue Graphへ統合し、売上実行の共通基盤を作る。", url: "https://www.gong.io/platform", competitors: "Salesforce、Microsoft、Clari、ZoomInfo Chorus、会議録画・内製分析等。", differentiation: "会話データを入口に複数のRevenue applicationを同じGraph上で動かす構造と5,000社超の顧客基盤。", retention: "製品別NRR・gross retentionは非公開。顧客の50%が複数製品を利用。" },
    { name: "Gong Forecast", valueProp: "商談・パイプライン・顧客会話のシグナルからForecast、リスク、次の行動を可視化する。", url: "https://www.gong.io/platform/revenue-forecasting-software", competitors: "Clari、Salesforce Forecasting、Microsoft Dynamics 365、スプレッドシート等。", differentiation: "担当者の入力だけでなく実際の顧客接点をForecastの根拠に使う。", retention: "Forecast単体の売上・継続率は非公開。" },
    { name: "Gong Engage / Enable", valueProp: "アウトリーチ、商談準備、コーチング、立ち上がりを、実際の顧客会話と勝ち筋から支援する。", url: "https://www.gong.io/platform", competitors: "Salesloft、Outreach、Highspot、Seismic、CRM付属AI等。", differentiation: "EngagementとEnablementを会話・案件・Forecastと同じデータ基盤へ接続する。", retention: "製品別attach rateは非公開。複数製品利用は全顧客の50%。" },
  ],
  customerStoriesUrl: "https://www.gong.io/customers/case-studies",
  fitTags: ["日本未進出を先回りしたい", "Revenue AIを売りたい", "CRO・RevOps商談に挑戦したい", "APAC立ち上げ候補を見たい", "category creationが好き", "複数製品をexpandしたい", "AIガバナンスを説明できる", "将来のJapan launchを追いたい"],
  comparisonMap: [
    { arena: "Revenue Intelligence", companies: ["Gong", "Clari", "ZoomInfo Chorus"], why: "会話データ、Forecast、案件リスク、categoryの広さを比較" },
    { arena: "CRM標準AI", companies: ["Gong", "Salesforce", "Microsoft"], why: "独立したRevenue AI OSとCRM suite内AIの違いを比較" },
    { arena: "Sales Engagement / Enablement", companies: ["Gong", "Outreach", "Salesloft", "Highspot"], why: "実行、育成、会話データ、複数製品統合を比較" },
  ],
  sources: gongSources,
};

export const preEntryIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  gong: gongIntelligence,
};
