import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  focus: 'running',
  message: ''
};

export default function Join() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState(initialState);
      setSubmitted(false);
    }, 2400);
  };

  return (
    <section id="join" className="join">
      <div className="container join-grid">
        <div className="join-copy">
          <span className="section-heading">Join the crew</span>
          <h2 className="section-title">Register free &amp; claim your first session</h2>
          <p className="section-description">
            We&apos;ll reach out with the next run card, gear partners, and details on the
            upcoming cycling and mobility pilots.
          </p>
          <ul className="join-perks">
            <li>Curated routes &amp; pacing pods</li>
            <li>Strength + mobility add-ons</li>
            <li>Local music, chai, and community</li>
          </ul>
        </div>
        <form className="join-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              required
              type="text"
              name="name"
              placeholder="Your full name"
              value={formState.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
          <label>
            What excites you right now?
            <select name="focus" value={formState.focus} onChange={handleChange}>
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
              <option value="strength">Strength &amp; Mobility</option>
              <option value="adventure">Trail &amp; Adventure</option>
            </select>
          </label>
          <label>
            Share anything we should know
            <textarea
              name="message"
              placeholder="Goals, experience level, or availability"
              value={formState.message}
              onChange={handleChange}
              rows={4}
            />
          </label>
          <button type="submit" className="cta-button" disabled={submitted}>
            {submitted ? 'We got you! 💥' : 'Submit &amp; connect'}
          </button>
          <p className="form-caption">*We respect your inbox and only send essentials.</p>
        </form>
      </div>
    </section>
  );
}
