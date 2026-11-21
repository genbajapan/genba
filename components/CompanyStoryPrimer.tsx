import Container from "@/components/Container";
import type { CompanyStoryPrimerData, CompanyStorySource } from "@/lib/company-story-primer";
import type { Job } from "@/lib/market-data";

function SourceLink({ source }: { source: CompanyStorySource }) {
  return <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>;
}

export default function CompanyStoryPrimer({ story, jobs }: { story: CompanyStoryPrimerData; jobs: Job[] }) {
  const featuredJobs = story.quickRead.featuredJobIds
    .map((jobId) => jobs.find((job) => job.id === jobId))
    .filter((job): job is Job => Boolean(job));

  return (
    <section className={`company-story-primer company-story-primer-${story.slug}`} id="company-story" aria-labelledby="company-story-title">
      <Container>
        <section className="company-quick-read" aria-labelledby="company-story-title">
          <header className="company-quick-read-head">
            <div>
              <p className="company-story-eyebrow">{story.eyebrow}</p>
              <h2 id="company-story-title">3分で、ElevenLabsの全体像をつかむ。</h2>
              <p>{story.lead}</p>
            </div>
            <ol aria-label="3分で読む順番">
              <li><span>00:00</span><a href="#quick-origin">創業とミッション</a></li>
              <li><span>00:40</span><a href="#quick-scale">全体規模</a></li>
              <li><span>01:10</span><a href="#quick-japan">日本組織</a></li>
              <li><span>01:45</span><a href="#quick-products">課題と製品</a></li>
              <li><span>02:30</span><a href="#quick-jobs">現行求人</a></li>
            </ol>
          </header>

          <div className="company-quick-read-grid">
            <article className="company-quick-card company-quick-origin" id="quick-origin">
              <div className="company-quick-card-index"><span>01</span><p>ORIGIN / MISSION</p></div>
              <div className="company-quick-origin-tags"><span>{story.quickRead.origin.roots}</span><span>{story.quickRead.origin.founded}</span></div>
              <h3>{story.quickRead.origin.founders}</h3>
              <p>{story.quickRead.origin.story}</p>
              <blockquote><span>MISSION</span>{story.quickRead.origin.mission}</blockquote>
              <SourceLink source={story.quickRead.origin.source} />
            </article>

            <article className="company-quick-card company-quick-scale" id="quick-scale">
              <div className="company-quick-card-index"><span>02</span><p>GLOBAL SCALE</p></div>
              <h3>どれくらいの会社か</h3>
              <div className="company-quick-scale-grid">
                {story.quickRead.scale.map((fact) => (
                  <div key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                    <small>{fact.detail}</small>
                    <SourceLink source={fact.source} />
                  </div>
                ))}
              </div>
            </article>

            <article className="company-quick-card company-quick-japan" id="quick-japan">
              <div className="company-quick-card-index"><span>03</span><p>JAPAN OFFICE</p></div>
              <h3>東京に、初の海外子会社。</h3>
              <dl>
                <div><dt>設立</dt><dd>{story.quickRead.japan.launched}</dd></div>
                <div><dt>所在地</dt><dd>{story.quickRead.japan.address}</dd></div>
                <div><dt>責任者</dt><dd><strong>{story.quickRead.japan.leader}</strong><br />{story.quickRead.japan.leaderContext}</dd></div>
              </dl>
              <p className="company-quick-japan-note">{story.quickRead.japan.note}</p>
              <div className="company-quick-links">
                <SourceLink source={story.quickRead.japan.source} />
                <SourceLink source={story.quickRead.japan.leaderLink} />
                <SourceLink source={story.quickRead.japan.peopleLink} />
              </div>
            </article>

            <article className="company-quick-card company-quick-products" id="quick-products">
              <div className="company-quick-card-index"><span>04</span><p>PROBLEM → PRODUCT</p></div>
              <h3>何の課題を、どう解くか</h3>
              <div className="company-quick-product-list">
                {story.productSystem.map((product, index) => (
                  <div key={product.name}>
                    <span>0{index + 1}</span>
                    <div><small>{product.audience}の課題</small><p>{product.problem}</p></div>
                    <i aria-hidden="true">→</i>
                    <div><strong>{product.name}</strong><p>{product.job}。{product.outcome}</p></div>
                  </div>
                ))}
              </div>
            </article>

            <article className="company-quick-card company-quick-jobs" id="quick-jobs">
              <div className="company-quick-card-index"><span>05</span><p>OPEN ROLES / JAPAN</p></div>
              <div className="company-quick-jobs-heading">
                <h3>現在の日本専任求人</h3>
                <strong>{featuredJobs.length}件</strong>
              </div>
              <div className="company-quick-job-list">
                {featuredJobs.map((job) => (
                  <a href={job.source.url} target="_blank" rel="noreferrer" key={job.id}>
                    <span>{job.segment}</span>
                    <h4>{job.title}</h4>
                    <p>{job.descriptionSummary}</p>
                    <small>{job.location} / {job.workStyle} / 最終確認 {job.lastChecked.replaceAll("-", ".")} ↗</small>
                  </a>
                ))}
              </div>
              <p className="company-quick-jobs-note">{story.quickRead.otherJobs.summary} <SourceLink source={story.quickRead.otherJobs.source} /></p>
              <a className="company-quick-jobs-all" href={story.quickRead.otherJobs.source.url} target="_blank" rel="noreferrer">ElevenLabsの全求人を公式で見る ↗</a>
            </article>
          </div>

          <footer className="company-quick-read-foot">
            <span>ここまでで約3分</span>
            <p>創業・規模・日本組織・製品・求人を、このページ内で完結。</p>
            <time dateTime={story.verifiedAt}>最終確認 {story.verifiedAt.replaceAll("-", ".")}</time>
          </footer>
        </section>
      </Container>
    </section>
  );
}
