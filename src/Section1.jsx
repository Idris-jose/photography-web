import background from './assets/pexels-andre-furtado-43594-1264210.jpg';
import image2 from './assets/pexels-bess-hamiti-83687-35537.jpg';
import image3 from './assets/pexels-david-bartus-43782-610293.jpg';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Section1() {
  const images = [background, image2, image3];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div className="mt-4 mb-4 mx-4 sm:mx-6 md:mx-8 lg:mx-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-center font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-9xl text-white tracking-tight">
          FRAMING
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-extralight mt-2">
          THE STORIES THAT STIR YOUR SOUL.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
          <div className="flex flex-col rounded-2xl w-full md:w-1/4 h-auto sm:h-72 md:h-96 text-sm sm:text-base md:text-xl bg-white text-black p-4 sm:p-6 font-medium justify-between">
            <p>
              Elena Brooks is a visual storyteller specializing in candid, editorial, and cinematic photography, based in New York.
              She is passionate about capturing the essence of her subjects and creating timeless images that evoke emotion.
            </p>
            <p className="mt-2 sm:mt-4 self-baseline">About US</p>
          </div>
          <AnimatePresence initial={false}>
            <motion.div
              className="flex flex-col w-full md:w-2/4 rounded-2xl bg-gray-300 p-2 sm:p-4"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,
                minHeight: ['200px', '300px', '400px']
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}