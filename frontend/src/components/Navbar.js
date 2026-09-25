import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🌾 किसान साथी - Kisan Sathi</h2>
        </div>
        
        <ul className="nav-menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" className="nav-link">
              🏠 {t('navbar.dashboard')}
            </Link>
          </li>
          <li className={location.pathname === '/community' ? 'active' : ''}>
            <Link to="/community" className="nav-link">
              👥 {t('navbar.community')}
            </Link>
          </li>
          <li className={location.pathname === '/profile' ? 'active' : ''}>
            <Link to="/profile" className="nav-link">
              👤 {t('navbar.profile')}
            </Link>
          </li>
        </ul>

        <div className="language-selector">
          <select 
            value={i18n.language} 
            onChange={(e) => changeLanguage(e.target.value)}
            className="lang-dropdown"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;