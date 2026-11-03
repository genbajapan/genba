import Container from "@/components/Container";
import type { CompanyStoryPrimerData, CompanyStorySource } from "@/lib/company-story-primer";

function SourceLink({ source }: { source: CompanyStorySource }) {
  return <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>;
}

export default function CompanyStoryPrimer({ story }: { story: CompanyStoryPrimerData }) {
  return (
    <section className="company-story-primer" id="company-story" aria-labelledby="company-story-title">
      <Container>
        <header className="company-story-intro">
          <p className="company-story-eyebrow">{story.eyebrow}</p>
          <h2 id="company-story-title">{story.title}</h2>
          <p>{story.lead}</p>
        </header>

        <div className="company-story-essence" aria-label="ElevenLabsの本質">
          <div>
            <span>一見すると</span>
            <p>{story.essence.shallow}</p>
          </div>
          <span className="company-story-arrow" aria-hidden="true">→</span>
          <div className="company-story-essence-deep">
            <span>本質は</span>
            <p>{story.essence.deep}</p>
          </div>
          <strong>{story.essence.memoryHook}</strong>
        </div>

        <section className="company-story-block company-story-origin" aria-labelledby="company-origin-title">
          <div className="company-story-section-heading">
            <div><span>01</span><p>FOUNDING STORY</p></div>
            <h3 id="company-origin-title">なぜ、この会社が生まれたのか。</h3>
          </div>
          <div className="company-story-timeline">
            {story.origin.map((item, index) => (
              <article key={item.title}>
                <div className="company-story-timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div>
                  <small>{item.marker}</small>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <SourceLink source={item.source} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="company-story-block company-story-products" aria-labelledby="company-products-title">
          <div className="company-story-section-heading">
            <div><span>02</span><p>PRODUCT ESSENCE</p></div>
            <h3 id="company-products-title">3つの製品ではなく、1つの音声基盤を3方向へ届ける。</h3>
          </div>
          <div className="company-product-system" aria-label="音声・言語・会話の基盤モデルを、ElevenCreative、ElevenAPI、ElevenAgentsの3製品群として提供する構造図">
            <div className="company-product-core">
              <span>共通する技術の核</span>
              <strong>音声・言語・会話の基盤モデル</strong>
              <p>声の自然さ、話者らしさ、多言語、低遅延、安全性</p>
            </div>
            <div className="company-product-connector" aria-hidden="true"><i /><i /><i /></div>
            <div className="company-product-lanes">
              {story.productSystem.map((product, index) => (
                <article key={product.name}>
                  <span>0{index + 1} / {product.audience}</span>
                  <h4>{product.name}</h4>
                  <p>{product.job}</p>
                  <strong>{product.outcome}</strong>
                  <SourceLink source={product.source} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-story-block company-story-direction" aria-labelledby="company-direction-title">
          <div className="company-story-section-heading">
            <div><span>03</span><p>WHERE IT IS GOING</p></div>
            <h3 id="company-direction-title">この先、何になろうとしているのか。</h3>
          </div>
          <div className="company-story-direction-grid">
            <article>
              <span className="company-story-evidence-label">公式が示す方向</span>
              <p>{story.direction.official}</p>
              <SourceLink source={story.direction.source} />
            </article>
            <article>
              <span className="company-story-analysis-label">Genbaの見立て</span>
              <p>{story.direction.analysis}</p>
              <small>公開情報からの編集分析であり、会社の公式見解ではありません。</small>
            </article>
          </div>
        </section>

        <section className="company-story-block company-story-japan" aria-labelledby="company-japan-title">
          <div className="company-story-section-heading">
            <div><span>04</span><p>WHY JAPAN MATTERS</p></div>
            <h3 id="company-japan-title">日本では、何が始まっているのか。</h3>
          </div>
          <div className="company-story-japan-grid">
            {story.japan.map((item) => (
              <article key={item.title}>
                <span>{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <SourceLink source={item.source} />
              </article>
            ))}
          </div>
        </section>

        <section className="company-story-block company-story-culture" aria-labelledby="company-culture-title">
          <div className="company-story-section-heading">
            <div><span>05</span><p>CULTURE, WITH EVIDENCE</p></div>
            <h3 id="company-culture-title">「カルチャーが良い」とは書かない。確認できる範囲を分ける。</h3>
          </div>
          <div className="company-culture-evidence-grid">
            <article className="company-culture-verified">
              <span>公開情報で確認できる事実</span>
              <ul>{story.culture.verified.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="company-culture-stated">
              <span>会社が掲げていること</span>
              <ul>{story.culture.stated.map((item) => <li key={item}>{item}</li>)}</ul>
              <small>実態を第三者が検証したものではなく、公式採用ページ上の説明です。</small>
            </article>
            <article className="company-culture-unknown">
              <span>公開情報では分からないこと</span>
              <ul>{story.culture.unknown.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <footer className="company-story-culture-source">
            <SourceLink source={story.culture.source} />
            <time dateTime={story.verifiedAt}>最終確認日 {story.verifiedAt.replaceAll("-", ".")}</time>
          </footer>
        </section>
      </Container>
    </section>
  );
}
