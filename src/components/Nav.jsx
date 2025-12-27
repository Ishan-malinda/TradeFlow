import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-top">
        <div className="logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          TRADE FLOW
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#portal" className="btn-nav-cta" onClick={closeMenu}>Academy</a>
          <a href="#curriculum" onClick={closeMenu}>Journal</a>
          <a href="#mentorship" onClick={closeMenu}>Resources</a>
          <a href="#resources" onClick={closeMenu}>Contact us</a>
          
        </div>
      </div>
      <div className="nav-secondary">
        <div className="nav-secondary-content">
          <a href="#foundations">Foundations</a>
          <a href="#analysis">Analysis</a>
          <a href="#psychology">Psychology</a>
          <a href="#risk">Risk Management</a>
          <a href="#strategies">Strategies</a>
          <a href="#tools">Tools</a>
          <a href="#community">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
