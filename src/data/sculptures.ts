import { Collection, Sculpture } from '../types';


export const collections: Collection[] = [
  {
    id: 'roma',
    name: 'Roma Dönemi',
    description: 'Roma İmparatorlarının ve Mitolojisinin Heykelleri.'
  },
  {
    id: 'yunan',
    name: 'Yunan Dönemi',
    description: 'Yunan Mitolojisinin ve Filozofların Heykelleri.'
  },
  {
    id: 'others',
    name: 'Diğer',
    description: 'Diğer Medeniyetlerin Heykelleri.'
  }
];

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
    id: 'marcus',
    title: 'Marcus Aurelius',
    description: 'The ancient Greek athlete reimagined in a flowing digital medium that captures motion and stillness simultaneously.',
    collection: 'roma',
    image: new URL('../assets/marcus.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
  {
    id: 'pius',
    title: 'Antoninus Pius',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/pius.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
  {
    id: 'marcus2',
    title: 'Antoninus Pius',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/marcus2.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
  {
    id: 'pius2',
    title: 'Antoninus Pius',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/pius2.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
  {
    id: 'caracalla',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/caracalla.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'kadin',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/kadin.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'trajan',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/trajan.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'marcus3',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/marcus3.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'prima',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/prima.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'sezar',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/sezar.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'sezar2',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/sezar2.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'kadin2',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'roma',
    image: new URL('../assets/kadin2.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'venus',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'yunan',
    image: new URL('../assets/venus.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'laookon',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'yunan',
    image: new URL('../assets/laookon.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'herkul',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'yunan',
    image: new URL('../assets/herkul.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },
   {
    id: 'athena',
    title: 'caracalla',
    description: 'A fragmented interpretation of Apollo, showing how AI perceives and reconstructs classical ideals of beauty.',
    collection: 'yunan',
    image: new URL('../assets/athena.jpg', import.meta.url).href,
    externalLink: {
      platform: '',
      url: ''
    }
  },

  
  
  
];

export const getSculpturesByCollection = (collectionId: string): Sculpture[] => {
  return sculptures.filter(sculpture => sculpture.collection === collectionId);
};

export const getSculptureById = (id: string): Sculpture | undefined => {
  return sculptures.find(sculpture => sculpture.id === id);
};