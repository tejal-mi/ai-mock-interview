import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrap">
      {/* Background Blobs */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>

      <div className="hero-left">
        <div className="badge">
          <div className="badge-dot"></div>
          Live Mock Interviews
        </div>

        <h1 className="hero-title">
          Practice with Real<br /><span>Industry Experts</span>
        </h1>

        <p className="hero-sub">
          Get interview-ready with 1-on-1 mock sessions, instant feedback, and expert coaching — all from the comfort of your screen.
        </p>

        <div className="cta-row">
          <button className="btn-primary">Start Interview ↗</button>
          <button className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            See how it works
          </button>
        </div>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">12K+</span>
            <span className="stat-label">Sessions done</span>
          </div>
          <div className="stat">
            <span className="stat-num">95%</span>
            <span className="stat-label">Success rate</span>
          </div>
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Expert mentors</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {/* Video Card: You */}
        <div className="video-card video-card-you">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=460&h=340&fit=crop&crop=face" 
            alt="Student in mock interview"
          />
          <div className="wave-bar">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="mic-indicator">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" />
              <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="card-label">You</div>
        </div>

        <div className="dashed-connector"></div>

        {/* Video Card: Expert */}
        <div className="video-card video-card-expert">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=370&h=280&fit=crop&crop=face" 
            alt="Industry expert interviewer"
          />
          <div className="card-label">Industry Expert</div>
        </div>

        {/* Floating Chips */}
        <div className="floating-chip chip1">
          <div className="chip-icon" style={{ background: '#fbe6f2', color: '#81085c' }}>★</div>
          4.9 avg rating
        </div>

        <div className="floating-chip chip2">
          <div className="chip-icon" style={{ background: '#DCF5E7', color: '#22C55E' }}>✓</div>
          Offer received!
        </div>
      </div>
    </section>
  );
};

export default Hero;
