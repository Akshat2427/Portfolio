import React from "react";
import RandomDivs from "../components/TechStack"; 
import Slideshow from "../components/SlideShow";

function Projects() {
  const images = [
   
    "SplitIt.png",
    "Portfolio.png",
    "ChatSphere.png",
  ];
  const titles = [
   
    "Split It",
    "Portfolio",
    "Chat Sphere",
  ];
  const descriptions = [
    
    "Simplifying Bill Sharing, Empowering Groups to Settle Expenses Seamlessly.",
    "My Portfolio Website",
    "Where Conversations Find Their Circle.",
  ];
  const techStacks = [
    
    "React, Firebase, Context API",
    "React, Tailwind CSS",
    "React, Redux, Socket.io, Express, MongoDB, Firebase",
  ];
  const demo = [
   
    "https://split-it-3.vercel.app/",
    "https://akshat-vashisht-portfolio.vercel.app/",
    "https://chat-sphere-pearl.vercel.app/",
  ];
  const github = [
   
   "https://github.com/Akshat2427/SplitIt",
   "https://github.com/Akshat2427/Portfolio",
   "https://github.com/Akshat2427/ChatSphere",
  ];
  return (
    <div id="projects" className="bg-gray-900 text-white h-[210vh]">
     
      <div>
      <h1 className="text-center text-[50px] font-mono">Projects</h1>

        <Slideshow
          images={images}
          titles={titles}
          descriptions={descriptions}
          techStacks={techStacks}
          demo={demo}
          github={github}
        />
      </div>
      <RandomDivs />
    </div>
  );
}

export default Projects;
