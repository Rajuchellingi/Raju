
import React from 'react';
import { clients } from '../constants/data';
import AnimatedSection from './AnimatedSection';

const Clients: React.FC = () => {
  const extendedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-widest">Our Clients</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-16">TRUSTED BY THE BEST</h2>
        </AnimatedSection>
      </div>
      <div className="w-full overflow-hidden relative">
         <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="flex marquee-content">
          {extendedClients.map((client, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-8 flex items-center justify-center">
              <img src={client.logo} alt={client.name} className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;