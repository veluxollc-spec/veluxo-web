import React from 'react';

export default function Logo() {
  return (
    <div className="logo-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      {/* Structural V Icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28L4 8h6l6 10 6-10h6L16 28z" fill="#fff" />
        <path d="M16 28l-6-10h4l2 3.33L18 18h4l-6 10z" fill="#0ea5e9" />
      </svg>

      {/* Logos Text */}
      <h1 className="logo-text" style={{
        margin: 0,
        padding: 0,
        fontSize: '1.5rem',
        fontWeight: '800',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#fff',
        transition: 'color 0.2s ease',
      }}>
        VELUXO
      </h1>

      <style>{`
        .logo-container:hover .logo-text {
          color: #f8fafc;
        }
        .logo-container:hover svg {
          transform: translateY(-2px);
        }
        svg {
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}
