import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const linkStyle = (path) => ({
        fontWeight: 500,
        color: isActive(path) ? 'var(--accent)' : 'var(--text-dark)',
        position: 'relative',
        padding: '0.5rem 0'
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: 'var(--text-dark)' }}>
                        VELUXO<span style={{ color: 'var(--accent)' }}>.</span>
                    </Link>

                    <nav style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/" style={linkStyle('/')}>Home</Link>
                        <Link to="/shop" style={linkStyle('/shop')}>Shop</Link>
                        <Link to="/stores" style={linkStyle('/stores')}>Stores</Link>
                        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, width: '100%' }}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border)',
                padding: '3rem 1.5rem',
                marginTop: 'auto'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>VELUXO LLC</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem', fontSize: '0.9rem' }}>
                        <Link to="/shop">Shop</Link>
                        <Link to="/stores">Stores</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <p style={{ opacity: 0.6, fontSize: '0.875rem' }}>
                        &copy; {new Date().getFullYear()} Veluxo LLC. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
