import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-16";

export const companies20260816: Company[] = [
  {
    slug: "adyen", name: "Adyen", category: "ユニファイドコマース／グローバル決済プラットフォーム", broadCategory: "経営管理・FinTech", hq: "オランダ・アムステルダム", japanPresence: "Adyen Japan / Shibuya, Tokyo", hiringStatus: "採用中", salesRoles: 1,
    description: "online・店頭・platform決済を一つの基盤で扱う上場FinTech。東京でTeam Lead, Salesを公式募集し、日本のEnterprise sales teamを率いる人材を採用。", lastChecked: checkedAt, careersUrl: "https://careers.adyen.com/vacancies/7601353-team-lead-sales", tags: ["アンカー企業", "Payments", "FinTech", "Unified Commerce", "Enterprise", "Sales Leadership", "Japan"],
  },
  {
    slug: "figma", name: "Figma", category: "Collaborative Product Development / Design Platform", broadCategory: "業務自動化・コラボレーション", hq: "San Francisco, US", japanPresence: "Figma Japan / Tokyo Hub", hiringStatus: "採用中", salesRoles: 1,
    description: "designからprototype、developer handoff、AI-assisted product creationまでを共同作業に束ねるplatform。Tokyo HubでSMB Account Executiveを公式募集。", lastChecked: checkedAt, careersUrl: "https://job-boards.greenhouse.io/figma/jobs/5729844004", tags: ["Product Development", "Design", "Collaboration", "Developer Tools", "SMB", "Tokyo"],
  },
  {
    slug: "mistral-ai", name: "Mistral AI", category: "Frontier AI Models / Enterprise AI Platform", broadCategory: "AI・データ基盤", hq: "Paris, France", japanPresence: "日本法人・Tokyo拠点・Japan専任求人を確認できず", hiringStatus: "継続観測", salesRoles: 0,
    description: "open-weight model、API、enterprise AI platform、private computeを展開。SingaporeのAPAC人員は拡大中だが、Japan固有のGTMと導入実績は未確認。", lastChecked: checkedAt, careersUrl: "https://jobs.ashbyhq.com/mistral.ai", tags: ["日本未進出", "Generative AI", "Foundation Model", "Enterprise AI", "Private Deployment", "APAC"], entryStatus: "not-entered",
  },
];

const careerInsights = (category: string): Job["careerInsights"] => ({
  fit: `${category}で、複数部門の意思決定を束ねながら顧客の業務変化を売りたい人に向く。`,
  thingsToKnow: "日本のquota、達成率、平均ACV、sales cycle、担当社数、pipeline source、離職率は公開情報で確認できない。",
  marketValue: `${category}のcategory expertise、value selling、multi-stakeholder deal、forecastを横断する経験。`,
  tenureAndPromotion: `【Genba仮説・確度: 中】初期の評価は肩書より、pipelineの再現性と受注後の顧客成果を作れるかに置かれ、昇進前にsegment・account・team scopeが広がる可能性がある。支持材料: 公式求人が自律的なpipeline形成、discovery、複数部門の合意形成、forecastのownershipを重視する。反証・留保: 日本組織の昇進・退職実績とrole別平均在籍年数は公開集計できておらず、scope拡大が昇進へ直結するとは言えない。面接で確認: 直近24カ月の昇進・退職件数、同roleの在籍期間、次levelに必要な定量成果は。`,
  priorCompanies: `【Genba仮説・確度: 中】特定社名より、${category}に近いSaaS営業、technical buyerとのvalue selling、複数stakeholderの短中期deal経験が隣接する。支持材料: 公式求人の必須・歓迎要件。反証・留保: 日本在籍者の前職を十分な母数で集計していない。面接で確認: 直近採用者の前職categoryとramp期間は。`,
  nextCompanies: `【Genba仮説・確度: 中】pipeline、受注、adoption・expansionを定量化できれば、${category}のCommercial・Enterprise AEやSales Leadへ接続しやすい。支持材料: roleがfull-cycle ownershipとbusiness outcomeを求める。反証・留保: 転職先の公開集計ではない。面接で確認: 社内のsegment移動と卒業者の次roleは。`,
});

export const jobs20260816: Job[] = [
  {
    id: "patsnap-key-account-manager-japan", companySlug: "patsnap", title: "Key Account Manager", segment: "Key Accounts / IP & R&D Intelligence", location: "Tokyo", workStyle: "on-site / full-time", language: "English required / additional Asian languages preferred", firstSeen: checkedAt, lastChecked: checkedAt,
    source: { label: "Patsnap Careers (Lever)", url: "https://jobs.lever.co/patsnap/01f261fd-6c87-4dc6-92f1-b295fa4f43d9" },
    descriptionSummary: "R&D、IP、Legal、Innovation leaderとの関係を深め、strategic accountのretention、upsell・cross-sell、forecastを担う。勤務地はTokyoだが、本文はSingapore・Southeast Asiaを担当と記載する。",
    genbaTake: "patent dataの契約更新ではなく、研究・知財portfolioの意思決定へPatsnapを組み込み、利用成果をaccount valueと継続収益へ変えるconsultative expansion role。",
    compensationReality: "日本のbase、OTE、pay mix、equity、quota、担当社数は公式求人で確認できない。",
    desiredProfile: "5年以上のB2B sales、Enterprise SaaS・IP service・R&D toolの経験、complex account管理、R&D・IP・Legal buyerとのconsultative sellingを重視する。勤務地と担当地域の記載に差があり、応募前の確認が必要。",
    careerInsights: {
      fit: "R&D・IPの専門buyerと長期関係を作り、renewalとexpansionを定量化したいaccount sellerに向く。",
      thingsToKnow: "勤務地はTokyoだが本文はSingapore・Southeast Asiaのaccountを記載する。実際のterritory、日本顧客比率、担当社数、renewal ownership、quota、sales supportを確認したい。",
      marketValue: "Innovation Intelligence、IP・R&D workflow、strategic account management、consultative expansionを横断する経験。",
      tenureAndPromotion: "【Genba仮説・確度: 探索中】入社後は既存accountのretentionとexpansionを再現し、より大きなportfolioまたはteam scopeへ広がる可能性がある。支持材料: 公式求人はaccount performance、forecast、upsell・cross-sell、GTM feedbackを一貫して求める。反証・留保: Japan commercial teamの平均在籍年数、昇進、離職、次level要件は公開情報で確認できず、scope拡大が実際の昇進経路かは不明。面接で確認: 直近24カ月のteam変化、昇進例、promotion criteria、次levelの定量成果は。",
      priorCompanies: "【Genba仮説・確度: 中】Enterprise SaaS、IP service、R&D toolでcomplex accountを管理し、technical dataをbusiness decisionへ翻訳した人材が隣接する。支持材料: 公式求人が5年以上のB2B sales、strategic account、R&D・IP・Legal stakeholder、consultative sellingを要件化。反証・留保: 日本在籍者の前職を十分な公開母数で集計しておらず、特定業界・社名の採用優位は断定できない。面接で確認: 直近採用者の前職category、domain未経験者のramp期間、採用時に最も重視した再現可能な経験は。",
      nextCompanies: "【Genba仮説・確度: 中】renewal、upsell、cross-sell、customer outcomeを定量化できれば、Data SaaS・Vertical SaaSのStrategic AM、Enterprise AE、Customer Growth leadershipへ接続しやすい。支持材料: roleがportfolio ownership、senior stakeholder、full-cycle expansion、forecastを求める。反証・留保: Patsnap Japan退職者の転職先を十分な件数で公開集計した結果ではなく、隣接職務からの仮説。面接で確認: 卒業者の次role category、社内のteam lead・new businessへの異動例、評価される成果指標は。",
    },
  },
  {
    id: "adyen-team-lead-sales-japan", companySlug: "adyen", title: "Team Lead, Sales", segment: "Enterprise / Sales Leadership", location: "東京", workStyle: "出社中心／正社員／20%以上の出張", language: "日本語：ネイティブレベル／英語：ビジネスレベル", firstSeen: checkedAt, lastChecked: checkedAt,
    source: { label: "Adyen Careers", url: "https://careers.adyen.com/vacancies/7601353-team-lead-sales" },
    descriptionSummary: "日本のEnterprise sales managerを率い、coaching、pipeline、forecast、executive relationship、new business growthを担う。Head of Sales Japanへreportする。",
    genbaTake: "決済機能の販売管理ではなく、online・店頭・platformをまたぐ顧客のcommercial設計を、sellerの育成とdeal reviewの両方から再現可能にするleadership role。",
    compensationReality: "日本向けの公式給与レンジは非公開。海外のAdyen営業報酬、東京の外資営業マネージャー相場、役割の責任範囲から、現金OTEは2,200万〜3,200万円と推定する。",
    compensationResearch: {
      researchedAt: "2026-08-17",
      confidence: "中",
      headline: "現金OTEは2,200万〜3,200万円と推定",
      summary: "Adyen日本法人の給与投稿は、OpenMoney、Glassdoor、RepVueの公開範囲では確認できなかった。一方、Adyen全社・他国の営業報酬、東京の外資営業マネージャー相場、複数の大手企業担当営業を率いて日本チームの売上責任を持つ職務内容から、一般的な営業マネージャーより高い水準を置くのが妥当と判断した。以下は内定提示額ではなく、公開データを組み合わせたGenba推定。",
      breakdown: [
        { label: "基本給", value: "1,600万〜2,200万円", status: "Genba推定", detail: "東京の外資IT営業マネージャー相場と、Adyenの海外営業マネージャー・アジア太平洋地域の大手企業営業の基本給を日本市場向けに調整。" },
        { label: "変動給", value: "600万〜1,000万円", status: "Genba推定", detail: "チーム売上責任を持つ管理職として、個人AEより固定給比率が高い設計を想定。" },
        { label: "現金OTE", value: "2,200万〜3,200万円", status: "確度：中", detail: "基本給と目標達成時の変動給を合算。株式報酬は含めない。" },
        { label: "固定給：変動給", value: "65:35〜75:25", status: "Genba推定", detail: "Adyen米国の営業マネージャーの公開内訳と、営業管理職の一般的な固定給重視を参照。" },
        { label: "株式報酬", value: "付与の可能性あり", status: "金額は未確認", detail: "Levels.fyiではAdyenのファントムストックプランと4年の権利確定を確認。ただし日本の当該職種への付与有無・数量は非公開。" },
        { label: "達成率・加速支給", value: "日本は非公開", status: "海外参考のみ", detail: "RepVueの豪州大手企業営業は達成率66%（4件）だが、日本の管理職へ転用できない。チーム達成率、最低保証、加速条件、上限は確認が必要。" },
      ],
      readerTake: "オファー比較では、提示OTEだけでなく、①初年度の最低保証、②チーム達成率の中央値、③個人・チームKPIの比重、④大型案件の成果配分、⑤株式の付与数と権利確定条件まで揃えて判断したい。OTEが高くても達成率が低ければ実収入は下がるため、前年の同チーム実績が最重要。",
      sources: [
        { label: "Adyen公式 営業チームリーダー求人", url: "https://careers.adyen.com/vacancies/7601353-team-lead-sales", detail: "日本の大手企業担当営業を率い、チームの商業的成功、売上目標、商談パイプライン、売上予測を担う。給与額は非公開。" },
        { label: "Levels.fyi Adyen営業報酬", url: "https://www.levels.fyi/ja-jp/companies/adyen/salaries/sales", detail: "Adyen営業の全社中央値12.9万ドル（約2,019万円）、オランダの中央値11.27万ユーロ（約2,084万円）、最高14.9万ユーロ（約2,756万円）。Phantom Stock Planの4年権利確定も掲載。1ドル=157円、1ユーロ=185円で概算。" },
        { label: "Glassdoor Adyen米国営業マネージャー", url: "https://www.glassdoor.com/Salary/Adyen-Sales-Manager-United-States-Salaries-EJI_IE684495.0%2C5_KO6%2C19_IL.20%2C33_IN1.htm", detail: "総報酬17.3万〜29.9万ドル（約2,716万〜4,694万円）、中央値22.5万ドル（約3,533万円）。米国水準のため上限側の参考。" },
        { label: "RepVue Adyen豪州営業報酬", url: "https://www.repvue.com/companies/Adyen/salaries/countries/AU/", detail: "豪州Enterprise AEは基本給15.4万豪ドル（約1,756万円）、OTE29.3万豪ドル（約3,340万円）、達成率66%。各4件の少数集計で、1豪ドル=114円換算。" },
        { label: "Glassdoor 東京の営業マネージャー相場", url: "https://www.glassdoor.com/Salaries/tokyo-sales-manager-salary-SRCH_IL.0%2C5_IS5263_KO6%2C19.htm", detail: "東京の営業マネージャー全体は総報酬750万〜1,500万円。掲載企業例ではSalesforceが1,500万〜1,900万円、AWSが1,900万〜2,800万円で、外資IT上位層との差が大きい。" },
        { label: "OpenMoney企業検索", url: "https://openmoney.jp/corporations/list", detail: "Adyen Japan固有の公開給与データは検索で確認できず。日本法人の直接値としては採用しない。" },
      ],
    },
    reputationResearch: {
      researchedAt: "2026-08-17",
      summary: "Adyenの東京営業チームに限定した検証可能なネガティブ情報は確認できない。以下は、グローバルの匯名レビューで散見される声を、応募判断の確認ポイントとして紹介する。",
      topics: [
        "評価・昇進：実績だけでなく、上司や配属チームとの相性の影響が大きい、基準が見えにくいという声。",
        "マネジメント・チーム差：上司の経験、フィードバックの質、意思決定の透明性にはチーム間の差があるという声。",
        "成長局面の負荷：変化の速い環境で自律的な役割が求められ、プロセスの変更や仕事量を負担に感じるという声。",
      ],
      caveat: "上記は匯名投稿であり、事実認定や日本拠点・本求人への当てはめには使えない。あくまで匿名の評判・噢なので、面接などで聞いてみましょう。",
      sources: [
        { label: "Glassdoor Adyenカルチャーレビュー", url: "https://www.glassdoor.com/Reviews/Adyen-Reviews-E684495.htm?filter.searchCategory=CULTURE", detail: "匿名レビューには、チームや管理職による体験差、フィードバック、キャリア機会への意見がある。全社・グローバル集計であり、日本限定ではない。" },
        { label: "Glassdoor AdyenカルチャーQ&A", url: "https://www.glassdoor.co.uk/FAQ/Adyen-Question-FAQ200088-E684495.htm", detail: "匿名レビューには、中途採用の管理職増加と昼進機会、評価・フィードバックへの意見がある。個人の体験談であり、事実認定の根拠にはしない。" },
      ],
    },
    desiredProfile: "3年以上のformal people management、8年以上のmultinational enterpriseへのdirect hunting sales、日英両言語、C-level relationship、20%以上の出張を求める。",
    careerInsights: careerInsights("Payments / Unified Commerce"),
  },
  {
    id: "figma-account-executive-smb-tokyo", companySlug: "figma", title: "Account Executive, SMB (Tokyo, Japan)", segment: "SMB / New + Existing Business", location: "Tokyo", workStyle: "Tokyo Hub / full-time", language: "native-level Japanese", firstSeen: checkedAt, lastChecked: checkedAt,
    source: { label: "Figma Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/figma/jobs/5729844004" },
    descriptionSummary: "従業員500人以下のSMBで、inbound・outboundからpipelineを作り、新規・既存顧客のevaluationと購買を1〜3カ月のcycleで進める。",
    genbaTake: "design seatの販売ではなく、Product・Design・Engineeringの分断、handoff、design system、AI-assisted buildを一つのproduct-development workflowへ変えるhigh-volume value sale。",
    compensationReality: "日本のbase、OTE、pay mix、equity、accelerator、quotaは公式求人で確認できない。",
    desiredProfile: "structured outbound、SaaSのclosing、net-new pipeline目標、high-volume sales cycleの経験を求め、technical audienceへの販売経験を歓迎する。",
    careerInsights: careerInsights("Product Development / Collaboration SaaS"),
  },
];
