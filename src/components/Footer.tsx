import React from 'react';
import { RefreshCw, Twitter, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png';

interface FooterProps {
  scrollToTop: () => void;
}

const Footer = ({ scrollToTop }: FooterProps) => {
  return (
    <footer className="relative mt-20 w-full overflow-hidden bg-gradient-to-b from-black/50 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            
               <div className="flex items-center cursor-pointer"> 
        <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          ArtFlow®
        </h1>
      </div>
            
            <p className="text-gray-400">Transforming imagination into digital masterpieces.</p>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 15 }} 
                href="#" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 15 }} 
                href="#" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 15 }} 
                href="#" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Art
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/digital-paintings"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Digital Paintings
                </Link>
              </li>
             
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Newsletter
            </h3>
            <p className="text-gray-400">Join our community of digital art enthusiasts.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/30 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 ArtFlow. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-purple-400">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;