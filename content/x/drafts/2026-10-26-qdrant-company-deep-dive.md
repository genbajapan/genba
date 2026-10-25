# X下書き: Qdrant 1社深掘り

ドイツ発。Qdrantを取り上げる理由は、生成AIが答えを作る前に必要な「自社データから意味の近い情報を、速く正確に探す」部分を担う会社だからです。

始まりは、創業者Andrey Vasnetsovが既存の検索ライブラリでは本番要件を満たせず、ベクトル検索エンジンを一から作ったこと。André Zayarniと2021年にベルリンで会社として立ち上げました。

現在はオープンソースのベクトル検索エンジン、管理型クラウド、顧客環境で動かすHybrid Cloud、推論機能を提供。会社公式は100人超、20カ国超、累計2.5億ダウンロード超を公表しています。規模感を置くと、Dropboxは2024年末2,204人、Atlassianは2025年6月末13,813人。Qdrantは正確な人数が非公開なので比率は出せず、集計時点、雇用区分、売上、製品力の比較でもありません。

「大規模言語モデルや既存データベースへ検索機能が入れば、専用製品は不要では？」は正しい反論です。Qdrantの勝ち筋は、独自データ、属性による絞り込み、検索速度、配備場所、本番運用を同じ導線で持つこと。基盤モデルだけでは、顧客固有のデータ更新、権限、遅延、可用性を運用できません。一方、Pinecone、Weaviate、Milvus、Elasticsearch、PostgreSQL拡張との機能・費用・運用差は厳しく問われます。

海外事例ではBayerが、11.6万人の従業員向けAI HubでQdrant Hybrid Cloudを採用。会社事例は8.3万件の成果物、月4.9万検索、7,500利用者と、AI基盤全体で約20%の効率向上を紹介しています。20%をQdrant単独の効果とは扱えません。

今日時点での日本向け公式求人は2件。Senior Technical Success ManagerとSenior Solutions Engineerが、APAC顧客の技術評価、本番設計、運用、利用拡大を担います。日本も候補勤務地ですが、日本法人、国内拠点、雇用主体、日本専任かは未確認です。

▪️QdrantのAPAC技術2求人、日本進出の兆し、Bayer事例

https://genbajapan.com/companies/qdrant?utm_source=x&utm_medium=organic_social&utm_campaign=20261026_qdrant&utm_content=post_01

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-10-26
ステータス: ローカル確定稿・X保存不能（Macロック）・未投稿・未予約

## 事実確認メモ

- 創業地・始まり: ドイツ発。Andrey Vasnetsovが既存ライブラリの限界から本番向けベクトル検索を作り、André Zayarniと2021年にベルリンで会社を設立
  - https://qdrant.tech/about-us/
- 現在の事業・規模: オープンソース、Managed Cloud、Hybrid Cloud、Enterprise、推論機能。会社公式は100人超、20カ国超、2.5億ダウンロード超、GitHub 2.9万スター
  - https://qdrant.tech/about-us/
  - https://qdrant.tech/cloud/
- 規模比較: Qdrantは2026-10-26確認の会社公式100人超で上限非公開。Dropboxは2024-12-31時点2,204人、Atlassianは2025-06-30時点13,813人。集計時点、雇用区分、売上、製品力、日本人数は比較していない
  - https://qdrant.tech/about-us/
  - https://www.sec.gov/Archives/edgar/data/1467623/000146762325000011/dbx-20241231.htm
  - https://www.sec.gov/Archives/edgar/data/1650372/000165037225000036/team-20250630.htm
- AI時代の勝ち筋は、独自データ、属性絞り込み、遅延、配備、運用を同じ導線で持つ点から読んだ編集解釈。既存データ基盤への統合と競合製品を反証とした
  - https://qdrant.tech/documentation/overview/
- 導入事例: Bayerの数値はAI Hub全体。約20%の効率向上をQdrant単独へ帰属しない
  - https://qdrant.tech/customers/bayer/
- 資金調達: 2026-03-12にAVP主導のSeries B 5,000万ドル。Bosch Ventures、Unusual Ventures、42CAP等が参加
  - https://qdrant.tech/blog/series-b/
- 日本求人: 2026-10-26に公式求人を確認。日本を勤務地に含むAPAC向けSenior Technical Success ManagerとSenior Solutions Engineerの2件。日本法人・国内拠点・雇用主体は未確認
  - https://jobs.ashbyhq.com/qdrant.tech/43984944-5877-4611-b970-39519591b341
  - https://jobs.ashbyhq.com/qdrant.tech/512b651a-3a52-4662-92c0-bcf84c0786af
- Genba掲載確認: 本番公開工程で主要URLを確認
  - https://genbajapan.com/companies/qdrant
