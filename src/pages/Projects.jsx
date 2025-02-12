import React from "react";
import RandomDivs from "../components/TechStack"; 
import Slideshow from "../components/SlideShow";
import ProjectDisplay from "../components/ProjectDisplay";
function Projects() {
  const images = [
   
   
    "PocketPal.png",
    "SplitIt.png",
    "ChatSphere.png",
  ];
  const titles = [
   
    
    "Pocket Pal",
    "Split It",
    "Chat Sphere",
  ];
  const descriptions = [
    
    "A  Expense Tracker for Daily Use  with interactive UI and easy to use features.",
    "Simplifying Bill Sharing, Empowering Groups to Settle Expenses Seamlessly.",
   
    "Where Conversations Find Their Circle.",
  ];
  const techStacks = [
    "React , Redux , MongoDB , Express , Firebase, Tailwind CSS",
    "React, Firebase, Context API",
    
    "React, Redux, Socket.io, Express, MongoDB, Firebase",
  ];
  const demo = [
   "https://akshat-vashisht-portfolio.vercel.app/",
    "https://split-it-3.vercel.app/",
    
    "https://chat-sphere-pearl.vercel.app/",
  ];
  const github = [
    "https://github.com/Akshat2427/Portfolio",
   "https://github.com/Akshat2427/SplitIt",
  
   "https://github.com/Akshat2427/ChatSphere",
  ];
  return (
    <div id="projects" className="bg-gray-900 text-white ">
     
      <div>
      {/* <h1 className="text-center text-[50px] font-mono">Projects</h1> */}

        {/* <Slideshow
          images={images}
          titles={titles}
          descriptions={descriptions}
          techStacks={techStacks}
          demo={demo}
          github={github}
        /> */}
        <ProjectDisplay
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
