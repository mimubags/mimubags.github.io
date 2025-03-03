export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'new' | 'basic';
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'bag-001',
    name: 'Bolso Primavera',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bolso de crochet con diseño floral en tonos pastel.',
    category: 'new',
    featured: true
  },
  {
    id: 'bag-002',
    name: 'Tote Verano',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bolso tote amplio ideal para la playa o días de compras.',
    category: 'basic'
  },
  {
    id: 'bag-003',
    name: 'Mini Elegance',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mini bolso de crochet para ocasiones especiales.',
    category: 'new'
  },
  {
    id: 'bag-004',
    name: 'Bolso Casual',
    price: 35.99,
    imageUrl: 'https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bolso de uso diario con diseño práctico y elegante.',
    category: 'basic',
    featured: true
  },
  {
    id: 'bag-005',
    name: 'Clutch Noche',
    price: 25.99,
    imageUrl: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Clutch de crochet para eventos nocturnos.',
    category: 'new'
  },
  {
    id: 'bag-006',
    name: 'Bolso Bohemio',
    price: 42.99,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bolso con estilo bohemio y detalles artesanales.',
    category: 'basic'
  },
  {
    id: 'bag-007',
    name: 'Mochila Mini',
    price: 38.99,
    imageUrl: 'https://images.unsplash.com/photo-1575032748284-70d11beb9b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mini mochila de crochet para un look juvenil.',
    category: 'new',
    featured: true
  },
  {
    id: 'bag-008',
    name: 'Bolso Clásico',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Diseño clásico que combina con cualquier outfit.',
    category: 'basic'
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