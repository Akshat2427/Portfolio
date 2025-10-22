import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

function About() {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setIsVisible(true);
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          });
        }
      },
      {
        threshold: 0.4, // Trigger when 40% of the element is visible
        rootMargin: "0px 0px -10% 0px", // Start animation slightly before element is fully in view
      }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  // Scroll-based image animation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={aboutRef}
      id="about"
      className="relative min-h-screen w-full flex flex-col md:flex-row pt-8 md:pt-12 pb-8 md:pb-0 bg-white overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 md:space-y-8 px-6 md:pl-[15%] py-8 md:py-0"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.h1
          variants={textVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          I&apos;m Akshat,
          <motion.span
            className="text-amber-600 inline-block"
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {" "}
            a Web Developer
          </motion.span>
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg"
        >
          I&apos;m a <span className="font-semibold">Web Developer</span> currently
          working at{" "}
          <span className="font-semibold inline-flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://procol.io"
              className="text-amber-600 hover:underline"
            >
              Procol
            </a>
            <motion.img
              src="procol.jpg"
              alt="Procol"
              width={18}
              height={18}
              className="ml-1 inline-block align-middle rounded-full"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </span>
          , with a passion for creating dynamic and responsive web applications.
          I specialize in the{" "}
          <span className="font-semibold">MERN</span> stack and thrive on
          building innovative, scalable solutions. My focus is always on
          delivering high-quality user experiences through clean, maintainable,
          and efficient code.
        </motion.p>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 px-4 md:items-center absolute bottom-[20%] md:relative md:bottom-auto"
        style={{ 
          scale, 
          rotate
        }}
      >
        <motion.div
          className="relative"
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <motion.img
            src="pfp.png"
            alt="Akshat"
            className="mt-8 md:mt-0 h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 object-cover shadow-2xl"
            style={{ 
              objectPosition: "20% center",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
            }}
            animate={isVisible ? {
              opacity: 1,
              scale: 1,
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 70% 30% / 40% 70% 30% 60%",
                "70% 30% 60% 40% / 70% 40% 60% 30%",
                "30% 70% 40% 60% / 30% 60% 40% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            } : {
              opacity: 0,
              scale: 0.8,
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8, 
              ease: "easeOut",
              borderRadius: {
                duration: 8,
                repeat: isVisible ? Infinity : 0,
                ease: "linear"
              }
            }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-amber-600/30"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
            }}
            animate={isVisible ? {
              rotate: [0, 360],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 70% 30% / 40% 70% 30% 60%",
                "70% 30% 60% 40% / 70% 40% 60% 30%",
                "30% 70% 40% 60% / 30% 60% 40% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            } : {
              rotate: 0,
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
            }}
            transition={{
              rotate: {
                repeat: isVisible ? Infinity : 0,
                duration: 10,
                ease: "linear",
              },
              borderRadius: {
                duration: 8,
                repeat: isVisible ? Infinity : 0,
                ease: "linear"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
