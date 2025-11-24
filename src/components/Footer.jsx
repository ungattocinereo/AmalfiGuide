import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 20px',
            opacity: 0.6,
            fontSize: '0.9rem',
            borderTop: '1px solid var(--border-color)',
            marginTop: '40px',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)'
        }}>
            <p>&copy; {new Date().getFullYear()} Amalfi.Day Guide. All rights reserved.</p>
            <p style={{ marginTop: '10px' }}>
                Made with ❤️ for Amalfi lovers.
            </p>
        </footer>
    );
};

export default Footer;
