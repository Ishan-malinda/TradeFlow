import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="main-nav">
      <div className="nav-top">
        <Link to="/" className="logo" aria-label="TradeFlow Home" onClick={closeMenu}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="logo-text">TRADE<span className="logo-space"> </span>FLOW</span>
        </Link>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            <span>Academy</span>
          </NavLink>
          <NavLink to="/journal" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            <span>Journal</span>
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            <span>Resources</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            <span>Contact us</span>
          </NavLink>
        </div>
      </div>
      {isHomePage && (
        <div className="nav-secondary">
          <div className="nav-secondary-content">
            <NavLink to="/foundations" className={({ isActive }) => `nav-secondary-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Foundations</NavLink>
            <NavLink to="/market-analysis" className={({ isActive }) => `nav-secondary-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Market Analysis</NavLink>
            <NavLink to="/trading-psychology" className={({ isActive }) => `nav-secondary-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Trading Psychology</NavLink>
            <NavLink to="/risk-management" className={({ isActive }) => `nav-secondary-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Risk Management</NavLink>
            <NavLink to="/niche-algo-strategies" className={({ isActive }) => `nav-secondary-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Niche & Algo</NavLink>
            <a href="#tools" className="nav-secondary-link" onClick={closeMenu}>Tools</a>
            <a href="#community" className="nav-secondary-link" onClick={closeMenu}>Community</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
