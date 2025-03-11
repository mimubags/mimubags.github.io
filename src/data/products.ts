export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  description: string;
  category: 'new' | 'basic';
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'bag-001',
    name: 'Moon Bag',
    price: 24,
    imageUrl: '/Bolsos/moon-bag.jpg',
    hoverImageUrl: 'public/Bolsos/chain bag.jpg',
    description: 'Bolso de crochet con diseño floral en tonos pastel.',
    category: 'new',
    featured: true
  },
  {
    id: 'bag-002',
    name: 'Chain Bag',
    price: 25,
    imageUrl: '/Bolsos/chain-bag.jpg',
    hoverImageUrl: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bolso tote amplio ideal para la playa o días de compras.',
    category: 'new',
    featured: true
  },
  {
    id: 'bag-003',
    name: 'Star Bag',
    price: 26,
    imageUrl: '/Bolsos/star-bag.jpg',
    hoverImageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mini bolso de crochet para ocasiones especiales.',
    category: 'new',
    featured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.category === 'new');
};

export const getBasicBags = (): Product[] => {
  return products.filter(product => product.category === 'basic');
};