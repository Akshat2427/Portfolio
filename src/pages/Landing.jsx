import React, { useState, useEffect } from "react";
import { useTransform, motion } from "framer-motion";
import NavBar from "../components/NavBarPersonal";
import { Typewriter } from 'react-simple-typewriter'
import DotRing from "../components/DotRing";
import RotateText from "../components/RotateText";

function Landing({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const [isLaptopOrTab, setIsLaptopOrTab] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopOrTab(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="sticky top-0 h-screen bg-[#0f0f0f] text-white pb-[10vh]"
      style={isLaptopOrTab ? { scale: scale, rotate: rotate } : {}}
    >
      <motion.div id="Landing" className="sticky top-0 h-screen bg-[#0f0f0f] text-white pb-[10vh] font-extralight">
        <NavBar />
        <DotRing />
        <span className="block font-extralight text-center mt-[22vh] text-[40px] text-white">
          <Typewriter
            words={['Hi', 'My name is Akshat', 'I am a developer. ']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        {isLaptopOrTab && (
          <div className="rotater">
            <RotateText />
          </div>
        )}
        <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 text-center w-4 h-4 border-b-2 border-r-2 border-white rotate-45 animate-blink"></div>
      </motion.div>
    </motion.div>
  );
}

export default Landing;