
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ExternalLink } from 'lucide-react';

const PlaceModal = ({ place, onClose }) => {
    // Handle Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!place) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4">

                {/* Backdrop - Desktop Only (Click to close) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] bg-white dark:bg-neutral-900 md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
                    // Stop propagation to prevent closing when clicking inside modal
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Mobile Header (Close Button) */}
                    <div className="md:hidden absolute top-0 left-0 right-0 p-4 flex justify-end z-20 bg-gradient-to-b from-black/50 to-transparent">
                        <button
                            onClick={onClose}
                            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Desktop Close Button */}
                    <button
                        onClick={onClose}
                        className="hidden md:block absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors z-20"
                    >
                        <X size={20} className="text-gray-700 dark:text-gray-200" />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
                        <img
                            src={place.photo}
                            alt={place.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-orange-500 rounded-full">
                                {place.category}
                            </span>
                            <h2 className="text-3xl font-bold text-white font-heading">{place.name}</h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-white dark:bg-neutral-900">

                        {/* Desktop Header */}
                        <div className="hidden md:block mb-6">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                                {place.category}
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-heading mb-2">{place.name}</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 italic">{place.tagline}</p>
                        </div>

                        {/* Mobile Title (Already in image overlay, but tagline here) */}
                        <div className="md:hidden mb-6">
                            <p className="text-lg text-gray-500 dark:text-gray-400 italic">{place.tagline}</p>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {place.fullDesc || place.shortDesc}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-neutral-800">
                            {place.googleMapsLink && (
                                <a
                                    href={place.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 dark:shadow-none"
                                >
                                    <MapPin size={20} />
                                    View on Map
                                </a>
                            )}
                            {place.tripAdvisorLink && (
                                <a
                                    href={place.tripAdvisorLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-neutral-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                    TripAdvisor
                                </a>
                            )}
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PlaceModal;

