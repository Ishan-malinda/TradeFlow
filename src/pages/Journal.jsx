import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
          <div data-aos="fade-up" data-aos-delay="500" style={{ marginTop: '30px' }}>
            <Link to="/journal/dashboard" className="btn-hero">Open Trading Journal</Link>
          </div>
        </div>
      </header>
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Journal Dashboard</h1>
          <p>
            Access comprehensive trading analytics, performance metrics, and detailed trade analysis in the dashboard.
            Track your progress, identify patterns, and optimize your trading strategy with data-driven insights.
          </p>
          <Link className="btn-hero" to="/journal/dashboard">Go to Dashboard</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Journal;
