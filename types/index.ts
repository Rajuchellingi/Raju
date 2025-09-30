export interface NavLink {
  name: string;
  href: string;
}

export interface Product {
  name:string;
  image: string;
}

export interface ProcessStep {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ExploreCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'col' | 'row';
}