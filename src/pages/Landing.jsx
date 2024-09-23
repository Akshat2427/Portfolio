import React from "react";
import { useTransform, motion } from "framer-motion";
import NavBar from "../components/NavBarPersonal";
import { Typewriter } from 'react-simple-typewriter'

function Landing({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        // <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[#0f0f0f]  text-white pb-[10vh]">
        <motion.div  className="sticky top-0 h-screen bg-[#0f0f0f]  text-white pb-[10vh]">  
        <NavBar />
        <span className=" block text-center mt-[30vh] text-[40px]   text-white" style={{fontWeight:"lighter"}} >
        {' '}
      
          <Typewriter
          
            words={[  'Hi' , 'My name is Akshat' , 'I am a developer. ' ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
            
          />
      </span>
      {/* <div className="absolute  left-1/2 bottom-24 transform -translate-x-1/2 text-center w-4 h-4 border-b-2 border-r-2 border-white rotate-45 animate-fade_move_down">
          
        </div> */}
      </motion.div>
    );
    }
    export default Landing;
