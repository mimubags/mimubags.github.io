import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getNewArrivals } from '../data/products';

const NewArrivals = () => {
  const newProducts = getNewArrivals();
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
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
        
        {/* New Collection Showcase - Desktop Version */}
        <div className="hidden md:grid grid-cols-12 gap-4 mb-16 -mx-8">
          <motion.div 
            className="col-span-9 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="\Bolsos\night-out-bags-disco.jpg"
                alt="Nueva Colección 1"
                className="w-full h-[600px] object-cover"
                onLoad={() => setImageLoaded1(true)}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="col-span-3 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="\Bolsos\night-out-bags-table.jpg"
                alt="Nueva Colección 2"
                className="w-full h-[600px] object-cover"
                onLoad={() => setImageLoaded2(true)}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* New Collection Showcase - Mobile Version */}
        <div className="md:hidden mb-16 -mx-4">
          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="\Bolsos\night-out-bags-disco.jpg"
                alt="Nueva Colección"
                className="w-full h-[400px] object-cover"
                onLoad={() => setImageLoaded1(true)}
              />
            </motion.div>
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
              category={product.category} // Asegúrate de pasar la categoría aquí
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewArrivals;