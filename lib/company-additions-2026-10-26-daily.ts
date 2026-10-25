import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-26";

export const companies20261026Daily: Company[] = [{
  slug: "qdrant", name: "Qdrant", category: "ベクトル検索・AIデータ基盤", broadCategory: "AI・データ基盤", hq: "ベルリン（ドイツ）",
  japanPresence: "日本法人・国内拠点は未確認。日本を勤務地に含むAPAC向けTechnical Success ManagerとSolutions Engineerを公式募集",
  hiringStatus: "採用中", salesRoles: 2,
  description: "生成AIや検索で使うベクトルデータを、高速に保存・絞り込み・検索するオープンソースのベクトルデータベース企業。",
  lastChecked: checkedAt, careersUrl: "https://jobs.ashbyhq.com/qdrant.tech", entryStatus: "pre-entry-signal",
  tags: ["Vector Database", "AI Infrastructure", "Technical Success", "Solutions Engineering", "Remote", "日本進出前"],
}];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客のAI・検索基盤を技術評価から本番運用まで前へ進めたい人に向く。`,
      thingsToKnow: "日本法人、雇用主体、日本チーム、給与、担当社数、目標、顧客訪問・出張、障害対応の時間帯は公開情報だけでは十分に分からない。",
      marketValue: "ベクトル検索の設計を精度、遅延、費用、可用性、利用拡大で証明できれば、AI・データ基盤の技術営業や顧客技術責任者へ再現性を示しやすい。",
      tenureAndPromotion: "在籍年数だけでなく、実証を本番化し、顧客の検索品質と運用を再利用できる設計へ変えた実績が次の担当範囲の土台になる。",
      priorCompanies: "検索、データベース、クラウド、機械学習基盤、開発者向け製品の技術営業・導入・顧客支援が隣接する。",
      nextCompanies: "担当市場と本番化・継続利用の成果を残せれば、AI基盤、データ基盤、Solutions Architecture、Technical Success Leadershipへ広げやすい。",
    },
  };
}

export const jobs20261026Daily: Job[] = [
  makeJob({
    id: "qdrant-senior-technical-success-manager-australia-or-japan-43984944",
    companySlug: "qdrant",
    title: "Senior Technical Success Manager (Australia or Japan)",
    segment: "APAC AI Infrastructure・Technical Success",
    location: "日本／オーストラリア",
    workStyle: "リモート",
    language: "英語。日本語要件は公式求人で明記なし",
    source: { label: "Qdrant Careers (Ashby)", url: "https://jobs.ashbyhq.com/qdrant.tech/43984944-5877-4611-b970-39519591b341" },
    descriptionSummary: "APACの戦略顧客を担当し、ベクトル検索の本番設計、性能・拡張、障害解決、利用拡大を主導し、販売前支援と販売パートナー支援にも関わる。",
    genbaTake: "問い合わせ対応ではなく、APAC初期のTechnical Success担当として、顧客のAI検索を実証から本番運用・拡大へ変える責任を持つ役割。",
    desiredProfile: "顧客向け技術職6年以上、データベース・分散システム、企業顧客の本番運用、経営・技術双方との対話経験を求める。",
    compensationReality: "給与、賞与、株式、担当社数、更新・拡大目標、障害対応の時間帯は公式求人で確認できない。",
  }),
  makeJob({
    id: "qdrant-senior-solutions-engineer-apac-512b651a",
    companySlug: "qdrant",
    title: "Senior Solutions Engineer (APAC)",
    segment: "APAC AI Infrastructure・Solutions Engineering",
    location: "日本／オーストラリア／インド／シンガポール",
    workStyle: "リモート",
    language: "英語。日本語要件は公式求人で明記なし",
    source: { label: "Qdrant Careers (Ashby)", url: "https://jobs.ashbyhq.com/qdrant.tech/512b651a-3a52-4662-92c0-bcf84c0786af" },
    descriptionSummary: "APAC企業の技術戦略、設計、実証、本番化を担い、営業、製品、技術部門とベクトル検索の採用を進める。",
    genbaTake: "デモを見せるだけでなく、検索精度、データ量、遅延、配備方式を顧客要件へ落とし、本番採用まで技術的に勝ち切る役割。",
    desiredProfile: "Solutions Engineering等5年以上、データベース・機械学習・クラウド、企業顧客向け技術提案、実証から本番化の経験を求める。",
    compensationReality: "給与、変動給、株式、担当営業数、同時実証数、出張、販売目標への関与は公式求人で確認できない。",
  }),
];
