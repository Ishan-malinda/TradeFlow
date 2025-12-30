import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaChartLine, 
  FaCog,
  FaArrowLeft,
  FaMoon
} from 'react-icons/fa';

const JournalSidebar = () => {
  const menuItems = [
    { icon: <FaHome />, text: 'Home', path: '/' },
    { icon: <FaBook />, text: 'Journal', path: '/journal/dashboard', active: true },
    { icon: <FaChartLine />, text: 'Equity Graph', path: '/journal/dashboard#equity' },
    { icon: <FaCog />, text: 'Settings', path: '/journal/dashboard#settings' },
  ];

  return (
    <aside className="journal-sidebar">
      <div className="journal-sidebar__header">
        <h1 className="journal-sidebar__logo">TradeFlow</h1>
      </div>

      <nav className="journal-sidebar__nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `journal-sidebar__item ${isActive || item.active ? 'active' : ''}`
            }
          >
            <span className="journal-sidebar__icon">{item.icon}</span>
            <span className="journal-sidebar__text">{item.text}</span>
          </NavLink>
        ))}
      </nav>

      <div className="journal-sidebar__footer">
        <div className="journal-sidebar__account">
          <p className="journal-sidebar__account-label">Account Balance</p>
          <p className="journal-sidebar__account-value">$33,617.88</p>
        </div>
        <button className="journal-sidebar__add-trade-btn">
          <span>+</span>
          Add New Trade
        </button>
      </div>
    </aside>
  );
};

export default JournalSidebar;

