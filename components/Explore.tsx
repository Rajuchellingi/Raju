
import React, { useState } from 'react';
import { exploreCategories } from '../constants/data';
import AnimatedSection from './AnimatedSection';
import { PlusIcon, MinusIcon } from './icons';

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(exploreCategories[0].id);

  return (
    <section id="explore" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-widest text-center">Explore Our Uniforms</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-16 text-center">UNIFORMS THAT INSPIRE</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side: Accordion */}
          <AnimatedSection direction="left">
            <div className="space-y-2">
              {exploreCategories.map((category) => {
                const isActive = category.id === activeCategory;
                return (
                  <div key={category.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className="w-full flex justify-between items-center text-left py-5 focus:outline-none"
                      aria-expanded={isActive}
                      aria-controls={`content-${category.id}`}
                    >
                      <span className={`text-xl font-semibold transition-colors duration-300 ${isActive ? 'text-brand-gold' : 'text-brand-blue hover:text-brand-gold'}`}>
                        {category.title}
                      </span>
                      {isActive ? <MinusIcon className="w-6 h-6 text-brand-gold flex-shrink-0" /> : <PlusIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />}
                    </button>
                    <div
                      id={`content-${category.id}`}
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-5 pr-8">
                           <img 
                            src={category.image} 
                            alt={category.title} 
                            className="lg:hidden w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                            referrerPolicy="no-referrer"
                          />
                          <p className="text-gray-600">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Right side: Image */}
          <AnimatedSection direction="right" className="relative h-[400px] md:h-[600px] hidden lg:block">
             <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden">
                {exploreCategories.map((category) => (
                  <img
                    key={category.id}
                    src={category.image}
                    alt={category.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeCategory === category.id ? 'opacity-100' : 'opacity-0'}`}
                    referrerPolicy="no-referrer"
                  />
                ))}
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Explore;