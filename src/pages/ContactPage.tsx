import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
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
            <h1 className="section-title">Adreslerimiz</h1>
            <div className="flex justify-center items-center my-4">
              <div className="gold-accent"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="gold-accent"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto">
             Heykellerimiz hakkında daha fazla bilgi almak, uygunluk durumu hakkında soru sormak veya özel siparişleri görüşmek için bizimle iletişime geçin.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif text-white mb-6">Bize Mesaj Gönderin</h2>
              
              {isSubmitted ? (
                <div className="bg-success/10 border border-success/30 rounded p-6 text-center">
                  <h3 className="text-xl font-serif text-white mb-2">Mesaj Gönderildi!</h3>
                  <p className="text-white/80">
                    Bize ulaştığınız için teşekkür ederiz. En yakın zamanda size döneceğiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">İsim</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-gray border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-gold text-white"
                      placeholder="İsminiz"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-gray border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-gold text-white"
                      placeholder="Email Adresiniz"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Mesaj</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-dark-gray border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-gold text-white"
                      placeholder="Mesajınız"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-serif text-white mb-6">Bize Ulaşın</h2>
              
              <div className="bg-dark-gray rounded-lg p-8 mb-8">
                <h3 className="text-xl font-serif text-gold mb-4">Sosyal Medya</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.instagram.com/staturopolis?igsh=NHRxYWVpdTg0ZXNk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <Instagram size={20} />
                    <span>@staturopolis</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  {/* <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <Twitter size={20} />
                    <span>@staturopolis</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a> */}
                  
                  <a 
                    href="https://www.facebook.com/share/1Aq5gnAbnX/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <Facebook size={20} />
                    <span>Staturopolis</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
              
              <div className="bg-dark-gray rounded-lg p-8 mb-8">
                <h3 className="text-xl font-serif text-gold mb-4">Email</h3>
                <a 
                  href="mailto:fourthdimension3d@gmail.com" 
                  className="flex items-center gap-3 text-white hover:text-gold transition-colors"
                >
                  <Mail size={20} />
                  <span>fourthdimension3d@gmail.com</span>
                </a>
              </div>
              
              <div className="bg-dark-gray rounded-lg p-8">
                <h3 className="text-xl font-serif text-gold mb-4">Purchase Platforms</h3>
                <p className="text-white/80 mb-4">
                  Ürünlerimizi satın alabileceğiniz platformlar;
                </p>
                
                <div className="space-y-3">
                  <a 
                    href="https://www.shopier.com/staturopolis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <span>Shopier</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a 
                    href="https://link.dolap.com/we3ar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <span>Dolap</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/share/1Aq5gnAbnX/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
                  >
                    <span>Facebook</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;