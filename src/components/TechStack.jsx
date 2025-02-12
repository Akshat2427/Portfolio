import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";


// to get icons go to iconscout.com and search for the icon you want , then go to more info and paste the id on "https://cdn.iconscout.com/icon/free/png-512/free-redis-1175105.png?f=webp&w=512",
const divsData = [
  {
    name: "AWS",
    top: "10vh",
    left: "5vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=512",
    width: "100px",
    height: "100px",
  },
  {
    name: "docker",
    top: "45vh",
    left: "25vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-docker-2538317.png?f=webp&w=512",
    width: "140px",
    height: "140px",
  },
  {
    name: "redis",
    top: "10vh",
    left: "90vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-redis-1175105.png?f=webp&w=512",
    width: "130px",
    height: "130px",
  },
  {
    name: "Postgresql",
    top: "20vh",
    left: "25vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-226047.png?f=webp&w=512",
    width: "120px",
    height: "120px",
  },
  {
    name: "js",
    top: "70vh",
    left: "55vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512",
    width: "140px",
    height: "140px",
  },
  {
    name: "react",
    top: "40vh",
    left: "65vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=512",
    width: "160px",
    height: "160px",
  },
  {
    name: "tailwind css",
    top: "50vh",
    left: "80vw",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5bJWWtpVW9sRkpKj_US2okC8wriLa5cwrPwIb_xY8UIhULbI4hfnCiD333diiZunjGw&usqp=CAU",
    width: "180px",
    height: "180px",
  },
  {
    name: "github",
    top: "40vh",
    left: "10vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2496133.png?f=webp&w=512",
    width: "100px",
    height: "100px",
  },
  {
    name: "node",
    top: "70vh",
    left: "35vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226034.png?f=webp&w=512",
    width: "120px",
    height: "120px",
  },
  {
    name: "mongo",
    top: "75vh",
    left: "20vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=512",
    width: "140px",
    height: "140px",
  },
  {
    name: "c++",
    top: "70vh",
    left: "5vw",
    image: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    width: "160px",
    height: "160px",
  },
  {
    name: "java",
    top: "10vh",
    left: "45vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225997.png?f=webp&w=512",
    width: "180px",
    height: "180px",
  },
  {
    name: "firebase",
    top: "20vh",
    left: "75vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-firebase-1-282796.png?f=webp&w=512",
    width: "150px",
    height: "150px",
  },
];
const divsDataMobile = [
  {
    name: "AWS",
    top: "10vh",
    left: "5vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=512",
    width: "80px",
    height: "80px",
  },
  {
    name: "Postgresql",
    top: "25vh",
    left: "45vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-226047.png?f=webp&w=512",
    width: "70px",
    height: "70px",
  },
  {
    name: "js",
    top: "80vh",
    left: "70vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512",
    width: "90px",
    height: "90px",
  },
  {
    name: "react",
    top: "60vh",
    left: "65vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=512",
    width: "100px",
    height: "100px",
  },
  {
    name: "tailwind css",
    top: "60vh",
    left: "20vw",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5bJWWtpVW9sRkpKj_US2okC8wriLa5cwrPwIb_xY8UIhULbI4hfnCiD333diiZunjGw&usqp=CAU",
    width: "70px",
    height: "70px",
  },
  {
    name: "github",
    top: "25vh",
    left: "20vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2496133.png?f=webp&w=512",
    width: "70px",
    height: "70px",
  },
  {
    name: "node",
    top: "70vh",
    left: "35vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226034.png?f=webp&w=512",
    width: "80px",
    height: "80px",
  },
  {
    name: "mongo",
    top: "85vh",
    left: "20vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=512",
    width: "90px",
    height: "90px",
  },
  {
    name: "c++",
    top: "70vh",
    left: "5vw",
    image: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    width: "80px",
    height: "80px",
  },
  {
    name: "java",
    top: "5vh",
    left: "45vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225997.png?f=webp&w=512",
    width: "100px",
    height: "100px",
  },
  {
    name: "firebase",
    top: "20vh",
    left: "75vw",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-firebase-1-282796.png?f=webp&w=512",
    width: "70px",
    height: "70px",
  },
];

function RandomDivs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); // Mobile screen detection
    };
    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white relative h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-black text-5xl font-bold mb-8">My Tech Stack</h1>
      <p className="text-black text-lg mb-8">I've been recently working with</p>

      {isMobileScreen
        ? divsDataMobile.map((div, index) => (
            <motion.div
              ref={ref}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={index}
              className="rounded-full absolute bg-white shadow-2xl border-4 border-white flex justify-center items-center"
              style={{
                width: div.width,
                height: div.height,
                top: div.top,
                left: div.left,
              }}
            >
              <img
                src={div.image}
                alt={div.name}
                className="object-cover rounded-lg"
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
              <span
                className="absolute text-transparent font-bold text-xs text-center p-1 rounded-full w-full h-full flex items-center justify-center 
                hover:text-yellow-300 hover:bg-gray-700 hover:bg-opacity-75 hover:scale-105 hover:shadow-lg 
                transition-transform duration-300"
              >
                {div.name.toUpperCase()}
              </span>
            </motion.div>
          ))
        : divsData.map((div, index) => (
            <motion.div
              ref={ref}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={index}
              className="rounded-full absolute bg-white shadow-2xl border-4 border-white flex justify-center items-center"
              style={{
                width: div.width,
                height: div.height,
                top: div.top,
                left: div.left,
              }}
            >
              <img
                src={div.image}
                alt={div.name}
                className="object-cover rounded-lg"
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
              <span
                className="absolute text-transparent font-bold text-lg p-1 rounded-full w-full h-full flex items-center justify-center 
                hover:text-yellow-300 hover:bg-gray-700 hover:bg-opacity-75 hover:scale-105 hover:shadow-lg 
                transition-transform duration-300"
              >
                {div.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
    </div>
  );
}

export default RandomDivs;
