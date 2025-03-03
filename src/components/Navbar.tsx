import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-mimu-pink-dark" />
          <span className="ml-2 text-xl font-display font-semibold text-gray-800">mimubags</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'nav-link active' : 'nav-link'
          }>
            Inicio
          </NavLink>
          <NavLink to="/novedades" className={({ isActive }) => 
            isActive ? 'nav-link active' : 'nav-link'
          }>
            Novedades
          </NavLink>
          <NavLink to="/bolsos-basicos" className={({ isActive }) => 
            isActive ? 'nav-link active' : 'nav-link'
          }>
            Bolsos Básicos
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/novedades" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              Novedades
            </NavLink>
            <NavLink 
              to="/bolsos-basicos" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              Bolsos Básicos
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;