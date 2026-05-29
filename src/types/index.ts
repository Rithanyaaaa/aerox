export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  category: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  review: string;
  avatar: string;
  rating: number;
}

export interface Industry {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}
