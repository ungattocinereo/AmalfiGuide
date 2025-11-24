import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../locales';
import { getPlacesData } from '../data/places_new';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');
    const [placesData, setPlacesData] = useState(getPlacesData('EN'));

    useEffect(() => {
        setPlacesData(getPlacesData(language));
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, placesData }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
