import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Utensils } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'var(--hero-bg)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative'
        }}>

            {/* Top-Left Darkening Effect */}
            <motion.div
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '60%',
                    height: '60%',
                    background: 'radial-gradient(circle at top left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />

            {/* Main Content Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100%', // Full width
                margin: '0 auto',
                width: '100%',
                padding: '0', // Remove padding to allow edge-to-edge
                // Desktop: Row, Mobile: Column
                '@media (min-width: 768px)': {
                    flexDirection: 'row',
                    alignItems: 'stretch' // Stretch to fill height
                }
            }} className="hero-container">

                {/* Left Side: Text & Tags */}
                <div className="hero-text" style={{
                    flex: 1,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '40px 40px 40px 60px' // Restore padding, extra left for effect balance
                }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            lineHeight: '1.1',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '700',
                            marginBottom: '20px'
                        }}
                    >
                        Amalfi in a pocket:<br />
                        <span style={{ opacity: 0.9 }}>Secrets. Food. Insights.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            maxWidth: '500px',
                            marginBottom: '30px',
                            opacity: 0.9
                        }}
                    >
                        Welcome to the Amalfi Coast! Thanks for staying with us at Amalfi.day B&B. Here’s a curated selection of tips and recommendations from Greg, to help you explore like a local.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                    >
                        <button
                            onClick={() => scrollToSection('places-section')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '30px',
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <MapPin size={20} />
                            Places
                        </button>

                        <button
                            onClick={() => scrollToSection('food-section')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '30px',
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <Utensils size={20} />
                            Food
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Image & Sun Animation */}
                <div className="hero-image-container" style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    height: '100%',
                    minHeight: '50vh',
                    overflow: 'hidden' // Ensure sun doesn't cause scrollbars
                }}>
                    {/* Sun Animation */}
                    <motion.div
                        animate={{
                            scale: [0.9, 1.2, 0.9],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            width: '500px',
                            height: '500px',
                            background: 'var(--sun-color)',
                            borderRadius: '50%',
                            filter: 'blur(80px)',
                            zIndex: 0,
                            bottom: '-100px',
                            right: '-100px',
                        }}
                    />

                    {/* Hero Image */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        src="https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp"
                        alt="Amalfi Coast Watercolor"
                        style={{
                            width: 'auto',
                            maxWidth: '100%',
                            maxHeight: '90vh', // Prevent it from being too tall on huge screens
                            height: 'auto',
                            objectFit: 'contain',
                            zIndex: 1,
                            display: 'block', // Remove inline spacing
                            marginBottom: '0' // Force flush
                        }}
                    />
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .hero-container {
            flex-direction: row !important;
            text-align: left;
            align-items: stretch !important; 
          }
          .hero-text {
            align-items: flex-start !important;
            justify-content: center;
            padding-left: 80px !important; /* More space on desktop */
          }
          .hero-image-container {
             align-items: flex-end !important;
             justify-content: flex-end !important;
          }
        }
        @media (max-width: 767px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }
          .hero-text {
            align-items: center;
            margin-bottom: 20px;
            padding: 40px 20px !important;
          }
          .hero-image-container {
            justify-content: center !important;
            align-items: flex-end;
          }
          .hero-image-container img {
            max-width: 120% !important; /* Allow slight overflow on mobile if needed */
            margin-bottom: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default Hero;
