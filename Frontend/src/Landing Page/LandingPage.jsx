import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturesGrid from './FeaturesGrid';
import TechnicalRound from './TechnicalRound';
import DetailedFeatures from './DetailedFeatures';
import ATSScanner from './ATSScanner';
import FlowingMenu from './Flower-name-component';
import Footer from './Footer';

const LandingPage = ({ theme, toggleTheme, onOpenAuth }) => {
  const menuItems = [
    { link: '#', text: 'AI Mock Interviews', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80' },
    { link: '#', text: 'Instant Feedback', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80' },
    { link: '#', text: 'Expert Mentors', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80' },
    { link: '#', text: 'Career Coaching', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80' },
  ];

  return (
    <div className="landing-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenAuth={onOpenAuth} />
      <Hero />
      <FeaturesGrid />
      <TechnicalRound />
      <DetailedFeatures />
      <ATSScanner />
      <section style={{ height: '600px', borderTop: '1px solid var(--glass-border)', marginTop: '60px' }}>
        <FlowingMenu 
          items={menuItems}
          speed={20}
          textColor="var(--text-muted)"
          bgColor="var(--bg-light)"
          marqueeBgColor="var(--bg-subtle)"
          marqueeTextColor="var(--primary)"
          borderColor="var(--glass-border)"
        />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;

