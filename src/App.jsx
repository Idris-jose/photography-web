import { motion } from 'framer-motion';
import Header from './Header.jsx';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Footer from './footer.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Chatbase script logic with corrected parameter name
    (function () {
      if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === 'q') {
              return target.q;
            }
            return (...args) => target(prop, ...args);
          },
        });
      }
      const onLoad = function () {
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.id = 'yNt7xAyTZeNbbKCqMOe5G';
        script.domain = 'www.chatbase.co';
        document.body.appendChild(script);
      };
      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
        // Cleanup event listener on unmount
        return () => window.removeEventListener('load', onLoad);
      }
    })();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <Header />
      <Section1 />
      <div id="bio">
        <Section2 />
      </div>
      <div id="portfolio">
        <Section3 />
      </div>
      <div id="works">
        <Section4 />
      </div>
      <div id="reach">
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;