const pillars = [
  {
    title: 'Electric city routes',
    description:
      'Neon-marked loops across Old Town alleys, market murals, and rooftop ramps keep the crew energized and street-safe for every pace.'
  },
  {
    title: 'Hybrid training labs',
    description:
      'Run + ride mashups, stair tempo stacks, and mobility drop-ins build power that moves from asphalt to skybridges and back again.'
  },
  {
    title: 'Culture-coded community',
    description:
      'Expect collaborative playlists, local art collabs, and mentors who translate big-city swagger into inclusive momentum.'
  }
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-intro">
          <span className="section-heading">Why FLIHYE</span>
          <h2 className="section-title">An urban collective wired by Hazaribagh</h2>
          <p className="section-description">
            Born from late-night stair sprints and sunrise chai, FLIHYE brings city dreamers,
            students, founders, and first-timers into one kinetic lane. We champion bold,
            accessible movement so you can plug in, power up, and stay in flow.
          </p>
        </div>
        <div className="card-grid cols-3 about-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
