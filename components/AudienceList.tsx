type Language = "ja" | "en";

const profiles = {
  ja: [
    ["よく見る大手/外資以外をしっかりとみてみたい。", "テリトリー、OTE、昇進機会、日本事業の余白まで比較したい。"],
    ["今すぐ転職しなくても、次に動く企業は普段から知っておきたい", "新規求人、採用拡大、日本参入の変化を、転職活動より前から追いたい。"],
    ["日系IT・SaaSで培った営業経験を、外資SaaSで試したい", "外資特有の報酬・評価・職種の仕組みと、自分の経験が生きる場所を知りたい。"],
    ["SDR・BDRからAEへ、次のステップを本気で考えている", "社内昇進と転職を比べ、AEとして挑戦できる組織とタイミングを見極めたい。"],
    ["日本立ち上げや、次の営業マネジャーの席を探している", "一人目なのか拡大フェーズなのか。採用順序から企業の投資本気度を読みたい。"],
    ["面接の準備を効率良く、解像度高くやりたい", "各企業研究ページの内容をおさえている候補者はほぼいません。"],
    ["日本未進出でアツそうな外資に早めに目をつけたい", "海外の成長、APAC展開、日本対応を観測し、将来の一人目AEや初期GTMの機会を先回りしたい。"],
    ["SE・CS・Partner Salesとして、日本事業と一緒に成長したい", "AE求人だけでなく、製品力、国内導入、パートナー戦略から事業全体を見たい。"],
  ],
  en: [
    ["Look beyond the same large and familiar global companies", "Compare territory, OTE, promotion opportunities and the room to shape the Japan business."],
    ["Track the next companies before starting a job search", "Follow new roles, hiring expansion and Japan-entry signals before making a move."],
    ["Apply sales experience from a Japanese IT or SaaS company in global SaaS", "Understand global compensation, evaluation and role structures—and where that experience transfers."],
    ["Take the next step from SDR or BDR to AE", "Compare internal promotion with external opportunities and identify the right team and timing."],
    ["Find a Japan launch or future sales-management opportunity", "Read hiring sequence to judge whether a company is making a serious investment in Japan."],
    ["Prepare for interviews efficiently and with greater depth", "Use each company research page to build a clearer view of the business and role."],
    ["Spot promising global companies before they enter Japan", "Track global growth, APAC expansion and Japan readiness to anticipate early GTM opportunities."],
    ["Grow with the Japan business in SE, CS or Partner Sales", "Look beyond AE roles to product strength, local adoption and partner strategy."],
  ],
} satisfies Record<Language, string[][]>;

export default function AudienceList({ language = "ja" }: { language?: Language }) {
  return (
    <div className="audience-list">
      {profiles[language].map(([title, body]) => (
        <article className="audience-item" key={title}>
          <span className="audience-check" aria-hidden="true">✓</span>
          <div><h3>{title}</h3><p>{body}</p></div>
        </article>
      ))}
    </div>
  );
}
