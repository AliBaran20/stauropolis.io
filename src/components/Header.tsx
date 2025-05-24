import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Pill as Pillar } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-black/90 py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Pillar className="h-8 w-8 text-gold" />
          <span className="font-serif text-xl font-medium text-white">Staturopolis</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink to="/" className="nav-link">
                Anasayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="nav-link">
                Ürünlerimiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                Hakkımızda
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Bize Ulaşın
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark-gray/95 absolute top-full left-0 right-0"
        >
          <nav className="container-custom py-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className="block py-2 text-lg" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Anasayfa
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className="block py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ürünlerimiz
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="block py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hakkımızda
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="block py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bize Ulaşın
                </NavLink>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;