import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_plum.png';
import './DashboardLayout.css';

const DashboardLayout = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear tokens etc.
    navigate('/');
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="PrepPilot" className="sidebar-logo" />
          <span className="sidebar-brand">PrepPilot</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Overview</span>
          </NavLink>
          
          <NavLink to="/dashboard/interviews" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>Mock Interviews</span>
          </NavLink>

          <NavLink to="/dashboard/ats-scanner" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>ATS Scanner</span>
          </NavLink>

          <NavLink to="/dashboard/performance" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>Performance</span>
          </NavLink>

          <NavLink to="/dashboard/mentors" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>Mentors</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? (
              <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> <span>Dark Mode</span></>
            ) : (
              <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> <span>Light Mode</span></>
            )}
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search features, interviews, resources..." />
          </div>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="user-avatar">JD</div>
              <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-plan">Pro Member</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
