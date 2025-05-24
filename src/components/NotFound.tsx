import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <main className="pt-24 md:pt-28 min-h-screen">
      <section className="bg-deep-black py-20">
        <div className="container-custom flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gold mb-8">Page Not Found</h2>
          
          <p className="text-white/80 max-w-md mb-10">
            The sculpture you're looking for seems to have been moved to another gallery. 
            Let's guide you back to our main exhibition.
          </p>
          
          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <ArrowLeft size={18} />
            Return to Gallery
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;