import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-12 min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <span>contact@digitalart.gallery</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span>123 Digital Art Street, Creative City</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#2a2a4a] border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#2a2a4a] border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-[#2a2a4a] border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              disabled
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;