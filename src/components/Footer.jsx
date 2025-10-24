export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="logo" aria-label="LOCAL MILES home">
            <span>LOCAL</span>
            <span>MILES</span>
          </a>
          <p>
            Built by locals for Hazaribagh. We believe in accessible movement, mindful
            training, and celebrating every finish line.
          </p>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="mailto:hello@localmiles.club">hello@localmiles.club</a>
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
            <li>Ride pilots • Winter 2024</li>
            <li>Strength pods • Early 2025</li>
            <li>Trail residencies • Coming soon</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {year} LOCAL MILES. All passion, no paywall.</div>
    </footer>
  );
}
