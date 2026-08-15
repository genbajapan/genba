import Container from "@/components/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "プライバシーポリシー", description: "Genbaにおける個人情報の取扱い。", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">PRIVACY</p>
          <h1>プライバシーポリシー</h1>
          <p className="page-lead">Genbaが取得する情報と利用目的を明示します。</p>
        </Container>
      </section>
      <section className="content-section">
        <Container>
          <div className="prose-genba privacy-policy">
            <h2>取得する情報</h2>
            <p>ニュースレター登録時にメールアドレスを取得します。問い合わせ時には、利用者がメール本文またはフォームへ入力した会社名、氏名、連絡先、問い合わせ内容を取得する場合があります。</p>
            <h2>利用目的</h2>
            <ul><li>Genbaのメール配信と購読管理</li><li>問い合わせ、訂正依頼への対応</li><li>個人を特定しない集計値による媒体改善</li></ul>
            <h2>ニュースレター配信事業者</h2>
            <p>ニュースレターの登録、確認、配信、解除、開封・クリック集計にはKitを利用します。登録されたメールアドレスは配信に必要な範囲で同サービスへ送信されます。取扱いの詳細は<a href="https://kit.com/privacy" target="_blank" rel="noreferrer">Kitのプライバシーポリシー</a>をご確認ください。</p>
            <h2>アクセス解析</h2>
            <p>Genbaは、サイトの利用状況を把握し媒体を改善するため、Google Analytics 4を利用します。GoogleはCookie等を使用し、閲覧ページ、流入元、端末・ブラウザ情報、おおよその地域、サイト内での操作などを収集する場合があります。Genbaは集計結果を個人を特定しない媒体改善に利用します。Googleによる情報の取扱いは<a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noreferrer">Googleプライバシーポリシー</a>をご確認ください。</p>
            <p>Google Analyticsによる計測を望まない場合は、<a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noreferrer">Google Analyticsオプトアウト アドオン</a>等を利用できます。</p>
            <h2>第三者提供</h2>
            <p>法令に基づく場合を除き、本人の同意なく個人情報をスポンサー、採用企業、採用支援会社その他の第三者へ販売・提供しません。スポンサーへ提供する場合は、個人を特定できない集計値に限定します。</p>
            <h2>配信停止・削除</h2>
            <p>各メール末尾の配信停止リンクからいつでも解除できます。登録情報の削除を希望する場合は、<a href="mailto:js@genbajapan.com?subject=Genba%20%E7%99%BB%E9%8C%B2%E6%83%85%E5%A0%B1%E3%81%AE%E5%89%8A%E9%99%A4">js@genbajapan.com</a>へご連絡ください。</p>
            <h2>安全管理</h2>
            <p>取得情報へのアクセスを運営上必要な範囲に限定し、利用する外部サービスの認証・権限設定を適切に管理します。</p>
            <h2>改定</h2>
            <p>取扱内容または利用サービスを変更した場合は、本ページを更新します。</p>
            <p className="source-note">制定日：2026年8月11日　改定日：2026年8月15日</p>
          </div>
        </Container>
      </section>
    </>
  );
}
