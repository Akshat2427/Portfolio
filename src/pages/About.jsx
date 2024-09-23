import React, { useEffect } from "react";
import { useTransform, motion, useAnimation } from "framer-motion";
import { LinkedIn, X, GitHub } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function About({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
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
    <div className="relative h-screen bg-gray-100 flex">
      {/* Left Side */}
      <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
        <h1 className="text-6xl font-bold text-gray-900">
          I'm Akshat, a Web Developer
        </h1>
        <p className="text-lg text-gray-600 mt-5">
        I specialize in building and designing web applications using modern technologies. 
    With expertise in the <span >MERN</span> stack, I enjoy developing dynamic and responsive user interfaces.
    I am passionate about coding, problem-solving, and constantly learning new tools to improve my skill set.
    My goal is to create impactful, scalable solutions that enhance user experience.        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1541777213917-8e6e7149158b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="me"
          className="w-2/3 h-2/3 object-cover rounded-full shadow-lg border-4 border-gray-200"
        />
      </div>
    </div>
  );
}

export default About;
