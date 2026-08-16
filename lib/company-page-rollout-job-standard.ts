type JobLike = {
  id: string;
  companySlug: string;
  title: string;
  segment: string;
  location: string;
  language: string;
  lastChecked: string;
  source: { label: string; url: string };
  compensationReality: string;
  compensationResearch?: {
    researchedAt: string;
    confidence: "高" | "中" | "探索中";
    headline: string;
    summary: string;
    breakdown: Array<{ label: string; value: string; status: string; detail: string }>;
    readerTake: string;
    sources: Array<{ label: string; url: string; detail: string }>;
  };
  reputationResearch?: {
    researchedAt: string;
    summary: string;
    positiveTopics: string[];
    negativeTopics: string[];
    caveat: string;
    sources: Array<{ label: string; url: string; detail: string }>;
  };
  marketValueResearch?: {
    headline: string;
    summary: string;
    skills: Array<{ title: string; detail: string }>;
    nextRoles: Array<{ title: string; detail: string }>;
    marketBands: Array<{ level: string; range: string; condition: string }>;
    proofPoints: string[];
    caveat: string;
  };
};

const batchSlugs = new Set(["anaplan", "braze", "channel-talk", "coupa", "cursor", "glean", "hubspot", "qualtrics", "speak", "stripe"]);

const officialCompensation: Record<string, {
  headline: string;
  summary: string;
  breakdown: Array<{ label: string; value: string; status: string; detail: string }>;
}> = {
  "stripe-account-executive-commercial-hunter-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "stripe-account-executive-enterprise-hunter-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "stripe-account-executive-commercial-grower-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "channel-talk-ax-sales": {
    headline: "公式求人に年収800万〜1,400万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・quota・acceleratorの内訳は公開されていない。",
    breakdown: [{ label: "年収", value: "800万〜1,400万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "channel-talk-inside-sales": {
    headline: "公式求人に年収600万〜1,000万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・quota・acceleratorの内訳は公開されていない。",
    breakdown: [{ label: "年収", value: "600万〜1,000万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "channel-talk-partner-sales": {
    headline: "公式求人に年収600万〜1,400万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・partner案件のcredit ruleは公開されていない。",
    breakdown: [{ label: "年収", value: "600万〜1,400万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "coupa-adr": {
    headline: "公式求人に基本給696.2万〜789.04万円、OTE994.6万〜1,127.2万円を掲載",
    summary: "Pay mix 70/30を公式求人で確認。equity、quota、ramp保証、accelerator、達成率は公開されていない。",
    breakdown: [
      { label: "基本給", value: "696.2万〜789.04万円", status: "公式掲載", detail: "年額。" },
      { label: "OTE", value: "994.6万〜1,127.2万円", status: "公式掲載", detail: "目標達成時の総現金報酬。" },
      { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "基本給70%、変動給30%。" },
    ],
  },
  "coupa-alliances-director": {
    headline: "公式求人に基本給1,527.3万〜1,730.9万円、OTE2,181.8万〜2,472.7333万円を掲載",
    summary: "Pay mix 70/30を公式求人で確認。equity、quota、partner revenue credit、accelerator、達成率は公開されていない。",
    breakdown: [
      { label: "基本給", value: "1,527.3万〜1,730.9万円", status: "公式掲載", detail: "年額。" },
      { label: "OTE", value: "2,181.8万〜2,472.7333万円", status: "公式掲載", detail: "目標達成時の総現金報酬。" },
      { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "基本給70%、変動給30%。" },
    ],
  },
};

const companyResearch: Record<string, {
  name: string;
  domain: string;
  officialUrl: string;
  communityUrl?: string;
  communityLabel?: string;
  positive: string[];
  negative: string[];
  next: string[];
}> = {
  glean: {
    name: "Glean", domain: "Enterprise AI・Enterprise Search", officialUrl: "https://www.glean.com/careers",
    positive: ["公式求人は日本在住remote、AI-first mindset、ROI付きPoC、greenfield territoryを明記する。", "ARR 3億ドル超と国内大企業の導入事例から、categoryの成長と日本投資を確認できる。"],
    negative: ["日本営業だけの信頼できる匿名review集計、昇進、離職、quota達成率は確認できない。", "日本法人・office・人数・売上は非公開で、globalの週4 office方針と日本remoteの運用差も確認が必要。"],
    next: ["Enterprise AI・SearchのStrategic AE", "AI Platform・Data・SecurityのGTM", "Japan GTM・Partner・Sales Leadership"],
  },
  hubspot: {
    name: "HubSpot", domain: "CRM・Customer Platform・AI", officialUrl: "https://www.hubspot.com/careers/jobs/all", communityUrl: "https://www.repvue.com/companies/Hubspot", communityLabel: "RepVue HubSpot",
    positive: ["HEART、柔軟な勤務、透明性を公式に掲げ、SMBからCorporateまでのsegmentと隣接GTM職を公開している。", "国内顧客事例と日本法人の拡大から、CRM・AIを中小・中堅企業へ広げる経験を得られる可能性がある。"],
    negative: ["グローバル匿名集計のquota評価には異議もあり、日本の対象segmentへ一般化できない。", "全社の売上成長鈍化とAI収益化、日本のsegment別quota・達成率・昇進実績を面接で分けて確認する必要がある。"],
    next: ["CRM・MarTech・CXのAE／Sales Leadership", "RevOps・Customer PlatformのGTM", "SMB・Mid-MarketのSales Enablement・Management"],
  },
  qualtrics: {
    name: "Qualtrics", domain: "Experience Management・CX・EX", officialUrl: "https://www.qualtrics.com/careers/us/en/japan",
    positive: ["TACOS、柔軟なschedule、学習・wellbeing支援を公式Japan Careerで説明する。", "国内大手のCX・EX事例と日本投資方針から、experience dataを経営actionへ変える専門性が得られる可能性がある。"],
    negative: ["2026年8月17日時点で日本の現行求人を確認できず、終了求人の条件を現在へ転用できない。", "非公開化後の財務、買収統合、新CEO体制、日本の昇進・離職は非公開。"],
    next: ["CX・EX・Research SaaSのEnterprise GTM", "MarTech・HR TechのConsulting／Success", "Experience Strategy・People Analytics"],
  },
  speak: {
    name: "Speak", domain: "AI EdTech・Corporate Learning", officialUrl: "https://jobs.ashbyhq.com/speak/",
    positive: ["東京求人はhybridとglobal collaborationを明記し、小規模teamでB2Bの獲得・定着・marketingを作る機会がある。", "consumerで磨いたvoice-first体験と国内先行導入を、法人の利用data・業務scenarioへ広げる経験を得られる可能性がある。"],
    negative: ["日本営業のquota・達成率・昇進・離職・給与を判断できる公開集計はない。", "B2B ARRの基準日・範囲、日本の定量成果、consumer/B2Bの優先順位は非公開。"],
    next: ["HR Tech・EdTechのEnterprise AE／CS", "AI ApplicationのJapan GTM", "Learning・People Developmentの事業開発"],
  },
  stripe: {
    name: "Stripe", domain: "Payments・Financial Infrastructure", officialUrl: "https://stripe.com/careers/search",
    positive: ["Users first、speed and craft、evidence、ownershipを公式Careerで説明する。", "大規模なglobal利用と日本の定量事例、Payments以外の製品拡張から、事業・技術・財務を横断する経験を得られる可能性がある。"],
    negative: ["Tokyo営業のquota、達成率、担当社数、昇進・離職を示す信頼できる公開集計はない。", "TPV成長は売上・利益額を示さず、月50%以上の対面勤務と高い速度・精度の実態は配属先で確認が必要。"],
    next: ["Payments・FinTechのEnterprise AE／Sales Leadership", "API Platform・Commerce InfrastructureのGTM", "Product・Revenue・Platform Partnerships"],
  },
  anaplan: {
    name: "Anaplan", domain: "コネクテッドプランニング・経営管理", officialUrl: "https://www.anaplan.com/careers/", communityUrl: "https://www.g2.com/sellers/anaplan", communityLabel: "G2 Anaplan製品レビュー",
    positive: ["顧客事例では、財務・供給・人員など複数部門の計画をつなぎ、意思決定時間を短縮する価値が確認できる。", "公式CareerはOne Connected Team、学習、柔軟性を掲げ、部門・地域を越えた協働を重視する。"],
    negative: ["製品レビューには、導入・モデル構築・学習の複雑さと専門人材への依存を指摘する投稿がある。", "非公開化後の日本営業組織について、quota達成率、昇進、離職、配属先マネジメントを判断できる公開集計はない。"],
    next: ["EPM・FP&A・ERPのEnterprise営業／Solution Consulting", "サプライチェーン・人員計画の業務変革責任者", "CFO Advisory・経営管理コンサルティング"],
  },
  braze: {
    name: "Braze", domain: "顧客エンゲージメント・MarTech", officialUrl: "https://www.braze.com/company/careers", communityUrl: "https://www.repvue.com/companies/Braze", communityLabel: "RepVue Braze営業レビュー",
    positive: ["国内公式事例では、リアルタイム施策、運用生産性、購入・継続指標の改善例が確認でき、提案できる事業成果の幅が広い。", "売上、RPO、顧客数が成長し、日本でも複数職種採用と国内データ基盤への投資を継続している。"],
    negative: ["グローバル匿名集計ではquota・territory・managementへの評価が時期やチームで分かれ、日本営業だけの十分な母数はない。", "成長が続く一方でGAAP営業損失、粗利率低下、内部統制の重要な不備が開示されており、成長と効率の両方を求められる可能性がある。"],
    next: ["CRM・CDP・MarTechのEnterprise AE／Sales Leadership", "Commerce・Product Analytics・Customer DataのGTM", "Lifecycle／Growth領域の事業開発・コンサルティング"],
  },
  "channel-talk": {
    name: "Channel Talk", domain: "AI Customer Experience・CRM", officialUrl: "https://channel.io/jp/team",
    positive: ["公式求人・カルチャー記事はCustomer Driven、Think Fundamental、Small Talk Big Resultsを掲げ、全社員が顧客と直接対話する姿勢を示す。", "国内事例では問い合わせ削減、応答時間、自動解決、購入導線など複数の顧客成果が公開されている。"],
    negative: ["東京の職種はHybridとOn-siteが混在し、働き方・負荷・柔軟性を全社一律には判断できない。", "日本営業組織の匿名レビューを十分な母数で確認できず、評価、昇進、離職、マネジメントの実態は非公開。"],
    next: ["AI CX・CRM・Contact Center SaaSのAE／Sales Leadership", "Partner・RevOps・Customer Success leadership", "EC・D2CのCRM／Retention事業責任者"],
  },
  coupa: {
    name: "Coupa", domain: "調達・支出管理・サプライチェーン", officialUrl: "https://careers.coupa.com/en/life-at-coupa/", communityUrl: "https://www.openwork.jp/company.php?m_id=a0C1000001SPQ9u", communityLabel: "OpenWork Coupa Software",
    positive: ["公式CultureはOwn Our Results、Build Tomorrow Togetherなど、成果責任と協働の両立を掲げる。", "国内大手の調達改革事例と、直販・Partner・Servicesを横断する採用から、CPO・CFOへ大規模変革を提案できる環境が見える。"],
    negative: ["OpenWorkの公開母数は少なく、日本営業だけの評判や配属先差を一般化できない。", "PE傘下で非公開化後の成長・収益性・quota達成率・昇進分布が非公開で、投資余力と効率圧力のバランスは面接確認が必要。"],
    next: ["Procurement・ERP・CFO SaaSのEnterprise AE／Sales Leadership", "Supply Chain・Supplier RiskのGTM", "調達DX・CFO Advisory・業務変革コンサルティング"],
  },
  cursor: {
    name: "Cursor", domain: "AI Developer Platform・Developer Productivity", officialUrl: "https://cursor.com/ja/careers",
    positive: ["公式Careerはsmall、talent-dense、flat、truth-seekingを掲げ、製品・顧客へ近い高い自律性を示す。", "Money Forward、NVIDIA、Stripeの公式事例から、大規模な開発組織でAI利用を定着させる経験を得られる可能性がある。"],
    negative: ["日本の勤務形態、出社日数、組織人数、昇進、離職、managementを判断できる公開集計はない。", "製品と市場の変化が速く、初期Japan teamでは役割境界、支援人数、優先順位が短期間で変わる可能性を面接で確認する必要がある。"],
    next: ["AI・Developer ToolsのStrategic AE／Solutions Leadership", "Developer Platform・Cloud・SecurityのGTM", "Japan Country Lead・Partner Ecosystem・AI Transformation"],
  },
};

function roleFamily(job: JobLike) {
  const value = `${job.title} ${job.segment}`.toLowerCase();
  if (/(director|vice president|manager|leader|head)/.test(value)) return "leadership";
  if (/(partner|alliance|channel)/.test(value)) return "partner";
  if (/(solution|engineer|architect|technical|data scientist|consult)/.test(value)) return "technical";
  if (/(development representative|\bsdr\b|\bbdr\b|inside sales)/.test(value)) return "development";
  return "seller";
}

function roleSkills(family: string, domain: string) {
  if (family === "leadership") return [
    { title: "営業組織の再現性", detail: `個人受注でなく、${domain}のpipeline、forecast、採用、coaching、達成者比率を改善する。` },
    { title: "経営・地域間の資源配分", detail: "Japan、APAC、本社の意思決定をつなぎ、担当、価格、専門人材、partner投資を優先順位付けする。" },
    { title: "複雑案件のquality control", detail: "大型案件のqualification、business case、risk、commercial条件をレビューし、予測精度を高める。" },
  ];
  if (family === "partner") return [
    { title: "Ecosystem GTM", detail: `${domain}をpartnerのservice・solutionへ組み込み、共同account planとpipelineを作る。` },
    { title: "Partner economics", detail: "紹介件数だけでなく、sourced／influenced revenue、enablement、delivery capacity、marginを管理する。" },
    { title: "Directとのoperating model", detail: "案件登録、account ownership、credit、導入責任を明確にして競合を避ける。" },
  ];
  if (family === "technical") return [
    { title: "Technical value engineering", detail: `${domain}の評価条件を顧客環境で検証し、技術指標を購買判断へ翻訳する。` },
    { title: "PoCから本番への移行", detail: "成功基準、security、integration、change managementを設計し、demoで終わらせない。" },
    { title: "Product feedback", detail: "個社要件と再利用可能な製品改善を分け、Product・Engineeringへ根拠付きで返す。" },
  ];
  if (family === "development") return [
    { title: "仮説型prospecting", detail: `${domain}のbuyer、外部変化、既存systemを調べ、genericな接触でなくaccount固有の仮説を作る。` },
    { title: "Qualification", detail: "meeting数だけでなく、課題、economic buyer、時期、次の検証をAEへ渡す。" },
    { title: "Pipeline analytics", detail: "channel・segment・message別の転換率を測り、再現性あるpipeline作成へ改善する。" },
  ];
  return [
    { title: "Executive value selling", detail: `${domain}の機能を、売上、利益、生産性、risk、time-to-valueへ翻訳する。` },
    { title: "Multi-stakeholder deal", detail: "business owner、IT、security、finance、legal、procurementと社内専門家を同じ意思決定へまとめる。" },
    { title: "Territory creation", detail: "既存需要を待たず、ICP、account plan、partner、customer proofからnewとexpansionのpipelineを作る。" },
  ];
}

function normalizeJapanese(value: string) {
  return value
    .replaceAll("Tokyo, Hanzomon", "東京・半蔵門")
    .replaceAll("Tokyo Prefecture", "東京都")
    .replace(/^Tokyo$/, "東京")
    .replace(/^Japan$/, "日本");
}

export function strengthenRolloutBatchOneJob<T extends JobLike>(job: T): T {
  if (!batchSlugs.has(job.companySlug)) return job;
  const company = companyResearch[job.companySlug];
  const family = roleFamily(job);
  const skills = roleSkills(family, company.domain);
  const sourceList = [
    { label: `${company.name} 公式Career・会社情報`, url: company.officialUrl, detail: "価値観、組織、働き方、職務を確認。会社発信であり、配属先の体験を保証しない。" },
    { label: job.source.label, url: job.source.url, detail: "対象職種の責任、要件、勤務地、公開されている条件を確認。" },
  ];
  if (company.communityUrl && company.communityLabel) sourceList.push({ label: company.communityLabel, url: company.communityUrl, detail: "匿名・自己申告または製品利用者の公開集計。日本の対象職種へ一般化しない。" });
  const compensation = officialCompensation[job.id];
  const language = job.companySlug === "glean"
    ? "公式求人では明記なし"
    : job.companySlug === "channel-talk"
    ? "公式求人で必須言語の明記なし"
    : job.companySlug === "coupa" && ["coupa-account-director", "coupa-adr", "coupa-alliances-director"].includes(job.id)
      ? "公式求人で明記なし"
      : job.companySlug === "braze" && ["brz-sales-director-enterprise", "brz-ae-commercial", "brz-ae-enterprise"].includes(job.id)
        ? "公式求人で明記なし"
        : normalizeJapanese(job.language);
  return {
    ...job,
    location: normalizeJapanese(job.location),
    language,
    lastChecked: "2026-08-17",
    ...(compensation ? {
      compensationReality: compensation.headline,
      compensationResearch: {
        researchedAt: "2026-08-17",
        confidence: "高" as const,
        headline: compensation.headline,
        summary: compensation.summary,
        breakdown: compensation.breakdown,
        readerTake: "公開レンジだけで判断せず、quota、ramp、達成率、credit、accelerator、equityを同じoffer条件として確認する。",
        sources: [{ label: job.source.label, url: job.source.url, detail: "公式求人に掲載された日本向け報酬レンジを確認。" }],
      },
    } : {}),
    reputationResearch: {
      researchedAt: "2026-08-17",
      summary: `${company.name}の日本における対象職種だけを十分な件数で評価した公開レビューは確認できない。公式情報と確認できた外部集計を分け、肯定材料と注意材料を同じ粒度で整理した。`,
      positiveTopics: company.positive,
      negativeTopics: company.negative,
      caveat: "匿名・自己申告の投稿、会社発信、製品レビューは性質が異なり、配属先や個人の体験を確定しない。公開情報で確認できない評判は補完せず、面接で直属上司、評価、勤務、昇進の具体例を確認する。",
      sources: sourceList,
    },
    marketValueResearch: {
      headline: `${company.domain}の専門性を、再現可能な顧客・組織成果へ変えられるかが市場価値を決める`,
      summary: `【Genba仮説】${job.title}で得られる市場価値は社名や在籍だけでなく、${company.domain}の複雑な課題を定量化し、担当職種の成果を契約・導入・利用・顧客KPIで証明できたかで決まる。公開された転職者分布の十分な集計はないため、以下は職務構造からの仮説である。`,
      skills,
      nextRoles: company.next.map((title) => ({ title, detail: `この職種で${skills.map((skill) => skill.title).join("、")}を数字で証明できる場合の隣接候補。実際の転職実績を示すものではない。` })),
      marketBands: [
        { level: "同職種・同segment", range: "公開報酬レンジは確認不能", condition: "担当目標、達成率、案件・顧客成果を再現可能な形で説明できる。" },
        { level: "上位segment・Lead", range: "公開報酬レンジは確認不能", condition: "より大きい顧客・複雑性に加え、mentoringや標準化の実績がある。" },
        { level: "Manager・事業責任", range: "公開報酬レンジは確認不能", condition: "採用、予算、forecast、組織達成、partner・導入体制まで責任を広げている。" },
      ],
      proofPoints: ["個人またはチームの目標達成率と分母", "new・expansion・partner別のpipelineと受注成果", "顧客の導入前後で改善した業務・事業KPI", "sales cycle、forecast、PoC-to-production、renewal等の改善", "他の担当者・segment・地域へ勝ち方を再現した実績"],
      caveat: "日本固有の給与・OTE・昇進・転職者分布は公開情報で確認できないため補完していない。役割候補は求人要件と隣接市場からの【Genba仮説】で、実際の評価は担当規模、成果、英語、業界知識、採用市場で変わる。",
    },
  };
}
