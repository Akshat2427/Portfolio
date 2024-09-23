import React from "react";
import ProjectLayout from "../components/ProjectLayout"; 
import RandomDivs from "../components/TechStack"; 
import Slideshow from "../components/SlideShow";

function Projects() {
  const images = [
    "ChatSphere.png",
    "SplitIt.png",
    "Portfolio.png",
    
  ];
  const titles = [
    "Chat Sphere",
    "Split It",
    "Portfolio",
  ];
  const descriptions = [
    "Where Conversations Flow, Connections Grow, and Every Message Matters.",
    "Simplifying Bill Sharing, Empowering Groups to Settle Expenses Seamlessly.",
    "My Portfolio Website"
  ];
  const techStacks = [
    "React, Redux, Socket.io, Express, MongoDB",
    "React, Firebase, Context API",
    "React, Tailwind CSS",
  ];
  const demo = [
    "https://split-it-3.vercel.app/",
    "https://split-it-3.vercel.app/",
    "https://split-it-3.vercel.app/",
  ];
  const github = [
   "https://github.com/Akshat2427/SplitIt",
   "https://github.com/Akshat2427/SplitIt",
   "https://github.com/Akshat2427/SplitIt",
  ];
  return (
    <div className="bg-[#0f0f0f] text-white h-screen">
     
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
