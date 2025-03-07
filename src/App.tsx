import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ArtworkDetail from './pages/ArtworkDetail';
import DigitalPaintings from './pages/categories/DigitalPaintings';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  description: string;
}

function App() {
  const [selectedArtwork, setSelectedArtwork] = React.useState<Artwork | null>(null);
  const [currentPage, setCurrentPage] = React.useState<string>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white"
      >
        <Navbar scrollToTop={scrollToTop} />

        <Routes>
          <Route path="/" element={<Home setSelectedArtwork={setSelectedArtwork} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/gallery"
            element={<Gallery onArtworkSelect={setSelectedArtwork} setCurrentPage={setCurrentPage} />}
          />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/digital-paintings" element={<DigitalPaintings />} />
        </Routes>

        <Footer scrollToTop={scrollToTop} />
      </motion.div>
    </Router>
  );
}

export default App;
