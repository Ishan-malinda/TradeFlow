import CourseCard from './CourseCard';

const StartLearningSection = () => {

  const topCourses = [
    {
      tag: 'Base Level',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
      title: 'Basic Foundations',
      description: 'Market terminology, exchange mechanics and platform setup. The essential groundwork for all future learning.',
      modules: '10 Contents',
      delay: 100,
      to: '/foundations'
    },
    {
      tag: 'Core Skill',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      title: 'Market Analysis',
      description: 'Technical patterns and fundamental indicators. Learn to read the charts like a language.',
      modules: '24 Contents',
      delay: 200,
      to: '/market-analysis'
    },
    {
      tag: 'Critical',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      title: 'Trading Psychology',
      description: 'Emotional regulation and cognitive bias control. Master the most important asset: your mind.',
      modules: '10 Contents',
      delay: 300,
      to: '/trading-psychology'
    }
  ];

  const bottomCourses = [
    {
      tag: 'Mandatory',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Risk Management',
      description: 'Position sizing and capital preservation. The mathematical formula for longevity in the markets.',
      modules: '8 Contents',
      delay: 400,
      to: '/risk-management'
    },
    {
      tag: 'Specialist',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Niche & Algo Strategies',
      description: 'Algorithmic trading, Crypto-assets, and Macro-economic strategy for the modern era.',
      modules: '15 Modules',
      delay: 400,
      to: '/niche-algo-strategies'
    }
  ];

  return (
    <section id="curriculum" className="start-learning-section">
      <div className="section-header" data-aos="fade-up">
        <h2>Start Learning</h2>
        <p>A structured approach to market mastery, divided into five core pillars.</p>
      </div>

      <div className="bento-grid">
        {topCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      <div className="bottom-row-wrapper" data-aos="fade-up" data-aos-delay="400">
        {bottomCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default StartLearningSection;

