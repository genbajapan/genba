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


// Braze Japanは2020年7月設立で、離職率・在籍年数の公開データは無いため共通の非公開注記として保持
const brazeTenureNote = "Braze Japanは2020年7月設立と組織が若く、平均在籍年数・離職率の公開データは確認できていない。Japan Cloud Consultingとの協業体制のため、評価・昇進の仕組みが本社と完全に同一かは非公開。";

const brazeSalesDirectorCareerFlow = {
  tenureAndPromotion: brazeTenureNote,
  priorCompanies: "求人要件で「5年以上、5人以上のクオータ保有Enterprise AEを率いた経験」が明記されているため、他の外資SaaS企業で営業マネージャー・ディレクター職を務めた経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。マネジメント経験を積んだ後は、他社のVP Sales・Sales Director職、あるいはBraze社内でのAPACリージョン統括などへの展開が考えられるが、これは未確認の一般論。",
};

const brazeAECommercialCareerFlow = {
  tenureAndPromotion: brazeTenureNote,
  priorCompanies: "求人要件で「3年以上のSaaS営業でのValue Selling経験」が明記されており、他の外資/国内SaaS企業でのフィールドセールス経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。Commercial区分での実績を積んだ後は、社内でEnterprise AEへステップアップするケースが典型的と考えられるが、これは未確認の一般論。",
};

const brazeAEEnterpriseCareerFlow = {
  tenureAndPromotion: brazeTenureNote,
  priorCompanies: "求人要件で「Enterprise区分でのSaaS営業実績、複雑な商談のマネジメント経験」に加え、「スタートアップ企業での経験」が歓迎要件として明記されている。",
  nextCompanies: "確認できる公開データはない。Enterprise AEとしての実績は、他社のStrategic/Named AE、あるいはSales Director職への転職材料になりやすいと考えられるが、これは未確認の一般論。",
};

// HubSpot Japanは2016年2月設立、離職率・在籍年数の公開データは無いため共通の非公開注記として保持
const hubspotTenureNote = "HubSpot Japanは2016年2月設立、2026年6月時点で約300人規模とされる。全社的な離職率・在籍年数の公開データは確認できていない。「カルチャーに100%マッチする人材以外は採用しない」という評判があり、カルチャーフィットが在籍・昇進に強く影響する可能性がある。";

const hubspotSMBCareerFlow = {
  tenureAndPromotion: hubspotTenureNote,
  priorCompanies: "求人要件で「2年以上のSaaS/Web・IT製品営業経験」が明記されており、他のSaaS企業でのインサイドセールス・フィールドセールス経験者、または未経験に近いポテンシャル層が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。SMB区分での実績を積んだ後は、社内でMid Market AEへステップアップするケースが典型的と考えられるが、これは未確認の一般論。",
};

const hubspotMidMarketCareerFlow = {
  tenureAndPromotion: hubspotTenureNote,
  priorCompanies: "求人要件で「5年以上のSaaS/Web・IT製品営業経験」が明記されており、複数ステークホルダーとの複雑な商談経験を持つ営業が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。Mid Market区分での実績は、社内でCorporate AEへのステップアップ、または他社のMid-Market/Enterprise AEへの転職材料になりやすいと考えられるが、これは未確認の一般論。",
};

const hubspotCorporateCareerFlow = {
  tenureAndPromotion: hubspotTenureNote,
  priorCompanies: "求人要件で「7年以上のSaaS/Web・IT製品営業経験」が明記されており、大型・複雑商談の経験を持つシニア層が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。Corporate AEとしての実績は、他社のEnterprise/Strategic AE、またはセールスマネジメント職への転職材料になりやすいと考えられるが、これは未確認の一般論。",
};

// Okta Japan株式会社は2020年9月設立、離職率・在籍年数の公開データは無いため共通の非公開注記として保持
const oktaTenureNote = "Okta Japan株式会社は2020年9月設立で、平均在籍年数・離職率を示す公開データは確認できていない。OpenWorkの口コミには「業績悪化、知名度の低さ、パートナー協業の課題」を指摘する声がある一方、「社員のモチベーションが高い」「自由度が高い」という声もあり、評価が分かれている。";

const oktaSMECareerFlow = {
  tenureAndPromotion: oktaTenureNote,
  priorCompanies: "求人要件からは、他のテクノロジー企業でのインサイドセールス・フィールドセールス経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const oktaAuth0CareerFlow = {
  tenureAndPromotion: oktaTenureNote,
  priorCompanies: "求人要件からは、技術理解を伴う営業経験者、特にDevOps・エンジニアリング領域に強いSaaS企業出身者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const oktaEnterpriseAuth0CareerFlow = {
  tenureAndPromotion: oktaTenureNote,
  priorCompanies: "求人要件からは、大型エンタープライズ商材を扱ってきた技術系SaaS企業出身者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

// 合同会社Zendeskは2013年2月設立、2022年の非公開化以降は組織データの開示が限定的なため共通の非公開注記として保持
const zendeskTenureNote = "合同会社Zendesk(旧・株式会社Zendesk)は2013年2月設立。2022年にHellman & FriedmanとPermira主導の投資家グループにより非公開化されて以降、詳細な組織データの開示は限定的。OpenWorkの口コミには「外資ITなので、実績(予算達成率)が全て」という声がある。";

const zendeskSMBCareerFlow = {
  tenureAndPromotion: zendeskTenureNote,
  priorCompanies: "求人要件からは、他のSaaS企業でのインサイドセールス・フィールドセールス経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const zendeskCommercialCareerFlow = {
  tenureAndPromotion: zendeskTenureNote,
  priorCompanies: "求人要件からは、新規開拓と既存アカウント管理の両方を経験したSaaS営業出身者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

// UiPath株式会社は2017年3月設立、2026年2月にカントリーマネージャーが交代したばかりのため共通の非公開注記として保持
// Confluent Japan合同会社は2021年4月設立、2026年3月にIBMへ完全子会社化されたばかりのため共通の非公開注記として保持
const confluentTenureNote = "Confluent Japan合同会社は2021年4月設立、東京都新宿区に本社を置く。2026年3月、IBMが約110億ドルでConfluentを買収し完全子会社化した。2024年に石井晃一氏がカントリーマネージャーに就任(前職はRubrik・Tanium・VMware)。買収後の日本組織の体制変化については公開データが乏しい。";

const confluentDigitalNativeCareerFlow = {
  tenureAndPromotion: confluentTenureNote,
  priorCompanies: "求人要件からは、ビッグデータ・クラウド・SaaS・OSS領域での営業経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const confluentMSPISVCareerFlow = {
  tenureAndPromotion: confluentTenureNote,
  priorCompanies: "求人要件からは、パートナー・チャネル経由の販売経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

// PagerDuty株式会社は2022年5月にJapan Cloudとの合弁で設立、離職率・在籍年数の公開データは無いため共通の非公開注記として保持
const pagerdutyTenureNote = "PagerDuty株式会社は2022年5月、PagerDutyとJapan Cloudの合弁で設立。代表取締役社長の山根伸行氏はIBM Japan・Microsoft Japanで15年以上のエンタープライズ営業経験を持つ。平均在籍年数・離職率の公開データは確認できていない。";

const pagerdutyEnterpriseAECareerFlow = {
  tenureAndPromotion: pagerdutyTenureNote,
  priorCompanies: "求人要件からは、エンタープライズ向け営業経験者、特にインフラ・運用管理系ソリューションの営業出身者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const pagerdutySrSalesManagerCareerFlow = {
  tenureAndPromotion: pagerdutyTenureNote,
  priorCompanies: "求人要件からは、IT業界でのハイタッチ・直販営業経験と、営業マネージャーとしてのピープルマネジメント経験を持つ人材が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

// AMPLITUDE JAPAN合同会社は2014年7月設立、2024年にカントリーマネージャーが交代したばかりのため共通の非公開注記として保持
const amplitudeTenureNote = "AMPLITUDE JAPAN合同会社は2014年7月設立。2024年5月に仁枝かおり氏がカントリーマネージャーに就任(前職はRecorded Future、Vectra AI、Infoblox等で日本法人の立ち上げ・GTM戦略を主導)。平均在籍年数・離職率の公開データは確認できていない。";

const amplitudeEnterpriseAECareerFlow = {
  tenureAndPromotion: amplitudeTenureNote,
  priorCompanies: "求人要件からは、急成長スタートアップ環境を経験した営業、新規テリトリー開拓の実績を持つ人材が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const amplitudeCommercialAECareerFlow = {
  tenureAndPromotion: amplitudeTenureNote,
  priorCompanies: "求人要件からは、SaaS営業の経験者、特にプロダクト主導型(PLG)組織での営業経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
};

const crowdstrikeTenureNote = "クラウドストライク合同会社の平均在籍年数・離職率を示す公開データは確認できていない。RepVueの集計ではAccount Executiveのクオータ達成率は約36%、SDRは約1%と職種による差が非常に大きい。OpenMoneyの自己申告データでは営業平均年収2,035万円(全社平均1,827万円)と外資ITの中でも高水準。";

const crowdstrikeCorporateAECareerFlow = {
  tenureAndPromotion: crowdstrikeTenureNote,
  priorCompanies: "求人要件からは、他のセキュリティ/SaaS企業での新規開拓型営業経験者が中心になると考えられる(求人要件からの読み解き)。",
  nextCompanies: "確認できる公開データはない。",
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
    slug: "mongodb",
    name: "MongoDB",
    category: "Developer Data Platform",
    hq: "New York, US",
    japanPresence: "東京",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "東京拠点で営業採用を継続観測。以前確認していた求人は募集終了を確認したため取り下げ。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.mongodb.com/careers/",
    tags: ["Enterprise", "Developer"],
  },
  {
    slug: "braze",
    name: "Braze",
    category: "Customer Engagement",
    hq: "New York, US",
    japanPresence: "東京オフィス(Japan Cloud経由で運営)",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "Sales Director、Account Executive(Commercial/Enterprise)など日本向け営業職を複数掲載。",
    lastChecked: "2026-08-07",
    careersUrl: "https://japancloud.jp/career/companies/braze/",
    tags: ["Enterprise", "Commercial", "Marketing"],
    interviewFlow: {
      steps: [
        { label: "書類選考", detail: "職務経歴書による書類選考。" },
        { label: "リクルーター面談", detail: "Japan Cloud/Braze採用担当とのカジュアル面談。経歴確認と会社説明が中心。" },
        { label: "一次面接", detail: "採用予定ポジションのハイアリングマネージャーが担当。" },
        { label: "二次面接", detail: "マーケティング・プリセールス等、関連部門メンバーとの面接。One Team連携への理解が見られる傾向がある。" },
        { label: "最終面接", detail: "シニアリーダーとの面接。Value Sellingの実践力を問うケーススタディが含まれる場合がある。" },
      ],
      note: "求人票・Braze面接官トレーニング事例など複数の情報を基にGenbaが整理した一般的な流れです。ポジションにより変わる可能性があり、実際のフローは選考案内で確認してください。",
    },
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike",
    category: "Cybersecurity",
    hq: "Austin, US",
    japanPresence: "日本法人",
    hiringStatus: "積極採用",
    salesRoles: 1,
    description: "数か月ぶりに東京拠点の新規開拓型Corporate Account Executiveポジションが新規公開。今後の採用動向を継続観測。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.crowdstrike.com/ja-jp/careers/",
    tags: ["Security", "Enterprise", "Channel"],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM / Marketing",
    hq: "Cambridge, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "SMB・Mid Market・Corporateの3セグメントでDirect Sales AEを同時掲載。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.hubspot.jp/work-in-tokyo",
    tags: ["SMB", "Mid-Market", "Corporate"],
    interviewFlow: {
      steps: [
        { label: "書類選考", detail: "職務経歴書による書類選考。" },
        { label: "リクルーター面談", detail: "採用担当とのカジュアル面談。経歴確認と会社説明が中心。" },
        { label: "一次面接", detail: "採用予定ポジションのハイアリングマネージャーが担当。" },
        { label: "二次面接", detail: "HEART(Humble・Empathetic・Adaptable・Remarkable・Transparent)というカルチャー適合を重視した面接が行われる傾向がある。" },
        { label: "最終面接", detail: "シニアリーダーとの面接。Can(スキル・経験)・Will(志向)・Must(職務要件)の3軸で評価されるとされる。" },
      ],
      note: "corp-research.jp「HubSpot Japanへの転職チャンスをモノにする」など複数の情報を基にGenbaが整理した一般的な流れです。ポジションにより変わる可能性があり、実際のフローは選考案内で確認してください。",
    },
  },
  {
    slug: "okta",
    name: "Okta",
    category: "ID / セキュリティ",
    hq: "San Francisco, US",
    japanPresence: "Okta Japan株式会社・東京(2020年9月設立)",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "従業員向けID管理のOkta本体と、開発者向けIDのAuth0で、複数の営業ポジションを継続掲載。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.okta.com/company/careers/",
    tags: ["SME", "Developer", "Enterprise"],
  },
  {
    slug: "zendesk",
    name: "Zendesk",
    category: "カスタマーサポート / CX",
    hq: "San Francisco, US",
    japanPresence: "合同会社Zendesk・東京(2013年2月設立、日本売上は前年比約50%成長)",
    hiringStatus: "積極採用",
    salesRoles: 2,
    description: "SMB・Commercialセグメントで営業ポジションを継続掲載。2022年に非公開化。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.zendesk.co.jp/careers",
    tags: ["SMB", "Commercial"],
  },
  {
    slug: "uipath",
    name: "UiPath",
    category: "RPA / 自動化",
    hq: "New York, US",
    japanPresence: "UiPath株式会社・東京都千代田区(2017年3月設立)",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "採用サイトが careers.uipath.com から www.uipath.com/careers/ へ移行し、以前確認していた求人URLはいずれもリンク切れを確認。新サイトはJS描画のため求人一覧を自動取得できず、現時点の掲載状況を継続観測中。",
    lastChecked: "2026-08-07",
    careersUrl: "https://www.uipath.com/careers/jobs",
    tags: ["Enterprise"],
  },
  {
    slug: "confluent",
    name: "Confluent",
    category: "データストリーミング",
    hq: "Mountain View, US",
    japanPresence: "Confluent Japan合同会社・東京都新宿区(2021年4月設立)",
    hiringStatus: "積極採用",
    salesRoles: 2,
    description: "Digital Native・MSP/ISVセグメントで営業ポジションを継続掲載。2026年3月にIBMの完全子会社化。",
    lastChecked: "2026-08-07",
    careersUrl: "https://careers.confluent.io/jobs",
    tags: ["Digital Native", "MSP/ISV"],
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    category: "インシデント管理",
    hq: "San Francisco, US",
    japanPresence: "PagerDuty株式会社・東京(2022年5月、Japan Cloudとの合弁で設立)",
    hiringStatus: "積極採用",
    salesRoles: 2,
    description: "Enterprise Account Executive、Sr. Sales Managerなど、複数の営業ポジションを継続掲載。",
    lastChecked: "2026-08-07",
    careersUrl: "https://japancloud.jp/career/companies/pagerduty/",
    tags: ["Enterprise", "Sales Leadership"],
  },
  {
    slug: "amplitude",
    name: "Amplitude",
    category: "プロダクトアナリティクス",
    hq: "San Francisco, US",
    japanPresence: "AMPLITUDE JAPAN合同会社・東京(2014年7月設立)",
    hiringStatus: "積極採用",
    salesRoles: 2,
    description: "Enterprise・Commercialセグメントで営業ポジションを継続掲載。",
    lastChecked: "2026-08-07",
    careersUrl: "https://job-boards.greenhouse.io/amplitude",
    tags: ["Enterprise", "Commercial"],
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
    id: "brz-sales-director-enterprise",
    companySlug: "braze",
    title: "Sales Director, Enterprise",
    segment: "Enterprise / Sales Leadership",
    location: "東京",
    workStyle: "公式求人で確認(ハイブリッド)",
    language: "日本語 / 英語",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "Braze(Japan Cloud Careers)", url: "https://japancloud.jp/career/jobs/8270/" },
    descriptionSummary: "Enterprise Account Executiveチームを率いる営業マネジメント職。トップ人材の採用・育成、顧客獲得・拡張戦略の実行、BDR・マーケティング・Value Engineeringを含むgo-to-marketチームの統括、正確なフォーキャストと戦略・実行計画の策定が求められる。案件にも直接参加し、チームを商談プロセス全体でコーチする役割。",
    genbaTake: "「案件にも参加してチームをコーチする」という記載は、プレイングマネージャー色が強いポジションであることを示唆する。裏を返せば、マネジメント未経験からでも自分のディール経験を土台にチームを率いる練習ができるポジションとも言える。",
    compensationReality: "日本オフィス固有の給与データは非公開。求人では株式(equity)を含む競争力のある報酬、401K/企業年金、ESPP等の福利厚生が明記されている。マネジメント職のため、配下のAEのクオータ達成に連動したインセンティブ設計になっている可能性が高いが、具体的な数値は非公開。",
    desiredProfile: "求人では5年以上、5人以上のクオータ保有Enterprise AEを率いた経験、プロスペクティングから契約更新・拡張までのフルサイクルSaaS経験、優れたコミュニケーション・交渉力、モバイル/マーケティングテクノロジー領域の営業経験(歓迎)が明記されている。",
    careerInsights: {
      fit: "自分自身の商談経験を土台に、チームの育成と数字づくりを両立させたい人に向く。逆に、プレイヤーとしての商談だけに集中したい人にはマネジメント業務の負荷が大きく感じられる可能性がある。",
      thingsToKnow: "「6職種同時募集」という現在の採用状況から、組織がまだ立ち上がり途中である可能性がある。配下のAEチームが何人体制からのスタートになるかを面接で確認したい。",
      marketValue: "Enterprise営業マネジメント経験の市場価値は、①報酬面では個人IC(Individual Contributor)のAEを上回るOTE水準が期待できるが、日本の具体的な数値は非公開。②評価される実績は、チームのクオータ達成率・採用/育成実績・離職率で、これは他社のセールスマネージャー職への転職で説明しやすい定量指標になる。③キャリアの選択肢は、他の外資SaaS企業のSales Director/VP Sales、あるいはBraze社内でのAPAC統括ポジションへの展開。④組織が若いため、日本市場特有のマネジメント実績はまだ蓄積が薄く、グローバル基準の実績提示が求められる可能性がある。",
      ...brazeSalesDirectorCareerFlow,
    },
  },
  {
    id: "brz-ae-commercial",
    companySlug: "braze",
    title: "Account Executive, Commercial",
    segment: "Commercial",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "Braze(Japan Cloud Careers)", url: "https://japancloud.jp/career/jobs/8264/" },
    descriptionSummary: "日本市場でのコマーシャル規模の新規ビジネス開拓を担う役割。クライアントへのアプローチとValue Sellingの実践による契約締結、ターゲット企業リストの作成、市場動向分析、マーケティング・プリセールス・カスタマーサクセスとの「One Team」連携、営業進捗のトラッキングと戦略修正の提案が求められる。",
    genbaTake: "「One Team」という表現が繰り返し使われている点は、単独で完結する新規開拓ではなく、社内の複数機能を巻き込みながら進める協業型の営業スタイルであることを示している。Salesforce等のCRMツールでのパイプライン管理経験が必須要件になっている点も、プロセス重視の組織文化を示唆する。",
    compensationReality: "日本オフィス固有の給与データは非公開。米国のSDR職ではベース・変動が59/41という設計が確認されているが、日本のCommercial AEに同じ設計が適用されるかは不明。株式(equity)、401K/企業年金相当、ESPP等の福利厚生は米国求人と共通して明記されている。",
    desiredProfile: "求人では3年以上のSaaS営業でのValue Selling経験、目標からの逆算による計画立案・実行力、Salesforce等CRMでのパイプライン管理必須経験、新しいツール・クラウドアプリケーションへの素早い適応力が明記されている。",
    careerInsights: {
      fit: "Value Sellingの型を持ち、社内の複数チームと連携しながら商談を進めることに抵抗がない人に向く。逆に、単独で完結する営業プロセスを好む人には、One Team連携の調整コストが負担に感じられる可能性がある。",
      thingsToKnow: "求人票だけでは、Commercial区分の具体的な顧客規模(従業員数・売上高の基準)が明記されていない。担当予定のテリトリー・顧客リストの質を面接で確認したい。",
      marketValue: "Commercial AEとしての経験の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯からのスタートになりやすいが、日本固有の水準は非公開。②評価される実績は、Value Sellingを実践した新規契約獲得数・受注率で、次の転職でも「型として語れる」営業手法の証明になる。③キャリアの選択肢は、社内でのEnterprise AEへのステップアップ、または他社のCommercial/Mid-Market AEへの横移動。④Braze自体がARR50万ドル以上の大口顧客シフトを進めているため、Commercial区分の位置づけが今後変化する可能性があり、中長期のキャリアパスを面接で確認しておきたい。",
      ...brazeAECommercialCareerFlow,
    },
  },
  {
    id: "brz-ae-enterprise",
    companySlug: "braze",
    title: "Account Executive, Enterprise",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "Braze(Japan Cloud Careers)", url: "https://japancloud.jp/career/jobs/8105/" },
    descriptionSummary: "日本市場のエンタープライズ企業向け新規ビジネス開拓を担う役割。クライアントへのアプローチとValue Sellingの実践、ターゲット企業リストの作成と市場動向分析、長期的な信頼関係構築、マーケティング・プリセールス・カスタマーサクセスとの「One Team」連携が求められる。メルカリ、コスモ石油、マネーフォワード、freeeなど日本の大手・成長企業への導入実績がある。",
    genbaTake: "既存の導入事例(メルカリ、フリー、マネーフォワード等)がいずれも日本発のSaaS/アプリ企業である点は、Braze Japanのターゲット層が伝統的日系大企業というより、テック企業・成長企業に寄っていることを示唆している。「スタートアップ企業での経験」が歓迎要件に入っている点も、この仮説を裏付ける。",
    compensationReality: "日本オフィス固有の給与データは非公開。米国のEnterprise AE(参考:類似職種)ではベース・変動を含むOTEが年間20万ドル台〜30万ドル台と報告されているが、これは米国データであり日本水準の裏付けにはならない。株式(equity)、401K/企業年金相当、ESPP、学習支援等の福利厚生が明記されている。",
    desiredProfile: "求人ではEnterprise区分でのSaaS営業実績、複雑な商談のマネジメント経験、クオータ達成実績、テリトリー・アカウントプランニングの実務経験、CRMでのパイプライン管理経験が明記されている。「スタートアップ企業での試行錯誤の経験」が歓迎要件として挙げられている点も特徴的。",
    careerInsights: {
      fit: "複雑な商談を複数のステークホルダーと進めながら、テック企業特有のスピード感にも対応できる人に向く。逆に、伝統的な日系大企業向けの、ゆっくりとした合意形成型営業を得意とする人にはギャップがある可能性がある。",
      thingsToKnow: "求人票にメルカリ・コスモ石油・マネーフォワード・freeeが導入企業として明記されており、担当予定のアカウントリストにこれらと同様のテック/成長企業がどれだけ含まれるかを面接で確認したい。",
      marketValue: "Enterprise AEとしての経験の市場価値は、①報酬面では外資SaaSのEnterprise AE帯に位置づけられると考えられるが、日本固有の具体的水準は非公開。②評価される実績は、日本発グローバル企業・成長企業への大型商談獲得実績で、これはマーケティングテクノロジー領域全般で説明しやすい。③キャリアの選択肢は、他社(Salesforce、Adobe等)のEnterprise/Strategic AE、または社内でのSales Directorへの昇格。④Braze全体で大口顧客(ARR50万ドル以上)へのシフトが進んでいるため、Enterprise AEとしての実績はますます重要になる位置づけにある。",
      ...brazeAEEnterpriseCareerFlow,
    },
  },
  {
    id: "cs-corporate-ae",
    companySlug: "crowdstrike",
    title: "Corporate Account Executive(新規開拓担当営業)",
    segment: "Corporate",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "CrowdStrike Careers(Workday)", url: "https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Japan---Tokyo/Corporate-Account-Executive---_R29332" },
    descriptionSummary: "ミッドマーケット(中堅)region内の新規アカウント獲得を担う、いわゆる「ハンター」型のポジション。Value Sellingプロセスをプロスペクティングからクロージングまで一貫して実行し、Sales Engineer・マーケティング・チャネルパートナーと連携してアカウント戦略を立案する。",
    genbaTake: "CrowdStrikeの日本向け営業求人は数か月にわたり確認できていなかったが、2026年8月に本ポジションが新規公開された。求人票が新規ロゴ獲得(ハンター気質)を強く求めている点から、既存の大企業アカウント深耕よりも、ミッドマーケット層でのシェア拡大を狙った採用だと考えられる。",
    compensationReality: "本ポジション固有の給与データは非公開。OpenMoneyの自己申告データではCrowdStrike Japan全体の営業平均年収2,035万円(全社平均1,827万円)という水準があるが、これはEnterprise等を含む全体平均でありCorporate/ミッドマーケット職の水準の裏付けにはならない。",
    desiredProfile: "求人ではコールドコールや商談・交渉スキル、複雑なソリューションをC級幹部まで含む組織全体に売り込んだ実績、個人でクオータを担うロールでの実績、AI技術を意思決定・業務効率化に活用した経験が明記されている。",
    careerInsights: {
      fit: "新規開拓(ハンティング)を主戦場にしたい人、自分でテリトリーを切り拓く裁量を求める人に向く。逆に、既存の大口顧客との関係深耕を中心にしたい人には物足りない可能性がある。",
      thingsToKnow: "CrowdStrike Japanの営業求人は長期間途絶えていたため、採用背景(欠員補充か増員か)を面接で確認したい。RepVueの集計ではSDRのクオータ達成率が約1%と職種によって大きな差があり、募集セグメント特有の達成難易度も併せて確認したい。",
      marketValue: "Corporate AEとしての経験の市場価値は、①報酬面では外資セキュリティSaaSの中でも高水準グループに位置づけられる可能性がある。②評価される実績は新規ロゴ獲得数・パイプライン創出力で、これはセキュリティ領域全般の営業職で再現性を説明しやすい。③キャリアの選択肢は社内でのEnterprise/Sr. Corporate AEへのステップアップ、または他のセキュリティSaaS企業のAEへの横移動。",
      ...crowdstrikeCorporateAECareerFlow,
    },
  },
  {
    id: "hs-ae-smb",
    companySlug: "hubspot",
    title: "Account Executive, Small Business(直販営業 〜100名規模企業担当)",
    segment: "SMB",
    location: "東京(日本国内フルリモート可)",
    workStyle: "公式求人で確認(リモート可)",
    language: "日本語(ビジネスレベル)",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "HubSpot Japan Careers", url: "https://www.hubspot.com/careers/jobs/5990435" },
    descriptionSummary: "従業員100名以下規模の企業を対象に、新規商談の創出からクロージングまでを一貫して担当する直販営業。インバウンドリードのフォローアップ、既存顧客へのアップセル・クロスセル、HubSpotのインバウンド方法論のエバンジェリストとしての役割、マーケティング・セールスエンジニアリング部門との連携が求められる。月次のMRR(月次経常収益)目標達成が期待される。",
    genbaTake: "「~100名規模」という比較的小さい企業を相手にしながらも、新規開拓とアップセルの両方を担う設計になっている点は、幅広い商談経験を積める反面、商談数をこなす負荷が高いことを示唆する。2年以上の経験で応募可能なため、外資AEへの初めての挑戦としても選択肢に入りやすい。",
    compensationReality: "日本オフィス固有の給与データは非公開。米国のAccount Executive職ではベース75,000〜100,000ドル、OTE150,000〜210,000ドルという水準が報告されている(RepVue集計、米国データのため参考値)。OpenMoney自己申告データでは全社平均年収1,217万円、レンジ600万〜2,600万円。",
    desiredProfile: "求人では継続的に営業目標を上回ってきた実績、SaaS・Web/IT製品営業の2年以上の経験、複数のステークホルダー(経営者・マーケティング責任者等)を含む複雑な商談のマネジメント経験、高いクロージング力、ビジネスレベルの日本語が明記されている。",
    careerInsights: {
      fit: "幅広い規模・業種の中小企業を相手に、スピーディーに商談をこなしたい人に向く。逆に、じっくり時間をかけた大型商談を志向する人には物足りない可能性がある。",
      thingsToKnow: "HubSpotは『カルチャーに100%マッチする人材以外は採用しない』という評判があり、スキル面だけでなくHEART(Humble・Empathetic・Adaptable・Remarkable・Transparent)というカルチャー適合が選考で重視される傾向がある。",
      marketValue: "SMB AEとしての経験の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯からのスタートになりやすいが、日本固有の水準は非公開。②評価される実績は、幅広い業種・規模への新規開拓数とインバウンド対応力で、次の転職でも『商談量をこなす力』の証明になりやすい。③キャリアの選択肢は、社内でのMid Market AEへのステップアップ、または他のSaaS企業のSMB/Commercial AEへの横移動。④HubSpotというブランド・インバウンド方法論の経験は、マーケティングテクノロジー領域全般で評価されやすい。",
      ...hubspotSMBCareerFlow,
    },
  },
  {
    id: "hs-ae-midmarket",
    companySlug: "hubspot",
    title: "Senior Account Executive, Mid Market(直販営業 101名〜500名規模企業担当)",
    segment: "Mid-Market",
    location: "東京(日本国内フルリモート可)",
    workStyle: "公式求人で確認(リモート可)",
    language: "日本語(ビジネスレベル)",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "HubSpot Japan Careers", url: "https://www.hubspot.com/careers/jobs/5990448" },
    descriptionSummary: "従業員101〜500名規模の企業を対象に、新規商談の創出からクロージングまでを一貫して担当する直販営業。SMB職と同様にインバウンドフォロー・アップセル・クロスセル・部門間連携が求められるが、要件は5年以上の経験と、より高い水準に設定されている。「常に月次目標売上額(MRR)以上の達成」が明記されている。",
    genbaTake: "SMBと要件年数(2年→5年)が明確に違う点から、HubSpotは規模別に難易度を段階設計していることがうかがえる。「常に目標以上」という表現は、単なる達成ではなく超過達成が期待値になっていることを示唆しており、選考でも過去の達成率の具体的な数字を求められる可能性が高い。",
    compensationReality: "日本オフィス固有の給与データは非公開。米国のAccount Executive職ではOTE150,000〜210,000ドルという水準が報告されている(米国データのため参考値)。Senior職のため、SMB職より高いOTE水準が期待されるが、具体的な数値は非公開。",
    desiredProfile: "求人では継続的に営業目標を上回ってきた実績、SaaS・Web/IT製品営業の5年以上の経験、複数のステークホルダーを含む複雑な商談のマネジメント経験、強いクロージング力、ビジネスレベルの日本語が明記されている。",
    careerInsights: {
      fit: "中堅企業向けの、より複雑なステークホルダー構造の商談を経験したい人に向く。逆に、SMB同様の商談スピード感を期待すると、意思決定プロセスの長さにギャップを感じる可能性がある。",
      thingsToKnow: "「常に目標以上の達成」という表現の具体的な評価基準(何%からが『上回った』とみなされるか)は求人票だけでは分からない。前任者の達成率を面接で確認したい。",
      marketValue: "Mid Market AEとしての経験の市場価値は、①報酬面では外資SaaSのMid-Market AE帯(目安900万〜1,300万円、転職エージェント記事の集計値)への位置づけとなりやすい。②評価される実績は、中堅企業への複雑な商談のクロージング実績で、次の転職でも再現性を説明しやすい。③キャリアの選択肢は、社内でのCorporate AEへのステップアップ、または他のSaaS企業のMid-Market/Enterprise AEへの転職。④RepVueには『HubSpotは50%のクオータ達成率』という数字に対し、現職社員から『実態と異なる』という異議も投稿されており、公開数値と現場の体感には差がある可能性がある。",
      ...hubspotMidMarketCareerFlow,
    },
  },
  {
    id: "hs-ae-corporate",
    companySlug: "hubspot",
    title: "Lead Account Executive, Corporate(直販営業 500名〜規模企業担当)",
    segment: "Corporate",
    location: "東京(日本国内フルリモート可)",
    workStyle: "公式求人で確認(リモート可)",
    language: "日本語(ビジネスレベル)",
    firstSeen: "2026-08-06",
    lastChecked: "2026-08-07",
    source: { label: "HubSpot Japan Careers", url: "https://www.hubspot.com/careers/jobs/6225701" },
    descriptionSummary: "従業員500名以上規模の企業を対象に、新規商談の創出からクロージングまでを一貫して担当する直販営業。SMB・Mid Market職と同じ職務範囲だが、要件は7年以上の経験に引き上げられている。フィールドセールスではなく、電話・Webを中心とした「インサイドセールス型」の商談スタイルが特徴。",
    genbaTake: "500名以上という規模を、訪問型ではなく電話・Web中心の体制でカバーしている点は、HubSpotの営業モデル全体がインバウンド起点・非対面中心で設計されていることを示している。Salesforceのようなフィールドセールス中心のEnterprise AEとは、商談の進め方自体が異なる可能性が高い。",
    compensationReality: "日本オフィス固有の給与データは非公開。Lead(シニア)職のため、SMB・Mid Market職よりさらに高いOTE水準が期待されるが、具体的な数値は非公開。OpenMoney全社平均年収は1,217万円だが、これは職種・グレード混在の数値。",
    desiredProfile: "求人では継続的に営業目標を上回ってきた実績、SaaS・Web/IT製品営業の7年以上の経験、複数のステークホルダーを含む複雑な商談のマネジメント経験、強いクロージング力、日本語でのビジネス経験が明記されている。",
    careerInsights: {
      fit: "大企業向けの複雑な商談を、電話・Web中心の非対面スタイルで進めることに抵抗がない人に向く。逆に、対面での関係構築を重視する伝統的なエンタープライズ営業スタイルを好む人にはギャップがある可能性がある。",
      thingsToKnow: "『Corporate』という呼称は他社の『Enterprise』に相当する最上位セグメントだが、フィールドセールスではなくインサイドセールス型の体制である点は、他社のEnterprise AEとは働き方が大きく異なる可能性がある。面接で商談の進め方(訪問頻度等)を確認したい。",
      marketValue: "Corporate AEとしての経験の市場価値は、①報酬面では外資SaaSのEnterprise・Strategic AE帯(目安1,500万〜3,000万円)に近い位置づけになると考えられるが、日本固有の具体的水準は非公開。②評価される実績は、大企業への複雑な商談を非対面中心で完結させた実績で、効率的な営業手法の証明として評価されやすい。③キャリアの選択肢は、他社のEnterprise/Strategic AE、またはセールスマネジメント職への転職。④フィールドセールス経験を重視する企業への転職では、インサイドセールス型の経験をどう位置づけるかの説明が必要になる場合がある。",
      ...hubspotCorporateCareerFlow,
    },
  },
  {
    id: "okta-ae-sme",
    companySlug: "okta",
    title: "Account Executive, Okta(Associate)",
    segment: "SME",
    location: "東京",
    workStyle: "公式求人で確認(ハイブリッド)",
    language: "日本語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Okta Japan Careers(Greenhouse)", url: "https://job-boards.greenhouse.io/oktajp/jobs/8102278" },
    descriptionSummary: "中小規模の新規顧客獲得と既存顧客への拡張を担当するアソシエイトレベルのポジション。テリトリープランの策定、パイプライン開拓、顧客のC級幹部へのプレゼンテーション、契約交渉までセールスサイクル全体を担う。",
    genbaTake: "「アソシエイト」という肩書きと、必須要件がテクノロジー営業2年以上・日本語コミュニケーション力中心である点から、外資SaaS未経験からのAE挑戦の入り口になり得るポジションだと考えられる。裏を返せば、SME(中小企業)という商談規模の小ささゆえに、初期の実績作りには数をこなす負荷がかかる可能性がある。",
    compensationReality: "OpenMoneyの自己申告データではEnterprise Account Executiveでベース1,200万円+コミッションという情報があるが、これはEnterprise職のものでSMEポジションの水準ではない。SME/Associateレベルの給与データは確認できておらず、求人にも給与レンジの記載はない。",
    desiredProfile: "求人ではテクノロジー企業での営業経験2年以上またはインサイドセールス経験、日本市場での営業経験、中小企業向けセールスの実績、優れた日本語コミュニケーション能力が明記されている。SaaS業界経験・英語スキル・チャネルパートナーとの協働経験は歓迎要件。",
    careerInsights: {
      fit: "外資SaaS営業の経験を積み始めたい人、中小企業向けの商談数をこなしながら型を作りたい人に向く。逆に、いきなり大型商談を担当したい人には物足りない可能性がある。",
      thingsToKnow: "OpenWorkの口コミでは「知名度の低さ」「パートナー協業の課題」を指摘する声もあり、大手ブランドほど問い合わせが来やすいわけではない。自らテリトリーを開拓する自走力が問われる可能性が高い。",
      marketValue: "SME AEとしての実績の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯(目安700万〜1,300万円、転職エージェント記事の集計)への足がかりになる。②評価される実績は新規開拓の商談化率・受注率。③キャリアの選択肢は社内でのAuth0 AEやEnterprise AEへのステップアップ、他社のSMB/Commercial AEへの横移動。④ID/セキュリティ領域という専門性は、同業のセキュリティSaaS全般で評価されやすい。",
      ...oktaSMECareerFlow,
    },
  },
  {
    id: "okta-ae-auth0",
    companySlug: "okta",
    title: "Account Executive, Auth0",
    segment: "Developer",
    location: "東京",
    workStyle: "公式求人で確認(ハイブリッド)",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Okta Japan Careers(Greenhouse)", url: "https://job-boards.greenhouse.io/oktajp/jobs/7374462" },
    descriptionSummary: "開発者向けID管理製品Auth0の新規顧客開拓を担う役割。新規ロゴ獲得に向けた長期アプローチの立案、アカウント戦略の策定・実行、意思決定者ネットワークの構築、契約交渉、Okta エコシステム(xDR・パートナー・プリセールス等)との連携が求められる。",
    genbaTake: "Auth0はOktaが2021年に買収した開発者向けID製品で、買い手がエンジニアリング・プロダクト・セキュリティ部門という点が、従業員向けIDを売るOkta本体のAEとは異なる。「開発者コミュニティに響く技術的発見スキル」が要件化されている通り、技術理解を伴う営業力がより強く問われるポジションだと考えられる。",
    compensationReality: "Auth0 AE特有の給与データは公開されていない。求人にも給与レンジの記載はない。Okta本体のEnterprise AEでベース1,200万円という自己申告データがあるが、Auth0特有の水準の裏付けにはならない。",
    desiredProfile: "求人では複雑なエンタープライズSaaS製品における5年以上の営業成功経験、技術的発見スキルと製品開発ライフサイクル・DevOpsへの理解、エンジニアリングおよびデジタルトランスフォーメーション経験、MEDDPICC等のセールスフレームワーク習熟が明記されている。",
    careerInsights: {
      fit: "技術理解を武器に、開発者・エンジニアリング部門を相手にした商談を組み立てたい人に向く。逆に、非技術者向けの分かりやすい説明を得意とするタイプには、技術的発見のハードルが高く感じられる可能性がある。",
      thingsToKnow: "Auth0はOkta買収後もブランド・製品として独立運用されており、Okta本体の顧客基盤とAuth0の顧客基盤が完全に重複しているわけではないと考えられる。担当予定のテリトリーがOkta既存顧客への追加提案中心か、Auth0単体の新規開拓中心かを面接で確認したい。",
      marketValue: "Auth0 AEとしての経験の市場価値は、①報酬面では技術理解を要する分、一般的なSaaS AEより高いOTEが期待できる可能性があるが、日本固有の裏付けはない。②評価される実績は、開発者コミュニティ・エンジニアリング部門への提案実績で、これは技術系SaaS全般(Datadog、MongoDB等)への転職でも再現性を説明しやすい。③キャリアの選択肢は、社内でのEnterprise Auth0 AEへのステップアップ、または他の開発者向けSaaS企業のAEへの横移動。",
      ...oktaAuth0CareerFlow,
    },
  },
  {
    id: "okta-enterprise-ae-auth0",
    companySlug: "okta",
    title: "Enterprise Account Executive, Auth0",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認(ハイブリッド)",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Okta Japan Careers(Greenhouse)", url: "https://job-boards.greenhouse.io/oktajp/jobs/7597551" },
    descriptionSummary: "Auth0のエンタープライズ顧客層を担当する上位ポジション。新規ロゴ顧客のパイプライン生成に向けた長期アプローチの立案、収益目標の一貫した達成、パートナーを活用した機会開拓、Oktaエコシステム内でのパートナーシップ構築が求められる。",
    genbaTake: "5年以上要件のAuth0 AEに対し、こちらは8年以上とさらに経験年数のハードルが上がっており、より大規模・複雑なエンタープライズ商談を任される即戦力採用と考えられる。「予測と機会衛生管理において一貫して高いレベルのエネルギーを維持する」という表現から、フォーキャストの精度がシビアに問われる文化がうかがえる。",
    compensationReality: "Enterprise Auth0 AE特有の給与データは公開されていない。求人にも給与レンジの記載はなく、経験年数要件の高さから標準のAuth0 AEより高いOTE水準が期待されるが、確認事実ではない。",
    desiredProfile: "求人では8年以上のエンタープライズSaaS製品における収益拡大実績、開発者コミュニティに響く深い技術的発見スキル、技術販売を企業のビジネス・変革成果に結びつける実績、MEDDPICC等のセールスフレームワーク活用経験が明記されている。",
    careerInsights: {
      fit: "既に大型の技術商材を売った実績があり、開発者向け製品特有の技術的な深さを求められる商談を任されたい人に向く。逆に、初めてのエンタープライズ営業挑戦や技術理解に不安がある人には難易度が高い。",
      thingsToKnow: "「予測と機会衛生管理」への言及は、フォーキャストの正確性が評価軸として重視されていることを示唆する。パイプラインの精度管理をどう評価されるか、前任者の状況とあわせて面接で確認したい。",
      marketValue: "Enterprise Auth0 AEとしての経験の市場価値は、①報酬面では技術理解を要するEnterprise AE帯として高水準が期待されるが、日本固有の裏付けはない。②評価される実績は大規模エンタープライズでの技術商材の契約獲得実績。③キャリアの選択肢は、他の開発者向け・技術系SaaS企業(Datadog、MongoDB、Snowflake等)のEnterprise/Strategic AE、またはOkta社内でのマネジメント職。",
      ...oktaEnterpriseAuth0CareerFlow,
    },
  },
  {
    id: "zendesk-smb-ae",
    companySlug: "zendesk",
    title: "SMB Account Executive",
    segment: "SMB",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Zendesk Careers(Workday)", url: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk/job/SMB-Account-Executive_R32909" },
    descriptionSummary: "中小企業向けの新規顧客獲得を担当する役割。アウトバウンド・インバウンド双方のパイプラインを管理し、既存の大規模顧客基盤の中でのアカウント拡張も担う。",
    genbaTake: "SMBという商談規模でも、新規開拓だけでなく既存顧客基盤の中からの拡張(アップセル)も同時に求められる設計になっている。単純な新規開拓量産型ではなく、既存アカウントの中から機会を見つける観察力も評価対象になると考えられる。",
    compensationReality: "OpenMoneyの自己申告データでは全社平均年収1,332万円、営業職平均1,420万円(レンジ810万〜2,500万円)。基本給+インセンティブ+RSU+携帯手当という設計。SMB職特有の水準は非公開。",
    desiredProfile: "求人ではB2B営業またはソリューションエンジニアリング経験2年以上、SaaS業界での営業目標達成実績が明記されている。BA/BS学位または同等の経験が要件。",
    careerInsights: {
      fit: "商談数をこなしながら、新規開拓と既存アカウント拡張の両方をバランスよく担いたい人に向く。",
      thingsToKnow: "OpenWorkの口コミには「外資ITなので実績(予算達成率)が全て」という声があり、評価制度がシンプルに数字ベースである可能性が高い。",
      marketValue: "SMB AEとしての実績の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯(目安700万〜1,300万円、転職エージェント記事の集計)からのスタートになりやすい。②評価される実績は新規開拓とアップセルの両立実績。③キャリアの選択肢は社内でのCommercial/Enterprise AEへのステップアップ、他社のSMB/Commercial AEへの横移動。④カスタマーサポート/CX領域の経験はSalesforce・HubSpotなど隣接領域でも評価されやすい。",
      ...zendeskSMBCareerFlow,
    },
  },
  {
    id: "zendesk-sr-commercial-ae",
    companySlug: "zendesk",
    title: "Senior Commercial Account Executive",
    segment: "Commercial",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Zendesk Careers(Workday)", url: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk/job/Senior-Commercial-Account-Executive_R33688-4" },
    descriptionSummary: "新規案件の開拓(ハンティング)と既存アカウントの維持・拡大を両方担当するシニアポジション。幅広い関係構築、拡張機会の管理、リソースチームを率いた提案、Zendeskのプラットフォームビジョンの訴求が求められる。",
    genbaTake: "「ハンティング(新規開拓)」と「既存アカウントの維持」を同一ポジションで両立させる設計は、Commercial区分がSMBより裁量の大きい反面、求められる役割の幅も広いことを示している。「リソースチームを率いる」という表現からは、単独商談だけでなく社内連携力も問われると考えられる。",
    compensationReality: "OpenMoneyの自己申告データでは営業職平均年収1,420万円。Senior職のため、SMB職より高いOTE水準が期待されるが、日本固有の具体的水準は非公開。",
    desiredProfile: "求人ではB2B SaaS営業でのハンティング実績、既存アカウントの拡張実績、プラットフォームビジョンを訴求するプレゼンテーション力が重視されると考えられる。",
    careerInsights: {
      fit: "新規開拓と既存深耕の両方に強みがあり、社内の関連リソースを巻き込みながら大きめの商談を進めたい人に向く。",
      thingsToKnow: "Senior職のため、前任者の在籍期間や、新規:既存の商談比率がどの程度かを面接で確認したい。",
      marketValue: "Senior Commercial AEとしての実績の市場価値は、①報酬面では外資SaaSのCommercial/Mid-Market AE帯(目安900万〜1,300万円)への位置づけとなりやすい。②評価される実績は新規開拓と既存拡張の両立実績で、次の転職でも汎用性の高い実績として説明しやすい。③キャリアの選択肢は社内でのEnterprise AEへのステップアップ、他社のMid-Market/Enterprise AEへの転職。",
      ...zendeskCommercialCareerFlow,
    },
  },
  {
    id: "confluent-ae-digital-native",
    companySlug: "confluent",
    title: "Account Executive (Digital Native)",
    segment: "Digital Native",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Confluent Careers", url: "https://careers.confluent.io/jobs/15305884-account-executive-digital-native" },
    descriptionSummary: "デジタルネイティブ企業(テック企業・スタートアップ等)を対象に、新規パイプラインの開拓から契約締結までを担当する役割。四半期の売上目標達成に向けて、見込み顧客のプロスペクティング・選定・開拓・クロージングまでの営業プロセス全体を管理し、ビジネス開発・カスタマーサクセス・サポートチームと連携する。",
    genbaTake: "「デジタルネイティブ」という顧客セグメントの切り出し方は、伝統的な大企業とは異なる意思決定スピード・技術理解度を持つ顧客を相手にすることを示している。MEDDPICCやChallenger Saleといった型のある営業手法の習熟が要件化されている点は、体系化された営業プロセスを重視する文化を示唆する。",
    compensationReality: "Confluent Japanの給与データはOpenWorkに口コミが未投稿(2026年8月時点で該当件数0件)で、公開情報がほぼない状態。求人にも給与レンジの記載はなく、オファー交渉は個別の情報収集が前提になる。",
    desiredProfile: "求人ではビッグデータ・クラウド・SaaS・OSS・エンタープライズIT領域での営業経験、MEDDPICCやChallenger Sale等のセールス手法のトレーニング経験、継続的なクオータ達成実績、高いコミュニケーション・プレゼンテーション力が明記されている。",
    careerInsights: {
      fit: "技術理解が求められる商材を、型のある営業手法(MEDDPICC等)で進めたい人に向く。逆に、フィーリングやリレーション中心の営業スタイルを好む人には、プロセス重視の文化がやや窮屈に感じられる可能性がある。",
      thingsToKnow: "2026年3月にIBMがConfluentを約110億ドルで買収し完全子会社化した。買収直後のタイミングであり、営業組織の目標設定・評価制度・IBMとの連携方針がどう変わるかは、面接で直接確認したい最重要ポイントの一つ。",
      marketValue: "Digital Native AEとしての実績の市場価値は、①報酬面では外資SaaSのEnterprise AE帯(目安1,200万〜2,000万円程度)に位置づけられると考えられるが日本固有の裏付けはない。②評価される実績はテック企業向けの技術商材の契約獲得実績。③キャリアの選択肢はデータ/クラウド基盤系の他社(Snowflake、MongoDB等)のEnterprise AE、あるいはIBM社内での他プロダクトへの異動。④「買収後もConfluentの看板で売り続けられるか」という組織変化への適応力も、次の転職で語れる経験になり得る。",
      ...confluentDigitalNativeCareerFlow,
    },
  },
  {
    id: "confluent-ae-msp-isv",
    companySlug: "confluent",
    title: "Japan MSP/ISV Account Executive",
    segment: "MSP/ISV",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Confluent Careers", url: "https://careers.confluent.io/jobs/15311824-japan-msp-slash-isv-account-executive" },
    descriptionSummary: "マネージドサービスプロバイダー(MSP)・独立系ソフトウェアベンダー(ISV)向けの新規パイプライン開拓と契約締結を担当する役割。パートナー経由の販売戦略を構築し、四半期の売上目標達成に向けて営業プロセス全体を管理する。",
    genbaTake: "MSP/ISVという、直接のエンドユーザーではなくパートナー企業を主要顧客とするセグメントの存在は、Confluentの日本展開がパートナーエコシステム経由の拡大を重視していることを示している。パートナーとの関係構築力が、直接商談力と同じくらい重要になると考えられる。",
    compensationReality: "Confluent Japan固有の給与データは確認できていない。求人にも給与レンジの記載はない。",
    desiredProfile: "求人ではビッグデータ・クラウド・SaaS・OSS領域での営業経験、パートナー・チャネル経由の販売経験、継続的なクオータ達成実績が重視されると考えられる。",
    careerInsights: {
      fit: "パートナー企業とWin-Winの関係を構築しながら、間接販売チャネルを育てたい人に向く。逆に、エンドユーザーとの直接商談だけに集中したい人には向かない可能性がある。",
      thingsToKnow: "IBMの完全子会社化後、IBMの既存パートナーエコシステムとConfluentのMSP/ISVパートナー網がどう統合されるかは、担当領域の広がり方に直結する重要な確認事項。",
      marketValue: "MSP/ISV AEとしての実績の市場価値は、①報酬面ではEnterprise AE帯に準じる水準が期待されるが日本固有の裏付けはない。②評価される実績はパートナー経由のパイプライン構築・売上創出実績で、チャネル営業経験として汎用性が高い。③キャリアの選択肢は他社のパートナー営業・アライアンス職、あるいはIBM社内でのエコシステム関連職。",
      ...confluentMSPISVCareerFlow,
    },
  },
  {
    id: "pagerduty-enterprise-ae",
    companySlug: "pagerduty",
    title: "Enterprise Account Executive",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "PagerDuty(Japan Cloud Careers)", url: "https://japancloud.jp/career/jobs/7278/" },
    descriptionSummary: "大手企業向けのアカウント担当営業として、クラウド型インシデント管理ソリューションの提案・導入をリードする役割。新規顧客開拓から既存顧客の関係強化まで幅広い営業活動を担当し、CxOレベルの経営層と信頼関係を構築して最適なソリューション提案を行う。",
    genbaTake: "「CxOレベルとの信頼関係構築」が要件の中心に置かれている点は、単なる機能訴求ではなく、システム障害という経営リスクをどう語れるかが問われるポジションであることを示している。必須要件が3年以上と他社のEnterprise AEより緩やかな点は、これから経験を積みたい層にも門戸が開かれていることを示唆する。",
    compensationReality: "PagerDuty Japan固有の給与データは確認できていない。OpenMoneyにはコンサルタント職(L2)の年収例は投稿されているが、営業職の具体的なデータは確認できなかった。求人にも給与レンジの記載はない。",
    desiredProfile: "求人では3年以上のエンタープライズ向け営業経験と実績、新規顧客開拓能力、CxOレベルとのコミュニケーション・関係構築能力が必須要件として明記されている。ビジネス英語、インフラ・運用管理系ソリューションビジネスの経験、SaaSビジネスの経験は歓迎要件。",
    careerInsights: {
      fit: "システム障害という経営リスクを切り口に、CxOと信頼関係を築きながら提案を進めたい人に向く。逆に、技術的な機能説明が中心の商談を好む人には、経営層への価値訴求という抽象度の高い提案力が求められる点でギャップがあるかもしれない。",
      thingsToKnow: "PagerDutyはJapan Cloudとの合弁会社(2022年5月設立)として運営されている。Braze同様のパートナーシップモデルであり、評価・昇進の仕組みが本社と完全に同一かどうかは非公開。直近の業績はARRがほぼ横ばい(前年比+1%)、NRRが97%(前年104%から低下)と、既存顧客からの純増収が縮小している点は、担当テリトリーの状況を面接で確認する材料にしたい。",
      marketValue: "Enterprise AEとしての実績の市場価値は、①報酬面では外資SaaSのEnterprise AE帯(目安1,200万〜1,800万円程度)に位置づけられると考えられるが日本固有の裏付けはない。②評価される実績はCxO層への提案・新規契約獲得実績。③キャリアの選択肢は同業(Datadog、ServiceNow等)のEnterprise AE、あるいはインシデント管理・SRE関連のSaaS企業への横移動。④NRRが100%を下回っている局面での新規開拓経験は、「厳しい環境でも数字を作った」実績として語れる可能性がある。",
      ...pagerdutyEnterpriseAECareerFlow,
    },
  },
  {
    id: "pagerduty-sr-sales-manager",
    companySlug: "pagerduty",
    title: "Sr. Sales Manager",
    segment: "Sales Leadership",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "PagerDuty(Japan Cloud Careers)", url: "https://japancloud.jp/career/jobs/8097/" },
    descriptionSummary: "日本セールスチームの指揮・育成、売上目標達成を担うマネジメント職。複雑な取引交渉・基本合意書の締結・顧客経営層との関係構築を主導し、Salesforce等のSFAを活用したデータドリブンなパイプライン管理・戦略立案を行う。",
    genbaTake: "「天才の集団ではなくプロフェッショナルの集団」という価値観の明記や、Grit(やり抜く力)の強調は、個人の才能に頼るのではなく、型と粘り強さを重視するマネジメント文化を示している。7年以上の営業経験に加えて3年以上のピープルマネジメント経験を求める設計は、即戦力のプレイングマネージャー採用であることを示唆する。",
    compensationReality: "PagerDuty Japan固有の給与データは確認できていない。求人にも給与レンジの記載はない。マネジメント職のため、配下のAEのクオータ達成に連動したインセンティブ設計になっている可能性が高いが、具体的な数値は非公開。",
    desiredProfile: "求人では7年以上のIT業界における大手企業向けハイタッチ・直販セールス経験、3年以上の営業マネージャー(ピープルマネジメント)経験、Salesforce等のSFA活用によるデータドリブンな管理能力が明記されている。スタートアップ・急成長企業でのマネジメント経験、グローバルチーム連携経験は歓迎要件。",
    careerInsights: {
      fit: "自分自身の商談経験を土台に、データドリブンにチームを率いたい人に向く。逆に、感覚的な営業マネジメントを好む人には、SFAを軸にしたプロセス重視の文化がギャップに感じられる可能性がある。",
      thingsToKnow: "Japan Cloudとの合弁会社という体制のため、本社とのレポートラインや評価制度の独立性を面接で確認したい。ARRがほぼ横ばい・NRRが100%を下回っている局面でのマネジメント採用であるため、期待されるミッションが「新規開拓の立て直し」なのか「既存基盤の防衛」なのかを具体的に確認しておきたい。",
      marketValue: "Sr. Sales Managerとしての実績の市場価値は、①報酬面では個人AEを上回るOTE水準が期待できるが日本固有の数値は非公開。②評価される実績はチームのクオータ達成率・採用育成実績。③キャリアの選択肢は他の外資SaaS企業のSales Director・VP Sales、あるいはPagerDuty社内でのAPAC統括ポジションへの展開。",
      ...pagerdutySrSalesManagerCareerFlow,
    },
  },
  {
    id: "amplitude-enterprise-ae",
    companySlug: "amplitude",
    title: "Enterprise Account Executive, Japan",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Amplitude Careers", url: "https://job-boards.greenhouse.io/amplitude/jobs/8487436002" },
    descriptionSummary: "日本の既存顧客基盤を土台に、急成長中のデジタルスタートアップ(従業員1,000名規模まで)を中心とした新規ロゴ獲得を担う役割。プロスペクティングとネットワーキングを通じて新規商談を創出し、複雑な営業サイクルをリードしながら主要ステークホルダーへ価値を訴求する。",
    genbaTake: "「急成長中のデジタルスタートアップ」を主戦場に据えている点は、Amplitudeの日本展開が伝統的な大企業ではなく、プロダクト主導型(PLG)の成長企業を優先ターゲットにしていることを示している。「新しいテリトリーを自分で作る経験」が明記されている通り、まだ耕されていない市場を開拓する裁量の大きさが特徴と考えられる。",
    compensationReality: "AMPLITUDE JAPANの給与データはOpenWork・OpenMoneyともに営業職の具体的な数値が確認できなかった。求人にも給与レンジの記載はない。",
    desiredProfile: "求人では日本語・英語両方でのコミュニケーション・プレゼンテーション力、データを使ってストーリーを語る力、新規テリトリー・新規事業の立ち上げ経験、詳細なアカウントプランニング経験、トップパフォーマーとしての実績が明記されている。",
    careerInsights: {
      fit: "スタートアップ環境のスピード感を楽しみながら、新規テリトリーを自分で切り拓きたい人に向く。逆に、既に確立された大口顧客との関係を深耕したいタイプには、開拓中心の役割はやや負荷が高く感じられる可能性がある。",
      thingsToKnow: "Amplitudeは2026年にStatsig(実験・フラグ管理ツール)を買収しており、製品ポートフォリオが拡大している。新しい買収製品を商談でどう扱うか(クロスセルの実態)を面接で確認したい。",
      marketValue: "Enterprise AEとしての実績の市場価値は、①報酬面では外資SaaSのEnterprise AE帯(目安1,200万〜2,000万円程度)に位置づけられると考えられるが日本固有の裏付けはない。②評価される実績は新規テリトリーでのロゴ獲得数・パイプライン創出実績。③キャリアの選択肢は他のプロダクト分析・データ系SaaS企業(Snowflake、MongoDB等)のEnterprise AE。④$100,000以上のARR顧客が前年比30%増という開示が示す通り、大口化が進む成長期の会社であり、初期メンバーとしての実績を語りやすい局面にある。",
      ...amplitudeEnterpriseAECareerFlow,
    },
  },
  {
    id: "amplitude-commercial-ae",
    companySlug: "amplitude",
    title: "Commercial Account Executive - Japan",
    segment: "Commercial",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-07",
    lastChecked: "2026-08-07",
    source: { label: "Amplitude Careers", url: "https://boards.greenhouse.io/amplitude/jobs/5151817002" },
    descriptionSummary: "中堅規模の企業を対象に、新規商談の創出からクロージングまでを担当する役割。Enterprise区分より小規模な顧客層を担当し、商談数をこなしながらAmplitudeの導入を広げていく。",
    genbaTake: "Enterprise AEとは別にCommercial AEという区分が存在することから、Amplitudeの日本展開は企業規模別にセグメントを分けた本格的な体制構築フェーズにあると考えられる。日本組織がまだ成長途上であることを踏まえると、セグメント間の異動・キャリアパスの柔軟性が比較的高い可能性がある。",
    compensationReality: "AMPLITUDE JAPANの給与データは確認できていない。求人にも給与レンジの記載はない。",
    desiredProfile: "求人では日本語・英語でのコミュニケーション力、SaaS営業経験、新規開拓の実績が重視されると考えられる。Enterprise AEと比べて求められる経験年数はやや低いと推測されるが、公開情報からの確認はできていない。",
    careerInsights: {
      fit: "商談数をこなしながら、プロダクト主導型SaaSの新規開拓に挑戦したい人に向く。",
      thingsToKnow: "Commercial区分の具体的な顧客規模の基準(従業員数・契約金額)は求人票だけでは分からない。面接で確認したい。",
      marketValue: "Commercial AEとしての実績の市場価値は、①報酬面では外資SaaSのSMB/Commercial AE帯(目安700万〜1,300万円)からのスタートになりやすい。②評価される実績は新規開拓の商談化率・受注率。③キャリアの選択肢は社内でのEnterprise AEへのステップアップ、他社のSMB/Commercial AEへの横移動。",
      ...amplitudeCommercialAECareerFlow,
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
