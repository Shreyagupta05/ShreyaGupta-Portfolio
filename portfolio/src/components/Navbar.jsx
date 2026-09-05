import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, Menu, X, FileText, Send, User, Briefcase, GraduationCap, Award, Home, Download } from 'lucide-react';

/**
 * Navbar Component
 * Clean White & Blue Header with Download Resume option & Section Navigation
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Certificates', href: '#certificates', icon: Award },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)',
              border: '2px solid #38bdf8',
            }}
          >
            <img src="/shreya_profile.png" alt="Shreya Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>
              Shreya Gupta
            </span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: '#0284c7', fontWeight: '700' }}>
              Python & MCA Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: '600',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Icon size={16} />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Download Resume Button & Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://drive.google.com/file/d/1kK7hteSs2kNSust8QCBa1I62gCKj7nfe/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem',
            }}
            title="Open & Download Resume PDF"
          >
            <Download size={16} /> Download Resume
          </a>

          <a
            href="https://github.com/guptashreya2305"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
            style={{
              color: 'var(--text-secondary)',
              padding: '8px',
              borderRadius: '50%',
              background: '#f1f5f9',
              display: 'flex',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0284c7';
              e.currentTarget.style.background = '#e0f2fe';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = '#f1f5f9';
            }}
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/shreya-gupta05"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            style={{
              color: 'var(--text-secondary)',
              padding: '8px',
              borderRadius: '50%',
              background: '#f1f5f9',
              display: 'flex',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0284c7';
              e.currentTarget.style.background = '#e0f2fe';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = '#f1f5f9';
            }}
          >
            <Linkedin size={18} />
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: '#f1f5f9',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: '#f8fafc',
                }}
              >
                <Icon size={18} color="#0284c7" />
                {link.name}
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1kK7hteSs2kNSust8QCBa1I62gCKj7nfe/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
