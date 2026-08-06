export type Source = {
  label: string;
  url: string;
};

export type InterviewFlowStep = {
  label: string;
  detail: string;
};

export type Company = {
  slug: string;
  name: string;
  category: string;
  hq: string;
  japanPresence: string;
  hiringStatus: "積極採用" | "採用中" | "継続観測";
  salesRoles: number;
  description: string;
  lastChecked: string;
  careersUrl: string;
  tags: string[];
  interviewFlow?: {
    steps: InterviewFlowStep[];
    note: string;
  };
};

export type Job = {
  id: string;
  companySlug: string;
  title: string;
  segment: string;
  location: string;
  workStyle: string;
  language: string;
  firstSeen: string;
  lastChecked: string;
  source: Source;
  descriptionSummary: string;
  genbaTake: string;
  compensationReality: string;
  desiredProfile: string;
  careerInsights: {
    fit: string;
    thingsToKnow: string;
    marketValue: string;
    tenureAndPromotion: string;
    priorCompanies: string;
    nextCompanies: string;
  };
};

// 会社全体の在籍年数・離職率(セグメント別の公開データは無いため、共通事実として保持)
const salesforceCompanyWideTenure = "会社全体の離職率は10〜20%前後と推定される(有価証券報告書・大手口コミサイトの推定値、OpenWorkには「2〜3年で入れ替わりが多い」という声もある)。外資SaaS全体で見れば特別高い水準ではない。社内公募制度があり、マネージャーやグローバルアカウントマネージャーへの昇進ルートも用意されている。";

const salesforceEnterpriseCareerFlow = {
  tenureAndPromotion: `${salesforceCompanyWideTenure} Enterprise領域では、大型商談を1年以内に立ち上げる成果プレッシャーが強く、立ち上がりに時間がかかると評価が厳しくなりやすいとの転職エージェント側の指摘がある。マネージャーへの昇進は、担当アカウントでの成果が明確に出てからというケースが多い。`,
  priorCompanies: "Enterprise領域は、日系大手SIerや大手代理店で大型商談(数億〜十数億円規模)を経験した営業、Oracle・IBM・SAPなど大手IT事業会社出身者、アクセンチュア・デロイトなど戦略コンサル出身者が採用されやすい傾向がある。実際の転職体験談でも、日系大手SIerで金融機関向けに8年間・年間約15億円の受注を担当していた営業がEnterprise AEとして入社した例が確認できる(note.com「大手SIer営業がSalesforce AEに転職した話」)。同記事では「ニーズが顕在化した後に提案する」SIer型の営業から、「何もない状態からニーズを創造する」SaaS型営業への転換が最大のギャップだったと述べられている。",
  nextCompanies: "Enterprise AEの経験者は、HubSpot・Adobe・Workdayなど他の外資SaaS企業のEnterprise/Strategic AE、総合系コンサルファーム、メガベンチャーの事業開発職などへ転職する例が見られる(転職エージェント記事の集計)。大型商談を動かした実績が、次の転職で「動かせる金額」の証明になりやすい。",
};

const salesforceSMBCareerFlow = {
  tenureAndPromotion: `${salesforceCompanyWideTenure} SMB領域は職歴1年以下の第二新卒や営業未経験者も応募対象になり得ると案内されており、即戦力採用だけでなく育成前提の採用ロットも含まれると見られる。`,
  priorCompanies: "SMBは営業未経験・第二新卒からの応募も歓迎されるポジションとされ、前職は広告・人材・IT系のインサイドセールスやフィールドセールス経験者が中心になりやすい。転職エージェント記事でも「未経験でもAE採用のケースがある」と紹介されている一方、SMBとEnterpriseのどちらが現実的かは個人の経験次第としている。",
  nextCompanies: "SMBでの実務経験を積んだ後は、社内でCommercial・Mid-Market AEへステップアップするか、他社のSMB/Commercial AEへ転職するケースが典型的。現役の外資ITセールスが書いたnote記事(「SMBしかやってこなかったAEはエンタープライズに行けないの？」)では、SMB経験のみでいきなり他社のEnterprise AEへ転職するのは、採用側が同規模・同複雑度の経験者を優先するため難易度が高いと指摘されており、「SMB経験だけで市場価値十分」と考えるのは危険だと警告している。",
};

const datadogMidMarketCareerFlow = {
  tenureAndPromotion: "Datadog Japanは2019年設立と組織が新しく、平均在籍年数・離職率・社内昇進の傾向を示す公開データはほとんど確認できていない。グローバルでは2025年時点で6,000人超(NASDAQ: DDOG)まで急拡大しており、日本法人も同様の拡大フェーズにあると推測されるが、これは推測の域を出ない。",
  priorCompanies: "AE個別の前職データは確認できていない。求人要件が「新規ロゴ獲得の実績」「アカウントマッピングへの習熟」を明示している点から、他のSaaS/クラウド企業で新規開拓を担っていた営業が中心になっている可能性がある(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。一般的な外資Observability/クラウド監視SaaS営業のキャリアパターンから推測すると、New Relic、Dynatrace、Splunk、AWS/Google CloudのISV営業など同業他社への転職が中心になりやすいと考えられるが、これは未確認の一般論であり、Datadog Japan固有のデータではない。",
};

const datadogCommercialCareerFlow = {
  tenureAndPromotion: "Datadog Japanは2019年設立と組織が新しく、平均在籍年数・離職率・社内昇進の傾向を示す公開データはほとんど確認できていない。求人ページでは「早期昇格」を打ち出しており、Commercial領域は他セグメントより昇進サイクルが速い可能性はあるが、確認された事実ではない。",
  priorCompanies: "AE個別の前職データは確認できていない。求人要件が「IT製品のフィールドセールス経験(クロージング含む)2年以上」とMid-Market・Public Sectorより経験年数のハードルが低く設定されている点から、他セグメントよりポテンシャル採用の比率が高い可能性がある(求人要件からの読み解み)。",
  nextCompanies: "確認できる公開データはない。",
};

const datadogPublicSectorCareerFlow = {
  tenureAndPromotion: "Datadog Japanは2019年設立と組織が新しく、平均在籍年数・離職率・社内昇進の傾向を示す公開データはほとんど確認できていない。",
  priorCompanies: "求人要件に「官公庁・自治体・教育機関向け営業経験2〜3年以上」「SLED領域でのフィールドセールス経験」が明記されているため、同分野を専門に担当してきた外資・国内ベンダーの営業出身者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。SLED専門の営業経験は希少性が高いため、同領域を強化したい他のセキュリティ・クラウド基盤企業からの引き合いにつながりやすいと考えられるが、これは未確認の一般論である。",
};

export type Signal = {
  id: string;
  companySlug: string;
  date: string;
  type: "新着求人" | "採用拡大" | "注目領域" | "組織シグナル";
  confidence: "公式確認" | "Genba分析";
  title: string;
  summary: string;
  source: Source;
};

export const companies: Company[] = [
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM / AI",
    hq: "San Francisco, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "積極採用",
    salesRoles: 4,
    description: "Data Cloud、Agentforce、業界別Enterprise Salesなど複数の営業ポジションを継続掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.salesforce.com/jp/ja/",
    tags: ["Enterprise", "SMB", "Data & AI"],
    interviewFlow: {
      steps: [
        { label: "書類選考・適性検査", detail: "職務経歴書を提出。書類と合わせてWeb適性検査(形式は「玉手箱」との報告が多い)を課される場合がある。" },
        { label: "一次面接", detail: "人事(HR)担当者による面接。転職理由・志望動機・経歴の一貫性を中心に確認される。" },
        { label: "二次面接", detail: "配属予定チームのマネージャークラスが担当。V2MOM(同社の意思決定フレームワーク)を踏まえた論理的な自己分析や、過去の成功体験の深掘りが多いと報告されている。" },
        { label: "最終面接", detail: "役員クラスとの面接。営業職は仮想顧客を想定した商談ロールプレイングが実施され、提案資料の事前準備が必要になる。" },
        { label: "内定", detail: "応募から内定まで、目安として約1ヶ月とされる。" },
      ],
      note: "複数の転職エージェント記事・口コミサイトの記述を基にGenbaが整理した一般的な流れです。ポジションや年度により変わる可能性があり、実際のフローは選考案内で確認してください。",
    },
  },
  {
    slug: "datadog",
    name: "Datadog",
    category: "Observability",
    hq: "New York, US",
    japanPresence: "東京",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "Commercial、Mid-Market、Public Sectorまで複数セグメントで営業人材を募集。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.datadoghq.com/ja/",
    tags: ["Commercial", "Mid-Market", "Public Sector"],
    interviewFlow: {
      steps: [
        { label: "書類選考", detail: "職務経歴書による書類選考。" },
        { label: "リクルーター面談", detail: "社内リクルーターとのカジュアル面談。経歴確認と会社説明が中心。" },
        { label: "一次面接", detail: "採用予定ポジションのハイアリングマネージャーが担当。" },
        { label: "二次面接", detail: "チームメンバーやクロスファンクショナルな関係者との面接。カルチャーフィットやスピード感への適応力が見られる傾向がある。" },
        { label: "最終面接", detail: "シニアリーダーとの面接。ポジションによっては技術面接やロールプレイが追加される場合がある。" },
      ],
      note: "note.com「Datadog Japan面接対策」記事など複数の情報を基にGenbaが整理した一般的な流れです。ポジションにより変わる可能性があり、実際のフローは選考案内で確認してください。",
    },
  },
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "Enterprise Workflow",
    hq: "Santa Clara, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "Enterprise AE、Solution Sales、Partner Accountなど日本向け採用を幅広く掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.servicenow.com/locations/apj/japan/",
    tags: ["Enterprise", "Manufacturing", "Partner"],
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    category: "Data Cloud",
    hq: "Bozeman, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "業界特化型Enterprise AEや若手営業育成プログラムを東京で展開。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.snowflake.com/us/en/search-results?keywords=Tokyo",
    tags: ["Enterprise", "Media", "Sales Academy"],
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    category: "Developer Data Platform",
    hq: "New York, US",
    japanPresence: "東京",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "Enterprise Salesに加え、パートナー戦略を担う日本向けポジションを掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.mongodb.com/careers/",
    tags: ["Enterprise", "Partner", "Developer"],
  },
  {
    slug: "braze",
    name: "Braze",
    category: "Customer Engagement",
    hq: "New York, US",
    japanPresence: "東京オフィス",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "東京拠点を持つカスタマーエンゲージメント企業。採用ページを定点観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.braze.com/company/careers",
    tags: ["Marketing", "Customer Engagement"],
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike",
    category: "Cybersecurity",
    hq: "Austin, US",
    japanPresence: "日本法人",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "日本向けキャリアページと営業・チャネル関連求人を継続観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.crowdstrike.com/ja-jp/careers/",
    tags: ["Security", "Enterprise", "Channel"],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM / Marketing",
    hq: "Cambridge, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "日本市場の営業・カスタマーサクセス・パートナー職を定点観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.hubspot.com/careers/jobs",
    tags: ["SMB", "Mid-Market", "Partner"],
  },
];

export const jobs: Job[] = [
  {
    id: "sf-data-cloud-ae",
    companySlug: "salesforce",
    title: "Account Executive, Data Cloud",
    segment: "Data & AI",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-05-21",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR343328)", url: "https://careers.salesforce.com/jp/%E3%82%B8%E3%83%A7%E3%83%96/jr343328/account-executive-data-cloud/" },
    descriptionSummary: "Data Cloudは製品としての採用が広がり始めた段階(アダプション期)にあり、確立された勝ちパターンがまだない分、自分で提案の型を作れるポジションと説明されている。プロダクトスペシャリストAEという位置づけで、Core AEとは別に、データ統合・AI活用の文脈でSalesforce既存顧客への提案を広げていく役割。担当セグメント全体の事業成長をどう設計するかという視点が求められると明記されている。",
    genbaTake: "「アダプション期」という表現は、大型の成功事例がまだ少なく、提案の型を自分で作る負荷が大きいということでもある。ただし裏を返せば、まだ勝ちパターンが固まっていない今だからこそ、自分の提案がそのまま会社の標準になり得る、伸びしろの大きいポジションとも言える。",
    compensationReality: "OTEは基本給+インセンティブ+株式報酬(RSU)の3本立てで構成され、Enterprise・Specialist AE帯の目安は1,500万〜3,000万円(転職エージェント記事の集計)。Base:Incentiveの比率は6:4が一般的とされ、達成率100%を超えるとアクセラレーターで報酬が伸びる設計。ただしRSUの支給はグレード7以上が目安という口コミがあり、Specialist AEとしての等級がその基準を満たすかは面接で確認したい。サイニングボーナスの有無は公開情報から確認できなかった。「稼げるか」は月々の固定給ではなく達成率次第で振れ幅が大きい設計だと理解しておきたい。",
    desiredProfile: "同社の「Ohana」文化のもとでは、営業職に共通して「新しい情報を素早くキャッチするアンテナ感度」「自らの意志を持ち考え行動できること」「顧客の課題を自分の課題として捉える共感力」が求められる人物像として複数の社員インタビューで語られている。Data Cloudのように勝ちパターンがまだ確立していない製品を扱うポジションでは、この自走力・仮説構築力が特に重視されると考えられる。面接ではV2MOM(同社の意思決定フレームワーク)を用いたロジカルな自己分析、SWOT分析を踏まえた競合理解が評価軸になるとされ、「なぜData Cloudか」「なぜ今このプロダクトに参入するのか」を自分の言葉で語れる準備が要る。",
    careerInsights: {
      fit: "新しい製品を売ることに抵抗がなく、型がまだない状況を楽しめる人に向く。逆に、確立された勝ちパターンや先行事例に沿って進めたいタイプ、答えが用意された環境を好む人には向かない。",
      thingsToKnow: "Data CloudはCore CRMほど導入事例が蓄積されていない可能性がある。商談で使える顧客事例の数と、Core AEとの案件連携の実態を面接前に確認しておきたい。",
      marketValue: "AI・データ領域のスペシャリストAEとしての実績は、複数の角度で市場価値になる。①報酬面では、外資SaaSのEnterprise・Strategic AE帯(目安1,200万〜2,500万円超、転職エージェント記事の集計)への足がかりになりうる。②スキル面では、ARR/ACVの拡大実績、Quota達成率、Core AEとの連携によるアカウント全体への貢献度合いなど、定量的に語れる実績を積みやすい。③キャリアの選択肢としては、他のデータ/AI系SaaS(Snowflake、Databricksなど)のSpecialist AEへの横移動、Core AEへの転向、プリセールス・Sales Engineeringへの転身など複数の道がある。④一方で、Data Cloudのようなアダプション期の製品は「導入期は需要が小さく、成熟期は競争が激化する」という市場ステージ特有のリスクがあり、扱った案件が単発の実験導入だったのか、継続契約・拡張につながったのかを語れるかが評価の分かれ目になる。",
      ...salesforceEnterpriseCareerFlow,
    },
  },
  {
    id: "sf-agentforce-smb",
    companySlug: "salesforce",
    title: "Account Executive, Agentforce SMB",
    segment: "SMB",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR320258)", url: "https://careers.salesforce.com/jp/%E3%82%B8%E3%83%A7%E3%83%96/jr320258/account-executive-agentforce-smb/" },
    descriptionSummary: "AIとリアルタイムデータ分析でCustomer 360を再定義する新製品Agentforceを、SMB顧客層に提案する役割。見込み顧客の経営課題を深く理解した上で、Agentforceがそれをどう解決するかを提示する形の営業スタイルが想定されている。AI活用型ソリューションの技術理解と、B2B・B2C双方のソリューション設計経験が要件として明記されている。",
    genbaTake: "SMBセグメントでAIプロダクトを売るのは、導入事例がまだ少ない新製品を、意思決定は速いが予算規模の小さい顧客に説明していく難しさがある。裏を返せば、説明コストの高いAI商材を数多くの商談でさばく経験は、AI活用型ソリューションを売れる人材としての市場価値を大きく引き上げてくれるはずだ。",
    compensationReality: "OTEは基本給+インセンティブ+株式報酬の3本立てで、SMB・Commercial AE帯の目安は900万〜1,600万円(転職エージェント記事の集計)。Base:Incentiveは6:4とされ、達成率次第でアクセラレーターがかかる仕組みは他セグメントと共通。ただしRSUの支給はグレード7以上が目安という口コミがあり、SMB配属の等級がその基準に届くかどうかは要確認。若手・未経験採用が多いセグメントであることを踏まえると、初年度からRSUが確約されるとは限らない点は留意しておきたい。",
    desiredProfile: "求人ではAI駆動型ソリューションの技術理解とB2B・B2C双方の設計経験が明記されている。加えて、同社の「Ohana」文化のもとでは「明るく元気なコミュニケーション」「顧客の課題を自分ごととして捉える共感力」が営業職全般に求められる資質として社員インタビューで繰り返し語られている。SMBは商談数をこなすスピード感が前提のため、初対面の相手に短時間で信頼を築けるコミュニケーション力と、AIという新しい概念を噛み砕いて説明するわかりやすさが特に問われるはずだ。",
    careerInsights: {
      fit: "商談数をこなしながらスピーディーに数字を作りたい人、AIという新しい概念を初対面の顧客にわかりやすく説明するのが得意な人に向く。営業未経験・第二新卒からのAE挑戦にも門戸が開かれているとされ、経験の量より学習速度と自走力を評価されやすい。逆に、時間をかけて大型商談をじっくり作り込みたい人には物足りなく感じられやすい。",
      thingsToKnow: "SMBは商談化から成約までのサイクルが短い分、パイプラインの枯渇と隣り合わせになりやすい。自分でリード生成する比率がどれくらいかを事前に確認しておきたい。また、現役の外資ITセールスのnote記事では「SMB経験だけでいきなり他社のEnterprise AEへ転職するのは難易度が高い」と指摘されており、次のキャリアを見据えるなら、案件設計・パイプラインマネジメントを言語化できる経験を意識して積んでおきたい。",
      marketValue: "SMBでAI活用型ソリューションを売り切った実績の市場価値は、単純な年収の伸びだけでは測れない。①報酬面では、外資SaaSのSMB AE帯(目安700万〜900万円)からMidMarket AE帯(900万〜1,300万円)へのステップアップの土台になる(転職エージェント記事の集計値)。②ただし、現役セールスの実体験note記事が指摘する通り、SMB経験だけで他社のEnterprise AEへ直接転職するのは難しく、市場価値を最大化するには、社内でMidMarket・Enterpriseへの異動を先に経験するか、商談化率・新規開拓の再現性を定量的に語れるようにしておく必要がある。③キャリアの選択肢としては、プレイヤーを極める道(Sr. AE→Strategic AE)、マネジメント職(AE Manager)、CS(カスタマーサクセス)への転身、営業企画(Sales Ops)への異動などがある。④AIプロダクトの新規性への適応力自体は、今後数年の外資SaaS市場全体で評価が上がりやすいスキルであり、セグメントの小ささを補う強みになり得る。",
      ...salesforceSMBCareerFlow,
    },
  },
  {
    id: "sf-enterprise-b2c",
    companySlug: "salesforce",
    title: "Account Executive, Enterprise B2C",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR325247)", url: "https://careers.salesforce.com/en/jobs/jr325247/account-executive-enterprise-sales-btoc%E6%B6%88%E8%B2%A1-%E6%B5%81%E9%80%9A-%E7%89%A9%E6%B5%81-%E9%80%9A%E4%BF%A1-%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2-%E3%83%86%E3%83%AC%E3%82%B3%E3%83%A0/" },
    descriptionSummary: "消費財・流通・通信・メディアなどBtoC大手企業向けのDX提案を担うコンサル型の営業ポジション。単純な製品販売ではなく、顧客の事業の理想像を一緒に描く「事業設計パートナー」としての立ち位置を重視しており、商談相手はC-level・経営層が中心となる。経営戦略に直結する提案を通じて、業界横断で通用するスキルを積める点が強調されている。",
    genbaTake: "「事業設計パートナー」という立ち位置は魅力的だが、経営層への提案が中心になるほど商談サイクルは長くなり、成果が出るまでのタイムラグも大きくなりやすい。その分、C-level商談を通じて経営戦略に直結する提案経験を積めれば、次のキャリアでも強く語れる実績になるはずだ。",
    compensationReality: "OTEは基本給+インセンティブ+株式報酬で構成され、Enterprise AE帯の目安は1,200万〜1,800万円、実績次第でStrategic AE帯(1,500万〜2,500万円超)も視野に入る(転職エージェント記事の集計)。Base:Incentiveは6:4、達成率100%超でアクセラレーターが効く設計。大型商談を扱うEnterprise配属はRSU支給対象とされるグレード7以上に該当しやすいと考えられるが、これはGenbaの推測であり確認事実ではない。商談サイクルが長い分、インセンティブが安定して入るまでのタイムラグも織り込んでおきたい。",
    desiredProfile: "求人ではC-level・経営層との折衝が前提とされており、経営戦略を理解した上でロジカルに提案を組み立てる力が求められる。面接では「過去のクライアントでの成功体験とその要因」「現職で学んだことを5つ挙げる」といった自己分析を掘り下げる質問が定番とされ、最終面接では商談ロールプレイングを通じて、初対面の経営層に対する立ち居振る舞いそのものが評価される。単なる製品知識より「顧客の理想像を一緒に描く」姿勢を体現できるかが問われるポジションだと考えられる。",
    careerInsights: {
      fit: "経営層との対話に物怖じせず、長期の関係構築に耐えられる人に向く。現役の外資ITセールスが書いたnote記事では、SIer時代のように「顧客側が既にニーズを顕在化させた状態」で提案するのではなく、「何もない(下手をすればネガティブな)ところからニーズを創り出す」営業への転換が最大の難所だったと述べられており、能動的に課題を仕掛けられるタイプに向く。逆に、短期間で成果を出したい人、案件が来るのを待つ受け身のスタイルに慣れている人には不向き。",
      thingsToKnow: "コンサル型営業は商談化までの準備(業界研究・提案資料作成)の負荷が高い。Enterprise採用では日系大手SIerや大手代理店で大型商談を経験した人、Oracle・IBM・SAPなど大手IT事業会社出身者、戦略コンサル出身者が優先される傾向があるとされ、同格の経験がない場合は「ニーズを自分で創る」動き方をどう証明するかが選考の焦点になりやすい。オンボーディング期間中にどれだけ手厚いプリセールス・SEサポートを受けられるかも確認しておきたい。",
      marketValue: "BtoC大手企業の経営層向けコンサル型提案の実績は、複数の観点で市場価値がある。①報酬面では、外資SaaSのEnterprise AE帯(目安1,200万〜1,800万円)、実績次第でStrategic AE帯(1,500万〜2,500万円超)を狙える(転職エージェント記事の集計値)。②キャリアの選択肢としては、他の外資SaaSのEnterprise/Strategic AEへの横移動に加え、事業会社の事業開発・経営企画、戦略コンサルティングファームへの転身など、営業職の枠を超えた選択肢が開けやすい。これはC-level商談という経験の希少性による。③ただし大型商談は成約までのリードタイムが長く、在籍1〜2年では実績が数字として出ていない可能性もある。転職市場では「動かした金額」だけでなく「商談を前に進めた具体的なプロセス」を語れるかが問われる。④退職後の競業避止条項によって、同業界・同顧客層への転職に一定期間制約がかかる場合がある点も、実務では確認しておきたい。",
      ...salesforceEnterpriseCareerFlow,
    },
  },
  {
    id: "dd-midmarket-ae",
    companySlug: "datadog",
    title: "Mid-Market Account Executive",
    segment: "Mid-Market",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/6523631/" },
    descriptionSummary: "従業員1,000〜5,000名規模の中堅企業への新規開拓(新規ロゴ獲得)に特化した役割。交渉から技術デモまで営業サイクル全体をリードし、CTOやエンジニアリング・ITリーダー層への戦略的営業、SDR・パートナー・マーケティングとの連携が求められる。Sales NavigatorやDemandbaseなど営業支援ツールの活用も明記されており、出張は最大30%程度を想定。",
    genbaTake: "「新規ロゴ獲得に特化」と明記されている点は、既存顧客の深耕やクロスセルより新規開拓の負荷が高いことを意味する。裏を返せば、意思決定者が少数で決裁が比較的速いMid-Marketで新規開拓力を鍛えられるのは、次にEnterpriseへステップアップする際の強力な武器になる。",
    compensationReality: "OpenMoneyの自己申告データでは営業平均年収1,238万円、レンジは760万〜3,000万円。Datadogはジュニアレベルの職務でも入社時にRSUが付与されるという口コミがあり、Salesforceのような等級による支給ライン(グレード7以上)とは前提が異なる可能性がある。一方で「ポジションごとに給与がほぼ一律で交渉の余地が少ない」という口コミもあり、オファー時の上振れ幅は限定的かもしれない。Mid-Marketは新規開拓中心という役割上、インセンティブの変動幅も大きくなりやすい。",
    desiredProfile: "求人では新規開拓の実績とアカウントマッピングへの習熟、物怖じしないパイプライン創出力が明記されている。Datadogは経験者とポテンシャル層の両方を採用対象としており、技術への好奇心とSaaS企業で経験を積みたいという意欲があれば、必ずしも同業界の経験がなくても評価対象になり得ると案内されている。面接ではスピード感への適応力とカルチャーフィットが重視される傾向があり、変化の速いグローバル企業でオーナーシップを持って動けるかが問われる。",
    careerInsights: {
      fit: "自分でパイプラインを作りながら、CTOなど技術層に刺さる説明ができる人に向く。逆に、既存顧客のリレーション管理を中心にしたい人には向かない。",
      thingsToKnow: "新規ロゴ獲得に特化と明記されているため、既存顧客への拡張提案の機会は限定的な可能性がある。担当エリアの企業密度(未開拓の見込み顧客がどれだけ残っているか)を面接で確認したい。",
      marketValue: "Mid-Marketで新規開拓の実績を作れた場合の市場価値は、①報酬面では外資SaaSのMidMarket AE帯(目安900万〜1,300万円)からEnterprise AE帯(1,200万〜1,800万円)へのステップアップ材料になる(転職エージェント記事の集計値)。②評価される実績は、新規ロゴ獲得数・Win Rate・自己開拓によるパイプライン創出比率など、次の転職で「自走できる営業力」を証明する定量指標になりやすい。③キャリアの選択肢は、同業(Observability/Cloud監視)のEnterprise AE、あるいはSaaS全般のMidMarket〜Enterprise AEへの横展開が中心。④Datadog Japan自体が新しい組織のため、社内でのマネジメント昇格実績はまだ蓄積が薄いと見られ、管理職を目指すなら他社での実績提示が必要になる可能性がある(未確認の一般論)。",
      ...datadogMidMarketCareerFlow,
    },
  },
  {
    id: "dd-commercial-ae",
    companySlug: "datadog",
    title: "Commercial Account Executive",
    segment: "Commercial",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/6009777/?gh_jid=6009777" },
    descriptionSummary: "中小規模市場へのアウトバウンド営業による新規顧客獲得が中心の役割。IT製品のフィールドセールス経験(クロージング含む)2年以上が要件として明記されており、CTO・CIO・エンジニアリング層への提案とセールス・デベロップメント・チームとの連携が求められる。技術製品を扱った経験と、営業KPI達成の実績が重視されている。",
    genbaTake: "「中小規模市場」「アウトバウンド営業」という組み合わせは、商談数をこなしながら自分でパイプラインを作る負荷が高いポジションであることを示唆している。裏を返せば、未経験からのAE挑戦の入り口として、自走できる営業力を最短距離で鍛えられるポジションとも言える。",
    compensationReality: "OpenMoneyの自己申告データでは営業平均年収1,238万円、レンジは760万〜3,000万円で、Commercialはこのレンジの下〜中位に位置しやすいと考えられる。ジュニアレベルでもRSUが付与されるという口コミがある一方、「給与はポジション一律で交渉の余地が少ない」という指摘もある。未経験・ポテンシャル採用の比率が高いセグメントであるため、オファー額そのものより、達成率次第でのインセンティブ変動幅を面接で確認しておきたい。",
    desiredProfile: "求人ではIT製品のフィールドセールス経験(クロージング含む)2年以上、技術への高い学習意欲と好奇心、継続的な成長マインドセットが明記されている。Datadogはスキル・経験・強みで公平に評価する実力主義文化を掲げており、全くの未経験者よりは基礎的な営業経験を積んだ人が対象になりやすいと考えられる。面接ではカルチャーフィットや外資特有のスピード感への適応力も問われる傾向がある。",
    careerInsights: {
      fit: "IT製品のフィールドセールス経験を活かして、数多くの商談を自走できる人に向く。逆に、未経験からいきなりクロージングを任される負荷に不安がある人には難易度が高い。",
      thingsToKnow: "アウトバウンド中心のため、担当エリア・顧客リストの質によって成果の出やすさが大きく変わる。他求人媒体ではDatadog Japanの営業職について「早期昇格」「上限のないインセンティブ」を掲げる募集も見られ、Commercial領域は他セグメントよりポテンシャル採用・早期昇格の比率が高い可能性がある。前任者の達成率と、担当替えの頻度を面接で確認しておきたい。",
      marketValue: "中小規模市場での新規開拓を自走できた実績の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯(目安700万〜1,300万円のレンジ)からMidMarket AE帯へのステップアップの土台になる。②評価される実績は、アウトバウンドでの新規開拓率、商談化率、クロージング経験の有無であり、「未経験からのAE挑戦を成功させた」というストーリー自体が、次の転職での再現性の証明になる。③キャリアの選択肢としては、社内でのMid-Market昇格、他社のCommercial/MidMarket AEへの横移動が中心的なルート。④ただし中小規模市場での成果は担当エリア・リストの質に依存する部分が大きいため、転職市場では「どれだけ厳しいテリトリーで、どんな成果を出したか」の背景説明が問われやすい。",
      ...datadogCommercialCareerFlow,
    },
  },
  {
    id: "dd-public-sector",
    companySlug: "datadog",
    title: "Strategic Account Executive, Public Sector",
    segment: "Public Sector",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/7439573/" },
    descriptionSummary: "自治体・教育機関・病院・大学など大規模SLED(State/Local/Education)組織への新規開拓・既存深耕を担う役割。5年以上のクロージング経験、官公庁向け営業経験2〜3年以上、年間売上目標100万ドル(1ドル=157円換算で約1.57億円)以上・平均ディールサイズ10万ドル(約1,570万円)以上の実績が要件として挙げられている。自らプロスペクティングしパイプラインを構築できることも求められている。",
    genbaTake: "官公庁向け営業経験を明確に要件化している点から、同領域での実績がある即戦力採用である可能性が高い。裏を返せば、SLED特有の長い調達プロセス・予算サイクルを理解している人にとっては、その参入障壁の高さがそのまま自分の希少価値になるポジションだと言える。",
    compensationReality: "OpenMoneyの自己申告データでは営業平均年収1,238万円、レンジは760万〜3,000万円。SLED専門性を要件化しているポジションのため、レンジの上位に位置する可能性があるが、公開データでの裏付けはない。ジュニアレベルでもRSUが付与されるという口コミがある一方、給与はポジション一律で交渉余地が少ないという口コミもあり、オファー額の伸びしろは入社後の達成率とインセンティブ設計に依存すると考えられる。",
    desiredProfile: "求人では5年以上のクロージング経験、官公庁向け営業経験2〜3年以上、自らプロスペクティングしパイプラインを構築できる自走力が明記されており、他セグメントよりも即戦力性を強く求める採用であることがうかがえる。SLED特有の長い調達プロセスに向き合う忍耐力と、予算サイクルを見据えた長期的な関係構築力が問われるポジションだと考えられる。",
    careerInsights: {
      fit: "官公庁特有の長い調達プロセスに付き合える忍耐力があり、既に同領域の実績がある人に向く。逆に、スピード感のある民間エンタープライズ営業を求める人には不向き。",
      thingsToKnow: "SLED特有の予算サイクル(年度予算・入札)への理解が前提となる。案件のリードタイムが長いため、短期の成果を求められるプレッシャーとのバランスを面接で確認しておきたい。",
      marketValue: "官公庁向けSaaS営業の実績は、他のセグメントと違う軸で市場価値が評価される。①報酬面ではEnterprise・Strategic AE帯に準じる水準が期待できるが、公開データでの確認はできていない。②最大の価値は希少性で、SLED特有の調達プロセス・予算サイクルへの理解は代替が効きにくく、同領域を強化したいセキュリティ・クラウド基盤企業からの引き合いにつながりやすい。③一方で、官公庁向け営業の経験は民間エンタープライズ営業への転換では評価が割り引かれる場合があり、「意思決定の速い民間営業」を次に目指すなら、そのギャップをどう埋めるかを面接で説明できる準備が要る。④商談サイクルが長いため、在籍が浅いと成果として語れる実績がまだ蓄積されていない可能性があり、入社時期と現時点の実績を正直に伝えることが重要になる。",
      ...datadogPublicSectorCareerFlow,
    },
  },
];

export const signals: Signal[] = [
  {
    id: "signal-sf-data-ai",
    companySlug: "salesforce",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "Data CloudとAgentforceで複数セグメントを同時募集",
    summary: "専門領域とSMBのAE求人を同時に確認。日本市場でAI・データ商材の販売体制を広げている可能性があります。",
    source: { label: "Salesforce Careers", url: "https://careers.salesforce.com/jp/ja/" },
  },
  {
    id: "signal-dd-segments",
    companySlug: "datadog",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "Commercialから公共まで営業セグメントを横断して募集",
    summary: "複数の顧客規模・業界向けAE求人を確認。日本営業組織のカバレッジ拡大を示すシグナルです。",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/" },
  },
  {
    id: "signal-servicenow-breadth",
    companySlug: "servicenow",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "営業・パートナー・アーキテクトを横断して日本採用",
    summary: "日本拠点ページで複数職種を確認。フロント営業だけでなく、周辺組織も含む採用が見られます。",
    source: { label: "ServiceNow Japan Careers", url: "https://careers.servicenow.com/locations/apj/japan/" },
  },
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}

export function getCompanyJobs(slug: string) {
  return jobs.filter((job) => job.companySlug === slug);
}

export function getCompanySignals(slug: string) {
  return signals.filter((signal) => signal.companySlug === slug);
}
