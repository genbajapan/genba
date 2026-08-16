import type { BroadCategory } from "@/lib/solution-categories";

type CareerInsights = {
  fit: string;
  thingsToKnow: string;
  marketValue: string;
  tenureAndPromotion: string;
  priorCompanies: string;
  nextCompanies: string;
};

type CareerJob = {
  title: string;
  segment: string;
  descriptionSummary: string;
  desiredProfile: string;
  careerInsights: CareerInsights;
};

type CareerCompany = {
  name: string;
  broadCategory: BroadCategory;
  category: string;
  tags: string[];
  japanPresence: string;
};

type RoleFamily = "partnerships" | "sdr" | "technical" | "customer" | "leadership" | "ae";

const structuredHypothesisMarker = "【Genba仮説】";

function roleFamily(job: CareerJob): RoleFamily {
  const role = `${job.title} ${job.segment}`.toLocaleLowerCase();
  if (/(partner|partnership|alliance|channel|ecosystem)/.test(role)) return "partnerships";
  if (/(sales development|business development representative|\bsdr\b|\bbdr\b|inside sales)/.test(role)) return "sdr";
  if (/(field engineer|solutions? (architect|engineer|consultant)|sales engineer|implementation|professional services|technical account)/.test(role)) return "technical";
  if (/(customer success|account manager|client partner|renewal|customer experience)/.test(role)) return "customer";
  if (/(head|director|vice president|\bvp\b|country manager|general manager|sales manager|team lead)/.test(role)) return "leadership";
  return "ae";
}

function segmentLabel(job: CareerJob): string {
  const role = `${job.title} ${job.segment}`.toLocaleLowerCase();
  if (/(strategic|named|large account|enterprise|public sector)/.test(role)) return "大手・複雑商談";
  if (/(commercial|mid.?market)/.test(role)) return "中堅市場";
  if (/\bsmb\b|small business/.test(role)) return "SMB市場";
  return "対象市場";
}

function domain(company: CareerCompany) {
  const domains: Record<BroadCategory, { prior: string; next: string; buyer: string }> = {
    "AI・データ基盤": {
      prior: "hyperscaler、database・data platform、analytics、DevTools、AI infrastructure、SI",
      next: "AI・data platform、cloud、database、Developer Platform",
      buyer: "開発・data・IT部門と経営層",
    },
    "セキュリティ・IT運用": {
      prior: "cybersecurity、network、cloud、observability、MSSP、security integrator",
      next: "Security Platform、cloud・network security、observability、IT operations",
      buyer: "CISO・IT・security運用部門と経営層",
    },
    "CRM・顧客体験": {
      prior: "CRM、MarTech、commerce、CX、AdTech、digital agency・SI",
      next: "CRM、Commerce、MarTech、CX、customer data platform",
      buyer: "営業・marketing・commerce・CX責任者とIT部門",
    },
    "業務自動化・コラボレーション": {
      prior: "ERP、workflow、collaboration SaaS、RPA、consulting、SI",
      next: "Enterprise SaaS、workflow、ERP、AI productivity、collaboration platform",
      buyer: "業務部門・IT・DX責任者と経営層",
    },
    "経営管理・FinTech": {
      prior: "payments、FinTech、ERP・会計、CFO advisory、banking、Enterprise SaaS",
      next: "FinTech、payments、CFO platform、ERP、financial infrastructure",
      buyer: "CFO・finance・treasury・経営企画とIT部門",
    },
    "コマース・業界特化": {
      prior: "業界特化SaaS、commerce・retail tech、対象業界の事業会社、consulting、SI",
      next: "Vertical SaaS、Commerce Tech、対象業界のDX・事業開発",
      buyer: "対象業界の事業責任者・現場部門・IT部門",
    },
    "HR・人材育成": {
      prior: "HR Tech、payroll、HCM、recruiting、人材・組織consulting、Enterprise SaaS",
      next: "HR Tech、HCM、payroll、Learning Tech、People Analytics",
      buyer: "人事・経営・finance・IT部門",
    },
  };
  return domains[company.broadCategory];
}

function roleHypotheses(family: RoleFamily, segment: string, company: CareerCompany) {
  const area = domain(company);
  const roleText = `${company.category}の${segment}`;
  const hypotheses: Record<RoleFamily, { tenure: string; prior: string; next: string; proof: string; question: string }> = {
    partnerships: {
      tenure: "担当partnerとの関係と共同pipelineが積み上がるため短期離職より複数年在籍の便益が大きい一方、ICの階層が少ない日本teamでは昇進より担当拡張か他社leadershipへの転職が起こりやすい。",
      prior: `${area.prior}で、partner business、共同GTM、複雑な契約交渉を経験した人材が入りやすい。`,
      next: `${area.next}のAlliances／Partnerships Lead、Channel Director、事業開発へ接続しやすい。`,
      proof: `${roleText}でpartner開拓だけでなく、共同提案・product連携・revenue創出まで求められるため。`,
      question: "直近24か月のIC昇進・担当拡張・退職の実例と、partner-sourced／influenced revenueの評価方法は何か。",
    },
    sdr: {
      tenure: "採用枠と達成基準が機能していれば12〜24か月でAEへ進む内部昇進型になりやすいが、AE枠が少ない日本teamでは昇進待ちによる外部転職も増え得る。",
      prior: `${area.prior}のinside sales、法人新規開拓、digital salesに加え、無形商材で仮説検証を回した人材が入りやすい。`,
      next: `社内のCommercial／Mid-Market AE、または${area.next}のAE・Business Developmentへ接続しやすい。`,
      proof: `${roleText}でpipeline創出、qualification、AEとの連携が成果指標になるため。`,
      question: "直近24か月のSDR在籍者数、AE昇進人数、昇進までの中央値、外部採用AEとの比率は何か。",
    },
    technical: {
      tenure: "顧客環境とproductの知識が蓄積するため在籍便益は大きく、ICのSenior／Principal化かLead・Managerへの社内昇進が本線。ただし日本の管理職枠が少ない場合は隣接platformへ移る可能性がある。",
      prior: `${area.prior}のSolutions Architect、pre-sales、implementation、SRE・engineering、technical consulting経験者が入りやすい。`,
      next: `${area.next}のSolutions／Field Engineering Lead、Professional Services、Product・Customer Engineeringへ接続しやすい。`,
      proof: `${roleText}でtechnical discoveryから導入・本番定着までを${area.buyer}へ説明する必要があるため。`,
      question: "直近24か月のIC昇格・manager登用・Product異動の実例と、pre-sales／delivery／supportの責任境界は何か。",
    },
    customer: {
      tenure: "顧客文脈とrenewal履歴が資産になるため複数年在籍と担当拡張が合理的。昇進はStrategic account、Team Lead、CS leadershipが本線だが、quotaや更新責任が曖昧なら外部転職要因になる。",
      prior: `${area.prior}のCustomer Success、Account Management、consulting、導入・運用支援経験者が入りやすい。`,
      next: `${area.next}のStrategic CSM／Account Manager、Expansion AE、CS leadershipへ接続しやすい。`,
      proof: `${roleText}で利用定着・renewal・expansionを${area.buyer}と継続的に動かす必要があるため。`,
      question: "直近24か月の担当拡張・昇進・営業への異動実例と、GRR／NRR／expansionの個人評価比率は何か。",
    },
    leadership: {
      tenure: "日本組織の成長率と採用裁量に在籍期間が左右されやすく、社内昇進より同規模以上の組織を率いた外部採用が中心になりやすい。成果が出ればAPAC scope拡張、未達なら短期交代の両方が起こり得る。",
      prior: `${area.prior}で同じbuyer・deal規模を扱い、採用、forecast、coaching、partner戦略まで担ったsales leaderが入りやすい。`,
      next: `${area.next}のJapan Sales Director／Country Lead、APAC leadership、GTM advisoryへ接続しやすい。`,
      proof: `${roleText}では個人受注だけでなく、再現可能なpipeline・採用・組織生産性を作る必要があるため。`,
      question: "前任者の在籍期間ではなく、この役割の直近のscope変更、APAC昇格実例、採用・価格・territoryへの決裁権は何か。",
    },
    ae: {
      tenure: `達成が続けば${segment}内の担当拡張、上位segment、managementへの社内昇進が本線。一方、territory・quota・product-market fitが不安定なら、同じbuyerを持つ他社への外部転職も起こりやすい。`,
      prior: `${area.prior}で${area.buyer}への新規開拓、複数部門を巻き込む商談、business case作成を経験した人材が入りやすい。`,
      next: `${area.next}のEnterprise／Strategic AE、Sales Manager、業界・product specialistへ接続しやすい。`,
      proof: `${roleText}でpipeline創出からclose・forecastまでを担い、同種のbuyerと商談複雑性を再現できることが市場価値になるため。`,
      question: "直近24か月のAE在籍者数、上位segment・managerへの昇進人数、外部転職人数、quota達成者の平均在籍期間は何か。",
    },
  };
  return hypotheses[family];
}

function withHypothesis(existing: string, hypothesis: string, support: string, caveat: string, question: string): string {
  if (existing.includes(structuredHypothesisMarker)) return existing;
  return `${existing} ${structuredHypothesisMarker}${hypothesis} 支持材料: ${support} 反証・留保: ${caveat} 面接で確認: ${question}`;
}

export function strengthenCareerInsights<T extends CareerJob>(job: T, company: CareerCompany): T {
  const family = roleFamily(job);
  const segment = segmentLabel(job);
  const hypothesis = roleHypotheses(family, segment, company);
  const commonCaveat = "LinkedIn公開プロフィールを対象地域・職種で集計した実測値ではなく、求人要件と製品領域からの仮説。組織規模、採用時期、個人事情で分布は変わる。";

  return {
    ...job,
    careerInsights: {
      ...job.careerInsights,
      tenureAndPromotion: withHypothesis(
        job.careerInsights.tenureAndPromotion,
        hypothesis.tenure,
        hypothesis.proof,
        commonCaveat,
        hypothesis.question,
      ),
      priorCompanies: withHypothesis(
        job.careerInsights.priorCompanies,
        hypothesis.prior,
        hypothesis.proof,
        commonCaveat,
        `採用teamが想定する直近入社者の前職category上位3つと、活躍者に共通するsales motionは何か。`,
      ),
      nextCompanies: withHypothesis(
        job.careerInsights.nextCompanies,
        hypothesis.next,
        hypothesis.proof,
        commonCaveat,
        `直近24か月の退職者が選んだ次のrole・company categoryと、社内で同等の成長機会を得た実例はあるか。`,
      ),
    },
  };
}
