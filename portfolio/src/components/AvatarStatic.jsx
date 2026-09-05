import React from 'react';
import { ShieldCheck, Code, Sparkles, Terminal, Cpu, CheckCircle } from 'lucide-react';

/**
 * AvatarStatic Component
 * Static Professional Logo & Developer Avatar Card
 * Replaces the 3D Canvas with a clean, recruiter-friendly profile card.
 */
const AvatarStatic = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        position: 'relative',
        background: 'linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)',
      }}
    >
      {/* Decorative Background Circles */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.08)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(2, 132, 199, 0.06)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Avatar Graphic / Logo Container */}
      <div
        className="animate-float"
        style={{
          position: 'relative',
          marginBottom: '24px',
        }}
      >
        {/* Outer Glow Ring */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)',
            boxShadow: '0 12px 30px rgba(2, 132, 199, 0.25)',
          }}
        >
          {/* Inner Circle Avatar Badge */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img src="/shreya_profile.png" alt="Shreya Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '50%' }} />
          </div>
        </div>

        {/* Verified Badge Icon */}
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            background: '#ffffff',
            borderRadius: '50%',
            padding: '4px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="Verified Python Intern @ ZypherSec"
        >
          <CheckCircle size={22} color="#0284c7" fill="#e0f2fe" />
        </div>
      </div>

      {/* Developer Name & Title */}
      <h3
        style={{
          fontSize: '1.4rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '4px',
          textAlign: 'center',
        }}
      >
        Shreya Gupta
      </h3>
      <p
        style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#0284c7',
          marginBottom: '16px',
          textAlign: 'center',
        }}
      >
        Python Developer Intern @ ZypherSec
      </p>

      {/* Tech Stack Pills Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          maxWidth: '320px',
        }}
      >
        <span className="badge" style={{ background: '#f5f3ff', color: '#6d28d9', borderColor: '#ddd6fe' }}>
          <Sparkles size={14} /> GenAI & LLMs
        </span>
        <span className="badge" style={{ background: '#f0f9ff', color: '#0369a1', borderColor: '#bae6fd' }}>
          <Terminal size={14} /> Python
        </span>
        <span className="badge" style={{ background: '#ecfdf5', color: '#047857', borderColor: '#a7f3d0' }}>
          <Cpu size={14} /> Machine Learning
        </span>
        <span className="badge" style={{ background: '#fffbeb', color: '#b45309', borderColor: '#fde68a' }}>
          <ShieldCheck size={14} /> DSA & SQL
        </span>
      </div>
    </div>
  );
};

export default AvatarStatic;
