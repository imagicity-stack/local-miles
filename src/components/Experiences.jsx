const experiences = [
  {
    title: 'Urban Tempo',
    description:
      'A guided run weaving through the new ring road murals with audio cues and pacers for every group.'
  },
  {
    title: 'Trail Switchbacks',
    description:
      'Weekend exploration of Canary Hill and Sal forests with mindful downhill drills and breakfast finish.'
  },
  {
    title: 'Strength Under Flyover',
    description:
      'Pop-up strength circuit beneath the Kallu Chowk flyover featuring resistance bands, kettlebells, and music.'
  }
];

const spotlights = [
  {
    name: 'Riya • Design student',
    quote:
      '“I joined LOCAL MILES for the Saturday runs and stayed for the creative people and the confidence the workouts built.”'
  },
  {
    name: 'Sameer • Entrepreneur',
    quote:
      '“The crew blends serious training with a chilled vibe. The planned cycling routes will be a game changer.”'
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
              Our sessions mix structured training with the raw edges of Hazaribagh—graffiti
              walls, campus tracks, forest climbs. You&apos;ll meet mentors, creatives, and
              first-time runners, all pushing forward together.
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
