import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getNewArrivals } from '../data/products';

const NewArrivals = () => {
  const newProducts = getNewArrivals();

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
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-4">Novedades</h1>
        </motion.div>
        
        {/* New Collection Showcase */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          <motion.div 
            className="col-span-3 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/Bolsos/night-out-bags-disco.jpg"
              alt="Nueva Colección"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
          <motion.div 
            className="col-span-1 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/Bolsos/night-out-bags-table.jpg"
              alt="Nueva Colección Detalle"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              hoverImageUrl={product.hoverImageUrl}
              description={product.description}
              category="new"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewArrivals;