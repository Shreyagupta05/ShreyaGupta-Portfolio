import React from 'react';
import { Heart, Github, Linkedin, Code } from 'lucide-react';

/**
 * Footer Component
 * Footer with copyright and quick navigation links.
 */
const Footer = () => {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#f8fafc',
        padding: '40px 24px',
        borderTop: '1px solid #1e293b',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>
            Shreya Gupta
          </span>
          <span style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8' }}>
            Python Developer Intern @ ZypherSec | MCA Student @ DAVV
          </span>
        </div>

        <div style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
          © {new Date().getFullYear()} Shreya Gupta. Built with React & Django.
        </div>

        <div style={{ display: 'flex', gap: '14px' }}>
          <a
            href="https://github.com/guptashreya2305"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shreya-gupta05"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/guptashreya2305"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <Code size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
