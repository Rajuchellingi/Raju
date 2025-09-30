
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      {/* FIX: Removed the `referrerPolicy` attribute as it is not a valid prop for the <video> element in React, which caused a TypeScript error. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest mb-4 animate-fade-in-down">
          We Design & Manufacture
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          BEST IN CLASS UNIFORMS
        </p>
        <a href="#products" className="bg-brand-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block animate-fade-in-up" style={{ animationDelay: '1s' }}>
          View Our Work
        </a>
      </div>
      <div className="absolute bottom-10 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full scroll-down-animation"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
