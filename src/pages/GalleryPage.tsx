import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const collectionParam = searchParams.get('collection');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="pt-24 md:pt-28">
      <section className="bg-deep-black py-12">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="section-title">Koleksiyonlarımız</h1>
            <div className="flex justify-center items-center my-4">
              <div className="gold-accent"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="gold-accent"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto">
              Her biri dijital heykel sanatına özgün bir estetik yaklaşım sunan, özenle seçilmiş birebir müze replikası heykel koleksiyonlarımızı keşfedin.
            </p>
          </motion.div>
          
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;