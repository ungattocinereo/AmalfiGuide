import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Utensils, Globe, Sun, Moon, ChevronDown } from 'lucide-react';

const Hero = ({ theme, setTheme }) => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('EN');

    const languages = [
        { code: 'EN', label: 'English' },
        { code: 'ES', label: 'Español' },
        { code: 'FR', label: 'Français' },
        { code: 'DE', label: 'Deutsch' },
        { code: 'RU', label: 'Русский' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <section className="relative w-full h-screen bg-[var(--hero-bg)] overflow-hidden">

            {/* Top Right Switchers - Absolute Fixed Position (Z-50) */}
            <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium hover:bg-white/70 dark:hover:bg-black/50 transition-all shadow-lg"
                    >
                        <Globe size={18} />
                        <span>{currentLang}</span>
                        <ChevronDown size={14} className={`transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                className="absolute top-full right-0 mt-2 w-40 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden py-2"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setCurrentLang(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/40 dark:hover:bg-white/10 transition-colors flex items-center justify-between ${currentLang === lang.code ? 'text-orange-600 font-bold' : 'text-gray-800 dark:text-gray-200'}`}
                                    >
                                        {lang.label}
                                        {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Theme Switcher */}
                <button
                    onClick={toggleTheme}
                    className="p-2 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/70 dark:hover:bg-black/50 transition-all shadow-lg"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>

            {/* =================================================================
         LAYER 1: Background Container (Glow + Image) - Z-0
         Strictly centered relative to the Hero section.
      ================================================================= */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">

                {/* Glow */}
                <div
                    className="absolute bottom-0 bg-[radial-gradient(ellipse_at_bottom,_#FFBE00_0%,_transparent_70%)] opacity-80"
                    style={{ width: '120vw', height: '70vh' }}
                />

                {/* Central Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10"
                    style={{ height: '90vh' }}
                >
                    <img
                        src="/hero-atrani.webp"
                        alt="Amalfi Coast Watercolor"
                        className="h-full w-auto object-contain object-bottom"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                        }}
                    />
                </motion.div>
            </div>

            {/* =================================================================
         LAYER 3: Headline Overlay - Z-40
         Spans the first 2/3 of the screen, independent of the grid below.
      ================================================================= */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute z-40 pointer-events-none"
                style={{
                    top: '18vh',
                    left: '5vw',
                    width: '60vw', // Spans approx 2/3
                }}
            >
                <h1
                    className="font-heading font-bold text-white leading-[0.9] drop-shadow-sm"
                    style={{
                        fontSize: 'clamp(4.6rem, 13vh, 14rem)',
                    }}
                >
                    Amalfi <br />
                    in a pocket:
                </h1>
            </motion.div>

            {/* =================================================================
         LAYER 2: Content Grid (3 Columns) - Z-30
         1/3 Left (Text), 1/3 Center (Empty), 1/3 Right (Stats)
      ================================================================= */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                <div className="w-full h-full max-w-[1800px] mx-auto grid grid-cols-12 px-[5vw]">

                    {/* Left Column (Span 4 = 1/3) */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-start pt-[30vh] pointer-events-auto">

                        {/* Yellow Tag Pill */}
                        <div className="inline-block px-[1.5vw] py-[0.8vh] bg-yellow-400 rounded-full mb-[3vh] shadow-md transform -rotate-1">
                            <span
                                className="text-gray-900 font-bold tracking-wide font-heading"
                                style={{ fontSize: 'clamp(0.9rem, 1.5vh, 1.8rem)' }}
                            >
                                Secrets • Food • Insights
                            </span>
                        </div>

                        <p
                            className="text-white/90 font-body leading-relaxed mb-[4vh]"
                            style={{ fontSize: 'clamp(1rem, 1.8vh, 2rem)' }}
                        >
                            Your curated, bite-sized guide to the Amalfi Coast. <br />
                            Everything you need — right at your fingertips.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-[1vw] w-full sm:w-auto">
                            <button
                                onClick={() => scrollToSection('food-section')}
                                className="px-[2vw] py-[1.5vh] bg-white text-orange-600 rounded-full font-bold shadow-lg hover:bg-orange-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                style={{ fontSize: 'clamp(0.9rem, 1.2vh, 1.4rem)' }}
                            >
                                <Utensils size={20} />
                                Explore Food Tips
                            </button>
                            <button
                                onClick={() => scrollToSection('places-section')}
                                className="px-[2vw] py-[1.5vh] bg-orange-600/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold shadow-lg hover:bg-orange-600/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                style={{ fontSize: 'clamp(0.9rem, 1.2vh, 1.4rem)' }}
                            >
                                <MapPin size={20} />
                                Local Secrets
                            </button>
                        </div>
                    </div>

                    {/* Center Column (Span 4 = 1/3) - Empty for Image */}
                    <div className="hidden lg:block col-span-4" />

                    {/* Right Column (Span 4 = 1/3) */}
                    <div className="hidden lg:flex col-span-4 flex-col justify-center items-end text-right pt-[20vh] pointer-events-auto">

                        {/* How we help section */}
                        <div className="mb-[5vh]">
                            <h3
                                className="font-heading font-bold text-white mb-[2vh] drop-shadow-md"
                                style={{ fontSize: 'clamp(1.5rem, 2.8vh, 3.2rem)' }}
                            >
                                How we can make <br /> your stay easier
                            </h3>
                            <ul className="space-y-[1vh]">
                                {['Book a restaurant', 'Hire a cab', 'Help with luggage'].map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-white/80 border-b border-white/20 pb-[0.5vh] last:border-0 drop-shadow-sm"
                                        style={{ fontSize: 'clamp(1.1rem, 1.9vh, 2rem)' }}
                                    >
                                        – {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Big Number */}
                        <div className="mt-[2vh]">
                            <div
                                className="leading-none font-bold text-white font-heading drop-shadow-lg"
                                style={{ fontSize: 'clamp(7.5rem, 20vh, 20rem)' }}
                            >
                                14
                            </div>
                            <div
                                className="text-white/90 font-light border-t border-white/30 pt-[1vh] mt-[1vh] inline-block drop-shadow-md"
                                style={{ fontSize: 'clamp(1.25rem, 2.3vh, 2.5rem)' }}
                            >
                                essential tips <br /> in this guide
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
