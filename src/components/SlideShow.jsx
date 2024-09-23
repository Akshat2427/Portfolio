import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Slideshow({ images = [], titles = [], descriptions = [], techStacks = [] , demo = [], github = [] }) {
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
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden p-4 bg-gray-900">
      <div className="relative w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden shadow-lg group">
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
          <h2 className="text-3xl font-bold text-white">{titles[currentIndex]}</h2>
          <p className="text-lg mt-2 text-white">{descriptions[currentIndex]}</p>
          <div className="my-4 bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-md flex justify-between  items-center  ">
            {techStacks[currentIndex].split(",").map((tech, index) => (
            
              <div key={index} className="mr-2 " >
                {tech}
              </div>
            ))

            }
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700">
           <a href={demo[currentIndex]}>DEMO</a>
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700">
            <a href={github[currentIndex]}>CODE</a>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default Slideshow;