import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FileCode, ExternalLink } from 'lucide-react';

/**
 * CodeModal Component
 * Interactive code snippet viewer modal allowing visitors to inspect real Python code
 * from Shreya's project workspace with copy-to-clipboard functionality.
 */
const CodeModal = ({ isOpen, onClose, project }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen || !project) return null;

  const currentSnippet = project.snippets ? project.snippets[activeTab] : null;

  const handleCopy = () => {
    if (currentSnippet && currentSnippet.code) {
      navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          background: '#0f172a',
          border: '1px solid var(--glass-border-hover)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Terminal size={20} color="#38bdf8" />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>
                {project.title} — Python Code Snippet
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Inspect authentic Python logic from Shreya's workspace
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: 'var(--text-primary)',
              padding: '6px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              transition: 'background 0.2s ease',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* File Tabs Header (if multiple files exist) */}
        {project.snippets && project.snippets.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              padding: '10px 24px',
              background: '#090d16',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            {project.snippets.map((snip, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-mono)',
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === idx ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  color: activeTab === idx ? '#38bdf8' : 'var(--text-muted)',
                }}
              >
                <FileCode size={14} />
                {snip.fileName}
              </button>
            ))}
          </div>
        )}

        {/* Code Content Container */}
        <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
          {/* Floating Copy Button */}
          <button
            onClick={handleCopy}
            style={{
              position: 'absolute',
              top: '16px',
              right: '24px',
              background: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid var(--glass-border)',
              color: copied ? '#34d399' : 'var(--text-secondary)',
              padding: '8px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 10,
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>

          {/* Syntax Highlighted Code Viewer */}
          <pre className="code-block" style={{ margin: 0, padding: '24px', borderRadius: 0, border: 'none' }}>
            <code>
              {currentSnippet ? currentSnippet.code : '# No code snippet provided'}
            </code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '14px 24px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span>Language: Python 3 • Location: {currentSnippet ? currentSnippet.fileName : ''}</span>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeModal;
