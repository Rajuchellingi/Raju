import React from 'react';
import { footerLinks, contactInfo } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-blue text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-wider mb-4">REINVENT</h3>
            <p className="text-sm leading-relaxed mb-6">
              We are the leading supplier of high-quality staff uniform solutions for various sectors. We ensure that our uniforms are of the best quality which will be comfortable for your employees.
            </p>
            <div className="flex space-x-4">
              {footerLinks.socials.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-brand-gold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3: Our Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-3">
              {footerLinks.ourProducts.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-brand-gold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-brand-gold">&#9679;</span>
                <p>{contactInfo.address}</p>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-gold">&#9679;</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-gold transition-colors">{contactInfo.phoneFormatted}</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-gold">&#9679;</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-gold transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Reinvent Uniforms. All Rights Reserved. This is a conceptual replica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
