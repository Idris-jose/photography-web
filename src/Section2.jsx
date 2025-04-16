import image1 from './assets/pexels-bentonphotocinema-828380.jpg'
import image2 from './assets/pexels-bess-hamiti-83687-35537.jpg'
import image3 from './assets/pexels-david-bartus-43782-610293.jpg'

export default function Section2(){
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
    return (
        <>
        <section className="bg-gradient-to-b from-gray-100 to-white text-black py-16 mt-22">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-tight">
                MY JOURNEY
              </h2>
              <div className="mt-4 h-1 w-24  mx-auto"></div>
            </div>
            
            {/* Paragraph */}
            <div className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12">
              <p>
                Beginning her journey in street photography at 20, Elena honed her craft capturing raw emotions in urban settings. With a deep passion for storytelling through light and shadow, she blends a timeless aesthetic with modern dynamism in her editorial and cinematic projects.
              </p>
              <p className="mt-4">
                Her work transcends the ordinary, weaving narratives that resonate with authenticity and emotion. Each frame is a testament to her dedication to the art of photography.
              </p>
            </div>
            
            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div className="relative group">
      
      <img
                  src={project.image}
                  alt="Photographer with camera"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{project.description}</p>
                </div>

                </div>

            ))}
              
            </div>
          </div>
        </section>
        </>
    )
}