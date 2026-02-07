import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const buttonBase = {
    padding: '0.875rem 1.75rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1rem',
    display: 'inline-block',
    textDecoration: 'none'
  };

  const primaryBtn = {
    ...buttonBase,
    backgroundColor: 'var(--accent)',
    color: '#fff',
    border: 'none',
  };

  const secondaryBtn = {
    ...buttonBase,
    backgroundColor: '#fff',
    color: 'var(--text-dark)',
    border: '1px solid var(--border)',
  };

  const sectionStyle = {
    padding: '5rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '8rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Premium Essentials for <br />
            <span style={{ color: 'var(--accent)' }}>Modern Living</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.7,
            marginBottom: '2.5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Veluxo brings you a curated collection of high-quality products designed to elevate your everyday experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/shop" style={primaryBtn}>Shop Now</Link>
            <Link to="/stores" style={secondaryBtn}>View Stores</Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={sectionStyle}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { title: 'Premium Quality', desc: 'Crafted with materials that stand the test of time.' },
            { title: 'Fast Shipping', desc: 'Free expedited shipping on all domestic orders.' },
            { title: 'Smart Selection', desc: 'Curated products that actually add value to your life.' }
          ].map((item, i) => (
            <div key={i} style={{
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ opacity: 0.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ ...sectionStyle, backgroundColor: 'var(--bg-secondary)', borderRadius: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>How It Works</h2>
          <p style={{ opacity: 0.7 }}>Simple, transparent, and efficient.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {[
            { step: '01', title: 'Browse', text: 'Explore our catalog of premium goods.' },
            { step: '02', title: 'Select', text: 'Choose your favorite items securely.' },
            { step: '03', title: 'Enjoy', text: 'Fast delivery to your doorstep.' }
          ].map((s) => (
            <div key={s.step}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem'
              }}>
                {s.step}
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ opacity: 0.7 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ ...sectionStyle, textAlign: 'center', padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Stay in the Loop</h2>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Subscribe for exclusive offers and new product drops.</p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.75rem', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: '0.875rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button style={primaryBtn}>Subscribe</button>
        </form>
      </section>
    </div>
  );
}
