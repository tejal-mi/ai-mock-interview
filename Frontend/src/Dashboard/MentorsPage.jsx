import React from 'react';

const MentorsPage = () => {
  const mentors = [
    { name: 'Sarah Wilson', role: 'Sr. Engineer @ Google', expertise: 'Frontend, React, Career', image: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'Michael Chen', role: 'Staff Engineer @ Meta', expertise: 'Backend, System Design', image: 'https://i.pravatar.cc/150?u=michael' },
    { name: 'Aria Rodriguez', role: 'HR Manager @ Amazon', expertise: 'Behavioral, Negotiations', image: 'https://i.pravatar.cc/150?u=aria' },
    { name: 'David Kim', role: 'Director of Eng @ Netflix', expertise: 'Leadership, Architecture', image: 'https://i.pravatar.cc/150?u=david' },
  ];

  return (
    <div className="mentors-page animate-fade-in">
      <div className="page-header">
        <h1>Expert Mentors</h1>
        <p>Book one-on-one sessions with industry experts to get personalized guidance.</p>
      </div>

      <div className="mentors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card" style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <img src={mentor.image} alt={mentor.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '16px', border: '4px solid var(--primary)' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{mentor.name}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '8px' }}>{mentor.role}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Expertise: {mentor.expertise}</p>
            <button style={{ width: '100%', padding: '12px', background: 'var(--bg-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontWeight: '600', color: 'var(--text-main)', transition: 'all 0.3s ease' }}>
              View Profile & Schedule
            </button>
          </div>
        ))}
      </div>

      <div className="mentorship-benefits" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎯</div>
          <h4>Mock Interviews</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get real-world interview practice with feedback.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
          <h4>Career Strategy</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Plan your next career move with veterans.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💡</div>
          <h4>Resume Review</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get your resume polished for top companies.</p>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;
