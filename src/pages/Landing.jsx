import React  from "react";
import { useTransform, motion } from "framer-motion";
import NavBar from "../components/NavBarPersonal";
import { Typewriter } from 'react-simple-typewriter'
import DotRing from "../components/DotRing";
import RotateText from "../components/RotateText";
function Landing({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const isLaptop = window.innerWidth >= 1024;
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    const text = "GORGO-strony-internetowe-";

    const Letter = text.split("");
    return (
<motion.div 
  className="sticky top-0 h-screen bg-[#0f0f0f] text-white pb-[10vh] "
  style={isLaptop ? { scale: scale, rotate: rotate } : {}}
>        <motion.div id="Landing" className="sticky top-0  h-screen bg-[#0f0f0f]  text-white pb-[10vh] font-extralight">  
       
          
          <NavBar
             
             />
            <DotRing/>
            <span className=" block font-extralight  text-center mt-[22vh] text-[40px]    text-white" s >
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
        <div className="rotater">
          <RotateText/>
          
        </div>
        {/* <div className="h-24 w-24 rounded-full bg-white flex justify-center items-center text-black absolute right-4 bottom-4 font-mono font-extrabold ">
          <span>Resume</span>
        </div> */}
          <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 text-center w-4 h-4 border-b-2 border-r-2 border-white rotate-45 animate-blink">
</div>

        </motion.div>
        </motion.div>
    );
    }
    export default Landing;
