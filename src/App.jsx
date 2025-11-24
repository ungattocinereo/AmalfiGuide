import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PlaceCardNew from './components/PlaceCardNew';
// import PlaceModal from './components/PlaceModal'; // Modal no longer needed
import Footer from './components/Footer';
import { placesData } from './data/places_new';
import './styles/main.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    // const [selectedPlace, setSelectedPlace] = useState(null); // State no longer needed

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="app-container bg-gray-50 dark:bg-neutral-950 min-h-screen">
            {/* Navbar Removed as requested */}

            <Hero theme={theme} setTheme={setTheme} />

            <main className="main-content pb-20">
                {placesData.map((category) => (
                    <section
                        key={category.category}
                        id={category.category.toLowerCase().includes('eat') ? 'food-section' : 'places-section'}
                        className="category-section py-16 px-4"
                    >
                        <div className="container mx-auto max-w-7xl">
                            <div className="flex items-center justify-center mb-12">
                                <h2 className="text-4xl md:text-6xl lg:text-[85px] font-bold text-center font-heading text-gray-900 dark:text-white relative inline-block leading-tight">
                                    {category.category}
                                    <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-400 rounded-full"></span>
                                </h2>
                            </div>

                            {/* Grid Layout for Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((place) => (
                                    <PlaceCardNew
                                        key={place.id}
                                        place={place}
                                    // onClick={setSelectedPlace} // Handled internally now
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <Footer />

            {/* Modal - Commented out as cards expand in place */}
            {/* {selectedPlace && (
                <PlaceModal
                    place={selectedPlace}
                    onClose={() => setSelectedPlace(null)}
                />
            )} */}
        </div>
    );
};

export default App;
