import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CollectionPreview from '../components/CollectionPreview';
import { collections } from '../data/sculptures';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      
      <section className="bg-deep-black py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Koleksiyonlarımız</h2>
            <div className="flex justify-center items-center my-4">
              <div className="gold-accent"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="gold-accent"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto">
              Her biri dijital heykel sanatına özgün bir estetik yaklaşım sunan, özenle seçilmiş birebir müze replikası heykel koleksiyonlarımızı keşfedin.
            </p>
          </motion.div>
          
          {collections.map((collection) => (
            <CollectionPreview key={collection.id} collection={collection} />
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-white/80 font-serif italic mb-6">
              "Müzenin büyüleyici tarihi ve estetik heykellerini evinize taşıyoruz."
            </p>
            <Link 
              to="/gallery" 
              className="btn btn-primary inline-flex items-center gap-2 group"
            >
              Bütün ürünleri Görüntüle
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-dark-gray py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-marble-texture bg-cover bg-center"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-subtitle">Vizyon & Ulaşılabilirlik</h2>
            <h3 className="section-title mb-6">Müze Eserlerinin Ulaşılabilir Ürünlere Dönüştürmek</h3>
            
            <p className="text-white/80 mb-8 text-lg">
              Sanat, yalnızca müzelerde saklanmamalı, yaşanmalı, hissedilmeli ve günlük hayatın bir parçası olmalıdır. Staturopolis'te insanlık tarihinin en değerli kültürel miraslarını evlere taşıyarak sanatı demokratikleştirmeyi amaçlıyoruz. Müzelerde sergilenen ikonik eserlerin yüksek kaliteli replikalarını üreterek herkesin kendi yaşam alanında sanatla iç içe olmasını sağlıyoruz.
            </p>
            
            <Link to="/about" className="btn border-white/30 text-white hover:bg-white/10">
              Üretim Aşamamız Hakkında 
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;