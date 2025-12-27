const CourseCard = ({ tag, icon, title, description, modules, delay = 0 }) => {
  return (
    <div className="course-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card-top">
        <span className="tag">{tag}</span>
        <div className="icon-box">{icon}</div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <div className="meta-info">
          <span>{modules}</span>
        </div>
        <div className="arrow-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
