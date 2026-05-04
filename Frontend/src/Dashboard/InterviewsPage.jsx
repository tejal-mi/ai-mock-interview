import React from 'react';

const InterviewsPage = () => {
  const categories = [
    { name: 'Technical Interview', description: 'DSA, System Design, and Language specific questions.', icon: '💻', color: '#81085c' },
    { name: 'Behavioral Interview', description: 'STAR method, cultural fit, and soft skills.', icon: '🧠', color: '#e849a1' },
    { name: 'HR Round', description: 'Expectation setting, background check, and negotiations.', icon: '👥', color: '#fbbf24' },
    { name: 'System Design', description: 'Scalability, Load balancing, and Database design.', icon: '🏗️', color: '#3b82f6' },
  ];

  return (
    <div className="interviews-page animate-fade-in">
      <div className="page-header">
        <h1>AI Mock Interviews</h1>
        <p>Choose a category to start your AI-powered practice session.</p>
      </div>

      <div className="categories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
        {categories.map((cat, index) => (
          <div key={index} className="category-card" style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)', transition: 'transform 0.3s ease' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{cat.icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{cat.name}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>{cat.description}</p>
            <button style={{ padding: '12px 24px', background: 'var(--primary)', color: 'white', borderRadius: '12px', fontWeight: '600' }}>
              Start Session
            </button>
          </div>
        ))}
      </div>

      <div className="past-sessions" style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Past Performance</h2>
        <div style={{ background: 'var(--bg-subtle)', borderRadius: '24px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid var(--glass-border)' }}>
                <th style={{ padding: '20px' }}>Role</th>
                <th style={{ padding: '20px' }}>Type</th>
                <th style={{ padding: '20px' }}>Date</th>
                <th style={{ padding: '20px' }}>Score</th>
                <th style={{ padding: '20px' }}>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i} style={{ borderBottom: i < 3 ? '1px solid var(--glass-border)' : 'none' }}>
                  <td style={{ padding: '20px', fontWeight: '600' }}>Full Stack Engineer</td>
                  <td style={{ padding: '20px' }}>Technical</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>May 02, 2026</td>
                  <td style={{ padding: '20px' }}><span style={{ color: '#10b981', fontWeight: '700' }}>85%</span></td>
                  <td style={{ padding: '20px' }}><button style={{ color: 'var(--primary)', fontWeight: '600', background: 'none' }}>View Detailed Report</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterviewsPage;
