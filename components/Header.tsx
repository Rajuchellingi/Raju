
import React, { useState, useEffect } from 'react';
import { navLinks, footerLinks, contactInfo } from '../constants/data';
import type { NavLink } from '../types';
import Logo from './Logo';
import MainLogo from './MainLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavClasses = isScrolled
    ? 'bg-white text-brand-blue shadow-md py-3'
    : 'bg-transparent text-white py-4';
  
  const currentTextColor = isScrolled ? 'text-brand-blue' : 'text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={`bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'lg:max-h-0' : 'lg:max-h-20'}`}>
        <div className="container mx-auto px-6 h-20 hidden lg:grid grid-cols-3 items-center text-white">
          <div className="text-sm font-medium justify-self-start">
            <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-gold transition-colors">{contactInfo.phoneFormatted}</a>
          </div>
          <div className="justify-self-center">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <MainLogo className="h-14" />
            </a>
          </div>
          <div className="flex space-x-4 justify-self-end">
            {footerLinks.socials.map(social => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${mainNavClasses}`}>
        <div className={`container mx-auto px-6 flex items-center ${isScrolled || isMenuOpen ? 'justify-between' : 'justify-end'} lg:justify-between`}>
          <a href="#home" className={`transition-all duration-300 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} lg:opacity-100`}>
             <Logo className={`h-6 transition-all duration-300 transform-gpu ${isScrolled ? 'text-brand-blue' : 'text-white'}`} />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link: NavLink) => (
              <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-wider hover:text-brand-gold transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Get a Quote
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${currentTextColor}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'} ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-80'}`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link: NavLink) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium uppercase tracking-wider transition-colors ${isScrolled ? 'text-brand-blue hover:text-brand-gold' : 'text-white hover:text-brand-gold'}`} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;