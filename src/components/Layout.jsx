import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Layout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path) => ({
    position: 'relative',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: isActive(path) ? '#fff' : 'rgba(255,255,255,0.6)',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(5, 5, 16, 0.85)',
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0, 0, 0, 0.1)',
      }}>

        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>

          <nav style={{ display: 'flex', gap: '2.5rem' }}>
            {['Home', 'Shop', 'Stores', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path} style={navLinkStyle(path)} className="nav-link">
                  {item}
                  {isActive(path) && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-29px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: 'var(--accent)',
                      boxShadow: '0 -2px 10px var(--accent), 0 0 5px var(--accent)',
                      animation: 'slide-in 0.3s ease-out forwards'
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, width: '100%' }}>
        <Outlet />
      </main>

      {/* Footer (Unchanged) */}
      <footer style={{
        backgroundColor: '#020205',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '5rem 0 2rem',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            <div>
              <div style={{ marginBottom: '1.5rem', opacity: 0.9, transform: 'scale(0.9)', transformOrigin: 'left' }}><Logo /></div>
              <p style={{ color: 'var(--muted)', maxWidth: '300px', fontSize: '0.9rem' }}>
                Engineering better experiences for the modern world.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>Shop</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/shop">All Products</Link></li>
                <li><Link to="/stores">Official Stores</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Veluxo LLC. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        .nav-link:hover { color: #fff !important; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        @keyframes slide-in {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
