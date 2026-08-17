import type { Job } from "@/lib/market-data";

const checkedAt = "2026-08-17";

function careerInsights(domain: string): Job["careerInsights"] {
  return {
    fit: `${domain}の日本市場を0→1で作り、顧客・partner・社内専門家を束ねて成果を出したい人に向く。`,
    thingsToKnow: "給与、OTE、quota、担当社数、達成率、昇進、離職は公開情報で確認できない。配属先の数字と具体例を面接で確認したい。",
    marketValue: `${domain}でterritory、partner、pipeline、受注、組織づくりを定量化できれば、隣接するEnterprise Security・Observability・Data Platformへ再現性を説明しやすい。`,
    tenureAndPromotion: `【Genba仮説】${domain}のlaunch局面では、在籍年数より担当scope、個人・team成果、再現可能なplaybook作りが次のlevelを決める。支持材料: 公式求人は日本GTMの構築、目標超過、複雑案件、channel motionを求める。反証・留保: 日本組織の昇進率は確認できない。面接で確認: 直近24カ月の昇進・異動・退職と次levelの定量条件は。`,
    priorCompanies: `【Genba仮説】入社元は社名より、${domain}、Enterprise Security・IT Operations、channel、複雑salesでの目標責任が共通項になる。支持材料: 公式求人がrole固有の経験を明記する。反証・留保: 日本の公開profileを十分な同一条件で集計できない。面接で確認: 直近採用者の前職category、共通skill、ramp期間は。`,
    nextCompanies: `【Genba仮説】日本launch、partner ecosystem、Enterprise pipelineと受注を数字で残せれば、${domain}のJapan leadership、Enterprise Sales、Allianceへ接続しやすい。支持材料: 公式求人がterritory creationとcross-functional ownershipを求める。反証・留保: 公開された転職先分布ではない。面接で確認: 退職者の次role categoryと社内でscopeを広げた実例は。`,
  };
}

function job(input: Omit<Job, "firstSeen" | "lastChecked" | "careerInsights"> & { domain: string }): Job {
  const { domain, ...record } = input;
  return { ...record, firstSeen: checkedAt, lastChecked: checkedAt, careerInsights: careerInsights(domain) };
}

export const jobs20260817BatchEighteen: Job[] = [
  job({
    id: "cribl-6137610004",
    companySlug: "cribl",
    title: "Partner Business Manager, Japan",
    segment: "Channel・Alliance / Japan Launch",
    location: "日本",
    workStyle: "Remote",
    language: "公式求人で言語名の明記なし",
    source: { label: "Cribl Careers (Greenhouse)", url: "https://cribl.io/job-detail/?gh_jid=6137610004" },
    descriptionSummary: "日本launch teamの一員としてreseller、SI、MSSP、technology alliance、cloud partnerを開拓し、共同GTM・pipeline・revenueを0→1で作る。",
    genbaTake: "紹介件数だけでなく、partner strategy、enablement、sourced・influenced pipeline、deal execution、delivery capacityを日本市場の再現可能なchannel modelへする役割。",
    compensationReality: "日本の給与、base、OTE、pay mix、equity、partner quota、credit ruleは公式求人で数値非公開。",
    desiredProfile: "日本でのdirect・channel revenue実績、10年以上のhigh-tech business development・alliance、reseller・SI・MSSPとの関係構築、日本国内出張への対応を求める。",
    domain: "Telemetry Infrastructure・Security Data・Japan Partner GTM",
  }),
  job({
    id: "cribl-6098546004",
    companySlug: "cribl",
    title: "Regional Sales Director, Japan",
    segment: "Enterprise Sales Leadership / Japan",
    location: "日本",
    workStyle: "Remote-first",
    language: "公式求人で言語名の明記なし",
    source: { label: "Cribl Careers (Greenhouse)", url: "https://cribl.io/job-detail/?gh_jid=6098546004" },
    descriptionSummary: "2〜7名のEnterprise Sales Repを採用・育成し、new logoとaccount expansion、pipeline、forecast、四半期・年間目標を率いる日本sales leadership。",
    genbaTake: "個人の大型受注だけでなく、採用、coaching、qualification、channel、forecastを仕組みにして、日本GTMの達成者比率と予測精度を作る役割。",
    compensationReality: "日本の給与、base、OTE、pay mix、equity、team quota、ramp、attainmentは公式求人で数値非公開。",
    desiredProfile: "Enterprise sales teamのleadership 5年以上、large enterprise・SaaS・cloud・logs・metrics・IT Operations・Security、channel、MEDDIC、目標超過の実績を求める。",
    domain: "Telemetry Infrastructure・Enterprise Security Sales Leadership",
  }),
  job({
    id: "cribl-6110917004",
    companySlug: "cribl",
    title: "Regional Sales Manager, Japan (Enterprise)",
    segment: "Enterprise Sales / Japan",
    location: "日本",
    workStyle: "Remote（日本居住・territory近隣）",
    language: "公式求人で言語名の明記なし",
    source: { label: "Cribl Careers (Greenhouse)", url: "https://cribl.io/job-detail/?gh_jid=6110917004" },
    descriptionSummary: "CISO・CIO・engineerへvalueを説明し、lead generationからcloseまでを所有。日本territoryでnew logoとEnterprise pipelineを作り、予測可能に目標達成する。",
    genbaTake: "既存budgetを待たず、telemetry dataのcost・visibility・lock-inをbusiness caseへ翻訳し、channel-led motionで年5社以上のnew logoを再現する役割。",
    compensationReality: "日本の給与、base、OTE、pay mix、equity、quota、accelerator、rampは公式求人で数値非公開。",
    desiredProfile: "Enterprise Security sales 4年以上、SIEM・Observability・CISO/CIO、early-stage、年5社以上のnew logo、channel、MEDDICの経験を求める。",
    domain: "Telemetry Infrastructure・Enterprise Security Sales",
  }),
];
