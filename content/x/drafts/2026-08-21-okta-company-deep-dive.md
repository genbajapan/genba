# X下書き: Oktaは「ログインを各社が自作する時代」から始まった

Okta、SSOの大手ですが、始まりが結構おもろいです。

2009年、SaaSが増え始めた一方で、企業は社員や顧客のアクセス管理を自社で組むか、オンプレミスのIdentity製品を運用していました。

アプリがcloudへ移るほど、誰が・何へ・どの条件で入れるかを各社が個別に作るのは重くなる。そこでOktaは、特定のアプリに属さない独立したIdentity基盤をcloudで作りました。

現在は、

・従業員向けのWorkforce Identity
・顧客向けのCustomer Identity（Auth0）

を軸に、認証だけでなく、アクセス制御、Identity Governance、脅威対策まで扱っています。

規模はQ1 FY2027時点で、

・四半期売上7.65億ドル、前年比11%増
・RPO 47.19億ドル、同16%増
・年間契約額10万ドル超の顧客5,180社

さらに2026年1月末時点で顧客は2万社超。

なぜ今も伸びるのか。

Genba分析では、SaaSが1つ増えるたびに新しいIDと権限管理が生まれ、顧客向けappやAI agentまで対象が広がるから。個別systemの裏側に共通基盤として入り、SSOからGovernance、Security、Customer Identityへ利用範囲を広げられる構造も強いです。

J:COMの事例では、4つのcore systemへOktaを導入。認証開発を5〜6カ月から2〜3カ月へ短縮し、月20時間超だった認証運用をほぼゼロにしたと公表しています。

現在の日本向け公式掲載は7件（うちTalent Community 1件）。

・テクニカルアカウントマネージャー（TAM）, Auth0
・Digital Media Specialist
・Field Marketing Specialist
・Director, Sales Development, Japan
・Sales Development Representative - Join our Talent Community
・Account Executive, Auth0
・Account Executive, Okta

「ログインを作る会社」ではなく、cloudとAIで増え続ける人・顧客・systemの信頼をどう管理するかを売る会社。創業時の問題が、むしろ大きくなり続けているのがOktaの面白さです。

Oktaの企業研究と日本求人
https://genbajapan.com/companies/okta?utm_source=x&utm_medium=organic_social&utm_campaign=20260821_okta&utm_content=post_01

#外資IT #転職 #Genba企業研究

シリーズ: 1社深掘り
確認日: 2026-08-21
ステータス: ローカル下書き・未投稿・未予約

## 事実確認メモ

- 創業時の問題設定: Okta公式。2009年、企業はaccess managementに苦労し、identity機能を自社製品へ組み込むか、オンプレミスsoftwareを運用していたとの説明を確認。本文は創業者の実名を出さず要約した。
  - https://www.okta.com/en-nl/blog/company-and-culture/okta-unveils-bold-brand-evolution/
- 事業: Okta公式会社情報でWorkforce IdentityとCustomer Identityを確認。
  - https://www.okta.com/ja-jp/company/
- Q1 FY2027: 売上7.65億ドル（前年同期比11%増）、RPO 47.19億ドル（同16%増）を公式決算発表で確認。
  - https://investor.okta.com/financials/quarterly-results/default.aspx
- 顧客規模: 2026年1月31日時点で2万社超、年間契約額10万ドル超の顧客5,100社をFY2026 Form 10-Kで確認。5,180社は2026年4月30日時点のQ1 FY2027 Form 10-Qで確認。
  - https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm
  - https://www.sec.gov/Archives/edgar/data/1660134/000166013426000051/okta-20260430.htm
- J:COM事例: 対象は4つのcore system。ID・認証開発を5〜6カ月から2〜3カ月へ短縮し、月20時間超の認証運用をほぼゼロにしたとするOkta公式顧客事例。vendor公表値であり、独立検証値ではない。
  - https://www.okta.com/jp/customers/jcom/
- 日本求人: 2026-08-21にOkta Japan公式Greenhouseで7件を確認。Sales Development Representativeは通常求人ではなくTalent Communityであるため、本文でも区別した。
  - https://job-boards.greenhouse.io/oktajp
- 売上とRPO、顧客総数と年間契約額10万ドル超の顧客数は別指標。本文では混同していない。
- Genba掲載確認: 2026-08-21に本番企業ページで現在掲載中であることを確認。
  - https://genbajapan.com/companies/okta
- Genba導線: 2026-08-21にUTM付きURLで本番ページへ正常到達し、4つのparameter保持を確認。
