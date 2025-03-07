import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import video from '../image/back.mp4';

interface HomeProps {
  setSelectedArtwork: (artwork: any) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedArtwork }) => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex items-center px-12">
      <div className="w-1/2 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          DIGITAL ART<br />
          BRINGS IDEAS<br />
          TO LIFE.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mb-8 text-xl"
        >
          WE TURN CREATIVITY INTO DESIGN.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/gallery')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30"
          >
            EXPLORE NOW
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/about')}
            className="border-2 border-purple-500 text-white px-8 py-4 rounded-full hover:bg-purple-500/10 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-32 left-0"
        >
          <div className="flex gap-8 items-center">
            <div className="text-gray-400">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Digital Artists</div>
            </div>
            <div className="text-gray-400">
              <div className="text-4xl font-bold">300+</div>
              <div className="text-sm">Artworks</div>
            </div>
            <div className="text-gray-400">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Awards</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="h-full w-full object-cover"
                style={{
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />
    </main>
  );
};

export default Home;