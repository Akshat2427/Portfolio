import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cards } from "../components/Cards";

function SlideshowCard({ images = [], titles = [], descriptions = [], techStacks = [], demo = [], github = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden p-4 bg-gray-900 ">

      <div className="relative w-full max-w-md h-[80vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
          
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full flex justify-center"
          >
            <Cards
              img={images[currentIndex]}
              title={titles[currentIndex]}
              description={descriptions[currentIndex]}
              CODE={github[currentIndex]}
              DEMO={demo[currentIndex]}
              className="p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={prevImage}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110 absolute bottom-[45%] sm:bottom-[50%] left-0"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-white focus:outline-none shadow-lg transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </button>
          <button
            onClick={nextImage}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110 absolute bottom-[45%] sm:bottom-[50%] right-0"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-white focus:outline-none shadow-lg transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </button>
        </div>
      </div>
    </div>
  );
}

function Slideshow({ images = [], titles = [], descriptions = [], techStacks = [], demo = [], github = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  if (images.length === 0) return null;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      {isMobileScreen ? (
        <SlideshowCard images={images} titles={titles} descriptions={descriptions} techStacks={techStacks} demo={demo} github={github} />
      ) : (
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden p-4 bg-gray-900">
         

          <div className="relative w-full max-w-4xl h-[70vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg group">
            <AnimatePresence initial={false} custom={direction}>
             
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={titles[currentIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full object-contain rounded-lg"
              />
            </AnimatePresence>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 p-4">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">{titles[currentIndex]}</h2>
              <p className="text-sm sm:text-base md:text-lg mt-2 text-white">{descriptions[currentIndex]}</p>
              <div className="my-4  text-white font-medium py-2 px-4 rounded-lg  flex flex-wrap justify-center items-center space-x-2">
                {techStacks[currentIndex].split(",").map((tech, index) => (
                  <div key={index} className="px-2 py-1 bg-gray-600 rounded-md text-xs sm:text-sm md:text-base">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 text-xs md:text-sm">
                  <a href={demo[currentIndex]} target="_blank" rel="noopener noreferrer">DEMO</a>
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 text-xs md:text-sm">
                  <a href={github[currentIndex]} target="_blank" rel="noopener noreferrer">CODE</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prevImage}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-white focus:outline-none shadow-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
            </button>
            <button
              onClick={nextImage}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-white focus:outline-none shadow-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Slideshow;
