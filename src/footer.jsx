import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaCamera } from 'react-icons/fa';

// Social media links data
const socialLinks = [
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
  { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
  { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
];

// Navigation links data
const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

// Typewriter animation variants for contact info
const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: 'auto',
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 relative overflow-hidden">
      {/* Background lens flare effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Social Media Links - Camera Shutter Effect */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <FaCamera className="mr-2" /> Connect
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-white relative"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Links - Film Strip Style */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Explore</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
              >
                <a
                  href={link.url}
                  className="text-gray-300 hover:text-white text-lg transition-colors duration-300 block px-4 py-2 bg-gray-800 bg-opacity-30 rounded-md group-hover:bg-opacity-50"
                >
                  {link.name}
                </a>
                {/* Film strip border effect */}
                <span className="absolute left-0 top-0 h-full w-1 bg-gray-300 group-hover:bg-white transition-colors duration-300" />
                <span className="absolute right-0 top-0 h-full w-1 bg-gray-300 group-hover:bg-white transition-colors duration-300" />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info - Typewriter Effect */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Reach Out</h3>
          <motion.p
            className="text-gray-300 overflow-hidden whitespace-nowrap"
            variants={typewriterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Email: contact@imagery.com
          </motion.p>
          <motion.p
            className="text-gray-300 overflow-hidden whitespace-nowrap"
            variants={typewriterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Phone: +1 (555) 123-4567
          </motion.p>
        </motion.div>
      </div>

      {/* Copyright Notice */}
      <motion.div
        className="mt-12 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Imagery. All rights reserved.
      </motion.div>

      {/* Decorative Film Strip Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-800 flex space-x-2">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 bg-gray-300 border border-gray-500"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;