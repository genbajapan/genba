import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-13";

export const companies20260813WaveThree: Company[] = [
  { slug: "cato-networks", name: "Cato Networks", category: "SASE / Cloud Networking & Security", broadCategory: "セキュリティ・IT運用", hq: "Tel Aviv, Israel", japanPresence: "Cato Networks株式会社 / Tokyo", hiringStatus: "積極採用", salesRoles: 1, description: "networkingとsecurityをsingle cloud platformへ統合するSASE vendor。東京でRegional Sales Directorを募集。", lastChecked: checkedAt, careersUrl: "https://www.catonetworks.com/careers/careers-post/4746809101/regional-sales-director-japan", tags: ["SASE", "Networking", "Security", "Channel", "Enterprise"] },
  { slug: "patsnap", name: "Patsnap", category: "Innovation Intelligence / R&D AI", broadCategory: "AI・データ基盤", hq: "Singapore", japanPresence: "Tokyo office / Japan commercial team", hiringStatus: "積極採用", salesRoles: 1, description: "patent・science・market dataとdomain AIでR&DとIP判断を支援。東京でChannel Managerを募集。", lastChecked: checkedAt, careersUrl: "https://jobs.lever.co/patsnap/0875a720-5be3-41de-9dd9-d989618bfb53", tags: ["Innovation Intelligence", "R&D", "IP", "AI", "Channel"] },
  { slug: "netskope", name: "Netskope", category: "SSE / SASE / Data Security", broadCategory: "セキュリティ・IT運用", hq: "Santa Clara, US", japanPresence: "Netskope Japan / Tokyo office", hiringStatus: "積極採用", salesRoles: 1, description: "cloud・web・private app・AI利用をdata-centricに保護するNetskope Oneを提供。日本でRegional Sales Managerを募集。", lastChecked: checkedAt, careersUrl: "https://www.netskope.com/company/careers/open-positions/?gh_jid=7493456", tags: ["SSE", "SASE", "DLP", "Zero Trust", "Enterprise"] },
  { slug: "mambu", name: "Mambu", category: "Composable Cloud Banking Platform", broadCategory: "経営管理・FinTech", hq: "Amsterdam, Netherlands", japanPresence: "Japan remote / Employee of Record", hiringStatus: "積極採用", salesRoles: 1, description: "banking・lending・paymentsのproductをcomposable SaaS coreで構築。日本でSenior Account Executive (Channel)を募集。", lastChecked: checkedAt, careersUrl: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job?in_iframe=1", tags: ["FinTech", "Core Banking", "SaaS", "Channel", "Enterprise"] },
  { slug: "nice", name: "NiCE", category: "CX AI / Contact Center / Financial Crime", broadCategory: "CRM・顧客体験", hq: "Ra'anana, Israel", japanPresence: "Japan - Tokyo / NiCE-FLEX", hiringStatus: "積極採用", salesRoles: 1, description: "CXoneとAIでcustomer service・interactionを統合し、financial crime領域も展開。東京でAccount Executiveを募集。", lastChecked: checkedAt, careersUrl: "https://job-boards.eu.greenhouse.io/nice/jobs/4661611101", tags: ["CX", "Contact Center", "AI", "Enterprise", "Financial Crime"] },
  { slug: "island", name: "Island", category: "Enterprise Browser / Secure Workspace", broadCategory: "セキュリティ・IT運用", hq: "Dallas, US", japanPresence: "日本法人・国内拠点・Japan求人を確認できず", hiringStatus: "継続観測", salesRoles: 0, description: "browser自体へaccess・data・network controlを組み込むEnterprise Browser。APAC拡張意向からJapan進出条件を継続観測。", lastChecked: checkedAt, careersUrl: "https://www.island.io/careers", tags: ["日本未進出", "Enterprise Browser", "Zero Trust", "DLP", "APAC"], entryStatus: "not-entered" },
  { slug: "1password", name: "1Password", category: "Identity Security / Unified Access Management", broadCategory: "セキュリティ・IT運用", hq: "Toronto, Canada", japanPresence: "日本語siteはあるが日本法人・国内拠点・Japan求人を確認できず", hiringStatus: "継続観測", salesRoles: 0, description: "password・device trust・SaaS accessをhuman-centricに統合。日本語提供とglobal成長からJapan進出条件を継続観測。", lastChecked: checkedAt, careersUrl: "https://jobs.ashbyhq.com/1password", tags: ["日本未進出", "Identity Security", "Password", "Device Trust", "SaaS Governance"], entryStatus: "not-entered" },
];

type JobSeed = {
  slug: string;
  title: string;
  segment: string;
  location: string;
  workStyle: string;
  language: string;
  url: string;
  summary: string;
  take: string;
  profile: string;
  fit: string;
  marketValue: string;
};

const jobSeeds: JobSeed[] = [
  { slug: "cato-networks", title: "Regional Sales Director - Japan", segment: "Enterprise / SASE", location: "Tokyo Prefecture, Japan", workStyle: "公式求人で明記を確認できず", language: "English language skills", url: "https://www.catonetworks.com/careers/careers-post/4746809101/regional-sales-director-japan", summary: "日本のprospect・既存顧客へCato SASEを提案し、pipeline、forecast、full sales cycle、partner relationshipを担う。", take: "networkとsecurityのpoint product比較ではなく、拠点・remote user・cloud接続の運用、障害、policy、vendor costを単一architectureへ集約するbusiness caseを作る。", profile: "公式求人はfield/remote sales 5〜10年以上、quota超過、networkingまたはsecurityのC-level・technical buyer向け販売経験を重視。", fit: "networkとsecurityの両方を理解し、partnerと大型territoryを自走できるsellerに向く。", marketValue: "SASE、network transformation、CISO/CIO selling、channel-led enterprise salesの経験。" },
  { slug: "patsnap", title: "Channel Manager", segment: "Japan Channel / Innovation Intelligence", location: "Tokyo", workStyle: "hybrid", language: "公式求人で明記を確認できず", url: "https://jobs.lever.co/patsnap/0875a720-5be3-41de-9dd9-d989618bfb53", summary: "日本のIP関連channel businessをend-to-endで管理し、既存partnerの強化、新規resellerの採用・enablement、pipeline processと成長を担う。", take: "patent検索toolの再販ではなく、R&D・IP・business部門がtechnology landscapeと競争機会を共通dataで判断するworkflowをpartnerと設計する。", profile: "公式求人はchannel management、partner enablement、process management、business growthの実績を重視。経験年数と言語要件は明記なし。", fit: "知財・R&D buyerの専門性を学び、partner経由のcategory educationを作りたい人に向く。", marketValue: "Innovation intelligence、IP/R&D sales、Japan channel development、partner enablementの経験。" },
  { slug: "netskope", title: "Regional Sales Manager, Japan", segment: "Enterprise / Cloud Security", location: "Japan", workStyle: "公式求人で明記を確認できず", language: "公式求人で明記を確認できず", url: "https://www.netskope.com/company/careers/open-positions/?gh_jid=7493456", summary: "日本のenterprise accountを開拓し、cloud・data・network securityの複雑なsales cycleをSE、channel、leadershipと進めるfield sales role。", take: "CASBやSWGの単品更新ではなく、dataがcloud・web・private app・AIを移動する経路を可視化し、SSE/SASE architectureとpolicyを統合する。", profile: "公式採用ページで日本のRegional Sales Managerを確認。詳細要件は動的求人画面のため、確認できた職務・勤務地以上を補完しない。", fit: "CISOとnetwork/security teamの両方へ入り、partnerを含むenterprise changeを進めたいsellerに向く。", marketValue: "SSE/SASE、data security、Zero Trust、enterprise cybersecurity、channelの経験。" },
  { slug: "mambu", title: "Senior Account Executive (Channel)", segment: "Japan Channel / Cloud Banking", location: "JP-Remote", workStyle: "remote（location dependent）", language: "公式求人で明記を確認できず", url: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job?in_iframe=1", summary: "reseller portfolio経由のNew ACVを持ち、partner採用・onboarding・enablement、共同GTM、complex sales cycle、forecastを担う。", take: "core replacementの機能表ではなく、新商品投入速度、規制変更、integration、migration risk、運用costを段階的なcomposable architectureの投資判断へ変える。", profile: "公式求人はFinTech/B2B SaaSのchannel・partner・indirect sales、quota達成、pipeline、complex partner relationship、cloud理解を重視。", fit: "金融buyerとresellerの双方を動かし、direct saleではなくecosystemで市場を作りたいsellerに向く。", marketValue: "Cloud banking、FinTech、channel-led growth、partner GTM、complex enterprise saleの経験。" },
  { slug: "nice", title: "Account Executive, Japan", segment: "Enterprise / CX AI", location: "Japan - Tokyo", workStyle: "NiCE-FLEX hybrid（週2日office・週3日remote）", language: "Fluent Japanese / English", url: "https://job-boards.eu.greenhouse.io/nice/jobs/4661611101", summary: "日本のdefined territoryでnew logoとcompetitive displacementを担い、C-level relationship、business case、multi-year plan、partner、presalesを束ねる。", take: "contact center seatやAI機能ではなく、customer interactionのautomation、agent productivity、quality、revenue、complianceを同じoperating modelとKPIへ接続する。", profile: "公式求人はquota超過、大口account、legacy/complex softwareの置換、ROI business case、C-level selling、日本語・英語の流暢さを求める。", fit: "既存vendorが強い大企業で、AI・CX transformationを複数年案件にするhunterに向く。", marketValue: "CX AI、CCaaS、enterprise displacement、C-level value selling、partner orchestrationの経験。" },
];

export const jobs20260813WaveThree: Job[] = jobSeeds.map((seed) => ({
  id: `${seed.slug}-${seed.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
  companySlug: seed.slug,
  title: seed.title,
  segment: seed.segment,
  location: seed.location,
  workStyle: seed.workStyle,
  language: seed.language,
  firstSeen: checkedAt,
  lastChecked: checkedAt,
  source: { label: `${seed.slug} official careers`, url: seed.url },
  descriptionSummary: seed.summary,
  genbaTake: seed.take,
  compensationReality: "日本のbase、OTE、equity、quota、accelerator、ramp保証は公開求人で確認できない。選考でpay mix、credit rule、達成率まで確認したい。",
  desiredProfile: seed.profile,
  careerInsights: {
    fit: seed.fit,
    thingsToKnow: "日本ARR、顧客数、ramped seller達成率、平均ACV、sales cycle、担当社数、pipeline sourceは非公開。",
    marketValue: seed.marketValue,
    tenureAndPromotion: "日本teamの平均在籍年数、離職率、昇進実績は公開情報で確認できない。",
    priorCompanies: "個人profileの十分な母数は未確認。求人要件に近いenterprise software、SaaS、security、FinTech、IP/R&D、CXの経験者が候補になる。",
    nextCompanies: "公開集計は未確認。担当categoryで定量成果を残せれば、隣接enterprise softwareのAE、channel、sales leadershipへつながり得る（仮説）。",
  },
}));
