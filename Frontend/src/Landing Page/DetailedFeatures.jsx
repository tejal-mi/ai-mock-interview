import React from 'react';
import cheatingImg from '../assets/cheating_detector.png';
import voiceImg from '../assets/voice_interaction.png';
import './DashboardSection.css';

const DetailedFeatures = () => {
  return (
    <section className="dashboard-section">
      <div className="section-header">
        <h2>Advanced Platform Insights</h2>
        <p>Explore our cutting-edge AI features designed to give you the ultimate interview advantage.</p>
      </div>
      
      <div className="grid-2">
        <div className="feature-card dark-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#EF4444', color: '#fff' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3>Anti-Cheat Guardian</h3>
          <p>Our silent background monitor ensures your mock sessions carry the same integrity as a real interview. Tracks tab switches, AI usage, and unauthorized lookups.</p>
          
          <div className="card-viz" style={{ backgroundImage: `url(${cheatingImg})`, height: '200px', borderRadius: '12px', marginTop: '20px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          
          <div className="card-stats" style={{ marginTop: '20px' }}>
            <span className="stat-badge">AI Integrity</span>
            <span className="stat-badge">Tab Monitor</span>
          </div>
        </div>

        <div className="feature-card voice-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#A855F7', color: '#fff' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
          <h3>Voice-to-Text Engine</h3>
          <p>Practice speaking your solutions aloud. Our engine transcribes your voice in real-time, allowing the AI to challenge your verbal explanations.</p>
          
          <div className="card-viz" style={{ backgroundImage: `url(${voiceImg})`, height: '200px', borderRadius: '12px', marginTop: '20px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

          <div className="voice-progress" style={{ marginTop: '20px' }}>
             <div className="progress-bar" style={{ height: '4px', background: 'rgba(168, 85, 247, 0.2)', borderRadius: '2px' }}>
                <div className="progress-fill" style={{ width: '60%', height: '100%', background: '#A855F7', borderRadius: '2px' }}></div>
             </div>
             <span style={{ fontSize: '12px', color: '#A855F7', marginTop: '8px', display: 'block' }}>Real-time transcription active...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;

