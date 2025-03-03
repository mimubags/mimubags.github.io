import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Quiero ${name}.`);
    window.open(`https://wa.me/+34600000000?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md">
            Ver detalles
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-mimu-pink-dark font-semibold">{price.toFixed(2)} €</span>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsapp-btn"
          >
            <MessageCircle size={18} />
            ¡Lo quiero!
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;