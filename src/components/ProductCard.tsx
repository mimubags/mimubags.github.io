import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Truck, Clock } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  description: string;
  category?: 'new' | 'basic';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  imageUrl, 
  hoverImageUrl, 
  category 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Querría el bag ${name}. Gracias!`);
    window.open(`https://wa.me/+34651999713?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="relative aspect-square overflow-hidden bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl}
          alt={name} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Product Tags */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Free Shipping Tag */}
          <div className="product-tag product-tag-shipping absolute top-2 right-2">
            <Truck size={14} className="text-mimu-pink-dark mr-1" />
            <span>Envío Gratuito</span>
          </div>
          
          {/* Limited Stock Tag - Only for New Products */}
          {category === 'new' && (
            <div className="product-tag product-tag-limited absolute top-2 left-2">
              <Clock size={14} className="text-white mr-1" />
              <span>Stock Limitado</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-display font-medium">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-display">{price.toFixed(2)} €</span>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsapp-btn text-sm"
          >
            <MessageCircle size={16} />
            ¡Lo quiero!
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;