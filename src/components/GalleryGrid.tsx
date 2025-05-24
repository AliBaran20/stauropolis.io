import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SculptureCard from './SculptureCard';
import { collections, getSculpturesByCollection, sculptures } from '../data/sculptures';

const GalleryGrid: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  
  const filteredSculptures = activeCollection
    ? getSculpturesByCollection(activeCollection)
    : sculptures;
  
  return (
    <div className="py-12">
      {/* Collection Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <button
          className={`px-4 py-2 border rounded-sm transition-all ${
            activeCollection === null
              ? 'border-gold text-gold'
              : 'border-white/30 text-white/70 hover:text-white'
          }`}
          onClick={() => setActiveCollection(null)}
        >
          Bütün Ürünler
        </button>
        
        {collections.map((collection) => (
          <button
            key={collection.id}
            className={`px-4 py-2 border rounded-sm transition-all ${
              activeCollection === collection.id
                ? 'border-gold text-gold'
                : 'border-white/30 text-white/70 hover:text-white'
            }`}
            onClick={() => setActiveCollection(collection.id)}
          >
            {collection.name}
          </button>
        ))}
      </div>
      
      {/* Active Collection Description */}
      {activeCollection && (
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 italic"
          >
            {collections.find((c) => c.id === activeCollection)?.description}
          </motion.p>
        </div>
      )}
      
      {/* Gallery Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        layout
      >
        {filteredSculptures.map((sculpture) => (
          <motion.div
            key={sculpture.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            layout
          >
            <SculptureCard sculpture={sculpture} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Empty State */}
      {filteredSculptures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/70">No sculptures found in this collection.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;