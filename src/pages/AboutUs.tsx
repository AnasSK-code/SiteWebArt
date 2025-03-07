import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-12 min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-300 mb-6">
          Our mission is to not only 
           showcase but also to redefine the future of digital artwork. By curating the most
            innovative, cutting-edge, and thought-provoking pieces from across the globe, we
             aim to inspire and challenge the way we perceive art in the digital age.


          </p>
          <p className="text-lg text-gray-300 mb-6">Founded in 2025, our gallery has rapidly evolved into a vibrant hub for digital art 
enthusiasts, collectors, and creators. We believe that technology is not just a tool,
 but a transformative force that revolutionizes the way art is conceived, experienced,
  and interacted with. </p>
          <p className="text-lg text-gray-300 mb-6">
          Whether through interactive installations, immersive virtual environments,
           or thought-provoking animations, we are committed to presenting a diverse range 
           of digital mediums that reflect the limitless potential of this rapidly growing art form.


          </p>
          <p className="text-lg text-gray-300 mb-6"> Our space is a place where creativity meets technology, and where the boundaries of traditional 
art are expanded to explore new dimensions. Join us in embracing the future of art, where digital 
innovation and artistic expression converge in powerful and unexpected ways.</p>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1469&auto=format&fit=crop"
            alt="Digital Art Studio"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;