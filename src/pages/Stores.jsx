import React from 'react';

export default function Stores() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <div className="animate-fade-up">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Stores</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>Coming Soon — Products launching soon.</p>
      </div>
    </div>
  );
}
