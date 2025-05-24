import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/15343182/pexels-photo-15343182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: '50% 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/60 to-deep-black"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-white mb-6">
            Staturopolis
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif italic text-gold mb-8">
              Sanatın ve Tarihin Replika Hali
            </h2>
            
            <p className="text-lg text-off-white/90 mb-10 max-w-2xl">
             Tarihî formların modern tekniklerle yeniden hayat bulduğu replika heykellerle tanışın. Özenle üretilen bu eserler, sanatın zamansız güzelliğini evinize taşır ve koleksiyonunuza değer katar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery" className="btn btn-primary flex items-center justify-center sm:justify-start gap-2 group">
                Ürünlerimizi Keşfedin
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn border-white/30 text-white hover:bg-white/10 flex items-center justify-center sm:justify-start gap-2">
                Staturopolis Hakkında
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[2px] h-16 bg-gold/50 mx-auto"></div>
        <p className="text-gold/70 text-sm mt-2 font-serif italic"></p>
      </motion.div>
    </section>
  );
};

export default HeroSection;