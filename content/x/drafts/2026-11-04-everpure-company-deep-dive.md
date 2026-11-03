# X下書き: Pure StorageからEverpureへ

米国発。今日は、Pure Storageから社名を変えたばかりのEverpureをご紹介します！有名なストレージ会社ですが、日本法人はまだ国内人数を公開しておらず、今も東京で10件を採用中なので取り上げます。

創業者のJohn “Coz” Colgrove氏は、Veritasで20年にわたりデータ保存技術を作った後、企業が半導体ストレージを受け入れ始めた変化を見て2009年に創業。まだハードディスクが主流だった企業向け保存装置を、最初からフラッシュ前提で作り直しました。

現在は、速い保存装置を売るだけではありません。FlashArrayとFlashBladeで企業データを保存し、Evergreenで装置を止めずに更新し、契約型の運用と復旧まで扱います。2026年、Pure StorageからEverpureへ社名を変え、データを止めず、古くしない運用を会社名にも反映しました。

直近通期売上は37億ドル、約5,800億円。NetAppの69.25億ドルのおよそ半分で、Dropboxの25.21億ドルの約1.5倍です。Dropboxとは事業が違うので、あくまで会社規模を掴む比較です。

「AWSやAzureに置けば専用ストレージはいらないのでは？」という反論は妥当です。さらにDell、NetApp、HPEは販売網も既存顧客も強い。Everpureの勝ち筋は、AIや基幹業務でデータ量が増えても、顧客が装置の総入れ替えと停止を繰り返さず、同じ運用を更新し続けられること。その運用負荷と停止時間まで含めて安くできなければ、大手やクラウドに負けます。

AI時代の優位も、AI機能そのものではありません。企業の重要データがどこにあり、誰が触れ、どう復旧し、既存システムを止めずに更新するかという導線と信頼です。汎用AIは回答を作れても、病院、金融、公共インフラの保存装置を無停止で入れ替え、復旧責任まで引き受けることはできません。

国内ではデンソーITソリューションズが、毎年数百TB規模で増えるデータ基盤へFlashArrayとEvergreenを導入し、性能と容量効率を高めながら、老朽化に伴う更新作業を大幅に減らしたと公式事例で説明しています。

今日時点での日本向け公式求人は10件。営業、パートナー営業、営業責任者、プリセールス、技術設計、更新契約まで東京で採用中です。Genbaではまず、公共インフラを担当するAccount Executiveの役割と確認点を整理しました。

▪️Everpureの企業研究と日本求人
https://genbajapan.com/companies/everpure?utm_source=x&utm_medium=organic_social&utm_campaign=20261104_everpure&utm_content=post_02

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-11-04
ステータス: ローカル下書き・X未保存・未投稿・未予約

## 事実確認メモ

- 冒頭表記: `米国発`。2009年に米国でPure Storageとして創業。2026年にEverpureへブランド変更したが、日本法人の登記名は今回確認した公開情報ではピュア・ストレージ・ジャパン株式会社。
  - https://www.purestorage.com/content/dam/pdf/en/bios/john-colgrove.pdf
  - https://blog.purestorage.com/news-events/pure-storage-is-now-everpure/
- 創業背景: 公式創業者略歴は、John Colgrove氏がVeritasで20年勤務後、Sutter Hill Venturesで企業の半導体ストレージ受容を観察し、2009年に共同創業したと説明。本文は要約。
  - https://www.purestorage.com/content/dam/pdf/en/bios/john-colgrove.pdf
- 現在の事業とAI時代の勝ち筋: FlashArray、FlashBlade、Evergreen、DirectFlash、クラウド管理を公式製品・会社資料で確認。無停止更新・復旧責任・既存データ導線が汎用AI単体では置換しにくいという部分は編集上の解釈。
  - https://www.everpuredata.com/jp/products/storage/flasharray.html
  - https://www.everpuredata.com/jp/products/storage/flashblade.html
  - https://www.everpuredata.com/jp/products/evergreen.html
- 売上規模: Everpure FY2026売上37億ドル、NetApp FY2026売上69.25億ドル、Dropbox FY2025売上25.21億ドル。Everpure÷NetAppは約53%、Everpure÷Dropboxは約147%。決算期、製品構成、事業範囲が異なるため会社規模の方向感に限る。円換算は1ドル157円で約5,809億円。
  - https://investor.purestorage.com/news-and-events/financial-news/press-release-details/2026/Pure-Storage-Announces-Fourth-Quarter-and-Full-Year-Fiscal-2026-Financial-Results/default.aspx
  - https://investors.netapp.com/news/news-details/2026/NetApp-Reports-Fourth-Quarter-and-Fiscal-Year-2026-Results/default.aspx
  - https://investors.dropbox.com/news-releases/news-release-details/dropbox-announces-fourth-quarter-and-fiscal-2025-results
- 国内事例: デンソーITソリューションズのデータ増加量と更新作業削減はEverpure作成の顧客事例。販売元の説明であり、第三者監査値や全顧客への再現を保証しない。
  - https://www.purestorage.com/content/dam/pdf/ja-jp/case-studies/cs-denso-it-solutions-ja-jp.pdf
- 日本求人: 2026-11-04にGreenhouse公式APIでTokyo, Japanの10件を確認。件数は職種・勤務地フィルター時点のスナップショット。Genbaは今回Account Executive, Emerging (SocialInfra accounts), Japanの1件を掲載。
  - https://job-boards.greenhouse.io/purestorage
  - https://boards-api.greenhouse.io/v1/boards/purestorage/jobs?content=true
- 会社名の留保: 採用基盤と一部公式URLは旧名`purestorage`を継続使用。求人の実在確認に旧ドメイン・board名を使うが、公開表示は新ブランドEverpureを優先した。
- 外部操作: `@chosenshi08`の未投稿ドラフトへ本文部分だけを1本として保存する。投稿・予約・返信・引用・再投稿は行わない。
