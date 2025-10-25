const pathways = [
  {
    label: 'Concrete Intervals',
    summary: 'LED-paced run sessions that sync breath with beat drops.',
    detail:
      'Custom tempo playlists, projection-mapped cues, and community pacers dial in speedwork that still feels like art.'
  },
  {
    label: 'Chrome Rides',
    summary: 'Group rides carving through skyline silhouettes and sunrise smog.',
    detail:
      'Rolling bike checks, marshal-led safety briefings, and rooftop cooldowns keep every rider locked into the city pulse.'
  },
  {
    label: 'Strength Bays',
    summary: 'Underpass strength pods for power, balance, and resilience.',
    detail:
      'Modular rigs, mobility residencies, and recovery corners help you level up without burning out.'
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
            Our programming keeps urban athletes energized all week. Drop into one pathway
            or float between them as FLIHYE expands across cycling, strength, and creative
            movement residencies throughout Hazaribagh.
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
