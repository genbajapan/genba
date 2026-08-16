import type { Company } from "@/lib/market-data";

const batchTwoCompanyPatches: Record<string, Partial<Company>> = {
  verkada: {
    category: "クラウド型物理セキュリティ・IoT",
    hq: "カリフォルニア州サンマテオ（米国）",
    japanPresence: "Verkada Japan株式会社・東京都渋谷区（2021年に国内partnerが提供開始、法人設立日は非公開）",
    description: "camera、access control、sensor、intercom等をcloud管理する物理セキュリティ基盤。日本で東京・大阪のAE、Channel、Field Marketing、Sales Operationsの7職種を公式募集。",
    lastChecked: "2026-08-17",
  },
  walkme: {
    category: "デジタル定着・業務変革",
    hq: "テルアビブ（イスラエル）",
    japanPresence: "WalkMe株式会社・東京都中央区日本橋（2019年2月設立）",
    description: "業務application上の案内、analytics、automation、AIでsoftwareの利用定着と業務完了を支援。日本でCS、Professional Services、Solution、Partner・Allianceの7職種を公式掲載。",
    lastChecked: "2026-08-17",
  },
  celonis: {
    category: "プロセスインテリジェンス・業務変革",
    hq: "ミュンヘン（ドイツ）／ニューヨーク（米国）",
    japanPresence: "Celonis株式会社・東京都千代田区丸の内（2019年設立）",
    description: "企業systemのevent dataからprocessの停滞・価値機会を可視化し、改善actionへ接続。東京の現行6求人のうち、営業・partner・delivery関連5職種を掲載（People & Culture職は対象外）。",
    lastChecked: "2026-08-17",
  },
  confluent: {
    category: "データストリーミング・クラウドデータ基盤",
    hq: "カリフォルニア州マウンテンビュー（米国）",
    japanPresence: "Confluent Japan合同会社・東京都新宿区（2021年4月に日本operations開始）",
    description: "Apache Kafkaを基盤に、リアルタイムdata streamの接続・処理・governanceを提供。2026年8月17日時点で公式Careerの日本求人を再現確認できず、旧求人は現行扱いしていない。",
    lastChecked: "2026-08-17",
  },
  dataiku: {
    category: "企業向けAI・データサイエンス基盤",
    hq: "ニューヨーク（米国）／パリ（フランス）",
    japanPresence: "Dataiku Japan株式会社・東京（日本市場で業界別GTMを展開）",
    description: "data準備、機械学習、生成AI・Agent、governanceを一つのplatformで提供。日本で金融、Retail・Telecom向けEnterprise AEとField Marketing Internを公式掲載。",
    lastChecked: "2026-08-17",
  },
  glean: {
    category: "企業向けAI・社内検索",
    hq: "カリフォルニア州（米国）",
    japanPresence: "日本市場チーム・リモート（2023年に国内販売開始、2026年に日本カントリーマネージャー就任）",
    description: "企業内の情報を権限付きで横断する検索、AIアシスタント、業務エージェントを提供。日本ではStrategic AE、Enterprise AE、SDRを公式募集。",
    lastChecked: "2026-08-17",
  },
  hubspot: {
    category: "顧客管理・マーケティング・営業・AI",
    hq: "マサチューセッツ州ケンブリッジ（米国）",
    japanPresence: "HubSpot Japan株式会社・東京都千代田区丸の内（2016年2月設立、同年7月営業開始）",
    description: "CRMを中心にマーケティング、営業、サービス、コンテンツ、データ、コマースとAIを統合。日本ではAE3職に加え、BDR、営業マネージャー、Solutions Engineer、Field Marketerを公式募集。",
    lastChecked: "2026-08-17",
  },
  qualtrics: {
    category: "顧客体験・従業員体験・市場調査",
    hq: "ユタ州プロボ／ワシントン州シアトル（米国）",
    japanPresence: "クアルトリクス合同会社・東京都千代田区丸の内（2016年法人設立、2018年事業開始）",
    description: "顧客・従業員・製品・ブランドの体験データを収集・分析し、改善行動へつなぐXM基盤。2026年8月17日時点で日本の現行公式求人は確認できない。",
    lastChecked: "2026-08-17",
  },
  speak: {
    category: "AI英会話・法人向け人材育成",
    hq: "カリフォルニア州サンフランシスコ（米国）",
    japanPresence: "スピークジャパン合同会社・東京都渋谷区（2022年日本soft launch、2024年8月法人設立）",
    description: "音声AIによる英語発話練習と法人管理を提供。東京でAccount Executive、Customer Success Manager、B2B Marketing Managerを公式募集。",
    lastChecked: "2026-08-17",
  },
  stripe: {
    category: "決済・金融インフラ・収益管理",
    hq: "サンフランシスコ（米国）／ダブリン（アイルランド）",
    japanPresence: "ストライプジャパン株式会社・東京（2016年提供開始、2020年開発拠点開設）",
    description: "決済、請求、プラットフォームの資金移動、不正対策、税・データ基盤を提供。東京でCommercial Hunter・Grower、Enterprise Hunterの3つのAE職を公式募集。",
    lastChecked: "2026-08-17",
  },
};

export function standardizeRolloutCompany(company: Company): Company {
  const patch = batchTwoCompanyPatches[company.slug];
  return patch ? { ...company, ...patch } : company;
}
