import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';  // Nueva importación
import { motion, AnimatePresence } from 'framer-motion';
import { Truck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const lastScrollY = React.useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = () => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToAbout: true } });
    } else {
      // If we're already on the home page, just scroll
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Free Shipping Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ height: 32, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-mimu-pink-dark text-white text-center py-2 text-sm fixed w-full z-50 top-0 flex justify-center items-center"
          >
            <span>Envío gratuito en todos los pedidos!</span>
            <Truck size={14} className="text-white ml-2" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <header 
        className={`fixed w-full z-40 transition-all duration-300 bg-white shadow-md ${
          scrolled ? 'py-2' : 'py-4'
        } ${showBanner ? 'top-8' : 'top-0'}`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center relative">
            {/* Desktop Navigation - Left */}
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

            {/* Logo - Center */}
            <NavLink to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-xl font-display font-semibold text-gray-900">mimu</span>
            </NavLink>

            {/* Right Menu - Social and About */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={handleAboutClick}
                className="nav-link"
              >
                About
              </button>
              <a 
                href="https://instagram.com/mimubags" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-mimu-pink-dark transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com/@mimubags" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-mimu-pink-dark transition-colors"
              >
                <FaTiktok size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <button 
                onClick={() => {
                  handleAboutClick();
                  setIsOpen(false);
                }}
                className="nav-link text-left"
              >
                About
              </button>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://instagram.com/mimubags" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-mimu-pink-dark transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://tiktok.com/@mimubags" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-mimu-pink-dark transition-colors"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;