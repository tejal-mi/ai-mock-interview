import React from 'react';
import './Footer.css';
import logo from '../assets/logo_plum.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-logo">
            <img src={logo} alt="PrepPilot Logo" />
            <span className="brand-name">PrepPilot</span>
          </div>
          <p className="brand-description">
            The world's leading AI-powered mock interview platform. Practice with real industry scenarios and get hired by your dream company.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 1-2 1a4 4 0 0 0-7.86 3A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 22 4z"></path></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#mentors">Mentors</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} PrepPilot AI. All rights reserved.</p>
          <p className="made-with">Crafted for future engineers 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
