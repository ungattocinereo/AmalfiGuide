import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PlaceCardNew from './components/PlaceCardNew';
// import PlaceModal from './components/PlaceModal'; // Modal no longer needed
import Footer from './components/Footer';
import './styles/main.css';
import { useLanguage } from './context/LanguageContext';

const App = () => {
    const [theme, setTheme] = useState('light');
    const { placesData, t } = useLanguage();
    // const [selectedPlace, setSelectedPlace] = useState(null); // State no longer needed

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        // Add/remove 'dark' class for Tailwind dark mode
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="app-container bg-gray-50 dark:bg-neutral-950 min-h-screen">
            {/* Navbar Removed as requested */}

            <Hero theme={theme} setTheme={setTheme} />

            <main className="main-content pb-20">
                {placesData.map((category) => {
                    // Determine if this is the "Not Only Amalfi" section
                    // We check the ID or a stable key instead of the translated title
                    const isNotOnlyAmalfi = category.id === 'not_only';

                    // Function to add gradient highlight to specific words
                    const renderCategoryTitle = (catId) => {
                        if (catId === 'places') {
                            return (
                                <>
                                    {t('categories.places.prefix')} <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">{t('categories.places.highlight')}</span> {t('categories.places.suffix')}
                                </>
                            );
                        } else if (catId === 'hiking') {
                            return (
                                <>
                                    <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">{t('categories.hiking.highlight')}</span> {t('categories.hiking.suffix')}
                                </>
                            );
                        } else if (catId === 'food') {
                            return (
                                <>
                                    {t('categories.food.prefix')} <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">{t('categories.food.highlight')}</span>
                                </>
                            );
                        } else if (catId === 'not_only') {
                            return (
                                <>
                                    <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">{t('categories.not_only.highlight')}</span> {t('categories.not_only.suffix')}
                                </>
                            );
                        }
                        return category.category; // Fallback
                    };

                    return (
                        <section
                            key={category.id}
                            id={category.id === 'food' ? 'food-section' : 'places-section'}
                            className="category-section py-16 px-4"
                        >
                            <div className="container mx-auto max-w-7xl">
                                <div className="flex items-center justify-start mb-12">
                                    <h2 className="text-4xl md:text-6xl lg:text-[85px] font-bold text-left font-heading text-gray-900 dark:text-white relative inline-block leading-tight">
                                        {renderCategoryTitle(category.id)}
                                    </h2>
                                </div>

                                {/* Grid Layout for Cards - 2 columns for "Not Only Amalfi" even on mobile */}
                                <div className={isNotOnlyAmalfi ? "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"}>
                                    {category.items.map((place, index) => (
                                        <PlaceCardNew
                                            key={place.id}
                                            place={place}
                                            index={index}
                                        // onClick={setSelectedPlace} // Handled internally now
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })}
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
