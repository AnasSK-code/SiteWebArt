import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const artworks = [
  {
    id: 1,
    title: "Gioconda Neon",
    artist: "Sarah Chen",
    image: "https://i.etsystatic.com/40474290/r/il/86310a/4583975689/il_fullxfull.4583975689_cz9n.jpg",
    description: "The Mona Lisa reimagined in a vibrant neon style, blending electric colors and futuristic light effects. A fusion of classic art and cyberpunk aesthetics, offering a modern and mesmerizing take on Leonardo da Vinci's masterpiece."
  },
  {
    id: 2,
    title: "Digital Landscape",
    artist: "Michael Rivera",
    image: "https://www.fubiz.net/wp-content/uploads/2015/08/DigitalVisualisations6-900x900.jpg",
    description: "A surreal digital landscape featuring a massive sphere in the middle of a cracked desert. The contrast between the smooth, otherworldly orb and the harsh, fractured ground creates a sense of mystery and isolation, evoking themes of the unknown and the passage of time."
  }
];

const DigitalPaintings = () => {
  return (
    <div className="pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/gallery">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-purple-400" />
            </motion.div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Digital Paintings
          </h1>
          
        </div>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Explore our collection of digital paintings where traditional artistic techniques
          meet modern digital tools, creating stunning visual experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Link to={`/artwork/${artwork.id}`} key={artwork.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                className="bg-purple-900/20 rounded-xl overflow-hidden border border-purple-500/20 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                  <p className="text-purple-400 mb-2">{artwork.artist}</p>
                  <p className="text-gray-400 text-sm">{artwork.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalPaintings;