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
          <div className="tag-pill">Hazaribagh • Future-forward street movement</div>
          <h1>
            FLIHYE owns the blocks. <span>You own the motion.</span>
          </h1>
          <p>
            FLIHYE is Hazaribagh’s urban culture club for runners, riders, and strength
            seekers. We remix city grids, neon nights, and rooftop resets so every
            session feels like a drop — no matter your pace or playground.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#join">
              Step into FLIHYE
            </a>
            <a className="ghost-button" href="#experiences">
              <IconPlay />
              Catch the energy
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Midnight Strides</dt>
              <dd>Fridays • Old Town glow track</dd>
            </div>
            <div>
              <dt>Skyline Circuits</dt>
              <dd>Wednesdays • Rooftop HIIT + ride mashups</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" role="presentation" aria-hidden="true">
          <div className="hero-card run">Street Rush</div>
          <div className="hero-card ride">Night Wheels</div>
          <div className="hero-card train">Underpass Power</div>
        </div>
      </div>
    </section>
  );
}
