# X下書き: WEKA 1社深掘り

イスラエル発。WEKAを取り上げる理由は、生成AIのモデルではなく、GPUがデータ待ちで止まる時間に事業機会を見つけた会社だからです。

創業者たちは2013年末から2014年初め、コンテナ、NVMe、広帯域ネットワークが同時に実用へ向かうと読み、分散データ基盤を一から設計しました。最初のGPU顧客は2017〜18年。生成AIブームより前に、自動運転や音声認識の学習データを支えました。

現在はAI学習と推論向けのNeuralMeshを中心に、オンプレミスとクラウドに散らばる非構造データを一つの経路でGPUへ届けます。2024年に会社が公表した年間経常収益1億ドル超は、Snowflakeの2019年1月期売上9,670万ドルとCloudflareの2017年売上1億3,490万ドルの間ほど。ただしWEKAは経常収益、比較2社は会計売上で、時点も市場も異なる方向比較です。

「クラウドやNVIDIA、既存ストレージで十分では？」という反論は残ります。WEKAの勝ち筋は、学習、推論、チェックポイント、KVキャッシュを同じデータ経路で動かし、GPUの待ち時間と電力費を減らすこと。特定クラウドに閉じない点が選定理由です。

AI時代の優位も、基盤モデルを持つことではありません。顧客の大規模データ、アクセス権、計算資源の間に入り、学習と推論が繰り返す読み書きを低遅延で支える運用経路です。基盤モデルだけでは各社のデータ配置、権限、復旧、費用を横断して最適化できません。一方、主要クラウドや半導体企業による垂直統合は反証です。

海外事例のLuma AIでは、環境の読み込みと学習開始を従来比40倍に高速化し、H100の利用率を高めたとWEKAが公表しています。販売元事例であり、日本企業での同等成果は未確認です。

今日時点での日本向け公式求人は1件。東京のRegional Sales Managerで、公式求人は「日本初のSales Executive」と明記します。日本法人、常設拠点、雇用主体、国内の技術支援体制は未確認です。

▪️WEKAの事業構造、日本初営業の責任、応募前の確認点
https://genbajapan.com/companies/weka?utm_source=x&utm_medium=organic_social&utm_campaign=20261112_weka&utm_content=post_01

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-11-12
ステータス: ローカル下書き・X未投稿ドラフト保存済み・未投稿・未予約

## 事実確認メモ

- 冒頭表記: `イスラエル発`。公式情報は創業者3人が2013年にWekaIOを創業し、創業期からテルアビブに研究開発拠点とイスラエル法人を置いたことを示す。現在の本社は米国Campbellであり、創業地と現本社を分けた。
  - https://www.weka.io/news/wekaio-eliminates-need-legacy-external-storage-cloud-scale-storage-software
  - https://www.weka.io/company/our-story
- 創業背景: 共同創業者Liran Zvibelが、2013年末〜2014年初めにコンテナ、NVMe、高速ネットワークの変化を見て創業し、2017〜18年の初期GPU顧客を通じてAI用途へ深めた説明を要約。
  - https://www.weka.io/video/why-inference-economics-are-reshaping-neoclouds
  - https://www.weka.io/article/building-bigger-better-the-future-of-ai-starts-here
- 規模: 2024年の会社公表で年間経常収益1億ドル超。Snowflakeの2019年1月期売上9,670万ドル、Cloudflareの2017年売上1億3,490万ドルと方向比較した。経常収益と会計売上、対象時点、市場が異なるため企業価値の同等性は示していない。
  - https://www.weka.io/article/a-strategic-step-forward-for-weka-an-open-letter-from-our-ceo
  - https://www.sec.gov/Archives/edgar/data/1640147/000162828020013010/snowflakes-1.htm
  - https://www.sec.gov/Archives/edgar/data/1477333/000119312519242455/d735023ds1a.htm
- AI時代の勝ち筋: NeuralMesh、学習・推論・KVキャッシュのデータ経路、クラウド横断配置を根拠に、顧客データ・権限・運用へ入る点を編集解釈した。主要クラウド、半導体企業、既存ストレージ企業による垂直統合を反証として残した。
  - https://www.weka.io/
  - https://www.weka.io/wp-content/uploads/files/resources/2025/06/neuralmesh-architecture-weka.pdf
- 顧客事例: Luma AIの環境読み込み・学習開始40倍高速化とH100利用率向上はWEKA公式事例の要約。販売元公表の海外事例であり、日本での再現を断定していない。
  - https://www.weka.io/customers/luma-ai/
- 日本求人・進出: 2026-11-12に東京のRegional Sales Manager 1件を公式Careerで再確認。「日本初のSales Executive」とする求人文を根拠に、日本法人、常設拠点、雇用主体、国内技術支援は未確認として残した。
  - https://www.weka.io/careers?gh_jid=5199234007
- 外部操作: 2026-11-12 10:50 JSTに`@chosenshi08`のX未投稿ドラフトへ保存し、`Your draft was saved.`を確認。投稿・予約・返信・引用・再投稿は行っていない。
