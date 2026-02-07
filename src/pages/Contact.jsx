import React from 'react';

export default function Contact() {
  const inputStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    marginBottom: '1rem'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
        <p style={{ opacity: 0.7 }}>
          Have questions? Email us at <br />
          <a href="mailto:info@veluxollc.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
            info@veluxollc.com
          </a>
        </p>
      </div>

      <form style={{
        backgroundColor: '#fff',
        padding: '2.5rem',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
            <input type="text" placeholder="Your Name" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input type="email" placeholder="you@example.com" style={inputStyle} />
          </div>
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
        <textarea rows="5" placeholder="How can we help?" style={{ ...inputStyle, resize: 'vertical' }}></textarea>

        <button style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: 'var(--primary)',
          color: '#fff',
          fontWeight: 600,
          border: 'none',
          borderRadius: '8px',
          marginTop: '0.5rem',
          fontSize: '1rem'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
