import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <>
      <header className="hero hero-resources">
        <div className="hero-content">
          <span className="tagline" data-aos="fade-down" data-aos-delay="200">
            Trading Resources
          </span>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Tools & Templates.<br />Everything You Need.
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Download PDFs, templates, indicators, and helpful tools to accelerate your trading journey.
          </p>
        </div>
      </header>
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Resources</h1>
          <p>
            This page will host downloadable PDFs, templates, and helpful tools.
            For now, start with the Academy modules.
          </p>
          <Link className="btn-hero" to="/">Go to Academy</Link>
        </div>
      </main>
    </>
  );
};

export default Resources;


