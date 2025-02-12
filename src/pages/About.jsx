import React from "react";
import {  motion, useAnimation } from "framer-motion";

function About({ scrollYProgress }) {

 


  return (
    <div id="about" className="relative md:h-[100vh] h-[120vh] w-full flex flex-col md:flex-row pt-8 md:pt-12 bg-white">
     
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center  space-y-3 md:space-y-8 "
      >
        <div className=" ">
        <h1
          className="text-4xl md:text-6xl md:pl-[20%] px-3 font-extrabold text-gray-900"
        >
          I'm Akshat,<span className="text-amber-600"> a Web Developer</span>
        </h1> 
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed px-3 md:pl-[20%]">
          I'm a <span className="font-semibold">Web Developer</span> with a passion for creating dynamic and responsive web
          applications. I specialize in the <span className="font-semibold">MERN</span> stack, and I love building innovative
          and scalable solutions. My focus is always on delivering high-quality
          user experiences through code that is clean, maintainable, and efficient.
        </p>
        
      </motion.div>

      <motion.div className='flex basis-1/2 mb-8 sm:mt-0 justify-center md:mr-0  h-screen items-center'>
          <img 
            src="bhaya.jpg"
            alt="Akshat"  
            className="rounded-full mt-8 h-80 w-80 md:h-96 md:w-96 object-cover md:mt-0 bg-gradient-to-r from-[#306279] to-[#5791b5]"
          />
      </motion.div>
    </div>
  );
}

export default About;
