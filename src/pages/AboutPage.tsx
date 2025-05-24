import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import primaporta from '../assets/primaporta.jpg';
import laokoon2 from '../assets/laookon2.jpg';

const AboutPage: React.FC = () => {
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
            className="text-center mb-16"
          >
            <h1 className="section-title">Hakkımızda</h1>
            <div className="flex justify-center items-center my-4">
              <div className="gold-accent"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="gold-accent"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto">
              Staturopolis’un felsefesini ve sürecini keşfedin. 3D Yazıcı ile klasik heykel sanatının buluştuğu, yeni bir sanatsal ifade biçiminin doğduğu yer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src= {primaporta} 
                alt="AI Sculpture Creation Process" 
                className="w-full h-auto rounded"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">Vizyonumuz</h2>
              <p className="text-white/80 mb-4">
                Staturopolis şu soruyla başladı; Acaba müzelerdeki eşsiz ve tarihi heykelleri evlerimize getirebilir miyiz?
              </p>
              <p className="text-white/80 mb-4">
                Hedefimiz insanlığa ait olan bütün bu heykelleri modelleyip 3d yazıcılarla herkesin ulaşabileceği biblolara çevirmek.
              </p>
              <p className="text-white/80">
                Koleksiyonumuzdaki her ürün birebir müze replikası olup orijinal versiyonlarının aynısıdır. 0.1mm gibi detaylı bir baskı sürecinde yaklaşıp 15-16 saatte üretilmektedir.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">Üretim Aşamamız</h2>
              <p className="text-white/80 mb-4">
                Dünyanın dört bir yanından müze heykellerinin modellerini alıp baskıya hazır bir hale getiriyoruz
              </p>
              <p className="text-white/80 mb-4">
                Baskıya hazır heykel modellerimizi yüksek detaylı ve gerçeğine birebir eşit olduğundan emin olmak için çok uzun süreli bir üretim aşamasına geçiyoruz.
              </p>
              <p className="text-white/80">
                Yaklaşık 15-16 saatlik baskılarımızı aldıktan sonra çeşitli eskitme yöntemlerimizle boyuyoruz ve son ürün olarak evinizde bir antik kenti yaşatabiliyorsunuz.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img 
                src= {laokoon2}
                alt="AI and Human Collaboration" 
                className="w-full h-auto rounded"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-gray rounded-lg p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 bg-marble-texture bg-cover bg-center"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-6 text-center">Felsefemiz</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-gold mb-3">Detayın Önemi</h3>
                  <p className="text-white/80">
                    Bütün ürünlerimizde baskı süresi ne kadar artarsa artsın küçük heykel detaylarının tarihe dokunduğunu ve çok önemli olduğunu düşünüyoruz.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-gold mb-3">Ulaşılabilirlik</h3>
                  <p className="text-white/80">
                    Muadili olan firmaların yaptığı ürünlerin gereğinden pahalı olduğunu düşünmekteyiz ve bütün herkesin evlerine girebilmek için çabalıyoruz.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-gold mb-3">Tarih</h3>
                  <p className="text-white/80">
                    Tarihi ve bir antik kendin dokusunu sizler kadar biz de çok seviyoruz. Bu antik sanatsal ve hikayesel dokularını kitaplıklarınıza taşımaktan son derece keyif alıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-xl text-white/80 font-serif italic mb-6">
              "Antik kentler, geçmişin taşlara kazınmış hikâyeleridir. Staturopolis ise bu mirası, yaratıcılık ile klasik heykel sanatını birleştirerek geleceğe taşıyor. Geçmişin estetiği, teknolojinin yaratıcılığıyla yeniden hayat buluyor."
            </p>
            <a 
              href="/gallery" 
              className="inline-flex items-center text-gold hover:text-gold-light transition-colors group"
            >
              Koleksiyonlarımıza göz atın
              <MoveRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;