import { companies, jobs, signals } from "@/lib/market-data";

const siteUrl = "https://genbajapan.com";
export const dynamic = "force-static";

export async function GET() {
  const lines = [
    "# Genba",
    "",
    "> Genbaは「外資IT戦士と予備軍の作戦会議室」を掲げ、外資SaaS企業の日本採用、営業求人、組織の変化を公式情報から追う無料メディアです。事実・分析・広告を区別して表示します。",
    "",
    "## Main pages",
    `- [企業データ](${siteUrl}/companies)`,
    `- [営業求人](${siteUrl}/jobs)`,
    `- [採用シグナル](${siteUrl}/signals)`,
    `- [調査・編集方針](${siteUrl}/methodology)`,
    `- [掲載・スポンサー](${siteUrl}/advertise)`,
    "",
    "## Companies",
    ...companies.map((company) => `- [${company.name}](${siteUrl}/companies/${company.slug}) — ${company.category}, 最終更新日 ${company.lastChecked}`),
    "",
    `Current dataset: ${companies.length} companies, ${jobs.length} official sales roles, ${signals.length} hiring signals.`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
