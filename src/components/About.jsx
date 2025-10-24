const pillars = [
  {
    title: 'City-rooted routes',
    description:
      'From the leafy stretches of Canary Hill to the buzz of Boddom Bazaar, we chart routes that showcase Hazaribagh’s texture and invite all paces.'
  },
  {
    title: 'Multi-sport future',
    description:
      'We are gearing up to host cycling rides, mobility labs, and seasonal trail treks—because movement is more than miles on foot.'
  },
  {
    title: 'Community-first culture',
    description:
      'Expect local playlists, chai cooldowns, and peer-led mentoring that keeps the atmosphere warm and inclusive.'
  }
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-intro">
          <span className="section-heading">Why LOCAL MILES</span>
          <h2 className="section-title">An urban crew shaped by Hazaribagh</h2>
          <p className="section-description">
            Built by locals who grew up sprinting between red-brick campuses and lush trails,
            LOCAL MILES is a basecamp for people who want to move better together. Whether
            you&apos;re lacing up for the first time or leveling up for races, we celebrate the
            journey.
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
