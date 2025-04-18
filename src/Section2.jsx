import image1 from './assets/pexels-bentonphotocinema-828380.jpg';
import image2 from './assets/pexels-bess-hamiti-83687-35537.jpg';
import image3 from './assets/pexels-david-bartus-43782-610293.jpg';
import { motion } from 'framer-motion';

export default function Section2() {
  const projects = [
    {
      id: 1,
      image: image1,
      description: 'Capturing Moments',
    },
    {
      id: 2,
      image: image2,
      description: 'Natures Beauty',
    },
    {
      id: 3,
      image: image3,
      description: 'Tools of the Trade',
    },
  ];

  // Typewriter effect for heading
  const headingText = 'MY JOURNEY';
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1, // Stagger each character
        duration: 0.2,
      },
    }),
  };

  // Cursor blink effect
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  // Typewriter effect for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5, // Start after heading animation
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-gray-100 to-white text-black py-16 mt-22"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading with Typewriter Effect */}
        <div className="text-center mb-12 relative">
          <div className="overflow-hidden">
            {headingText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-tight"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: false }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block w-1 h-12 bg-gray-900 ml-2"
              variants={cursorVariants}
              animate="blink"
            />
          </div>
         
        </div>

        {/* Paragraph with Typewriter Effect */}
        <div className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12">
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Beginning her journey in street photography at 20, Elena honed her craft capturing raw emotions in urban settings. With a deep passion for storytelling through light and shadow, she blends a timeless aesthetic with modern dynamism in her editorial and cinematic projects.
          </motion.p>
          <motion.p
            className="mt-4"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: 1.7 }} // Slight delay for second paragraph
          >
            Her work transcends the ordinary, weaving narratives that resonate with authenticity and emotion. Each frame is a testament to her dedication to the art of photography.
          </motion.p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <img
                src={project.image}
                alt={project.description}
                className="w-full h-auto rounded-2xl object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}