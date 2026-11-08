# X下書き: LaunchDarkly 1社深掘り

米国発。LaunchDarklyを取り上げる理由は、ソフトウェアを本番へ出すことと、利用者へ機能を見せることを分け、「公開後に止められる」状態を企業の標準にしたからです。

2014年、OaklandでEdith HarbaughとJohn Kodumalが創業しました。クラウドでコードを速く配れるようになっても、公開後の影響を安全に制御する現実的な仕組みが足りない。そこで、大手企業が内製していた機能フラグを、一般の開発チームも使えるサービスにしたのが始まりです。

現在は顧客5,500社超、Fortune 500の約4分の1、1日45兆回の機能判定を公表しています。顧客数はSnowflakeの1.45万社超、HubSpotの30.6万社より小さい一方、裏側の判定量は桁違いです。定義も市場も違いますが、目立たない制御基盤が大企業の本番運用へ深く入る規模感が見えます。

「機能フラグなら自社でも作れる」という反論は正しいです。勝ち筋は旗を立てることではなく、対象利用者、段階公開、実験、監視、停止判断を組織横断で管理すること。ただし、内製やクラウド標準機能で十分な会社には、専用基盤の費用と運用負担が壁になります。

AI時代の優位はさらに分かりやすい。生成したコードやAIエージェントの振る舞いは、事前テストだけでは出力を固定できません。LaunchDarklyは既存の公開導線、権限、監査、45兆回の判定基盤を使い、プロンプトやモデルを一部利用者へ出し、費用・遅延・失敗を見ながら戻せます。基盤モデル単体には、本番で誰に何を見せるかを継続統制する仕組みがありません。

海外事例のAdmiral Insuranceでは、月2回だった配備を月8回へ増やし、復旧時間を1〜2時間から秒単位へ短縮したと公式に説明しています。販売元事例であり、日本企業の公式定量事例は確認できず、同じ成果を保証するものではありません。

今日時点での日本向け公式求人は0件。公式採用ページ44件にJapan・Tokyo勤務はなく、アジアではシンガポールのEnterprise Account Executiveを確認しました。日本法人、拠点、国内導入事例も未確認で、現時点は応募先ではなく進出の成立条件を先回りして見る会社です。

▪️LaunchDarklyの事業構造、日本進出の成立条件、未確認点
https://genbajapan.com/companies/launchdarkly?utm_source=x&utm_medium=organic_social&utm_campaign=20261109_launchdarkly&utm_content=post_02

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-11-09
ステータス: ローカル下書き・X未投稿ドラフト保存済み・未投稿・未予約

## 事実確認メモ

- 冒頭表記: `米国発`。LaunchDarkly公式は2014年に米国California州Oaklandで創業したと説明。
  - https://launchdarkly.com/about-us/
- 創業背景: クラウドで配備が速くなる一方、配備後の機能公開を安全に制御する手段が足りず、大手企業の内製機能管理を一般化した経緯を公式会社紹介から要約。
  - https://launchdarkly.com/about-us/
- 規模: 5,500社超、Fortune 500の約25%、従業員570人超、1日45兆回の機能判定は会社発表。Snowflakeの1.45万社超、HubSpotの30万6,446社とは顧客定義・契約単位・市場・時点が違うため、相対的な規模感だけに使用。
  - https://launchdarkly.com/about-us/
  - https://investors.snowflake.com/financials/quarterly-results/default.aspx
  - https://ir.hubspot.com/news-releases/news-release-details/hubspot-reports-q2-2026-results
- AI時代の勝ち筋: 既存の機能公開、対象制御、監視、実験に加え、AgentControlでプロンプト・モデル・対象利用者を配備なしに変更し、生成回数、token、遅延、失敗を測る製品更新を根拠に編集解釈した。内製・クラウド標準機能で足りる反証も本文に残した。
  - https://launchdarkly.com/changelog/
  - https://launchdarkly.com/blog/introducing-release-autopilot/
- 顧客事例: Admiral Insuranceの配備頻度、lead time、MTTR、change failure rateはLaunchDarkly公式事例の要約。販売元公表の海外事例であり、日本での再現を保証しない。
  - https://launchdarkly.com/case-studies/admiral/
- 日本求人・進出: 2026-11-09に公式Greenhouse 44件を取得し、Japan・Tokyo勤務地は0件。シンガポールのSenior Enterprise Account Executiveはアジア採用の参考だが、日本勤務求人へ読み替えていない。公式拠点はOaklandとLondonで、日本法人・東京拠点は未確認。
  - https://launchdarkly.com/careers/
  - https://job-boards.greenhouse.io/launchdarkly/jobs/7999676003
- 外部操作: 2026-11-09に`@chosenshi08`の未投稿ドラフトへ本文部分だけを1本として保存し、Xの`Your draft was saved.`表示を確認した。投稿・予約・返信・引用・再投稿は行っていない。
