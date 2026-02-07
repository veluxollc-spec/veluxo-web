import React from 'react';

const stores = [
  { name: "Amazon", desc: "Fast shipping with Prime.", color: "#FF9900" },
  { name: "Shopify Store", desc: "Direct from our main warehouse.", color: "#95BF47" },
  { name: "TikTok Shop", desc: "Trending deals and exclusives.", color: "#000000" }
];

export default function Stores() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Official Stores</h1>
      <p style={{ opacity: 0.7, marginBottom: '4rem' }}>
        Purchase safely from your preferred platform.
      </p>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {stores.map(store => (
          <div key={store.name} style={{
            padding: '3rem 2rem',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{store.name}</h3>
            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>{store.desc}</p>
            <a href="#" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              borderRadius: '8px',
              backgroundColor: store.color,
              color: store.color === '#95BF47' ? '#1c3e16' : '#fff',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Visit Store
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
