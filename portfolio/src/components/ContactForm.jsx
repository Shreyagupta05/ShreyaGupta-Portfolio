import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Code } from 'lucide-react';

/**
 * ContactForm Component
 * Interactive contact form and personal contact information cards.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Contact Info & Profiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '30px', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
                Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>EMAIL</span>
                    <a
                      href="mailto:guptashreya2305@gmail.com"
                      style={{ display: 'block', color: '#0f172a', fontWeight: '700', textDecoration: 'none' }}
                    >
                      guptashreya2305@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>PHONE</span>
                    <a
                      href="tel:+919669184602"
                      style={{ display: 'block', color: '#0f172a', fontWeight: '700', textDecoration: 'none' }}
                    >
                      +91 9669184602
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>LOCATION</span>
                    <span style={{ display: 'block', color: '#0f172a', fontWeight: '700' }}>
                      Barwani / Indore, Madhya Pradesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="glass-panel" style={{ padding: '24px', background: '#f8fafc' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                CONNECT ON PROFESSIONAL NETWORKS:
              </span>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com/guptashreya2305"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/shreya-gupta05"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/guptashreya2305"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                >
                  <Code size={16} /> LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="glass-panel" style={{ padding: '32px', background: '#ffffff' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  color: '#047857',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <CheckCircle2 size={24} />
                <div>
                  <h4 style={{ fontWeight: '800', marginBottom: '2px' }}>Message Sent Successfully!</h4>
                  <p style={{ fontSize: '0.9rem' }}>Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      background: '#f8fafc',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
