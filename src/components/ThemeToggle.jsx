import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1000,
                background: 'var(--card-bg)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: 'var(--shadow)',
                color: 'var(--text-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
};

export default ThemeToggle;
