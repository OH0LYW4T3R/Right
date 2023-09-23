// Footer.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="footer-container">
      <div className="menu-circle">
        <NavLink
          to="/"
          className={`menu-item ${selectedMenu === 'main' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('main')}
        >
          main
        </NavLink>
        <NavLink
          to="/notice"
          className={`menu-item ${selectedMenu === 'notice' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('notice')}
        >
          Notice
        </NavLink>
        <NavLink
          to="/patent"
          className={`menu-item ${selectedMenu === 'patent' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('patent')}
        >
          Patent
        </NavLink>
        <NavLink 
            to="/right"
            className={`menu-item ${selectedMenu === 'right' ? 'selected' : ''}`}
            onClick={() => handleMenuClick('right')}>
          Right
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;