import { Link } from 'react-router-dom';
import { academyModules } from '../data/academyData';

const accentClass = {
  yellow: 'accent-yellow',
  teal: 'accent-teal',
  purple: 'accent-purple',
  green: 'accent-green',
};

const Academy = () => {
  return (
    <main className="page">
      <section className="academy-hero" data-aos="fade-up">
        <div className="academy-hero__content">
          <h1>Academy</h1>
          <p>
            Text-first learning, built like a playbook. Pick a module and follow a structured path.
          </p>
        </div>
      </section>

      <section className="academy-grid" aria-label="Academy modules">
        {academyModules.map((m, idx) => (
          <Link
            key={m.slug}
            to={`/academy/${m.slug}`}
            className={`academy-card ${accentClass[m.accent] || ''}`}
            data-aos="fade-up"
            data-aos-delay={100 + idx * 80}
          >
            <div className="academy-card__top">
              <div className="academy-card__pill">Module</div>
              <div className="academy-card__arrow">→</div>
            </div>
            <div className="academy-card__title">{m.title}</div>
            <div className="academy-card__subtitle">{m.subtitle}</div>
            <div className="academy-card__footer">
              <div className="academy-card__cta">Open lessons</div>
              <div className="academy-card__hint">No login • No videos</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Academy;


