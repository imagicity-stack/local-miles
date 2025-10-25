const experiences = [
  {
    title: 'Metro Pulse Run',
    description:
      'A guided night run threading mural alleys with synced light cues, local DJs, and pace teams for every crew.'
  },
  {
    title: 'Flyover Switchbacks',
    description:
      'Weekend climbs along Kallu Chowk flyovers with mobility resets on rooftops and chai refuels at dawn.'
  },
  {
    title: 'Warehouse Power Lab',
    description:
      'Pop-up strength circuit inside an industrial bay with modular rigs, heavy beats, and recovery corners.'
  }
];

const spotlights = [
  {
    name: 'Riya • Visual designer',
    quote:
      '“FLIHYE feels like stepping into a live installation. The runs are inclusive, the playlists are wild, and the confidence sticks.”'
  },
  {
    name: 'Sameer • Founder & rider',
    quote:
      '“Every ride hits different—the crew balances discipline with street creativity. The hybrid sessions keep my hustle sharp.”'
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <div className="experiences-grid">
          <div>
            <span className="section-heading">Experiences</span>
            <h2 className="section-title">Moments that keep you moving</h2>
            <p className="section-description">
              Every FLIHYE drop pulses with city texture—graffiti corridors, campus rooftops,
              forest edges. You&apos;ll find mentors, musicians, and first-time movers sharing
              the same wild ambition to keep Hazaribagh in motion.
            </p>
            <div className="card-grid cols-2 experience-list">
              {experiences.map((experience) => (
                <article key={experience.title}>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="spotlight">
            {spotlights.map((spotlight) => (
              <blockquote key={spotlight.name}>
                <p>{spotlight.quote}</p>
                <footer>{spotlight.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
