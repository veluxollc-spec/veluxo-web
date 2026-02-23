import React, { useState } from 'react';

export default function EmailCapture() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('submitting');

        // Simulate short network request
        setTimeout(() => {
            localStorage.setItem('veluxo_notify_email', email);
            setStatus('success');
            setEmail('');
        }, 600);
    };

    if (status === 'success') {
        return (
            <div style={{
                padding: '1rem',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '10px',
                color: '#4ade80',
                textAlign: 'center',
                fontWeight: 500
            }}>
                Thanks! We'll notify you when we launch.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'submitting'}
                required
                style={{
                    flex: 1,
                    padding: '0.875rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    outline: 'none',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btnPrimary"
                style={{ padding: '0.875rem 1.5rem', whiteSpace: 'nowrap' }}
            >
                {status === 'submitting' ? '...' : 'Notify Me'}
            </button>
        </form>
    );
}
