import React from 'react';
import './DashboardSection.css';
import './TechnicalRound.css';

const TechnicalRound = () => {
  return (
    <section className="dashboard-section technical-round">
      <div className="tech-content">
        <div className="icon-wrapper" style={{ backgroundColor: '#111827', color: '#fff', width: '48px', height: '48px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h2>Master the Technical Round</h2>
        <p className="description">
          Don't just write code—write code that scales. Our AI evaluation engine tests your logic against production-level test cases and provides immediate refactoring tips.
        </p>
        <ul className="tech-features">
          <li>
            <span className="check-icon">✓</span>
            Live Test Case Validation
          </li>
          <li>
            <span className="check-icon">✓</span>
            Complexity & Optimization Analysis
          </li>
          <li>
            <span className="check-icon">✓</span>
            Language-specific Best Practices
          </li>
          <li>
            <span className="check-icon">✓</span>
            Real-time Logic Feedback
          </li>
        </ul>
      </div>

      <div className="editor-mockup">
        <div className="editor-window">
          <div className="editor-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot plum"></span>
              <span className="dot green"></span>
            </div>
            <div className="filename">solution.js</div>
            <button className="run-btn">
              <span>▶</span> Run Tests
            </button>
          </div>
          <div className="editor-body">
            <pre>
              <code>
{`function findSum(arr, target) {
  // Write your solution here
  return [];
}`}
              </code>
            </pre>
          </div>
        </div>
        <div className="results-panel">
          <div className="panel-header">
             <span>{'>_'}</span> TEST RESULTS
          </div>
          <div className="panel-content">
            <div className="placeholder-content">
              <div className="play-icon">▶</div>
              <p>Run your code to see results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRound;
