import React from 'react';
import './Navbar.css';
import logo from '../assets/logo_plum.png';

const Navbar = ({ theme, toggleTheme, onOpenAuth }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <div className="brand">
            <img src={logo} alt="PrepPilot Logo" className="logo-img" />
            <span className="brand-name">PrepPilot</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>
          <button className="login-btn" onClick={onOpenAuth}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
