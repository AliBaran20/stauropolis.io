import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Pill as Pillar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray py-12 mt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Pillar className="h-8 w-8 text-gold" />
              <span className="font-serif text-xl font-medium text-white">Staturopolis</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md mt-4">
              Heykelsel zekânın dijital tapınağı;  zamansız dijital heykellerin yaratıldığı mekan.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-serif text-lg text-white mb-4">Yönlendirmeler</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Anasayfa</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors">Ürünlerimiz</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">Hakkımızda</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Bize Ulaşın</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg text-white mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/staturopolis?igsh=NHRxYWVpdTg0ZXNk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gold transition-colors">
                  <Twitter size={20} />
                </a> */}
                <a href="https://www.facebook.com/share/1Aq5gnAbnX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-gold transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Staturopolis. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;