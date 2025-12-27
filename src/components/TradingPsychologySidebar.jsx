import { NavLink } from 'react-router-dom';

const TradingPsychologySidebar = () => {
  const lessons = [
    { id: 'intro', title: 'What is Trading Psychology?' },
    { id: 'before-start', title: 'Before You Start: Is it Psychology or Strategy?' },
    { id: 'fomo', title: '1. Fear of Missing Out (FOMO)' },
    { id: 'overtrading', title: '2. Overtrading' },
    { id: 'impatience', title: '3. Impatience' },
    { id: 'revenge-trading', title: '4. Revenge Trading' },
    { id: 'confirmation-bias', title: '5. Confirmation Bias' },
    { id: 'gamblers-fallacy', title: '6. The Gambler\'s Fallacy' },
    { id: 'sunk-cost', title: '7. Sunk Cost Fallacy' },
    { id: 'fear-trigger', title: '8. Fear of Pulling the Trigger' },
    { id: 'analysis-paralysis', title: '9. Analysis Paralysis' },
    { id: 'perfectionism', title: '10. Perfectionism' },
    { id: 'conclusion', title: 'Conclusion: The Missing Link' },
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

export default TradingPsychologySidebar;

