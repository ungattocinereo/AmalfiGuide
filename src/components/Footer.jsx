import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

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
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            <p style={{ marginTop: '10px' }}>
                {t('footer.made_with')}
            </p>
        </footer>
    );
};

export default Footer;
