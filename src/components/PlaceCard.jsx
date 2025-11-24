import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, Star, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const PlaceCard = ({ place }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="place-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--card-bg)',
                borderRadius: '0.75rem', // rounded-xl
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                border: '1px solid var(--border-color)',
                maxWidth: '100%',
                margin: '0 auto 20px auto',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Desktop Layout: Row, Mobile: Col */}
            <div className="card-inner" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                {/* Image Section */}
                <div className="card-image-container" style={{
                    width: '100%',
                    position: 'relative',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: 'var(--card-bg)'
                }}>
                    {place.photo ? (
                        <img
                            src={place.photo}
                            alt={place.name}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                                borderTopLeftRadius: '0.75rem',
                                borderTopRightRadius: '0.75rem',
                                // Desktop adjustments handled in CSS via media query
                            }}
                            className="card-img"
                        />
                    ) : (
                        <div style={{ height: '250px', width: '100%', background: '#ddd' }} />
                    )}
                </div>

                {/* Content Section */}
                <div className="card-content" style={{
                    width: '100%',
                    padding: '1.5rem', // p-6
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem' // space-y-2
                }}>

                    {/* Header: Category & Rating */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ color: 'var(--text-color)', opacity: 0.6, fontWeight: '500', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                            {place.tagline}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Star size={16} fill="#eab308" color="#eab308" /> {/* text-yellow-500 */}
                                <p style={{ marginLeft: '4px', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-color)' }}>
                                    5.0 <span style={{ fontWeight: '400', opacity: 0.6 }}>(24)</span>
                                </p>
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                <Heart size={20} className="text-pink-500" color="#ec4899" />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 style={{
                        fontSize: '1.5rem', // text-xl / md:text-3xl
                        fontWeight: '900', // font-black
                        color: 'var(--text-color)',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: '1.2'
                    }}>
                        {place.name}
                    </h3>

                    {/* Description */}
                    <p style={{
                        fontSize: '1rem', // text-base / md:text-lg
                        color: 'var(--text-color)',
                        opacity: 0.7,
                        lineHeight: '1.5'
                    }}>
                        {place.shortDesc}
                    </p>

                    {/* Expandable Full Description */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <p style={{ marginTop: '10px', fontSize: '0.95rem', opacity: 0.8, whiteSpace: 'pre-line' }}>
                                    {place.fullDesc}
                                </p>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                    {place.links.googleMaps && (
                                        <a href={place.links.googleMaps} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-color)', fontWeight: '600' }}>
                                            <MapPin size={16} /> Maps
                                        </a>
                                    )}
                                    {place.links.tripAdvisor && (
                                        <a href={place.links.tripAdvisor} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-color)', opacity: 0.8 }}>
                                            <ExternalLink size={16} /> TripAdvisor
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer / Action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <p style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-color)' }}>
                            Free
                            <span style={{ fontSize: '1rem', fontWeight: '400', opacity: 0.6 }}> / visit</span>
                        </p>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--bg-color)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontWeight: '600'
                            }}
                        >
                            {isExpanded ? 'Less' : 'More'}
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .card-inner {
            flex-direction: row !important;
          }
          .card-image-container {
            width: 33.333% !important;
          }
          .card-img {
            height: 100% !important;
            border-top-right-radius: 0 !important;
            border-bottom-left-radius: 0.75rem !important;
          }
          .card-content {
            width: 66.666% !important;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default PlaceCard;
