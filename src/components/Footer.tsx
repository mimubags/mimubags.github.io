import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 text-mimu-pink-dark" />
              <span className="ml-2 text-lg font-display font-semibold text-gray-800">mimubags</span>
            </Link>
            <p className="text-gray-600 text-center md:text-left">
              Bolsos de crochet artesanales con diseños únicos.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-mimu-pink-dark transition-colors">Inicio</Link>
              <Link to="/novedades" className="text-gray-600 hover:text-mimu-pink-dark transition-colors">Novedades</Link>
              <Link to="/bolsos-basicos" className="text-gray-600 hover:text-mimu-pink-dark transition-colors">Bolsos Básicos</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mimubags/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-mimu-pink-dark transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:mimubags@gmail.com" className="text-gray-600 hover:text-mimu-pink-dark transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} mimubags. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;