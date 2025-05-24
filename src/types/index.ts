import { Sculpture } from ".";

export interface Sculpture {
  id: string;
  title: string;
  description: string;
  collection: string;
  image: string;
  externalLink: {
    platform: string;
    url: string;
  };
}

export type Collection = {
  id: string;
  name: string;
  description: string;
};
export const sculptures: Sculpture[] = [
  {
    id: 'augustus',
    title: 'Augustus',
    description: 'Augustus Büstü',
    collection: 'roma',
    image: new URL('../assets/augustus.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
  {
    id: 'digital-discus',
    title: 'Digital Discus',
    description: 'The ancient Greek athlete reimagined in a flowing digital medium that captures motion and stillness simultaneously.',
    collection: 'neo-classical',
    image: 'https://images.pexels.com/photos/8060364/pexels-photo-8060364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'Foundation',
      url: 'https://foundation.app'
    }
  },
  {
    id: 'neural-apollo',
    title: 'Neural Apollo',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'neo-classical',
    image: 'https://images.pexels.com/photos/12812993/pexels-photo-12812993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'SuperRare',
      url: 'https://superrare.com'
    }
  },
  {
    id: 'circuitry-cherub',
    title: 'Circuitry Cherub',
    description: 'Renaissance cherubs meet digital infrastructure in this playful yet complex sculptural form.',
    collection: 'cyber-baroque',
    image: 'https://images.pexels.com/photos/14020407/pexels-photo-14020407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'OpenSea',
      url: 'https://opensea.io'
    }
  },
  {
    id: 'fractal-flourish',
    title: 'Fractal Flourish',
    description: 'Endlessly repeating baroque patterns create an impossible, mesmerizing sculptural form.',
    collection: 'cyber-baroque',
    image: 'https://images.pexels.com/photos/13794444/pexels-photo-13794444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'Etsy',
      url: 'https://www.etsy.com'
    }
  },
  {
    id: 'data-david',
    title: 'Data David',
    description: 'Michelangelo\'s masterpiece reinterpreted through cascading data points and algorithmic distortion.',
    collection: 'cyber-baroque',
    image: 'https://images.pexels.com/photos/15013526/pexels-photo-15013526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'Foundation',
      url: 'https://foundation.app'
    }
  },
  {
    id: 'silicon-sphere',
    title: 'Silicon Sphere',
    description: 'Pure form and material meet in this seemingly simple yet conceptually complex minimal sculpture.',
    collection: 'minimal-forms',
    image: 'https://images.pexels.com/photos/14710075/pexels-photo-14710075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'ArtStation',
      url: 'https://www.artstation.com'
    }
  },
  {
    id: 'void-vessel',
    title: 'Void Vessel',
    description: 'A study in negative space, where what is not there becomes as important as what is.',
    collection: 'minimal-forms',
    image: 'https://images.pexels.com/photos/14020376/pexels-photo-14020376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'SuperRare',
      url: 'https://superrare.com'
    }
  },
  {
    id: 'quantum-column',
    title: 'Quantum Column',
    description: 'A minimalist column that seems to exist in multiple states simultaneously, challenging our perception of solidity.',
    collection: 'minimal-forms',
    image: 'https://images.pexels.com/photos/15362661/pexels-photo-15362661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    externalLink: {
      platform: 'OpenSea',
      url: 'https://opensea.io'
    }
  }
];
