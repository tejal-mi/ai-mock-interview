import React, { useState } from 'react';

const ATSScannerPage = () => {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="ats-scanner-page animate-fade-in">
      <div className="page-header">
        <h1>ATS Resume Scanner</h1>
        <p>Optimize your resume for applicant tracking systems and increase your interview chances.</p>
      </div>

      <div className="scanner-container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px', marginTop: '32px' }}>
        <div className="upload-section">
          <div 
            className={`drop-zone ${dragActive ? 'active' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
            style={{
              height: '400px',
              border: '2px dashed var(--glass-border)',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: dragActive ? 'rgba(129, 8, 92, 0.05)' : 'var(--bg-subtle)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📄</div>
            <h3 style={{ marginBottom: '8px' }}>Upload your resume</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Drag and drop or click to browse (PDF, DOCX)</p>
            <button style={{ padding: '12px 32px', background: 'var(--primary)', color: 'white', borderRadius: '12px', fontWeight: '600' }}>
              Select File
            </button>
          </div>

          <div className="job-description" style={{ marginTop: '24px' }}>
            <h3 style={{ marginBottom: '12px' }}>Target Job Description</h3>
            <textarea 
              placeholder="Paste the job description here for better matching..."
              style={{
                width: '100%',
                height: '200px',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid var(--glass-border)',
                background: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '0.95rem',
                resize: 'none'
              }}
            ></textarea>
          </div>
        </div>

        <div className="scanner-info">
          <div style={{ background: 'var(--bg-subtle)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)', marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>How it works</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li><strong>Keyword Analysis:</strong> We extract top keywords from the job description and check for their presence in your resume.</li>
              <li><strong>Formatting Check:</strong> We ensure your resume layout is readable by standard ATS parsers.</li>
              <li><strong>Content Scoring:</strong> We provide a match score based on experience level, skills, and education.</li>
            </ul>
          </div>

          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '32px', borderRadius: '24px', color: 'white' }}>
            <h3 style={{ marginBottom: '8px' }}>Pro Tip</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: '0.9' }}>
              Using standard fonts and avoiding complex tables or graphics helps ATS scanners read your content more accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATSScannerPage;
