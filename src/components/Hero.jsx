const IconPlay = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="m10 8 6 4-6 4z" fill="currentColor" />
  </svg>
);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="tag-pill">Hazaribagh • Movement for everyone</div>
          <h1>
            Local energy. <span>Limitless miles.</span>
          </h1>
          <p>
            LOCAL MILES is Hazaribagh’s new urban run club evolving into a multi-sport
            collective. We’re creating welcoming routes, strength corners, and trail
            escapes so you can move your way—run, ride, or roll.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#join">
              Start with us
            </a>
            <a className="ghost-button" href="#experiences">
              <IconPlay />
              Discover the vibe
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Sunrise Strides</dt>
              <dd>Every Saturday • Canary Hill</dd>
            </div>
            <div>
              <dt>City Loop</dt>
              <dd>Mid-week tempo through Hazaribagh’s core</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" role="presentation" aria-hidden="true">
          <div className="hero-card run">Run Crew</div>
          <div className="hero-card ride">Ride Outs</div>
          <div className="hero-card train">Strength Pods</div>
        </div>
      </div>
    </section>
  );
}
