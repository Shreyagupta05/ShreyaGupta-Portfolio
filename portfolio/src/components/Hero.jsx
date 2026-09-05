import React from 'react';
import { ArrowRight, Sparkles, Download, Mail, Terminal, CheckCircle2 } from 'lucide-react';
import AvatarStatic from './AvatarStatic';

/**
 * Hero Component
 * Introduction Hero Section with Developer Avatar Card & Action Buttons
 */
const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '90vh',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <div
        className="section-container"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro Text & Badges */}
          <div>
            {/* Status Pill */}
            <div
              className="badge badge-emerald"
              style={{
                marginBottom: '20px',
                boxShadow: '0 2px 10px rgba(16, 185, 129, 0.15)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 6px #10b981',
                }}
              />
              Python Developer Intern @ ZypherSec | MCA 2027
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                color: '#0f172a',
                marginBottom: '16px',
                letterSpacing: '-1px',
              }}
            >
              Hi, I'm <br />
              <span className="gradient-text">Shreya Gupta</span>
            </h1>

            {/* Role Subtitle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#0284c7',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={20} color="#0284c7" />
              <span>Python Engineer & Frontend Developer</span>
            </div>

            {/* Short Resume Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '32px',
                maxWidth: '540px',
              }}
            >
              Motivated MCA student at DAVV Indore with hands-on experience in Python Development,
              Machine Learning, Data Structures & Algorithms, and modern frontend web design.
              Passionate about building clean, efficient, and recruiter-friendly applications.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </a>

              <a href="https://drive.google.com/file/d/1kK7hteSs2kNSust8QCBa1I62gCKj7nfe/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-secondary">
                <Download size={18} /> Download Resume
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{ padding: '12px 18px' }}
                title="Send Message"
              >
                <Mail size={18} color="#0284c7" />
              </a>
            </div>

            {/* Core Tech Stack Badges */}
            <div
              style={{
                marginTop: '36px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Terminal size={14} color="#0284c7" /> CORE TECH & UPSKILLING:
              </span>
              <span className="badge">Python</span>
              <span className="badge badge-purple" style={{ background: '#f5f3ff', color: '#6d28d9', borderColor: '#ddd6fe' }}>
                <Sparkles size={13} style={{ marginRight: '2px' }} /> Generative AI (Code Sikha)
              </span>
              <span className="badge badge-emerald">Machine Learning</span>
              <span className="badge badge-amber">DSA & SQL</span>
              <span className="badge badge-blue">JavaScript & Web</span>
            </div>
          </div>

          {/* Right Column: Static Developer Avatar Card */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(2, 132, 199, 0.12)',
              border: '1px solid #bae6fd',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AvatarStatic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
