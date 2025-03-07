import React from 'react';
import { motion } from 'framer-motion';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  description: string;
}

interface GalleryProps {
  onArtworkSelect: (artwork: Artwork) => void;
  setCurrentPage: (page: string) => void;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Digital Dreamscape",
    artist: "Elena Rodriguez",
    image: "https://www.ignant.com/wp-content/uploads/2016/02/filiphodas_art-23-1-2016-1440x1440.jpg",
    description: "A surreal exploration of consciousness through digital medium"
  },
  {
    id: 2,
    title: "Neon Nights",
    artist: "James Chen",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b17e861784309.5a7c43cc46d06.jpg",
    description: "Cyberpunk-inspired cityscape with vibrant neon elements"
  },
  {
    id: 3,
    title: "Quantum Fragments",
    artist: "Sarah Mitchell",
    image: "https://images.newscientist.com/wp-content/uploads/2023/07/05101215/SEI_162886126.jpg",
    description: "Abstract visualization of quantum mechanics theories"
  },
  {
    id: 4,
    title: "Digital Flora",
    artist: "Marcus Wong",
    image: "https://i.pinimg.com/736x/bb/26/fc/bb26fc0ebeef27035ed998f2a8ebf0f6.jpg",
    description: "Procedurally generated botanical illustrations"
  },
  {
    id: 5,
    title: "Virtual Emotions",
    artist: "Anna Kowalski",
    image: "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/digital-colorful-paintings-sandra-knego-fb.jpg",
    description: "AI-generated representations of human emotions"
  },
  {
    id: 6,
    title: "Fractal Universe",
    artist: "David Thompson",
    image: "https://images.squarespace-cdn.com/content/v1/54d62664e4b092010cefeec8/1613932153688-YQXOUZBBK8OB8S239FF2/podcast.jpg",
    description: "Infinite fractal patterns inspired by cosmic structures"
  }
];

const Gallery: React.FC<GalleryProps> = ({ onArtworkSelect, setCurrentPage }) => {
  const handleArtworkClick = (artwork: Artwork) => {
    onArtworkSelect(artwork);
    setCurrentPage('artwork');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-12 min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-12">Digital Art Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleArtworkClick(artwork)}
            className="bg-[#2a2a4a] rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
              <p className="text-purple-400 mb-2">{artwork.artist}</p>
              <p className="text-gray-400 text-sm">{artwork.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
