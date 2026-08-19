# 日本法人未確認・日本採用シグナル全社監査

実施日: 2026-08-19

## 監査範囲

- 公開対象122社を、企業データ、公式求人、終了求人履歴、日本法人・国内拠点の確認結果で突合した
- 公開中300求人・288公式URLをHTTP確認し、283 URLの正常応答、2件の404、2件のアクセス制限、1件の取得不能を確認した
- 求人URLが200でも、検索結果のcacheだけで現行扱いせず、登録済みATS情報と職種・担当市場を照合した
- gBizINFOで紐づく国内法人を確認できた企業、または企業公式情報・求人で常設officeを確認できた企業は、住所や設立年の一部が非公開でも進出準備カテゴリへ移していない
- 日本市場での販売、partner、顧客、Remote teamがあっても、日本法人・常設拠点を確認できない場合は、求人シグナルと法人・拠点の状態を分けて判定した

## 日本法人未確認・日本採用あり

日本法人・常設拠点を確認できず、日本市場を担当する現行公式求人を確認した16社。日本で働く担当者がいる場合を含み、雇用主体が本国法人・EORなどのどれかは公開情報から確定していない。

|企業|確認した現行シグナル|公式求人例|
|---|---|---|
|Glean|日本カントリーマネージャーと日本組織を公式発表。Strategic AE、Enterprise AE、SDRを採用中|[公式求人](https://job-boards.greenhouse.io/gleanwork/jobs/4721393005)・[日本責任者の公式発表](https://prtimes.jp/main/html/rd/p/000000004.000179911.html)|
|Cambly|日本・中国・韓国を担当し東京を勤務地候補とするSales Director, APAC|[公式求人](https://jobs.ashbyhq.com/Cambly/96f0b293-0cdc-4d96-9b36-507c787f2b34)|
|Censys|Account Executive、Solutions Engineer - Japan|[公式求人](https://job-boards.greenhouse.io/censys/jobs/8558569002)|
|Lighthouse|Business Development Manager（Account Executive）- Japan|[公式求人](https://job-boards.eu.greenhouse.io/lighthouse/jobs/4500582101)|
|Replit|Founding Account Executive、Growth Lead - Japan|[公式求人](https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44)|
|Cohere|Account Executive、Partner Development、FDE - Japan|[公式求人](https://jobs.ashbyhq.com/cohere/85e808ab-ee45-4944-bedc-832bf933d0b6)|
|Dragos|Senior Enterprise AE、Advisory Solutions Architect - Japan|[公式求人](https://job-boards.greenhouse.io/dragos/jobs/5254855008)|
|Cribl|Sales Director、Enterprise Sales、Partner Business Manager - Japan|[公式求人](https://cribl.io/job-detail/?gh_jid=6098546004)|
|Hightouch|Enterprise Account Executive, APAC（Japan）|[公式求人](https://job-boards.greenhouse.io/hightouch/jobs/5836057004)|
|Cursor|Strategic AE、Field Engineering、FDE、Solutions Architect - Japan|[公式求人](https://cursor.com/careers/strategic-enterprise-account-executive-japan)|
|Zadara|TokyoのSenior Technical Account Manager|[公式求人](https://jobs.lever.co/Zadara/f913dc3e-76dd-45eb-89a8-bda865b10ea6)|
|Abnormal AI|Enterprise Account Executive - Japan|[公式求人](https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003)|
|Neural Concept|Sales Director、TAM、Solution Engineer、Application Engineer - Japan|[公式求人](https://jobs.ashbyhq.com/neuralconcept/9b018838-aad4-48a6-8d6b-f2a544e0fbed)|
|Patch|Enterprise Account Executive, APAC - Tokyo|[公式求人](https://jobs.ashbyhq.com/patch.io/1d73e679-d6f7-42c1-9545-74c31e97e7da)|
|Mambu|JP-RemoteのSenior Account Executive（Channel）|[公式求人](https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job)|
|Zilliz|Enterprise AE、Founding Field Engineer - Japan|[公式求人](https://jobs.lever.co/zilliz/8144e236-2836-4980-92cf-b6501ce0f81c)|

## 日本法人未確認・過去に日本採用

過去に日本市場担当求人を公式観測したが、現行求人が終了し、日本法人・常設拠点も確認できない企業。

|企業|過去の観測|2026-08-19の状態|
|---|---|---|
|Lakera|Enterprise Account Executive, Japan（Tokyo）|[公式ATS API](https://api.ashbyhq.com/posting-api/job-board/lakera.ai)は現行求人0件|

## 新カテゴリへ移さなかった主な境界事例

- Cognitionは当初このカテゴリへ誤分類したが、[Gビズインフォ](https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010003050587)のCognition AI Japan合同会社と[会社発表](https://prtimes.jp/main/html/rd/p/000000001.000181315.html)の日本法人設立を再確認し、日本進出済みへ訂正した
- ElevenLabs、Amplitude、Halcyon、Grafana Labs、Fivetran、Shopify等は、国内法人を確認できるため対象外
- iDeals、MarqVision、Mendix、Sierra、Sonar、WatchGuard等は、公式情報または求人で国内office・onsite拠点を確認できるため対象外
- dbt Labsの現行求人は統合先Fivetranの日本法人求人として掲載されているため、dbt Labs単独の進出準備企業へは移さない
- Sysdig、Scandit、Gurobi等は現行求人が0件でも国内法人を確認できるため、「進出シグナルあり」ではなく進出済み企業の求人なしとして扱う
- 日本市場に触れる求人でも、単に日本から応募可能なglobal roleで、日本territory・日本顧客・日本市場の責任を持たないものは対象外

## 日本担当者と日本法人を分けた再確認

- Gleanは会社発表で小澤正治氏の日本カントリーマネージャー就任と日本組織構築を確認した。公開プロフィールでも日本のGTM・Marketing・Sales担当者が複数確認できる。日本teamは存在するが、日本法人の登記・公式な常設office・各人の雇用主体は確認できない
- CohereはHyonju Cho氏の公開プロフィールでCountry Manager, Japan・東京所在を確認した。公式Careersの拠点一覧に東京はなく、日本法人・雇用主体は確認できない
- Cursorは公式CareersでCountry Leader - Japanを含む日本求人を確認したが、現任者、日本法人、公式な東京officeは確認できない
- 日本在住・日本担当者の存在は、日本法人での雇用を意味しない。本国法人との直接雇用、EOR等の可能性を区別し、公開根拠がない雇用主体は断定しない

## 求人鮮度の追加差分

- DocuSign `Field Marketing Specialist` は公式URLの404を確認し、募集終了へ変更
- Cursor `Director, Channel & Partners` は公式URLの404を確認し、募集終了へ変更
- Rubrikの2求人は403、AppsFlyerの1求人は取得不能のため、現行データを推測で変更せず継続確認とした

## 判定上の留保

- 「法人・拠点未確認」は、存在しないことの証明ではなく、2026-08-19時点の企業公式情報と公的法人検索で確認できないという意味
- 日本法人が未確認でも日本在住・日本担当の社員が存在し得る。本国法人との直接雇用、EOR等の可能性はあるが、雇用主体は公開根拠がない限り断定しない
- 過去求人はGenbaが公式URLを観測・保存した履歴に限定する。Genbaの観測開始前に終了した未保存求人まで網羅したとは断定しない
- 現行求人の存在は数年以内の本格進出を支持する材料だが、進出時期、法人設立、採用計画を確定するものではない
