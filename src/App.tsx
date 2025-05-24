import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Update the title based on the current route
    const getTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Staturopolis - Heykel Şehri';
        case '/gallery':
          return 'Koleksiyon | Staturopolis';
        case '/about':
          return 'Hakkımızda | Staturopolis';
        case '/contact':
          return 'İletişim | Staturopolis';
        default:
          return 'Staturopolis - Heykel Şehri';
      }
    };
    
    document.title = getTitle();
  }, [location]);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;