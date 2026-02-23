import React from "react";

export default function Contact() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <div className="animate-fade-up">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '2rem' }}>Write to us and we'll get back to you.</p>
        <a href="mailto:hello@veluxollc.com" className="btn btnPrimary" style={{ fontSize: '1.1rem' }}>hello@veluxollc.com</a>
      </div>
    </div>
  );
}
