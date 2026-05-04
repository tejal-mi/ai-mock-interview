import React from 'react';

const DashboardOverview = () => {
  const stats = [
    { label: 'Interviews Completed', value: '12', icon: '🎯', change: '+2 this week' },
    { label: 'Avg. Interview Score', value: '84%', icon: '📈', change: '+5% from last' },
    { label: 'Resume ATS Score', value: '78/100', icon: '📄', change: 'Needs improvement' },
    { label: 'Mentor Sessions', value: '3', icon: '🤝', change: 'Next: tomorrow' },
  ];

  return (
    <div className="dashboard-overview animate-fade-in">
      <div className="overview-header">
        <h1>Welcome back, John! 👋</h1>
        <p>Here's what's happening with your interview preparation today.</p>
      </div>

      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '32px 0' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem' }}>{stat.icon}</span>
              <span style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(129, 8, 92, 0.1)', color: 'var(--primary)', borderRadius: '8px', fontWeight: '600' }}>
                {stat.change}
              </span>
            </div>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</h3>
            <p style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-main)' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="overview-sections" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div className="recent-activity" style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Recent Interviews</h2>
          <div className="activity-list">
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < 3 ? '1px solid var(--glass-border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--bg-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>💻</div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>Frontend Developer Role</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Google • 2 days ago</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: '700', color: 'var(--primary)' }}>88/100</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="upcoming-tasks" style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Next Steps</h2>
          <div className="task-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button style={{ width: '100%', padding: '16px', background: 'var(--primary)', color: 'white', borderRadius: '12px', fontWeight: '600' }}>
              Start Daily Practice
            </button>
            <button style={{ width: '100%', padding: '16px', background: 'var(--bg-light)', color: 'var(--text-main)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontWeight: '600' }}>
              Optimize Resume
            </button>
            <button style={{ width: '100%', padding: '16px', background: 'var(--bg-light)', color: 'var(--text-main)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontWeight: '600' }}>
              Book a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
