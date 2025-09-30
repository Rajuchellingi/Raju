
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-48 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://reinventuniforms.com/wp-content/uploads/2023/10/about-us-reinvent.jpg"
          alt="A tailor meticulously working on a garment"
          className="ken-burns-bg w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <AnimatedSection className="w-full flex flex-col items-center">
          
          <h3 className="text-lg font-semibold text-brand-gold uppercase tracking-widest">Who We Are</h3>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 leading-tight max-w-4xl drop-shadow-md">
            REINVENT UNIFORMS
          </h2>

          <div className="w-24 h-0.5 bg-brand-gold mb-8"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg font-light text-gray-200 mb-10 drop-shadow-sm">
            <p className="leading-relaxed">
              We, Reinvent Uniforms are the leading supplier of uniforms in the UAE. We deliver high-quality staff uniform solutions for various sectors such as Corporate, Hospitality, Industrial, Healthcare, Education etc. We ensure that our uniforms are of the best quality which will be comfortable for your employees. We are providing a unique identity for many businesses with our high-quality uniforms.
            </p>
            <p className="leading-relaxed">
              Our team consists of well-experienced professionals in the uniform industry. We also use the latest technologies and machinery for the production of uniforms. We are not just delivering uniforms, we assure you that we deliver quality with each of our products. We can also provide all kinds of customisation required for our clients.
            </p>
          </div>

          <a href="#contact" className="bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
            Read More
          </a>
          
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;