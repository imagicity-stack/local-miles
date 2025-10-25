export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="logo" aria-label="FLIHYE home">
            <span>FLI</span>
            <span>HYE</span>
          </a>
          <p>
            Made in Hazaribagh for the movers shaping what&apos;s next. We stand for
            accessible training, fearless creativity, and celebrations that spill into the
            streets.
          </p>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="mailto:hey@flihye.club">hey@flihye.club</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl" target="_blank" rel="noreferrer">
                Meetups across Hazaribagh
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Upcoming</h4>
          <ul>
            <li>Chrome Ride Residency • Winter 2024</li>
            <li>Warehouse Power Lab • Early 2025</li>
            <li>Underpass Art Run • Coming soon</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {year} FLIHYE. All heart, no gatekeeping.</div>
    </footer>
  );
}
