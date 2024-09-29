import { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Landing from './pages/Landing';
import About from './pages/About';
import Slideshow from './components/SlideShow';
import Lenis from 'lenis';
import Projects from './pages/Projects';
import './App.css';

function Home() {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const container = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function updateScrollProgress() {
      const progress = lenis.scroll;
      setScrollYProgress(progress);
    }

    function raf(time) {
      lenis.raf(time);
      updateScrollProgress();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress: scrollProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main className="relative h-[200vh] w-full" ref={container}>
        <Landing scrollYProgress={scrollProgress} />  
        <About scrollYProgress={scrollProgress} />
      </main>
      <Projects  />
      <Slideshow />
    </>
  );
}

export default Home;