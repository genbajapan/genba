import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-16";

export const companies20260916Daily: Company[] = [
  {
    slug: "mapbox",
    name: "Mapbox",
    category: "地図・ナビゲーション・位置情報基盤",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "マップボックス・ジャパン合同会社・東京。2023年の会社公式記事で日本チーム50人超",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "地図、検索、ナビゲーション、位置情報データのAPIと開発キットを提供する。日本で営業・事業開発・技術営業3職種を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/mapbox",
    tags: ["Maps", "Navigation", "Location Intelligence", "Automotive", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "sprout-ai",
    name: "Sprout.ai",
    category: "保険金請求・引受のAI自動化",
    broadCategory: "コマース・業界特化",
    hq: "ロンドン（英国）",
    japanPresence: "日本拠点とCountry Managerを会社公式で確認。日本組織は創業期と求人に明記",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "保険金請求書類の読取り、判断支援、不正検知、業務自動化を提供する。日本で顧客導入と利用定着を担うTechnical Project Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/sprout-ai",
    tags: ["Insurance AI", "Claims Automation", "Customer Delivery", "Technical Project Management", "Remote", "Japan"],
  },
  {
    slug: "horizon3",
    name: "Horizon3",
    category: "自律型侵入テスト・攻撃経路検証",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本担当Enterprise Account Executiveを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "本番環境で安全に自律型侵入テストを実行し、悪用可能な攻撃経路と修復確認を示す。日本担当の企業営業を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/horizon3ai",
    entryStatus: "pre-entry-signal",
    tags: ["日本進出の兆しあり", "Autonomous Pentesting", "Exposure Management", "Enterprise Sales", "Channel", "Japan"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "公式求人に日本向けの給与、変動給、株式、目標、達成率の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を事業成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業の同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260916Daily: Job[] = [
  makeJob({
    id: "mapbox-solutions-architect-automotive-japan-8c73129e", companySlug: "mapbox", title: "Solutions Architect, Automotive", segment: "Automotive Solutions Architecture / Pre-Sales", location: "日本", workStyle: "Remote。顧客会議、技術ワークショップ、業界行事で最大25%の出張あり", language: "日本語・英語とも業務水準",
    source: { label: "Mapbox Careers (Ashby)", url: "https://jobs.ashbyhq.com/mapbox/8c73129e-8290-4924-813d-4577793cf4a8" },
    descriptionSummary: "自動車会社の技術・事業要件を整理し、地図、検索、ナビゲーションの設計、試作、技術検証、導入、利用拡大を支援する。",
    genbaTake: "技術説明にとどまらず、完成車メーカーの成功基準を設計へ落とし、技術検証から本番利用の拡大までを営業と共同で持つ役割。",
    desiredProfile: "公式求人は顧客対応を伴う技術設計・技術営業・コンサルティング5年以上、Web・モバイル・API、自動車、日英での提案を重視する。",
  }),
  makeJob({
    id: "mapbox-senior-business-development-manager-automotive-japan-521994b0", companySlug: "mapbox", title: "Senior Business Development Manager, Automotive", segment: "Automotive Business Development / Strategic Accounts", location: "日本", workStyle: "Mapbox Japan勤務。Remote・Hybrid・出社日数は公式求人で未確認", language: "日本語・英語とも業務水準",
    source: { label: "Mapbox Careers (Ashby)", url: "https://jobs.ashbyhq.com/mapbox/521994b0-cd96-4c24-b622-6d965e515cde" },
    descriptionSummary: "トヨタ、日産、Honda等の完成車メーカーと部品会社を担当し、車載ナビ、運転支援、自動運転、AR、EV経路案内の新規・拡大商談を進める。",
    genbaTake: "7〜8桁米ドル規模も想定する長期商談で、製品計画へ顧客要求を反映しながら契約と車両導入を進める自動車事業開発。",
    desiredProfile: "公式求人は技術製品の複雑な商談・契約10年以上、自動車業界、日本語・英語、技術者から経営層までの関係構築を求める。",
  }),
  makeJob({
    id: "mapbox-senior-account-executive-japan-0fefd6a4", companySlug: "mapbox", title: "Senior Account Executive", segment: "Enterprise Sales / Location Intelligence", location: "日本", workStyle: "Mapbox Japan勤務。Remote・Hybrid・出社日数は公式求人で未確認", language: "日本語は母語水準、英語は業務水準",
    source: { label: "Mapbox Careers (Ashby)", url: "https://jobs.ashbyhq.com/mapbox/0fefd6a4-d43e-4ad9-ade2-dd40f4927e8f" },
    descriptionSummary: "日本企業の国内・海外利用を対象に、新規開拓から製品導入後の拡大までを持ち、位置情報の要件を技術・事業成果へ変える。",
    genbaTake: "6〜7桁米ドル規模を想定する複雑な商談で、開発者、事業責任者、法務、調達を束ね、製品公開後まで関係を持つ企業営業。",
    desiredProfile: "公式求人は営業8年以上、技術製品の複雑な商談、日本市場と地理空間技術、日英、経営層との関係構築を重視する。",
  }),
  makeJob({
    id: "sprout-ai-technical-project-manager-japan-f9c25a5a", companySlug: "sprout-ai", title: "Technical Project Manager, Japan", segment: "Customer Delivery / Insurance AI", location: "日本", workStyle: "Remote", language: "日本語は母語水準、英語は高度な業務水準",
    source: { label: "Sprout.ai Careers (Ashby)", url: "https://jobs.ashbyhq.com/sprout-ai/f9c25a5a-d1bb-4e15-9ead-867af2b38932" },
    descriptionSummary: "日本の保険会社の技術検証から本番稼働までを管理し、要件、工程、顧客満足、利用定着、継続的な問題解決を担う。",
    genbaTake: "進行管理だけでなく、技術検証を本番契約へ変え、経営層から日々の利用者までの価値実現と障害時の最終窓口を持つ初期日本組織の導入責任者。",
    desiredProfile: "公式求人は複雑なソフトウェア導入、技術者との協働、顧客経営層との関係、日英、保険・AIへの理解を重視する。",
  }),
  makeJob({
    id: "horizon3-enterprise-account-executive-japan-27401a87", companySlug: "horizon3", title: "Enterprise Account Executive, Japan", segment: "Japan Market Entry / Cybersecurity Sales", location: "日本", workStyle: "Remote。担当市場内の出張が最大40%", language: "公式求人で日本語・英語要件の明記なし。日本市場の顧客・販売パートナー対応水準は選考で確認",
    source: { label: "Horizon3 Careers (Ashby)", url: "https://jobs.ashbyhq.com/horizon3ai/27401a87-09e4-49ce-a76d-678f8e962c48" },
    descriptionSummary: "日本で新規企業を開拓し、自律型侵入テストの技術評価、価値検証、契約、投資対効果、販売パートナーとの市場開拓を担う。",
    genbaTake: "既存ブランドの案件処理ではなく、新しい侵入テスト手法を顧客と販売パートナーへ教育し、最初の再現可能な受注経路を作る市場立ち上げ営業。",
    desiredProfile: "公式求人はサイバーセキュリティ営業5年以上、情報セキュリティまたはSaaS3年以上、目標超過、販売パートナー関係、技術デモを重視する。",
  }),
];
