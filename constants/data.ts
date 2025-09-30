
import type { NavLink, Product, ProcessStep, Client, ExploreCategory, GalleryImage } from '../types';
import { DesignIcon, SourcingIcon, SamplingIcon, ProductionIcon, QualityControlIcon, DeliveryIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from '../components/icons';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Products', href: '#products' },
  { name: 'Our Gallery', href: '#gallery' },
  { name: 'Our Process', href: '#process' },
  { name: 'Our Clients', href: '#clients' },
  { name: 'Contact Us', href: '#contact' },
];

export const products: Product[] = [
  { name: 'Corporate', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/corporate-uniforms.jpg' },
  { name: 'Hospitality', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/hospitality-uniforms.jpg' },
  { name: 'Industrial', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/industrial-uniforms.jpg' },
  { name: 'Healthcare', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/healthcare-uniforms.jpg' },
  { name: 'Education', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/education-uniforms.jpg' },
  { name: 'Aviation', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/aviation-uniforms.jpg' },
  { name: 'Security', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/security-uniforms.jpg' },
  { name: 'T-Shirts & Polos', image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/tshirts-polos.jpg' },
];

export const processSteps: ProcessStep[] = [
  { name: 'Design', description: 'We will discuss and create the best design for your uniforms as per your requirements.', icon: DesignIcon },
  { name: 'Sourcing', description: 'We will source the best quality fabrics for the uniforms based on the approved design.', icon: SourcingIcon },
  { name: 'Sampling', description: 'We will make samples as per the approved design and fabric for the final approval.', icon: SamplingIcon },
  { name: 'Production', description: 'After the final approval of the sample, we will start the bulk production of uniforms.', icon: ProductionIcon },
  { name: 'Quality Control', description: 'Our quality control team will check each and every uniform for quality and finishing.', icon: QualityControlIcon },
  { name: 'Packing & Delivery', description: 'After the final quality check we will pack the uniforms and deliver them to your location.', icon: DeliveryIcon },
];

export const clients: Client[] = [
  { name: 'Emirates', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-1.png' },
  { name: 'RTA', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-2.png' },
  { name: 'Emaar', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-3.png' },
  { name: 'Damac', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-4.png' },
  { name: 'Danube', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-5.png' },
  { name: 'Azizi', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-6.png' },
  { name: 'Sobha Realty', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-7.png' },
  { name: 'Nakheel', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-8.png' },
  { name: 'Dubai Police', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-9.png' },
  { name: 'Dubai Ambulance', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-10.png' },
  { name: 'Aster', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-11.png' },
  { name: 'American Hospital', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-12.png' },
  { name: 'Al Futtaim', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-13.png' },
  { name: 'GEMS Education', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-14.png' },
  { name: 'LULU', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-15.png' },
  { name: 'Carrefour', logo: 'https://reinventuniforms.com/wp-content/uploads/2023/10/our-clients-logo-16.png' },
];

export const exploreCategories: ExploreCategory[] = [
  {
    id: 'corporate',
    title: 'CORPORATE',
    description: 'We provide a wide range of corporate uniforms that are perfect for your business. We have a wide range of collections of corporate uniforms that are perfect for your business. We have a wide range of collections that can be customized to suit your needs.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/corporate-uniforms.jpg'
  },
  {
    id: 'hospitality',
    title: 'HOSPITALITY',
    description: 'We are the leading supplier of hospitality uniforms in Dubai. We have a wide range of collections of hospitality uniforms that are perfect for your business. Our hospitality uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/hospitality-uniforms.jpg'
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL',
    description: 'We are the leading supplier of Industrial uniforms in UAE. We have a wide range of collections of Industrial uniforms that are perfect for your business. Our Industrial uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/industrial-uniforms.jpg'
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    description: 'We have a wide range of collections of healthcare uniforms that are perfect for your business. Our healthcare uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/healthcare-uniforms.jpg'
  },
  {
    id: 'education',
    title: 'EDUCATION',
    description: 'We have a wide range of collections of education uniforms that are perfect for your business. Our education uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/education-uniforms.jpg'
  },
  {
    id: 'aviation',
    title: 'AVIATION',
    description: 'We are the leading supplier of Aviation uniforms in UAE. We have a wide range of collections of Aviation uniforms that are perfect for your business. Our Aviation uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/aviation-uniforms.jpg'
  },
  {
    id: 'security',
    title: 'SECURITY',
    description: 'We are the leading supplier of Security uniforms in UAE. We have a wide range of collections of Security uniforms that are perfect for your business. Our Security uniforms are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/security-uniforms.jpg'
  },
  {
    id: 't-shirts-polos',
    title: 'T-SHIRTS & POLOS',
    description: 'We have a wide range of collections of T-shirts & Polos that are perfect for your business. Our T-shirts & Polos are made from the best quality fabrics and are available in a wide range of colors and sizes.',
    image: 'https://reinventuniforms.com/wp-content/uploads/2023/10/tshirts-polos.jpg'
  }
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-1.jpg', alt: 'Tailor measuring fabric', span: 'col' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-7.jpg', alt: 'Man in a crisp white uniform shirt' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-3.jpg', alt: 'Woman in a professional blue blazer' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-4.jpg', alt: 'Close-up of a sewing machine stitching', span: 'row' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-5.jpg', alt: 'Man in a hotel staff uniform' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-6.jpg', alt: 'Various colorful fabric rolls' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-2.jpg', alt: 'Detailed stitching on a uniform collar' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-8.jpg', alt: 'A stack of freshly laundered white shirts' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-9.jpg', alt: 'Woman wearing a modern corporate uniform', span: 'row' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-10.jpg', alt: 'A collection of neatly folded polo shirts' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-11.jpg', alt: 'A chef in a professional kitchen uniform' },
  { src: 'https://reinventuniforms.com/wp-content/uploads/2023/10/reinvent-uniforms-gallery-12.jpg', alt: 'Two aviation professionals in uniform', span: 'col' },
];

export const contactInfo = {
  phone: '+971567443800',
  phoneFormatted: '+971 56 744 3800',
  email: 'info@reinventuniforms.com',
  address: 'Reinvent Uniforms, Showroom # 5, Mubarak Building, Opposite of Fortune Plaza Hotel, Al Qusais, Dubai, UAE',
};

export const footerLinks = {
  quickLinks: navLinks,
  ourProducts: products.map(p => ({ name: p.name, href: '#products' })),
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/reinventuniforms', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/reinventuniforms/', icon: InstagramIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/reinvent-uniforms/', icon: LinkedinIcon },
  ]
};