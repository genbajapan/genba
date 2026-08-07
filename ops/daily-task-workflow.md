# デイリータスク・ワークフロー

最終更新: 2026-08-07

「デイリータスク」という指示を受けた場合に実行する、拡張版の運用ワークフロー。`ops/daily-workflow.md`(日々の求人差分更新)とは別に、企業追加・全社更新・X下書き・SEO/AEO点検をまとめて実行する回として使う。

このファイルへ事業ルールを複製しない。矛盾する場合は`PROJECT_RULES.md`および`docs/09-pivot-business-plan.md`を優先する。

## 0. 開始確認

`ops/daily-workflow.md`の0章と同様に、`PROJECT_RULES.md`・`ops/job-publication-and-sponsor-policy.md`・`ops/guardrails.md`を読み、`git status --short`で他の作業と競合しないか確認してから始める。

## 1. 新規企業を3社追加する

- 選定基準は`docs/09-pivot-business-plan.md`5.1に従う。知名度ではなく「日本進出済みだが日本語情報が乏しい」ことを優先する
- 初期の追加分は、ある程度名前を聞いたことがある知名度の企業から始め、実施回を重ねるごとに、より知名度の低いニッチな企業へ選定範囲を広げていく(2026-08-07 Jio指示)
- 既存の登録企業とカテゴリ・業界が偏りすぎないよう配慮する
- 各社について、国内(OpenWork・OpenMoney・日本語ニュース・日本法人プレスリリース)、海外(英語ニュース・IR資料・決算資料)、LinkedIn(現従業員・カントリーマネージャー等の異動)、公式採用ページの実求人を横断して徹底的に調査する。手を抜かず、Genbaが読者に届けたい「解像度の高さ」を満たす
- `lib/company-public-intelligence.ts`の`CompanyPublicIntelligence`型に沿って、既存11社(Salesforce/Datadog/ServiceNow/Snowflake/MongoDB/Braze/CrowdStrike/HubSpot/Okta/Zendesk/UiPath)と同じ深さで全フィールドを埋める(`marketStatus`、`sellingPlaybook`、`facts`、5件の`hypotheses`、`cultureNotes`、`customerProof`、`externalSignals`、`roleLens`、`leadership`、`companyStats`、`salesAppeal`、`interviewPrep`、`solutions`、`fitTags`、`comparisonMap`、`sources`)
- `lib/market-data.ts`に会社情報と、実在が確認できた求人だけを追加する。求人詳細が取得できない場合は無理に件数を揃えない
- 事実確認できない情報を補完・推測・創作しない

## 2. 既存企業ページを全社更新する

- 登録済み全社の公式採用ページで、求人の新規・変更・終了を確認する
- 上場企業は株価・時価総額・52週レンジ・アナリスト評価を再取得し、`marketStatus`を更新する(取得日を必ず更新する)
- 非上場企業はIPO見通し・オーナーシップ状況に変化がないか確認する
- 変更がない項目は`researchedAt`等の確認日だけ更新し、内容を書き換えない

## 3. X下書きを3本作成する

- `ops/x-content-strategy.md`のトピック・トーン・優先基準に従う
- 直近の下書き・投稿履歴と重複しないトピックを選ぶ
- `content/x/drafts/`へ保存し、明示依頼がなければ投稿しない

## 4. SEO/AEOの最適化状況を点検する

- 着手前に、実行時点の最新のSEO(検索エンジン最適化)・AEO(AI検索・回答エンジン最適化)のベストプラクティスを調べる。ルールは時間とともに変わるため、固定チェックリストだけに頼らない
- 確認する観点の例:
  - 各ページのtitle・meta description・canonical・OGP・構造化データ(JSON-LD)
  - `/llms.txt`(`app/llms.txt/route.ts`で動的生成)・`/robots.txt`・`/sitemap.xml`が最新のページ構成を反映しているか
  - 見出し構造(h1/h2)や、AI回答エンジンに引用されやすいQ&A形式のコンテンツ設計
  - 併願候補・比較表など内部リンクの機能状況
  - 画像のalt属性、明らかな表示速度の問題
- 最適化できていない箇所は修正する。サイト構造の大きな変更が必要な場合は、実施前にJioへ報告してから進める

## 5. 検証・報告

- `npm run check`を実行する
- 追加した企業、更新した企業ページ、作成したX下書き、SEO/AEOの修正内容を簡潔に報告する
- push・公開は、その回の依頼で明示承認がある場合だけ行う(`PROJECT_RULES.md`7章)
