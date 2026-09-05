import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle, Calendar, Sparkles } from 'lucide-react';

/**
 * Certificates Component
 * Certificate cards with clickable verification / view links.
 */
const Certificates = () => {
  const certificateList = [
    {
      title: 'AI & Machine Learning Certification',
      issuer: 'FIIT Foundation (in collaboration with IIT Delhi)',
      date: '2025',
      badge: 'AI & Machine Learning',
      link: 'https://drive.google.com/file/d/1odNqBbIV5zYqQBucJVH2fJCdXY2LD7fE/preview',
      description: 'Specialized training highlighting hands-on ML experience, predictive modeling, data analytics, and an end-to-end capstone project.',
    },
    {
      title: 'Frontend Web Development',
      issuer: 'SSI Digital Institution',
      date: '2023',
      badge: 'Web Development',
      link: 'https://drive.google.com/file/d/1JHOgy2-cL8gOr6JvE4HsKEglcl4_gQrc/preview',
      description: 'Professional certification in modern web architecture, mastering HTML5, CSS3, JavaScript (ES6+), and building responsive, interactive user interfaces.',
    },
    {
      title: 'Python Programming & Development',
      issuer: 'Yhills Edutech',
      date: '2024',
      badge: 'Python Development',
      link: 'https://drive.google.com/file/d/1jiat_nUMvWxO-fmHkHk5JIzvHo33_U_5/preview',
      description: 'Comprehensive certification in core & advanced Python, Object-Oriented Programming (OOP), module design, and backend script automation.',
    },
  ];

  return (
    <section
      id="certificates"
      style={{
        background: '#f8fafc',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">ACHIEVEMENTS & CREDENTIALS</span>
          <h2 className="section-title">Certifications & Licenses</h2>
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {certificateList.map((cert, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '28px',
                background: '#ffffff',
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
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <span className="badge badge-purple">{cert.badge}</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '6px',
                    lineHeight: '1.3',
                  }}
                >
                  {cert.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    color: '#0284c7',
                    marginBottom: '10px',
                  }}
                >
                  {cert.issuer}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}
                >
                  {cert.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                    marginBottom: '16px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> Issued: {cert.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontWeight: '700' }}>
                    <ShieldCheck size={14} /> Verified
                  </span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                  }}
                >
                  <ExternalLink size={16} /> View Certificate PDF
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
