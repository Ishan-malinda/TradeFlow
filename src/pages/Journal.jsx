import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <>
      <header className="hero hero-journal">
        <div className="hero-content">
          <span className="tagline" data-aos="fade-down" data-aos-delay="200">
            Trading Journal
          </span>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Track Your Performance.<br />Improve Your Edge.
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Analyze your trades, identify patterns, and build consistency through detailed performance tracking.
          </p>
        </div>
      </header>
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Journal (Coming Soon)</h1>
          <p>
            The Trading Journal & Performance Tracker will be added later (Edgewonk-inspired).
            For now, use the Academy lessons.
          </p>
          <Link className="btn-hero" to="/">Go to Academy</Link>
        </div>
      </main>
    </>
  );
};

export default Journal;


