import React, { memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Assuming images are optimized and converted to WebP format
import img1 from './assets/pexels-hellojoshwithers-27063874.jpg';
import img2 from './assets/pexels-javier-ledo-1524361034-29156457.jpg';
import img3 from './assets/pexels-jing-zhan-1250761192-27667227.jpg';
import img4 from './assets/pexels-pixabay-159862.jpg';
import img5 from './assets/pexels-alina-rossoshanska-338724645-29319275.jpg';
import img6 from './assets/pexels-anastasia-shuraeva-4945518.jpg';
import img7 from './assets/pexels-allan-rodrigo-2884836-4415057.jpg';

// Reusable Tailwind class for image containers
const imageContainerClass = 'rounded-lg overflow-hidden';

// Image data array for cleaner mapping
const images = [
  { src: img1, alt: 'Road', className: 'col-span-1 row-span-1' },
  { src: img2, alt: 'Person', className: 'col-span-1 row-span-1' },
  { src: img3, alt: 'Living Room', className: 'col-span-2 row-span-1' },
  { src: img4, alt: 'Desk', className: 'col-span-2 row-span-1' },
  { src: img5, alt: 'Sculpture', className: 'col-span-1 row-span-1', bg: 'bg-amber-400' },
  { src: img6, alt: 'Sculpture', className: 'col-span-1 row-span-1', bg: 'bg-amber-400' },
  { src: img7, alt: 'Sculpture', className: 'col-span-4 row-span-2', bg: 'bg-amber-400' },
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-b from-gray-100 to-white text-black py-16 mt-22"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-center font-extrabold text-5xl md:text-7xl lg:text-9xl mb-12 tracking-tight">
        PROJECTS
      </h1>
      <div className="min-h-screen bg-beige-100 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full h-200">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${imageContainerClass} ${image.className} ${image.bg || ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Section4);