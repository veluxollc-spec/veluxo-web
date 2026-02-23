import React from 'react';
import EmailCapture from '../components/EmailCapture';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '8rem 0 6rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.4,
          zIndex: -1,
          filter: 'blur(60px)'
        }} />

        <div className="container">
          <div className="animate-fade-up">
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              borderRadius: '99px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--muted)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Coming Soon
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              backgroundImage: 'linear-gradient(to bottom right, #ffffff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Designed for Order.
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              Premium organization and curated essentials. Launching soon.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <EmailCapture />
              <a href="#featured" className="btn btnGhost" style={{ marginTop: '0.5rem' }}>View Featured Product</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section id="featured" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="animate-fade-up" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Featured Product</h2>
          </div>

          <div className="card animate-fade-up animate-delay-1" style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            background: 'var(--bg2)',
            border: '1px solid var(--border)'
          }}>
            {/* Image Side */}
            <div style={{
              flex: '1 1 400px',
              minHeight: '400px',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid var(--border)',
              position: 'relative'
            }}>
              <div style={{
                color: 'rgba(255,255,255,0.2)',
                fontSize: '1.2rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center',
                padding: '2rem'
              }}>
                Product Image<br />Placeholder
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                opacity: 0.3
              }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.1em' }}>VELUXO</span>
              </div>
            </div>

            {/* Details Side */}
            <div style={{ flex: '1 1 400px', padding: '3rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Acrylic Organizer</h3>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>3 Drawer Edition</p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: 'var(--text)'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>—</span> 3-drawer vertical organizer
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>—</span> Matte black body
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>—</span> Clear hinged top compartment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>—</span> Premium 3mm acrylic
                </li>
              </ul>

              <div style={{
                padding: '1.25rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                marginBottom: '2.5rem',
                fontSize: '0.9rem',
                color: 'var(--muted)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.75rem', fontSize: '1rem' }}>Dimensions</strong>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div>Height: 13–14 inches</div>
                  <div>Width: 9.5–10 inches</div>
                  <div>Depth: 7–8 inches</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btnPrimary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get Launch Updates</button>
                <button className="btn btnGhost">Request Specs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
