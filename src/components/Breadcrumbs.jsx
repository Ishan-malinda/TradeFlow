import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span className="breadcrumbs__item" key={`${item.label}-${idx}`}>
            {item.to && !isLast ? (
              <Link to={item.to} className="breadcrumbs__link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumbs__current">{item.label}</span>
            )}
            {!isLast ? <span className="breadcrumbs__sep">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;


