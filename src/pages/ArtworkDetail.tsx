import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Gioconda Neon",
    artist: "Sarah Chen",
    image: "https://i.etsystatic.com/40474290/r/il/86310a/4583975689/il_fullxfull.4583975689_cz9n.jpg",
    description: "A vibrant exploration of color and light in the digital realm"
  },
  {
    id: 2,
    title: "Digital Landscape",
    artist: "Michael Rivera",
    image: "https://www.fubiz.net/wp-content/uploads/2015/08/DigitalVisualisations6-900x900.jpg",
    description: "Surreal landscapes created entirely in the digital space"
  }
];

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const artwork = artworks.find((art) => art.id === Number(id)); // Find the artwork matching the ID

  if (!artwork) return <p className="text-center text-white">Artwork not found</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-12 min-h-screen text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-[60vh] object-cover rounded-lg mb-8"
        />
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">{artwork.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
              {artwork.artist.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{artwork.artist}</h3>
              <p className="text-purple-400">Digital Artist</p>
            </div>
          </div>
          <p className="text-xl text-gray-300">{artwork.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtworkDetail;
