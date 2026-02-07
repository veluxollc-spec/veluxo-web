import React from 'react';

const products = [
  { id: 1, name: "Veluxo Pro Headset", price: "$299.00", desc: "Active noise cancelling with 40hr battery." },
  { id: 2, name: "Smart Home Hub", price: "$149.00", desc: "Control your entire home with one device." },
  { id: 3, name: "Ergo Chair Ultra", price: "$599.00", desc: "Premium mesh ergonomic office chair." },
  { id: 4, name: "Travel Backpack", price: "$89.00", desc: "Water-resistant, smart compartments." },
  { id: 5, name: "Wireless Charger", price: "$45.00", desc: "Fast charging for all Qi-enabled devices." },
  { id: 6, name: "Minimal Desk Mat", price: "$35.00", desc: "Felt material, anti-slip base." }
];

export default function Shop() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Shop Collection</h1>
        <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Browse our selection of premium curated goods.
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            transition: 'transform 0.2s',
            backgroundColor: '#fff'
          }}>
            <div style={{
              height: '240px',
              backgroundColor: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontWeight: 500
            }}>
              Product Image Placeholder
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{p.name}</h3>
                <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{p.price}</span>
              </div>
              <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {p.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button style={{
                  padding: '0.75rem',
                  border: '1px solid var(--border)',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600
                }}>
                  View
                </button>
                <button style={{
                  padding: '0.75rem',
                  border: 'none',
                  backgroundColor: 'var(--text-dark)',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600
                }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
