import React, { useEffect } from "react";
import { useTransform, motion, useAnimation } from "framer-motion";

function About({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // Added smooth opacity transition
  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value > 0.2) {
        controls.start("animate");
      } else {
        controls.start("initial");
      }
    });
  }, [scrollYProgress, controls]);

  return (
    <div className="relative md:h-[100vh] h-[120vh] w-full flex flex-col md:flex-row pt-8 md:pt-12 bg-white">
      {/* Left Side - About Text */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center  space-y-3 md:space-y-8 "
      >
        <div className=" ">
        <h1
          className="text-4xl md:text-6xl md:pl-[20%] px-3 font-extrabold text-gray-900"
          style={{ scale, rotate, opacity }} // scale, rotate and opacity based on scroll progress
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
        {/* Resume Button */}
        <motion.a
          href="/path/to/your/resume.pdf" // Replace with the actual link to your resume
          className="bg-amber-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-amber-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
         Resume
        </motion.a>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div className='flex basis-1/2 mb-8 sm:mt-0 justify-center md:mr-0  h-screen items-center'>
          <img 
            src="https://images.unsplash.com/photo-1541777213917-8e6e7149158b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Akshat"  
            className="rounded-full mt-8 h-80 w-80 md:h-96 md:w-96 object-cover md:mt-0 bg-gradient-to-r from-[#306279] to-[#5791b5]"
          />
      </motion.div>
    </div>
  );
}

export default About;
