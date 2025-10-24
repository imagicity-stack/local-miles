const pathways = [
  {
    label: 'Run Labs',
    summary: 'Interval and endurance plans coached by community mentors.',
    detail: 'Track nights at Indira Gandhi Stadium and form-focused drills for every level.'
  },
  {
    label: 'Ride Outs',
    summary: 'City explorations on wheels with safety marshals and pit stops.',
    detail: 'Spin through Domchanch Road, test climbs, and learn maintenance basics.'
  },
  {
    label: 'Mobility Pods',
    summary: 'Strength and mobility stacks to prevent niggles and fuel progress.',
    detail: 'Functional circuits, yoga-inspired resets, and recovery chats over local chai.'
  }
];

export default function Collective() {
  return (
    <section id="collective" className="collective">
      <div className="container">
        <div className="collective-heading">
          <span className="section-heading">What we&apos;re building</span>
          <h2 className="section-title">A collective for every kind of mover</h2>
          <p className="section-description">
            We are designing sessions that keep you inspired all week long. Plug into any
            pathway or float between them as we grow into cycling, strength, and adventure
            offerings across Hazaribagh.
          </p>
        </div>
        <div className="collective-grid">
          {pathways.map((pathway) => (
            <article key={pathway.label}>
              <header>
                <span>{pathway.label}</span>
                <h3>{pathway.summary}</h3>
              </header>
              <p>{pathway.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
