import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/video_prueba.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            mimubags
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bolsos de crochet artesanales con diseños únicos y elegantes
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/novedades" className="btn-primary">
              Ver colección
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Productos Destacados</h2>
            <Link to="/novedades" className="flex items-center text-mimu-pink-dark hover:text-mimu-pink-dark/80 transition-colors">
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
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
      </section>

      {/* About Section */}
      <section className="py-20 bg-mimu-pink">
        <div className="container-custom">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre Nosotros
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Artesanía de crochet" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-800">Artesanía con pasión</h3>
              <p className="text-gray-600">
                En mimubags creamos bolsos de crochet únicos y elegantes, hechos a mano con dedicación y amor por los detalles. Cada pieza es especial y refleja nuestra pasión por la artesanía tradicional combinada con diseños modernos.
              </p>
              <p className="text-gray-600">
                Utilizamos materiales de alta calidad para garantizar que nuestros bolsos no solo sean hermosos, sino también duraderos y prácticos para el uso diario.
              </p>
              <p className="text-gray-600">
                Nuestra misión es ofrecer accesorios que combinen belleza, funcionalidad y el valor especial de lo hecho a mano, creando piezas que te acompañarán en tus momentos especiales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contacto
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-800">¿Tienes alguna pregunta?</h3>
              <p className="text-gray-600">
                Estamos aquí para ayudarte. Puedes contactarnos a través del formulario o por nuestras redes sociales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-mimu-pink p-2 rounded-full shadow-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mimu-pink-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@mimubags.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mimu-pink p-2 rounded-full shadow-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mimu-pink-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+34 600 000 000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mimu-pink p-2 rounded-full shadow-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mimu-pink-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Madrid, España</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;