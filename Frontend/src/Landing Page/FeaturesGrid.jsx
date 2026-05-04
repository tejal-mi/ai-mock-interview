import React from 'react';
import './DashboardSection.css';

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Local Code Editor',
      description: 'Live problem solving with real-time test cases. Built-in AI evaluates your logic, optimization, and edge cases.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      bgColor: '#111827',
      iconColor: '#ffffff'
    },
    {
      title: 'Mock Interviews',
      description: '30-min AI-powered sessions tailored to your resume. Focus on specific tags or general software engineering roles.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      bgColor: '#81085c',
      iconColor: '#ffffff'
    },
    {
      title: 'ATS Analyzer',
      description: 'Get your resume scanned by our proprietary AI to see how you rank against job descriptions and industry standards.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      bgColor: '#3B82F6',
      iconColor: '#ffffff'
    }
  ];

  return (
    <section className="dashboard-section">
      <div className="section-header">
        <h2>Built for the Modern Candidate</h2>
        <p>"Our platform combines cutting-edge AI with direct industry insights to guarantee your success."</p>
      </div>
      <div className="grid-3">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper" style={{ backgroundColor: feature.bgColor, color: feature.iconColor }}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
