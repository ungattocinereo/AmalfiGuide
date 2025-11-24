import React from 'react';
import { Bus, Ship, Mountain, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const UsefulLinks = () => {
    const { t } = useLanguage();

    const links = [
        {
            id: 'bus',
            icon: Bus,
            url: 'https://cnr.pw/bus',
            color: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            id: 'ferry',
            icon: Ship,
            url: 'https://cnr.pw/ferry',
            color: 'bg-cyan-500',
            hoverColor: 'hover:bg-cyan-600'
        },
        {
            id: 'path_gods',
            icon: Mountain,
            url: 'https://amalfi.day/files/BUS-5080-AMALFI-AGEROLA-GRAGNANO-CASTELLAMMARE-NAPOLI.pdf',
            color: 'bg-green-600',
            hoverColor: 'hover:bg-green-700'
        },
        {
            id: 'photoshoot',
            icon: Camera,
            url: 'https://www.getyourguide.com/atrani-l128528/amalfi-sunrise-photoshoot-t1013879/',
            color: 'bg-purple-500',
            hoverColor: 'hover:bg-purple-600'
        }
    ];

    return (
        <section className="py-12 px-4 bg-gray-50 dark:bg-neutral-900/50">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white font-heading px-2">
                    {t('useful_links.title')}
                </h2>

                <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-shrink-0 w-[85vw] md:w-auto snap-center flex items-center p-4 rounded-2xl text-white shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${link.color} ${link.hoverColor}`}
                        >
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
                                <link.icon size={28} className="text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-tight">
                                    {t(`useful_links.${link.id}.title`)}
                                </span>
                                <span className="text-sm text-white/90 mt-1">
                                    {t(`useful_links.${link.id}.desc`)}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsefulLinks;
