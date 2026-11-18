# X下書き: Boomi 1社深掘り

米国発。Boomiを取り上げる理由は、今では当たり前に見えるクラウド連携を、まだ企業向け連携ソフトが100社ほど乱立していた2000年に始めた会社だからです。

始まりはペンシルベニア州のピザ店の2階。創業者Rick Nucciは、アプリ同士をつなぐたびに高価な専用開発が必要な世界で、ブラウザーから連携を設計し、クリックで配備できる仕組みを構想しました。これが後のクラウド型連携基盤AtomSphereにつながります。

現在は、アプリ、データ、API、業務自動化、AIエージェントの設計と統制を一つの基盤で扱い、世界3万社超・800社超のパートナーが利用。顧客数で見ると、Datadogの約3万3,500社、Nutanixの3万2,360社と近い規模感です。ただし各社の顧客定義と契約単価は異なります。

「AWSやMicrosoftの連携サービスで十分では？」と思いますよね。単一クラウドに寄せるなら合理的です。ただ大企業では、古い基幹系、複数のSaaS、買収した会社の仕組みが同時に残ります。Boomiは、その分断をローコードでつなぎ、APIとデータの統制まで共通化するところで勝負しています。

AI時代の優位も、AI機能を増やしたことだけではありません。3万社の既存顧客、30万超の接続、企業の本番業務に埋め込まれた連携、権限と監査の導線が土台です。基盤モデルは連携コードを書けても、どのAIエージェントに何のデータ操作を許すかを、既存システムごと継続運用する責任までは代替しにくい。一方、クラウド各社やMuleSoft、Workatoとの競争は反証です。

日本のJAL事例では、約200のシステムと約2,500の連携を、業務領域ごとに分かれた3基盤から再設計。開発期間の短縮、障害影響範囲の縮小、運用効率の向上を公表しています。販売元事例で、Boomi単独の効果を独立検証した数字ではありません。

今日時点での日本向け公式求人は0件。Genbaに保存していた営業2件は公式Greenhouse APIで終了を確認しました。日本法人と国内顧客はありますが、次の採用再開を待つ状態です。

▪️Boomiの事業構造、日本組織、応募前の確認点
https://genbajapan.com/companies/boomi?utm_source=x&utm_medium=organic_social&utm_campaign=20261118_boomi&utm_content=post_01

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-11-18
ステータス: ローカル下書き・X未投稿ドラフト保存未完了（Macロック）・未投稿・未予約

## 事実確認メモ

- 冒頭表記: `米国発`。会社公式は、ペンシルベニア州コンショホッケンのピザ店2階で始まった創業史を掲載。創業者インタビューは2000年3月の創業と、クラウド管理型の連携構想を説明。
  - https://boomi.com/blog/boomi-culture-story/
  - https://boomi.com/ja/blog/five-minutes-with-rick-nucci/
- 現在の事業・規模: 2026年2月の会社公式発表で3万社超、800社超のパートナー、9万超の本番AIエージェントを公表。公式採用ページは30万のアプリケーション接続を表示。
  - https://boomi.com/resources/resources-library/boomi-market-momentum-enterprises-standardize-ai-activation-platform/
  - https://boomi.com/company/careers/
- 規模比較: Boomi 3万社超、Datadog 3万3,500社（2026年9月末）、Nutanix 3万2,360社（2026年7月末）を顧客数で比較。製品範囲、顧客定義、契約単価が異なるため概算の規模感に限定。
  - https://boomi.com/resources/resources-library/boomi-market-momentum-enterprises-standardize-ai-activation-platform/
  - https://investors.datadoghq.com/static-files/529287a4-12d7-4a03-93be-d76b63a0bd44
  - https://ir.nutanix.com/static-files/b6fe7389-d7ec-479d-b67b-78f14be93eae
- AI時代の勝ち筋: 連携、自動化、API・MCP管理、データ管理、AIエージェントの設計・統制を一つの基盤で扱う公式説明を根拠に、既存業務導線・権限・監査・配布基盤の優位を編集解釈した。
  - https://boomi.com/resources/resources-library/boomi-acquires-elementary/
- 顧客事例: JALが約200システム・約2,500連携、業務領域別の3基盤を再設計し、開発期間短縮、障害影響範囲の縮小、運用効率向上を公表。Boomi作成事例で独立検証ではない。
  - https://boomi.com/ja/customer/JAL/
- 日本求人: 2026-11-18の公式採用一覧は32件で日本勤務地0件。保存中だった求人ID `6147718004` と `6008805004` はGreenhouse公式APIでともに404 `Job not found`。サイトの既存2件は対話実行で企業説明・分析と同時修正が必要。
  - https://boomi.com/company/careers/
  - https://boards-api.greenhouse.io/v1/boards/boomi/jobs/6147718004?content=true
  - https://boards-api.greenhouse.io/v1/boards/boomi/jobs/6008805004?content=true
- Genba企業ページ: 2026-11-18にHTTP 200とUTM保持を確認。
- 外部操作: 2026-11-18 10:42 JST、Macロックのため`@chosenshi08`のX未投稿ドラフトを確認・保存できず、回避操作は行わなかった。投稿・予約・返信・引用・再投稿は行っていない。
