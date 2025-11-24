import React from 'react';
import Hero from './components/Hero';
import GuideSection from './components/GuideSection';
import Services from './components/Services';
import ThemeToggle from './components/ThemeToggle';
import { placesData } from './data/places';

function App() {
    return (
        <div className="app">
            <ThemeToggle />
            <Hero />

            <main>
                {placesData.map((section, index) => {
                    // Determine ID based on category
                    let sectionId = '';
                    if (section.category.includes('Atrani')) sectionId = 'places-section';
                    if (section.category.includes('eat')) sectionId = 'food-section';

                    return (
                        <GuideSection
                            key={index}
                            id={sectionId}
                            title={section.category}
                            items={section.items}
                        />
                    );
                })}

                <Services />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '40px 20px',
                opacity: 0.6,
                fontSize: '0.9rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: '40px'
            }}>
                <p>&copy; {new Date().getFullYear()} Amalfi.Day Guide. All rights reserved.</p>
                <p style={{ marginTop: '10px' }}>
                    <a href="https://amalfi.day/ferry-schedule" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', marginRight: '15px' }}>Ferry Schedule</a>
                    <a href="https://amalfi.day/bus-schedule" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Bus Schedule</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
