import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import logo from '../assets/logo_plum.png';

const AuthPage = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };
  return (
    <div className="auth-page-container">
      <div className="auth-split">
        {/* Left Side: Visual / Marketing */}
        <div className="auth-visual">
          <div className="auth-visual-content">
            <div className="visual-logo">
              <img src={logo} alt="PrepPilot" />
              <span>PrepPilot</span>
            </div>
            <h1>Master your next interview with AI.</h1>
            <p>Join over 10,000 developers who used PrepPilot to land their dream jobs at top tech companies.</p>
            
            <div className="auth-testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p>"PrepPilot changed how I prepare. The AI feedback is incredibly accurate and helpful."</p>
              <div className="testimonial-author">— Sarah Chen, Software Engineer at Meta</div>
            </div>
          </div>
          <div className="visual-blobs">
            <div className="v-blob v-blob-1"></div>
            <div className="v-blob v-blob-2"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="auth-form-section">
          <button className="close-auth-btn" onClick={onBack} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="auth-form-container">
            <div className="auth-form-header">
              <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p>{isLogin ? 'Sign in to continue your journey' : 'Start your free trial today'}</p>
            </div>

            <div className="social-grid">
              <button className="social-auth-btn">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                <span>Google</span>
              </button>
              <button className="social-auth-btn">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
                <span>GitHub</span>
              </button>
            </div>

            <div className="auth-divider">
              <span>or continue with email</span>
            </div>

            <form className="auth-main-form" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="auth-input-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
              )}
              <div className="auth-input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="name@example.com" required />
              </div>
              <div className="auth-input-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  {isLogin && <a href="#" className="forgot-link">Forgot?</a>}
                </div>
                <input type="password" id="password" placeholder="••••••••" required />
              </div>

              <button className="auth-submit-btn" type="submit">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="auth-toggle-footer">
              <p>
                {isLogin ? "New to PrepPilot?" : "Already have an account?"}{' '}
                <button className="toggle-mode-btn" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Create an account' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
