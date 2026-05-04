import React from 'react';
import './DashboardSection.css';
import './ATSScanner.css';

const ATSScanner = () => {
  return (
    <section className="dashboard-section ats-scanner">
      <div className="ats-content">
        <div className="badge">AI RESUME SCANNER</div>
        <h2>Does your resume pass the ATS filter?</h2>
        <p className="description">
          Over 75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. Our AI scanner simulates top recruiters to ensure you're in the elite tier.
        </p>

        <div className="ats-feature">
          <div className="icon-circle">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
             </svg>
          </div>
          <div className="text">
            <h4>Keyword Optimization</h4>
            <p>Match the exact phrases recruiters are searching for.</p>
          </div>
        </div>

        <div className="ats-feature">
          <div className="icon-circle">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
             </svg>
          </div>
          <div className="text">
            <h4>Impact Analysis</h4>
            <p>Identify weak verbs and replace them with high-impact achievements.</p>
          </div>
        </div>

        <button className="analyze-btn">
          Analyze My Resume
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
             <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </button>
      </div>

      <div className="analysis-report">
         <div className="report-placeholder">
            <div className="report-icon">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15.5l2 2 4-4"></path>
               </svg>
            </div>
            <p>Your analysis report will appear here</p>
         </div>
      </div>
    </section>
  );
};

export default ATSScanner;
