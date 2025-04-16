import background from './assets/pexels-andre-furtado-43594-1264210.jpg';
import image2 from './assets/pexels-bess-hamiti-83687-35537.jpg'
import image3 from './assets/pexels-david-bartus-43782-610293.jpg'
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
        <div className="mt-10 mb-10 ml-6 mr-6">
            <h1 className="text-center font-display font-extrabold leading-27 text-9xl text-white">FRAMING </h1>
            <p className="text-center text-3xl text-white font-extralight">THE STORIES THAT STIR YOUR SOUL.</p>

            <div className="flex justify-center mt-5 gap-2 ">
                <div className="flex flex-col rounded-2xl w-1/4 h-90 bg-white text-black p-6 font-medium justify-between">
                    <p>Elena Brooks is a visual storyteller specializing in candid, editorial, and cinematic photography, based in New York.
                    She is passionate about capturing the essence of her subjects and creating timeless images that evoke emotion.
                    </p>
                    <p className="mt-5 self-baseline">About US</p>
                </div>
                <AnimatePresence initial={false}>
                <motion.div
                    className="flex flex-col w-2/4 rounded-2xl bg-gray-300 p-4"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                    }}

                >
                    
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Fitness Hub Image ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
                </motion.div>
            </div>
            <hr className="text-[var(--color-text-primary)] text-4xl font-bold uppercase text-center mt-6 "></hr>
        </div>
    </>
);
}