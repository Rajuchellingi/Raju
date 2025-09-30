
import React from 'react';
import { products } from '../constants/data';
import { ArrowRightIcon } from './icons';
import AnimatedSection from './AnimatedSection';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-widest">Our Products</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-12">CRAFTING IDENTITIES, ONE UNIFORM AT A TIME</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} className={`transition-all duration-500 ease-out`} style={{ transitionDelay: `${index * 100}ms` }}>
              <a href="#contact" className="block">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-white text-2xl font-bold transition-transform transform translate-y-8 group-hover:translate-y-0 duration-500 ease-out">{product.name}</h3>
                  </div>
                  <div className="absolute top-6 right-6 bg-brand-gold text-white w-12 h-12 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out delay-100">
                    <ArrowRightIcon className="w-6 h-6" />
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;