import { NavLink } from 'react-router-dom';

const TopicSidebar = ({ moduleSlug, topics }) => {
  return (
    <aside className="lms-sidebar">
      <div className="lms-sidebar__header">
        <div className="lms-sidebar__title">Topics</div>
        <div className="lms-sidebar__hint">W3Schools-style reading flow</div>
      </div>

      <div className="lms-sidebar__content">
        {topics.map((topic) => (
          <div key={topic.id} className="lms-topic">
            <div className="lms-topic__title">{topic.title}</div>
            <div className="lms-topic__list">
              {topic.lessons.map((lesson) => (
                <NavLink
                  key={lesson.id}
                  to={`/academy/${moduleSlug}/${lesson.id}`}
                  className={({ isActive }) =>
                    `lms-lesson-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="lms-lesson-link__text">{lesson.title}</span>
                  {lesson.readingTime ? (
                    <span className="lms-lesson-link__meta">{lesson.readingTime}</span>
                  ) : null}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TopicSidebar;


