# X下書き: 今週動いた外資 Zilliz

今週気になった外資は、求人数で言うとたった2件。

でも組み合わせがおもろいです。AI向けベクトルDBのZillizが東京で、

・Enterprise Account Executive
・Founding Field Engineer

を同時募集中。どちらもTokyo、hybridです。

Zillizは、「ベクトルDB」という言葉すら一般的ではなかった時代に、画像検索の相談から「本質はGPUではなくvectorでは？」と気づき、open-sourceのMilvusを作った会社。

MilvusはGitHub 4.5万star超。Zilliz公式では1万超の企業・AI startupを支援し、Zilliz Cloud顧客の約8割が元Milvus userだと説明しています。

つまり、まず開発者がOSSを使い、本番運用で安定性、拡張性、コスト、セキュリティが課題になった時にCloudへ広げる、OSS起点のland-and-expand型。

今回の2求人が興味深いのは、「日本で売る人」と「日本で本番稼働させる人」を同時に作ろうとしていること。

AEはoutbound、MEDDIC、business impactの定量化、交渉、ACV/TCV forecast、expansionまで持つfull-cycle role。

Founding Field EngineerはEngineering側に所属し、PoC、onboarding、go-live、本番障害、post-sales、日本顧客の声をProductへ戻すところまで担います。

これ、単なる営業拡大より、日本で「PoCは動いたけど本番化できない」を潰すlocal teamを作る動きに見えます。

転職目線で勉強になるのは、early-stage外資はAEの人数だけでなく、「顧客獲得」と「本番稼働」の職種がセットで出ているかを見ること。

データベースやdistributed systemsの技術を、顧客のproduction AIまで持っていきたい人にはかなり面白そうです。

一方、日本法人、常設office、Japan責任者、国内named customerは8月20日時点で未確認。次はMarketing、CS、Supportなど周辺職種が増えるかを見たいです。

Zillizの日本求人と企業研究
https://genbajapan.com/companies/zilliz?utm_source=x&utm_medium=organic_social&utm_campaign=20260820_weekly_moved_zilliz&utm_content=post_01

#外資IT #転職

シリーズ: 今週動いた外資
確認日: 2026-08-20
ステータス: 下書き・X保存待ち・未投稿・未予約

## 事実確認メモ

- 今週の変化: Genbaが2026-08-14にZilliz公式LeverでEnterprise Account Executive - JapanとFounding Field Engineer, Japanを同時に初回確認。2026-08-20にも両方の応募ページが公開中。「同時募集」はGenbaの確認タイミングであり、求人の公開日が同日だったとは断定しない。
  - https://jobs.lever.co/zilliz
- Enterprise Account Executive: Tokyo / Full-Time / Hybrid。outbound、pipeline構築、MEDDIC、business impact定量化、full-cycle ownership、交渉、ACV/TCV forecast、existing customer growthを担当。
  - https://jobs.lever.co/zilliz/8144e236-2836-4980-92cf-b6501ce0f81c
- Founding Field Engineer: Tokyo / Full-Time / Hybrid。Engineering組織に所属するcustomer-facing engineer。technical discovery、PoC、onboarding、go-live readiness、production adoption、post-sales technical engagement、production issue、Japan-specific knowledge、Product・Engineeringへのfeedbackを担当。Japan founding teamの一員と明記。
  - https://jobs.lever.co/zilliz/9f2e2541-9945-47a9-bca7-6d123128ca50
- 製品・規模: Founding Field Engineer求人でMilvus 4.5万GitHub stars超、100-billion-scale vector search、1万超のenterprise・AI-native startupを記載。すべてZillizの自社記載であり、有料契約社数、ARR、売上とは同一ではない。
  - https://jobs.lever.co/zilliz/9f2e2541-9945-47a9-bca7-6d123128ca50
- OSS起点のGTM: Zilliz公式ブログで、画像検索のuser feedbackからvectorをより本質的な抽象化と捉えMilvusを作った経緯と、約80%のZilliz Cloud顧客がopen-source Milvus userとして始まったとの説明を確認。数値は公式インタビュ内の自社説明で、独立監査なし。
  - https://zilliz.com/blog/how-zilliz-saw-the-future-of-vector-databases-and-built-for-production
- 顧客価値の実例: FilevineのZilliz公式顧客事例で300億超のvector、数億documentを処理し、弁護士の情報のconsume・digest・identifyにかかる時間の60〜80%を削減と説明。vendor-authored caseかつ顧客発言で、日本での成果ではない。
  - https://zilliz.com/customers/filevine
- 日本の現在地: 日本語公式site、Tokyo cloud region、2つのJapan求人は確認。日本法人、常設office、Japan責任者、国内named customerの定量成果、日本売上、team人数は公開情報で確認できず。「PoCは動いたけど本番化できないを潰すlocal team」は2求人の責任範囲から導いたGenba分析。
- Genba導線: 2026-08-20にUTM付きURLのHTTP 200とパラメータ保持を確認。
