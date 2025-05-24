import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sculpture } from '../types';

interface SculptureCardProps {
  sculpture: Sculpture;
}

const SculptureCard: React.FC<SculptureCardProps> = ({ sculpture }) => {
  return (
    <motion.div 
      className="gallery-item h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4] w-full">
        <img 
          src={sculpture.image} 
          alt={sculpture.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="gallery-item-info">
        <h3 className="text-xl font-serif font-medium text-white">{sculpture.title}</h3>
        <p className="text-sm text-white/70 mt-1 line-clamp-3">{sculpture.description}</p>
        
        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
          <span className="text-gold text-sm italic">
            {sculpture.collection.charAt(0).toUpperCase() + sculpture.collection.slice(1).replace('-', ' ')}
          </span>
          
          <a 
            href={sculpture.externalLink.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-gold transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View on {sculpture.externalLink.platform}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SculptureCard;