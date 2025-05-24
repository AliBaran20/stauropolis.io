import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Collection } from '../types';
import { getSculpturesByCollection } from '../data/sculptures';
import SculptureCard from './SculptureCard';

interface CollectionPreviewProps {
  collection: Collection;
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ collection }) => {
  const sculptures = getSculpturesByCollection(collection.id).slice(0, 3);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-white">{collection.name}</h2>
          <p className="text-white/70 mt-2 max-w-2xl">{collection.description}</p>
        </div>
        
        <Link 
          to={`/gallery?collection=${collection.id}`} 
          className="mt-4 md:mt-0 group flex items-center text-gold hover:text-gold-light transition-colors"
        >
          Koleksiyonu Görüntüle 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sculptures.map((sculpture) => (
          <SculptureCard key={sculpture.id} sculpture={sculpture} />
        ))}
      </div>
      
      {/* Divider */}
      <div className="mt-16 flex items-center justify-center">
        <div className="gold-accent"></div>
        <div className="w-2 h-2 rounded-full bg-gold"></div>
        <div className="gold-accent"></div>
      </div>
    </motion.div>
  );
};

export default CollectionPreview;