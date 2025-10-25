import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#collective', label: 'Collective' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#join', label: 'Join Us' }
];

const IconMenu = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="container">
        <div className="nav-inner">
          <a href="#top" className="logo" aria-label="FLIHYE home">
            <span>FLI</span>
            <span>HYE</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <IconClose /> : <IconMenu />}
            <span className="sr-only">Toggle menu</span>
          </button>

          <div className={`nav-links${open ? ' open' : ''}`} id="mobile-menu">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="cta" href="#join" onClick={() => setOpen(false)}>
              Claim a Drop-in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
