import React from 'react';

const PerformancePage = () => {
  const skills = [
    { name: 'Problem Solving', score: 85 },
    { name: 'Communication', score: 92 },
    { name: 'Technical Knowledge', score: 78 },
    { name: 'Confidence', score: 88 },
    { name: 'Body Language', score: 82 },
  ];

  return (
    <div className="performance-page animate-fade-in">
      <div className="page-header">
        <h1>Performance Analytics</h1>
        <p>Track your growth and identify areas for improvement.</p>
      </div>

      <div className="analytics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '32px' }}>
        <div style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ marginBottom: '24px' }}>Skills Proficiency</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {skills.map((skill, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                  <span>{skill.name}</span>
                  <span style={{ fontWeight: '700' }}>{skill.score}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-light)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${skill.score}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ marginBottom: '24px' }}>Preparation Progress</h3>
          <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 20px' }}>
            {[40, 65, 55, 80, 75, 90, 85].map((h, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: `${h * 2}px`, background: i === 6 ? 'var(--primary)' : 'var(--secondary)', opacity: i === 6 ? 1 : 0.6, borderRadius: '8px 8px 0 0' }}></div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>M{i+1}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Score trend over the last 7 sessions</p>
        </div>
      </div>

      <div className="feedback-section" style={{ marginTop: '32px', background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
        <h3 style={{ marginBottom: '20px' }}>AI Feedback Summary</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid #10b981', borderRadius: '16px' }}>
            <h4 style={{ color: '#059669', marginBottom: '8px' }}>Strengths</h4>
            <p style={{ fontSize: '0.9rem' }}>You articulate complex technical concepts very clearly and maintain great eye contact.</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid #ef4444', borderRadius: '16px' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '8px' }}>Areas for Improvement</h4>
            <p style={{ fontSize: '0.9rem' }}>Work on providing more specific examples when answering behavioral questions using the STAR method.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
