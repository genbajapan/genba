import Link from "next/link";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";

export default function NewsletterCTA({
  compact = false,
  inlineForm = false,
  location = "newsletter_card",
  companySlug,
}: {
  compact?: boolean;
  inlineForm?: boolean;
  location?: string;
  companySlug?: string;
}) {
  return (
    <section className={`${compact ? "newsletter-card newsletter-card-compact" : "newsletter-card"}${inlineForm ? " newsletter-card-inline" : ""}`}>
      <div>
        <p className="eyebrow eyebrow-light">GENBA NEWSLETTER</p>
        <h2><span>次に知るべき小中規模外資</span><span>5社を、週3回無料で受け取る</span></h2>
        <p>求人の有無だけでなく、仕事として面白い理由と応募前の確認点まで3分で読めます。</p>
      </div>
      {inlineForm ? (
        <div className="newsletter-card-form">
          <NewsletterSignupForm sourceLocation={location} companySlug={companySlug} compact />
        </div>
      ) : (
        <Link
          href="/newsletter"
          className="button button-light"
          data-analytics-event="newsletter_cta_click"
          data-analytics-location={location}
        >
          無料で受け取る
        </Link>
      )}
    </section>
  );
}
