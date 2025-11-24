import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TripAdvisorLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#00AF87] fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm8 0c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
    <circle cx="7" cy="12" r="1.5" />
    <circle cx="17" cy="12" r="1.5" />
  </svg>
);

const PlaceCardNew = ({ place }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col group bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer dark:bg-[#2d2b3b] dark:border-[#3e3b4e] dark:shadow-neutral-700/70 h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative pt-[60%] overflow-hidden">
        <img
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          src={place.photo}
          alt={place.name}
        />
        <div className="absolute top-3 right-3 max-w-[90%] flex justify-end">
          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm text-xs font-bold flex items-center gap-2 text-gray-800 flex-wrap justify-end">
            <span className="uppercase tracking-wide text-[10px] text-gray-500 border-r border-gray-300 pr-2 mr-1 whitespace-nowrap">{place.tag}</span>
            {place.rating && (
              <div className="flex items-center gap-1 whitespace-nowrap">
                <TripAdvisorLogo />
                <span>{place.rating}</span>
                <span className="text-gray-400 font-normal">({place.reviewCount})</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 grow">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-1">
            {place.tagline}
          </span>
          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
            {place.name}
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            {isExpanded ? (
              <motion.div
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-nunito text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>{place.fullDesc}</p>
              </motion.div>
            ) : (
              <motion.div
                key="gregory"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-nunito text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>{place.gregorysTake}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCardNew;

