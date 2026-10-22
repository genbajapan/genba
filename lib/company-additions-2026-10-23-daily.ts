import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-23";

export const companies20261023Daily: Company[] = [
  {
    slug: "kraken-technologies",
    name: "Kraken Technologies",
    category: "エネルギー事業者向けAI・業務基盤",
    broadCategory: "コマース・業界特化",
    hq: "ロンドン（英国）",
    japanPresence: "Kraken Technologies Japan合同会社と東京拠点を公式確認。東京・日本向け公式求人12件を確認",
    hiringStatus: "積極採用",
    salesRoles: 12,
    description: "電力・水道・通信事業者の顧客管理、請求、メーターデータ、現場作業、分散型エネルギー資源を一つの業務基盤で運用する企業。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/krakentech",
    tags: ["Utility AI", "Energy", "Customer Operations", "Flexibility", "Tokyo", "Transformation"],
  },
  {
    slug: "ciq",
    name: "CIQ",
    category: "Enterprise Linux・AI/HPC基盤",
    broadCategory: "セキュリティ・IT運用",
    hq: "リノ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本在住を必須とするSr. Linux Solutions Architectを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "Rocky Linuxの創設商用スポンサーとして、企業向けLinux、HPC、AI基盤をカーネルからオーケストレーションまで提供する企業。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/ciq",
    tags: ["日本未進出", "Rocky Linux", "Enterprise Linux", "HPC", "AI Infrastructure", "Solutions Architect"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の技術・事業課題を導入、利用、継続成果へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当社数、案件期間、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を受注、導入、利用、顧客KPI、再利用できる運用設計で定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当範囲の拡張、顧客成果、再利用できる導入・運用の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、エネルギー、Linux、クラウド、AI/HPC、技術コンサルティング、複雑な変革案件の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、顧客変革、技術営業、導入責任者、地域事業開発、専門職リーダーへ広げやすい。",
    },
  };
}

const krakenSource = (id: string, label: string) => ({ label: `Kraken Careers - ${label}`, url: `https://jobs.ashbyhq.com/krakentech/${id}` });

export const jobs20261023Daily: Job[] = [
  makeJob({
    id: "kraken-transformation-director-japan-0b23e2c7", companySlug: "kraken-technologies", title: "Transformation Director", segment: "Japan Utility Transformation Leadership", location: "東京", workStyle: "ハイブリッド。顧客・社内チームとの対面のため出張あり", language: "日本語・英語とも流暢さを必須", source: krakenSource("0b23e2c7-7120-40bb-987c-1210ec318469", "Transformation Director"),
    descriptionSummary: "日本の公益事業者の経営層と変革方針を作り、Kraken導入に伴う業務、組織、技術の移行を統括する。", genbaTake: "システム導入の進行管理ではなく、公益事業者の経営課題、現場の働き方、顧客体験を一つの変革計画へ束ねる責任。", desiredProfile: "大規模な業務変革、経営層との合意形成、公益事業の知識、日本語・英語でのファシリテーションが隣接する。", compensationReality: "給与、賞与、株式、評価KPIは公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-client-lead-japan-67ed1aad", companySlug: "kraken-technologies", title: "Senior Client Lead - Culture and Organisation Transformation", segment: "Culture・Organisation Transformation", location: "東京", workStyle: "ハイブリッド。事業拡大に伴い出張の可能性あり", language: "日本語native、英語business level", source: krakenSource("67ed1aad-4fdf-4881-b8fc-7b6713c70cd0", "Senior Client Lead"),
    descriptionSummary: "大手日本顧客への導入と並行して、業務運営、組織文化、働き方の変革を顧客側リーダーと進める。", genbaTake: "設定作業ではなく、新しい業務基盤を使い切る組織設計と意思決定の変化まで担うクライアント変革職。", desiredProfile: "組織変革、業務設計、経営・現場双方との合意形成、日英での顧客支援経験が隣接する。", compensationReality: "給与、賞与、担当案件数、稼働率は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-client-delivery-lead-japan-f6951210", companySlug: "kraken-technologies", title: "Client Delivery Lead", segment: "Utility Platform Delivery", location: "東京", workStyle: "ハイブリッド。出張あり", language: "日本語・英語", source: krakenSource("f6951210-80ec-4da4-b3f7-b20b872597f0", "Client Delivery Lead"),
    descriptionSummary: "顧客の複数の利用者導線を理解し、要望の整理、製品計画、導入、障害解決を顧客・製品・開発間で進める。", genbaTake: "顧客要望をそのまま個別開発へ渡さず、標準製品で解く範囲と新機能を見極める製品責任に近い導入職。", desiredProfile: "顧客導入、製品管理、アジャイル開発、複雑な技術案件、日英での調整経験が隣接する。", compensationReality: "給与、賞与、同時案件数、出張頻度は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-client-delivery-lead-japan-2b600cd3", companySlug: "kraken-technologies", title: "Senior Client Delivery Lead", segment: "Senior Utility Platform Delivery", location: "東京", workStyle: "ハイブリッド。出張あり", language: "日本語・英語", source: krakenSource("2b600cd3-e684-469b-abd4-979b6db7dc1d", "Senior Client Delivery Lead"),
    descriptionSummary: "日本顧客の大規模な移行・運用案件で、顧客課題、製品優先順位、技術チーム、重要な問題解決を上位レベルで統括する。", genbaTake: "納期だけでなく、顧客の業務成果と共通製品の持続性を両立させる判断を持つ上級導入リード。", desiredProfile: "大規模SaaS導入、製品責任、顧客幹部との調整、アジャイル変革、日英での推進経験が隣接する。", compensationReality: "給与、賞与、同時案件数、出張頻度は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-director-customer-success-japan-6536943b", companySlug: "kraken-technologies", title: "Director, Customer Success", segment: "Japan Customer Success Leadership", location: "東京", workStyle: "ハイブリッド", language: "日本語・英語とも流暢さを必須", source: krakenSource("6536943b-ed50-407d-9ece-c3c3d8195f90", "Director, Customer Success"),
    descriptionSummary: "日本の戦略顧客との関係、導入後の価値実現、重大問題、契約拡大を持ち、日本のCustomer Success組織と運用モデルを作る。", genbaTake: "利用支援ではなく、重要顧客の事業成果、危機対応、更新・拡大と国内組織づくりを同時に持つ日本責任者級の役割。", desiredProfile: "大企業Customer Success、技術導入、エネルギー・公益事業、経営層対応、組織構築の経験が隣接する。", compensationReality: "給与、変動給、担当ARR、更新・拡大目標は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-client-lead-japanese-japan-a688d13f", companySlug: "kraken-technologies", title: "シニア・クライアント・リード（組織・文化変革）", segment: "Culture・Organisation Transformation", location: "東京", workStyle: "ハイブリッド。出張の可能性あり", language: "日本語・英語で顧客・海外チームと協働", source: krakenSource("a688d13f-ee70-4dd8-b994-8f833c7a7730", "シニア・クライアント・リード"),
    descriptionSummary: "日本語で掲載された組織・文化変革のSenior Client Leadとして、大手日本顧客の導入と業務変革を支援する。", genbaTake: "英語版と同系統の募集だが別の公式求人ID。応募時は配属、重複募集か、日本語ポジション固有の責任を確認したい。", desiredProfile: "組織変革、業務設計、顧客リーダーとの合意形成、日英での実行経験が隣接する。", compensationReality: "給与、賞与、英語版求人との採用枠の違いは公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-client-data-analytics-lead-japan-1fbe5023", companySlug: "kraken-technologies", title: "Senior Client Data & Analytics Lead", segment: "Client Data・Analytics Leadership", location: "東京", workStyle: "ハイブリッド", language: "日本語native level、英語business level", source: krakenSource("1fbe5023-1fcd-42b8-8bcf-a733884c2927", "Senior Client Data & Analytics Lead"),
    descriptionSummary: "日本顧客のデータ移行、分析、品質、意思決定を主導し、顧客・製品・技術チーム間でデータ活用の設計を進める。", genbaTake: "移行件数の管理ではなく、公益事業の複雑な顧客・請求・利用データを信頼できる運用と意思決定へ変える役割。", desiredProfile: "データ移行、分析、データ品質、顧客向け技術支援、日英での部門横断推進経験が隣接する。", compensationReality: "給与、賞与、担当データ量、同時案件数は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-delivery-manager-genflex-japan-703c42a2", companySlug: "kraken-technologies", title: "Senior Delivery Manager - GenFlex", segment: "Grid-scale Energy Asset Delivery", location: "東京", workStyle: "ハイブリッド。顧客・現場・外部関係者との移動あり", language: "日本語は流暢またはbusiness level、英語で海外チームと協働", source: krakenSource("703c42a2-a2b8-4b53-b1a6-0ebbbd7a3b22", "Senior Delivery Manager - GenFlex"),
    descriptionSummary: "日本の蓄電池など大規模エネルギー資産を、要件整理、API・データ・接続、試験、稼働開始、運用移行まで主導する。", genbaTake: "建設工程全体ではなく、物理資産とエネルギー市場をKrakenへ安全につなぎ、稼働可能な状態へ持っていく技術導入責任。", desiredProfile: "エネルギー・蓄電池・複雑基盤の導入、API・データ連携、顧客・EPC・技術チームの調整経験が隣接する。", compensationReality: "給与、賞与、同時案件数、出張頻度は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-electrical-design-engineer-japan-3cd80020", companySlug: "kraken-technologies", title: "Senior Electrical Design Engineer", segment: "Japan Grid Integration・Electrical Design", location: "東京", workStyle: "ハイブリッド。必要時に現地対応・出張あり", language: "日本語・英語ともnativeまたはprofessional fluency", source: krakenSource("3cd80020-0b1b-4fd0-ba13-5340c3a458d2", "Senior Electrical Design Engineer"),
    descriptionSummary: "日本の蓄電池・再生可能エネルギー資産を電力市場へ接続するため、系統要件、通信、ハードウェア、技術説明を主導する。", genbaTake: "設計図だけでなく、送配電事業者・OCCTO・顧客と、分散型資産を市場参加できる状態にする地域技術責任。", desiredProfile: "電気設計、蓄電池・再エネ、系統連系、産業通信、規制・市場要件、日英での技術説明経験が隣接する。", compensationReality: "給与、賞与、現地対応回数、待機対応は公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-senior-backend-engineer-japan-aadd6118", companySlug: "kraken-technologies", title: "Senior Software Engineer (Backend - Python/Django)", segment: "Utility Platform Backend Engineering", location: "日本／東京", workStyle: "日本国内リモート、または東京ハイブリッド", language: "公式求人で日本語・英語水準の個別明記なし", source: krakenSource("aadd6118-1a1f-4cab-8d7a-b66b287221be", "Senior Software Engineer"),
    descriptionSummary: "Python・Djangoを中心に、エネルギー事業者向け基盤の設計、実装、品質、運用、技術的な指導を担う。", genbaTake: "大規模な請求・顧客・エネルギーデータを扱いながら、毎日の高頻度な変更と公益基盤の信頼性を両立する開発職。", desiredProfile: "Python、Django、GraphQL、PostgreSQL、AWS、分散システム、設計・指導経験が隣接する。", compensationReality: "給与、賞与、株式、待機対応、評価KPIは公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-mid-backend-engineer-japan-ebceacfe", companySlug: "kraken-technologies", title: "Mid level Software Engineer (Backend - Python/Django)", segment: "Utility Platform Backend Engineering", location: "日本／東京", workStyle: "日本国内リモート、または東京ハイブリッド", language: "公式求人で日本語・英語水準の個別明記なし", source: krakenSource("ebceacfe-b47a-43bf-b963-06be91b2adb0", "Mid level Software Engineer"),
    descriptionSummary: "Python・Djangoを中心に、機能開発、試験、障害調査、可観測性、チームの開発品質改善を担う。", genbaTake: "コード量ではなく、公益事業者の複雑な業務を壊さず継続的に変える設計・試験・運用の基礎を積む役割。", desiredProfile: "Python・Django等のWeb基盤、GraphQL、非同期処理、PostgreSQL、AWS、堅牢な試験の経験が隣接する。", compensationReality: "給与、賞与、株式、待機対応、評価KPIは公式求人で確認できない。",
  }),
  makeJob({
    id: "kraken-people-operations-specialist-japan-fd98afd6", companySlug: "kraken-technologies", title: "People Operations Specialist", segment: "Japan People Operations", location: "東京", workStyle: "ハイブリッド", language: "日本語native、英語fluency", source: krakenSource("fd98afd6-5534-49eb-8dc6-0207c86ecff5", "People Operations Specialist"),
    descriptionSummary: "日本の人事運用、入退社、労務、制度、就労資格の記録を整え、成長する国内組織を支える。", genbaTake: "定型事務だけでなく、急拡大する日本組織で海外方針と国内労務をつなぎ、再利用できる運用を作る役割。", desiredProfile: "日本の人事・労務運用、正確な記録、従業員対応、日英での海外部門連携経験が隣接する。", compensationReality: "給与、賞与、担当人数、評価KPIは公式求人で確認できない。",
  }),
  makeJob({
    id: "ciq-sr-linux-solutions-architect-japan-5414772008", companySlug: "ciq", title: "Sr. Linux Solutions Architect", segment: "Japan Linux・HPC Solutions Architecture", location: "日本", workStyle: "リモート中心。求人は多くの職種で出張不要と記載", language: "日本語は流暢、英語での文書・会話に自信を持つ水準", source: { label: "CIQ Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/ciq/jobs/5414772008" },
    descriptionSummary: "日本の見込み顧客と販売パートナーへ、Rocky Linux、RLC、Fuzzball、Warewulf、Apptainerの技術評価、設計、実証、導入・拡張を支援する。", genbaTake: "Linuxの問い合わせ対応ではなく、企業・研究・AI/HPC基盤の要件を設計し、営業と並走して技術判断から本番定着まで持つ役割。", desiredProfile: "Linux、コンテナ、HPC、AI/ML基盤、技術営業・Solutions Architecture 7年以上、日本在住、日英での顧客対応が求められる。", compensationReality: "給与、賞与、株式、担当社数、営業目標への関与は公式求人で確認できない。",
  }),
];
