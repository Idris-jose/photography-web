import React from 'react';
import img1 from './assets/pexels-hellojoshwithers-27063874.jpg';
import img2 from './assets/pexels-javier-ledo-1524361034-29156457.jpg';
import img3 from './assets/pexels-jing-zhan-1250761192-27667227.jpg';
import img4 from './assets/pexels-pixabay-159862.jpg';
import img5 from './assets/pexels-alina-rossoshanska-338724645-29319275.jpg';
import img6 from './assets/pexels-anastasia-shuraeva-4945518.jpg';
import img7 from './assets/pexels-allan-rodrigo-2884836-4415057.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Section4 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black py-16 mt-22"
   
    >
      <h1 className="text-center font-extrabold text-5xl md:text-7xl lg:text-9xl mb-12 tracking-tight">PROJECTS</h1>
      <div className="min-h-screen bg-beige-100 flex items-center justify-center p-4">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-4 grid-rows-3 gap-4 max-w-5xl w-full h-200"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Road Image */}
          <motion.div
            className="col-span-1 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img1} alt="Road" className="w-full h-full object-cover" />
          </motion.div>

          {/* Person Image */}
          <motion.div
            className="col-span-1 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img2} alt="Person" className="w-full h-full object-cover" />
          </motion.div>

          {/* Living Room Image */}
          <motion.div
            className="col-span-2 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img3} alt="Living Room" className="w-full h-full object-cover" />
          </motion.div>

          {/* Desk Image */}
          <motion.div
            className="col-span-2 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img4} alt="Desk" className="w-full h-full object-cover" />
          </motion.div>

          {/* Sculpture Image 1 */}
          <motion.div
            className="col-span-1 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img5} alt="Sculpture" className="w-full h-full object-cover bg-amber-400" />
          </motion.div>

          {/* Sculpture Image 2 */}
          <motion.div
            className="col-span-1 row-span-1 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img6} alt="Sculpture" className="w-full h-full object-cover bg-amber-400" />
          </motion.div>

          {/* Large Sculpture Image */}
          <motion.div
            className="col-span-4 row-span-2 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <img src={img7} alt="Sculpture" className="w-full h-full object-cover bg-amber-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;