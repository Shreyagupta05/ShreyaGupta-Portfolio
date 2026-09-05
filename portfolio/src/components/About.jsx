import React from 'react';
import { Target, Briefcase, Sparkles, CheckCircle2, Award } from 'lucide-react';

/**
 * About Component
 * Concise, recruiter-friendly summary based on resume objective, internship, & active Generative AI upskilling.
 */
const About = () => {
  return (
    <section
      id="about"
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">PROFESSIONAL SUMMARY</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {/* Objective & Role Profile */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={20} color="#0284c7" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                  Career Objective
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Motivated MCA student with hands-on experience in Frontend Development and Machine Learning.
                Strong foundation in Data Structures and Algorithms (DSA) and problem-solving. Seeking an
                entry-level software development role to apply technical skills and grow in a collaborative environment.
              </p>
            </div>

            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0284c7',
                fontWeight: '700',
                fontSize: '0.9rem',
              }}
            >
              <CheckCircle2 size={18} /> Open for Full-Time Software Engineering Roles
            </div>
          </div>

          {/* Current Experience Highlights */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
              borderColor: '#bae6fd',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                    Python Developer Intern
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '700' }}>
                    ZypherSec • July 2026 – Present
                  </span>
                </div>
              </div>

              <ul
                style={{
                  paddingLeft: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  fontSize: '0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <li>Working remotely to design and implement backend Python scripts and developer tools.</li>
                <li>Collaborating in an agile workflow to maintain clean, modular, and optimized code.</li>
                <li>Applying Object-Oriented Programming (OOP) and DSA principles to solve real-world problems.</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #bae6fd',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0369a1',
                fontWeight: '700',
                fontSize: '0.9rem',
              }}
            >
              <Award size={18} /> Verified Developer Intern
            </div>
          </div>

          {/* Generative AI Upskilling Card */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
              borderColor: '#ddd6fe',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#f5f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6d28d9',
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                    Generative AI & LLMs
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#6d28d9', fontWeight: '700' }}>
                    Code Sikha Institute • Active Upskilling
                  </span>
                </div>
              </div>

              <ul
                style={{
                  paddingLeft: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  fontSize: '0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <li>Enhancing expertise in Generative AI architectures, Large Language Models (LLMs), and Prompt Engineering.</li>
                <li>Executing hands-on projects and capstone work at Code Sikha Institute for practical AI deployment.</li>
                <li>Demonstrating continuous learning and technical adaptability to build modern AI-driven solutions.</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #ddd6fe',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6d28d9',
                fontWeight: '700',
                fontSize: '0.9rem',
              }}
            >
              <Sparkles size={18} /> Hands-on Capstone Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
