import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../image/back.webp';

const Work = () => {
  const projects = [
    {
      title: "Digital Dreams Exhibition",
      description: "A collection of surreal digital landscapes",
      image: `${image1}`
    },
    {
      title: "Neon Futures",
      description: "Exploring cyberpunk aesthetics through digital art",
      image: "https://images.stockcake.com/public/8/8/3/8834e314-7e0d-4a1d-bc58-f9b25ce30ad4_large/neon-beauty-portrait-stockcake.jpg"
    },
    {
      title: "Abstract Realities",
      description: "Contemporary abstract digital compositions",
      image: "https://payload.cargocollective.com/1/10/338925/13278506/reality-dysfunction-2-cropped-_1340_c.jpg"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-12 min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-12">Projects Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#2a2a4a] rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;