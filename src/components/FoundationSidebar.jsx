import { NavLink } from 'react-router-dom';

const FoundationSidebar = () => {
  const lessons = [
    { id: 'intro', title: 'Introduction to Trading' },
    { id: 'financial-markets', title: 'What are Financial Markets' },
    { id: 'market-participants', title: 'Market Participants' },
    { id: 'types-of-markets', title: 'Different Type of Markets' },
    { id: 'brokers', title: 'Brokers' },
    { id: 'prop-firms', title: 'Prop Firms' },
    { id: 'trading-apps', title: 'Trading Applications' },
    { id: 'why-learn', title: 'Why we should learn Trading' },
    { id: 'traders-mindset', title: 'Traders Mindset' },
    { id: 'final-note', title: 'Final Note' },
  ];

  return (
    <aside className="foundation-sidebar">
      <div className="foundation-sidebar__header">
        <div className="foundation-sidebar__title">Table of Contents</div>
      </div>

      <div className="foundation-sidebar__content">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.id}
            to={`#${lesson.id}`}
            className={({ isActive }) =>
              `foundation-lesson-link ${isActive ? 'active' : ''}`
            }
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(lesson.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <span className="foundation-lesson-link__text">{lesson.title}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default FoundationSidebar;

