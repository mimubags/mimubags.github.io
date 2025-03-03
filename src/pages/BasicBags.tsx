import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getBasicBags } from '../data/products';

const BasicBags = () => {
  const basicProducts = getBasicBags();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-4">Bolsos Básicos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra colección de bolsos esenciales. Diseños atemporales que combinan con cualquier outfit y te acompañarán en tu día a día.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BasicBags;