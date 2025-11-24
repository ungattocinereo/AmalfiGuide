import React from 'react';
import { Camera, Car, Utensils, Flower2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div style={{
        background: 'var(--card-bg)',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: 'var(--shadow)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
    }}>
        <div style={{
            background: 'var(--accent-color)',
            padding: '12px',
            borderRadius: '50%',
            color: '#fff',
            marginBottom: '5px'
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.1rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{desc}</p>
    </div>
);

const Services = () => {
    return (
        <section style={{ padding: '60px 20px', background: 'var(--bg-color)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    marginBottom: '40px',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Concierge Services
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '20px'
                }}>
                    <ServiceCard
                        icon={Camera}
                        title="Photoshoots"
                        desc="Capture your memories with a professional shoot."
                    />
                    <ServiceCard
                        icon={Car}
                        title="Transfers"
                        desc="Airport pickups and private drivers."
                    />
                    <ServiceCard
                        icon={Utensils}
                        title="Reservations"
                        desc="Best tables at the best restaurants."
                    />
                    <ServiceCard
                        icon={Flower2}
                        title="Special Events"
                        desc="Flowers, proposals, and celebrations."
                    />
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <a
                        href="mailto:gregory@amalfi.day"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            background: 'var(--text-color)',
                            color: 'var(--bg-color)',
                            borderRadius: '30px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
