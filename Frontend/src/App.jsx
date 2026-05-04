import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './Landing Page/LandingPage';
import AuthPage from './LoginSignup/AuthPage';
import DashboardLayout from './Dashboard/DashboardLayout';
import DashboardOverview from './Dashboard/DashboardOverview';
import InterviewsPage from './Dashboard/InterviewsPage';
import ATSScannerPage from './Dashboard/ATSScannerPage';
import PerformancePage from './Dashboard/PerformancePage';
import MentorsPage from './Dashboard/MentorsPage';
import './index.css';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('prep-pilot-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme;
    localStorage.setItem('prep-pilot-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage theme={theme} toggleTheme={toggleTheme} onOpenAuth={() => navigate('/auth')} />} />
        <Route path="/auth" element={<AuthPage onBack={() => navigate('/')} />} />
        
        <Route path="/dashboard" element={<DashboardLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route index element={<DashboardOverview />} />
          <Route path="interviews" element={<InterviewsPage />} />
          <Route path="ats-scanner" element={<ATSScannerPage />} />
          <Route path="performance" element={<PerformancePage />} />
          <Route path="mentors" element={<MentorsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
