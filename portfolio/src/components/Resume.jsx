import React from 'react';
import { Download, FileText, ExternalLink, Mail, Phone, MapPin, CheckCircle, Heart, Award } from 'lucide-react';

/**
 * Resume Component
 * Downloadable PDF section + embedded visual resume sheet auto-filled from Shreya's resume.
 */
const Resume = () => {
  const handleDownload = () => {
    // Triggers download of the generated resume file or opens printable view
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shreya_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Curriculum Vitae</span>
        <h2 className="section-title">
          My <span className="gradient-text">Professional Resume</span>
        </h2>
      </div>

      {/* Main Resume Container */}
      <div className="glass-panel" style={{ padding: '40px', position: 'relative' }}>
        {/* Top Action Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            paddingBottom: '28px',
            marginBottom: '32px',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #38bdf8, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <FileText size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>
                Shreya Gupta — Official Resume
              </h3>
              <span style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: '600' }}>
                MCA Student & Python Developer Intern @ ZypherSec
              </span>
            </div>
          </div>

          <button onClick={handleDownload} className="btn-primary" style={{ padding: '12px 28px' }}>
            <Download size={20} /> Download PDF Resume
          </button>
        </div>

        {/* Embedded Visual Resume Sheet */}
        <div
          style={{
            background: 'rgba(9, 13, 22, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '36px',
            color: 'var(--text-primary)',
          }}
        >
          {/* Header Contact Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '20px',
              paddingBottom: '24px',
              borderBottom: '1px stroke rgba(255, 255, 255, 0.1)',
            }}
          >
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.5px' }} className="gradient-text">
                SHREYA GUPTA
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="#38bdf8" /> Barwani, Madhya Pradesh, India
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#34d399" /> +91 9669184602
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#38bdf8" /> guptashreya2305@gmail.com
              </span>
            </div>
          </div>

          {/* Objective */}
          <div style={{ marginTop: '24px', marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '1px', fontWeight: '700', marginBottom: '8px' }}>
              Career Objective
            </h4>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Motivated MCA student with hands-on experience in Frontend Development and Machine Learning. Strong foundation in
              Data Structures and Algorithms (DSA) and problem-solving. Seeking an entry-level software development role to apply
              technical skills and grow in a collaborative environment.
            </p>
          </div>

          {/* Grid Layout: Education & Experience */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '28px' }}>
            {/* Experience */}
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#a855f7', letterSpacing: '1px', fontWeight: '700', marginBottom: '14px' }}>
                Professional Experience
              </h4>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '1.05rem' }}>Python Developer Intern</div>
                <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: '600' }}>ZypherSec (Remote) • July 2026 – Present</div>
                <ul style={{ marginTop: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)', paddingLeft: '16px' }}>
                  <li>Designing and implementing backend Python scripts and developer solutions.</li>
                  <li>Collaborating in an agile workflow for clean, well-documented code.</li>
                </ul>
              </div>
            </div>

            {/* Education Summary */}
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#34d399', letterSpacing: '1px', fontWeight: '700', marginBottom: '14px' }}>
                Education Summary
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', fontSize: '0.88rem' }}>
                  <div style={{ fontWeight: '700', color: '#ffffff' }}>MCA — DAVV Indore (2025–2027)</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Master of Computer Applications</div>
                </div>
                <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', fontSize: '0.88rem' }}>
                  <div style={{ fontWeight: '700', color: '#ffffff' }}>B.Sc CS — S.B.N. Govt P.G. College (2022–2025)</div>
                  <div style={{ color: '#34d399', fontWeight: '600' }}>CGPA: 7.97 / 10</div>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths, Extracurriculars & Languages */}
          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#fbbf24', fontWeight: '700', marginBottom: '8px' }}>
                Key Strengths
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="badge badge-amber">Fast Learner</span>
                <span className="badge badge-amber">Logical Thinker</span>
                <span className="badge badge-amber">Clean UI Design</span>
                <span className="badge badge-amber">Team Collaboration</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#ec4899', fontWeight: '700', marginBottom: '8px' }}>
                Interests & Hobbies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="badge" style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)' }}>
                  Playing Hockey
                </span>
                <span className="badge" style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)' }}>
                  Playing Guitar
                </span>
                <span className="badge" style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)' }}>
                  Dancing
                </span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#38bdf8', fontWeight: '700', marginBottom: '8px' }}>
                Languages
              </h4>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                English (Professional), Hindi (Native)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
