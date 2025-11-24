import React from 'react';
import PlaceCard from './PlaceCard';

const GuideSection = ({ title, items, id }) => {
    return (
        <section id={id} style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '30px',
                color: 'var(--text-color)',
                borderBottom: '2px solid var(--accent-color)',
                paddingBottom: '10px',
                display: 'inline-block'
            }}>
                {title}
            </h2>
            <div className="places-grid">
                {items.map(place => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </div>
        </section>
    );
};

export default GuideSection;
