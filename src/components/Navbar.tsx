import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../image/logo.png';

interface NavbarProps {
  scrollToTop: () => void;
}

const Navbar = ({ scrollToTop }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center p-4">
      {showLogo && (
        <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}> 
          <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            ArtFlow®
          </h1>
        </div>
      )}
      
      <div className="fixed top-4 right-4 z-50">
        <button
          className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transition hover:bg-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`absolute right-0 mt-2 p-6 w-56 bg-black bg-opacity-90 border border-purple-500 rounded-lg shadow-2xl backdrop-blur-lg transform transition-all ${isOpen ? 'scale-100' : 'scale-95 pointer-events-none'}`}
        >
          <ul className="space-y-4 text-white font-semibold text-lg">
            <li className="hover:text-purple-400 cursor-pointer transition" onClick={() => handleNavigation('/')}>Home</li>
            <li className="hover:text-purple-400 cursor-pointer transition" onClick={() => handleNavigation('/digital-paintings')}>Digital Paintings</li>
            <li className="hover:text-purple-400 cursor-pointer transition" onClick={() => handleNavigation('/gallery')}>Gallery</li>
            <li className="hover:text-purple-400 cursor-pointer transition" onClick={() => handleNavigation('/work')}>Projects Ideas</li>
            <li className="hover:text-purple-400 cursor-pointer transition" onClick={() => handleNavigation('/contact')}>Contact</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
