import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from './assets/pexels-david-bartus-43782-610293.jpg';
import image2 from './assets/pexels-punttim-139764.jpg';
import image3 from './assets/pexels-knelstrom-67654.jpg';

// Project data for easier management
const projects = [
  {
    id: 1,
    title: 'Art Director',
    year: '2021',
    image: image1,
    description: 'Led a creative team to deliver visually stunning campaigns for global brands.',
  },
  {
    id: 2,
    title: 'Photographer',
    year: '2022',
    image: image2,
    description: 'Captured breathtaking moments in nature, featured in international exhibitions.',
  },
  {
    id: 3,
    title: 'Videographer',
    year: '2023',
    image: image3,
    description: 'Produced cinematic videos for commercial and artistic projects.',
  },
];

// Modal component for project details
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-lg w-full m-4"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
      <p className="text-gray-600 mb-2">{project.year}</p>
      <p className="text-gray-700">{project.description}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default function Section3() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div className="flex flex-col mt-12 items-center font-display justify-center min-h-screen bg-[#141414]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center font-extrabold text-5xl md:text-7xl lg:text-9xl text-white mb-12 tracking-tight"
      >
        FEATURED WORKS
      </motion.h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="h-80 w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-6">
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-white"
                  whileHover={{ x: 10 }}
                >
                  {project.title}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-white"
                  whileHover={{ x: -10 }}
                >
                  {project.year}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}