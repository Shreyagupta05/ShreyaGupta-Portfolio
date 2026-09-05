import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

/**
 * Education Component
 * Dedicated Education section showcasing degrees, institutions, timelines, and grades.
 */
const Education = () => {
  const educationList = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'School of Computer Science & IT, DAVV',
      location: 'Indore, Madhya Pradesh',
      timeline: '2025 – 2027 (Expected)',
      status: 'Currently Pursuing',
      badgeColor: 'badge',
      highlights: [
        'Advanced Software Engineering & System Design',
        'Data Structures & Algorithms (DSA) in Python & C++',
        'Machine Learning & Data Analytics',
        'Modern Web Architecture & Database Systems',
      ],
    },
    {
      degree: 'Bachelor of Computer Science (B.Sc. CS)',
      institution: 'S.B.N. Govt. P.G. College',
      location: 'Barwani, Madhya Pradesh',
      timeline: '2022 – 2025',
      grade: 'CGPA: 7.97 / 10',
      status: 'Completed',
      badgeColor: 'badge badge-emerald',
      highlights: [
        'Object-Oriented Programming (OOP) Fundamentals',
        'Database Management Systems (DBMS & SQL)',
        'Operating Systems & Computer Networks',
        'Web Technology (HTML, CSS, JavaScript)',
      ],
    },
  ];

  return (
    <section
      id="education"
      style={{
        background: '#f8fafc',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">ACADEMIC JOURNEY</span>
          <h2 className="section-title">Education & Qualifications</h2>
        </div>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '32px',
                position: 'relative',
                background: '#ffffff',
                borderLeft: '4px solid #0284c7',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '4px',
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0284c7',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                    }}
                  >
                    <GraduationCap size={18} />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className={edu.badgeColor}>
                    <Calendar size={14} /> {edu.timeline}
                  </span>
                  {edu.grade && (
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '800',
                        color: '#047857',
                        background: '#ecfdf5',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid #a7f3d0',
                      }}
                    >
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                  marginBottom: '16px',
                }}
              >
                <MapPin size={15} /> {edu.location}
              </div>

              {/* Course Highlights */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '10px',
                  }}
                >
                  <BookOpen size={15} color="#0284c7" /> Core Coursework & Topics:
                </span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '8px',
                  }}
                >
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2 size={15} color="#0284c7" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
