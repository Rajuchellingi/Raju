
import React from 'react';
import { galleryImages } from '../constants/data';
import AnimatedSection from './AnimatedSection';

const Gallery: React.FC = () => {
  const extendedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-widest text-center">Our Gallery</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-16 text-center">GLIMPSES OF OUR CRAFTSMANSHIP</h2>
        </AnimatedSection>
      </div>

      <div className="w-full overflow-hidden relative group">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex marquee-gallery-content">
          {extendedImages.map((image, index) => (
            <div 
              key={index} 
              className="group/item relative flex-shrink-0 mx-4 w-[400px] h-[300px] cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-500 ease-in-out group-hover/item:scale-110 filter grayscale group-hover/item:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg group-hover/item:bg-opacity-40 transition-all duration-500 flex items-end p-4">
                 <p className="text-white text-sm opacity-0 group-hover/item:opacity-100 transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-500">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;